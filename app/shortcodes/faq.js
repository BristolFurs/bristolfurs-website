const markdownIt = require("markdown-it")

module.exports = function (content, question) {
  const md = new markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  })
  return `<details class="bf-details">
		<summary class="bf-details__summary bf-heading-s"><span>${md.renderInline(question)}</span></summary>
		<div class="bf-prose">
			${md.render(content)}
		</div>
	</details>`
}
