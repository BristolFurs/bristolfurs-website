const markdownIt = require("markdown-it")

module.exports = function (content, question) {
  const md = new markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  })
  return `<details class="bf-faq">
    <summary class="bf-faq__summary"><h2 class="bf-heading-l bf-link-no-underline">${md.renderInline(
      question
    )}</h2></summary>
    <div class="bf-prose">${md.render(content)}</div>
  </details>`
}
