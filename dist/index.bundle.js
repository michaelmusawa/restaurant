"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./rubikIso.ttf */ "./src/rubikIso.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./lobster.ttf */ "./src/lobster.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
@font-face {

    font-family: 'MyFont';
  
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('ttf'),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('ttf');
  
    font-weight: 600;
  
    font-style: italic;
  
  }
  
* {
  border: 1px solid black;
}

.nav-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  
}
.home,
.menu,
.info {
  width: 150px;
  height:50px;
  margin-left:3rem;
  border-radius:.4em ;
  background:#fff;
}

img {
  max-width:45%;
  max-height: calc(max-width);
  margin: 20px;
}

h1 {
  font-family: 'MyFont';
  text-align: center;
}

.main {
  display: flex;
}
.ugali_container,
.chapati_container,
.mandazi_container {
  display: flex;
  border: 1px solid grey;
  border-radius: 15px;
  justify-content: center;
  margin: 5px 10px;
  justify-content: space-around;

}

.ugali_img_container,
.mandazi_img_container,
.chapati_img_container {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 5px 10px 5px 5px;
}

.ugali_desc_container,
.chapati_desc_container,
.mandazi_desc_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width:55%;
}


.contact-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.contact-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.contact-info {
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

.contact-form textarea {
  height: 150px;
}

.contact-form button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.contact-address {
  font-style: italic;
  margin-top: 20px;
}

.contact-map {
  height: 300px;
  /* Add any additional styles for the map integration */
}

.sunken {
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
  transform: translateY(2px);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;;IAEI,qBAAqB;;IAErB;yDACkC;;IAElC,gBAAgB;;IAEhB,kBAAkB;;EAEpB;;AAEF;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,WAAW;EACX,YAAY;;AAEd;AACA;;;EAGE,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;AACA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,6BAA6B;;AAE/B;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,wBAAwB;AAC1B;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,SAAS;AACX;;;AAGA;EACE,gBAAgB;EAChB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sDAAsD;AACxD;;AAEA;EACE,8CAA8C;EAC9C,0BAA0B;AAC5B","sourcesContent":["\n@font-face {\n\n    font-family: 'MyFont';\n  \n    src: url('./rubikIso.ttf') format('ttf'),\n    url('./lobster.ttf') format('ttf');\n  \n    font-weight: 600;\n  \n    font-style: italic;\n  \n  }\n  \n* {\n  border: 1px solid black;\n}\n\n.nav-bar {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  height: auto;\n  \n}\n.home,\n.menu,\n.info {\n  width: 150px;\n  height:50px;\n  margin-left:3rem;\n  border-radius:.4em ;\n  background:#fff;\n}\n\nimg {\n  max-width:45%;\n  max-height: calc(max-width);\n  margin: 20px;\n}\n\nh1 {\n  font-family: 'MyFont';\n  text-align: center;\n}\n\n.main {\n  display: flex;\n}\n.ugali_container,\n.chapati_container,\n.mandazi_container {\n  display: flex;\n  border: 1px solid grey;\n  border-radius: 15px;\n  justify-content: center;\n  margin: 5px 10px;\n  justify-content: space-around;\n\n}\n\n.ugali_img_container,\n.mandazi_img_container,\n.chapati_img_container {\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n  margin: 5px 10px 5px 5px;\n}\n\n.ugali_desc_container,\n.chapati_desc_container,\n.mandazi_desc_container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  width:55%;\n}\n\n\n.contact-container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\nh1 {\n  text-align: center;\n  font-size: 24px;\n  margin-bottom: 20px;\n}\n\n.contact-details {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.contact-info {\n  padding: 10px;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n}\n\n.contact-form input,\n.contact-form textarea {\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n\n.contact-form textarea {\n  height: 150px;\n}\n\n.contact-form button {\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n}\n\n.contact-address {\n  font-style: italic;\n  margin-top: 20px;\n}\n\n.contact-map {\n  height: 300px;\n  /* Add any additional styles for the map integration */\n}\n\n.sunken {\n  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);\n  transform: translateY(2px);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info.js */ "./src/info.js");
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page_load.js */ "./src/page_load.js");





function navBar() {
  const navBar = document.createElement('div');
  navBar.classList.add('nav-bar');

  const btnHome = document.createElement('button');
  btnHome.classList.add('home');
  btnHome.innerHTML = 'Home';

  const btnMenu = document.createElement('button');
  btnMenu.classList.add('menu');
  btnMenu.innerHTML = 'Menu';

  const btnInfo = document.createElement('button');
  btnInfo.classList.add('info');
  btnInfo.innerHTML = 'Contact';

  navBar.appendChild(btnHome);
  navBar.appendChild(btnMenu);
  navBar.appendChild(btnInfo);

  document.body.appendChild(navBar);
}

navBar();

const buttons = document.querySelectorAll('.home, .menu, .info');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    clearBody();
    navBar();
    button.classList.add('sunken');

    if (button.classList.contains('home')) {
      (0,_page_load_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    } else if (button.classList.contains('menu')) {
      (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    } else if (button.classList.contains('info')) {
      (0,_info_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
  });
});

function clearBody() {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.lastChild);
  }
}

