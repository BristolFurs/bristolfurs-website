const paths = require("./tasks/paths")

// Build tasks
const { compileSass } = require("./tasks/compile-sass")

// Eleventy plugins
const pluginDirectoryLogging = require("@11ty/eleventy-plugin-directory-output")
const pluginSvgContents = require("eleventy-plugin-svg-contents")
const pluginTableOfContents = require("eleventy-plugin-toc")

// Markdown parser and plugins
const markdownIt = require("markdown-it")
const markdownItAnchorPlugin = require("markdown-it-anchor")
const markdownItAttributesPlugin = require("markdown-it-attrs")

// Custom shortcodes
const shortcodeFAQ = require("./app/shortcodes/faq")
const shortcodeIcon = require("./app/shortcodes/icon")
const shortcodeImage = require("./app/shortcodes/image")
const shortcodeMarkdown = require("./app/shortcodes/markdown")

// Custom filters
const filterCachebust = require("./app/filters/cachebust")
const filterFormatDate = require("./app/filters/formatDate")

module.exports = function (config) {
  // Turn off default log output
  // config.setQuietMode(true)

  // Eleventy plugins
  config.addPlugin(pluginDirectoryLogging)
  config.addPlugin(pluginSvgContents)
  config.addPlugin(pluginTableOfContents, {
    tags: ["h2"],
    wrapper: "div",
    wrapperClass: "bf-toc",
  })

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

  // Watch and compile Sass files
  config.addWatchTarget(paths.srcAssets + "/**/*.scss")
  config.on("beforeBuild", compileSass)

  // Watch and reload on JS file changes
  config.addWatchTarget(paths.srcAssets + "/**/*.mjs")

  // Copy over static assets
  config.addPassthroughCopy(paths.srcAssets + "/icons")
  config.addPassthroughCopy(paths.srcAssets + "/images")
  config.addPassthroughCopy(paths.srcAssets + "/all.mjs")
  config.addPassthroughCopy(paths.srcAssets + "/javascript")

  // Custom shortcodes
  config.addPairedShortcode("faq", shortcodeFAQ)
  config.addShortcode("icon", shortcodeIcon)
  config.addShortcode("image", shortcodeImage)
  config.addPairedShortcode("markdown", shortcodeMarkdown)

  // Custom filters
  config.addFilter("cachebust", filterCachebust)
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
