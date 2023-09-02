const paths = require("./paths")

const fs = require("fs-extra")
const sass = require("sass")
const postcss = require("postcss")
const postcssPresetEnv = require("postcss-preset-env")

const compileSass = function () {
  const result = sass.compile(paths.srcAssets + "/styles.scss", {
    sourceMap: true,
    style: "compressed",
  })
  console.log("Sass compiled.")

  let css = result.css.toString()
  postcss([postcssPresetEnv()])
    .process(css, { from: "styles.scss", to: "assets/styles.css" })
    .then((result) => {
      fs.outputFile(paths.outputAssets + "/styles.css", result.css, (err) => {
        if (err) console.error(err)
        console.log("PostCSS transformations complete.")
        return false
      })
    })

  return true
}

module.exports = {
  compileSass,
}
