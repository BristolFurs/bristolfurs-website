const paths = require("./tasks/paths")

const { compileSass } = require("./tasks/compile-sass")

module.exports = function (config) {
	// Set global constants
	config.addGlobalData("siteName", "BristolFurs")
	config.addGlobalData(
		"siteDomain",
		process.env.ENVIRONMENT === "prod" ? "https://idunno.lol" : ""
	)

	// Watch and compile Sass files
	config.addWatchTarget(paths.srcAssets + "/**/*.scss")
	config.on("beforeBuild", compileSass)

	// Copy over static assets
	config.addPassthroughCopy(paths.srcAssets + "/webfont")

	return {
		markdownTemplateEngine: "njk",
		pathPrefix: "/",
		dir: {
			input: paths.src,
			layouts: paths.srcLayouts,
			output: paths.output,
		},
	}
}
