"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcapstone2"] = self["webpackChunkcapstone2"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.ul {\\r\\n  list-style-type: none;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  gap: 30%;\\r\\n  font-size: 20px;\\r\\n  font-weight: 550;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  background: #2d2c2c;\\r\\n  width: 100%;\\r\\n  padding-top: 5px;\\r\\n  padding-bottom: 5px;\\r\\n  z-index: 2;\\r\\n}\\r\\n\\r\\n.column {\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  flex-wrap: wrap;\\r\\n  align-items: center;\\r\\n  margin-top: 50px;\\r\\n}\\r\\n\\r\\n.link a {\\r\\n  color: #fff;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.food_items {\\r\\n  justify-content: center;\\r\\n  flex-basis: 30%;\\r\\n  flex-direction: column;\\r\\n  flex-grow: 1;\\r\\n  align-items: center;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.meal_image {\\r\\n  width: 200px;\\r\\n}\\r\\n\\r\\n.flex {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.actions_name {\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.meal {\\r\\n  font-weight: 500;\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n.nation {\\r\\n  font-weight: 550;\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n.button {\\r\\n  padding: 5px;\\r\\n  font-size: 15px;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.foot-item {\\r\\n  display: flex;\\r\\n  padding: 30px 60px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.foot-line {\\r\\n  border: 1px solid black;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  z-index: 10;\\r\\n\\r\\n  /* background-color: rgb(55, 36, 143); */\\r\\n  width: 90vw;\\r\\n  min-height: 565px;\\r\\n  border: 2px solid rgb(223, 17, 113);\\r\\n  animation: 1s drop;\\r\\n  display: none;\\r\\n  padding: 0 8px;\\r\\n}\\r\\n\\r\\n.close-button {\\r\\n  position: absolute;\\r\\n  cursor: pointer;\\r\\n  outline: none;\\r\\n  margin-right: 4px;\\r\\n  background-color: #fff;\\r\\n  color: #67798e;\\r\\n  border: none;\\r\\n  font-size: 30px;\\r\\n  font-weight: 600;\\r\\n  top: 0;\\r\\n  right: 0;\\r\\n}\\r\\n\\r\\n.add-comm {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.inputDiv {\\r\\n  margin: 0 300px;\\r\\n}\\r\\n\\r\\n#name {\\r\\n  width: 200px;\\r\\n  color: #67798e;\\r\\n  margin-bottom: 16px;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n#text {\\r\\n  width: 200px;\\r\\n  color: #67798e;\\r\\n  margin-bottom: 16px;\\r\\n}\\r\\n\\r\\n.submit-btn {\\r\\n  padding: 5px 18px;\\r\\n  font-size: 15px;\\r\\n  margin-top: 10px;\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n/* pop */\\r\\n.pop {\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background: #fff;\\r\\n  position: relative;\\r\\n  top: 22px;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.popIt {\\r\\n  position: fixed;\\r\\n  top: 10px;\\r\\n  max-height: 100vh;\\r\\n  overflow: auto;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.popup_image {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.pop_image {\\r\\n  width: 200px;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.instructions {\\r\\n  height: 300px;\\r\\n  margin-top: 20px;\\r\\n  width: 300px;\\r\\n  overflow: auto;\\r\\n  background: #eeb3b3;\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\n.instructions::-webkit-scrollbar {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.pop_meal {\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.new_list {\\r\\n  display: flex;\\r\\n  gap: 10px;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayfood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayfood */ \"./src/modules/displayfood.js\");\n/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/footer */ \"./src/modules/footer.js\");\n\n\n\n\n(0,_modules_displayfood__WEBPACK_IMPORTED_MODULE_1__.display)();\n(0,_modules_footer__WEBPACK_IMPORTED_MODULE_2__.font)();\n\n//# sourceURL=webpack://capstone2/./src/index.js?");

/***/ }),

