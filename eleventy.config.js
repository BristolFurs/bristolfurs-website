const paths = require("./tasks/paths")

// Build tasks
const { compileSass } = require("./tasks/compile-sass")
const { compileJavascript } = require("./tasks/compile-javascript")

// Eleventy plugins
const loggingPlugin = require("@11ty/eleventy-plugin-directory-output")
const svgContentsPlugin = require("eleventy-plugin-svg-contents")

// Markdown parser and plugins
const markdownIt = require("markdown-it")
const markdownItAnchorPlugin = require("markdown-it-anchor")
const markdownItAttributesPlugin = require("markdown-it-attrs")

// Custom shortcodes
const shortcodeIcon = require("./app/shortcodes/icon")
const shortcodeMarkdown = require("./app/shortcodes/markdown")

// Custom filters
const filterFormatDate = require("./app/filters/formatDate")

module.exports = function (config) {
  // Turn off default log output
  // config.setQuietMode(true)

  // Eleventy plugins
  config.addPlugin(loggingPlugin)
  config.addPlugin(svgContentsPlugin)

  // Markdown-It configuration
  config.setLibrary(
    "md",
    markdownIt({
      html: true,
      linkify: true,
      typographer: true,
    })
      .use(markdownItAttributesPlugin)
      .use(markdownItAnchorPlugin)
  )

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
  config.addPassthroughCopy(paths.src + "/images")

  // Custom shortcodes
  config.addShortcode("icon", shortcodeIcon)
  config.addPairedShortcode("markdown", shortcodeMarkdown)

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
