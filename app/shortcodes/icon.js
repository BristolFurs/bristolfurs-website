import { readFileSync } from "node:fs"

export default function (name) {
  const filePath = `./src/assets/images/icons/${name}.svg`
  const data = readFileSync(filePath, function (err, contents) {
    if (err) return err
    return contents
  })

  return data.toString("utf8")
}
