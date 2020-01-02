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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./FrontProjects/Chat/src/Main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./FrontProjects/Chat/src/Context.js":
/*!*******************************************!*\
  !*** ./FrontProjects/Chat/src/Context.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _proxy_SocketConnector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proxy/SocketConnector */ \"./FrontProjects/Chat/src/proxy/SocketConnector.js\");\n\r\n\r\nclass Context {   //用于共享数据    共享SocketConnection\r\n\r\n    constructor() {\r\n        this._socketConnector = new _proxy_SocketConnector__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    }\r\n\r\n    get socketConnector() {\r\n        return this._socketConnector;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Context);\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/Context.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/Events.js":
/*!******************************************!*\
  !*** ./FrontProjects/Chat/src/Events.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Events = {\r\n\r\n    LIST_CLENTS: \"listClients\",\r\n    MSG: \"msg\"\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Events);\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/Events.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/Main.js":
/*!****************************************!*\
  !*** ./FrontProjects/Chat/src/Main.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_MainApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/MainApp */ \"./FrontProjects/Chat/src/controllers/MainApp.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ \"./FrontProjects/Chat/src/Context.js\");\n\r\n\r\n\r\nlet context = new _Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\nlet mainApp = new _controllers_MainApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nmainApp.$mount($(\"<div></div>\").appendTo(document.body)[0]);\r\nmainApp.setContext(context);     //一切从这里开始\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/Main.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/controllers/ClientList.js":
/*!**********************************************************!*\
  !*** ./FrontProjects/Chat/src/controllers/ClientList.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_ClientList_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/ClientList.html */ \"./FrontProjects/Chat/src/views/ClientList.html\");\n/* harmony import */ var _views_ClientList_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_ClientList_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Events */ \"./FrontProjects/Chat/src/Events.js\");\n\r\n\r\n\r\nconst ClientList = Vue.component(\"client-list\", {\r\n\r\n    template: _views_ClientList_html__WEBPACK_IMPORTED_MODULE_0___default.a,\r\n    data() {\r\n        return {\r\n            clients: new Map(),\r\n            currentSocketId: \"\"\r\n        }\r\n    },\r\n    methods: {\r\n\r\n        setContext(context) {\r\n\r\n            this._context = context;\r\n\r\n            $(context.socketConnector).on(_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LIST_CLENTS, (event, data) => {\r\n                this.currentSocketId = data.currentSocketId;\r\n\r\n                let tmpMap = new Map();\r\n                this.clients.forEach((v, k) => {\r\n                    tmpMap.set(k, v);\r\n                });\r\n                this.clients.clear();\r\n\r\n                data.clients.forEach(socketId => {\r\n                   if (tmpMap.has(socketId)) {\r\n                       this.clients.set(socketId, tmpMap.get(socketId));\r\n                   } else {\r\n                       this.clients.set(socketId, {socketId: socketId, chatLog: []});\r\n                   }\r\n                });\r\n\r\n                this.$forceUpdate();  //强制刷新\r\n                // this.clients.push(...data.clients);\r\n            });\r\n\r\n            $(context.socketConnector).on(_Events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MSG, (e, data) => {\r\n                console.log(data);\r\n                let targetSocketId;\r\n                if (data.sender === this.currentSocketId) {\r\n                    targetSocketId = data.receiver;\r\n                } else if (data.receiver === this.currentSocketId) {\r\n                    targetSocketId = data.sender;\r\n                }\r\n\r\n                if (targetSocketId) {\r\n                    let target = this.clients.get(targetSocketId);\r\n                    if (target) {\r\n                        target.chatLog.push(data.msg);\r\n                    }\r\n                }\r\n            });\r\n        },\r\n\r\n        targetSocketIDClicked(e) {\r\n\r\n            let selectedSocketId = $(e.target).data(\"socket_id\");\r\n            if (selectedSocketId !==  this._context.socketConnector.socketId) {\r\n                this.$emit(\"selected_target\", this.clients.get(selectedSocketId));\r\n            } else {\r\n                alert(\"现在还不能跟自己聊天喔!\");\r\n            }\r\n        },\r\n\r\n        getSocketIdLabel(socketId) {\r\n            if (socketId !== this.currentSocketId) {\r\n                return socketId;\r\n            } else {\r\n                return socketId + \"[自己]\";\r\n            }\r\n        }\r\n    }\r\n});\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/controllers/ClientList.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/controllers/MainApp.js":
