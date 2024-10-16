"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/games";
exports.ids = ["pages/api/games"];
exports.modules = {

/***/ "csv-parser":
/*!*****************************!*\
  !*** external "csv-parser" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("csv-parser");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/games.js":
/*!****************************!*\
  !*** ./pages/api/games.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var csv_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! csv-parser */ \"csv-parser\");\n/* harmony import */ var csv_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(csv_parser__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction handler(req, res) {\n    const { lang =\"en\"  } = req.query; // Get language from query parameter, default to 'en'\n    const dataDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", lang);\n    const gameFiles = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(dataDirectory).filter((file)=>file.endsWith(\".csv\"));\n    const games = [];\n    const processFile = (file)=>{\n        return new Promise((resolve)=>{\n            const gameData = {\n                name: path__WEBPACK_IMPORTED_MODULE_1___default().basename(file, \".csv\"),\n                ranks: []\n            };\n            fs__WEBPACK_IMPORTED_MODULE_0___default().createReadStream(path__WEBPACK_IMPORTED_MODULE_1___default().join(dataDirectory, file)).pipe(csv_parser__WEBPACK_IMPORTED_MODULE_2___default()()).on(\"data\", (row)=>{\n                gameData.ranks.push(row[\"Rank\"]);\n            }).on(\"end\", ()=>{\n                games.push(gameData);\n                resolve();\n            });\n        });\n    };\n    Promise.all(gameFiles.map(processFile)).then(()=>{\n        res.status(200).json(games);\n    }).catch((error)=>{\n        console.error(\"Error processing CSV files:\", error);\n        res.status(500).json({\n            error: \"Error processing game data\"\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2FtZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFvQjtBQUNJO0FBQ0s7QUFFZCxTQUFTRyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLE1BQU0sRUFBRUMsSUFBSSxFQUFHLElBQUksR0FBRSxHQUFHRixHQUFHLENBQUNHLEtBQUssRUFBRSxxREFBcUQ7SUFDeEYsTUFBTUMsYUFBYSxHQUFHUCxnREFBUyxDQUFDUyxPQUFPLENBQUNDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRUwsSUFBSSxDQUFDO0lBQzVELE1BQU1NLFNBQVMsR0FBR1oscURBQWMsQ0FBQ1EsYUFBYSxDQUFDLENBQUNNLE1BQU0sQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFJQSxJQUFJLENBQUNDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVyRixNQUFNQyxLQUFLLEdBQUcsRUFBRTtJQUVoQixNQUFNQyxXQUFXLEdBQUcsQ0FBQ0gsSUFBSSxHQUFLO1FBQzVCLE9BQU8sSUFBSUksT0FBTyxDQUFDLENBQUNDLE9BQU8sR0FBSztZQUM5QixNQUFNQyxRQUFRLEdBQUc7Z0JBQUVDLElBQUksRUFBRXJCLG9EQUFhLENBQUNjLElBQUksRUFBRSxNQUFNLENBQUM7Z0JBQUVTLEtBQUssRUFBRSxFQUFFO2FBQUU7WUFDakV4QiwwREFBbUIsQ0FBQ0MsZ0RBQVMsQ0FBQ08sYUFBYSxFQUFFTyxJQUFJLENBQUMsQ0FBQyxDQUNoRFcsSUFBSSxDQUFDeEIsaURBQUcsRUFBRSxDQUFDLENBQ1h5QixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUNDLEdBQUcsR0FBSztnQkFDbkJQLFFBQVEsQ0FBQ0csS0FBSyxDQUFDSyxJQUFJLENBQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUNERCxFQUFFLENBQUMsS0FBSyxFQUFFLElBQU07Z0JBQ2ZWLEtBQUssQ0FBQ1ksSUFBSSxDQUFDUixRQUFRLENBQUMsQ0FBQztnQkFDckJELE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFREQsT0FBTyxDQUFDVyxHQUFHLENBQUNsQixTQUFTLENBQUNtQixHQUFHLENBQUNiLFdBQVcsQ0FBQyxDQUFDLENBQ3BDYyxJQUFJLENBQUMsSUFBTTtRQUNWM0IsR0FBRyxDQUFDNEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNqQixLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FDRGtCLEtBQUssQ0FBQyxDQUFDQyxLQUFLLEdBQUs7UUFDaEJDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLDZCQUE2QixFQUFFQSxLQUFLLENBQUMsQ0FBQztRQUNwRC9CLEdBQUcsQ0FBQzRCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLEtBQUssRUFBRSw0QkFBNEI7U0FBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtZS1yYW5rLWNvbnZlcnRlci8uL3BhZ2VzL2FwaS9nYW1lcy5qcz8xMGMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgY3N2IGZyb20gJ2Nzdi1wYXJzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgbGFuZyA9ICdlbicgfSA9IHJlcS5xdWVyeTsgLy8gR2V0IGxhbmd1YWdlIGZyb20gcXVlcnkgcGFyYW1ldGVyLCBkZWZhdWx0IHRvICdlbidcclxuICBjb25zdCBkYXRhRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgbGFuZyk7XHJcbiAgY29uc3QgZ2FtZUZpbGVzID0gZnMucmVhZGRpclN5bmMoZGF0YURpcmVjdG9yeSkuZmlsdGVyKGZpbGUgPT4gZmlsZS5lbmRzV2l0aCgnLmNzdicpKTtcclxuXHJcbiAgY29uc3QgZ2FtZXMgPSBbXTtcclxuXHJcbiAgY29uc3QgcHJvY2Vzc0ZpbGUgPSAoZmlsZSkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdhbWVEYXRhID0geyBuYW1lOiBwYXRoLmJhc2VuYW1lKGZpbGUsICcuY3N2JyksIHJhbmtzOiBbXSB9O1xyXG4gICAgICBmcy5jcmVhdGVSZWFkU3RyZWFtKHBhdGguam9pbihkYXRhRGlyZWN0b3J5LCBmaWxlKSlcclxuICAgICAgICAucGlwZShjc3YoKSlcclxuICAgICAgICAub24oJ2RhdGEnLCAocm93KSA9PiB7XHJcbiAgICAgICAgICBnYW1lRGF0YS5yYW5rcy5wdXNoKHJvd1snUmFuayddKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgZ2FtZXMucHVzaChnYW1lRGF0YSk7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBQcm9taXNlLmFsbChnYW1lRmlsZXMubWFwKHByb2Nlc3NGaWxlKSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZ2FtZXMpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyBDU1YgZmlsZXM6JywgZXJyb3IpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRXJyb3IgcHJvY2Vzc2luZyBnYW1lIGRhdGEnIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImNzdiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJsYW5nIiwicXVlcnkiLCJkYXRhRGlyZWN0b3J5Iiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJnYW1lRmlsZXMiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsImZpbGUiLCJlbmRzV2l0aCIsImdhbWVzIiwicHJvY2Vzc0ZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImdhbWVEYXRhIiwibmFtZSIsImJhc2VuYW1lIiwicmFua3MiLCJjcmVhdGVSZWFkU3RyZWFtIiwicGlwZSIsIm9uIiwicm93IiwicHVzaCIsImFsbCIsIm1hcCIsInRoZW4iLCJzdGF0dXMiLCJqc29uIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/games.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/games.js"));
module.exports = __webpack_exports__;

})();