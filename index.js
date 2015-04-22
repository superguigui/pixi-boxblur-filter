var AbstractFilter = require('pixi.js/src/core').AbstractFilter;
var fs = require('fs');

function BoxBlurFilter(delta, width, height) {
  delta = delta || 2.0;
  width = width || window.innerWidth;
  height = height || window.innerHeight;

  AbstractFilter.call(this,
    null,
    fs.readFileSync(__dirname + '/BoxBlur.frag', 'utf8'),
    {
      delta: {
        type: 'v2',
        value: {
          x: delta,
          y: delta
        }
      },
      resolution: {
        type: 'v2',
        value: {
          x: width,
          y: height
        }
      },
    }
  );
}

BoxBlurFilter.prototype = Object.create(AbstractFilter.prototype);
BoxBlurFilter.prototype.constructor = BoxBlurFilter;
module.exports = BoxBlurFilter;

BoxBlurFilter.prototype.applyFilter = function(renderer, input, output) {
  var filterManager = renderer.filterManager;
  var shader = this.getShader(renderer);
  filterManager.applyFilter(shader, input, output);
};

Object.defineProperties(BoxBlurFilter.prototype, {
  deltaX: {
    get: function() {
      return this.uniforms.delta.value.x;
    },
    set: function(value) {
      this.uniforms.delta.value.x = value;
    }
  },
  deltaY: {
    get: function() {
      return this.uniforms.delta.value.y;
    },
    set: function(value) {
      this.uniforms.delta.value.y = value;
    }
  },
  delta: {
    get: function() {
      return (this.deltaX + this.deltaY) * 0.5;
    },
    set: function(value) {
      this.deltaX = value;
      this.deltaY = value;
    }
  }
});