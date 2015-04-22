# pixi-boxblur-filter

Pixi.js (>v3) BoxBlur filter ported from Wagner.js

## Example

```javascript
var BoxBlurFilter = require('BoxBlurFilter');

var boxBlurFilter = new BoxBlurFilter(2, window.innerWidth, window.innerHeight);
pixiContainer.filters = [boxBlurFilter];
```