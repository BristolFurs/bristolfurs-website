const markdownIt = require("markdown-it")

module.exports = function (content) {
  const md = new markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  })
  return md.render(content)
}