/*!*******************************************************!*\
  !*** ./FrontProjects/Chat/src/controllers/MainApp.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ClientList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientList */ \"./FrontProjects/Chat/src/controllers/ClientList.js\");\n/* harmony import */ var _views_MainApp_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/MainApp.html */ \"./FrontProjects/Chat/src/views/MainApp.html\");\n/* harmony import */ var _views_MainApp_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_views_MainApp_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Events */ \"./FrontProjects/Chat/src/Events.js\");\n\r\n\r\n\r\n\r\nconst MainApp = Vue.component(\"main-app\", {\r\n\r\n    template: _views_MainApp_html__WEBPACK_IMPORTED_MODULE_1___default.a,\r\n    data() {\r\n        return {\r\n            targetSocketId: \"\",\r\n            output: []\r\n        }\r\n    },\r\n\r\n    computed: {\r\n        outputMsg() {\r\n            return this.output.join(\"\\n\");\r\n        }\r\n    },\r\n\r\n    methods: {\r\n\r\n        setContext(context) {\r\n            this._context = context;\r\n\r\n            this.$refs.client_list.setContext(context);\r\n\r\n            /*$(this._context.socketConnector).on(Events.MSG, (e, data) => {\r\n                console.log(data);\r\n                this.$refs.output.value += data.msg + \"\\n\";\r\n            });*/\r\n        },\r\n\r\n        selectedTargetHandler(target) {\r\n            console.log(target);\r\n            this.targetSocketId = target.socketId;\r\n            this.output = target.chatLog;\r\n        },\r\n\r\n        submitHandler(e) {\r\n            e.preventDefault();   //阻止事件默认行为\r\n            console.log(e.target.msg.value);\r\n            if (this.targetSocketId) {\r\n                this._context.socketConnector.sendMsg(e.target.msg.value, this.targetSocketId);\r\n                e.target.msg.value =  \"\";\r\n            }\r\n        }\r\n    },\r\n\r\n    watch: {\r\n        output() {\r\n            this.$nextTick(function () {\r\n                this.$refs.output.scrollTop = this.$refs.output.scrollHeight;\r\n            });\r\n        }\r\n    }\r\n});\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainApp);\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/controllers/MainApp.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/proxy/SocketConnector.js":
/*!*********************************************************!*\
  !*** ./FrontProjects/Chat/src/proxy/SocketConnector.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Events */ \"./FrontProjects/Chat/src/Events.js\");\n\r\n\r\nclass SocketConnector {\r\n\r\n    constructor() {    //连接服务器\r\n        this._socket = io();\r\n        this._socket.on(\"listClients\", clients => {\r\n           $(this).trigger(_Events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LIST_CLENTS, {clients: clients, currentSocketId: this._socket.id});\r\n        });\r\n\r\n        this._socket.on(\"msg\", data => {\r\n            // console.log(data);\r\n            $(this).trigger(_Events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MSG, data);\r\n        });\r\n\r\n    }\r\n\r\n    get socketId() {\r\n        return this._socket.id;\r\n    }\r\n\r\n    sendMsg(msg, targetSocketId) {  //发送到服务器\r\n        this._socket.emit(\"msg\", {receiver: targetSocketId, sender: this._socket.id, msg: msg});\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocketConnector);\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/proxy/SocketConnector.js?");

/***/ }),

/***/ "./FrontProjects/Chat/src/views/ClientList.html":
/*!******************************************************!*\
  !*** ./FrontProjects/Chat/src/views/ClientList.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"card\\\" style=\\\"width: 230px;\\\">\\r\\n    <div class=\\\"card-header\\\" style=\\\"text-align: center\\\">\\r\\n        客户端列表\\r\\n    </div>\\r\\n    <div>\\r\\n        <button @click=\\\"targetSocketIDClicked\\\" style=\\\"width: 100%\\\" class=\\\"btn btn-outline-dark btn-sm\\\"\\r\\n                v-for=\\\"k in clients.keys()\\\" :data-socket_id=\\\"k\\\">\\r\\n            {{getSocketIdLabel(k)}}\\r\\n        </button>\\r\\n    </div>\\r\\n</div>\";\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/views/ClientList.html?");

/***/ }),

/***/ "./FrontProjects/Chat/src/views/MainApp.html":
/*!***************************************************!*\
  !*** ./FrontProjects/Chat/src/views/MainApp.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div style=\\\"display: flex;flex-direction: row;\\\">\\r\\n    <client-list ref=\\\"client_list\\\" @selected_target=\\\"selectedTargetHandler\\\"></client-list>\\r\\n    <div class=\\\"card\\\" style=\\\"margin-left: 20px;flex: 1;\\\">\\r\\n        <div class=\\\"card-header\\\">\\r\\n            <span v-if=\\\"targetSocketId\\\">\\r\\n                {{targetSocketId}}\\r\\n            </span>\\r\\n            <span v-else>\\r\\n                No Target Socket Id\\r\\n            </span>\\r\\n        </div>\\r\\n        <div class=\\\"card-body\\\">\\r\\n            <textarea style=\\\"width: 100%; height: 500px; resize: none;\\\" class=\\\"form-control\\\" ref=\\\"output\\\" v-model=\\\"outputMsg\\\" readonly></textarea>\\r\\n            <form action=\\\"\\\" style=\\\"margin-top: 20px; display: flex;flex-direction: row;\\\" @submit=\\\"submitHandler\\\">\\r\\n                <input type=\\\"text \\\" name=\\\"msg\\\" required class=\\\"form-control\\\" style=\\\"flex: 1;\\\">\\r\\n                <input type=\\\"submit\\\" value=\\\"发送\\\" style=\\\"margin-left: 20px;\\\" class=\\\"btn btn-primary\\\">\\r\\n            </form>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\";\n\n//# sourceURL=webpack:///./FrontProjects/Chat/src/views/MainApp.html?");

/***/ })

/******/ });