# pixi-boxblur-filter

Pixi.js (>v3) BoxBlur filter ported from Wagner.js

[demo](http://superguigui.github.io/pixi-boxblur-filter)


## Usage
It's respecting PIXI.js model for loading shader with 'brfs' as a 'browserify' transform.
For a browserify setup example working with brfs check the demo folder.


## Example

```javascript
var BoxBlurFilter = require('BoxBlurFilter');

var boxBlurFilter = new BoxBlurFilter(2, window.innerWidth, window.innerHeight);
pixiContainer.filters = [boxBlurFilter];
```