(0,_page_load_js__WEBPACK_IMPORTED_MODULE_3__["default"])();


/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ info)
/* harmony export */ });
function info() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
  
    const heading = document.createElement('h1');
    heading.innerText = 'Contact Information';
  
    const contactDetails = document.createElement('div');
    contactDetails.classList.add('contact-details');
  
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
  
    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');
  
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Your Name';
  
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Your Email';
  
    const messageTextarea = document.createElement('textarea');
    messageTextarea.placeholder = 'Your Message';
  
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerText = 'Send Message';
  
    contactForm.appendChild(nameInput);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(messageTextarea);
    contactForm.appendChild(submitButton);
  
    const contactMap = document.createElement('div');
    contactMap.classList.add('contact-map');
    // Add code to integrate a map API or embed a map
  
    contactInfo.appendChild(contactForm);
    contactInfo.appendChild(contactMap);
  
    const contactAddress = document.createElement('address');
    contactAddress.innerHTML = '123 Main Street<br>City, Country';
  
    contactDetails.appendChild(contactInfo);
    contactDetails.appendChild(contactAddress);
  
    contactContainer.appendChild(heading);
    contactContainer.appendChild(contactDetails);
  
    document.body.appendChild(contactContainer);
  }
  

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _mandazi_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mandazi.jpeg */ "./src/mandazi.jpeg");
/* harmony import */ var _ugali_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ugali.jpeg */ "./src/ugali.jpeg");
/* harmony import */ var _chapati_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chapati.jpeg */ "./src/chapati.jpeg");





