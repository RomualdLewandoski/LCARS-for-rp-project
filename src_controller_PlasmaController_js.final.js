"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkPlasma"] = self["webpackChunkPlasma"] || []).push([["src_controller_PlasmaController_js"],{

/***/ "./src/component/WelcomeComponent.js":
/*!*******************************************!*\
  !*** ./src/component/WelcomeComponent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WelcomeComponent)\n/* harmony export */ });\n/* harmony import */ var _Plasma_Abstract_AbstractComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Plasma/Abstract/AbstractComponent */ \"./src/Plasma/Abstract/AbstractComponent.js\");\n\r\n\r\nclass WelcomeComponent extends _Plasma_Abstract_AbstractComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n\r\n    constructor() {\r\n        super();\r\n        this.setData({})\r\n        this.render()\r\n        this.script()\r\n    }\r\n\r\n    render() {\r\n        let template = this.getVue(\"welcome/welcome.twig\")\r\n        this.genTemplate(\"panelPage\", template, this.data)\r\n    }\r\n\r\n    script() {\r\n    }\r\n}\n\n//# sourceURL=webpack://Plasma/./src/component/WelcomeComponent.js?");

/***/ }),

/***/ "./src/controller/PlasmaController.js":
/*!********************************************!*\
  !*** ./src/controller/PlasmaController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PlasmaController)\n/* harmony export */ });\n/* harmony import */ var _Plasma_Abstract_AbstractController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Plasma/Abstract/AbstractController */ \"./src/Plasma/Abstract/AbstractController.js\");\n/* harmony import */ var _component_AppComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/AppComponent */ \"./src/component/AppComponent.js\");\n/* harmony import */ var _component_WelcomeComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/WelcomeComponent */ \"./src/component/WelcomeComponent.js\");\n\n\n\n\nclass PlasmaController extends _Plasma_Abstract_AbstractController__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor(name, isApp, core) {\n        super(name, isApp, core);\n    }\n\n    index() {\n        new _component_AppComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.clearDashboard()\n        new _component_WelcomeComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n    }\n\n    unload() {\n\n    }\n}\n\n//# sourceURL=webpack://Plasma/./src/controller/PlasmaController.js?");

/***/ })

}]);