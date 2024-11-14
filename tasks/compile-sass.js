import paths from "./paths.js"

import { outputFile } from "fs-extra/esm"
import * as sass from "sass"
import postcss from "postcss"
import postcssPresetEnv from "postcss-preset-env"

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
      outputFile(paths.outputAssets + "/styles.css", result.css, (err) => {
        if (err) console.error(err)
        console.log("PostCSS transformations complete.")
        return false
      })
    })

  return true
}

export { compileSass }
