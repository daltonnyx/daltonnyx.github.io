/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// Initinize Canvas Object
const canvas = new fabric.Canvas("frame", {
    hoverCursor: 'pointer',
    selection: false
});
var patternSourceCanvas = new fabric.StaticCanvas();

var frame, framepoly, frameimage;

fabric.Image.fromURL('frames/saturdy.png', img => {
    frame = img;
    frame.scaleToHeight(canvas.getHeight());
    canvas.setWidth(frame.getWidth());
    canvas.setOverlayImage(frame, canvas.renderAll.bind(canvas));
});

var upload = document.getElementById('upload');

upload.addEventListener('change', handleFileChanged, false);

function handleFileChanged(evt) {
    var image = evt.target.files[0];
    if (!image.type.match('image.*')) {
        alert('Not an image!');
        return;
    }
    reader.readAsDataURL(image);
}
//Read file and add to canvas
var reader = new FileReader();

reader.addEventListener('load', file => {
    if (!fabric) {
        alert('cannot load Fabric');
    }
    if (!canvas) {
        alert("canvas is not loaded");
    }
    fabric.Image.fromURL(reader.result, img => {
        frameimage = img;
        frameimage.scaleToHeight(canvas.getHeight());
        frameimage.initialScale = frameimage.getScaleY();
        canvas.remove(canvas._objects[0]);
        canvas.add(frameimage);
        canvas.renderAll();
    });
}, false);

var zoom = document.getElementById('zoom');

zoom.addEventListener('change', zoomChangeHandler, false);

function zoomChangeHandler(evt) {
    var zoomValue = evt.target.value;
    var currentObject = canvas._objects[0];
    currentObject.scale(zoomValue / 100 * currentObject.initialScale);
    canvas.renderAll();
}

window.addEventListener('mousewheel', mouseWheelZoomHandler, false);
window.addEventListener('DOMMouseScroll', mouseWheelZoomHandler, false);

function mouseWheelZoomHandler(evt) {
    if (evt.target.nodeName != 'CANVAS') return;
    if (evt.wheelDelta > 0 || evt.detail > 0) {
        if (zoom.value < 200) {
            zoom.value = parseInt(zoom.value) + 10;
        }
    } else {
        if (zoom.value > 10) {
            zoom.value -= 10;
        }
    }
    var changeEvent = document.createEvent('HTMLEvents');
    changeEvent.initEvent('change', true, true);
    zoom.dispatchEvent(changeEvent);
};

var saveButton = document.getElementById('save');

saveButton.addEventListener('click', evt => {
    evt.preventDefault();
    var dataURL = canvas.toDataURL({
        format: 'png'
    });
    var downloadAnchor = document.createElement('A');
    downloadAnchor.download = "image-frame.png";
    downloadAnchor.href = dataURL;
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
}, false);

/***/ })
/******/ ]);