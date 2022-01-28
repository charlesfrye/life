(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var life__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! life */ \"./pkg/life.js\");\n/* harmony import */ var life_life_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! life/life_bg */ \"./pkg/life_bg.wasm\");\n\n\n\nconst CELL_SIZE = 1; // px\n// const GRID_COLOR = \"rgba(66, 06, 144, 0.5)\";\nconst DEAD_COLOR = \"rgba(4, 32, 105, 0.75)\";\nconst GRID_COLOR = DEAD_COLOR;\nconst ALIVE_COLOR = \"#B00B69\";\n\nlet universe = life__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new(256, 512);\nconst width = universe.width();\nconst height = universe.height();\n\nconst canvas = document.getElementById(\"game-of-life-canvas\");\ncanvas.height = (CELL_SIZE + 1) * height + 1;\ncanvas.width = (CELL_SIZE + 1) * width + 1;\n\nconst ctx = canvas.getContext('2d');\n\nlet animationId = null;\n\nconst renderLoop = () => {\n  drawGrid();\n  drawCells();\n\n  universe.tick();\n\n  animationId = requestAnimationFrame(renderLoop);\n};\n\nconst isPaused = () => {\n  return animationId === null;\n}\n\nconst playPauseButton = document.getElementById(\"play-pause\");\n\nconst play = () => {\n  playPauseButton.textContent = \"⏸\"\n  renderLoop();\n}\n\nconst pause = () => {\n  playPauseButton.textContent = \"▶\"\n  cancelAnimationFrame(animationId);\n  animationId = null;\n}\n\nplayPauseButton.addEventListener(\"click\", event => {\n  if (isPaused()) {\n    play();\n  } else {\n    pause();\n  }\n});\n\nconst randomizeButton = document.getElementById(\"randomize\");\n\nconst randomize = () => {\n  universe = life__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].rand(height, width);\n}\n\nrandomizeButton.addEventListener(\"click\", event => {\n  randomize()\n  play();\n});\n\nconst killButton = document.getElementById(\"kill\");\n\nconst kill = () => {\n  universe.set_width(universe.width())\n}\n\nkillButton.addEventListener(\"click\", event => {\n  kill();\n  play();\n  pause();\n});\n\ncanvas.addEventListener(\"click\", event => {\n  const boundingRect = canvas.getBoundingClientRect();\n\n  const scaleX = canvas.width / boundingRect.width;\n  const scaleY = canvas.height / boundingRect.height;\n\n  const canvasLeft = (event.clientX - boundingRect.left) * scaleX;\n  const canvasTop = (event.clientY - boundingRect.top) * scaleY;\n\n  const row = Math.min(Math.floor(canvasTop /  (CELL_SIZE + 1)), height - 1);\n  const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)),  width - 1);\n\n  universe.toggle_cell(row, col);\n\n  drawGrid();\n  drawCells();\n});\n\nconst drawGrid = () => {\n  ctx.beginPath();\n  ctx.strokeStyle = GRID_COLOR;\n\n  // vertical lines\n  for (let i = 0; i <= width; i++) {\n    ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);\n    ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);\n  }\n\n  for (let j = 0; j <= height; j++) {\n    ctx.moveTo(0,                           j * (CELL_SIZE + 1) + 1);\n    ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);\n  }\n\n  ctx.stroke();\n}\n\nconst getIndex = (row, column) => {\n  return row * width + column;\n};\n\nconst drawCells = () => {\n  const cellsPtrs = universe.cells();\n  const cells = new Uint8Array(life_life_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, cellsPtrs, width * height);\n\n  ctx.beginPath();\n\n  for (let row = 0; row < height; row++) {\n    for (let col = 0; col < width; col++) {\n      const idx = getIndex(row, col);\n\n      ctx.fillStyle = cells[idx] === life__WEBPACK_IMPORTED_MODULE_0__[\"Cell\"].Dead\n        ? DEAD_COLOR // cool way of writing ternary!\n        : ALIVE_COLOR;\n\n      ctx.fillRect(\n        col * (CELL_SIZE + 1) + 1,\n        row * (CELL_SIZE + 1) + 1,\n        CELL_SIZE,\n        CELL_SIZE\n      );\n    }\n  }\n\n  ctx.stroke();\n}\n\ndrawGrid();\ndrawCells();\nplay();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./pkg sync recursive":
/*!******************!*\
  !*** ./pkg sync ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./pkg sync recursive\";\n\n//# sourceURL=webpack:///./pkg_sync?");

/***/ }),

