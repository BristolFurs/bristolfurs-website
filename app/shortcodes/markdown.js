import markdownIt from "markdown-it"

export default function (content) {
  const md = new markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  })
  return md.render(content)
}
