const fs = require("fs")

module.exports = function (name) {
  const filePath = `./src/assets/images/icons/${name}.svg`
  const data = fs.readFileSync(filePath, function (err, contents) {
    if (err) return err
    return contents
  })

  return data.toString("utf8")
}
