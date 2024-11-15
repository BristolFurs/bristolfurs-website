import paths from "./tasks/paths.js"

// Build tasks
import { compileSass } from "./tasks/compile-sass.js"

// Eleventy plugins
import pluginDirectoryLogging from "@11ty/eleventy-plugin-directory-output"
import pluginSvgContents from "eleventy-plugin-svg-contents"
import pluginTableOfContents from "eleventy-plugin-toc"

// Markdown parser and plugins
import markdownIt from "markdown-it"
import markdownItAnchorPlugin from "markdown-it-anchor"
import markdownItAttributesPlugin from "markdown-it-attrs"

// Custom shortcodes
import shortcodeFAQ from "./app/shortcodes/faq.js"
import shortcodeIcon from "./app/shortcodes/icon.js"
import shortcodeImage from "./app/shortcodes/image.js"
import shortcodeMarkdown from "./app/shortcodes/markdown.js"

// Custom filters
import filterCachebust from "./app/filters/cachebust.js"
import filterFormatDate from "./app/filters/formatDate.js"

export default function (config) {
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
      .use(markdownItAnchorPlugin),
  )

  // Ignore files in these directories
  config.ignores.add(paths.srcLayouts)

  // Watch and compile Sass files
  config.addWatchTarget(paths.srcAssets + "/**/*.scss")
  config.on("beforeBuild", compileSass)

  // Watch and reload on JS file changes
  config.addWatchTarget(paths.srcAssets + "/**/*.mjs")

  // Copy over static assets
  config.addPassthroughCopy(paths.srcAssets + "/fonts")
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
