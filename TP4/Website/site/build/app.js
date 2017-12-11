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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// This is your JS Entry point... You can add as many as JS files you want if you think it is better!\n\n// import axios from 'axios';\n\n// function alphanumeric()  \n// {   \n//    var inputtxt = document.getElementById('todoCalci').value;\n//    console.log(inputtxt);\n//    var len=inpzuttxt.length;\n//    var data = inputtxt;\n//    var regex = /^[\\d]+[\\*\\-\\/\\+][\\d]+$/;\n//    var result = regex.test(inputtxt);\n//    var div = \"/\";\n//    var sym = inputtxt.search(div);\n//    console.log(result);\n//    console.log(len);\n//     if(len!=0)\n//     {\n\n//         if(result === true){\n//            if(sym===-1)\n//            {\n//             axios.get(\"http://localhost:8080/\")\n//             .then(function(response){\n//                 console.log(response.status+\"\"+response.statusText);\n//             })\n//             .catch(function(error){\n//                 console.log(response.error);\n//             })\n//             alert(\"proper statement\");\n//            }\n//            else{\n\n// alert(\"proper statement\");\n\n//            }\n\n//     }\n//         else{\n//             alert(\"Syntax error\");\n//         }\n\n//     }\n\n//     else{\n//         alert(\"Syntax error\");\n//     }\n\n//     console.log(result);\n// }\n\n//import axios from 'axios';\n\ndocument.getElementById('btn-check').onclick = function () {\n    var resultElement = document.getElementById('answer-str');\n    var v1 = document.getElementById('todoCalci').value;\n\n    axios.post('http://localhost:8081/', {\n        method: \"post\",\n        data: {\n            formula: v1\n        }\n    }).then(function (response) {\n        var inputtxt = v1;\n        console.log(inputtxt);\n        var len = inputtxt.length;\n        var data = inputtxt;\n        var regex = /^[\\d]+[\\*\\-\\/\\+][\\d]+$/;\n        var result = regex.test(inputtxt);\n        var div = \"/\";\n        var zer = \"0\";\n        var sym = inputtxt.split(\"\");\n        console.log(result);\n        console.log(len);\n        console.log(sym);\n\n        if (len != 0) {\n\n            if (result === true) {\n                for (i = 1; i < len; i++) {\n                    if (sym[i] === div && sym[i + 1] === zer) {\n                        alert(\"math error\");\n                        resultElement.innerHTML = 'math error';\n                        return;\n                    }\n                }\n                resultElement.innerHTML = 'Valid Input';\n                alert(\"valid input\");\n            } else {\n                resultElement.innerHTML = 'Syntax error';\n                alert(\"Syntax error\");\n            }\n        } else {\n            resultElement.innerHTML = 'Syntax error';\n            alert(\"Syntax error\");\n        }\n\n        console.log(result);\n    }).catch(function (error) {\n        resultElement.innerHTML = 'Invalid Input....!!';\n    });\n};\n\ndocument.getElementById('btn-eval').onclick = function () {\n    var resultElement = document.getElementById('answer-str');\n    var v1 = document.getElementById('btn-eval').value;\n\n    axios.post('http://localhost:8081/', {\n        method: \"post\",\n        data: {\n            formula: v1\n        }\n    }).then(function (response) {\n        resultElement.innerHTML = eval(v1);\n    }).catch(function (error) {\n        resultElement.innerHTML = 'Syntax error';\n    });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2pzL2luZGV4LmpzP2RhZDQiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9uY2xpY2siLCJyZXN1bHRFbGVtZW50IiwidjEiLCJ2YWx1ZSIsImF4aW9zIiwicG9zdCIsIm1ldGhvZCIsImRhdGEiLCJmb3JtdWxhIiwidGhlbiIsInJlc3BvbnNlIiwiaW5wdXR0eHQiLCJjb25zb2xlIiwibG9nIiwibGVuIiwibGVuZ3RoIiwicmVnZXgiLCJyZXN1bHQiLCJ0ZXN0IiwiZGl2IiwiemVyIiwic3ltIiwic3BsaXQiLCJpIiwiYWxlcnQiLCJpbm5lckhUTUwiLCJjYXRjaCIsImVycm9yIiwiZXZhbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBQSxTQUFTQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDQyxPQUFyQyxHQUErQyxZQUMvQztBQUNJLFFBQUlDLGdCQUFnQkgsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixDQUFwQjtBQUNBLFFBQUlHLEtBQUtKLFNBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNJLEtBQTlDOztBQUVBQyxVQUFNQyxJQUFOLENBQVcsd0JBQVgsRUFBcUM7QUFDckNDLGdCQUFRLE1BRDZCO0FBRXJDQyxjQUFLO0FBQ0RDLHFCQUFTTjtBQURSO0FBRmdDLEtBQXJDLEVBTUNPLElBTkQsQ0FNTSxVQUFDQyxRQUFELEVBQ047QUFDQyxZQUFJQyxXQUFXVCxFQUFmO0FBQ0FVLGdCQUFRQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxZQUFJRyxNQUFJSCxTQUFTSSxNQUFqQjtBQUNBLFlBQUlSLE9BQU9JLFFBQVg7QUFDQSxZQUFJSyxRQUFRLHdCQUFaO0FBQ0EsWUFBSUMsU0FBU0QsTUFBTUUsSUFBTixDQUFXUCxRQUFYLENBQWI7QUFDQSxZQUFJUSxNQUFNLEdBQVY7QUFDQSxZQUFJQyxNQUFNLEdBQVY7QUFDQSxZQUFJQyxNQUFNVixTQUFTVyxLQUFULENBQWUsRUFBZixDQUFWO0FBQ0FWLGdCQUFRQyxHQUFSLENBQVlJLE1BQVo7QUFDQUwsZ0JBQVFDLEdBQVIsQ0FBWUMsR0FBWjtBQUNBRixnQkFBUUMsR0FBUixDQUFZUSxHQUFaOztBQUVDLFlBQUdQLE9BQUssQ0FBUixFQUNBOztBQUVJLGdCQUFHRyxXQUFXLElBQWQsRUFBbUI7QUFDbEIscUJBQUtNLElBQUUsQ0FBUCxFQUFTQSxJQUFFVCxHQUFYLEVBQWVTLEdBQWYsRUFBbUI7QUFDZix3QkFBSUYsSUFBSUUsQ0FBSixNQUFTSixHQUFULElBQWdCRSxJQUFJRSxJQUFFLENBQU4sTUFBV0gsR0FBL0IsRUFDQTtBQUNJSSw4QkFBTSxZQUFOO0FBQ0F2QixzQ0FBY3dCLFNBQWQsR0FBMEIsWUFBMUI7QUFDQTtBQUNIO0FBQ0o7QUFDRHhCLDhCQUFjd0IsU0FBZCxHQUEwQixhQUExQjtBQUNBRCxzQkFBTSxhQUFOO0FBQ0osYUFYRyxNQVlJO0FBQ0F2Qiw4QkFBY3dCLFNBQWQsR0FBMEIsY0FBMUI7QUFDQUQsc0JBQU0sY0FBTjtBQUNIO0FBRUosU0FwQkQsTUFzQkk7QUFDQXZCLDBCQUFjd0IsU0FBZCxHQUEwQixjQUExQjtBQUNBRCxrQkFBTSxjQUFOO0FBQ0g7O0FBRURaLGdCQUFRQyxHQUFSLENBQVlJLE1BQVo7QUFFRCxLQWxERCxFQW1EQ1MsS0FuREQsQ0FtRE8sVUFBQ0MsS0FBRCxFQUNQO0FBQ0kxQixzQkFBY3dCLFNBQWQsR0FBMEIscUJBQTFCO0FBQ0gsS0F0REQ7QUF3REgsQ0E3REQ7O0FBK0RBM0IsU0FBU0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsT0FBcEMsR0FBOEMsWUFDOUM7QUFDSSxRQUFJQyxnQkFBZ0JILFNBQVNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBcEI7QUFDQSxRQUFJRyxLQUFLSixTQUFTQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DSSxLQUE3Qzs7QUFFSkMsVUFBTUMsSUFBTixDQUFXLHdCQUFYLEVBQXFDO0FBQ2pDQyxnQkFBUSxNQUR5QjtBQUVqQ0MsY0FBSztBQUNEQyxxQkFBU047QUFEUjtBQUY0QixLQUFyQyxFQU1DTyxJQU5ELENBTU0sVUFBQ0MsUUFBRCxFQUNOO0FBQ0lULHNCQUFjd0IsU0FBZCxHQUEwQkcsS0FBSzFCLEVBQUwsQ0FBMUI7QUFDSCxLQVRELEVBVUN3QixLQVZELENBVU8sVUFBQ0MsS0FBRCxFQUNQO0FBQ0kxQixzQkFBY3dCLFNBQWQsR0FBMEIsY0FBMUI7QUFDSCxLQWJEO0FBZUMsQ0FwQkQiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgeW91ciBKUyBFbnRyeSBwb2ludC4uLiBZb3UgY2FuIGFkZCBhcyBtYW55IGFzIEpTIGZpbGVzIHlvdSB3YW50IGlmIHlvdSB0aGluayBpdCBpcyBiZXR0ZXIhXHJcblxyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuLy8gZnVuY3Rpb24gYWxwaGFudW1lcmljKCkgIFxyXG4vLyB7ICAgXHJcbi8vICAgIHZhciBpbnB1dHR4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvQ2FsY2knKS52YWx1ZTtcclxuLy8gICAgY29uc29sZS5sb2coaW5wdXR0eHQpO1xyXG4vLyAgICB2YXIgbGVuPWlucHp1dHR4dC5sZW5ndGg7XHJcbi8vICAgIHZhciBkYXRhID0gaW5wdXR0eHQ7XHJcbi8vICAgIHZhciByZWdleCA9IC9eW1xcZF0rW1xcKlxcLVxcL1xcK11bXFxkXSskLztcclxuLy8gICAgdmFyIHJlc3VsdCA9IHJlZ2V4LnRlc3QoaW5wdXR0eHQpO1xyXG4vLyAgICB2YXIgZGl2ID0gXCIvXCI7XHJcbi8vICAgIHZhciBzeW0gPSBpbnB1dHR4dC5zZWFyY2goZGl2KTtcclxuLy8gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuLy8gICAgY29uc29sZS5sb2cobGVuKTtcclxuLy8gICAgIGlmKGxlbiE9MClcclxuLy8gICAgIHtcclxuXHJcbi8vICAgICAgICAgaWYocmVzdWx0ID09PSB0cnVlKXtcclxuLy8gICAgICAgICAgICBpZihzeW09PT0tMSlcclxuLy8gICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIilcclxuLy8gICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzK1wiXCIrcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcil7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5lcnJvcik7XHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgIGFsZXJ0KFwicHJvcGVyIHN0YXRlbWVudFwiKTtcclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgZWxzZXtcclxuXHJcbi8vIGFsZXJ0KFwicHJvcGVyIHN0YXRlbWVudFwiKTtcclxuXHJcbi8vICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuLy8gICAgIH1cclxuLy8gICAgICAgICBlbHNle1xyXG4vLyAgICAgICAgICAgICBhbGVydChcIlN5bnRheCBlcnJvclwiKTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgfVxyXG4gICAgXHJcbi8vICAgICBlbHNle1xyXG4vLyAgICAgICAgIGFsZXJ0KFwiU3ludGF4IGVycm9yXCIpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbi8vIH1cclxuXHJcbi8vaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY2hlY2snKS5vbmNsaWNrID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICB2YXIgcmVzdWx0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXItc3RyJyk7XHJcbiAgICB2YXIgdjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0NhbGNpJykudmFsdWU7XHJcblxyXG4gICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgxLycsIHtcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOntcclxuICAgICAgICBmb3JtdWxhOiB2MSAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cclxuICAgIHtcclxuICAgICB2YXIgaW5wdXR0eHQgPSB2MTtcclxuICAgICBjb25zb2xlLmxvZyhpbnB1dHR4dCk7XHJcbiAgICAgdmFyIGxlbj1pbnB1dHR4dC5sZW5ndGg7XHJcbiAgICAgdmFyIGRhdGEgPSBpbnB1dHR4dDtcclxuICAgICB2YXIgcmVnZXggPSAvXltcXGRdK1tcXCpcXC1cXC9cXCtdW1xcZF0rJC87XHJcbiAgICAgdmFyIHJlc3VsdCA9IHJlZ2V4LnRlc3QoaW5wdXR0eHQpO1xyXG4gICAgIHZhciBkaXYgPSBcIi9cIjtcclxuICAgICB2YXIgemVyID0gXCIwXCI7XHJcbiAgICAgdmFyIHN5bSA9IGlucHV0dHh0LnNwbGl0KFwiXCIpO1xyXG4gICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgY29uc29sZS5sb2cobGVuKTtcclxuICAgICBjb25zb2xlLmxvZyhzeW0pO1xyXG4gICAgIFxyXG4gICAgICBpZihsZW4hPTApXHJcbiAgICAgIHtcclxuICBcclxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgZm9yIChpPTE7aTxsZW47aSsrKXtcclxuICAgICAgICAgICAgICAgaWYgKHN5bVtpXT09PWRpdiAmJiBzeW1baSsxXT09PXplcilcclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgYWxlcnQoXCJtYXRoIGVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgcmVzdWx0RWxlbWVudC5pbm5lckhUTUwgPSAnbWF0aCBlcnJvcic7XHJcbiAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgcmVzdWx0RWxlbWVudC5pbm5lckhUTUwgPSAnVmFsaWQgSW5wdXQnO1xyXG4gICAgICAgICAgIGFsZXJ0KFwidmFsaWQgaW5wdXRcIik7XHJcbiAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgcmVzdWx0RWxlbWVudC5pbm5lckhUTUwgPSAnU3ludGF4IGVycm9yJztcclxuICAgICAgICAgICAgICBhbGVydChcIlN5bnRheCBlcnJvclwiKTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZWxzZXtcclxuICAgICAgICAgIHJlc3VsdEVsZW1lbnQuaW5uZXJIVE1MID0gJ1N5bnRheCBlcnJvcic7XHJcbiAgICAgICAgICBhbGVydChcIlN5bnRheCBlcnJvclwiKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PlxyXG4gICAge1xyXG4gICAgICAgIHJlc3VsdEVsZW1lbnQuaW5uZXJIVE1MID0gJ0ludmFsaWQgSW5wdXQuLi4uISEnO1xyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tZXZhbCcpLm9uY2xpY2sgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIHZhciByZXN1bHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlci1zdHInKTtcclxuICAgIHZhciB2MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tZXZhbCcpLnZhbHVlO1xyXG5cclxuYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgxLycsIHtcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOntcclxuICAgICAgICBmb3JtdWxhOiB2MSAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuLnRoZW4oKHJlc3BvbnNlKSA9PlxyXG57XHJcbiAgICByZXN1bHRFbGVtZW50LmlubmVySFRNTCA9IGV2YWwodjEpO1xyXG59KVxyXG4uY2F0Y2goKGVycm9yKSA9PlxyXG57XHJcbiAgICByZXN1bHRFbGVtZW50LmlubmVySFRNTCA9ICdTeW50YXggZXJyb3InO1xyXG59KVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvanMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);