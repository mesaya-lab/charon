const
	path      = require('path'),
	root      = path.resolve(__dirname),
	resources = path.resolve(root, 'resources')

module.exports = {
	entry: resources,
	mode: 'production',
	output: {
		filename: 'charon.js',
		path: path.resolve(root, 'distribution')
	},
	resolve: {
		modules: [resources, path.resolve(root, 'vendor')]
	},
	target: 'node'
}
