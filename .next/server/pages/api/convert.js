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
exports.id = "pages/api/convert";
exports.ids = ["pages/api/convert"];
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

/***/ "(api)/./pages/api/convert.js":
/*!******************************!*\
  !*** ./pages/api/convert.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var csv_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! csv-parser */ \"csv-parser\");\n/* harmony import */ var csv_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(csv_parser__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction handler(req, res) {\n    const { sourceGame , sourceRank , targetGame , lang =\"en\"  } = req.query;\n    const dataDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", lang);\n    const readGameData = (game)=>{\n        return new Promise((resolve)=>{\n            const ranks = [];\n            fs__WEBPACK_IMPORTED_MODULE_0___default().createReadStream(path__WEBPACK_IMPORTED_MODULE_1___default().join(dataDirectory, `${game}.csv`)).pipe(csv_parser__WEBPACK_IMPORTED_MODULE_2___default()()).on(\"data\", (row)=>{\n                ranks.push({\n                    name: row[\"Rank\"],\n                    topPercentage: parseFloat(row[\"Top%\"])\n                });\n            }).on(\"end\", ()=>{\n                resolve(ranks);\n            });\n        });\n    };\n    readGameData(sourceGame).then((sourceRanks)=>{\n        // Find the percentage for the source rank\n        const sourceRankData = sourceRanks.find((r)=>r.name === sourceRank);\n        const sourcePercentage = sourceRankData.topPercentage;\n        if (!targetGame) {\n            res.status(200).json({\n                sourceTopPercentage: sourcePercentage\n            });\n            return;\n        }\n        return readGameData(targetGame).then((targetRanks)=>{\n            // Find the closest rank in the target game\n            let closestRank = targetRanks[0];\n            let smallestDifference = Math.abs(sourcePercentage - targetRanks[0].topPercentage);\n            for (const rank of targetRanks){\n                const difference = Math.abs(sourcePercentage - rank.topPercentage);\n                if (difference < smallestDifference) {\n                    smallestDifference = difference;\n                    closestRank = rank;\n                }\n            }\n            res.status(200).json({\n                targetRank: closestRank.name,\n                sourceTopPercentage: sourcePercentage\n            });\n        });\n    }).catch((error)=>{\n        console.error(\"Error processing CSV files:\", error);\n        res.status(500).json({\n            error: \"Error processing game data\"\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQ0RZLEtBQUssQ0FBQyxDQUFDQyxLQUFLLEdBQUs7UUFDaEJDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLDZCQUE2QixFQUFFQSxLQUFLLENBQUMsQ0FBQztRQUNwRHpDLEdBQUcsQ0FBQzZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVXLEtBQUssRUFBRSw0QkFBNEI7U0FBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtZS1yYW5rLWNvbnZlcnRlci8uL3BhZ2VzL2FwaS9jb252ZXJ0LmpzP2M3OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBjc3YgZnJvbSAnY3N2LXBhcnNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBzb3VyY2VHYW1lLCBzb3VyY2VSYW5rLCB0YXJnZXRHYW1lLCBsYW5nID0gJ2VuJyB9ID0gcmVxLnF1ZXJ5O1xyXG5cclxuICBjb25zdCBkYXRhRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgbGFuZyk7XHJcblxyXG4gIGNvbnN0IHJlYWRHYW1lRGF0YSA9IChnYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgY29uc3QgcmFua3MgPSBbXTtcclxuICAgICAgZnMuY3JlYXRlUmVhZFN0cmVhbShwYXRoLmpvaW4oZGF0YURpcmVjdG9yeSwgYCR7Z2FtZX0uY3N2YCkpXHJcbiAgICAgICAgLnBpcGUoY3N2KCkpXHJcbiAgICAgICAgLm9uKCdkYXRhJywgKHJvdykgPT4ge1xyXG4gICAgICAgICAgcmFua3MucHVzaCh7IFxyXG4gICAgICAgICAgICBuYW1lOiByb3dbJ1JhbmsnXSwgXHJcbiAgICAgICAgICAgIHRvcFBlcmNlbnRhZ2U6IHBhcnNlRmxvYXQocm93WydUb3AlJ10pXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShyYW5rcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZWFkR2FtZURhdGEoc291cmNlR2FtZSlcclxuICAgIC50aGVuKChzb3VyY2VSYW5rcykgPT4ge1xyXG4gICAgICAvLyBGaW5kIHRoZSBwZXJjZW50YWdlIGZvciB0aGUgc291cmNlIHJhbmtcclxuICAgICAgY29uc3Qgc291cmNlUmFua0RhdGEgPSBzb3VyY2VSYW5rcy5maW5kKHIgPT4gci5uYW1lID09PSBzb3VyY2VSYW5rKTtcclxuICAgICAgY29uc3Qgc291cmNlUGVyY2VudGFnZSA9IHNvdXJjZVJhbmtEYXRhLnRvcFBlcmNlbnRhZ2U7XHJcblxyXG4gICAgICBpZiAoIXRhcmdldEdhbWUpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IFxyXG4gICAgICAgICAgc291cmNlVG9wUGVyY2VudGFnZTogc291cmNlUGVyY2VudGFnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlYWRHYW1lRGF0YSh0YXJnZXRHYW1lKS50aGVuKCh0YXJnZXRSYW5rcykgPT4ge1xyXG4gICAgICAgIC8vIEZpbmQgdGhlIGNsb3Nlc3QgcmFuayBpbiB0aGUgdGFyZ2V0IGdhbWVcclxuICAgICAgICBsZXQgY2xvc2VzdFJhbmsgPSB0YXJnZXRSYW5rc1swXTtcclxuICAgICAgICBsZXQgc21hbGxlc3REaWZmZXJlbmNlID0gTWF0aC5hYnMoc291cmNlUGVyY2VudGFnZSAtIHRhcmdldFJhbmtzWzBdLnRvcFBlcmNlbnRhZ2UpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHJhbmsgb2YgdGFyZ2V0UmFua3MpIHtcclxuICAgICAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBNYXRoLmFicyhzb3VyY2VQZXJjZW50YWdlIC0gcmFuay50b3BQZXJjZW50YWdlKTtcclxuICAgICAgICAgIGlmIChkaWZmZXJlbmNlIDwgc21hbGxlc3REaWZmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgIHNtYWxsZXN0RGlmZmVyZW5jZSA9IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgICAgIGNsb3Nlc3RSYW5rID0gcmFuaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgXHJcbiAgICAgICAgICB0YXJnZXRSYW5rOiBjbG9zZXN0UmFuay5uYW1lLFxyXG4gICAgICAgICAgc291cmNlVG9wUGVyY2VudGFnZTogc291cmNlUGVyY2VudGFnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHByb2Nlc3NpbmcgQ1NWIGZpbGVzOicsIGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0Vycm9yIHByb2Nlc3NpbmcgZ2FtZSBkYXRhJyB9KTtcclxuICAgIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJjc3YiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic291cmNlR2FtZSIsInNvdXJjZVJhbmsiLCJ0YXJnZXRHYW1lIiwibGFuZyIsInF1ZXJ5IiwiZGF0YURpcmVjdG9yeSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwicmVhZEdhbWVEYXRhIiwiZ2FtZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmFua3MiLCJjcmVhdGVSZWFkU3RyZWFtIiwicGlwZSIsIm9uIiwicm93IiwicHVzaCIsIm5hbWUiLCJ0b3BQZXJjZW50YWdlIiwicGFyc2VGbG9hdCIsInRoZW4iLCJzb3VyY2VSYW5rcyIsInNvdXJjZVJhbmtEYXRhIiwiZmluZCIsInIiLCJzb3VyY2VQZXJjZW50YWdlIiwic3RhdHVzIiwianNvbiIsInNvdXJjZVRvcFBlcmNlbnRhZ2UiLCJ0YXJnZXRSYW5rcyIsImNsb3Nlc3RSYW5rIiwic21hbGxlc3REaWZmZXJlbmNlIiwiTWF0aCIsImFicyIsInJhbmsiLCJkaWZmZXJlbmNlIiwidGFyZ2V0UmFuayIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/convert.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/convert.js"));
module.exports = __webpack_exports__;

})();