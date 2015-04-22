# pixi-boxblur-filter

Pixi.js (>v3) BoxBlur filter ported from Wagner.js

[demo](http://superguigui.github.io/pixi-boxblur-filter)

## Example

```javascript
var BoxBlurFilter = require('BoxBlurFilter');

var boxBlurFilter = new BoxBlurFilter(2, window.innerWidth, window.innerHeight);
pixiContainer.filters = [boxBlurFilter];
```