/***/ "./src/modules/APIs.js":
/*!*****************************!*\
  !*** ./src/modules/APIs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentUrl\": () => (/* binding */ commentUrl),\n/* harmony export */   \"foodApiObj\": () => (/* binding */ foodApiObj),\n/* harmony export */   \"likeUrl\": () => (/* binding */ likeUrl)\n/* harmony export */ });\n/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food */ \"./src/modules/food.js\");\n\n\nconst commentkey = 'HJ3nJrQxKFWMKnh6RtwV';\nconst commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${commentkey}/comments`;\n// const  = `${commentApi}/apps/${commentkey}/comments/`;\n\nconst likeApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\nconst likeKey = 'HJ3nJrQxKFWMKnh6RtwV';\nconst likeUrl = `${likeApi}/apps/:${likeKey}/likes/`;\n\nconst foodApi = 'https://themealdb.com/api/json/v1/1/search.php?s';\n\nconst foodApiObj = [];\n\n_food__WEBPACK_IMPORTED_MODULE_0__.foods.forEach((food) => {\n  foodApiObj.push(`${foodApi}=${food}`);\n});\n\n\n\n//# sourceURL=webpack://capstone2/./src/modules/APIs.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable */\nclass Comment {\n  constructor(username, comment, item_id) {\n    this.username = username;\n    this.comment = comment;\n    this.item_id = item_id;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);\n\n//# sourceURL=webpack://capstone2/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/displayfood.js":
