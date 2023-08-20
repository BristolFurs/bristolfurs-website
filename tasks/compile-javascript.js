const paths = require("./paths")

const { rollup } = require("rollup")
const commonjs = require("@rollup/plugin-commonjs")
const { terser } = require("rollup-plugin-terser")

const compileJavascript = async function () {
  let bundle
  try {
    bundle = await rollup({
      input: paths.srcAssets + "/all.mjs",
      plugins: [commonjs()],
    })
    const { output } = await bundle.write({
      format: "iife",
      name: "BristolFurs",
      file: paths.outputAssets + "/all.js",
      plugins: [terser()],
    })
  } catch (error) {
    console.error(error)
  }
  if (bundle) {
    // closes the bundle
    await bundle.close()
  }
}

module.exports = {
  compileJavascript,
}
