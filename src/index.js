const { join, relative } = require('path')
const generateName = require('css-class-generator')

const CSS_LOADER_MATCH = join('css-loader', 'dist')

const names = {}
let index = 0

const getName = key =>
	Object.prototype.hasOwnProperty.call(names, key)
		? names[key]
		: (names[key] = generateName(index++))

const getKey = ({ rootContext, resourcePath }, name) =>
	`${relative(rootContext, resourcePath).replace(/\\+/g, '/')}#${name}`

const getLocalIdent = (path, _, name) => getName(getKey(path, name))

const webpack = (config, { dev }) => {
	if (dev) return config

	for (const a of config.module.rules)
		if (Array.isArray(a.oneOf))
			for (const b of a.oneOf)
				if (b.sideEffects === false && Array.isArray(b.use))
					for (const c of b.use)
						if (c.loader.includes(CSS_LOADER_MATCH))
							c.options.modules.getLocalIdent = getLocalIdent

	return config
}

module.exports = (nextConfig = {}) => ({
	...nextConfig,
	webpack: (webpackConfig, webpackOptions) =>
		webpack(
			typeof nextConfig.webpack === 'function'
				? nextConfig.webpack(webpackConfig, webpackOptions)
				: webpackConfig,
			webpackOptions
		)
})