/*!************************************!*\
  !*** ./src/modules/displayfood.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"display\": () => (/* binding */ display)\n/* harmony export */ });\n/* harmony import */ var _APIs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIs */ \"./src/modules/APIs.js\");\n/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments */ \"./src/modules/comments.js\");\n\n\n\n// import { modalDisplay } from './modules/commentpop.js';\nconst main = document.querySelector('main');\nconst popup = document.querySelector('#modalDisplay');\n\n/* eslint-disable */\nconst display = async () => {\n/* eslint-enable */\n\n  _APIs__WEBPACK_IMPORTED_MODULE_0__.foodApiObj.forEach(async (item) => {\n    try {\n      const response = await fetch(item);\n      const data = await response.json();\n      if (!response.ok) {\n        main.innerHTML = 'Server Down';\n      }\n\n      data.meals.forEach((item) => {\n        const section = document.createElement('section');\n        const div = document.createElement('div');\n        const btn = document.createElement('button');\n        const btn2 = document.createElement('button');\n\n        section.innerHTML = `\n              <div class=\"\">\n                <span class=\"\" id=${item.idMeal}>\n                </span>\n              </div>\n              <div class=\"meal_image\">\n                <img class=\"meal_image\" src=\"${item.strMealThumb}\" alt=\"asdf\">\n              </div>\n              <div class=\"flex actions_name\">\n                <p class=\"meal\">${item.strMeal}</p>\n                <div>\n                  <i class=\"fa-solid fa-heart\"></i>\n                  <span>\n                    <p>2 likes</p>\n                  </span>\n                </div>\n              </div>\n            `;\n        btn.innerText = 'Comments';\n        btn2.innerText = 'Comments';\n        section.classList = 'food_items flex';\n        div.classList = 'column flex';\n        btn.classList = 'button';\n        btn2.classList = 'button';\n        div.append(btn, btn2);\n        section.append(div);\n        main.append(section);\n\n        btn.addEventListener('click', () => {\n          const pop = () => {\n            popup.innerHTML = `\n            <div class=\"popIt\">\n              <div class =\"flex pop column\">\n               <span class=\"close-button\">&times;</span>\n               <div class=\"popup_image\">\n                  <img class=\"pop_image\" src=\"${item.strMealThumb}\" alt=\"asdf\">\n                </div>\n                <p class=\"pop_meal\">Name: ${item.strMeal}</p> \n                <p> Location: ${item.strArea}</p>\n                <p class=\"instructions\">${item.strInstructions}<p>\n                <p> Category: ${item.strCategory}</p>\n                <div class=\"comment_count\">\n                </div>\n                <button class=\"view_more\">View Comments</button>\n                <div class=\"pop_comment\">\n                \n                </div>\n                <div id =\"commentList\"></div>\n                  <h3 class=\"add-comm\">Add a comment</h3>\n                <div class=\"inputDiv\">\n                  <form class=\"form\">\n                    <input id=\"name\"  type=\"text\" name=\"user\" required placeholder=\"Your Name\"><br>\n                    <textarea id=\"text\" type=\"text\" rows=6 name=\"text\" required placeholder=\"Your insight\"></textarea><br>\n                    <div>\n                    <button class=\"submit-btn\" type=\"submit\">Comment</button>\n                  </div>\n                  </form>\n                  \n                </div>\n              </div>\n              </div>`;\n            popup.style.display = 'flex';\n            document.body.style.overflow = 'hidden';\n          };\n          pop();\n          const commentCount = document.querySelector('.comment_count');\n          const commentPop = document.querySelector('.pop_comment');\n\n          const comment = async (username, comment) => {\n            const comments = new _comments__WEBPACK_IMPORTED_MODULE_1__[\"default\"](username, comment, item.idMeal);\n            const response = await fetch(_APIs__WEBPACK_IMPORTED_MODULE_0__.commentUrl, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(comments) });\n            const data = response;\n            return data;\n          };\n          const bisplay = async (gameData) => {\n            commentPop.innerHTML = '';\n            const displayScores = gameData.map((list) => `<div class=\"new_list\">\n                                                              <p> ${list.creation_date} </p>\n                                                              <p> ${list.username} </p>\n                                                              <p> ${list.comment} </p>\n                                                            </div>`).join('');\n            commentPop.innerHTML = displayScores;\n          };\n\n          const get = async (id) => {\n            const response = await fetch(`${_APIs__WEBPACK_IMPORTED_MODULE_0__.commentUrl}?item_id=${id}`);\n            const data = await response.json();\n            if (response.ok) {\n              bisplay(data);\n              commentCount.innerHTML = data.length;\n            }\n          };\n\n          const form = document.querySelector('.form');\n          form.addEventListener('submit', (e) => {\n            e.preventDefault();\n            const name = document.querySelector('#name').value;\n            const text = document.querySelector('#text').value;\n            comment(name, text);\n          });\n          const close = document.querySelector('.close-button');\n          close.addEventListener('click', () => {\n            get(item.idMeal);\n            // popup.style.display = 'none';\n            // document.body.style.overflow = 'auto';\n          });\n          const viewMore = document.querySelector('.view_more');\n          viewMore.addEventListener('click', () => {\n            get(item.idMeal);\n          });\n        });\n      });\n    } catch (err) {\n      main.innerHTML = 'err';\n    }\n  });\n};\n\n\n//# sourceURL=webpack://capstone2/./src/modules/displayfood.js?");

/***/ }),

/***/ "./src/modules/food.js":
/*!*****************************!*\
  !*** ./src/modules/food.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"foods\": () => (/* binding */ foods)\n/* harmony export */ });\n/* eslint-disable */\r\nconst foods = ['Corba', 'Apam balik', 'Bakewell tart', 'Shawarma', 'Burger', 'Tamiya', 'Eton Mess', 'Yaki Udon', 'Beef Wellington', 'Baingan Bharta', 'Ayam Percik', 'Baingan Bharta'];\r\n\n\n//# sourceURL=webpack://capstone2/./src/modules/food.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"font\": () => (/* binding */ font)\n/* harmony export */ });\nconst font = () => {\n  const footer = document.getElementById('footer');\n\n  footer.innerHTML += `<hr class=\"foot-line\">\n<p class=\"foot-item\">Created by microverse under CC license</p>\n`;\n};\n\n/* eslint-disable */\n\n/* eslint-enable */\n\n//# sourceURL=webpack://capstone2/./src/modules/footer.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);