function menu () {
        
    const mandaziContainer = document.createElement('div');
    mandaziContainer.classList.add("mandazi_container");
    const mandazi_img_container = document.createElement('div');
    mandazi_img_container.classList.add("mandazi_img_container");
    const mandazi_desc_container = document.createElement('div');

    const mandazi = document.createElement('img');
    mandazi.src = _mandazi_jpeg__WEBPACK_IMPORTED_MODULE_0__;
    mandazi.alt = 'Mandazi Image';
    mandazi_img_container.appendChild(mandazi);

    const mandaziCaption = document.createElement('p');
    mandaziCaption.innerText = 'Khs.30';
    mandazi_img_container.appendChild(mandaziCaption);

    const head_mandazi = document.createElement ('h4');
    head_mandazi.innerText='Mandazi ';
    mandazi_desc_container.appendChild(head_mandazi);

    const desc_mandazi = document.createElement('p');
    desc_mandazi.innerText ='Are you ready to tantalize your taste buds with a delicious and aromatic East African delicacy? Look no further than the mouth-watering mandazi! These delectable fried bread treats are a staple in the cuisine of Kenya, Tanzania, and Uganda, and for good reason. Made from a rich and flavorful dough, mandazi are often described as a cross between a donut and a muffin, with a texture that is both light and fluffy, yet satisfyingly chewy.' ;
    mandazi_desc_container.appendChild(desc_mandazi);

    mandaziContainer.appendChild(mandazi_img_container);
    mandaziContainer.appendChild(mandazi_desc_container);

    const chapatiContainer = document.createElement('div');
    chapatiContainer.classList.add("chapati_container");
    const chapati_img_container = document.createElement('div');
    chapati_img_container.classList.add("chapati_img_container");
    const chapati_desc_container = document.createElement('div');

    const chapati = document.createElement('img');
    chapati.src = _chapati_jpeg__WEBPACK_IMPORTED_MODULE_2__;
    chapati.alt = 'chapati Image';
    chapati_img_container.appendChild(chapati);

    const chapatiCaption = document.createElement('p');
    chapatiCaption.innerText = 'Khs.50';
    chapati_img_container.appendChild(chapatiCaption);

    const head_chapati = document.createElement ('h4');
    head_chapati.innerText='chapati ';
    chapati_desc_container.appendChild(head_chapati);

    const desc_chapati = document.createElement('p');
    desc_chapati.innerText ='Get ready to savor the heavenly taste of Chapati, a delectable flatbread that is popular in many regions of East Africa, South Asia, and the Caribbean.This versatile bread is made from a simple combination of flour, water, oil, and salt, but its unique texture and flavor will leave you craving for more.' ;
    chapati_desc_container.appendChild(desc_chapati);

    chapatiContainer.appendChild(chapati_img_container);
    chapatiContainer.appendChild(chapati_desc_container);

    const ugaliContainer = document.createElement('div');
    ugaliContainer.classList.add("ugali_container");
    const ugali_img_container = document.createElement('div');
    ugali_img_container.classList.add("ugali_img_container");
    const ugali_desc_container = document.createElement('div');

    const ugali = document.createElement('img');
    ugali.src = _ugali_jpeg__WEBPACK_IMPORTED_MODULE_1__;
    ugali.alt = 'ugali Image';
    ugali_img_container.appendChild(ugali);

    const ugaliCaption = document.createElement('p');
    ugaliCaption.innerText = 'Khs.100';
    ugali_img_container.appendChild(ugaliCaption);

    const head_ugali = document.createElement ('h4');
    head_ugali.innerText='ugali ';
    ugali_desc_container.appendChild(head_ugali);

    const desc_ugali = document.createElement('p');
    desc_ugali.innerText ='Get ready to indulge in the ultimate comfort food with Ugali, a traditional dish that is a staple in many East African households. Made from a simple combination of water and maize flour, Ugali is a hearty, filling dish that is sure to satisfy your cravings for something warm and comforting.' ;
    ugali_desc_container.appendChild(desc_ugali);

    ugaliContainer.appendChild(ugali_img_container);
    ugaliContainer.appendChild(ugali_desc_container);


    document.body.appendChild(mandaziContainer);
    document.body.appendChild(chapatiContainer);
    document.body.appendChild(ugaliContainer);



}

/***/ }),

/***/ "./src/page_load.js":
/*!**************************!*\
  !*** ./src/page_load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _woman_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./woman.jpg */ "./src/woman.jpg");




function pageLoad() {

  const header = document.createElement('div');
  header.classList.add('header');

  const heading = document.createElement('h1');
  heading.innerText = 'Killer Appetizer';

  const main = document.createElement('div');
  main.classList.add('main');

  const paragraph = document.createElement('p');
  paragraph.innerText = `Step into a culinary adventure like no other at our restaurant, where the aroma of authentic Kenyan cuisine fills the air. Welcome to the Killer Appetizer, where we take pride in serving you the finest selection of traditional Kenyan dishes that will tantalize your taste buds.
  Immerse yourself in a culinary journey that showcases the rich heritage and diverse flavors of Kenya. From mouthwatering nyama choma (grilled meat) to flavorful sukuma wiki (collard greens), our menu is a tribute to the vibrant and hearty dishes that have been passed down through generations.`;

  header.appendChild(heading);
  
  document.body.appendChild(header);

  const myImage = document.createElement('img');
  myImage.src = _woman_jpg__WEBPACK_IMPORTED_MODULE_0__;
  myImage.alt = 'Woman Image';

  main.appendChild(myImage);
  main.appendChild(paragraph);
  

  document.body.appendChild(main);

  

}


/***/ }),

/***/ "./src/chapati.jpeg":
/*!**************************!*\
  !*** ./src/chapati.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc9eeb58e013b8a16285.jpeg";

/***/ }),

/***/ "./src/lobster.ttf":
/*!*************************!*\
  !*** ./src/lobster.ttf ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03c38496322925fec242.ttf";

/***/ }),