/***/ "./pkg/life.js":
/*!*********************!*\
  !*** ./pkg/life.js ***!
  \*********************/
/*! exports provided: Cell, Universe, __wbg_new_693216e109162396, __wbg_stack_0ddaca5d1abfb52f, __wbg_error_09919627ac0992f5, __wbindgen_object_drop_ref, __wbg_getRandomValues_3e46aa268da0fed1, __wbg_randomFillSync_59fcc2add91fe7b3, __wbg_process_f2b73829dbd321da, __wbindgen_is_object, __wbg_versions_cd82f79c98672a9f, __wbg_node_ee3f6da4130bd35f, __wbindgen_is_string, __wbg_modulerequire_0a83c0c31d12d2c7, __wbg_crypto_9e3521ed42436d35, __wbg_msCrypto_c429c3f8f7a70bb5, __wbg_newnoargs_f579424187aa1717, __wbg_call_89558c3e96703ca1, __wbg_self_e23d74ae45fb17d1, __wbg_window_b4be7f48b24ac56e, __wbg_globalThis_d61b1f48a57191ae, __wbg_global_e7669da72fd7f239, __wbindgen_is_undefined, __wbg_buffer_5e74a88a1424a2e0, __wbg_new_e3b800e570795b3c, __wbg_set_5b8081e9d002f0df, __wbg_length_30803400a8f15c59, __wbg_newwithlength_5f4ce114a24dfe1e, __wbg_subarray_a68f835ca2af506f, __wbindgen_object_clone_ref, __wbindgen_throw, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./life_bg.wasm */ \"./pkg/life_bg.wasm\");\n/* harmony import */ var _life_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./life_bg.js */ \"./pkg/life_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_693216e109162396\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_693216e109162396\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_0ddaca5d1abfb52f\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_stack_0ddaca5d1abfb52f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_09919627ac0992f5\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_error_09919627ac0992f5\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_3e46aa268da0fed1\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getRandomValues_3e46aa268da0fed1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_59fcc2add91fe7b3\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_randomFillSync_59fcc2add91fe7b3\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_process_f2b73829dbd321da\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_process_f2b73829dbd321da\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_object\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_object\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_versions_cd82f79c98672a9f\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_versions_cd82f79c98672a9f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_node_ee3f6da4130bd35f\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_node_ee3f6da4130bd35f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_string\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_string\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_modulerequire_0a83c0c31d12d2c7\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_modulerequire_0a83c0c31d12d2c7\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_9e3521ed42436d35\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_crypto_9e3521ed42436d35\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_msCrypto_c429c3f8f7a70bb5\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_msCrypto_c429c3f8f7a70bb5\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_f579424187aa1717\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newnoargs_f579424187aa1717\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_89558c3e96703ca1\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_call_89558c3e96703ca1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_e23d74ae45fb17d1\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_self_e23d74ae45fb17d1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_b4be7f48b24ac56e\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_window_b4be7f48b24ac56e\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_d61b1f48a57191ae\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_globalThis_d61b1f48a57191ae\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_e7669da72fd7f239\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_global_e7669da72fd7f239\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_undefined\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_5e74a88a1424a2e0\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_buffer_5e74a88a1424a2e0\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_e3b800e570795b3c\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_e3b800e570795b3c\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_5b8081e9d002f0df\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_5b8081e9d002f0df\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_length_30803400a8f15c59\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_length_30803400a8f15c59\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithlength_5f4ce114a24dfe1e\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newwithlength_5f4ce114a24dfe1e\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_subarray_a68f835ca2af506f\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_subarray_a68f835ca2af506f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_clone_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return _life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_memory\"]; });\n\n\n\n\n//# sourceURL=webpack:///./pkg/life.js?");

/***/ }),

/***/ "./pkg/life_bg.js":
/*!************************!*\
  !*** ./pkg/life_bg.js ***!
  \************************/
