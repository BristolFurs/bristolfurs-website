const eleventyImg = require("@11ty/eleventy-img")
const paths = require("../../tasks/paths")

module.exports = function (src, alt, credit = "", options = {}) {
  // Throw errors is either required option is missing
  if (!src) {
    console.log(src)
    throw new Error("Image is missing filename.")
  }
  if (alt === undefined) {
    throw new Error(src + ": Image is missing alternative text.")
  }

  // Create options object
  const defaultOptions = {
    class: "",
    decoding: "async",
    loading: "lazy",
    sizes: "auto",
    formats: ["avif", "webp"],
    widths: [320, 550, 768, 1000, 1240],
  }
  options = { ...defaultOptions, ...options }

  // Output string
  let pictureHtml

  // If this is an external image, we ain't processing that
  // Just create some HTML and spit it out
  if (src.substring(0, 7) === "http://" || src.substring(0, 8) === "https://" || src.substring(0, 2) === "//") {
    pictureHtml = `<img ${options.class ? `class="${options.class}" ` : ""}src="${src}" alt="${alt}" loading="${
      options.loading
    }" decoding="${options.decoding}">`
  }

  // Otherwise, proceed with the processing!
  else {
    // Prefix src with the default directory so it doesn't need manually
    // including in every use
    src = `${paths.srcImages}/${src}`

    const generatorOptions = {
      formats: options.formats,
      widths: options.widths,
      urlPath: options.urlPath,
      urlPath: "/images/",
      outputDir: paths.outputImages,
      sharpOptions: {
        animated: true,
      },
    }

    // Generate the images
    eleventyImg(src, generatorOptions)

    // Get metadata of the generated image
    const metadata = eleventyImg.statsSync(src, generatorOptions)

    // Generate the HTML needed to render out these lovely images
    pictureHtml = eleventyImg.generateHTML(metadata, {
      alt,
      decoding: options.decoding,
      loading: options.loading,
      sizes: options.sizes,
    })
  }

  return `<figure class="bf-image${options.class ? ` ${options.class}` : ""}">
    ${pictureHtml}
    ${credit ? `<figcaption class="bf-image__attribution">Credit: ${credit}</figcaption>` : ""}
  </figure>`
}