/***/ "./src/mandazi.jpeg":
/*!**************************!*\
  !*** ./src/mandazi.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d50fcb3d4b998fe09ee.jpeg";

/***/ }),

/***/ "./src/rubikIso.ttf":
/*!**************************!*\
  !*** ./src/rubikIso.ttf ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ab39494818032d4ce48.ttf";

/***/ }),

/***/ "./src/ugali.jpeg":
/*!************************!*\
  !*** ./src/ugali.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d527294a304c3197535d.jpeg";

/***/ }),

/***/ "./src/woman.jpg":
/*!***********************!*\
  !*** ./src/woman.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40f838f2b0d92f3346ac.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNGcUM7OztBQUd0Qjs7QUFFZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHVDQUFVO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5mby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcGFnZV9sb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3J1YmlrSXNvLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vbG9ic3Rlci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbkBmb250LWZhY2Uge1xuXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICBcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3R0ZicpLFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3R0ZicpO1xuICBcbiAgICBmb250LXdlaWdodDogNjAwO1xuICBcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIFxuICB9XG4gIFxuKiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubmF2LWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBcbn1cbi5ob21lLFxuLm1lbnUsXG4uaW5mbyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OjUwcHg7XG4gIG1hcmdpbi1sZWZ0OjNyZW07XG4gIGJvcmRlci1yYWRpdXM6LjRlbSA7XG4gIGJhY2tncm91bmQ6I2ZmZjtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOjQ1JTtcbiAgbWF4LWhlaWdodDogY2FsYyhtYXgtd2lkdGgpO1xuICBtYXJnaW46IDIwcHg7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi51Z2FsaV9jb250YWluZXIsXG4uY2hhcGF0aV9jb250YWluZXIsXG4ubWFuZGF6aV9jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHggMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbn1cblxuLnVnYWxpX2ltZ19jb250YWluZXIsXG4ubWFuZGF6aV9pbWdfY29udGFpbmVyLFxuLmNoYXBhdGlfaW1nX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogNXB4IDEwcHggNXB4IDVweDtcbn1cblxuLnVnYWxpX2Rlc2NfY29udGFpbmVyLFxuLmNoYXBhdGlfZGVzY19jb250YWluZXIsXG4ubWFuZGF6aV9kZXNjX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOjU1JTtcbn1cblxuXG4uY29udGFjdC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbnRhY3QtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uY29udGFjdC1pbmZvIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY29udGFjdC1mb3JtIGlucHV0LFxuLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY29udGFjdC1mb3JtIHRleHRhcmVhIHtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLmNvbnRhY3QtZm9ybSBidXR0b24ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRhY3QtYWRkcmVzcyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvbnRhY3QtbWFwIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgLyogQWRkIGFueSBhZGRpdGlvbmFsIHN0eWxlcyBmb3IgdGhlIG1hcCBpbnRlZ3JhdGlvbiAqL1xufVxuXG4uc3Vua2VuIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBOztJQUVJLHFCQUFxQjs7SUFFckI7eURBQ2tDOztJQUVsQyxnQkFBZ0I7O0lBRWhCLGtCQUFrQjs7RUFFcEI7O0FBRUY7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTs7QUFFZDtBQUNBOzs7RUFHRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBOzs7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLDZCQUE2Qjs7QUFFL0I7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixTQUFTO0FBQ1g7OztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AZm9udC1mYWNlIHtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgXFxuICAgIHNyYzogdXJsKCcuL3J1YmlrSXNvLnR0ZicpIGZvcm1hdCgndHRmJyksXFxuICAgIHVybCgnLi9sb2JzdGVyLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxuICBcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIFxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBcXG4gIH1cXG4gIFxcbioge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIFxcbn1cXG4uaG9tZSxcXG4ubWVudSxcXG4uaW5mbyB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6NTBweDtcXG4gIG1hcmdpbi1sZWZ0OjNyZW07XFxuICBib3JkZXItcmFkaXVzOi40ZW0gO1xcbiAgYmFja2dyb3VuZDojZmZmO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOjQ1JTtcXG4gIG1heC1oZWlnaHQ6IGNhbGMobWF4LXdpZHRoKTtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udWdhbGlfY29udGFpbmVyLFxcbi5jaGFwYXRpX2NvbnRhaW5lcixcXG4ubWFuZGF6aV9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDVweCAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxufVxcblxcbi51Z2FsaV9pbWdfY29udGFpbmVyLFxcbi5tYW5kYXppX2ltZ19jb250YWluZXIsXFxuLmNoYXBhdGlfaW1nX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXJnaW46IDVweCAxMHB4IDVweCA1cHg7XFxufVxcblxcbi51Z2FsaV9kZXNjX2NvbnRhaW5lcixcXG4uY2hhcGF0aV9kZXNjX2NvbnRhaW5lcixcXG4ubWFuZGF6aV9kZXNjX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOjU1JTtcXG59XFxuXFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5jb250YWN0LWRldGFpbHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSBpbnB1dCxcXG4uY29udGFjdC1mb3JtIHRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSBidXR0b24ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGFjdC1hZGRyZXNzIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5jb250YWN0LW1hcCB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgLyogQWRkIGFueSBhZGRpdGlvbmFsIHN0eWxlcyBmb3IgdGhlIG1hcCBpbnRlZ3JhdGlvbiAqL1xcbn1cXG5cXG4uc3Vua2VuIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgaW5mbyBmcm9tICcuL2luZm8uanMnO1xuaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vcGFnZV9sb2FkLmpzJztcblxuZnVuY3Rpb24gbmF2QmFyKCkge1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdi1iYXInKTtcblxuICBjb25zdCBidG5Ib21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bkhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICBidG5Ib21lLmlubmVySFRNTCA9ICdIb21lJztcblxuICBjb25zdCBidG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bk1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICBidG5NZW51LmlubmVySFRNTCA9ICdNZW51JztcblxuICBjb25zdCBidG5JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bkluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICBidG5JbmZvLmlubmVySFRNTCA9ICdDb250YWN0JztcblxuICBuYXZCYXIuYXBwZW5kQ2hpbGQoYnRuSG9tZSk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChidG5NZW51KTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGJ0bkluZm8pO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbn1cblxubmF2QmFyKCk7XG5cbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZSwgLm1lbnUsIC5pbmZvJyk7XG5cbmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJCb2R5KCk7XG4gICAgbmF2QmFyKCk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1bmtlbicpO1xuXG4gICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbWUnKSkge1xuICAgICAgcGFnZUxvYWQoKTtcbiAgICB9IGVsc2UgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUnKSkge1xuICAgICAgbWVudSgpO1xuICAgIH0gZWxzZSBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnaW5mbycpKSB7XG4gICAgICBpbmZvKCk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBjbGVhckJvZHkoKSB7XG4gIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkubGFzdENoaWxkKTtcbiAgfVxufVxuXG5wYWdlTG9hZCgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5mbygpIHtcbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnRhaW5lcicpO1xuICBcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nLmlubmVyVGV4dCA9ICdDb250YWN0IEluZm9ybWF0aW9uJztcbiAgXG4gICAgY29uc3QgY29udGFjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0RGV0YWlscy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWRldGFpbHMnKTtcbiAgXG4gICAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8nKTtcbiAgXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29udGFjdEZvcm0uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1mb3JtJyk7XG4gIFxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgbmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ1lvdXIgTmFtZSc7XG4gIFxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVtYWlsSW5wdXQudHlwZSA9ICdlbWFpbCc7XG4gICAgZW1haWxJbnB1dC5wbGFjZWhvbGRlciA9ICdZb3VyIEVtYWlsJztcbiAgXG4gICAgY29uc3QgbWVzc2FnZVRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBtZXNzYWdlVGV4dGFyZWEucGxhY2Vob2xkZXIgPSAnWW91ciBNZXNzYWdlJztcbiAgXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gJ1NlbmQgTWVzc2FnZSc7XG4gIFxuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZVRleHRhcmVhKTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICBcbiAgICBjb25zdCBjb250YWN0TWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdE1hcC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LW1hcCcpO1xuICAgIC8vIEFkZCBjb2RlIHRvIGludGVncmF0ZSBhIG1hcCBBUEkgb3IgZW1iZWQgYSBtYXBcbiAgXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RNYXApO1xuICBcbiAgICBjb25zdCBjb250YWN0QWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FkZHJlc3MnKTtcbiAgICBjb250YWN0QWRkcmVzcy5pbm5lckhUTUwgPSAnMTIzIE1haW4gU3RyZWV0PGJyPkNpdHksIENvdW50cnknO1xuICBcbiAgICBjb250YWN0RGV0YWlscy5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XG4gICAgY29udGFjdERldGFpbHMuYXBwZW5kQ2hpbGQoY29udGFjdEFkZHJlc3MpO1xuICBcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdERldGFpbHMpO1xuICBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xuICB9XG4gICIsIlxuaW1wb3J0IG1hbmRhemlJbWFnZSBmcm9tICcuL21hbmRhemkuanBlZyc7XG5pbXBvcnQgdWdhbGlJbWFnZSBmcm9tICcuL3VnYWxpLmpwZWcnO1xuaW1wb3J0IGNoYXBhdGlJbWFnZSBmcm9tICcuL2NoYXBhdGkuanBlZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUgKCkge1xuICAgICAgICBcbiAgICBjb25zdCBtYW5kYXppQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFuZGF6aUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFuZGF6aV9jb250YWluZXJcIik7XG4gICAgY29uc3QgbWFuZGF6aV9pbWdfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFuZGF6aV9pbWdfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYW5kYXppX2ltZ19jb250YWluZXJcIik7XG4gICAgY29uc3QgbWFuZGF6aV9kZXNjX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgbWFuZGF6aSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1hbmRhemkuc3JjID0gbWFuZGF6aUltYWdlO1xuICAgIG1hbmRhemkuYWx0ID0gJ01hbmRhemkgSW1hZ2UnO1xuICAgIG1hbmRhemlfaW1nX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtYW5kYXppKTtcblxuICAgIGNvbnN0IG1hbmRhemlDYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1hbmRhemlDYXB0aW9uLmlubmVyVGV4dCA9ICdLaHMuMzAnO1xuICAgIG1hbmRhemlfaW1nX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtYW5kYXppQ2FwdGlvbik7XG5cbiAgICBjb25zdCBoZWFkX21hbmRhemkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICgnaDQnKTtcbiAgICBoZWFkX21hbmRhemkuaW5uZXJUZXh0PSdNYW5kYXppICc7XG4gICAgbWFuZGF6aV9kZXNjX2NvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkX21hbmRhemkpO1xuXG4gICAgY29uc3QgZGVzY19tYW5kYXppID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NfbWFuZGF6aS5pbm5lclRleHQgPSdBcmUgeW91IHJlYWR5IHRvIHRhbnRhbGl6ZSB5b3VyIHRhc3RlIGJ1ZHMgd2l0aCBhIGRlbGljaW91cyBhbmQgYXJvbWF0aWMgRWFzdCBBZnJpY2FuIGRlbGljYWN5PyBMb29rIG5vIGZ1cnRoZXIgdGhhbiB0aGUgbW91dGgtd2F0ZXJpbmcgbWFuZGF6aSEgVGhlc2UgZGVsZWN0YWJsZSBmcmllZCBicmVhZCB0cmVhdHMgYXJlIGEgc3RhcGxlIGluIHRoZSBjdWlzaW5lIG9mIEtlbnlhLCBUYW56YW5pYSwgYW5kIFVnYW5kYSwgYW5kIGZvciBnb29kIHJlYXNvbi4gTWFkZSBmcm9tIGEgcmljaCBhbmQgZmxhdm9yZnVsIGRvdWdoLCBtYW5kYXppIGFyZSBvZnRlbiBkZXNjcmliZWQgYXMgYSBjcm9zcyBiZXR3ZWVuIGEgZG9udXQgYW5kIGEgbXVmZmluLCB3aXRoIGEgdGV4dHVyZSB0aGF0IGlzIGJvdGggbGlnaHQgYW5kIGZsdWZmeSwgeWV0IHNhdGlzZnlpbmdseSBjaGV3eS4nIDtcbiAgICBtYW5kYXppX2Rlc2NfY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NfbWFuZGF6aSk7XG5cbiAgICBtYW5kYXppQ29udGFpbmVyLmFwcGVuZENoaWxkKG1hbmRhemlfaW1nX2NvbnRhaW5lcik7XG4gICAgbWFuZGF6aUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYW5kYXppX2Rlc2NfY29udGFpbmVyKTtcblxuICAgIGNvbnN0IGNoYXBhdGlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGFwYXRpQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaGFwYXRpX2NvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjaGFwYXRpX2ltZ19jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGFwYXRpX2ltZ19jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNoYXBhdGlfaW1nX2NvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjaGFwYXRpX2Rlc2NfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBjaGFwYXRpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2hhcGF0aS5zcmMgPSBjaGFwYXRpSW1hZ2U7XG4gICAgY2hhcGF0aS5hbHQgPSAnY2hhcGF0aSBJbWFnZSc7XG4gICAgY2hhcGF0aV9pbWdfY29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXBhdGkpO1xuXG4gICAgY29uc3QgY2hhcGF0aUNhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2hhcGF0aUNhcHRpb24uaW5uZXJUZXh0ID0gJ0tocy41MCc7XG4gICAgY2hhcGF0aV9pbWdfY29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXBhdGlDYXB0aW9uKTtcblxuICAgIGNvbnN0IGhlYWRfY2hhcGF0aSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKCdoNCcpO1xuICAgIGhlYWRfY2hhcGF0aS5pbm5lclRleHQ9J2NoYXBhdGkgJztcbiAgICBjaGFwYXRpX2Rlc2NfY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRfY2hhcGF0aSk7XG5cbiAgICBjb25zdCBkZXNjX2NoYXBhdGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY19jaGFwYXRpLmlubmVyVGV4dCA9J0dldCByZWFkeSB0byBzYXZvciB0aGUgaGVhdmVubHkgdGFzdGUgb2YgQ2hhcGF0aSwgYSBkZWxlY3RhYmxlIGZsYXRicmVhZCB0aGF0IGlzIHBvcHVsYXIgaW4gbWFueSByZWdpb25zIG9mIEVhc3QgQWZyaWNhLCBTb3V0aCBBc2lhLCBhbmQgdGhlIENhcmliYmVhbi5UaGlzIHZlcnNhdGlsZSBicmVhZCBpcyBtYWRlIGZyb20gYSBzaW1wbGUgY29tYmluYXRpb24gb2YgZmxvdXIsIHdhdGVyLCBvaWwsIGFuZCBzYWx0LCBidXQgaXRzIHVuaXF1ZSB0ZXh0dXJlIGFuZCBmbGF2b3Igd2lsbCBsZWF2ZSB5b3UgY3JhdmluZyBmb3IgbW9yZS4nIDtcbiAgICBjaGFwYXRpX2Rlc2NfY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NfY2hhcGF0aSk7XG5cbiAgICBjaGFwYXRpQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXBhdGlfaW1nX2NvbnRhaW5lcik7XG4gICAgY2hhcGF0aUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFwYXRpX2Rlc2NfY29udGFpbmVyKTtcblxuICAgIGNvbnN0IHVnYWxpQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdWdhbGlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInVnYWxpX2NvbnRhaW5lclwiKTtcbiAgICBjb25zdCB1Z2FsaV9pbWdfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdWdhbGlfaW1nX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidWdhbGlfaW1nX2NvbnRhaW5lclwiKTtcbiAgICBjb25zdCB1Z2FsaV9kZXNjX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgdWdhbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB1Z2FsaS5zcmMgPSB1Z2FsaUltYWdlO1xuICAgIHVnYWxpLmFsdCA9ICd1Z2FsaSBJbWFnZSc7XG4gICAgdWdhbGlfaW1nX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh1Z2FsaSk7XG5cbiAgICBjb25zdCB1Z2FsaUNhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdWdhbGlDYXB0aW9uLmlubmVyVGV4dCA9ICdLaHMuMTAwJztcbiAgICB1Z2FsaV9pbWdfY29udGFpbmVyLmFwcGVuZENoaWxkKHVnYWxpQ2FwdGlvbik7XG5cbiAgICBjb25zdCBoZWFkX3VnYWxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoJ2g0Jyk7XG4gICAgaGVhZF91Z2FsaS5pbm5lclRleHQ9J3VnYWxpICc7XG4gICAgdWdhbGlfZGVzY19jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZF91Z2FsaSk7XG5cbiAgICBjb25zdCBkZXNjX3VnYWxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NfdWdhbGkuaW5uZXJUZXh0ID0nR2V0IHJlYWR5IHRvIGluZHVsZ2UgaW4gdGhlIHVsdGltYXRlIGNvbWZvcnQgZm9vZCB3aXRoIFVnYWxpLCBhIHRyYWRpdGlvbmFsIGRpc2ggdGhhdCBpcyBhIHN0YXBsZSBpbiBtYW55IEVhc3QgQWZyaWNhbiBob3VzZWhvbGRzLiBNYWRlIGZyb20gYSBzaW1wbGUgY29tYmluYXRpb24gb2Ygd2F0ZXIgYW5kIG1haXplIGZsb3VyLCBVZ2FsaSBpcyBhIGhlYXJ0eSwgZmlsbGluZyBkaXNoIHRoYXQgaXMgc3VyZSB0byBzYXRpc2Z5IHlvdXIgY3JhdmluZ3MgZm9yIHNvbWV0aGluZyB3YXJtIGFuZCBjb21mb3J0aW5nLicgO1xuICAgIHVnYWxpX2Rlc2NfY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NfdWdhbGkpO1xuXG4gICAgdWdhbGlDb250YWluZXIuYXBwZW5kQ2hpbGQodWdhbGlfaW1nX2NvbnRhaW5lcik7XG4gICAgdWdhbGlDb250YWluZXIuYXBwZW5kQ2hpbGQodWdhbGlfZGVzY19jb250YWluZXIpO1xuXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1hbmRhemlDb250YWluZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2hhcGF0aUNvbnRhaW5lcik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1Z2FsaUNvbnRhaW5lcik7XG5cblxuXG59IiwiXG5pbXBvcnQgd29tYW5JbWFnZSBmcm9tICcuL3dvbWFuLmpwZyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGluZy5pbm5lclRleHQgPSAnS2lsbGVyIEFwcGV0aXplcic7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBhcmFncmFwaC5pbm5lclRleHQgPSBgU3RlcCBpbnRvIGEgY3VsaW5hcnkgYWR2ZW50dXJlIGxpa2Ugbm8gb3RoZXIgYXQgb3VyIHJlc3RhdXJhbnQsIHdoZXJlIHRoZSBhcm9tYSBvZiBhdXRoZW50aWMgS2VueWFuIGN1aXNpbmUgZmlsbHMgdGhlIGFpci4gV2VsY29tZSB0byB0aGUgS2lsbGVyIEFwcGV0aXplciwgd2hlcmUgd2UgdGFrZSBwcmlkZSBpbiBzZXJ2aW5nIHlvdSB0aGUgZmluZXN0IHNlbGVjdGlvbiBvZiB0cmFkaXRpb25hbCBLZW55YW4gZGlzaGVzIHRoYXQgd2lsbCB0YW50YWxpemUgeW91ciB0YXN0ZSBidWRzLlxuICBJbW1lcnNlIHlvdXJzZWxmIGluIGEgY3VsaW5hcnkgam91cm5leSB0aGF0IHNob3djYXNlcyB0aGUgcmljaCBoZXJpdGFnZSBhbmQgZGl2ZXJzZSBmbGF2b3JzIG9mIEtlbnlhLiBGcm9tIG1vdXRod2F0ZXJpbmcgbnlhbWEgY2hvbWEgKGdyaWxsZWQgbWVhdCkgdG8gZmxhdm9yZnVsIHN1a3VtYSB3aWtpIChjb2xsYXJkIGdyZWVucyksIG91ciBtZW51IGlzIGEgdHJpYnV0ZSB0byB0aGUgdmlicmFudCBhbmQgaGVhcnR5IGRpc2hlcyB0aGF0IGhhdmUgYmVlbiBwYXNzZWQgZG93biB0aHJvdWdoIGdlbmVyYXRpb25zLmA7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IG15SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbXlJbWFnZS5zcmMgPSB3b21hbkltYWdlO1xuICBteUltYWdlLmFsdCA9ICdXb21hbiBJbWFnZSc7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChteUltYWdlKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICBcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gIFxuXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=