/*! exports provided: Cell, Universe, __wbg_new_693216e109162396, __wbg_stack_0ddaca5d1abfb52f, __wbg_error_09919627ac0992f5, __wbindgen_object_drop_ref, __wbg_getRandomValues_3e46aa268da0fed1, __wbg_randomFillSync_59fcc2add91fe7b3, __wbg_process_f2b73829dbd321da, __wbindgen_is_object, __wbg_versions_cd82f79c98672a9f, __wbg_node_ee3f6da4130bd35f, __wbindgen_is_string, __wbg_modulerequire_0a83c0c31d12d2c7, __wbg_crypto_9e3521ed42436d35, __wbg_msCrypto_c429c3f8f7a70bb5, __wbg_newnoargs_f579424187aa1717, __wbg_call_89558c3e96703ca1, __wbg_self_e23d74ae45fb17d1, __wbg_window_b4be7f48b24ac56e, __wbg_globalThis_d61b1f48a57191ae, __wbg_global_e7669da72fd7f239, __wbindgen_is_undefined, __wbg_buffer_5e74a88a1424a2e0, __wbg_new_e3b800e570795b3c, __wbg_set_5b8081e9d002f0df, __wbg_length_30803400a8f15c59, __wbg_newwithlength_5f4ce114a24dfe1e, __wbg_subarray_a68f835ca2af506f, __wbindgen_object_clone_ref, __wbindgen_throw, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_693216e109162396\", function() { return __wbg_new_693216e109162396; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_0ddaca5d1abfb52f\", function() { return __wbg_stack_0ddaca5d1abfb52f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_09919627ac0992f5\", function() { return __wbg_error_09919627ac0992f5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_3e46aa268da0fed1\", function() { return __wbg_getRandomValues_3e46aa268da0fed1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_59fcc2add91fe7b3\", function() { return __wbg_randomFillSync_59fcc2add91fe7b3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_process_f2b73829dbd321da\", function() { return __wbg_process_f2b73829dbd321da; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_object\", function() { return __wbindgen_is_object; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_versions_cd82f79c98672a9f\", function() { return __wbg_versions_cd82f79c98672a9f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_node_ee3f6da4130bd35f\", function() { return __wbg_node_ee3f6da4130bd35f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_string\", function() { return __wbindgen_is_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_modulerequire_0a83c0c31d12d2c7\", function() { return __wbg_modulerequire_0a83c0c31d12d2c7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_9e3521ed42436d35\", function() { return __wbg_crypto_9e3521ed42436d35; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_msCrypto_c429c3f8f7a70bb5\", function() { return __wbg_msCrypto_c429c3f8f7a70bb5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_f579424187aa1717\", function() { return __wbg_newnoargs_f579424187aa1717; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_89558c3e96703ca1\", function() { return __wbg_call_89558c3e96703ca1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_e23d74ae45fb17d1\", function() { return __wbg_self_e23d74ae45fb17d1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_b4be7f48b24ac56e\", function() { return __wbg_window_b4be7f48b24ac56e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_d61b1f48a57191ae\", function() { return __wbg_globalThis_d61b1f48a57191ae; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_e7669da72fd7f239\", function() { return __wbg_global_e7669da72fd7f239; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_5e74a88a1424a2e0\", function() { return __wbg_buffer_5e74a88a1424a2e0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_e3b800e570795b3c\", function() { return __wbg_new_e3b800e570795b3c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_5b8081e9d002f0df\", function() { return __wbg_set_5b8081e9d002f0df; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_length_30803400a8f15c59\", function() { return __wbg_length_30803400a8f15c59; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithlength_5f4ce114a24dfe1e\", function() { return __wbg_newwithlength_5f4ce114a24dfe1e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_subarray_a68f835ca2af506f\", function() { return __wbg_subarray_a68f835ca2af506f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return __wbindgen_memory; });\n/* harmony import */ var _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./life_bg.wasm */ \"./pkg/life_bg.wasm\");\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n    }\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n*/\nconst Cell = Object.freeze({ Dead:0,\"0\":\"Dead\",Alive:1,\"1\":\"Alive\", });\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_universe_free\"](ptr);\n    }\n    /**\n    * @param {number} width\n    */\n    set_width(width) {\n        _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_set_width\"](this.ptr, width);\n    }\n    /**\n    * @param {number} height\n    */\n    set_height(height) {\n        _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_set_height\"](this.ptr, height);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        var ret = _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_width\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        var ret = _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_height\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    cells() {\n        var ret = _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_cells\"](this.ptr);\n        return ret;\n    }\n    /**\n    */\n    tick() {\n        _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_tick\"](this.ptr);\n    }\n    /**\n    * @param {number} row\n    * @param {number} column\n    */\n    toggle_cell(row, column) {\n        _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_toggle_cell\"](this.ptr, row, column);\n    }\n    /**\n    * @param {number} height\n    * @param {number} width\n    * @returns {Universe}\n    */\n    static rand(height, width) {\n        var ret = _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_rand\"](height, width);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @param {number} height\n    * @param {number} width\n    * @returns {Universe}\n    */\n    static new(height, width) {\n        var ret = _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_new\"](height, width);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @returns {string}\n    */\n    render() {\n        try {\n            const retptr = _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_render\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n}\n\nfunction __wbg_new_693216e109162396() {\n    var ret = new Error();\n    return addHeapObject(ret);\n};\n\nfunction __wbg_stack_0ddaca5d1abfb52f(arg0, arg1) {\n    var ret = getObject(arg1).stack;\n    var ptr0 = passStringToWasm0(ret, _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nfunction __wbg_error_09919627ac0992f5(arg0, arg1) {\n    try {\n        console.error(getStringFromWasm0(arg0, arg1));\n    } finally {\n        _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](arg0, arg1);\n    }\n};\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbg_getRandomValues_3e46aa268da0fed1() { return handleError(function (arg0, arg1) {\n    getObject(arg0).getRandomValues(getObject(arg1));\n}, arguments) };\n\nfunction __wbg_randomFillSync_59fcc2add91fe7b3() { return handleError(function (arg0, arg1, arg2) {\n    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));\n}, arguments) };\n\nfunction __wbg_process_f2b73829dbd321da(arg0) {\n    var ret = getObject(arg0).process;\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_is_object(arg0) {\n    const val = getObject(arg0);\n    var ret = typeof(val) === 'object' && val !== null;\n    return ret;\n};\n\nfunction __wbg_versions_cd82f79c98672a9f(arg0) {\n    var ret = getObject(arg0).versions;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_node_ee3f6da4130bd35f(arg0) {\n    var ret = getObject(arg0).node;\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_is_string(arg0) {\n    var ret = typeof(getObject(arg0)) === 'string';\n    return ret;\n};\n\nfunction __wbg_modulerequire_0a83c0c31d12d2c7() { return handleError(function (arg0, arg1) {\n    var ret = __webpack_require__(\"./pkg sync recursive\")(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_crypto_9e3521ed42436d35(arg0) {\n    var ret = getObject(arg0).crypto;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_msCrypto_c429c3f8f7a70bb5(arg0) {\n    var ret = getObject(arg0).msCrypto;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_newnoargs_f579424187aa1717(arg0, arg1) {\n    var ret = new Function(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nfunction __wbg_call_89558c3e96703ca1() { return handleError(function (arg0, arg1) {\n    var ret = getObject(arg0).call(getObject(arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_self_e23d74ae45fb17d1() { return handleError(function () {\n    var ret = self.self;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_window_b4be7f48b24ac56e() { return handleError(function () {\n    var ret = window.window;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_globalThis_d61b1f48a57191ae() { return handleError(function () {\n    var ret = globalThis.globalThis;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_global_e7669da72fd7f239() { return handleError(function () {\n    var ret = global.global;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_is_undefined(arg0) {\n    var ret = getObject(arg0) === undefined;\n    return ret;\n};\n\nfunction __wbg_buffer_5e74a88a1424a2e0(arg0) {\n    var ret = getObject(arg0).buffer;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_new_e3b800e570795b3c(arg0) {\n    var ret = new Uint8Array(getObject(arg0));\n    return addHeapObject(ret);\n};\n\nfunction __wbg_set_5b8081e9d002f0df(arg0, arg1, arg2) {\n    getObject(arg0).set(getObject(arg1), arg2 >>> 0);\n};\n\nfunction __wbg_length_30803400a8f15c59(arg0) {\n    var ret = getObject(arg0).length;\n    return ret;\n};\n\nfunction __wbg_newwithlength_5f4ce114a24dfe1e(arg0) {\n    var ret = new Uint8Array(arg0 >>> 0);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_subarray_a68f835ca2af506f(arg0, arg1, arg2) {\n    var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_object_clone_ref(arg0) {\n    var ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_memory() {\n    var ret = _life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"];\n    return addHeapObject(ret);\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./pkg/life_bg.js?");

/***/ }),

/***/ "./pkg/life_bg.wasm":
/*!**************************!*\
  !*** ./pkg/life_bg.wasm ***!
  \**************************/
/*! exports provided: memory, __wbg_universe_free, universe_set_width, universe_set_height, universe_width, universe_height, universe_cells, universe_tick, universe_toggle_cell, universe_rand, universe_new, universe_render, __wbindgen_add_to_stack_pointer, __wbindgen_free, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_exn_store */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./life_bg.js */ \"./pkg/life_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/life_bg.wasm?");

/***/ })

}]);