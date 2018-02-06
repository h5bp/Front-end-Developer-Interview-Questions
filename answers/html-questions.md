# HTML Questions

#### What does a `doctype` do?

It specifies which markup standard the page is using. With the information, the
browser determines how to render the page according to the page's source code.

#### What's the difference between standards mode and quirks mode?

They are modes used by browser rendering engines. In the standards mode, the
engine will render a page as HTML and CSS specifications specify. The quirks
mode is to render legacy pages written before these standards are fixed. The
legacy pages contain non-standard behaviours emulated in old browsers such as
Internet Explorer 5 or Navigator 4.

We can enforce browsers to use standards mode with a `<!DOCTYPE html>` tag.

#### What's the difference between HTML and XHTML?

*Not answered yet*

#### Are there any problems with serving pages as `application/xhtml+xml`?

IE < 8 will show a download dialog for the pages, instead of rendering them
properly.

#### How do you serve a page with content in multiple languages?

Use `lang` (or `xml:lang` for XHTML) in tags. Also metadata and
`Content-Language` HTTP header can be used.

#### What kind of things must you be wary of when design or developing for multilingual sites?

- `hreflang` attr in link
- `dir` attr indicating language direction, such as `rtl`
- `<meta charset='UTF-8'>`
- `font-size` for `:lang({language_code})` selectors in CSS
- difference in word langth for each language

#### What are `data-` attributes good for?

It makes HTML elements contain extra information without using non-standard
attributes, or other hacks like that.

#### Consider HTML5 as an open web platform. What are the building blocks of HTML5?

*Not answered yet*

#### Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.

*Not answered yet*

#### Describe the difference between `<script>`, `<script async>` and `<script defer>`.

- `<script>` stops rendering process, and download and run a script.
- `<script async>` don't stop rendering process while asynchronously
  downloading a script. When finishing download, it stops rendering and runs the
  script.
- `<script defer>` don't stop rendering process while asynchronously
  downloading a script. When finishing rendering, it runs the script.

#### Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?

*Not answered yet*

#### What is progressive rendering?

When a HTTP response is flushed multiple times, a browser doesn't wait until
the whole content is loaded and renders each part earlier.

#### Have you used different HTML templating languages before?

Yes. Jinja2 and Django template language in Python. Jade and EJS in JavaScript.
Some more in other languages.
