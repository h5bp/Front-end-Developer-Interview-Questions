const { DateTime } = require('luxon')
const CleanCSS = require('clean-css')
const UglifyJS = require('uglify-es')
const htmlmin = require('html-minifier')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const markdown = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
}).use(require('markdown-it-anchor'), {
  level: [2],
  permalink: true,
  permalinkBefore: true,
  permalinkSymbol: ''
})

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.setLibrary('md', markdown)

  eleventyConfig.addFilter('cssmin', code => {
    return new CleanCSS({}).minify(code).styles
  })

  eleventyConfig.addFilter('jsmin', (code) => {
    let minified = UglifyJS.minify(code)
    if (minified.error) {
      console.error('UglifyJS error: ', minified.error)
      return code
    }
    return minified.code
  })

  // Minify HTML output
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.indexOf('.html') > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minified
    }
    return content
  })

  eleventyConfig.addFilter('markdownify', str => {
    return markdown.render(str)
  })

  eleventyConfig.addFilter('markdownify_inline', str =>
    markdown.renderInline(str)
  )

  eleventyConfig.addFilter('strip_html', str => {
    return str.replace(/<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g, '')
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('html_date_string', dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-LL-dd')
  })

  eleventyConfig.addFilter('github_permalink', str => {
    return str.replace(/\/index.html/g, '.md')
  })

  eleventyConfig.addFilter('permalink', str => {
    return str.replace(/\.html/g, '')
  })

  eleventyConfig.addPassthroughCopy('src/assets')

  return {
    templateFormats: ['njk', 'md', 'html'],
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site'
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true
  }
}
