const assert = require('node:assert/strict')
const { execFileSync } = require('node:child_process')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { after, before, test } = require('node:test')
const vm = require('node:vm')

let output

before(() => {
  output = fs.mkdtempSync(path.join(os.tmpdir(), 'interview-site-'))
  execFileSync(process.execPath, [
    path.join(__dirname, '../node_modules/@11ty/eleventy/cmd.cjs'),
    '--config=config/eleventy.config.js',
    '--pathprefix=Front-end-Developer-Interview-Questions/',
    `--output=${output}`,
    '--quiet'
  ], { stdio: 'inherit' })
})

after(() => {
  if (output) fs.rmSync(output, { recursive: true, force: true })
})

function read(file) {
  return fs.readFileSync(path.join(output, file), 'utf8')
}

test('builds the home page with prefixed navigation, styles and assets', () => {
  const html = read('index.html')
  assert.match(html, /<title>Front-end Developer Interview Questions<\/title>/)
  assert.match(html, /href="\/Front-end-Developer-Interview-Questions\/questions\/javascript-questions\/"/)
  assert.match(html, /<style>[^<]+<\/style>/)
  assert.doesNotMatch(html, /<!-- schema.org -->/)
  assert.ok(fs.statSync(path.join(output, 'assets/images/og-image.png')).size > 0)
})

test('preserves question content, heading links and highlighted code', () => {
  const html = read('questions/javascript-questions/index.html')
  assert.match(html, /<title>JavaScript Questions .* Front-end Developer Interview Questions<\/title>/)
  assert.match(html, /<h2 id="coding-questions" tabindex="-1"><a class="header-anchor" href="#coding-questions"><\/a> Coding questions<\/h2>/)
  assert.match(html, /<pre class="language-javascript"><code class="language-javascript"><span class="token function">duplicate<\/span>/)
})

test('renders translations and an unminified sitemap', () => {
  const html = read('translations/arabic/index.html')
  assert.match(html, /<html lang="ar"/)
  assert.match(html, /<body class="rtl">/)
  const sitemap = read('sitemap.xml')
  assert.match(sitemap, /<\?xml version="1.0" encoding="utf-8"\?>/)
  assert.match(sitemap, /<loc>[^<]*\/questions\/javascript-questions\/<\/loc>/)
  assert.match(sitemap, /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/)
})

test('minified navigation script handles clicks and resize', () => {
  const html = read('index.html')
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/gi)]
  const script = scripts.find(([, content]) => content.includes('navigation-toggle'))
  assert.ok(script, 'navigation script is present')

  const handlers = {}
  const operations = []
  const nav = { classList: {
    toggle: name => operations.push(['toggle', name]),
    add: name => operations.push(['add', name]),
    remove: name => operations.push(['remove', name])
  } }
  const document = {
    width: 1200,
    getElementById: id => id === 'navigation' ? nav : {
      addEventListener: (event, handler) => { handlers[event] = handler }
    }
  }
  vm.runInNewContext(script[1], {
    document,
    window: { addEventListener: (event, handler) => { handlers[event] = handler } },
    console: { log() {} },
    setTimeout: callback => callback()
  })

  handlers.click()
  handlers.resize()
  document.width = 600
  handlers.resize()
  assert.deepEqual(operations, [
    ['toggle', 'open'],
    ['remove', 'active'],
    ['add', 'no-motion'],
    ['remove', 'no-motion']
  ])
})
