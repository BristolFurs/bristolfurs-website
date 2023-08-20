const paths = require("./tasks/paths")

// Build tasks
const { compileSass } = require("./tasks/compile-sass")
const { compileJavascript } = require("./tasks/compile-javascript")

// Eleventy plugins
const loggingPlugin = require("@11ty/eleventy-plugin-directory-output")
const svgContentsPlugin = require("eleventy-plugin-svg-contents")

// Custom shortcodes
const shortcodeIcon = require("./app/shortcodes/icon")

// Custom filters
const filterFormatDate = require("./app/filters/formatDate")

module.exports = function (config) {
  // Turn off default log output
  config.setQuietMode(true)

  // Eleventy plugins
  config.addPlugin(loggingPlugin)
  config.addPlugin(svgContentsPlugin)

  // Ignore files in these directories
  config.ignores.add(paths.srcLayouts)
  config.ignores.add(paths.srcAssets + "/components/**/*")

  // Watch and compile Sass files
  config.addWatchTarget(paths.srcAssets + "/**/*.scss")
  config.addWatchTarget(paths.srcAssets + "/**/*.mjs")
  config.on("beforeBuild", compileSass)
  config.on("beforeBuild", compileJavascript)

  // Copy over static assets
  config.addPassthroughCopy(paths.srcAssets + "/images")

  // Custom shortcodes
  config.addShortcode("icon", shortcodeIcon)

  // Custom filters
  config.addFilter("formatDate", filterFormatDate)

  return {
    markdownTemplateEngine: "njk",
    pathPrefix: "/",
    dir: {
      input: paths.src,
      layouts: paths.srcLayouts,
      includes: paths.srcIncludes,
      output: paths.output,
    },
  }
}
