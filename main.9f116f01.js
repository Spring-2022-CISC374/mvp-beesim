parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FNBj":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"E66h":[function(require,module,exports) {
var define;
var process = require("process");
var global = arguments[3];
},{"process":"FNBj"}],"QDbn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("phaser"));function t(e){return e&&e.__esModule?e:{default:e}}var r=new e.default.Events.EventEmitter,u=r;exports.default=u;
},{"phaser":"E66h"}],"pEUU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("phaser")),t=i(require("~/classes/eventCenter"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,i){return t&&o(e.prototype,t),i&&o(e,i),e}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=d();return function(){var i,a=p(e);if(t){var s=p(this).constructor;i=Reflect.construct(a,arguments,s)}else i=a.apply(this,arguments);return u(this,i)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f,y,m=!0,g=function(i){n(o,e.default.Scene);var a=c(o);function o(){var e;return s(this,o),(e=a.call(this,"game")).bigfatarr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e.health=3,e.isGrounded=!0,e.score=0,e.stamina=100,e}return r(o,[{key:"init",value:function(){this.keys=this.input.keyboard.createCursorKeys(),this.flowerGroup=this.add.group(),this.scene.launch("UIScene")}},{key:"preload",value:function(){this.load.spritesheet("bee","assets/cropped_bees.png",{frameWidth:130,frameHeight:118}),this.load.image("mountain-close","assets/mountain-close.png"),this.load.image("mountain-far","assets/mountain-far.png"),this.load.image("flower","assets/flower-tile.png"),this.load.image("tiles","assets/world_tiles.png"),this.load.tilemapTiledJSON("tilemap","assets/map.json"),this.load.image("bear","assets/bear.png"),this.load.image("sky","assets/sky.png"),this.load.image("clouds-white","assets/clouds-white.png"),this.load.image("clouds-white-small","assets/clouds-white-small.png")}},{key:"findcoords",value:function(e){for(var t=0;t<25;t++)for(var i=0;i<100;i++)1===e[100*t+i]&&this.flowerGroup.add(this.physics.add.sprite(21*i,21*t+10,"flower").setDepth(49))}},{key:"create",value:function(){var e=this,t=this.scale,i=t.width,a=t.height;this.createPlayerAnims();var s=this.make.tilemap({key:"tilemap"}),o=s.addTilesetImage("grass-world","tiles"),r=s.createLayer("ground",o);r.setCollisionByProperty({collides:!0}),r.setDepth(49),s.getObjectLayer("objects").objects.forEach(function(t){var i=t.x,a=t.y;switch(t.name){case"player-spawn":e.player=e.generatePlayer(i,a),e.player.setDepth(50)}}),this.findcoords(this.bigfatarr),this.physics.add.overlap(this.player,this.flowerGroup,this.collectFlower,void 0,this),this.physics.add.collider(this.player,r,this.regroundPlayer,void 0,this),this.cameras.main.startFollow(this.player),this.cameras.main.setZoom(5);function n(e,t,s){return[e,s.add.image(.5*i-e.displayWidth,.5*a,t).setDepth(e.depth).setScrollFactor(e.scrollFactorX,e.scrollFactorY).setScale(e.scale),s.add.image(.5*i+e.displayWidth,.5*a,t).setDepth(e.depth).setScrollFactor(e.scrollFactorX,e.scrollFactorY).setScale(e.scale)]}this.add.image(.5*i,.5*a,"sky").setDepth(0).setOrigin(.5,1),n(this.add.image(.5*i,.5*a,"mountain-close").setDepth(4).setScrollFactor(.09,.12).setScale(.2),"mountain-close",this),n(this.add.image(.5*i,.5*a,"mountain-far").setDepth(2).setScrollFactor(.07,.1).setScale(.2),"mountain-far",this);f=this.add.tileSprite(.5*i,.5*a,2100,1575,"clouds-white").setDepth(3).setScrollFactor(.1),y=this.add.tileSprite(.5*i,.5*a,2100,1575,"clouds-white-small").setDepth(1).setScrollFactor(0),this.scene.launch("ui-scene",{controller:this})}},{key:"collectFlower",value:function(e,i){1==i.alpha&&(console.log("flower collected"),i.alpha=.65,this.score++,t.default.emit("update-score-counter",this.score))}},{key:"regroundPlayer",value:function(e,t){e.body.deltaY()>0&&(this.isGrounded=!0)}},{key:"generatePlayer",value:function(e,t){var i=this.physics.add.sprite(e,t,"bee");return i.setBounce(0),i.setGravityY(250),i.setScale(.2),i.setCollideWorldBounds(!0),i.setMaxVelocity(250),i.play("player-idle"),i}},{key:"createPlayerAnims",value:function(){this.anims.create({key:"player-idle",frames:[{key:"bee",frame:3}]}),this.anims.create({key:"player-walking",frames:this.anims.generateFrameNumbers("bee",{frames:[1,2,3,2,1]}),frameRate:10,repeat:1}),this.anims.create({key:"player-flying",frames:this.anims.generateFrameNumbers("bee",{start:0,end:7}),frameRate:10,repeat:1})}},{key:"loseStamina",value:function(){this.stamina>=.2&&m&&(this.stamina-=1,t.default.emit("update-stamina",this.stamina))}},{key:"recoverStamina",value:function(){this.stamina<=99.8&&m&&(this.stamina+=2,t.default.emit("update-stamina",this.stamina))}},{key:"beeController",value:function(e,t){var i,a,s,o,r,n;e&&t&&(this.isGrounded?((null===(i=e.left)||void 0===i?void 0:i.isDown)?(t.flipX=!1,t.setVelocityX(-100),t.anims.play("player-walking",!0)):(null===(a=e.right)||void 0===a?void 0:a.isDown)?(t.flipX=!0,t.setVelocityX(100),t.anims.play("player-walking",!0)):(t.setVelocityX(0),t.setAccelerationX(0),t.anims.play("player-idle")),(null===(s=e.up)||void 0===s?void 0:s.isDown)?(this.loseStamina(),this.isGrounded=!1,t.setVelocityY(-120)):t.setAccelerationY(100)):((null===(o=e.left)||void 0===o?void 0:o.isDown)?(t.flipX=!1,t.setAccelerationX(-200),t.anims.play("player-flying",!0)):(null===(r=e.right)||void 0===r?void 0:r.isDown)?(t.flipX=!0,t.setAccelerationX(200),t.anims.play("player-flying",!0)):(t.setAccelerationX(0),t.anims.play("player-flying",!0)),(null===(n=e.up)||void 0===n?void 0:n.isDown)&&this.stamina>.05?(this.isGrounded=!1,t.setAccelerationY(-500),this.loseStamina()):t.setAccelerationY(0)),this.isGrounded&&this.recoverStamina())}},{key:"handleHitEnemy",value:function(e,t){this.canTakeDamage&&(this.health>0?(this.health--,this.hearts[this.health].setFrame(2),this.canTakeDamage=!1,this.knockback(this.player,this.enemy),this.canTakeDamage=!0):this.scene.start("GameOverScene"))}},{key:"knockback",value:function(e,t){var i=e.body.position.x-t.body.position.x,a=e.body.position.y-t.body.position.y,s=Math.sqrt(i*i+a*a),o=i/s,r=a/s;null==e||e.setVelocity(500*o,500*r)}},{key:"update",value:function(){this.beeController(this.keys,this.player),f.tilePositionX+=.5,y.tilePositionX+=.2}}]),o}();exports.default=g;
},{"phaser":"E66h","~/classes/eventCenter":"QDbn"}],"fOS8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=a(require("phaser")),e=a(require("../classes/eventCenter"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=h();return function(){var a,r=f(t);if(e){var i=f(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return u(this,a)}}function u(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(a){s(n,t.default.Scene);var r=c(n);function n(){var t;return i(this,n),(t=r.call(this,"ui-scene")).maxBarWidth=750,t.hearts=[],t}return o(n,[{key:"init",value:function(){console.log("its UI time")}},{key:"preload",value:function(){this.load.image("left-shadow-cap","assets/barHorizontal_shadow_left.png"),this.load.image("middle-shadow","assets/barHorizontal_shadow_mid.png"),this.load.image("right-shadow-cap","assets/barHorizontal_shadow_right.png"),this.load.image("left-green-cap","assets/barHorizontal_green_left.png"),this.load.image("middle-green","assets/barHorizontal_green_mid.png"),this.load.image("right-green-cap","assets/barHorizontal_green_right.png"),this.load.image("flowercounter","assets/flower-counter.png"),this.load.spritesheet("heart","assets/hearts.png",{frameWidth:300,frameHeight:300})}},{key:"create",value:function(){var t=this.scale,a=t.width,r=t.height,i=this.makeFlowerCounter(1930,130,.5);this.scoreText=this.add.text(i.x-60,i.y,"0",{color:"black",resolution:18}).setOrigin(.4,.5).setScale(5).setScrollFactor(0),e.default.on("update-score-counter",this.updateScore,this),this.staminaBar=this.createStaminaBar(55,100,this.maxBarWidth,3.5),e.default.on("update-stamina",this.updateStamina,this),this.hearts=this.createHearts(70,225),this.cameras.main.centerOn(.5*a,.5*r)}},{key:"createStaminaBar",value:function(t,e,a,r){var i=this.add.image(t,e,"left-shadow-cap").setOrigin(0,.5).setScale(r),n=this.add.image(i.x+i.displayWidth,e,"middle-shadow").setOrigin(0,.5).setScale(r);n.displayWidth=a,this.add.image(n.x+n.displayWidth,e,"right-shadow-cap").setOrigin(0,.5).setScale(r);var o=this.add.image(t,e,"left-green-cap").setOrigin(0,.5).setScale(r),s=this.add.image(o.x+o.displayWidth,e,"middle-green").setOrigin(0,.5).setScale(r);s.displayWidth=a;var l=this.add.image(s.x+s.displayWidth,e,"right-green-cap").setOrigin(0,.5).setScale(r);return this.add.text(.5*(s.x+s.displayWidth),s.y,"Flight Stamina",{color:"black",fontStyle:"Verdana",resolution:18}).setOrigin(.4,.5).setScale(5).setScrollFactor(0),[o,s,l]}},{key:"makeFlowerCounter",value:function(t,e,a){return this.add.image(t,e,"flowercounter").setScale(a).setScrollFactor(0)}},{key:"updateStamina",value:function(t){var e=this.maxBarWidth*(.01*t);this.staminaBar[1].displayWidth=e,this.staminaBar[2].x=this.staminaBar[1].x+this.staminaBar[1].displayWidth,console.log("stamina updated")}},{key:"updateScore",value:function(t){this.scoreText.text=t.toString()}},{key:"createHearts",value:function(t,e){var a=this.add.sprite(t,e,"heart").setScale(.4).setOrigin(0,.5).setScrollFactor(0),r=this.add.sprite(a.x+a.displayWidth+15,e,"heart").setScale(.4).setOrigin(0,.5).setScrollFactor(0);return[a,r,this.add.sprite(r.x+r.displayWidth+15,e,"heart").setScale(.4).setOrigin(0,.5).setScrollFactor(0)]}}]),n}();exports.default=p;
},{"phaser":"E66h","../classes/eventCenter":"QDbn"}],"azfO":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=a();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}function i(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?f(t):n}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(e){o(u,Phaser.Scene);var n=c(u);function u(){return t(this,u),n.call(this,{key:"GameOverScene"})}return r(u,[{key:"preload",value:function(){this.load.image("gameover","assets/gameover.png")}},{key:"create",value:function(){this.add.sprite(0,0,"gameover").setOrigin(0,0)}}]),u}(),p=s;exports.default=p;
},{}],"ZCfc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("phaser")),a=u(require("./scenes/Game")),r=u(require("./scenes/UIScene")),t=u(require("./scenes/GameOverScene"));function u(e){return e&&e.__esModule?e:{default:e}}var d={type:e.default.AUTO,scale:{mode:e.default.Scale.FIT,width:2100,height:1575},physics:{default:"arcade",arcade:{debug:!1}},scene:[a.default,r.default,t.default]},s=new e.default.Game(d);exports.default=s;
},{"phaser":"E66h","./scenes/Game":"pEUU","./scenes/UIScene":"fOS8","./scenes/GameOverScene":"azfO"}]},{},["ZCfc"], null)
//# sourceMappingURL=https://spring-2022-cisc374.github.io/mvp-beesim/main.9f116f01.js.map