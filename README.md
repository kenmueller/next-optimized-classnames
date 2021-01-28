# next-optimized-classnames

> Reduce all CSS classes produced by CSS modules to the smallest form possible

**Classes are only optimized in production builds**

Works with SASS/SCSS/CSS modules

## Install

```bash
npm i next-optimized-classnames
```

## Use

### Standalone

```js
// next.config.js

module.exports = require('next-optimized-classnames')()
```

### With custom configuration

```js
// next.config.js

module.exports = require('next-optimized-classnames')({
	// Custom config
})
```

### With other plugins

```js
// next.config.js

module.exports = require('next-compose-plugins')(
	[
		[require('next-optimized-classnames')]
		// Other plugins
	],
	{
		// Your config
	}
)
```

## Example

### Without `next-optimized-classnames`

```html
<div class="Home_container_x83bc">
	<h1 class="Home_title_x83bc">My website</h1>
	<p class="Home_subtitle_x83bc">This is the BEST website ever!</p>
</div>
```

### With `next-optimized-classnames`

```html
<div class="a">
	<h1 class="b">My website</h1>
	<p class="c">This is the BEST website ever!</p>
</div>
```
