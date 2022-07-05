const { alias } = require("react-app-rewire-alias")

module.exports = function override(config) {
	alias({
		"@components": "src/components",
		"@views": "src/views",
		"@assets": "src/assets",
		"@css": "src/css"
	})(config)

	return config
}