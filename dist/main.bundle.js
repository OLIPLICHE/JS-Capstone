/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Courier New\\\", Courier, monospace;\\n  font-weight: bold;\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: #e5e5e5;\\n}\\n\\n#header {\\n  width: 100%;\\n  background-color: #fff;\\n}\\n\\n.logo {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 15px;\\n  line-height: 20px;\\n  color: #1c1c1c;\\n}\\n\\n.logo a {\\n  text-decoration: none;\\n}\\n\\n.header-container {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 79%;\\n  align-items: center;\\n  margin: 0 auto;\\n  height: 4rem;\\n}\\n\\n.navbar {\\n  display: flex;\\n  align-items: center;\\n  line-height: 4rem;\\n  width: 37%;\\n}\\n\\n.d-navbar {\\n  display: flex;\\n  list-style-type: none;\\n  flex-direction: row;\\n  width: 100%;\\n}\\n\\n.d-navbar li {\\n  margin-left: 1rem;\\n}\\n\\n.d-navbar li a {\\n  color: #080808;\\n}\\n\\n.a-navbar {\\n  text-decoration: none;\\n  height: 2em;\\n  padding: 0.5em 1em;\\n}\\n\\n.navbar .humberger i {\\n  font-size: 22px;\\n  font-weight: 600;\\n  color: #0a0a0a;\\n}\\n\\n.container {\\n  padding: 4em 0;\\n  justify-content: center;\\n  display: flex;\\n}\\n\\nul {\\n  list-style-type: none;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  width: 80%;\\n}\\n\\n.dflex {\\n  display: flex;\\n}\\n\\n.meal-item {\\n  border-radius: 0.5em;\\n  background-color: white;\\n  display: flex;\\n  flex-direction: column;\\n  width: 32%;\\n  padding: 7px;\\n  margin: 1em 0;\\n  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.77);\\n  transition: 300ms ease-in-out;\\n}\\n\\n.meal-image {\\n  width: 100%;\\n  margin-bottom: 1em;\\n  border-radius: 0.5em;\\n}\\n\\n.meal-meta {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 1em;\\n}\\n\\n.icn-btn {\\n  background: transparent;\\n  border: none;\\n  color: var(--secondary-color);\\n  padding: 12px 16px;\\n  font-size: 1em;\\n  cursor: pointer;\\n}\\n\\n.btn {\\n  padding: 1em;\\n  border-radius: 0.5em;\\n  border: none;\\n  background: var(--primary-color);\\n  color: var(--background-color);\\n}\\n\\n.btn-alt {\\n  margin-top: 1em;\\n  color: var(--background-color);\\n  background: var(--secondary-color);\\n}\\n\\nfooter {\\n  width: 100%;\\n  justify-content: center;\\n  margin: auto;\\n  margin-top: 10px;\\n  flex-shrink: 0;\\n  background-color: white;\\n  bottom: 0;\\n  border-style: solid;\\n}\\n\\n/* Modal */\\n.modal {\\n  display: none;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  height: 100vh;\\n  width: 100%;\\n  background: rgba(232, 90, 79, 0.4);\\n  backdrop-filter: blur(4px);\\n  overflow: scroll;\\n}\\n\\n.modal-content {\\n  background-color: #fefefe;\\n  margin: auto;\\n  padding: 20px;\\n  border: 1px solid #888;\\n  width: 80%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.modal-image {\\n  width: 50%;\\n}\\n\\n@media screen and (max-width: 600px) {\\n  .d-navbar {\\n    display: none;\\n  }\\n}\\n@media screen and (min-width: 600px) {\\n  .humberger {\\n    display: none;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://JS-Capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://JS-Capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _modules_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/counter */ \"./src/modules/counter.js\");\n/* harmony import */ var _modules_render_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/render/app */ \"./src/modules/render/app.js\");\n\r\n\r\n\r\n\r\n\r\n// import renderMeals from './modules/app';\r\n\r\nconst mealCounter = document.getElementById('meal-counter');\r\n\r\nconst endpoint = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';\r\nconst likesEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/likes/';\r\nconst displayMeals = () => {\r\n  Promise.all([\r\n    _modules_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getMeals(`${endpoint}`),\r\n    _modules_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getLikes(likesEndpoint),\r\n  ]).then((data) => {\r\n    (0,_modules_render_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data[0], data[1]);\r\n    const length = _modules_counter__WEBPACK_IMPORTED_MODULE_2__[\"default\"].meals(data[0].meals);\r\n    mealCounter.innerText = length;\r\n  });\r\n};\r\n\r\nwindow.addEventListener('load', displayMeals);\r\n\n\n//# sourceURL=webpack://JS-Capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nconst counter = {\r\n  meals: (allMeals) => allMeals.length,\r\n  comments: (allComments) => allComments.length,\r\n  // reservation: (allReservations) => allReservations.length,\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);\r\n\n\n//# sourceURL=webpack://JS-Capstone/./src/modules/counter.js?");

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nconst API = {\r\n  getMeals: async (endpoint) => {\r\n    const res = await fetch(`${endpoint}`, { method: 'GET' });\r\n    if (!res.ok) {\r\n      throw new Error(`API error! status: ${res.status}`);\r\n    } else {\r\n      const data = await res.json();\r\n      return data;\r\n    }\r\n  },\r\n\r\n  getLikes: async () => {\r\n    const res = await fetch(\r\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/likes/',\r\n      { method: 'GET' },\r\n    );\r\n    if (!res.ok) {\r\n      throw new Error(`API error! status: ${res.status}`);\r\n    } else {\r\n      const data = await res.json();\r\n      return data;\r\n    }\r\n  },\r\n\r\n  postLike: async (itemId) => {\r\n    const res = await fetch(\r\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/likes/',\r\n      {\r\n        method: 'POST',\r\n        body: JSON.stringify({\r\n          item_id: itemId,\r\n        }),\r\n        headers: {\r\n          'Content-type': 'application/json; charset=UTF-8',\r\n        },\r\n      },\r\n    );\r\n    if (!res.ok) {\r\n      throw new Error(`API error! status: ${res.status}`);\r\n    } else {\r\n      const data = await res.text();\r\n      return data;\r\n    }\r\n  },\r\n\r\n  getComments: async (mealId) => {\r\n    const res = await fetch(\r\n      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/comments?item_id=${mealId}`,\r\n      { method: 'GET' },\r\n    );\r\n    if (!res.ok) {\r\n      return 'No comments available for this meal';\r\n    }\r\n    const data = await res.json();\r\n    return data;\r\n  },\r\n\r\n  postComment: async (itemId, username, comment) => {\r\n    const res = await fetch(\r\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/comments/',\r\n      {\r\n        method: 'POST',\r\n        body: JSON.stringify({\r\n          item_id: itemId,\r\n          username,\r\n          comment,\r\n        }),\r\n        headers: {\r\n          'Content-type': 'application/json; charset=UTF-8',\r\n        },\r\n      },\r\n    );\r\n    if (!res.ok) {\r\n      throw new Error(`API error! status: ${res.status}`);\r\n    } else {\r\n      const data = await res.text();\r\n      return data;\r\n    }\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);\r\n\n\n//# sourceURL=webpack://JS-Capstone/./src/modules/data.js?");

/***/ }),

/***/ "./src/modules/involvement.js":
/*!************************************!*\
  !*** ./src/modules/involvement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable indent */\r\n/* eslint-disable linebreak-style */\r\nconst involvement = {\r\n  likes: (likesData, mealID) => {\r\n    const mealLikes = likesData.find((i) => i.item_id === mealID);\r\n    if (mealLikes !== undefined) {\r\n      return mealLikes.likes;\r\n    }\r\n    return 0;\r\n  },\r\n\r\n  comments: (commentsData, mealID) => {\r\n    const commentLists = commentsData.find((i) => i.item_id === mealID);\r\n    if (commentLists !== undefined) {\r\n      return commentLists.comments;\r\n    }\r\n    return 0;\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (involvement);\r\n\n\n//# sourceURL=webpack://JS-Capstone/./src/modules/involvement.js?");

/***/ }),

/***/ "./src/modules/render/app.js":
/*!***********************************!*\
  !*** ./src/modules/render/app.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ \"./src/modules/data.js\");\n/* harmony import */ var _involvement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../involvement */ \"./src/modules/involvement.js\");\n/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments */ \"./src/modules/render/comments.js\");\n/* eslint-disable no-undef */\r\n/* eslint-disable import/extensions */\r\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\n\r\nconst ul = document.getElementById('meal-list');\r\nconst commentModal = document.getElementById('modal-comment');\r\n\r\n// const renderModal = (meal) => {\r\n//   const modalInner = document.createElement('div');\r\n//   modalInner.className = 'modal-inner';\r\n\r\n//   const modalHeader = document.createElement('div');\r\n//   modalHeader.className = 'modal-header';\r\n//   modalInner.appendChild(modalHeader);\r\n\r\n//   const closeBtn = document.createElement('button');\r\n//   closeBtn.className = 'close-modal icn-btn';\r\n//   closeBtn.innerHTML = '&times;';\r\n//   closeBtn.addEventListener('click', () => {\r\n//     commentModal.style.display = 'none';\r\n//   });\r\n//   modalHeader.appendChild(closeBtn);\r\n\r\n//   const modalDetails = document.createElement('div');\r\n//   modalDetails.className = 'modal-details';\r\n//   modalInner.appendChild(modalDetails);\r\n\r\n//   const modalImg = document.createElement('img');\r\n//   modalImg.className = 'modal-img';\r\n//   modalImg.src = meal.strMealThumb;\r\n//   modalDetails.appendChild(modalImg);\r\n\r\n//   const modalMeta = document.createElement('div');\r\n//   modalMeta.className = 'modal-meta';\r\n//   modalDetails.appendChild(modalMeta);\r\n\r\n//   const modalTitle = document.createElement('h4');\r\n//   modalTitle.className = 'modal-title';\r\n//   modalTitle.innerText = meal.strMeal;\r\n//   modalMeta.appendChild(modalTitle);\r\n\r\n//   const modalDesc = document.createElement('p');\r\n//   modalDesc.className = 'modal-desc';\r\n//   modalDesc.innerText = meal.strInstructions;\r\n//   modalMeta.appendChild(modalDesc);\r\n//   commentModal.appendChild(modalInner);\r\n// };\r\n\r\nconst meals = (mealsData, likesData) => {\r\n  const { meals } = mealsData;\r\n\r\n  meals.forEach((mealItem) => {\r\n    const li = document.createElement('li');\r\n    li.className = 'meal-item';\r\n\r\n    const img = document.createElement('img');\r\n    img.src = mealItem.strMealThumb;\r\n    img.className = 'meal-image';\r\n    li.appendChild(img);\r\n\r\n    const div = document.createElement('div');\r\n    div.className = 'meal-meta';\r\n    li.appendChild(div);\r\n\r\n    const p = document.createElement('p');\r\n    p.className = 'meal-title';\r\n    p.innerText = mealItem.strMeal;\r\n    div.appendChild(p);\r\n\r\n    const likeSection = document.createElement('div');\r\n    likeSection.className = 'like-section';\r\n    div.appendChild(likeSection);\r\n    const likeBtn = document.createElement('button');\r\n    likeBtn.className = 'icn-btn like-btn';\r\n\r\n    likeSection.appendChild(likeBtn);\r\n    const likeIcon = document.createElement('i');\r\n    likeIcon.className = 'far fa-heart';\r\n\r\n    likeBtn.appendChild(likeIcon);\r\n    const likeCount = document.createElement('p');\r\n    likeCount.className = 'like-count';\r\n    likeCount.innerText = _involvement__WEBPACK_IMPORTED_MODULE_1__[\"default\"].likes(likesData, mealItem.idMeal);\r\n    likeBtn.onclick = async () => {\r\n      await _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].postLike(mealItem.idMeal);\r\n      const likesData = await _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLikes().then((data) => data);\r\n      likeCount.innerText = _involvement__WEBPACK_IMPORTED_MODULE_1__[\"default\"].likes(likesData, mealItem.idMeal);\r\n    };\r\n    likeSection.appendChild(likeCount);\r\n\r\n    const commentBtn = document.createElement('button');\r\n    commentBtn.className = 'btn';\r\n    commentBtn.innerText = 'Comment';\r\n    commentBtn.addEventListener('click', () => {\r\n      if (commentModal.hasChildNodes()) {\r\n        commentModal.innerHTML = '';\r\n      } else {\r\n        (0,_comments__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(mealItem);\r\n        commentModal.style.display = 'block';\r\n      }\r\n    });\r\n    li.appendChild(commentBtn);\r\n    ul.appendChild(li);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meals);\r\n\n\n//# sourceURL=webpack://JS-Capstone/./src/modules/render/app.js?");

/***/ }),

/***/ "./src/modules/render/comments.js":
/*!****************************************!*\
  !*** ./src/modules/render/comments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ \"./src/modules/data.js\");\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../counter */ \"./src/modules/counter.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\nconst modal = document.getElementById('modal-comment');\r\n\r\nconst displayComments = (ul, userComment) => {\r\n  const comment = document.createElement('li');\r\n  comment.className = 'comment-li';\r\n  const commentMeta = document.createElement('div');\r\n  commentMeta.className = 'comment-meta';\r\n  comment.appendChild(commentMeta);\r\n  const name = document.createElement('p');\r\n  name.style.textTransform = 'Capitalize';\r\n  name.innerText = userComment.username;\r\n\r\n  const date = document.createElement('p');\r\n  date.className = 'no-comments';\r\n  date.innerText = userComment.creation_date;\r\n  commentMeta.appendChild(name);\r\n  commentMeta.appendChild(date);\r\n  const message = document.createElement('p');\r\n  message.innerText = userComment.comment;\r\n  message.style.textTransform = 'Capitalize';\r\n  comment.appendChild(message);\r\n  ul.appendChild(comment);\r\n};\r\n\r\nconst commentModal = (meal) => {\r\n  const modalInner = document.createElement('div');\r\n  modalInner.className = 'modal-inner';\r\n  const modalHeader = document.createElement('div');\r\n  modalHeader.className = 'modal-header';\r\n  modalInner.appendChild(modalHeader);\r\n  const closeBtn = document.createElement('button');\r\n  closeBtn.className = 'close-modal icn-btn';\r\n  closeBtn.innerHTML = '&times;';\r\n  closeBtn.addEventListener('click', () => {\r\n    modal.style.display = 'none';\r\n  });\r\n  modalHeader.appendChild(closeBtn);\r\n  const modalDetails = document.createElement('div');\r\n  modalDetails.className = 'modal-details';\r\n  modalInner.appendChild(modalDetails);\r\n  const modalImg = document.createElement('img');\r\n  modalImg.className = 'modal-img';\r\n  modalImg.src = meal.strMealThumb;\r\n  modalDetails.appendChild(modalImg);\r\n  const modalMeta = document.createElement('div');\r\n  modalMeta.className = 'modal-meta';\r\n  modalDetails.appendChild(modalMeta);\r\n  const modalTitle = document.createElement('h4');\r\n  modalTitle.className = 'modal-title';\r\n  modalTitle.innerText = meal.strMeal;\r\n  modalMeta.appendChild(modalTitle);\r\n  const modalDesc = document.createElement('p');\r\n  modalDesc.className = 'modal-desc';\r\n  modalDesc.innerText = meal.strInstructions;\r\n  modalMeta.appendChild(modalDesc);\r\n\r\n  const allComments = document.createElement('div');\r\n  allComments.className = 'all-comments';\r\n  modalMeta.appendChild(allComments);\r\n  const allCommentsTitle = document.createElement('h1');\r\n  allCommentsTitle.className = 'all-comments-title';\r\n  allCommentsTitle.innerText = 'All Comments';\r\n  allComments.appendChild(allCommentsTitle);\r\n  const commentUl = document.createElement('ul');\r\n  commentUl.className = 'comment-ul';\r\n  _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getComments(meal.idMeal).then((data) => {\r\n    if (data === 'No comments available for this meal') {\r\n      commentUl.innerHTML = `<li class=\"no-comments\">${`${data}. Add a new comment`}</li>`;\r\n    } else {\r\n      const commentCounter = _counter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].comments(data);\r\n      allCommentsTitle.innerText = `All Comments(${commentCounter})`;\r\n      data.forEach((userComment) => {\r\n        displayComments(commentUl, userComment);\r\n      });\r\n    }\r\n  });\r\n  allComments.appendChild(commentUl);\r\n  const form = document.createElement('form');\r\n  form.className = 'comment-form';\r\n  modalMeta.appendChild(form);\r\n  const formTitle = document.createElement('h1');\r\n  formTitle.className = 'comment-form-title';\r\n  formTitle.innerText = 'Add a comment';\r\n  form.appendChild(formTitle);\r\n  const commenterName = document.createElement('input');\r\n  commenterName.type = 'text';\r\n  commenterName.name = 'commenter';\r\n  commenterName.placeholder = 'Your Name';\r\n  commenterName.attributes.required = true;\r\n  form.appendChild(commenterName);\r\n  const commenterMessage = document.createElement('textarea');\r\n  commenterMessage.rows = 5;\r\n  commenterMessage.className = 'comment-message';\r\n  commenterMessage.placeholder = 'Your Message';\r\n  form.appendChild(commenterMessage);\r\n  const formButton = document.createElement('button');\r\n  formButton.className = 'btn btn-alt';\r\n  formButton.innerHTML = 'Add Comment';\r\n  form.appendChild(formButton);\r\n  formButton.onclick = (e) => {\r\n    e.preventDefault();\r\n    _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].postComment(\r\n      meal.idMeal,\r\n      commenterName.value,\r\n      commenterMessage.value,\r\n    ).then(() => {\r\n      if (commentUl.hasChildNodes()) {\r\n        commentUl.innerHTML = '';\r\n        _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getComments(meal.idMeal).then((data) => {\r\n          if (data === 'No comments available for this meal') {\r\n            commentUl.innerHTML = `<li class=\"no-comments\">${`${data}. Add a new comment`}</li>`;\r\n          } else {\r\n            data.forEach((userComment) => {\r\n              displayComments(commentUl, userComment);\r\n            });\r\n          }\r\n        });\r\n      }\r\n    });\r\n    commenterName.value = '';\r\n    commenterMessage.value = '';\r\n  };\r\n\r\n  modal.appendChild(modalInner);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentModal);\n\n//# sourceURL=webpack://JS-Capstone/./src/modules/render/comments.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;