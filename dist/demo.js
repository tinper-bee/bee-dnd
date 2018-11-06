/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _beeLayout = __webpack_require__(1);
	
	var _beePanel = __webpack_require__(8);
	
	var _beeButton = __webpack_require__(78);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var CARET = _react2['default'].createElement('i', { className: 'uf uf-arrow-down' });
	
	var CARETUP = _react2['default'].createElement('i', { className: 'uf uf-arrow-up' });
	
	var Demo1 = __webpack_require__(80);var Demo2 = __webpack_require__(187);var Demo3 = __webpack_require__(188);var Demo4 = __webpack_require__(189);var Demo5 = __webpack_require__(190);var Demo6 = __webpack_require__(191);var Demo7 = __webpack_require__(192);var Demo8 = __webpack_require__(193);var Demo9 = __webpack_require__(194);var Demo90 = __webpack_require__(195);var Demo91 = __webpack_require__(196);var Demo92 = __webpack_require__(197);var DemoArray = [{ "example": _react2['default'].createElement(Demo1, null), "title": " 基础拖拽", "code": "\n/**\n *\n * @title 基础拖拽\n * @description 将某个元素设置为可拖拽\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo1 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <Dnd onStart={this.onStart} onStop={this.onStop}>\n                    <div className=\"demo\">我可随意拖拽</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}\n\n", "desc": " 将某个元素设置为可拖拽", "scss_code": ".demo {\n    width: 250px;\n    height: 50px;\n    line-height: 50px;\n    border: 1px solid rgb(30, 136, 229);\n    color: #000000;\n    text-align: center;\n    cursor: all-scroll;\n}" }, { "example": _react2['default'].createElement(Demo2, null), "title": " 单个元素沿x轴y轴拖拽", "code": "\n/**\n *\n * @title 单个元素沿x轴y轴拖拽\n * @description 设置axis=\"x\"只可以沿着x轴拖拽，同理axis=\"y\"只可以沿着y轴拖拽\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo2 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <Dnd axis=\"x\" onStart={this.onStart} onStop={this.onStop}>\n                    <div className=\"demo\">我只可延X轴拖拽</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}\n\n", "desc": " 设置axis=\"x\"只可以沿着x轴拖拽，同理axis=\"y\"只可以沿着y轴拖拽", "scss_code": ".demo {\n  width: 250px;\n  height: 50px;\n  line-height: 50px;\n  border: 1px solid rgb(30, 136, 229);\n  color: #000000;\n  text-align: center;\n  cursor: all-scroll;\n}" }, { "example": _react2['default'].createElement(Demo3, null), "title": " 设置元素不可拖拽", "code": "\n/**\n *\n * @title 设置元素不可拖拽\n * @description 设置 onStart 的返回值为false，则不可以拖拽\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo3 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n        return false;\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <Dnd onStart={this.onStart}  onStop={this.onStop}>\n                    <div className=\"demo\">我不可以拖拽</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}\n", "desc": " 设置 onStart 的返回值为false，则不可以拖拽", "scss_code": ".demo {\n  width: 250px;\n  height: 50px;\n  line-height: 50px;\n  border: 1px solid rgb(30, 136, 229);\n  color: #000000;\n  text-align: center;\n  cursor: all-scroll;\n}" }, { "example": _react2['default'].createElement(Demo4, null), "title": " 单个元素拖拽把手", "code": "/**\n *\n * @title 单个元素拖拽把手\n * @description 设置 handle，值为选择器，例如 '.handle'\n *              设置不可拖拽区域 cancel，值为选择器，例如 '.handle'\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo4 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n\n    render() {\n        return (\n            <div className=\"demo-4\">\n                <div>\n                    <Dnd handle=\".handle\" onStart={this.onStart} onStop={this.onStop}>\n                        <div className=\"demo4 \">\n                            <div className=\"handle\">我是把手</div>\n                            <div className=\"drag-context\">需要拖拽把手</div>\n                        </div>\n                    </Dnd>\n                </div>\n                <div>\n                    <Dnd cancel=\".handle\" >\n                        <div className=\"demo4 \">\n                            <div className=\"handle\">我是把手</div>\n                            <div className=\"drag-context\">不要拖拽把手</div>\n                        </div>\n                    </Dnd>\n                </div>\n            </div>\n\n\n        );\n    }\n}\n\n", "desc": " 设置 handle，值为选择器，例如 '.handle'", "scss_code": "\n.demo4 {\n  width: 250px;\n  line-height: 50px;\n  border: 1px solid rgb(30, 136, 229);\n  color: #000000;\n  text-align: center;\n  cursor: all-scroll;\n  border: 1px solid rgb(30, 136, 229);\n  height: 80px;\n}\n\n.demo4 .handle {\n  height: 20px;\n  line-height: 20px;\n  background: lightgrey;\n  margin: 10px;\n}\n\n.demo4 .drag-context {\n  height: 50px;\n  line-height: 50px;\n}\n\n.demo-4>div {\n  display: inline-block;\n  padding: 10px;\n}" }, { "example": _react2['default'].createElement(Demo5, null), "title": " 每次拖拽移动距离", "code": "\n/**\n *\n * @title 每次拖拽移动距离\n * @description 设置 grid={[x,y]}\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo5 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <Dnd grid={[25, 25]} onStart={this.onStart}  onStop={this.onStop}>\n                    <div className=\"demo\">我每次拖拽可移动25px</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}\n\n", "desc": " 设置 grid={[x,y]}", "scss_code": ".demo {\n  width: 250px;\n  height: 50px;\n  line-height: 50px;\n  border: 1px solid rgb(30, 136, 229);\n  color: #000000;\n  text-align: center;\n  cursor: all-scroll;\n}" }, { "example": _react2['default'].createElement(Demo6, null), "title": " 元素拖拽范围", "code": "\n/**\n *\n * @title 元素拖拽范围\n * @description 设置上下左右可拖拽范围 bounds={{top: -xxx, left: -xxx, right: xxx, bottom: xx}}\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo6 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <Dnd bounds={{top: -50, left: -50, right: 50, bottom: 50}} onStart={this.onStart} onStop={this.onStop}>\n                    <div className=\"demo\">我只能再上下左右50px内移动</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}\n\n", "desc": " 设置上下左右可拖拽范围 bounds={{top: -xxx, left: -xxx, right: xxx, bottom: xx}}", "scss_code": ".demo {\n  width: 250px;\n  height: 50px;\n  line-height: 50px;\n  border: 1px solid rgb(30, 136, 229);\n  color: #000000;\n  text-align: center;\n  cursor: all-scroll;\n}" }, { "example": _react2['default'].createElement(Demo7, null), "title": " 在指定容器中拖拽", "code": "\n/**\n *\n * @title 在指定容器中拖拽\n * @description 设置只可以在指定容器中移动\n * bounds的也可以设置为选择器,bounds=\".demo8-parent\"意为在class=demo8-parent的容器中移动\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo7 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <div className=\"demo7-parent\">\n                    <Dnd bounds=\".demo7-parent\" onStart={this.onStart} onStop={this.onStop}>\n                        <div className=\"demo\">我只能在父级元素中移动</div>\n                    </Dnd>\n                </div>\n            </div>\n\n\n        );\n    }\n}\n\n", "desc": " 设置只可以在指定容器中移动", "scss_code": ".demo {\n  width: 250px;\n  height: 50px;\n  line-height: 50px;\n  border: 1px solid rgb(30, 136, 229);\n  color: #000000;\n  text-align: center;\n  cursor: all-scroll;\n}\n\n.demo7-parent {\n  width: 300px;\n  height: 200px;\n  background: lightgrey;\n  position: relative;\n}" }, { "example": _react2['default'].createElement(Demo8, null), "title": " 数据集合拖拽列表排序", "code": "/**\n *\n * @title 数据集合拖拽列表排序\n * @description 增加list 可以为 [1,2,3]数组，\n *              也可以为 [{},{}...]，需要配置 showKey 。\n *              也可以为 dom集合，见后边示例\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo8 extends Component {\n    \n    onDragStart=(result,list)=>{\n        console.log('开始');\n    }\n    onDragEnd=(result,list)=>{   \n        console.log('结束');\n    }\n    onDragUpdate=(result)=>{\n        console.log('update')\n    }\n    render() {\n        let list=[\n            {\n                name:'第一',\n                code:'a'\n            },\n            {\n                name:'第二',\n                code:'b'\n            },\n            {\n                name:'第三',\n                code:'c'\n            },\n            {\n                name:'第四',\n                code:'d'\n            },\n            {\n                name:'第五',\n                code:'e'\n            },\n        ];\n        return (\n            <Dnd showKey='name' list={list} onDragUpdate={this.onDragUpdate} onStart={this.onDragStart} onStop={this.onDragEnd}/>\n        );\n    }\n}\n\n", "desc": " 增加list 可以为 [1,2,3]数组，", "scss_code": "" }, { "example": _react2['default'].createElement(Demo9, null), "title": " DOM集合拖拽列表排序", "code": "\n/**\n *\n * @title DOM集合拖拽列表排序\n * @description list传dom集合\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo9 extends Component {\n\n    onDragStart=(result,list)=>{\n        console.log('开始');\n    }\n    onDragEnd=(result,list)=>{\n        console.log('结束');\n    }\n    render() {\n        let list=[<div>DOM第一</div>,<div>DOM第二</div>,<div>DOM第三</div>,<div>DOM第四</div>,<div>DOM第五</div>];\n        return (\n           <Dnd list={list} onStart={this.onDragStart} onStop={this.onDragEnd} />\n        );\n    }\n}\n\n", "desc": " list传dom集合" }, { "example": _react2['default'].createElement(Demo90, null), "title": " 横向拖拽列表排序", "code": "\n/**\n *\n * @title 横向拖拽列表排序\n * @description type='horizontal'\n *\n */\n\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport Dnd from \"tinper-bee/lib/Dnd\";;\n\nclass Demo90 extends Component {\n\n    render() {\n        let list=['第一','第二','第三','第四','第五'];\n        return (\n           <Dnd list={list} type='horizontal'  />\n        );\n    }\n}\n\n", "desc": " type='horizontal'" }, { "example": _react2['default'].createElement(Demo91, null), "title": " 两列纵向拖拽", "code": "\n/**\n *\n * @title 两列纵向拖拽\n * @description 设置 type='betweenVertical'。 如果不设置高度以及 overflow: scroll; 则高度会自动撑开\n *\n */\n\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport Dnd from \"tinper-bee/lib/Dnd\";;\n\nclass Demo90 extends Component {\n\n    render() {\n        let list1=['第一','第二','第三','第四','第五'];\n        let list2=['1','2','3','4','5'];\n        return (\n           <Dnd className='demo91' list={list1} otherList={list2} type='betweenVertical'  />\n        );\n    }\n}\n\n", "desc": " 设置 type='betweenVertical'。 如果不设置高度以及 overflow: scroll; 则高度会自动撑开", "scss_code": ".u-drop{\n    overflow: scroll;\n}\n.u-drag-between{\n    height: 300px;\n}" }, { "example": _react2['default'].createElement(Demo92, null), "title": " 两列横向拖拽", "code": "\n/**\n *\n * @title 两列横向拖拽\n * @description 设置 type='betweenVertical'\n *\n */\n\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport Dnd from \"tinper-bee/lib/Dnd\";;\n\nclass Demo90 extends Component {\n    onDragStart=(result,list)=>{\n        console.log('开始');\n    }\n    onDragEnd=(result,listObj)=>{\n        console.log('结束');\n        console.log(listObj)\n    }\n    render() {\n        let list1=['第一','第二','第三','第四','第五'];\n        let list2=['1','2','3','4','5'];\n        return (\n           <Dnd list={list1} otherList={list2} type='betweenHorizontal' onStart={this.onDragStart} onStop={this.onDragEnd} />\n        );\n    }\n}\n\n", "desc": " 设置 type='betweenVertical'", "scss_code": ".u-drop{\n    overflow: scroll;\n}\n.u-drag-between-horizontal{\n    height: 200px;\n}" }];
	
	var Demo = function (_Component) {
	    _inherits(Demo, _Component);
	
	    function Demo(props) {
	        _classCallCheck(this, Demo);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.state = {
	            open: false
	        };
	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }
	
	    Demo.prototype.handleClick = function handleClick() {
	        this.setState({ open: !this.state.open });
	    };
	
	    Demo.prototype.render = function render() {
	        var _props = this.props,
	            title = _props.title,
	            example = _props.example,
	            code = _props.code,
	            desc = _props.desc,
	            scss_code = _props.scss_code;
	
	        var caret = this.state.open ? CARETUP : CARET;
	        var text = this.state.open ? "隐藏代码" : "查看代码";
	
	        var header = _react2['default'].createElement(
	            'div',
	            null,
	            example,
	            _react2['default'].createElement(
	                _beeButton2['default'],
	                { style: { "marginTop": "10px" }, shape: 'block', onClick: this.handleClick },
	                caret,
	                text
	            )
	        );
	        return _react2['default'].createElement(
	            _beeLayout.Col,
	            { md: 12 },
	            _react2['default'].createElement(
	                'h3',
	                null,
	                title
	            ),
	            _react2['default'].createElement(
	                'p',
	                null,
	                desc
	            ),
	            _react2['default'].createElement(
	                _beePanel.Panel,
	                { copyable: true, collapsible: true, headerContent: true, expanded: this.state.open, colors: 'bordered', header: header, footerStyle: { padding: 0 } },
	                _react2['default'].createElement(
	                    'pre',
	                    null,
	                    _react2['default'].createElement(
	                        'code',
	                        { className: 'hljs javascript' },
	                        code
	                    )
	                ),
	                !!scss_code ? _react2['default'].createElement(
	                    'pre',
	                    null,
	                    _react2['default'].createElement(
	                        'code',
	                        { className: 'hljs css' },
	                        scss_code
	                    )
	                ) : null
	            )
	        );
	    };
	
	    return Demo;
	}(_react.Component);
	
	var DemoGroup = function (_Component2) {
	    _inherits(DemoGroup, _Component2);
	
	    function DemoGroup(props) {
	        _classCallCheck(this, DemoGroup);
	
	        return _possibleConstructorReturn(this, _Component2.call(this, props));
	    }
	
	    DemoGroup.prototype.render = function render() {
	        return _react2['default'].createElement(
	            _beeLayout.Row,
	            null,
	            DemoArray.map(function (child, index) {
	
	                return _react2['default'].createElement(Demo, { example: child.example, title: child.title, code: child.code, scss_code: child.scss_code, desc: child.desc, key: index });
	            })
	        );
	    };
	
	    return DemoGroup;
	}(_react.Component);
	
	_reactDom2['default'].render(_react2['default'].createElement(DemoGroup, null), document.getElementById('tinperBeeDemo'));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Con = exports.Row = exports.Col = undefined;
	
	var _Col2 = __webpack_require__(2);
	
	var _Col3 = _interopRequireDefault(_Col2);
	
	var _Row2 = __webpack_require__(6);
	
	var _Row3 = _interopRequireDefault(_Row2);
	
	var _Layout = __webpack_require__(7);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Col = _Col3["default"];
	exports.Row = _Row3["default"];
	exports.Con = _Layout2["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string]),
	
	  /**
	   * xs显示列数
	   */
	  xs: _propTypes2["default"].number,
	  /**
	   * sm显示列数
	   */
	  sm: _propTypes2["default"].number,
	  /**
	   * md显示列数
	   */
	  md: _propTypes2["default"].number,
	  /**
	   * lg显示列数
	   */
	  lg: _propTypes2["default"].number,
	  /**
	   * xs偏移列数
	   */
	  xsOffset: _propTypes2["default"].number,
	  /**
	   * sm偏移列数
	   */
	  smOffset: _propTypes2["default"].number,
	  /**
	   * md偏移列数
	   */
	  mdOffset: _propTypes2["default"].number,
	  /**
	   * lg偏移列数
	   */
	  lgOffset: _propTypes2["default"].number,
	  /**
	   * xs右偏移列数
	   */
	  xsPush: _propTypes2["default"].number,
	  /**
	   * sm右偏移列数
	   */
	  smPush: _propTypes2["default"].number,
	  /**
	   * md右偏移列数
	   */
	  mdPush: _propTypes2["default"].number,
	  /**
	   * lg右偏移列数
	   */
	  lgPush: _propTypes2["default"].number,
	  /**
	   * xs左偏移列数
	   */
	  xsPull: _propTypes2["default"].number,
	  /**
	   * sm左偏移列数
	   */
	  smPull: _propTypes2["default"].number,
	  /**
	   * md左偏移列数
	   */
	  mdPull: _propTypes2["default"].number,
	  /**
	   * lg左偏移列数
	   */
	  lgPull: _propTypes2["default"].number
	};
	
	var defaultProps = {
	  componentClass: 'div',
	  clsPrefix: 'u-col'
	};
	
	var DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];
	
	var Col = function (_Component) {
	  _inherits(Col, _Component);
	
	  function Col() {
	    _classCallCheck(this, Col);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Col.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        className = _props.className,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['componentClass', 'className', 'clsPrefix']);
	
	    var tbClass = [];
	    /**
	     * 对传入props做样式转化
	     * @type {[type]}
	     */
	    DEVICE_SIZES.forEach(function (size) {
	      function popProp(propSuffix, modifier) {
	        var propName = '' + size + propSuffix;
	        var propValue = others[propName];
	
	        if (propValue != undefined && propValue != null) {
	          tbClass.push(clsPrefix + '-' + size + modifier + '-' + propValue);
	        }
	
	        delete others[propName];
	      }
	
	      popProp('', '');
	      popProp('Offset', '-offset');
	      popProp('Push', '-push');
	      popProp('Pull', '-pull');
	    });
	
	    return _react2["default"].createElement(
	      Component,
	      _extends({
	        className: (0, _classnames2["default"])(tbClass, className)
	      }, others),
	      this.props.children
	    );
	  };
	
	  return Col;
	}(_react.Component);
	
	Col.defaultProps = defaultProps;
	Col.propTypes = propTypes;
	
	exports["default"] = Col;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = PropTypes;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string])
	};
	
	var defaultProps = {
	  componentClass: 'div',
	  clsPrefix: 'u-row'
	};
	
	var Row = function (_Component) {
	  _inherits(Row, _Component);
	
	  function Row() {
	    _classCallCheck(this, Row);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Row.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['componentClass', 'clsPrefix', 'className']);
	
	    var bsclass = '' + clsPrefix;
	
	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(bsclass, className)
	      }),
	      this.props.children
	    );
	  };
	
	  return Row;
	}(_react.Component);
	
	Row.propTypes = propTypes;
	Row.defaultProps = defaultProps;
	
	exports["default"] = Row;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  /**
	   * Adds `container-fluid` class.
	   */
	  fluid: _propTypes2["default"].bool,
	  /**
	   * You can use a custom element for this component
	   */
	  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string])
	};
	
	var defaultProps = {
	  componentClass: 'div',
	  fluid: false,
	  clsPrefix: 'u-container'
	};
	
	var Con = function (_React$Component) {
	  _inherits(Con, _React$Component);
	
	  function Con() {
	    _classCallCheck(this, Con);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Con.prototype.render = function render() {
	    var _tbclass;
	
	    var _props = this.props,
	        fluid = _props.fluid,
	        Component = _props.componentClass,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['fluid', 'componentClass', 'clsPrefix', 'className']);
	
	    var tbclass = (_tbclass = {}, _defineProperty(_tbclass, '' + clsPrefix, !fluid), _defineProperty(_tbclass, clsPrefix + '-fluid', fluid), _tbclass);
	
	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(tbclass, className)
	      }),
	      this.props.children
	    );
	  };
	
	  return Con;
	}(_react2["default"].Component);
	
	Con.propTypes = propTypes;
	Con.defaultProps = defaultProps;
	
	exports["default"] = Con;
	module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PanelGroup = exports.Panel = undefined;
	
	var _Panel2 = __webpack_require__(9);
	
	var _Panel3 = _interopRequireDefault(_Panel2);
	
	var _PanelGroup2 = __webpack_require__(77);
	
	var _PanelGroup3 = _interopRequireDefault(_PanelGroup2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Panel = _Panel3["default"];
	exports.PanelGroup = _PanelGroup3["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeTransition = __webpack_require__(10);
	
	var _beeMessage = __webpack_require__(65);
	
	var _beeMessage2 = _interopRequireDefault(_beeMessage);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _copyToClipboard = __webpack_require__(75);
	
	var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  //是否添加折叠
	  collapsible: _propTypes2["default"].bool,
	  onSelect: _propTypes2["default"].func,
	  //头部组件
	  header: _propTypes2["default"].node,
	  headerStyle: _propTypes2["default"].object,
	  id: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
	  headerContent: _propTypes2["default"].bool,
	  //footer组件
	  footer: _propTypes2["default"].node,
	  footerStyle: _propTypes2["default"].object,
	  //默认是否打开
	  defaultExpanded: _propTypes2["default"].bool,
	  //是否打开
	  expanded: _propTypes2["default"].bool,
	  //每个panel的标记
	  eventKey: _propTypes2["default"].any,
	  headerRole: _propTypes2["default"].string,
	  panelRole: _propTypes2["default"].string,
	  //颜色
	  colors: _propTypes2["default"].oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default', 'bordered']),
	
	  // From Collapse.的扩展动画
	  onEnter: _propTypes2["default"].func,
	  onEntering: _propTypes2["default"].func,
	  onEntered: _propTypes2["default"].func,
	  onExit: _propTypes2["default"].func,
	  onExiting: _propTypes2["default"].func,
	  onExited: _propTypes2["default"].func,
	  //是否可复制内容
	  copyable: _propTypes2["default"].bool
	};
	
	var defaultProps = {
	  defaultExpanded: false,
	  clsPrefix: "u-panel",
	  colors: "default"
	};
	
	var Panel = function (_React$Component) {
	  _inherits(Panel, _React$Component);
	
	  function Panel(props, context) {
	    _classCallCheck(this, Panel);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleClickTitle = _this.handleClickTitle.bind(_this);
	
	    _this.state = {
	      expanded: _this.props.defaultExpanded
	    };
	    return _this;
	  }
	
	  //头部点击事件
	
	
	  Panel.prototype.handleClickTitle = function handleClickTitle(e) {
	    // 不让事件进入事件池
	    e.persist();
	    e.selected = true;
	
	    if (this.props.onSelect) {
	      this.props.onSelect(this.props.eventKey, e);
	    } else {
	      e.preventDefault();
	    }
	
	    if (e.selected) {
	      this.setState({ expanded: !this.state.expanded });
	    }
	  };
	
	  //渲染panelheader
	
	
	  Panel.prototype.renderHeader = function renderHeader(collapsible, header, id, role, expanded, clsPrefix) {
	    var titleClassName = clsPrefix + '-title';
	
	    if (!collapsible) {
	      if (!_react2["default"].isValidElement(header)) {
	        return header;
	      }
	
	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }
	
	    if (!_react2["default"].isValidElement(header)) {
	      return _react2["default"].createElement(
	        'h4',
	        { role: 'presentation', className: titleClassName },
	        this.renderAnchor(header, id, role, expanded)
	      );
	    }
	    if (this.props.headerContent) {
	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }
	
	    return (0, _react.cloneElement)(header, {
	      className: (0, _classnames2["default"])(header.props.className, titleClassName),
	      children: this.renderAnchor(header.props.children, id, role, expanded)
	    });
	  };
	
	  //如果使用链接，渲染为a标签
	
	
	  Panel.prototype.renderAnchor = function renderAnchor(header, id, role, expanded) {
	    return _react2["default"].createElement(
	      'a',
	      {
	        role: role,
	        href: id && '#' + id,
	        'aria-controls': id,
	        'aria-expanded': expanded,
	        'aria-selected': expanded,
	        className: expanded ? null : 'collapsed'
	      },
	      header
	    );
	  };
	
	  //复制代码，弹出提示信息
	
	
	  Panel.prototype.copyDemo = function copyDemo(e) {
	    var panelTarget = e.target.parentNode;
	    var clipBoardContent = panelTarget.firstChild.innerText;
	    (0, _copyToClipboard2["default"])(clipBoardContent);
	    _beeMessage2["default"].create({ content: '复制成功！', color: 'success', duration: 2 });
	  };
	
	  //如果有折叠动画，渲染折叠动画
	
	
	  Panel.prototype.renderCollapsibleBody = function renderCollapsibleBody(id, expanded, role, children, clsPrefix, copyable, animationHooks) {
	    return _react2["default"].createElement(
	      _beeTransition.Collapse,
	      _extends({ 'in': expanded }, animationHooks),
	      _react2["default"].createElement(
	        'div',
	        {
	          id: id,
	          role: role,
	          className: clsPrefix + '-collapse',
	          'aria-hidden': !expanded
	        },
	        this.renderBody(children, clsPrefix, copyable)
	      )
	    );
	  };
	
	  //渲染panelbody
	
	
	  Panel.prototype.renderBody = function renderBody(rawChildren, clsPrefix, copyable) {
	    var self = this;
	    var children = [];
	    var bodyChildren = [];
	
	    var bodyClassName = clsPrefix + '-body';
	    //添加到body的children中
	    function maybeAddBody(self) {
	      if (!bodyChildren.length) {
	        return;
	      }
	      // 给子组件添加key，为了之后触发事件时使用
	      children.push(_react2["default"].createElement(
	        'div',
	        { key: children.length, className: bodyClassName },
	        bodyChildren,
	        copyable && _react2["default"].createElement('i', { className: 'uf uf-files-o', onClick: self.copyDemo })
	      ));
	      bodyChildren = [];
	    }
	
	    //转换为数组，方便复用
	    _react2["default"].Children.toArray(rawChildren).forEach(function (child) {
	      if (_react2["default"].isValidElement(child) && child.props.fill) {
	        maybeAddBody(self);
	
	        //将标示fill设置为undefined
	        children.push((0, _react.cloneElement)(child, { fill: undefined }));
	
	        return;
	      }
	      bodyChildren.push(child);
	    });
	
	    maybeAddBody(self);
	
	    return children;
	  };
	
	  Panel.prototype.render = function render() {
	    var _props = this.props,
	        collapsible = _props.collapsible,
	        header = _props.header,
	        id = _props.id,
	        footer = _props.footer,
	        propsExpanded = _props.expanded,
	        footerStyle = _props.footerStyle,
	        headerStyle = _props.headerStyle,
	        headerRole = _props.headerRole,
	        panelRole = _props.panelRole,
	        className = _props.className,
	        colors = _props.colors,
	        children = _props.children,
	        onEnter = _props.onEnter,
	        onEntering = _props.onEntering,
	        onEntered = _props.onEntered,
	        clsPrefix = _props.clsPrefix,
	        onExit = _props.onExit,
	        headerContent = _props.headerContent,
	        onExiting = _props.onExiting,
	        onExited = _props.onExited,
	        defaultExpanded = _props.defaultExpanded,
	        eventKey = _props.eventKey,
	        onSelect = _props.onSelect,
	        copyable = _props.copyable,
	        props = _objectWithoutProperties(_props, ['collapsible', 'header', 'id', 'footer', 'expanded', 'footerStyle', 'headerStyle', 'headerRole', 'panelRole', 'className', 'colors', 'children', 'onEnter', 'onEntering', 'onEntered', 'clsPrefix', 'onExit', 'headerContent', 'onExiting', 'onExited', 'defaultExpanded', 'eventKey', 'onSelect', 'copyable']);
	
	    var expanded = propsExpanded != null ? propsExpanded : this.state.expanded;
	
	    var classes = {};
	    classes['' + clsPrefix] = true;
	    classes[clsPrefix + '-' + colors] = true;
	
	    var headerClass = _defineProperty({}, clsPrefix + '-heading', true);
	
	    copyable === false ? false : true;
	    return _react2["default"].createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2["default"])(className, classes),
	        id: collapsible ? null : id
	      }),
	      header && _react2["default"].createElement(
	        'div',
	        { className: (0, _classnames2["default"])(headerClass), style: headerStyle, onClick: this.handleClickTitle },
	        this.renderHeader(collapsible, header, id, headerRole, expanded, clsPrefix)
	      ),
	      collapsible ? this.renderCollapsibleBody(id, expanded, panelRole, children, clsPrefix, copyable, { onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited }) : this.renderBody(children, clsPrefix, copyable),
	      footer && _react2["default"].createElement(
	        'div',
	        { className: clsPrefix + '-footer', style: footerStyle },
	        footer
	      )
	    );
	  };
	
	  return Panel;
	}(_react2["default"].Component);
	
	Panel.propTypes = propTypes;
	Panel.defaultProps = defaultProps;
	
	exports["default"] = Panel;
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fade = exports.Collapse = exports.Transition = undefined;
	
	var _Transition2 = __webpack_require__(11);
	
	var _Transition3 = _interopRequireDefault(_Transition2);
	
	var _Collapse2 = __webpack_require__(17);
	
	var _Collapse3 = _interopRequireDefault(_Collapse2);
	
	var _Fade2 = __webpack_require__(64);
	
	var _Fade3 = _interopRequireDefault(_Fade2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Transition = _Transition3["default"];
	exports.Collapse = _Collapse3["default"];
	exports.Fade = _Fade3["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _properties = __webpack_require__(13);
	
	var _properties2 = _interopRequireDefault(_properties);
	
	var _on = __webpack_require__(16);
	
	var _on2 = _interopRequireDefault(_on);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var transitionEndEvent = _properties2["default"].end;
	
	//设置状态码
	var UNMOUNTED = exports.UNMOUNTED = 0;
	var EXITED = exports.EXITED = 1;
	var ENTERING = exports.ENTERING = 2;
	var ENTERED = exports.ENTERED = 3;
	var EXITING = exports.EXITING = 4;
	
	var propTypes = {
	  /**
	   * 是否触发动画
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * 不显示的时候是否移除组件
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * 如果设置为默认显示，挂载时显示动画
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * 设置超时时间，防止出现问题，可设置为>=动画时间
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * 退出组件时添加的class
	   */
	  exitedClassName: _propTypes2["default"].string,
	  /**
	   * 退出组件中添加的class
	   */
	  exitingClassName: _propTypes2["default"].string,
	  /**
	   * 进入动画后添加的class
	   */
	  enteredClassName: _propTypes2["default"].string,
	  /**
	   * 进入动画时添加的class
	   */
	  enteringClassName: _propTypes2["default"].string,
	
	  /**
	   * 进入动画开始时的钩子函数
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * 进入动画中的钩子函数
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * 进入动画后的钩子函数
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * 退出动画开始时的钩子函数
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * 退出动画中的钩子函数
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * 退出动画后的钩子函数
	   */
	  onExited: _propTypes2["default"].func
	};
	
	function noop() {}
	
	var defaultProps = {
	  "in": false,
	  unmountOnExit: false,
	  transitionAppear: false,
	  timeout: 5000,
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};
	
	/**
	 * 动画组件
	 */
	
	var Transition = function (_Component) {
	  _inherits(Transition, _Component);
	
	  function Transition(props, context) {
	    _classCallCheck(this, Transition);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	    var initialStatus = void 0;
	    if (props["in"]) {
	      // 在componentdidmount时开始执行动画
	      initialStatus = props.transitionAppear ? EXITED : ENTERED;
	    } else {
	      initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
	    }
	    _this.state = { status: initialStatus };
	
	    _this.nextCallback = null;
	    return _this;
	  }
	
	  Transition.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.transitionAppear && this.props["in"]) {
	      this.performEnter(this.props);
	    }
	  };
	
	  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps["in"] && this.props.unmountOnExit) {
	      if (this.state.status === UNMOUNTED) {
	        // 在componentDidUpdate执行动画.
	        this.setState({ status: EXITED });
	      }
	    } else {
	      this._needsUpdate = true;
	    }
	  };
	
	  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
	    var status = this.state.status;
	
	    if (this.props.unmountOnExit && status === EXITED) {
	      // 当使用unmountOnExit时，exited为exiting和unmont的过渡状态
	      if (this.props["in"]) {
	        this.performEnter(this.props);
	      } else {
	        this.setState({ status: UNMOUNTED });
	      }
	
	      return;
	    }
	
	    // 确保只响应prop变化
	    if (this._needsUpdate) {
	      this._needsUpdate = false;
	
	      if (this.props["in"]) {
	        if (status === EXITING) {
	          this.performEnter(this.props);
	        } else if (status === EXITED) {
	          this.performEnter(this.props);
	        }
	        // 其他，当我们已经输入或输出
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          this.performExit(this.props);
	        }
	        // 我们已经输入或输出完成
	      }
	    }
	  };
	
	  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };
	
	  Transition.prototype.performEnter = function performEnter(props) {
	    var _this2 = this;
	
	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);
	
	    // 这里接收新props
	    props.onEnter(node);
	
	    this.safeSetState({ status: ENTERING }, function () {
	      _this2.props.onEntering(node);
	
	      _this2.onTransitionEnd(node, function () {
	        _this2.safeSetState({ status: ENTERED }, function () {
	          _this2.props.onEntered(node);
	        });
	      });
	    });
	  };
	
	  Transition.prototype.performExit = function performExit(props) {
	    var _this3 = this;
	
	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);
	
	    props.onExit(node);
	
	    this.safeSetState({ status: EXITING }, function () {
	      _this3.props.onExiting(node);
	
	      _this3.onTransitionEnd(node, function () {
	        _this3.safeSetState({ status: EXITED }, function () {
	          _this3.props.onExited(node);
	        });
	      });
	    });
	  };
	
	  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };
	
	  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
	    // 确保在组件销毁后挂起的setState被消除
	    this.setState(nextState, this.setNextCallback(callback));
	  };
	
	  Transition.prototype.setNextCallback = function setNextCallback(callback) {
	    var _this4 = this;
	
	    var active = true;
	
	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this4.nextCallback = null;
	
	        callback(event);
	      }
	    };
	
	    this.nextCallback.cancel = function () {
	      active = false;
	    };
	
	    return this.nextCallback;
	  };
	
	  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, handler) {
	    this.setNextCallback(handler);
	
	    if (node) {
	      if (transitionEndEvent == undefined) {
	        this.nextCallback();
	      } else {
	        (0, _on2["default"])(node, transitionEndEvent, this.nextCallback);
	      }
	      setTimeout(this.nextCallback, this.props.timeout);
	    } else {
	      setTimeout(this.nextCallback, 0);
	    }
	  };
	
	  Transition.prototype.render = function render() {
	    var status = this.state.status;
	    if (status === UNMOUNTED) {
	      return null;
	    }
	
	    var _props = this.props,
	        children = _props.children,
	        className = _props.className,
	        childProps = _objectWithoutProperties(_props, ['children', 'className']);
	
	    Object.keys(Transition.propTypes).forEach(function (key) {
	      return delete childProps[key];
	    });
	
	    var transitionClassName = void 0;
	    if (status === EXITED) {
	      transitionClassName = this.props.exitedClassName;
	    } else if (status === ENTERING) {
	      transitionClassName = this.props.enteringClassName;
	    } else if (status === ENTERED) {
	      transitionClassName = this.props.enteredClassName;
	    } else if (status === EXITING) {
	      transitionClassName = this.props.exitingClassName;
	    }
	
	    var child = _react2["default"].Children.only(children);
	    return _react2["default"].cloneElement(child, _extends({}, childProps, {
	      className: (0, _classnames2["default"])(child.props.className, className, transitionClassName)
	    }));
	  };
	
	  return Transition;
	}(_react.Component);
	
	Transition.propTypes = propTypes;
	
	Transition.defaultProps = defaultProps;
	
	exports["default"] = Transition;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;
	
	var _inDOM = _interopRequireDefault(__webpack_require__(15));
	
	var transform = 'transform';
	exports.transform = transform;
	var prefix, transitionEnd, animationEnd;
	exports.animationEnd = animationEnd;
	exports.transitionEnd = transitionEnd;
	var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
	exports.transitionDelay = transitionDelay;
	exports.transitionTiming = transitionTiming;
	exports.transitionDuration = transitionDuration;
	exports.transitionProperty = transitionProperty;
	var animationName, animationDuration, animationTiming, animationDelay;
	exports.animationDelay = animationDelay;
	exports.animationTiming = animationTiming;
	exports.animationDuration = animationDuration;
	exports.animationName = animationName;
	
	if (_inDOM.default) {
	  var _getTransitionPropert = getTransitionProperties();
	
	  prefix = _getTransitionPropert.prefix;
	  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
	  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
	  exports.transform = transform = prefix + "-" + transform;
	  exports.transitionProperty = transitionProperty = prefix + "-transition-property";
	  exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
	  exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
	  exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
	  exports.animationName = animationName = prefix + "-animation-name";
	  exports.animationDuration = animationDuration = prefix + "-animation-duration";
	  exports.animationTiming = animationTiming = prefix + "-animation-delay";
	  exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
	}
	
	var _default = {
	  transform: transform,
	  end: transitionEnd,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};
	exports.default = _default;
	
	function getTransitionProperties() {
	  var style = document.createElement('div').style;
	  var vendorMap = {
	    O: function O(e) {
	      return "o" + e.toLowerCase();
	    },
	    Moz: function Moz(e) {
	      return e.toLowerCase();
	    },
	    Webkit: function Webkit(e) {
	      return "webkit" + e;
	    },
	    ms: function ms(e) {
	      return "MS" + e;
	    }
	  };
	  var vendors = Object.keys(vendorMap);
	  var transitionEnd, animationEnd;
	  var prefix = '';
	
	  for (var i = 0; i < vendors.length; i++) {
	    var vendor = vendors[i];
	
	    if (vendor + "TransitionProperty" in style) {
	      prefix = "-" + vendor.toLowerCase();
	      transitionEnd = vendorMap[vendor]('TransitionEnd');
	      animationEnd = vendorMap[vendor]('AnimationEnd');
	      break;
	    }
	  }
	
	  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
	  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
	  style = null;
	  return {
	    animationEnd: animationEnd,
	    transitionEnd: transitionEnd,
	    prefix: prefix
	  };
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}
	
	module.exports = _interopRequireDefault;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = void 0;
	
	var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	exports.default = _default;
	module.exports = exports["default"];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = void 0;
	
	var _inDOM = _interopRequireDefault(__webpack_require__(15));
	
	var on = function on() {};
	
	if (_inDOM.default) {
	  on = function () {
	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.addEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.attachEvent('on' + eventName, function (e) {
	        e = e || window.event;
	        e.target = e.target || e.srcElement;
	        e.currentTarget = node;
	        handler.call(node, e);
	      });
	    };
	  }();
	}
	
	var _default = on;
	exports.default = _default;
	module.exports = exports["default"];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _style = __webpack_require__(18);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Transition = __webpack_require__(11);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	var _capitalize = __webpack_require__(26);
	
	var _capitalize2 = _interopRequireDefault(_capitalize);
	
	var _tinperBeeCore = __webpack_require__(27);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var MARGINS = {
	  height: ['marginTop', 'marginBottom'],
	  width: ['marginLeft', 'marginRight']
	};
	
	// reading a dimension prop will cause the browser to recalculate,
	// which will let our animations work
	function triggerBrowserReflow(node) {
	  node.offsetHeight; // eslint-disable-line no-unused-expressions
	}
	
	function getDimensionValue(dimension, elem) {
	  var value = elem['offset' + (0, _capitalize2["default"])(dimension)];
	  var margins = MARGINS[dimension];
	
	  return value + parseInt((0, _style2["default"])(elem, margins[0]), 10) + parseInt((0, _style2["default"])(elem, margins[1]), 10);
	}
	
	var propTypes = {
	  /**
	   * Show the component; triggers the expand or collapse animation
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is collapsed
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * Run the expand animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * Duration of the collapse animation in milliseconds, to ensure that
	   * finishing callbacks are fired even if the original browser transition end
	   * events are canceled
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * Callback fired before the component expands
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to expand
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has expanded
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * Callback fired before the component collapses
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to collapse
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has collapsed
	   */
	  onExited: _propTypes2["default"].func,
	
	  /**
	   * The dimension used when collapsing, or a function that returns the
	   * dimension
	   *
	   * _Note: Bootstrap only partially supports 'width'!
	   * You will need to supply your own CSS animation for the `.width` CSS class._
	   */
	  dimension: _propTypes2["default"].oneOfType([_propTypes2["default"].oneOf(['height', 'width']), _propTypes2["default"].func]),
	
	  /**
	   * Function that returns the height or width of the animating DOM node
	   *
	   * Allows for providing some custom logic for how much the Collapse component
	   * should animate in its specified dimension. Called with the current
	   * dimension prop value and the DOM node.
	   */
	  getDimensionValue: _propTypes2["default"].func,
	
	  /**
	   * ARIA role of collapsible element
	   */
	  role: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false,
	
	  dimension: 'height',
	  getDimensionValue: getDimensionValue
	};
	
	var Collapse = function (_React$Component) {
	  _inherits(Collapse, _React$Component);
	
	  function Collapse(props, context) {
	    _classCallCheck(this, Collapse);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleEnter = _this.handleEnter.bind(_this);
	    _this.handleEntering = _this.handleEntering.bind(_this);
	    _this.handleEntered = _this.handleEntered.bind(_this);
	    _this.handleExit = _this.handleExit.bind(_this);
	    _this.handleExiting = _this.handleExiting.bind(_this);
	    return _this;
	  }
	
	  /* -- Expanding -- */
	
	
	  Collapse.prototype.handleEnter = function handleEnter(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };
	
	  Collapse.prototype.handleEntering = function handleEntering(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this._getScrollDimensionValue(elem, dimension);
	  };
	
	  Collapse.prototype.handleEntered = function handleEntered(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = null;
	  };
	
	  /* -- Collapsing -- */
	
	
	  Collapse.prototype.handleExit = function handleExit(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this.props.getDimensionValue(dimension, elem) + 'px';
	    triggerBrowserReflow(elem);
	  };
	
	  Collapse.prototype.handleExiting = function handleExiting(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };
	
	  Collapse.prototype._dimension = function _dimension() {
	    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
	  };
	
	  // for testing
	
	
	  Collapse.prototype._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
	    return elem['scroll' + (0, _capitalize2["default"])(dimension)] + 'px';
	  };
	
	  Collapse.prototype.render = function render() {
	    var _props = this.props,
	        onEnter = _props.onEnter,
	        onEntering = _props.onEntering,
	        onEntered = _props.onEntered,
	        onExit = _props.onExit,
	        onExiting = _props.onExiting,
	        className = _props.className,
	        props = _objectWithoutProperties(_props, ['onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'className']);
	
	    delete props.dimension;
	    delete props.getDimensionValue;
	
	    var handleEnter = (0, _tinperBeeCore.createChainedFunction)(this.handleEnter, onEnter);
	    var handleEntering = (0, _tinperBeeCore.createChainedFunction)(this.handleEntering, onEntering);
	    var handleEntered = (0, _tinperBeeCore.createChainedFunction)(this.handleEntered, onEntered);
	    var handleExit = (0, _tinperBeeCore.createChainedFunction)(this.handleExit, onExit);
	    var handleExiting = (0, _tinperBeeCore.createChainedFunction)(this.handleExiting, onExiting);
	
	    var classes = {
	      width: this._dimension() === 'width'
	    };
	
	    return _react2["default"].createElement(_Transition2["default"], _extends({}, props, {
	      'aria-expanded': props.role ? props["in"] : null,
	      className: (0, _classnames2["default"])(className, classes),
	      exitedClassName: 'collapse',
	      exitingClassName: 'collapsing',
	      enteredClassName: 'collapse in',
	      enteringClassName: 'collapsing',
	      onEnter: handleEnter,
	      onEntering: handleEntering,
	      onEntered: handleEntered,
	      onExit: handleExit,
	      onExiting: handleExiting
	    }));
	  };
	
	  return Collapse;
	}(_react2["default"].Component);
	
	Collapse.propTypes = propTypes;
	Collapse.defaultProps = defaultProps;
	
	exports["default"] = Collapse;
	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = style;
	
	var _camelizeStyle = _interopRequireDefault(__webpack_require__(19));
	
	var _hyphenateStyle = _interopRequireDefault(__webpack_require__(21));
	
	var _getComputedStyle2 = _interopRequireDefault(__webpack_require__(23));
	
	var _removeStyle = _interopRequireDefault(__webpack_require__(24));
	
	var _properties = __webpack_require__(13);
	
	var _isTransform = _interopRequireDefault(__webpack_require__(25));
	
	function style(node, property, value) {
	  var css = '';
	  var transforms = '';
	  var props = property;
	
	  if (typeof property === 'string') {
	    if (value === undefined) {
	      return node.style[(0, _camelizeStyle.default)(property)] || (0, _getComputedStyle2.default)(node).getPropertyValue((0, _hyphenateStyle.default)(property));
	    } else {
	      (props = {})[property] = value;
	    }
	  }
	
	  Object.keys(props).forEach(function (key) {
	    var value = props[key];
	
	    if (!value && value !== 0) {
	      (0, _removeStyle.default)(node, (0, _hyphenateStyle.default)(key));
	    } else if ((0, _isTransform.default)(key)) {
	      transforms += key + "(" + value + ") ";
	    } else {
	      css += (0, _hyphenateStyle.default)(key) + ": " + value + ";";
	    }
	  });
	
	  if (transforms) {
	    css += _properties.transform + ": " + transforms + ";";
	  }
	
	  node.style.cssText += ';' + css;
	}
	
	module.exports = exports["default"];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = camelizeStyleName;
	
	var _camelize = _interopRequireDefault(__webpack_require__(20));
	
	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	 */
	var msPattern = /^-ms-/;
	
	function camelizeStyleName(string) {
	  return (0, _camelize.default)(string.replace(msPattern, 'ms-'));
	}
	
	module.exports = exports["default"];

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = camelize;
	var rHyphen = /-(.)/g;
	
	function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    return chr.toUpperCase();
	  });
	}
	
	module.exports = exports["default"];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = hyphenateStyleName;
	
	var _hyphenate = _interopRequireDefault(__webpack_require__(22));
	
	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	 */
	var msPattern = /^ms-/;
	
	function hyphenateStyleName(string) {
	  return (0, _hyphenate.default)(string).replace(msPattern, '-ms-');
	}
	
	module.exports = exports["default"];

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = hyphenate;
	var rUpper = /([A-Z])/g;
	
	function hyphenate(string) {
	  return string.replace(rUpper, '-$1').toLowerCase();
	}
	
	module.exports = exports["default"];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = _getComputedStyle;
	
	var _camelizeStyle = _interopRequireDefault(__webpack_require__(19));
	
	var rposition = /^(top|right|bottom|left)$/;
	var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;
	
	function _getComputedStyle(node) {
	  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
	  var doc = node.ownerDocument;
	  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
	    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
	    getPropertyValue: function getPropertyValue(prop) {
	      var style = node.style;
	      prop = (0, _camelizeStyle.default)(prop);
	      if (prop == 'float') prop = 'styleFloat';
	      var current = node.currentStyle[prop] || null;
	      if (current == null && style && style[prop]) current = style[prop];
	
	      if (rnumnonpx.test(current) && !rposition.test(prop)) {
	        // Remember the original values
	        var left = style.left;
	        var runStyle = node.runtimeStyle;
	        var rsLeft = runStyle && runStyle.left; // Put in the new values to get a computed value out
	
	        if (rsLeft) runStyle.left = node.currentStyle.left;
	        style.left = prop === 'fontSize' ? '1em' : current;
	        current = style.pixelLeft + 'px'; // Revert the changed values
	
	        style.left = left;
	        if (rsLeft) runStyle.left = rsLeft;
	      }
	
	      return current;
	    }
	  };
	}
	
	module.exports = exports["default"];

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = removeStyle;
	
	function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	}
	
	module.exports = exports["default"];

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = isTransform;
	var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
	
	function isTransform(property) {
	  return !!(property && supportedTransforms.test(property));
	}
	
	module.exports = exports["default"];

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = capitalize;
	function capitalize(string) {
	  return "" + string.charAt(0).toUpperCase() + string.slice(1);
	}
	module.exports = exports["default"];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Align = exports.toArray = exports.cssAnimation = exports.addEventListener = exports.contains = exports.KeyCode = exports.createChainedFunction = exports.splitComponent = exports.isRequiredForA11y = exports.elementType = exports.deprecated = exports.componentOrElement = exports.all = undefined;
	
	var _all2 = __webpack_require__(28);
	
	var _all3 = _interopRequireDefault(_all2);
	
	var _componentOrElement2 = __webpack_require__(30);
	
	var _componentOrElement3 = _interopRequireDefault(_componentOrElement2);
	
	var _deprecated2 = __webpack_require__(31);
	
	var _deprecated3 = _interopRequireDefault(_deprecated2);
	
	var _elementType2 = __webpack_require__(34);
	
	var _elementType3 = _interopRequireDefault(_elementType2);
	
	var _isRequiredForA11y2 = __webpack_require__(35);
	
	var _isRequiredForA11y3 = _interopRequireDefault(_isRequiredForA11y2);
	
	var _splitComponent2 = __webpack_require__(36);
	
	var _splitComponent3 = _interopRequireDefault(_splitComponent2);
	
	var _createChainedFunction2 = __webpack_require__(37);
	
	var _createChainedFunction3 = _interopRequireDefault(_createChainedFunction2);
	
	var _keyCode = __webpack_require__(38);
	
	var _keyCode2 = _interopRequireDefault(_keyCode);
	
	var _contains2 = __webpack_require__(39);
	
	var _contains3 = _interopRequireDefault(_contains2);
	
	var _addEventListener2 = __webpack_require__(40);
	
	var _addEventListener3 = _interopRequireDefault(_addEventListener2);
	
	var _cssAnimation2 = __webpack_require__(45);
	
	var _cssAnimation3 = _interopRequireDefault(_cssAnimation2);
	
	var _toArray2 = __webpack_require__(49);
	
	var _toArray3 = _interopRequireDefault(_toArray2);
	
	var _Align2 = __webpack_require__(50);
	
	var _Align3 = _interopRequireDefault(_Align2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.all = _all3.default;
	exports.componentOrElement = _componentOrElement3.default;
	exports.deprecated = _deprecated3.default;
	exports.elementType = _elementType3.default;
	exports.isRequiredForA11y = _isRequiredForA11y3.default;
	exports.splitComponent = _splitComponent3.default;
	exports.createChainedFunction = _createChainedFunction3.default;
	exports.KeyCode = _keyCode2.default;
	exports.contains = _contains3.default;
	exports.addEventListener = _addEventListener3.default;
	exports.cssAnimation = _cssAnimation3.default;
	exports.toArray = _toArray3.default;
	//export getContainerRenderMixin from './getContainerRenderMixin';
	
	exports.Align = _Align3.default;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = all;
	
	var _createChainableTypeChecker = __webpack_require__(29);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function all() {
	  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
	    validators[_key] = arguments[_key];
	  }
	
	  function allPropTypes() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    var error = null;
	
	    validators.forEach(function (validator) {
	      if (error != null) {
	        return;
	      }
	
	      var result = validator.apply(undefined, args);
	      if (result != null) {
	        error = result;
	      }
	    });
	
	    return error;
	  }
	
	  return (0, _createChainableTypeChecker2.default)(allPropTypes);
	}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = createChainableTypeChecker;
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	// Mostly taken from ReactPropTypes.
	
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
	      }
	
	      return null;
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
	      args[_key - 6] = arguments[_key];
	    }
	
	    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createChainableTypeChecker = __webpack_require__(29);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validate(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	
	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
	  }
	
	  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
	  }
	
	  return null;
	}
	
	exports.default = (0, _createChainableTypeChecker2.default)(validate);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = deprecated;
	
	var _warning = __webpack_require__(32);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var warned = {};
	
	function deprecated(validator, reason) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] != null) {
	      var messageKey = componentName + '.' + propName;
	
	      (0, _warning2.default)(warned[messageKey], 'The ' + location + ' `' + propFullNameSafe + '` of ' + ('`' + componentNameSafe + '` is deprecated. ' + reason + '.'));
	
	      warned[messageKey] = true;
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }
	
	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}
	
	/* eslint-disable no-underscore-dangle */
	function _resetWarned() {
	  warned = {};
	}
	
	deprecated._resetWarned = _resetWarned;
	/* eslint-enable no-underscore-dangle */

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createChainableTypeChecker = __webpack_require__(29);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function elementType(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	
	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }
	
	  if (propType !== 'function' && propType !== 'string') {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }
	
	  return null;
	}
	
	exports.default = (0, _createChainableTypeChecker2.default)(elementType);

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = isRequiredForA11y;
	function isRequiredForA11y(validator) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] == null) {
	      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }
	
	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = splitComponentProps;
	function _objectEntries(obj) {
	  var entries = [];
	  var keys = Object.keys(obj);
	
	  for (var k = 0; k < keys.length; ++k) {
	    entries.push([keys[k], obj[keys[k]]]);
	  }return entries;
	}
	
	/**
	 * 分割要传入父元素和子元素的props
	 * @param  {[object]} props     传入的属性
	 * @param  {[reactElement]} Component 组件
	 * @return {[array]}           返回数组，第一个元素为父元素props对象，第二个子元素props对象
	 */
	function splitComponentProps(props, Component) {
	  var componentPropTypes = Component.propTypes;
	
	  var parentProps = {};
	  var childProps = {};
	
	  _objectEntries(props).forEach(function (_ref) {
	    var propName = _ref[0],
	        propValue = _ref[1];
	
	    if (componentPropTypes[propName]) {
	      parentProps[propName] = propValue;
	    } else {
	      childProps[propName] = propValue;
	    }
	  });
	
	  return [parentProps, childProps];
	}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }
	
	    if (acc === null) {
	      return f;
	    }
	
	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}
	exports.default = createChainedFunction;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	module.exports = KeyCode;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = contains;
	function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = addEventListenerWrap;
	
	var _addDomEventListener = __webpack_require__(41);
	
	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2.default.unstable_batchedUpdates ? function run(e) {
	    _reactDom2.default.unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2.default)(target, eventType, callback);
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = addEventListener;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _EventObject = __webpack_require__(42);
	
	var _EventObject2 = _interopRequireDefault(_EventObject);
	
	function addEventListener(target, eventType, callback, option) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2['default'](e);
	    callback.call(target, ne);
	  }
	
	  if (target.addEventListener) {
	    var _ret = (function () {
	      var useCapture = false;
	      if (typeof option === 'object') {
	        useCapture = option.capture || false;
	      } else if (typeof option === 'boolean') {
	        useCapture = option;
	      }
	
	      target.addEventListener(eventType, wrapCallback, option || false);
	
	      return {
	        v: {
	          remove: function remove() {
	            target.removeEventListener(eventType, wrapCallback, useCapture);
	          }
	        }
	      };
	    })();
	
	    if (typeof _ret === 'object') return _ret.v;
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
	}
	
	module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _EventBaseObject = __webpack_require__(43);
	
	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);
	
	var _objectAssign = __webpack_require__(44);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var TRUE = true;
	var FALSE = false;
	var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];
	
	function isNullOrUndefined(w) {
	  return w === null || w === undefined;
	}
	
	var eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }
	
	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
	}, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
	}, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
	}, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
	}, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    var deltaX = undefined;
	    var deltaY = undefined;
	    var delta = undefined;
	    var wheelDelta = nativeEvent.wheelDelta;
	    var axis = nativeEvent.axis;
	    var wheelDeltaY = nativeEvent.wheelDeltaY;
	    var wheelDeltaX = nativeEvent.wheelDeltaX;
	    var detail = nativeEvent.detail;
	
	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }
	
	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }
	
	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }
	
	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }
	
	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }
	
	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }
	
	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }
	
	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
	}, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    var eventDoc = undefined;
	    var doc = undefined;
	    var body = undefined;
	    var target = event.target;
	    var button = nativeEvent.button;
	
	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }
	
	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }
	
	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }
	
	    return event;
	  }
	}];
	
	function retTrue() {
	  return TRUE;
	}
	
	function retFalse() {
	  return FALSE;
	}
	
	function DomEventObject(nativeEvent) {
	  var type = nativeEvent.type;
	
	  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';
	
	  _EventBaseObject2['default'].call(this);
	
	  this.nativeEvent = nativeEvent;
	
	  // in case dom event has been mark as default prevented by lower dom node
	  var isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }
	
	  this.isDefaultPrevented = isDefaultPrevented;
	
	  var fixFns = [];
	  var fixFn = undefined;
	  var l = undefined;
	  var prop = undefined;
	  var props = commonProps.concat();
	
	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });
	
	  l = props.length;
	
	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }
	
	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }
	
	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }
	
	  l = fixFns.length;
	
	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }
	
	  this.timeStamp = nativeEvent.timeStamp || Date.now();
	}
	
	var EventBaseObjectProto = _EventBaseObject2['default'].prototype;
	
	(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,
	
	  preventDefault: function preventDefault() {
	    var e = this.nativeEvent;
	
	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }
	
	    EventBaseObjectProto.preventDefault.call(this);
	  },
	
	  stopPropagation: function stopPropagation() {
	    var e = this.nativeEvent;
	
	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }
	
	    EventBaseObjectProto.stopPropagation.call(this);
	  }
	});
	
	exports['default'] = DomEventObject;
	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function returnFalse() {
	  return false;
	}
	
	function returnTrue() {
	  return true;
	}
	
	function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
	}
	
	EventBaseObject.prototype = {
	  isEventObject: 1,
	
	  constructor: EventBaseObject,
	
	  isDefaultPrevented: returnFalse,
	
	  isPropagationStopped: returnFalse,
	
	  isImmediatePropagationStopped: returnFalse,
	
	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },
	
	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },
	
	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },
	
	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
	};
	
	exports["default"] = EventBaseObject;
	module.exports = exports["default"];

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Event = __webpack_require__(46);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _componentClasses = __webpack_require__(47);
	
	var _componentClasses2 = _interopRequireDefault(_componentClasses);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isCssAnimationSupported = _Event2.default.endEvents.length !== 0;
	
	
	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	
	function getStyleProperty(node, name) {
	  var style = window.getComputedStyle(node);
	
	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}
	
	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}
	
	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}
	
	var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2.default)(node);
	
	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }
	
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);
	
	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };
	
	  _Event2.default.addEndEventListener(node, node.rcEndListener);
	
	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);
	
	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};
	
	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  _Event2.default.addEndEventListener(node, node.rcEndListener);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};
	
	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};
	
	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;
	
	exports.default = cssAnimation;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
	}
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	exports.default = TransitionEvents;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	try {
	  var index = __webpack_require__(48);
	} catch (err) {
	  var index = __webpack_require__(48);
	}
	
	/**
	 * Whitespace regexp.
	 */
	
	var re = /\s+/;
	
	/**
	 * toString reference.
	 */
	
	var toString = Object.prototype.toString;
	
	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */
	
	module.exports = function(el){
	  return new ClassList(el);
	};
	
	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */
	
	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}
	
	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }
	
	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */
	
	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};
	
	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }
	
	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */
	
	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};
	
	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = toArray;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function toArray(children) {
	  var ret = [];
	  _react2.default.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domAlign = __webpack_require__(51);
	
	var _domAlign2 = _interopRequireDefault(_domAlign);
	
	var _addEventListener = __webpack_require__(40);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import isWindow from './isWindow';
	
	function isWindow(obj) {
	  /* eslint no-eq-null: 0 */
	  /* eslint eqeqeq: 0 */
	  return obj != null && obj == obj.window;
	}
	
	function buffer(fn, ms) {
	  var timer = void 0;
	
	  function clear() {
	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }
	  }
	
	  function bufferFn() {
	    clear();
	    timer = setTimeout(fn, ms);
	  }
	
	  bufferFn.clear = clear;
	
	  return bufferFn;
	}
	
	var propTypes = {
	  childrenProps: _propTypes2.default.object,
	  align: _propTypes2.default.object.isRequired,
	  target: _propTypes2.default.func,
	  onAlign: _propTypes2.default.func,
	  monitorBufferTime: _propTypes2.default.number,
	  monitorWindowResize: _propTypes2.default.bool,
	  disabled: _propTypes2.default.bool,
	  children: _propTypes2.default.any
	};
	
	var defaultProps = {
	  target: function target() {
	    return window;
	  },
	  onAlign: function onAlign() {},
	
	  monitorBufferTime: 50,
	  monitorWindowResize: false,
	  disabled: false
	};
	
	var Align = function (_React$Component) {
	  _inherits(Align, _React$Component);
	
	  function Align(props) {
	    _classCallCheck(this, Align);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _initialiseProps.call(_this);
	
	    return _this;
	  }
	
	  Align.prototype.componentDidMount = function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    this.forceAlign();
	    if (!props.disabled && props.monitorWindowResize) {
	      this.startMonitorWindowResize();
	    }
	  };
	
	  Align.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var reAlign = false;
	    var props = this.props;
	
	    if (!props.disabled) {
	      if (prevProps.disabled || prevProps.align !== props.align) {
	        reAlign = true;
	      } else {
	        var lastTarget = prevProps.target();
	        var currentTarget = props.target();
	        if (isWindow(lastTarget) && isWindow(currentTarget)) {
	          reAlign = false;
	        } else if (lastTarget !== currentTarget) {
	          reAlign = true;
	        }
	      }
	    }
	
	    if (reAlign) {
	      this.forceAlign();
	    }
	
	    if (props.monitorWindowResize && !props.disabled) {
	      this.startMonitorWindowResize();
	    } else {
	      this.stopMonitorWindowResize();
	    }
	  };
	
	  Align.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  };
	
	  Align.prototype.render = function render() {
	    var _props = this.props,
	        childrenProps = _props.childrenProps,
	        children = _props.children;
	
	    var child = _react2.default.Children.only(children);
	    if (childrenProps) {
	      var newProps = {};
	      for (var prop in childrenProps) {
	        if (childrenProps.hasOwnProperty(prop)) {
	          newProps[prop] = this.props[childrenProps[prop]];
	        }
	      }
	      return _react2.default.cloneElement(child, newProps);
	    }
	    return child;
	  };
	
	  return Align;
	}(_react2.default.Component);
	
	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;
	
	  this.startMonitorWindowResize = function () {
	    if (!_this2.resizeHandler) {
	      _this2.bufferMonitor = buffer(_this2.forceAlign, _this2.props.monitorBufferTime);
	      _this2.resizeHandler = (0, _addEventListener2.default)(window, 'resize', _this2.bufferMonitor);
	    }
	  };
	
	  this.stopMonitorWindowResize = function () {
	    if (_this2.resizeHandler) {
	      _this2.bufferMonitor.clear();
	      _this2.resizeHandler.remove();
	      _this2.resizeHandler = null;
	    }
	  };
	
	  this.forceAlign = function () {
	    var props = _this2.props;
	    if (!props.disabled) {
	      var source = _reactDom2.default.findDOMNode(_this2);
	      props.onAlign(source, (0, _domAlign2.default)(source, props.target(), props.align));
	    }
	  };
	};
	
	;
	
	Align.defaultProps = defaultProps;
	Align.propTypes = propTypes;
	
	exports.default = Align;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.alignPoint = exports.alignElement = undefined;
	
	var _alignElement = __webpack_require__(52);
	
	var _alignElement2 = _interopRequireDefault(_alignElement);
	
	var _alignPoint = __webpack_require__(63);
	
	var _alignPoint2 = _interopRequireDefault(_alignPoint);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports.alignElement = _alignElement2['default'];
	exports.alignPoint = _alignPoint2['default'];
	exports['default'] = _alignElement2['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _align = __webpack_require__(53);
	
	var _align2 = _interopRequireDefault(_align);
	
	var _getOffsetParent = __webpack_require__(57);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	var _getVisibleRectForElement = __webpack_require__(56);
	
	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);
	
	var _getRegion = __webpack_require__(60);
	
	var _getRegion2 = _interopRequireDefault(_getRegion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function isOutOfVisibleRect(target) {
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(target);
	  var targetRegion = (0, _getRegion2['default'])(target);
	
	  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
	}
	
	function alignElement(el, refNode, align) {
	  var target = align.target || refNode;
	  var refNodeRegion = (0, _getRegion2['default'])(target);
	
	  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);
	
	  return (0, _align2['default'])(el, refNodeRegion, align, isTargetNotOutOfVisible);
	}
	
	alignElement.__getOffsetParent = _getOffsetParent2['default'];
	
	alignElement.__getVisibleRectForElement = _getVisibleRectForElement2['default'];
	
	exports['default'] = alignElement;
	module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(54);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getVisibleRectForElement = __webpack_require__(56);
	
	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);
	
	var _adjustForViewport = __webpack_require__(59);
	
	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);
	
	var _getRegion = __webpack_require__(60);
	
	var _getRegion2 = _interopRequireDefault(_getRegion);
	
	var _getElFuturePos = __webpack_require__(61);
	
	var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	// http://yiminghe.iteye.com/blog/1124720
	
	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	} /**
	   * align dom node flexibly
	   * @author yiminghe@gmail.com
	   */
	
	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}
	
	function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
	}
	
	function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
	}
	
	function flip(points, reg, map) {
	  var ret = [];
	  _utils2['default'].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}
	
	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}
	
	function convertOffset(str, offsetLen) {
	  var n = void 0;
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	  return n || 0;
	}
	
	function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
	}
	
	/**
	 * @param el
	 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
	 * @param align
	 */
	function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
	  var points = align.points;
	  var offset = align.offset || [0, 0];
	  var targetOffset = align.targetOffset || [0, 0];
	  var overflow = align.overflow;
	  var source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  var newOverflowCfg = {};
	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = (0, _getRegion2['default'])(source);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, tgtRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2['default'].merge(elRegion, elFuturePos);
	
	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var newPoints = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        var newOffset = flipOffset(offset, 0);
	        var newTargetOffset = flipOffset(targetOffset, 0);
	        var newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);
	
	        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = newPoints;
	          offset = newOffset;
	          targetOffset = newTargetOffset;
	        }
	      }
	    }
	
	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var _newPoints = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        var _newOffset = flipOffset(offset, 1);
	        var _newTargetOffset = flipOffset(targetOffset, 1);
	        var _newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);
	
	        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = _newPoints;
	          offset = _newOffset;
	          targetOffset = _newTargetOffset;
	        }
	      }
	    }
	
	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, points, offset, targetOffset);
	      _utils2['default'].mix(newElRegion, elFuturePos);
	    }
	    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
	    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
	    // 检查反下后的位置是否可以放下了，如果仍然放不下：
	    // 1. 复原修改过的定位参数
	    if (isStillFailX || isStillFailY) {
	      points = align.points;
	      offset = align.offset || [0, 0];
	      targetOffset = align.targetOffset || [0, 0];
	    }
	    // 2. 只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
	    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;
	
	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2['default'])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }
	
	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2['default'].css(source, 'width', _utils2['default'].width(source) + newElRegion.width - elRegion.width);
	  }
	
	  if (newElRegion.height !== elRegion.height) {
	    _utils2['default'].css(source, 'height', _utils2['default'].height(source) + newElRegion.height - elRegion.height);
	  }
	
	  // https://github.com/kissyteam/kissy/issues/190
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2['default'].offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom,
	    useCssTransform: align.useCssTransform,
	    ignoreShake: align.ignoreShake
	  });
	
	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
	}
	
	exports['default'] = doAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/
	
	module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _propertyUtils = __webpack_require__(55);
	
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	var getComputedStyleX = void 0;
	
	// https://stackoverflow.com/a/3485654/3040605
	function forceRelayout(elem) {
	  var originalStyle = elem.style.display;
	  elem.style.display = 'none';
	  elem.offsetHeight; // eslint-disable-line
	  elem.style.display = originalStyle;
	}
	
	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}
	
	function getClientPosition(elem) {
	  var box = void 0;
	  var x = void 0;
	  var y = void 0;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}
	
	function getDocument(node) {
	  if (isWindow(node)) {
	    return node.document;
	  }
	  if (node.nodeType === 9) {
	    return node;
	  }
	  return node.ownerDocument;
	}
	
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = getDocument(elem);
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	  return option.useCssBottom ? 'bottom' : dir;
	}
	
	function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setLeftTop(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var presetH = -999;
	  var presetV = -999;
	  var horizontalProperty = getOffsetDirection('left', option);
	  var verticalProperty = getOffsetDirection('top', option);
	  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
	
	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }
	
	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }
	  var originalTransition = '';
	  var originalOffset = getOffset(elem);
	  if ('left' in offset || 'top' in offset) {
	    originalTransition = (0, _propertyUtils.getTransitionProperty)(elem) || '';
	    (0, _propertyUtils.setTransitionProperty)(elem, 'none');
	  }
	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = presetH + 'px';
	  }
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = presetV + 'px';
	  }
	  // force relayout
	  forceRelayout(elem);
	  var old = getOffset(elem);
	  var originalStyle = {};
	  for (var key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      var dir = getOffsetDirection(key, option);
	      var preset = key === 'left' ? presetH : presetV;
	      var off = originalOffset[key] - old[key];
	      if (dir === key) {
	        originalStyle[dir] = preset + off;
	      } else {
	        originalStyle[dir] = preset - off;
	      }
	    }
	  }
	  css(elem, originalStyle);
	  // force relayout
	  forceRelayout(elem);
	  if ('left' in offset || 'top' in offset) {
	    (0, _propertyUtils.setTransitionProperty)(elem, originalTransition);
	  }
	  var ret = {};
	  for (var _key in offset) {
	    if (offset.hasOwnProperty(_key)) {
	      var _dir = getOffsetDirection(_key, option);
	      var _off = offset[_key] - originalOffset[_key];
	      if (_key === _dir) {
	        ret[_dir] = originalStyle[_dir] + _off;
	      } else {
	        ret[_dir] = originalStyle[_dir] - _off;
	      }
	    }
	  }
	  css(elem, ret);
	}
	
	function setTransform(elem, offset) {
	  var originalOffset = getOffset(elem);
	  var originalXY = (0, _propertyUtils.getTransformXY)(elem);
	  var resultXY = { x: originalXY.x, y: originalXY.y };
	  if ('left' in offset) {
	    resultXY.x = originalXY.x + offset.left - originalOffset.left;
	  }
	  if ('top' in offset) {
	    resultXY.y = originalXY.y + offset.top - originalOffset.top;
	  }
	  (0, _propertyUtils.setTransformXY)(elem, resultXY);
	}
	
	function setOffset(elem, offset, option) {
	  if (option.ignoreShake) {
	    var oriOffset = getOffset(elem);
	
	    var oLeft = oriOffset.left.toFixed(0);
	    var oTop = oriOffset.top.toFixed(0);
	    var tLeft = offset.left.toFixed(0);
	    var tTop = offset.top.toFixed(0);
	
	    if (oLeft === tLeft && oTop === tTop) {
	      return;
	    }
	  }
	
	  if (option.useCssRight || option.useCssBottom) {
	    setLeftTop(elem, offset, option);
	  } else if (option.useCssTransform && (0, _propertyUtils.getTransformName)() in document.body.style) {
	    setTransform(elem, offset, option);
	  } else {
	    setLeftTop(elem, offset, option);
	  }
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = void 0;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = void 0;
	  var j = void 0;
	  var i = void 0;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = void 0;
	        if (prop === 'border') {
	          cssProp = '' + prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}
	
	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  var val = void 0;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}
	
	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	
	  getDocument: getDocument,
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },
	
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = void 0;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	
	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};
	
	    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
	      args[_key3] = arguments[_key3];
	    }
	
	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },
	
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	
	mix(utils, domUtils);
	
	exports['default'] = utils;
	module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTransformName = getTransformName;
	exports.setTransitionProperty = setTransitionProperty;
	exports.getTransitionProperty = getTransitionProperty;
	exports.getTransformXY = getTransformXY;
	exports.setTransformXY = setTransformXY;
	var vendorPrefix = void 0;
	
	var jsCssMap = {
	  Webkit: '-webkit-',
	  Moz: '-moz-',
	  // IE did it wrong again ...
	  ms: '-ms-',
	  O: '-o-'
	};
	
	function getVendorPrefix() {
	  if (vendorPrefix !== undefined) {
	    return vendorPrefix;
	  }
	  vendorPrefix = '';
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';
	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      vendorPrefix = key;
	    }
	  }
	  return vendorPrefix;
	}
	
	function getTransitionName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
	}
	
	function getTransformName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
	}
	
	function setTransitionProperty(node, value) {
	  var name = getTransitionName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transitionProperty') {
	      node.style.transitionProperty = value;
	    }
	  }
	}
	
	function setTransform(node, value) {
	  var name = getTransformName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transform') {
	      node.style.transform = value;
	    }
	  }
	}
	
	function getTransitionProperty(node) {
	  return node.style.transitionProperty || node.style[getTransitionName()];
	}
	
	function getTransformXY(node) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
	    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
	  }
	  return {
	    x: 0,
	    y: 0
	  };
	}
	
	var matrix2d = /matrix\((.*)\)/;
	var matrix3d = /matrix3d\((.*)\)/;
	
	function setTransformXY(node, xy) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var arr = void 0;
	    var match2d = transform.match(matrix2d);
	    if (match2d) {
	      match2d = match2d[1];
	      arr = match2d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[4] = xy.x;
	      arr[5] = xy.y;
	      setTransform(node, 'matrix(' + arr.join(',') + ')');
	    } else {
	      var match3d = transform.match(matrix3d)[1];
	      arr = match3d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[12] = xy.x;
	      arr[13] = xy.y;
	      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
	    }
	  } else {
	    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
	  }
	}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(54);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getOffsetParent = __webpack_require__(57);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	var _isAncestorFixed = __webpack_require__(58);
	
	var _isAncestorFixed2 = _interopRequireDefault(_isAncestorFixed);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * 获得元素的显示部分的区域
	 */
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = (0, _getOffsetParent2['default'])(element);
	  var doc = _utils2['default'].getDocument(element);
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;
	
	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2['default'].css(el, 'overflow') !== 'visible') {
	      var pos = _utils2['default'].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = (0, _getOffsetParent2['default'])(el);
	  }
	
	  // Set element position to fixed
	  // make sure absolute element itself don't affect it's visible area
	  // https://github.com/ant-design/ant-design/issues/7601
	  var originalPosition = null;
	  if (!_utils2['default'].isWindow(element) && element.nodeType !== 9) {
	    originalPosition = element.style.position;
	    var position = _utils2['default'].css(element, 'position');
	    if (position === 'absolute') {
	      element.style.position = 'fixed';
	    }
	  }
	
	  var scrollX = _utils2['default'].getWindowScrollLeft(win);
	  var scrollY = _utils2['default'].getWindowScrollTop(win);
	  var viewportWidth = _utils2['default'].viewportWidth(win);
	  var viewportHeight = _utils2['default'].viewportHeight(win);
	  var documentWidth = documentElement.scrollWidth;
	  var documentHeight = documentElement.scrollHeight;
	
	  // Reset element position after calculate the visible area
	  if (element.style) {
	    element.style.position = originalPosition;
	  }
	
	  if ((0, _isAncestorFixed2['default'])(element)) {
	    // Clip by viewport's size.
	    visibleRect.left = Math.max(visibleRect.left, scrollX);
	    visibleRect.top = Math.max(visibleRect.top, scrollY);
	    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
	    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
	  } else {
	    // Clip by document's size.
	    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
	    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
	
	    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
	    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
	  }
	
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}
	
	exports['default'] = getVisibleRectForElement;
	module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(54);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * 得到会导致元素显示不全的祖先元素
	 */
	
	function getOffsetParent(element) {
	  if (_utils2['default'].isWindow(element) || element.nodeType === 9) {
	    return null;
	  }
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = _utils2['default'].getDocument(element);
	  var body = doc.body;
	  var parent = void 0;
	  var positionStyle = _utils2['default'].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
	
	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }
	
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}
	
	exports['default'] = getOffsetParent;
	module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = isAncestorFixed;
	
	var _utils = __webpack_require__(54);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function isAncestorFixed(element) {
	  if (_utils2['default'].isWindow(element) || element.nodeType === 9) {
	    return false;
	  }
	
	  var doc = _utils2['default'].getDocument(element);
	  var body = doc.body;
	  var parent = null;
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    var positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle === 'fixed') {
	      return true;
	    }
	  }
	  return false;
	}
	module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(54);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2['default'].clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };
	
	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }
	
	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }
	
	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }
	
	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }
	
	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }
	
	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }
	
	  return _utils2['default'].mix(pos, size);
	}
	
	exports['default'] = adjustForViewport;
	module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(54);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getRegion(node) {
	  var offset = void 0;
	  var w = void 0;
	  var h = void 0;
	  if (!_utils2['default'].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2['default'].offset(node);
	    w = _utils2['default'].outerWidth(node);
	    h = _utils2['default'].outerHeight(node);
	  } else {
	    var win = _utils2['default'].getWindow(node);
	    offset = {
	      left: _utils2['default'].getWindowScrollLeft(win),
	      top: _utils2['default'].getWindowScrollTop(win)
	    };
	    w = _utils2['default'].viewportWidth(win);
	    h = _utils2['default'].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}
	
	exports['default'] = getRegion;
	module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getAlignOffset = __webpack_require__(62);
	
	var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var p1 = (0, _getAlignOffset2['default'])(refNodeRegion, points[1]);
	  var p2 = (0, _getAlignOffset2['default'])(elRegion, points[0]);
	  var diff = [p2.left - p1.left, p2.top - p1.top];
	
	  return {
	    left: elRegion.left - diff[0] + offset[0] - targetOffset[0],
	    top: elRegion.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}
	
	exports['default'] = getElFuturePos;
	module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */
	
	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	
	  var x = region.left;
	  var y = region.top;
	
	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }
	
	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	exports['default'] = getAlignOffset;
	module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _utils = __webpack_require__(54);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _align = __webpack_require__(53);
	
	var _align2 = _interopRequireDefault(_align);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
	 * If client position provided, will internal convert to page position.
	 */
	
	function alignPoint(el, tgtPoint, align) {
	  var pageX = void 0;
	  var pageY = void 0;
	
	  var doc = _utils2['default'].getDocument(el);
	  var win = doc.defaultView || doc.parentWindow;
	
	  var scrollX = _utils2['default'].getWindowScrollLeft(win);
	  var scrollY = _utils2['default'].getWindowScrollTop(win);
	  var viewportWidth = _utils2['default'].viewportWidth(win);
	  var viewportHeight = _utils2['default'].viewportHeight(win);
	
	  if ('pageX' in tgtPoint) {
	    pageX = tgtPoint.pageX;
	  } else {
	    pageX = scrollX + tgtPoint.clientX;
	  }
	
	  if ('pageY' in tgtPoint) {
	    pageY = tgtPoint.pageY;
	  } else {
	    pageY = scrollY + tgtPoint.clientY;
	  }
	
	  var tgtRegion = {
	    left: pageX,
	    top: pageY,
	    width: 0,
	    height: 0
	  };
	
	  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;
	
	  // Provide default target point
	  var points = [align.points[0], 'cc'];
	
	  return (0, _align2['default'])(el, tgtRegion, _extends({}, align, { points: points }), pointInView);
	}
	
	exports['default'] = alignPoint;
	module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Transition = __webpack_require__(11);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  /**
	   * Show the component; triggers the fade in or fade out animation
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is faded out
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * Run the fade in animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * Duration of the fade animation in milliseconds, to ensure that finishing
	   * callbacks are fired even if the original browser transition end events are
	   * canceled
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * Callback fired before the component fades in
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to fade in
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * Callback fired after the has component faded in
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * Callback fired before the component fades out
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to fade out
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has faded out
	   */
	  onExited: _propTypes2["default"].func
	};
	
	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false
	};
	
	var Fade = function (_React$Component) {
	  _inherits(Fade, _React$Component);
	
	  function Fade() {
	    _classCallCheck(this, Fade);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Fade.prototype.render = function render() {
	    return _react2["default"].createElement(_Transition2["default"], _extends({}, this.props, {
	      className: (0, _classnames2["default"])(this.props.className, 'fade'),
	      enteredClassName: 'in',
	      enteringClassName: 'in'
	    }));
	  };
	
	  return Fade;
	}(_react2["default"].Component);
	
	Fade.propTypes = propTypes;
	Fade.defaultProps = defaultProps;
	
	exports["default"] = Fade;
	module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Message = __webpack_require__(66);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Message2["default"];
	module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeNotification = __webpack_require__(67);
	
	var _beeNotification2 = _interopRequireDefault(_beeNotification);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var defaultDuration = 1.5;
	var defaultTop = 0;
	var defaultBottom = 48;
	var bottom = 90;
	var padding = 30;
	var width = 200;
	var messageInstance = void 0;
	var key = 1;
	var clsPrefix = 'u-message';
	var noop = function noop() {};
	
	var positionObj = {
	    "top": {
	        messageStyle: {
	            width: "100%"
	        },
	        notificationStyle: {
	            top: defaultTop,
	            width: "100%"
	        },
	        transitionName: 'top'
	    },
	    "bottom": {
	        messageStyle: {
	            width: "100%"
	        },
	        notificationStyle: {
	            bottom: defaultBottom,
	            width: "100%"
	        },
	        transitionName: 'bottom'
	    },
	    "topRight": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            top: padding,
	            right: padding,
	            width: width
	        },
	        transitionName: 'right'
	    },
	    "bottomRight": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            bottom: bottom,
	            right: padding,
	            width: width
	        },
	        transitionName: 'right'
	    },
	    "topLeft": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            top: padding,
	            left: padding,
	            width: width
	        },
	        transitionName: 'left'
	    },
	    "bottomLeft": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            bottom: bottom,
	            left: padding,
	            width: width
	        },
	        transitionName: 'left'
	    }
	};
	
	function getMessageInstance() {
	    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'top';
	    var callback = arguments[1];
	
	    if (messageInstance) {
	        callback(messageInstance);
	        return;
	    }
	    var style = positionObj[position].notificationStyle;
	    _beeNotification2["default"].newInstance({
	        clsPrefix: clsPrefix,
	        transitionName: clsPrefix + '-' + positionObj[position].transitionName,
	        style: style, // 覆盖原来的样式
	        position: ''
	    }, function (instance) {
	        messageInstance = instance;
	        callback(instance);
	    });
	}
	
	function notice(content, duration, type, onClose, position, style) {
	    var iconType = {
	        info: 'uf uf-i-c-2',
	        success: 'uf uf-correct',
	        danger: 'uf uf-close-c',
	        warning: 'uf uf-exc-t',
	        light: 'uf uf-notification',
	        dark: 'uf uf-bubble',
	        news: 'uf uf-bell',
	        infolight: 'uf uf-i-c-2',
	        successlight: 'uf uf-correct',
	        dangerlight: 'uf uf-close-c',
	        warninglight: 'uf uf-exc-t'
	    }[type];
	
	    var positionStyle = positionObj[position].messageStyle;
	
	    getMessageInstance(position, function (instance) {
	        instance.notice({
	            key: key,
	            duration: duration,
	            color: type,
	            style: _extends({}, positionStyle, style),
	            content: _react2["default"].createElement(
	                'div',
	                null,
	                _react2["default"].createElement(
	                    'div',
	                    { className: clsPrefix + '-notice-description-icon' },
	                    _react2["default"].createElement('i', { className: (0, _classnames2["default"])(iconType) })
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: clsPrefix + '-notice-description-content' },
	                    content
	                )
	            ),
	            onClose: onClose
	        });
	    });
	    return function () {
	        var target = key++;
	        return function () {
	            if (messageInstance) {
	                messageInstance.removeNotice(target);
	            }
	        };
	    }();
	}
	
	exports["default"] = {
	    create: function create(obj) {
	        var content = obj.content || '';
	        var duration = _typeof(obj.duration) == undefined ? defaultDuration : obj.duration;
	        var color = obj.color || 'dark';
	        var onClose = obj.onClose || noop;
	        var position = obj.position || "top";
	        var style = obj.style || {};
	        return notice(content, duration, color, onClose, position, style);
	    },
	    config: function config(options) {
	        if (options.top !== undefined) {
	            defaultTop = options.top;
	        }
	        if (options.duration !== undefined) {
	            defaultDuration = options.duration;
	        }
	        if (options.clsPrefix !== undefined) {
	            clsPrefix = options.clsPrefix;
	        }
	        if (options.defaultBottom !== undefined) {
	            defaultBottom = options.defaultBottom;
	        }
	        if (options.bottom !== undefined) {
	            bottom = options.bottom;
	        }
	        if (options.width !== undefined) {
	            bottom = options.width;
	        }
	    },
	    destroy: function destroy() {
	        if (messageInstance) {
	            messageInstance.destroy();
	            messageInstance = null;
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Notification = __webpack_require__(68);
	
	var _Notification2 = _interopRequireDefault(_Notification);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Notification2["default"];
	module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _beeAnimate = __webpack_require__(69);
	
	var _beeAnimate2 = _interopRequireDefault(_beeAnimate);
	
	var _createChainedFunction = __webpack_require__(37);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Notice = __webpack_require__(74);
	
	var _Notice2 = _interopRequireDefault(_Notice);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var seed = 0;
	var now = Date.now();
	
	function getUuid() {
	  return 'uNotification_' + now + '_' + seed++;
	}
	
	var propTypes = {
	  show: _propTypes2["default"].bool,
	  clsPrefix: _propTypes2["default"].string,
	  style: _propTypes2["default"].object,
	  position: _propTypes2["default"].oneOf(['topRight', 'bottomRight', '']),
	  transitionName: _propTypes2["default"].string,
	  animation: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object])
	};
	
	var defaultProps = {
	  clsPrefix: 'u-notification',
	  animation: 'fade',
	  position: 'topRight'
	};
	
	var Notification = function (_Component) {
	  _inherits(Notification, _Component);
	
	  function Notification(props) {
	    _classCallCheck(this, Notification);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.state = {
	      notices: []
	    };
	    _this.add = _this.add.bind(_this);
	    _this.remove = _this.remove.bind(_this);
	
	    return _this;
	  }
	
	  Notification.prototype.getTransitionName = function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.clsPrefix + '-' + props.animation;
	    }
	    return transitionName;
	  };
	
	  Notification.prototype.add = function add(notice) {
	    var key = notice.key = notice.key || getUuid();
	    this.setState(function (previousState) {
	      var notices = previousState.notices;
	      if (!notices.filter(function (v) {
	        return v.key === key;
	      }).length) {
	        return {
	          notices: notices.concat(notice)
	        };
	      }
	    });
	  };
	
	  Notification.prototype.remove = function remove(key) {
	    this.setState(function (previousState) {
	      return {
	        notices: previousState.notices.filter(function (notice) {
	          return notice.key !== key;
	        })
	      };
	    });
	  };
	
	  Notification.prototype.render = function render() {
	    var _this2 = this,
	        _classes;
	
	    var _props = this.props,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        position = _props.position,
	        style = _props.style;
	
	    var noticeNodes = this.state.notices.map(function (notice) {
	      var onClose = (0, _createChainedFunction2["default"])(_this2.remove.bind(_this2, notice.key), notice.onClose);
	      return _react2["default"].createElement(
	        _Notice2["default"],
	        _extends({
	          clsPrefix: clsPrefix
	        }, notice, {
	          onClose: onClose
	        }),
	        notice.content
	      );
	    });
	    var classes = (_classes = {}, _defineProperty(_classes, clsPrefix, 1), _defineProperty(_classes, className, !!className), _classes);
	    if (position) {
	      classes[clsPrefix + '-' + position] = !!position;
	    }
	
	    return _react2["default"].createElement(
	      'div',
	      { className: (0, _classnames2["default"])(className, classes), style: style },
	      _react2["default"].createElement(
	        _beeAnimate2["default"],
	        { transitionName: this.getTransitionName() },
	        noticeNodes
	      )
	    );
	  };
	
	  return Notification;
	}(_react.Component);
	
	;
	
	Notification.propTypes = propTypes;
	Notification.defaultProps = defaultProps;
	
	Notification.newInstance = function newNotificationInstance(properties, callback) {
	  if (typeof callback !== 'function') {
	    console.error('You must introduce callback as the second parameter of Notification.newInstance().');
	    return;
	  }
	  var props = properties || {};
	  var div = document.createElement('div');
	  document.body.appendChild(div);
	
	  var called = false;
	  function ref(notification) {
	    if (called) {
	      return;
	    }
	    called = true;
	    callback({
	      notice: function notice(noticeProps) {
	        notification.add(noticeProps);
	      },
	      removeNotice: function removeNotice(key) {
	        notification.remove(key);
	      },
	
	      component: notification,
	      destroy: function destroy() {
	        _reactDom2["default"].unmountComponentAtNode(div);
	        document.body.removeChild(div);
	      }
	    });
	  }
	  _reactDom2["default"].render(_react2["default"].createElement(Notification, _extends({}, props, { ref: ref })), div);
	};
	
	exports["default"] = Notification;
	module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Animate = __webpack_require__(70);
	
	var _Animate2 = _interopRequireDefault(_Animate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Animate2["default"];
	module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _ChildrenUtils = __webpack_require__(71);
	
	var _AnimateChild = __webpack_require__(72);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var _util = __webpack_require__(73);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var defaultKey = 'u_animate_' + Date.now();
	
	
	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2["default"].isValidElement(children)) {
	    if (!children.key) {
	      return _react2["default"].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}
	
	function noop() {}
	
	var propTypes = {
	  component: _propTypes2["default"].any,
	  animation: _propTypes2["default"].object,
	  transitionName: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object]),
	  transitionEnter: _propTypes2["default"].bool,
	  transitionAppear: _propTypes2["default"].bool,
	  exclusive: _propTypes2["default"].bool,
	  transitionLeave: _propTypes2["default"].bool,
	  onEnd: _propTypes2["default"].func,
	  onEnter: _propTypes2["default"].func,
	  onLeave: _propTypes2["default"].func,
	  onAppear: _propTypes2["default"].func,
	  showProp: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  animation: {},
	  component: 'span',
	  transitionEnter: true,
	  transitionLeave: true,
	  transitionAppear: false,
	  onEnd: noop,
	  onEnter: noop,
	  onLeave: noop,
	  onAppear: noop
	};
	
	var Animate = function (_Component) {
	  _inherits(Animate, _Component);
	
	  function Animate(props) {
	    _classCallCheck(this, Animate);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.currentlyAnimatingKeys = {};
	    _this.keysToEnter = [];
	    _this.keysToLeave = [];
	    _this.state = {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(_this.props))
	    };
	
	    _this.performEnter = _this.performEnter.bind(_this);
	    _this.performAppear = _this.performAppear.bind(_this);
	    _this.handleDoneAdding = _this.handleDoneAdding.bind(_this);
	    _this.performLeave = _this.performLeave.bind(_this);
	
	    _this.performLeave = _this.performLeave.bind(_this);
	    _this.handleDoneLeaving = _this.handleDoneLeaving.bind(_this);
	    _this.isValidChildByKey = _this.isValidChildByKey.bind(_this);
	    _this.stop = _this.stop.bind(_this);
	    return _this;
	  }
	
	  Animate.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    this.mounted = true;
	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (child) {
	        return !!child.props[showProp];
	      });
	    }
	    children.forEach(function (child) {
	      if (child) {
	        _this2.performAppear(child.key);
	      }
	    });
	  };
	
	  Animate.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.mounted = false;
	  };
	
	  Animate.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this3 = this;
	
	    this.nextProps = nextProps;
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    // exclusive needs immediate response
	    if (props.exclusive) {
	      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	        _this3.stop(key);
	      });
	    }
	    var showProp = props.showProp;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = currentChild && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = void 0;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2["default"].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	      nextChildren.forEach(function (nextChild) {
	        if (!nextChild || !(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	          newChildren.push(nextChild);
	        }
	      });
	    } else {
	      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	    }
	
	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });
	
	    nextChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = child && (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = child.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this3.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this3.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this3.keysToEnter.push(key);
	      }
	    });
	
	    currentChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = child && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = child.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this3.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this3.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this3.keysToLeave.push(key);
	      }
	    });
	  };
	
	  Animate.prototype.componentDidUpdate = function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  };
	
	  Animate.prototype.performEnter = function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  };
	
	  Animate.prototype.performAppear = function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  };
	
	  Animate.prototype.handleDoneAdding = function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2["default"].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2["default"].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  };
	
	  Animate.prototype.performLeave = function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  };
	
	  Animate.prototype.handleDoneLeaving = function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      var end = function end() {
	        if (_util2["default"].allowLeaveCallback(props)) {
	          props.onLeave(key);
	          props.onEnd(key, false);
	        }
	      };
	      /* eslint react/no-is-mounted:0 */
	      if (this.mounted && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        }, end);
	      } else {
	        end();
	      }
	    }
	  };
	
	  Animate.prototype.isValidChildByKey = function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  };
	
	  Animate.prototype.stop = function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  };
	
	  Animate.prototype.render = function render() {
	    var props = this.props;
	    this.nextProps = props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (child === null || child === undefined) {
	          return child;
	        }
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2["default"].createElement(
	          _AnimateChild2["default"],
	          {
	            key: child.key,
	            ref: child.key,
	            animation: props.animation,
	            transitionName: props.transitionName,
	            transitionEnter: props.transitionEnter,
	            transitionAppear: props.transitionAppear,
	            transitionLeave: props.transitionLeave
	          },
	          child
	        );
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      var passedProps = props;
	      if (typeof Component === 'string') {
	        passedProps = {
	          className: props.className,
	          style: props.style
	        };
	      }
	      return _react2["default"].createElement(
	        Component,
	        passedProps,
	        children
	      );
	    }
	    return children[0] || null;
	  };
	
	  return Animate;
	}(_react.Component);
	
	;
	Animate.defaultProps = defaultProps;
	Animate.propTypes = Animate.propTypes;
	
	exports["default"] = Animate;
	module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
	exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
	exports.isSameChildren = isSameChildren;
	exports.mergeChildren = mergeChildren;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function toArrayChildren(children) {
	  var ret = [];
	  _react2["default"].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
	}
	
	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child && child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findShownChildInChildrenByKey(children, key, showProp) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child && child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findHiddenChildInChildrenByKey(children, key, showProp) {
	  var found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child && child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
	}
	
	function isSameChildren(c1, c2, showProp) {
	  var same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      var child2 = c2[index];
	      if (child && child2) {
	        if (child && !child2 || !child && child2) {
	          same = false;
	        } else if (child.key !== child2.key) {
	          same = false;
	        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	          same = false;
	        }
	      }
	    });
	  }
	  return same;
	}
	
	function mergeChildren(prev, next) {
	  var ret = [];
	
	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (child) {
	    if (child && findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });
	
	  next.forEach(function (child) {
	    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });
	
	  ret = ret.concat(pendingChildren);
	
	  return ret;
	}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _tinperBeeCore = __webpack_require__(27);
	
	var _util = __webpack_require__(73);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};
	
	var propTypes = {
	  children: _propTypes2["default"].any
	};
	
	var AnimateChild = function (_Component) {
	  _inherits(AnimateChild, _Component);
	
	  function AnimateChild(props) {
	    _classCallCheck(this, AnimateChild);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.transition = _this.transition.bind(_this);
	    _this.stop = _this.stop.bind(_this);
	    return _this;
	  }
	
	  AnimateChild.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.stop();
	  };
	
	  AnimateChild.prototype.componentWillEnter = function componentWillEnter(done) {
	    if (_util2["default"].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  };
	
	  AnimateChild.prototype.componentWillAppear = function componentWillAppear(done) {
	    if (_util2["default"].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  };
	
	  AnimateChild.prototype.componentWillLeave = function componentWillLeave(done) {
	    if (_util2["default"].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      // always sync, do not interupt with react component life cycle
	      // update hidden -> animate hidden ->
	      // didUpdate -> animate leave -> unmount (if animate is none)
	      done();
	    }
	  };
	
	  AnimateChild.prototype.transition = function transition(animationType, finishCallback) {
	    var _this2 = this;
	
	    var node = _reactDom2["default"].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	    this.stop();
	    var end = function end() {
	      _this2.stopper = null;
	      finishCallback();
	    };
	    if ((_tinperBeeCore.cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
	      var activeName = name + '-active';
	      if (nameIsObj && transitionName[animationType + 'Active']) {
	        activeName = transitionName[animationType + 'Active'];
	      }
	      this.stopper = (0, _tinperBeeCore.cssAnimation)(node, {
	        name: name,
	        active: activeName
	      }, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  };
	
	  AnimateChild.prototype.stop = function stop() {
	    var stopper = this.stopper;
	    if (stopper) {
	      this.stopper = null;
	      stopper.stop();
	    }
	  };
	
	  AnimateChild.prototype.render = function render() {
	    return this.props.children;
	  };
	
	  return AnimateChild;
	}(_react.Component);
	
	;
	
	AnimateChild.propTypes = propTypes;
	
	exports["default"] = AnimateChild;
	module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports["default"];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  duration: _propTypes2["default"].number,
	  onClose: _propTypes2["default"].func,
	  children: _propTypes2["default"].any,
	  color: _propTypes2["default"].oneOf(['info', 'success', 'danger', 'warning', 'light', 'dark', 'news', 'infolight', 'successlight', 'dangerlight', 'warninglight']),
	  title: _propTypes2["default"].any
	};
	
	function noop() {}
	
	var defaultProps = {
	  onEnd: noop,
	  onClose: noop,
	  duration: 4.5,
	  closable: true
	};
	
	var Notice = function (_React$Component) {
	  _inherits(Notice, _React$Component);
	
	  function Notice(props) {
	    _classCallCheck(this, Notice);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.clearCloseTimer = _this.clearCloseTimer.bind(_this);
	    _this.close = _this.close.bind(_this);
	    return _this;
	  }
	
	  Notice.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    if (this.props.duration) {
	      this.closeTimer = setTimeout(function () {
	        _this2.close();
	      }, this.props.duration * 1000);
	    }
	  };
	
	  Notice.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.clearCloseTimer();
	  };
	
	  Notice.prototype.clearCloseTimer = function clearCloseTimer() {
	    if (this.closeTimer) {
	      clearTimeout(this.closeTimer);
	      this.closeTimer = null;
	    }
	  };
	
	  Notice.prototype.close = function close() {
	    this.clearCloseTimer();
	    this.props.onClose();
	  };
	
	  Notice.prototype.render = function render() {
	    var _classes;
	
	    var _props = this.props,
	        closable = _props.closable,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        style = _props.style,
	        children = _props.children,
	        color = _props.color,
	        title = _props.title;
	
	    var componentClass = clsPrefix + '-notice';
	    var classes = (_classes = {}, _defineProperty(_classes, '' + componentClass, 1), _defineProperty(_classes, componentClass + '-closable', closable), _defineProperty(_classes, className, !!className), _classes);
	    if (color) {
	      classes[componentClass + '-' + color] = true;
	    }
	    return _react2["default"].createElement(
	      'div',
	      { className: (0, _classnames2["default"])(classes), style: style, onClick: this.close },
	      _react2["default"].createElement(
	        'div',
	        { className: componentClass + '-content' },
	        title && _react2["default"].createElement(
	          'div',
	          { className: componentClass + '-title' },
	          title
	        ),
	        _react2["default"].createElement(
	          'div',
	          { className: componentClass + '-description' },
	          children
	        )
	      ),
	      closable ? _react2["default"].createElement(
	        'a',
	        { tabIndex: '0', onClick: this.close, className: componentClass + '-close' },
	        _react2["default"].createElement('span', { className: componentClass + '-close-x' })
	      ) : null
	    );
	  };
	
	  return Notice;
	}(_react2["default"].Component);
	
	;
	
	Notice.propTypes = propTypes;
	Notice.defaultProps = defaultProps;
	
	exports["default"] = Notice;
	module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var deselectCurrent = __webpack_require__(76);
	
	var defaultMessage = 'Copy to clipboard: #{key}, Enter';
	
	function format(message) {
	  var copyKey = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
	  return message.replace(/#{\s*key\s*}/g, copyKey);
	}
	
	function copy(text, options) {
	  var debug, message, reselectPrevious, range, selection, mark, success = false;
	  if (!options) { options = {}; }
	  debug = options.debug || false;
	  try {
	    reselectPrevious = deselectCurrent();
	
	    range = document.createRange();
	    selection = document.getSelection();
	
	    mark = document.createElement('span');
	    mark.textContent = text;
	    // reset user styles for span element
	    mark.style.all = 'unset';
	    // prevents scrolling to the end of the page
	    mark.style.position = 'fixed';
	    mark.style.top = 0;
	    mark.style.clip = 'rect(0, 0, 0, 0)';
	    // used to preserve spaces and line breaks
	    mark.style.whiteSpace = 'pre';
	    // do not inherit user-select (it may be `none`)
	    mark.style.webkitUserSelect = 'text';
	    mark.style.MozUserSelect = 'text';
	    mark.style.msUserSelect = 'text';
	    mark.style.userSelect = 'text';
	
	    document.body.appendChild(mark);
	
	    range.selectNode(mark);
	    selection.addRange(range);
	
	    var successful = document.execCommand('copy');
	    if (!successful) {
	      throw new Error('copy command was unsuccessful');
	    }
	    success = true;
	  } catch (err) {
	    debug && console.error('unable to copy using execCommand: ', err);
	    debug && console.warn('trying IE specific stuff');
	    try {
	      window.clipboardData.setData('text', text);
	      success = true;
	    } catch (err) {
	      debug && console.error('unable to copy using clipboardData: ', err);
	      debug && console.error('falling back to prompt');
	      message = format('message' in options ? options.message : defaultMessage);
	      window.prompt(message, text);
	    }
	  } finally {
	    if (selection) {
	      if (typeof selection.removeRange == 'function') {
	        selection.removeRange(range);
	      } else {
	        selection.removeAllRanges();
	      }
	    }
	
	    if (mark) {
	      document.body.removeChild(mark);
	    }
	    reselectPrevious();
	  }
	
	  return success;
	}
	
	module.exports = copy;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

	
	module.exports = function () {
	  var selection = document.getSelection();
	  if (!selection.rangeCount) {
	    return function () {};
	  }
	  var active = document.activeElement;
	
	  var ranges = [];
	  for (var i = 0; i < selection.rangeCount; i++) {
	    ranges.push(selection.getRangeAt(i));
	  }
	
	  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
	    case 'INPUT':
	    case 'TEXTAREA':
	      active.blur();
	      break;
	
	    default:
	      active = null;
	      break;
	  }
	
	  selection.removeAllRanges();
	  return function () {
	    selection.type === 'Caret' &&
	    selection.removeAllRanges();
	
	    if (!selection.rangeCount) {
	      ranges.forEach(function(range) {
	        selection.addRange(range);
	      });
	    }
	
	    active &&
	    active.focus();
	  };
	};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _tinperBeeCore = __webpack_require__(27);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  //是否是手风琴效果
	  accordion: _propTypes2["default"].bool,
	  //激活的项
	  activeKey: _propTypes2["default"].any,
	  //默认的激活的项
	  defaultActiveKey: _propTypes2["default"].any,
	  //选中函数
	  onSelect: _propTypes2["default"].func,
	  role: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  accordion: false,
	  clsPrefix: 'u-panel-group'
	};
	
	// TODO: Use uncontrollable.
	
	var PanelGroup = function (_React$Component) {
	  _inherits(PanelGroup, _React$Component);
	
	  function PanelGroup(props, context) {
	    _classCallCheck(this, PanelGroup);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleSelect = _this.handleSelect.bind(_this);
	
	    _this.state = {
	      activeKey: props.defaultActiveKey
	    };
	    return _this;
	  }
	
	  PanelGroup.prototype.handleSelect = function handleSelect(key, e) {
	    e.preventDefault();
	
	    if (this.props.onSelect) {
	      this.props.onSelect(key, e);
	    }
	
	    if (this.state.activeKey === key) {
	      key = null;
	    }
	
	    this.setState({ activeKey: key });
	  };
	
	  PanelGroup.prototype.render = function render() {
	    var _this2 = this;
	
	    var _props = this.props,
	        accordion = _props.accordion,
	        propsActiveKey = _props.activeKey,
	        className = _props.className,
	        children = _props.children,
	        defaultActiveKey = _props.defaultActiveKey,
	        onSelect = _props.onSelect,
	        style = _props.style,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['accordion', 'activeKey', 'className', 'children', 'defaultActiveKey', 'onSelect', 'style', 'clsPrefix']);
	
	    var activeKey = void 0;
	    if (accordion) {
	      activeKey = propsActiveKey != null ? propsActiveKey : this.state.activeKey;
	      others.role = others.role || 'tablist';
	    }
	
	    var classes = {};
	    classes['' + clsPrefix] = true;
	
	    return _react2["default"].createElement(
	      'div',
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(className, classes)
	      }),
	      _react2["default"].Children.map(children, function (child) {
	        if (!_react2["default"].isValidElement(child)) {
	          return child;
	        }
	        var childProps = {
	          style: child.props.style
	        };
	
	        if (accordion) {
	          _extends(childProps, {
	            headerRole: 'tab',
	            panelRole: 'tabpanel',
	            collapsible: true,
	            expanded: child.props.eventKey === activeKey,
	            onSelect: (0, _tinperBeeCore.createChainedFunction)(_this2.handleSelect, child.props.onSelect)
	          });
	        }
	
	        return (0, _react.cloneElement)(child, childProps);
	      })
	    );
	  };
	
	  return PanelGroup;
	}(_react2["default"].Component);
	
	PanelGroup.propTypes = propTypes;
	PanelGroup.defaultProps = defaultProps;
	
	exports["default"] = PanelGroup;
	module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Button = __webpack_require__(79);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Button2["default"];
	module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	    /**
	     * @title 尺寸
	     */
	    size: _propTypes2["default"].oneOf(['sm', 'xg', 'lg']),
	    /**
	     * @title 样式
	     */
	    style: _propTypes2["default"].object,
	    /**
	     * @title 形状
	     */
	    shape: _propTypes2["default"].oneOf(['block', 'round', 'border', 'squared', 'floating', 'pillRight', 'pillLeft', 'icon']),
	
	    bordered: _propTypes2["default"].bool,
	    /**
	    * @title 类型
	    */
	    colors: _propTypes2["default"].oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default']),
	    /**
	     * @title 是否禁用
	     * @veIgnore
	     */
	    disabled: _propTypes2["default"].bool,
	    /**
	     * @title 类名
	     * @veIgnore
	     */
	    className: _propTypes2["default"].string,
	
	    /**
	     * @title <button> 的 type
	     * @veIgnore
	     */
	    htmlType: _propTypes2["default"].oneOf(['submit', 'button', 'reset']),
	    isSubmit: _propTypes2["default"].bool //是否作为form的提交按钮
	};
	
	var defaultProps = {
	    disabled: false,
	    htmlType: 'button',
	    clsPrefix: 'u-button',
	    bordered: false,
	    isSubmit: false
	};
	
	var sizeMap = {
	    sm: 'sm',
	    xg: 'xg',
	    lg: 'lg'
	},
	    colorsMap = {
	    primary: 'primary',
	    accent: 'accent',
	    success: 'success',
	    info: 'info',
	    warning: 'warning',
	    danger: 'danger'
	},
	    shapeMap = {
	    block: 'block',
	    round: 'round',
	    border: 'border',
	    squared: 'squared',
	    floating: 'floating',
	    pillRight: 'pill-right',
	    pillLeft: 'pill-left',
	    icon: 'icon'
	};
	
	var Button = function (_Component) {
	    _inherits(Button, _Component);
	
	    function Button(props) {
	        _classCallCheck(this, Button);
	
	        return _possibleConstructorReturn(this, _Component.call(this, props));
	    }
	
	    Button.prototype.render = function render() {
	        var _props = this.props,
	            colors = _props.colors,
	            shape = _props.shape,
	            disabled = _props.disabled,
	            className = _props.className,
	            size = _props.size,
	            bordered = _props.bordered,
	            children = _props.children,
	            htmlType = _props.htmlType,
	            clsPrefix = _props.clsPrefix,
	            isSubmit = _props.isSubmit,
	            others = _objectWithoutProperties(_props, ['colors', 'shape', 'disabled', 'className', 'size', 'bordered', 'children', 'htmlType', 'clsPrefix', 'isSubmit']);
	
	        var clsObj = {};
	        if (className) {
	            clsObj[className] = true;
	        }
	        if (sizeMap[size]) {
	            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
	        }
	
	        if (shapeMap[shape]) {
	            clsObj[clsPrefix + '-' + shapeMap[shape]] = true;
	        }
	        if (colorsMap[colors]) {
	            clsObj[clsPrefix + '-' + colorsMap[colors]] = true;
	        }
	        //clsObj[`${clsPrefix}-border`] = bordered;
	        var classes = (0, _classnames2["default"])(clsPrefix, clsObj);
	        return _react2["default"].createElement(
	            'button',
	            _extends({
	                type: htmlType,
	                className: classes,
	                disabled: disabled
	            }, others),
	            this.props.children
	        );
	    };
	
	    return Button;
	}(_react.Component);
	
	Button.propTypes = propTypes;
	Button.defaultProps = defaultProps;
	
	exports["default"] = Button;
	module.exports = exports['default'];

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(81);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	/**
	 *
	 * @title 基础拖拽
	 * @description 将某个元素设置为可拖拽
	 *
	 */
	
	var Demo1 = function (_Component) {
	    _inherits(Demo1, _Component);
	
	    function Demo1() {
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, Demo1);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onStart = function () {
	            console.log('start');
	        }, _this.onStop = function () {
	            console.log('stop');
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    Demo1.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(
	                _index2['default'],
	                { onStart: this.onStart, onStop: this.onStop },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'demo' },
	                    '\u6211\u53EF\u968F\u610F\u62D6\u62FD'
	                )
	            )
	        );
	    };
	
	    return Demo1;
	}(_react.Component);
	
	exports['default'] = Demo1;
	module.exports = exports['default'];

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Dnd = __webpack_require__(82);
	
	var _Dnd2 = _interopRequireDefault(_Dnd);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = _Dnd2['default'];
	module.exports = exports['default'];

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBeautifulDnd = __webpack_require__(83);
	
	var _reactDraggable = __webpack_require__(182);
	
	var _reactDraggable2 = _interopRequireDefault(_reactDraggable);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _lodash = __webpack_require__(183);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _SortList = __webpack_require__(184);
	
	var _SortList2 = _interopRequireDefault(_SortList);
	
	var _Between = __webpack_require__(186);
	
	var _Between2 = _interopRequireDefault(_Between);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	    onStart: _propTypes2['default'].func,
	    onDrag: _propTypes2['default'].func,
	    onStop: _propTypes2['default'].func,
	    onDragUpdate: _propTypes2['default'].func,
	    dropClass: _propTypes2['default'].string,
	    dropOverClass: _propTypes2['default'].string,
	    dragClass: _propTypes2['default'].string,
	    dragingClass: _propTypes2['default'].string,
	    draggedClass: _propTypes2['default'].string,
	    className: _propTypes2['default'].string,
	    style: _propTypes2['default'].object,
	    list: _propTypes2['default'].array,
	    otherList: _propTypes2['default'].array,
	    type: _propTypes2['default'].oneOf(['vertical', 'horizontal', 'betweenVertical', 'betweenHorizontal']),
	    showKey: _propTypes2['default'].string
	
	};
	var defaultProps = {
	    onStart: function onStart() {},
	    onDrag: function onDrag() {},
	    onStop: function onStop() {},
	    onDragUpdate: function onDragUpdate() {},
	    list: false,
	    otherList: [],
	    dropClass: '',
	    dropOverClass: '',
	    dragClass: '',
	    dragingClass: '',
	    draggedClass: '',
	    type: 'vertical'
	};
	
	var Dnd = function (_Component) {
	    _inherits(Dnd, _Component);
	
	    function Dnd(props) {
	        _classCallCheck(this, Dnd);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.state = {
	            items: _this.props.list || []
	        };
	        return _this;
	    }
	
	    Dnd.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!(0, _lodash2['default'])(this.state.items, nextProps.list)) {
	            this.setState({
	                items: nextProps.list
	            });
	        }
	    };
	
	    Dnd.prototype.render = function render() {
	        var _this2 = this;
	
	        var self = this;
	        var DndType = function DndType() {
	            switch (_this2.props.type) {
	                case 'vertical':
	                    return _react2['default'].createElement(_SortList2['default'], _this2.props);
	                    break;
	                case 'horizontal':
	                    return _react2['default'].createElement(_SortList2['default'], _this2.props);
	                    break;
	                case 'betweenVertical':
	                    return _react2['default'].createElement(_Between2['default'], _this2.props);
	                    break;
	                case 'betweenHorizontal':
	                    return _react2['default'].createElement(_Between2['default'], _this2.props);
	                    break;
	                default:
	                    return _react2['default'].createElement(_SortList2['default'], _this2.props);
	                    break;
	            }
	        };
	        return _react2['default'].createElement(
	            'div',
	            null,
	            self.state.items.length ? DndType() : _react2['default'].createElement(
	                _reactDraggable2['default'],
	                _extends({ defaultClassName: this.props.dragClass,
	                    defaultClassNameDragging: this.props.dragingClass,
	                    defaultClassNameDragged: this.props.draggedClass
	                }, this.props),
	                self.props.children
	            )
	        );
	    };
	
	    return Dnd;
	}(_react.Component);
	
	Dnd.propTypes = propTypes;
	Dnd.defaultProps = defaultProps;
	Dnd.Drag = _reactDraggable2['default'];
	Dnd.DragDropContext = _reactBeautifulDnd.DragDropContext;
	Dnd.Droppable = _reactBeautifulDnd.Droppable;
	Dnd.Draggable = _reactBeautifulDnd.Draggable;
	exports['default'] = Dnd;
	module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var _extends = _interopDefault(__webpack_require__(84));
	var invariant = _interopDefault(__webpack_require__(123));
	var cssBoxModel = __webpack_require__(124);
	var _Object$keys = _interopDefault(__webpack_require__(125));
	var memoizeOne = _interopDefault(__webpack_require__(129));
	var redux = __webpack_require__(130);
	var _Object$assign = _interopDefault(__webpack_require__(85));
	var rafSchd = _interopDefault(__webpack_require__(134));
	var _inheritsLoose = _interopDefault(__webpack_require__(135));
	var React = __webpack_require__(4);
	var React__default = _interopDefault(React);
	var PropTypes = _interopDefault(__webpack_require__(5));
	var reactRedux = __webpack_require__(142);
	var reactMotion = __webpack_require__(168);
	
	var vertical = {
	  direction: 'vertical',
	  line: 'y',
	  crossAxisLine: 'x',
	  start: 'top',
	  end: 'bottom',
	  size: 'height',
	  crossAxisStart: 'left',
	  crossAxisEnd: 'right',
	  crossAxisSize: 'width'
	};
	var horizontal = {
	  direction: 'horizontal',
	  line: 'x',
	  crossAxisLine: 'y',
	  start: 'left',
	  end: 'right',
	  size: 'width',
	  crossAxisStart: 'top',
	  crossAxisEnd: 'bottom',
	  crossAxisSize: 'height'
	};
	
	var origin = {
	  x: 0,
	  y: 0
	};
	var add = function add(point1, point2) {
	  return {
	    x: point1.x + point2.x,
	    y: point1.y + point2.y
	  };
	};
	var subtract = function subtract(point1, point2) {
	  return {
	    x: point1.x - point2.x,
	    y: point1.y - point2.y
	  };
	};
	var isEqual = function isEqual(point1, point2) {
	  return point1.x === point2.x && point1.y === point2.y;
	};
	var negate = function negate(point) {
	  return {
	    x: point.x !== 0 ? -point.x : 0,
	    y: point.y !== 0 ? -point.y : 0
	  };
	};
	var absolute = function absolute(point) {
	  return {
	    x: Math.abs(point.x),
	    y: Math.abs(point.y)
	  };
	};
	var patch = function patch(line, value, otherValue) {
	  var _ref;
	
	  if (otherValue === void 0) {
	    otherValue = 0;
	  }
	
	  return _ref = {}, _ref[line] = value, _ref[line === 'x' ? 'y' : 'x'] = otherValue, _ref;
	};
	var distance = function distance(point1, point2) {
	  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
	};
	var closest = function closest(target, points) {
	  return Math.min.apply(Math, points.map(function (point) {
	    return distance(target, point);
	  }));
	};
	var apply = function apply(fn) {
	  return function (point) {
	    return {
	      x: fn(point.x),
	      y: fn(point.y)
	    };
	  };
	};
	
	var offsetByPosition = function offsetByPosition(spacing, point) {
	  return {
	    top: spacing.top + point.y,
	    left: spacing.left + point.x,
	    bottom: spacing.bottom + point.y,
	    right: spacing.right + point.x
	  };
	};
	var expandByPosition = function expandByPosition(spacing, position) {
	  return {
	    top: spacing.top - position.y,
	    left: spacing.left - position.x,
	    right: spacing.right + position.x,
	    bottom: spacing.bottom + position.y
	  };
	};
	var getCorners = function getCorners(spacing) {
	  return [{
	    x: spacing.left,
	    y: spacing.top
	  }, {
	    x: spacing.right,
	    y: spacing.top
	  }, {
	    x: spacing.left,
	    y: spacing.bottom
	  }, {
	    x: spacing.right,
	    y: spacing.bottom
	  }];
	};
	
	var getMaxScroll = (function (_ref) {
	  var scrollHeight = _ref.scrollHeight,
	      scrollWidth = _ref.scrollWidth,
	      height = _ref.height,
	      width = _ref.width;
	  var maxScroll = subtract({
	    x: scrollWidth,
	    y: scrollHeight
	  }, {
	    x: width,
	    y: height
	  });
	  var adjustedMaxScroll = {
	    x: Math.max(0, maxScroll.x),
	    y: Math.max(0, maxScroll.y)
	  };
	  return adjustedMaxScroll;
	});
	
	var clip = function clip(frame, subject) {
	  var result = cssBoxModel.getRect({
	    top: Math.max(subject.top, frame.top),
	    right: Math.min(subject.right, frame.right),
	    bottom: Math.min(subject.bottom, frame.bottom),
	    left: Math.max(subject.left, frame.left)
	  });
	
	  if (result.width <= 0 || result.height <= 0) {
	    return null;
	  }
	
	  return result;
	};
	var getDroppableDimension = function getDroppableDimension(_ref) {
	  var descriptor = _ref.descriptor,
	      isEnabled = _ref.isEnabled,
	      direction = _ref.direction,
	      client = _ref.client,
	      page = _ref.page,
	      closest$$1 = _ref.closest;
	
	  var scrollable = function () {
	    if (!closest$$1) {
	      return null;
	    }
	
	    var maxScroll = getMaxScroll({
	      scrollHeight: closest$$1.scrollHeight,
	      scrollWidth: closest$$1.scrollWidth,
	      height: closest$$1.client.paddingBox.height,
	      width: closest$$1.client.paddingBox.width
	    });
	    return {
	      framePageMarginBox: closest$$1.page.marginBox,
	      shouldClipSubject: closest$$1.shouldClipSubject,
	      scroll: {
	        initial: closest$$1.scroll,
	        current: closest$$1.scroll,
	        max: maxScroll,
	        diff: {
	          value: origin,
	          displacement: origin
	        }
	      }
	    };
	  }();
	
	  var subjectPageMarginBox = page.marginBox;
	  var clippedPageMarginBox = scrollable && scrollable.shouldClipSubject ? clip(scrollable.framePageMarginBox, subjectPageMarginBox) : subjectPageMarginBox;
	  var viewport = {
	    closestScrollable: scrollable,
	    subjectPageMarginBox: subjectPageMarginBox,
	    clippedPageMarginBox: clippedPageMarginBox
	  };
	  var dimension = {
	    descriptor: descriptor,
	    axis: direction === 'vertical' ? vertical : horizontal,
	    isEnabled: isEnabled,
	    client: client,
	    page: page,
	    viewport: viewport
	  };
	  return dimension;
	};
	var scrollDroppable = function scrollDroppable(droppable, newScroll) {
	  !droppable.viewport.closestScrollable ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
	  var scrollable = droppable.viewport.closestScrollable;
	  var framePageMarginBox = scrollable.framePageMarginBox;
	  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);
	  var scrollDisplacement = negate(scrollDiff);
	  var closestScrollable = {
	    framePageMarginBox: scrollable.framePageMarginBox,
	    shouldClipSubject: scrollable.shouldClipSubject,
	    scroll: {
	      initial: scrollable.scroll.initial,
	      current: newScroll,
	      diff: {
	        value: scrollDiff,
	        displacement: scrollDisplacement
	      },
	      max: scrollable.scroll.max
	    }
	  };
	  var displacedSubject = offsetByPosition(droppable.viewport.subjectPageMarginBox, scrollDisplacement);
	  var clippedPageMarginBox = closestScrollable.shouldClipSubject ? clip(framePageMarginBox, displacedSubject) : cssBoxModel.getRect(displacedSubject);
	  var viewport = {
	    closestScrollable: closestScrollable,
	    subjectPageMarginBox: droppable.viewport.subjectPageMarginBox,
	    clippedPageMarginBox: clippedPageMarginBox
	  };
	
	  var result = _extends({}, droppable, {
	    viewport: viewport
	  });
	
	  return result;
	};
	
	var toDroppableMap = memoizeOne(function (droppables) {
	  return droppables.reduce(function (previous, current) {
	    previous[current.descriptor.id] = current;
	    return previous;
	  }, {});
	});
	var toDraggableMap = memoizeOne(function (draggables) {
	  return draggables.reduce(function (previous, current) {
	    previous[current.descriptor.id] = current;
	    return previous;
	  }, {});
	});
	var toDroppableList = memoizeOne(function (droppables) {
	  return _Object$keys(droppables).map(function (id) {
	    return droppables[id];
	  });
	});
	var toDraggableList = memoizeOne(function (draggables) {
	  return _Object$keys(draggables).map(function (id) {
	    return draggables[id];
	  });
	});
	
	var getDraggablesInsideDroppable = memoizeOne(function (droppable, draggables) {
	  return toDraggableList(draggables).filter(function (draggable) {
	    return droppable.descriptor.id === draggable.descriptor.droppableId;
	  }).sort(function (a, b) {
	    return a.descriptor.index - b.descriptor.index;
	  });
	});
	
	var isWithin = (function (lowerBound, upperBound) {
	  return function (value) {
	    return value <= upperBound && value >= lowerBound;
	  };
	});
	
	var isPositionInFrame = (function (frame) {
	  var isWithinVertical = isWithin(frame.top, frame.bottom);
	  var isWithinHorizontal = isWithin(frame.left, frame.right);
	  return function (point) {
	    return isWithinVertical(point.y) && isWithinVertical(point.y) && isWithinHorizontal(point.x) && isWithinHorizontal(point.x);
	  };
	});
	
	var getRequiredGrowth = memoizeOne(function (draggable, draggables, droppable) {
	  var getResult = function getResult(existingSpace) {
	    var requiredSpace = draggable.page.marginBox[droppable.axis.size];
	
	    if (requiredSpace <= existingSpace) {
	      return null;
	    }
	
	    var requiredGrowth = patch(droppable.axis.line, requiredSpace - existingSpace);
	    return requiredGrowth;
	  };
	
	  var dimensions = getDraggablesInsideDroppable(droppable, draggables);
	
	  if (!dimensions.length) {
	    var _existingSpace = droppable.page.marginBox[droppable.axis.size];
	    return getResult(_existingSpace);
	  }
	
	  var endOfDraggables = dimensions[dimensions.length - 1].page.marginBox[droppable.axis.end];
	  var endOfDroppable = droppable.page.marginBox[droppable.axis.end];
	  var existingSpace = endOfDroppable - endOfDraggables;
	  return getResult(existingSpace);
	});
	var getWithGrowth = memoizeOne(function (area, growth) {
	  return cssBoxModel.getRect(expandByPosition(area, growth));
	});
	
	var getClippedRectWithPlaceholder = function getClippedRectWithPlaceholder(_ref) {
	  var draggable = _ref.draggable,
	      draggables = _ref.draggables,
	      droppable = _ref.droppable,
	      previousDroppableOverId = _ref.previousDroppableOverId;
	  var isHome = draggable.descriptor.droppableId === droppable.descriptor.id;
	  var wasOver = Boolean(previousDroppableOverId && previousDroppableOverId === droppable.descriptor.id);
	  var clippedPageMarginBox = droppable.viewport.clippedPageMarginBox;
	
	  if (!clippedPageMarginBox) {
	    return clippedPageMarginBox;
	  }
	
	  if (isHome || !wasOver) {
	    return clippedPageMarginBox;
	  }
	
	  var requiredGrowth = getRequiredGrowth(draggable, draggables, droppable);
	
	  if (!requiredGrowth) {
	    return clippedPageMarginBox;
	  }
	
	  var subjectWithGrowth = getWithGrowth(clippedPageMarginBox, requiredGrowth);
	  var closestScrollable = droppable.viewport.closestScrollable;
	
	  if (!closestScrollable) {
	    return subjectWithGrowth;
	  }
	
	  if (!closestScrollable.shouldClipSubject) {
	    return subjectWithGrowth;
	  }
	
	  return clip(closestScrollable.framePageMarginBox, subjectWithGrowth);
	};
	
	var getDroppableOver = (function (_ref2) {
	  var target = _ref2.target,
	      draggable = _ref2.draggable,
	      draggables = _ref2.draggables,
	      droppables = _ref2.droppables,
	      previousDroppableOverId = _ref2.previousDroppableOverId;
	  var maybe = toDroppableList(droppables).filter(function (droppable) {
	    return droppable.isEnabled;
	  }).find(function (droppable) {
	    var withPlaceholder = getClippedRectWithPlaceholder({
	      draggable: draggable,
	      draggables: draggables,
	      droppable: droppable,
	      previousDroppableOverId: previousDroppableOverId
	    });
	
	    if (!withPlaceholder) {
	      return false;
	    }
	
	    return isPositionInFrame(withPlaceholder)(target);
	  });
	  return maybe ? maybe.descriptor.id : null;
	});
	
	var noMovement = {
	  displaced: [],
	  amount: origin,
	  isBeyondStartPosition: false
	};
	var noImpact = {
	  movement: noMovement,
	  direction: null,
	  destination: null
	};
	
	var getDisplacementMap = memoizeOne(function (displaced) {
	  return displaced.reduce(function (map, displacement) {
	    map[displacement.draggableId] = displacement;
	    return map;
	  }, {});
	});
	
	var isPartiallyVisibleThroughFrame = (function (frame) {
	  var isWithinVertical = isWithin(frame.top, frame.bottom);
	  var isWithinHorizontal = isWithin(frame.left, frame.right);
	  return function (subject) {
	    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
	
	    if (isContained) {
	      return true;
	    }
	
	    var isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
	    var isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
	    var isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;
	
	    if (isPartiallyContained) {
	      return true;
	    }
	
	    var isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
	    var isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
	    var isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;
	
	    if (isTargetBiggerThanFrame) {
	      return true;
	    }
	
	    var isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
	    return isTargetBiggerOnOneAxis;
	  };
	});
	
	var isTotallyVisibleThroughFrame = (function (frame) {
	  var isWithinVertical = isWithin(frame.top, frame.bottom);
	  var isWithinHorizontal = isWithin(frame.left, frame.right);
	  return function (subject) {
	    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
	    return isContained;
	  };
	});
	
	var isVisible = function isVisible(_ref) {
	  var target = _ref.target,
	      destination = _ref.destination,
	      viewport = _ref.viewport,
	      isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;
	  var displacement = destination.viewport.closestScrollable ? destination.viewport.closestScrollable.scroll.diff.displacement : origin;
	  var withDisplacement = offsetByPosition(target, displacement);
	
	  if (!destination.viewport.clippedPageMarginBox) {
	    return false;
	  }
	
	  var isVisibleInDroppable = isVisibleThroughFrameFn(destination.viewport.clippedPageMarginBox)(withDisplacement);
	  var isVisibleInViewport = isVisibleThroughFrameFn(viewport)(withDisplacement);
	  return isVisibleInDroppable && isVisibleInViewport;
	};
	
	var isPartiallyVisible = function isPartiallyVisible(_ref2) {
	  var target = _ref2.target,
	      destination = _ref2.destination,
	      viewport = _ref2.viewport;
	  return isVisible({
	    target: target,
	    destination: destination,
	    viewport: viewport,
	    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
	  });
	};
	var isTotallyVisible = function isTotallyVisible(_ref3) {
	  var target = _ref3.target,
	      destination = _ref3.destination,
	      viewport = _ref3.viewport;
	  return isVisible({
	    target: target,
	    destination: destination,
	    viewport: viewport,
	    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
	  });
	};
	
	var getDisplacement = (function (_ref) {
	  var draggable = _ref.draggable,
	      destination = _ref.destination,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport;
	  var id = draggable.descriptor.id;
	  var map = getDisplacementMap(previousImpact.movement.displaced);
	  var isVisible = isPartiallyVisible({
	    target: draggable.page.marginBox,
	    destination: destination,
	    viewport: viewport
	  });
	
	  var shouldAnimate = function () {
	    if (!isVisible) {
	      return false;
	    }
	
	    var previous = map[id];
	
	    if (!previous) {
	      return true;
	    }
	
	    return previous.shouldAnimate;
	  }();
	
	  var displacement = {
	    draggableId: id,
	    isVisible: isVisible,
	    shouldAnimate: shouldAnimate
	  };
	  return displacement;
	});
	
	var withDroppableScroll = (function (droppable, point) {
	  var closestScrollable = droppable.viewport.closestScrollable;
	
	  if (!closestScrollable) {
	    return point;
	  }
	
	  return add(point, closestScrollable.scroll.diff.value);
	});
	
	var inHomeList = (function (_ref) {
	  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      draggable = _ref.draggable,
	      home = _ref.home,
	      insideHome = _ref.insideHome,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport;
	  var axis = home.axis;
	  var originalCenter = draggable.page.borderBox.center;
	  var currentCenter = withDroppableScroll(home, pageBorderBoxCenter);
	  var isBeyondStartPosition = currentCenter[axis.line] - originalCenter[axis.line] > 0;
	  var amount = patch(axis.line, draggable.client.marginBox[axis.size]);
	  var displaced = insideHome.filter(function (child) {
	    if (child === draggable) {
	      return false;
	    }
	
	    var borderBox = child.page.borderBox;
	
	    if (isBeyondStartPosition) {
	      if (borderBox.center[axis.line] < originalCenter[axis.line]) {
	        return false;
	      }
	
	      return currentCenter[axis.line] > borderBox[axis.start];
	    }
	
	    if (originalCenter[axis.line] < borderBox.center[axis.line]) {
	      return false;
	    }
	
	    return currentCenter[axis.line] < borderBox[axis.end];
	  }).map(function (dimension) {
	    return getDisplacement({
	      draggable: dimension,
	      destination: home,
	      previousImpact: previousImpact,
	      viewport: viewport.frame
	    });
	  });
	  var ordered = isBeyondStartPosition ? displaced.reverse() : displaced;
	
	  var index = function () {
	    var startIndex = draggable.descriptor.index;
	    var length = ordered.length;
	
	    if (!length) {
	      return startIndex;
	    }
	
	    if (isBeyondStartPosition) {
	      return startIndex + length;
	    }
	
	    return startIndex - length;
	  }();
	
	  var movement = {
	    amount: amount,
	    displaced: ordered,
	    isBeyondStartPosition: isBeyondStartPosition
	  };
	  var impact = {
	    movement: movement,
	    direction: axis.direction,
	    destination: {
	      droppableId: home.descriptor.id,
	      index: index
	    }
	  };
	  return impact;
	});
	
	var inForeignList = (function (_ref) {
	  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      draggable = _ref.draggable,
	      destination = _ref.destination,
	      insideDestination = _ref.insideDestination,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport;
	  var axis = destination.axis;
	  var currentCenter = withDroppableScroll(destination, pageBorderBoxCenter);
	  var displaced = insideDestination.filter(function (child) {
	    var threshold = child.page.borderBox[axis.end];
	    return threshold > currentCenter[axis.line];
	  }).map(function (dimension) {
	    return getDisplacement({
	      draggable: dimension,
	      destination: destination,
	      previousImpact: previousImpact,
	      viewport: viewport.frame
	    });
	  });
	  var newIndex = insideDestination.length - displaced.length;
	  var movement = {
	    amount: patch(axis.line, draggable.page.marginBox[axis.size]),
	    displaced: displaced,
	    isBeyondStartPosition: false
	  };
	  var impact = {
	    movement: movement,
	    direction: axis.direction,
	    destination: {
	      droppableId: destination.descriptor.id,
	      index: newIndex
	    }
	  };
	  return impact;
	});
	
	var getDragImpact = (function (_ref) {
	  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      draggable = _ref.draggable,
	      draggables = _ref.draggables,
	      droppables = _ref.droppables,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport;
	  var previousDroppableOverId = previousImpact.destination && previousImpact.destination.droppableId;
	  var destinationId = getDroppableOver({
	    target: pageBorderBoxCenter,
	    draggable: draggable,
	    draggables: draggables,
	    droppables: droppables,
	    previousDroppableOverId: previousDroppableOverId
	  });
	
	  if (!destinationId) {
	    return noImpact;
	  }
	
	  var destination = droppables[destinationId];
	
	  if (!destination.isEnabled) {
	    return noImpact;
	  }
	
	  var home = droppables[draggable.descriptor.droppableId];
	  var isWithinHomeDroppable = home.descriptor.id === destinationId;
	  var insideDestination = getDraggablesInsideDroppable(destination, draggables);
	
	  if (isWithinHomeDroppable) {
	    return inHomeList({
	      pageBorderBoxCenter: pageBorderBoxCenter,
	      draggable: draggable,
	      home: home,
	      insideHome: insideDestination,
	      previousImpact: previousImpact || noImpact,
	      viewport: viewport
	    });
	  }
	
	  return inForeignList({
	    pageBorderBoxCenter: pageBorderBoxCenter,
	    draggable: draggable,
	    destination: destination,
	    insideDestination: insideDestination,
	    previousImpact: previousImpact || noImpact,
	    viewport: viewport
	  });
	});
	
	var getHomeLocation = (function (critical) {
	  return {
	    index: critical.draggable.index,
	    droppableId: critical.droppable.id
	  };
	});
	
	var getSafeClipped = function getSafeClipped(droppable) {
	  var rect = droppable.viewport.clippedPageMarginBox;
	  !rect ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot get clipped area from droppable') : invariant(false) : void 0;
	  return rect;
	};
	
	var getBestCrossAxisDroppable = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      source = _ref.source,
	      droppables = _ref.droppables,
	      viewport = _ref.viewport;
	  var sourceClipped = source.viewport.clippedPageMarginBox;
	
	  if (!sourceClipped) {
	    return null;
	  }
	
	  var axis = source.axis;
	  var isBetweenSourceClipped = isWithin(sourceClipped[axis.start], sourceClipped[axis.end]);
	  var candidates = toDroppableList(droppables).filter(function (droppable) {
	    return droppable !== source;
	  }).filter(function (droppable) {
	    return droppable.isEnabled;
	  }).filter(function (droppable) {
	    var clippedPageMarginBox = droppable.viewport.clippedPageMarginBox;
	
	    if (!clippedPageMarginBox) {
	      return false;
	    }
	
	    return isPartiallyVisibleThroughFrame(viewport.frame)(clippedPageMarginBox);
	  }).filter(function (droppable) {
	    var targetClipped = getSafeClipped(droppable);
	
	    if (isMovingForward) {
	      return sourceClipped[axis.crossAxisEnd] < targetClipped[axis.crossAxisEnd];
	    }
	
	    return targetClipped[axis.crossAxisStart] < sourceClipped[axis.crossAxisStart];
	  }).filter(function (droppable) {
	    var targetClipped = getSafeClipped(droppable);
	    var isBetweenDestinationClipped = isWithin(targetClipped[axis.start], targetClipped[axis.end]);
	    return isBetweenSourceClipped(targetClipped[axis.start]) || isBetweenSourceClipped(targetClipped[axis.end]) || isBetweenDestinationClipped(sourceClipped[axis.start]) || isBetweenDestinationClipped(sourceClipped[axis.end]);
	  }).sort(function (a, b) {
	    var first = getSafeClipped(a)[axis.crossAxisStart];
	    var second = getSafeClipped(b)[axis.crossAxisStart];
	
	    if (isMovingForward) {
	      return first - second;
	    }
	
	    return second - first;
	  }).filter(function (droppable, index, array) {
	    return getSafeClipped(droppable)[axis.crossAxisStart] === getSafeClipped(array[0])[axis.crossAxisStart];
	  });
	
	  if (!candidates.length) {
	    return null;
	  }
	
	  if (candidates.length === 1) {
	    return candidates[0];
	  }
	
	  var contains = candidates.filter(function (droppable) {
	    var isWithinDroppable = isWithin(getSafeClipped(droppable)[axis.start], getSafeClipped(droppable)[axis.end]);
	    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
	  });
	
	  if (contains.length === 1) {
	    return contains[0];
	  }
	
	  if (contains.length > 1) {
	    return contains.sort(function (a, b) {
	      return getSafeClipped(a)[axis.start] - getSafeClipped(b)[axis.start];
	    })[0];
	  }
	
	  return candidates.sort(function (a, b) {
	    var first = closest(pageBorderBoxCenter, getCorners(getSafeClipped(a)));
	    var second = closest(pageBorderBoxCenter, getCorners(getSafeClipped(b)));
	
	    if (first !== second) {
	      return first - second;
	    }
	
	    return getSafeClipped(a)[axis.start] - getSafeClipped(b)[axis.start];
	  })[0];
	});
	
	var withDroppableDisplacement = (function (droppable, point) {
	  var closestScrollable = droppable.viewport.closestScrollable;
	
	  if (!closestScrollable) {
	    return point;
	  }
	
	  return add(point, closestScrollable.scroll.diff.displacement);
	});
	
	var getClosestDraggable = (function (_ref) {
	  var axis = _ref.axis,
	      viewport = _ref.viewport,
	      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      destination = _ref.destination,
	      insideDestination = _ref.insideDestination;
	
	  if (!insideDestination.length) {
	    return null;
	  }
	
	  var result = insideDestination.filter(function (draggable) {
	    return isTotallyVisible({
	      target: draggable.page.borderBox,
	      destination: destination,
	      viewport: viewport.frame
	    });
	  }).sort(function (a, b) {
	    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, a.page.borderBox.center));
	    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, b.page.borderBox.center));
	
	    if (distanceToA < distanceToB) {
	      return -1;
	    }
	
	    if (distanceToB < distanceToA) {
	      return 1;
	    }
	
	    return a.page.borderBox[axis.start] - b.page.borderBox[axis.start];
	  });
	  return result.length ? result[0] : null;
	});
	
	var moveToEdge = (function (_ref) {
	  var source = _ref.source,
	      sourceEdge = _ref.sourceEdge,
	      destination = _ref.destination,
	      destinationEdge = _ref.destinationEdge,
	      destinationAxis = _ref.destinationAxis;
	
	  var getCorner = function getCorner(area) {
	    return patch(destinationAxis.line, area[destinationAxis[destinationEdge]], area[destinationAxis.crossAxisStart]);
	  };
	
	  var corner = getCorner(destination);
	  var centerDiff = absolute(subtract(source.center, getCorner(source)));
	  var signed = patch(destinationAxis.line, (sourceEdge === 'end' ? -1 : 1) * centerDiff[destinationAxis.line], centerDiff[destinationAxis.crossAxisLine]);
	  return add(corner, signed);
	});
	
	var toHomeList = (function (_ref) {
	  var amount = _ref.amount,
	      homeIndex = _ref.homeIndex,
	      movingRelativeTo = _ref.movingRelativeTo,
	      insideDestination = _ref.insideDestination,
	      draggable = _ref.draggable,
	      destination = _ref.destination,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport;
	  var axis = destination.axis;
	  var targetIndex = insideDestination.indexOf(movingRelativeTo);
	  !(targetIndex !== -1) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Unable to find target in destination droppable') : invariant(false) : void 0;
	
	  if (targetIndex === homeIndex) {
	    var _newCenter = draggable.page.borderBox.center;
	    var _newImpact = {
	      movement: {
	        displaced: [],
	        amount: amount,
	        isBeyondStartPosition: false
	      },
	      direction: destination.axis.direction,
	      destination: {
	        droppableId: destination.descriptor.id,
	        index: homeIndex
	      }
	    };
	    return {
	      pageBorderBoxCenter: withDroppableDisplacement(destination, _newCenter),
	      impact: _newImpact
	    };
	  }
	
	  var isMovingPastOriginalIndex = targetIndex > homeIndex;
	  var edge = isMovingPastOriginalIndex ? 'end' : 'start';
	  var newCenter = moveToEdge({
	    source: draggable.page.borderBox,
	    sourceEdge: edge,
	    destination: isMovingPastOriginalIndex ? movingRelativeTo.page.borderBox : movingRelativeTo.page.marginBox,
	    destinationEdge: edge,
	    destinationAxis: axis
	  });
	
	  var modified = function () {
	    if (!isMovingPastOriginalIndex) {
	      return insideDestination.slice(targetIndex, homeIndex);
	    }
	
	    var from = homeIndex + 1;
	    var to = targetIndex + 1;
	    return insideDestination.slice(from, to).reverse();
	  }();
	
	  var displaced = modified.map(function (dimension) {
	    return getDisplacement({
	      draggable: dimension,
	      destination: destination,
	      previousImpact: previousImpact,
	      viewport: viewport.frame
	    });
	  });
	  var newImpact = {
	    movement: {
	      displaced: displaced,
	      amount: amount,
	      isBeyondStartPosition: isMovingPastOriginalIndex
	    },
	    direction: axis.direction,
	    destination: {
	      droppableId: destination.descriptor.id,
	      index: targetIndex
	    }
	  };
	  return {
	    pageBorderBoxCenter: withDroppableDisplacement(destination, newCenter),
	    impact: newImpact
	  };
	});
	
	var toForeignList = (function (_ref) {
	  var amount = _ref.amount,
	      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      movingRelativeTo = _ref.movingRelativeTo,
	      insideDestination = _ref.insideDestination,
	      draggable = _ref.draggable,
	      destination = _ref.destination,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport;
	  var axis = destination.axis;
	  var isGoingBeforeTarget = Boolean(movingRelativeTo && pageBorderBoxCenter[destination.axis.line] < movingRelativeTo.page.borderBox.center[destination.axis.line]);
	
	  if (!movingRelativeTo) {
	    var _newCenter = moveToEdge({
	      source: draggable.page.borderBox,
	      sourceEdge: 'start',
	      destination: destination.page.contentBox,
	      destinationEdge: 'start',
	      destinationAxis: axis
	    });
	
	    var _newImpact = {
	      movement: {
	        displaced: [],
	        amount: amount,
	        isBeyondStartPosition: false
	      },
	      direction: axis.direction,
	      destination: {
	        droppableId: destination.descriptor.id,
	        index: 0
	      }
	    };
	    return {
	      pageBorderBoxCenter: withDroppableDisplacement(destination, _newCenter),
	      impact: _newImpact
	    };
	  }
	
	  var targetIndex = insideDestination.indexOf(movingRelativeTo);
	  !(targetIndex !== -1) ? process.env.NODE_ENV !== "production" ? invariant(false, 'The target was not found within its droppable') : invariant(false) : void 0;
	  var proposedIndex = isGoingBeforeTarget ? targetIndex : targetIndex + 1;
	  var newCenter = moveToEdge({
	    source: draggable.page.borderBox,
	    sourceEdge: 'start',
	    destination: movingRelativeTo.page.marginBox,
	    destinationEdge: isGoingBeforeTarget ? 'start' : 'end',
	    destinationAxis: axis
	  });
	  var displaced = insideDestination.slice(proposedIndex, insideDestination.length).map(function (dimension) {
	    return getDisplacement({
	      draggable: dimension,
	      destination: destination,
	      viewport: viewport.frame,
	      previousImpact: previousImpact
	    });
	  });
	  var newImpact = {
	    movement: {
	      displaced: displaced,
	      amount: amount,
	      isBeyondStartPosition: false
	    },
	    direction: axis.direction,
	    destination: {
	      droppableId: destination.descriptor.id,
	      index: proposedIndex
	    }
	  };
	  return {
	    pageBorderBoxCenter: withDroppableDisplacement(destination, newCenter),
	    impact: newImpact
	  };
	});
	
	var moveToNewDroppable = (function (_ref) {
	  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      destination = _ref.destination,
	      insideDestination = _ref.insideDestination,
	      draggable = _ref.draggable,
	      movingRelativeTo = _ref.movingRelativeTo,
	      home = _ref.home,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport;
	  var amount = patch(destination.axis.line, draggable.client.marginBox[destination.axis.size]);
	
	  if (destination.descriptor.id === draggable.descriptor.droppableId) {
	    !movingRelativeTo ? process.env.NODE_ENV !== "production" ? invariant(false, 'There will always be a target in the original list') : invariant(false) : void 0;
	    return toHomeList({
	      amount: amount,
	      homeIndex: home.index,
	      movingRelativeTo: movingRelativeTo,
	      insideDestination: insideDestination,
	      draggable: draggable,
	      destination: destination,
	      previousImpact: previousImpact,
	      viewport: viewport
	    });
	  }
	
	  return toForeignList({
	    amount: amount,
	    pageBorderBoxCenter: pageBorderBoxCenter,
	    movingRelativeTo: movingRelativeTo,
	    insideDestination: insideDestination,
	    draggable: draggable,
	    destination: destination,
	    previousImpact: previousImpact,
	    viewport: viewport
	  });
	});
	
	var moveCrossAxis = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      draggableId = _ref.draggableId,
	      droppableId = _ref.droppableId,
	      home = _ref.home,
	      draggables = _ref.draggables,
	      droppables = _ref.droppables,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport;
	  var draggable = draggables[draggableId];
	  var source = droppables[droppableId];
	  var destination = getBestCrossAxisDroppable({
	    isMovingForward: isMovingForward,
	    pageBorderBoxCenter: pageBorderBoxCenter,
	    source: source,
	    droppables: droppables,
	    viewport: viewport
	  });
	
	  if (!destination) {
	    return null;
	  }
	
	  var insideDestination = getDraggablesInsideDroppable(destination, draggables);
	  var movingRelativeTo = getClosestDraggable({
	    axis: destination.axis,
	    pageBorderBoxCenter: pageBorderBoxCenter,
	    destination: destination,
	    insideDestination: insideDestination,
	    viewport: viewport
	  });
	
	  if (insideDestination.length && !movingRelativeTo) {
	    return null;
	  }
	
	  return moveToNewDroppable({
	    pageBorderBoxCenter: pageBorderBoxCenter,
	    destination: destination,
	    draggable: draggable,
	    movingRelativeTo: movingRelativeTo,
	    insideDestination: insideDestination,
	    home: home,
	    previousImpact: previousImpact || noImpact,
	    viewport: viewport
	  });
	});
	
	var isTotallyVisibleInNewLocation = (function (_ref) {
	  var draggable = _ref.draggable,
	      destination = _ref.destination,
	      newPageBorderBoxCenter = _ref.newPageBorderBoxCenter,
	      viewport = _ref.viewport;
	  var diff = subtract(newPageBorderBoxCenter, draggable.page.borderBox.center);
	  var shifted = offsetByPosition(draggable.page.borderBox, diff);
	  return isTotallyVisible({
	    target: shifted,
	    destination: destination,
	    viewport: viewport
	  });
	});
	
	var withFirstAdded = function withFirstAdded(_ref) {
	  var add = _ref.add,
	      previousImpact = _ref.previousImpact,
	      droppable = _ref.droppable,
	      draggables = _ref.draggables,
	      viewport = _ref.viewport;
	  var newDisplacement = {
	    draggableId: add,
	    isVisible: true,
	    shouldAnimate: true
	  };
	  var added = [newDisplacement].concat(previousImpact.movement.displaced);
	  var withUpdatedVisibility = added.map(function (current) {
	    if (current === newDisplacement) {
	      return current;
	    }
	
	    var updated = getDisplacement({
	      draggable: draggables[current.draggableId],
	      destination: droppable,
	      previousImpact: previousImpact,
	      viewport: viewport.frame
	    });
	    return updated;
	  });
	  return withUpdatedVisibility;
	};
	
	var forceVisibleDisplacement = function forceVisibleDisplacement(current) {
	  if (current.isVisible) {
	    return current;
	  }
	
	  return {
	    draggableId: current.draggableId,
	    isVisible: true,
	    shouldAnimate: false
	  };
	};
	
	var withFirstRemoved = function withFirstRemoved(_ref2) {
	  var dragging = _ref2.dragging,
	      isVisibleInNewLocation = _ref2.isVisibleInNewLocation,
	      previousImpact = _ref2.previousImpact,
	      droppable = _ref2.droppable,
	      draggables = _ref2.draggables;
	  var last = previousImpact.movement.displaced;
	  !last.length ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot remove displacement from empty list') : invariant(false) : void 0;
	  var withFirstRestored = last.slice(1, last.length);
	
	  if (!withFirstRestored.length) {
	    return withFirstRestored;
	  }
	
	  if (isVisibleInNewLocation) {
	    return withFirstRestored;
	  }
	
	  var axis = droppable.axis;
	  var sizeOfRestored = draggables[last[0].draggableId].page.marginBox[axis.size];
	  var sizeOfDragging = draggables[dragging].page.marginBox[axis.size];
	  var buffer = sizeOfRestored + sizeOfDragging;
	  var withUpdatedVisibility = withFirstRestored.map(function (displacement, index) {
	    if (index === 0) {
	      return forceVisibleDisplacement(displacement);
	    }
	
	    if (buffer > 0) {
	      var current = draggables[displacement.draggableId];
	      var size = current.page.marginBox[axis.size];
	      buffer -= size;
	      return forceVisibleDisplacement(displacement);
	    }
	
	    return {
	      draggableId: displacement.draggableId,
	      isVisible: false,
	      shouldAnimate: false
	    };
	  });
	  return withUpdatedVisibility;
	};
	
	var inHomeList$1 = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      draggableId = _ref.draggableId,
	      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
	      previousImpact = _ref.previousImpact,
	      droppable = _ref.droppable,
	      draggables = _ref.draggables,
	      viewport = _ref.viewport;
	  var location = previousImpact.destination;
	  !location ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot move to next index in home list when there is no previous destination') : invariant(false) : void 0;
	  var draggable = draggables[draggableId];
	  var axis = droppable.axis;
	  var insideDroppable = getDraggablesInsideDroppable(droppable, draggables);
	  var startIndex = draggable.descriptor.index;
	  var currentIndex = location.index;
	  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
	
	  if (proposedIndex > insideDroppable.length - 1) {
	    return null;
	  }
	
	  if (proposedIndex < 0) {
	    return null;
	  }
	
	  var destination = insideDroppable[proposedIndex];
	  var isMovingTowardStart = isMovingForward && proposedIndex <= startIndex || !isMovingForward && proposedIndex >= startIndex;
	
	  var edge = function () {
	    if (!isMovingTowardStart) {
	      return isMovingForward ? 'end' : 'start';
	    }
	
	    return isMovingForward ? 'start' : 'end';
	  }();
	
	  var newPageBorderBoxCenter = moveToEdge({
	    source: draggable.page.borderBox,
	    sourceEdge: edge,
	    destination: destination.page.borderBox,
	    destinationEdge: edge,
	    destinationAxis: droppable.axis
	  });
	  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
	    draggable: draggable,
	    destination: droppable,
	    newPageBorderBoxCenter: newPageBorderBoxCenter,
	    viewport: viewport.frame
	  });
	  var displaced = isMovingTowardStart ? withFirstRemoved({
	    dragging: draggableId,
	    isVisibleInNewLocation: isVisibleInNewLocation,
	    previousImpact: previousImpact,
	    droppable: droppable,
	    draggables: draggables
	  }) : withFirstAdded({
	    add: destination.descriptor.id,
	    previousImpact: previousImpact,
	    droppable: droppable,
	    draggables: draggables,
	    viewport: viewport
	  });
	  var newImpact = {
	    movement: {
	      displaced: displaced,
	      amount: patch(axis.line, draggable.page.marginBox[axis.size]),
	      isBeyondStartPosition: proposedIndex > startIndex
	    },
	    destination: {
	      droppableId: droppable.descriptor.id,
	      index: proposedIndex
	    },
	    direction: droppable.axis.direction
	  };
	
	  if (isVisibleInNewLocation) {
	    return {
	      pageBorderBoxCenter: withDroppableDisplacement(droppable, newPageBorderBoxCenter),
	      impact: newImpact,
	      scrollJumpRequest: null
	    };
	  }
	
	  var distance$$1 = subtract(newPageBorderBoxCenter, previousPageBorderBoxCenter);
	  var distanceWithScroll = withDroppableDisplacement(droppable, distance$$1);
	  return {
	    pageBorderBoxCenter: previousPageBorderBoxCenter,
	    impact: newImpact,
	    scrollJumpRequest: distanceWithScroll
	  };
	});
	
	var inForeignList$1 = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      draggableId = _ref.draggableId,
	      previousImpact = _ref.previousImpact,
	      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
	      droppable = _ref.droppable,
	      draggables = _ref.draggables,
	      viewport = _ref.viewport;
	  !previousImpact.destination ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot move to next index where there is no previous destination') : invariant(false) : void 0;
	  var location = previousImpact.destination;
	  var draggable = draggables[draggableId];
	  var axis = droppable.axis;
	  var insideForeignDroppable = getDraggablesInsideDroppable(droppable, draggables);
	  var currentIndex = location.index;
	  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
	  var lastIndex = insideForeignDroppable.length - 1;
	
	  if (proposedIndex > insideForeignDroppable.length) {
	    return null;
	  }
	
	  if (proposedIndex < 0) {
	    return null;
	  }
	
	  var movingRelativeTo = insideForeignDroppable[Math.min(proposedIndex, lastIndex)];
	  var isMovingPastLastIndex = proposedIndex > lastIndex;
	  var sourceEdge = 'start';
	
	  var destinationEdge = function () {
	    if (isMovingPastLastIndex) {
	      return 'end';
	    }
	
	    return 'start';
	  }();
	
	  var newPageBorderBoxCenter = moveToEdge({
	    source: draggable.page.borderBox,
	    sourceEdge: sourceEdge,
	    destination: movingRelativeTo.page.marginBox,
	    destinationEdge: destinationEdge,
	    destinationAxis: droppable.axis
	  });
	  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
	    draggable: draggable,
	    destination: droppable,
	    newPageBorderBoxCenter: newPageBorderBoxCenter,
	    viewport: viewport.frame
	  });
	
	  var displaced = function () {
	    if (isMovingForward) {
	      return withFirstRemoved({
	        dragging: draggableId,
	        isVisibleInNewLocation: isVisibleInNewLocation,
	        previousImpact: previousImpact,
	        droppable: droppable,
	        draggables: draggables
	      });
	    }
	
	    return withFirstAdded({
	      add: movingRelativeTo.descriptor.id,
	      previousImpact: previousImpact,
	      droppable: droppable,
	      draggables: draggables,
	      viewport: viewport
	    });
	  }();
	
	  var newImpact = {
	    movement: {
	      displaced: displaced,
	      amount: patch(axis.line, draggable.page.marginBox[axis.size]),
	      isBeyondStartPosition: false
	    },
	    destination: {
	      droppableId: droppable.descriptor.id,
	      index: proposedIndex
	    },
	    direction: droppable.axis.direction
	  };
	
	  if (isVisibleInNewLocation) {
	    return {
	      pageBorderBoxCenter: withDroppableDisplacement(droppable, newPageBorderBoxCenter),
	      impact: newImpact,
	      scrollJumpRequest: null
	    };
	  }
	
	  var distanceMoving = subtract(newPageBorderBoxCenter, previousPageBorderBoxCenter);
	  var distanceWithScroll = withDroppableDisplacement(droppable, distanceMoving);
	  return {
	    pageBorderBoxCenter: previousPageBorderBoxCenter,
	    impact: newImpact,
	    scrollJumpRequest: distanceWithScroll
	  };
	});
	
	var moveToNextIndex = (function (args) {
	  var draggableId = args.draggableId,
	      draggables = args.draggables,
	      droppable = args.droppable;
	  var draggable = draggables[draggableId];
	  var isInHomeList = draggable.descriptor.droppableId === droppable.descriptor.id;
	
	  if (!droppable.isEnabled) {
	    return null;
	  }
	
	  if (isInHomeList) {
	    return inHomeList$1(args);
	  }
	
	  return inForeignList$1(args);
	});
	
	var getClientSelection = function getClientSelection(pageBorderBoxCenter, currentScroll) {
	  return subtract(pageBorderBoxCenter, currentScroll);
	};
	
	var moveInDirection = (function (_ref) {
	  var state = _ref.state,
	      type = _ref.type;
	
	  var _ref2 = function () {
	    if (state.impact.destination) {
	      return {
	        droppable: state.dimensions.droppables[state.impact.destination.droppableId],
	        isMainAxisMovementAllowed: true
	      };
	    }
	
	    return {
	      droppable: state.dimensions.droppables[state.critical.droppable.id],
	      isMainAxisMovementAllowed: false
	    };
	  }(),
	      droppable = _ref2.droppable,
	      isMainAxisMovementAllowed = _ref2.isMainAxisMovementAllowed;
	
	  var direction = droppable.axis.direction;
	  var isMovingOnMainAxis = direction === 'vertical' && (type === 'MOVE_UP' || type === 'MOVE_DOWN') || direction === 'horizontal' && (type === 'MOVE_LEFT' || type === 'MOVE_RIGHT');
	
	  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
	    return null;
	  }
	
	  var isMovingForward = type === 'MOVE_DOWN' || type === 'MOVE_RIGHT';
	
	  if (isMovingOnMainAxis) {
	    var _result = moveToNextIndex({
	      isMovingForward: isMovingForward,
	      draggableId: state.critical.draggable.id,
	      droppable: droppable,
	      draggables: state.dimensions.draggables,
	      previousPageBorderBoxCenter: state.current.page.borderBoxCenter,
	      previousImpact: state.impact,
	      viewport: state.viewport
	    });
	
	    if (!_result) {
	      return null;
	    }
	
	    return {
	      impact: _result.impact,
	      clientSelection: getClientSelection(_result.pageBorderBoxCenter, state.viewport.scroll.current),
	      scrollJumpRequest: _result.scrollJumpRequest
	    };
	  }
	
	  var home = getHomeLocation(state.critical);
	  var result = moveCrossAxis({
	    isMovingForward: isMovingForward,
	    pageBorderBoxCenter: state.current.page.borderBoxCenter,
	    draggableId: state.critical.draggable.id,
	    droppableId: droppable.descriptor.id,
	    home: home,
	    draggables: state.dimensions.draggables,
	    droppables: state.dimensions.droppables,
	    previousImpact: state.impact,
	    viewport: state.viewport
	  });
	
	  if (!result) {
	    return null;
	  }
	
	  return {
	    clientSelection: getClientSelection(result.pageBorderBoxCenter, state.viewport.scroll.current),
	    impact: result.impact,
	    scrollJumpRequest: null
	  };
	});
	
	var scrollViewport = (function (viewport, newScroll) {
	  var diff = subtract(newScroll, viewport.scroll.initial);
	  var displacement = negate(diff);
	  var frame = cssBoxModel.getRect({
	    top: newScroll.y,
	    bottom: newScroll.y + viewport.frame.height,
	    left: newScroll.x,
	    right: newScroll.x + viewport.frame.width
	  });
	  var updated = {
	    frame: frame,
	    scroll: {
	      initial: viewport.scroll.initial,
	      max: viewport.scroll.max,
	      current: newScroll,
	      diff: {
	        value: diff,
	        displacement: displacement
	      }
	    }
	  };
	  return updated;
	});
	
	var getHomeImpact = (function (critical, dimensions) {
	  var home = dimensions.droppables[critical.droppable.id];
	  var axis = home.axis;
	  var draggable = dimensions.draggables[critical.draggable.id];
	  return {
	    movement: {
	      displaced: [],
	      isBeyondStartPosition: false,
	      amount: patch(axis.line, draggable.client.marginBox[axis.size])
	    },
	    direction: axis.direction,
	    destination: getHomeLocation(critical)
	  };
	});
	
	var getPageItemPositions = (function (client, windowScroll) {
	  return {
	    selection: add(client.selection, windowScroll),
	    borderBoxCenter: add(client.borderBoxCenter, windowScroll),
	    offset: add(client.offset, windowScroll)
	  };
	});
	
	function isMovementAllowed(state) {
	  return state.phase === 'DRAGGING' || state.phase === 'COLLECTING';
	}
	
	var idle = {
	  phase: 'IDLE'
	};
	var preparing = {
	  phase: 'PREPARING'
	};
	
	var moveWithPositionUpdates = function moveWithPositionUpdates(_ref) {
	  var state = _ref.state,
	      clientSelection = _ref.clientSelection,
	      shouldAnimate = _ref.shouldAnimate,
	      viewport = _ref.viewport,
	      impact = _ref.impact,
	      scrollJumpRequest = _ref.scrollJumpRequest;
	  var newViewport = viewport || state.viewport;
	  var currentWindowScroll = newViewport.scroll.current;
	
	  var client = function () {
	    var offset = subtract(clientSelection, state.initial.client.selection);
	    return {
	      offset: offset,
	      selection: clientSelection,
	      borderBoxCenter: add(state.initial.client.borderBoxCenter, offset)
	    };
	  }();
	
	  var page = getPageItemPositions(client, currentWindowScroll);
	  var current = {
	    client: client,
	    page: page
	  };
	
	  if (state.phase === 'COLLECTING') {
	    return _extends({
	      phase: 'COLLECTING'
	    }, state, {
	      current: current
	    });
	  }
	
	  var newImpact = impact || getDragImpact({
	    pageBorderBoxCenter: page.borderBoxCenter,
	    draggable: state.dimensions.draggables[state.critical.draggable.id],
	    draggables: state.dimensions.draggables,
	    droppables: state.dimensions.droppables,
	    previousImpact: state.impact,
	    viewport: newViewport
	  });
	
	  var result = _extends({}, state, {
	    current: current,
	    shouldAnimate: shouldAnimate,
	    impact: newImpact,
	    scrollJumpRequest: scrollJumpRequest || null,
	    viewport: newViewport
	  });
	
	  return result;
	};
	
	var reducer = (function (state, action) {
	  if (state === void 0) {
	    state = idle;
	  }
	
	  if (action.type === 'CLEAN') {
	    return idle;
	  }
	
	  if (action.type === 'PREPARE') {
	    return preparing;
	  }
	
	  if (action.type === 'INITIAL_PUBLISH') {
	    !(state.phase === 'PREPARING') ? process.env.NODE_ENV !== "production" ? invariant(false, 'INITIAL_PUBLISH must come after a PREPARING phase') : invariant(false) : void 0;
	    var _action$payload = action.payload,
	        critical = _action$payload.critical,
	        client = _action$payload.client,
	        viewport = _action$payload.viewport,
	        dimensions = _action$payload.dimensions,
	        autoScrollMode = _action$payload.autoScrollMode;
	    var initial = {
	      client: client,
	      page: {
	        selection: add(client.selection, viewport.scroll.initial),
	        borderBoxCenter: add(client.selection, viewport.scroll.initial),
	        offset: origin
	      }
	    };
	    var result = {
	      phase: 'DRAGGING',
	      isDragging: true,
	      critical: critical,
	      autoScrollMode: autoScrollMode,
	      dimensions: dimensions,
	      initial: initial,
	      current: initial,
	      impact: getHomeImpact(critical, dimensions),
	      viewport: viewport,
	      scrollJumpRequest: null,
	      shouldAnimate: false
	    };
	    return result;
	  }
	
	  if (action.type === 'COLLECTION_STARTING') {
	    var _extends2;
	
	    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
	      return state;
	    }
	
	    !(state.phase === 'DRAGGING') ? process.env.NODE_ENV !== "production" ? invariant(false, "Collection cannot start from phase " + state.phase) : invariant(false) : void 0;
	
	    var _result = _extends({
	      phase: 'COLLECTING'
	    }, state, (_extends2 = {}, _extends2["phase"] = 'COLLECTING', _extends2));
	
	    return _result;
	  }
	
	  if (action.type === 'PUBLISH') {
	    !(state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') ? process.env.NODE_ENV !== "production" ? invariant(false, "Unexpected " + action.type + " received in phase " + state.phase) : invariant(false) : void 0;
	    process.env.NODE_ENV !== "production" ? invariant(false, "Dynamic additions and removals of Draggable and Droppable components\n      is currently not supported. But will be soon!") : invariant(false);
	  }
	
	  if (action.type === 'MOVE') {
	    if (state.phase === 'PREPARING') {
	      return state;
	    }
	
	    if (state.phase === 'DROP_PENDING') {
	      return state;
	    }
	
	    !isMovementAllowed(state) ? process.env.NODE_ENV !== "production" ? invariant(false, action.type + " not permitted in phase " + state.phase) : invariant(false) : void 0;
	    var _action$payload2 = action.payload,
	        _client = _action$payload2.client,
	        shouldAnimate = _action$payload2.shouldAnimate;
	
	    if (state.shouldAnimate === shouldAnimate && isEqual(_client, state.current.client.selection)) {
	      return state;
	    }
	
	    var impact = state.autoScrollMode === 'JUMP' ? state.impact : null;
	    return moveWithPositionUpdates({
	      state: state,
	      clientSelection: _client,
	      impact: impact,
	      shouldAnimate: shouldAnimate
	    });
	  }
	
	  if (action.type === 'UPDATE_DROPPABLE_SCROLL') {
	    var _extends3, _extends4;
	
	    if (state.phase === 'PREPARING') {
	      return state;
	    }
	
	    if (state.phase === 'DROP_PENDING') {
	      return state;
	    }
	
	    !isMovementAllowed(state) ? process.env.NODE_ENV !== "production" ? invariant(false, action.type + " not permitted in phase " + state.phase) : invariant(false) : void 0;
	    var _action$payload3 = action.payload,
	        id = _action$payload3.id,
	        offset = _action$payload3.offset;
	    var target = state.dimensions.droppables[id];
	
	    if (!target) {
	      return state;
	    }
	
	    var updated = scrollDroppable(target, offset);
	
	    var _dimensions = _extends({}, state.dimensions, {
	      droppables: _extends({}, state.dimensions.droppables, (_extends3 = {}, _extends3[id] = updated, _extends3))
	    });
	
	    var _impact = function () {
	      !isMovementAllowed(state) ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
	
	      if (state.autoScrollMode === 'JUMP') {
	        return state.impact;
	      }
	
	      return getDragImpact({
	        pageBorderBoxCenter: state.current.page.borderBoxCenter,
	        draggable: _dimensions.draggables[state.critical.draggable.id],
	        draggables: _dimensions.draggables,
	        droppables: _dimensions.droppables,
	        previousImpact: state.impact,
	        viewport: state.viewport
	      });
	    }();
	
	    return _extends({
	      phase: 'DRAGGING'
	    }, state, (_extends4 = {}, _extends4["phase"] = state.phase, _extends4.impact = _impact, _extends4.dimensions = _dimensions, _extends4.scrollJumpRequest = null, _extends4));
	  }
	
	  if (action.type === 'UPDATE_DROPPABLE_IS_ENABLED') {
	    var _extends5, _extends6;
	
	    if (state.phase === 'DROP_PENDING') {
	      return state;
	    }
	
	    !isMovementAllowed(state) ? process.env.NODE_ENV !== "production" ? invariant(false, "Attempting to move in an unsupported phase " + state.phase) : invariant(false) : void 0;
	    var _action$payload4 = action.payload,
	        _id = _action$payload4.id,
	        isEnabled = _action$payload4.isEnabled;
	    var _target = state.dimensions.droppables[_id];
	    !_target ? process.env.NODE_ENV !== "production" ? invariant(false, "Cannot find Droppable[id: " + _id + "] to toggle its enabled state") : invariant(false) : void 0;
	    !(_target.isEnabled !== isEnabled) ? process.env.NODE_ENV !== "production" ? invariant(false, "Trying to set droppable isEnabled to " + String(isEnabled) + "\n      but it is already " + String(_target.isEnabled)) : invariant(false) : void 0;
	
	    var _updated = _extends({}, _target, {
	      isEnabled: isEnabled
	    });
	
	    var _dimensions2 = _extends({}, state.dimensions, {
	      droppables: _extends({}, state.dimensions.droppables, (_extends5 = {}, _extends5[_id] = _updated, _extends5))
	    });
	
	    var _impact2 = getDragImpact({
	      pageBorderBoxCenter: state.current.page.borderBoxCenter,
	      draggable: _dimensions2.draggables[state.critical.draggable.id],
	      draggables: _dimensions2.draggables,
	      droppables: _dimensions2.droppables,
	      previousImpact: state.impact,
	      viewport: state.viewport
	    });
	
	    return _extends({
	      phase: 'DRAGGING'
	    }, state, (_extends6 = {}, _extends6["phase"] = state.phase, _extends6.impact = _impact2, _extends6.dimensions = _dimensions2, _extends6));
	  }
	
	  if (action.type === 'MOVE_BY_WINDOW_SCROLL') {
	    if (state.phase === 'PREPARING') {
	      return state;
	    }
	
	    if (state.phase === 'DROP_PENDING' || state.phase === 'DROP_ANIMATING') {
	      return state;
	    }
	
	    !isMovementAllowed(state) ? process.env.NODE_ENV !== "production" ? invariant(false, "Cannot move by window in phase " + state.phase) : invariant(false) : void 0;
	    var newScroll = action.payload.scroll;
	
	    if (isEqual(state.viewport.scroll.current, newScroll)) {
	      return state;
	    }
	
	    var isJumpScrolling = state.autoScrollMode === 'JUMP';
	
	    var _impact3 = isJumpScrolling ? state.impact : null;
	
	    var _viewport = scrollViewport(state.viewport, newScroll);
	
	    return moveWithPositionUpdates({
	      state: state,
	      clientSelection: state.current.client.selection,
	      viewport: _viewport,
	      shouldAnimate: false,
	      impact: _impact3
	    });
	  }
	
	  if (action.type === 'UPDATE_VIEWPORT_MAX_SCROLL') {
	    var _extends7;
	
	    !state.isDragging ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot update the max viewport scroll if not dragging') : invariant(false) : void 0;
	    var existing = state.viewport;
	
	    var _viewport2 = _extends({}, existing, {
	      scroll: _extends({}, existing.scroll, {
	        max: action.payload
	      })
	    });
	
	    return _extends({
	      phase: 'DRAGGING'
	    }, state, (_extends7 = {}, _extends7["phase"] = state.phase, _extends7.viewport = _viewport2, _extends7));
	  }
	
	  if (action.type === 'MOVE_UP' || action.type === 'MOVE_DOWN' || action.type === 'MOVE_LEFT' || action.type === 'MOVE_RIGHT') {
	    if (state.phase === 'PREPARING') {
	      return state;
	    }
	
	    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
	      return state;
	    }
	
	    !(state.phase === 'DRAGGING') ? process.env.NODE_ENV !== "production" ? invariant(false, action.type + " received while not in DRAGGING phase") : invariant(false) : void 0;
	
	    var _result2 = moveInDirection({
	      state: state,
	      type: action.type
	    });
	
	    if (!_result2) {
	      return state;
	    }
	
	    return moveWithPositionUpdates({
	      state: state,
	      impact: _result2.impact,
	      clientSelection: _result2.clientSelection,
	      shouldAnimate: true,
	      scrollJumpRequest: _result2.scrollJumpRequest
	    });
	  }
	
	  if (action.type === 'DROP_PENDING') {
	    var _extends8;
	
	    var reason = action.payload.reason;
	    !(state.phase === 'COLLECTING') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Can only move into the DROP_PENDING phase from the COLLECTING phase') : invariant(false) : void 0;
	
	    var newState = _extends({
	      phase: 'DROP_PENDING'
	    }, state, (_extends8 = {}, _extends8["phase"] = 'DROP_PENDING', _extends8.isWaiting = true, _extends8.reason = reason, _extends8));
	
	    return newState;
	  }
	
	  if (action.type === 'DROP_ANIMATE') {
	    var pending = action.payload;
	    !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ? process.env.NODE_ENV !== "production" ? invariant(false, "Cannot animate drop from phase " + state.phase) : invariant(false) : void 0;
	    var _result3 = {
	      phase: 'DROP_ANIMATING',
	      pending: pending,
	      dimensions: state.dimensions
	    };
	    return _result3;
	  }
	
	  if (action.type === 'DROP_COMPLETE') {
	    return idle;
	  }
	
	  return state;
	});
	
	var lift = function lift(args) {
	  return {
	    type: 'LIFT',
	    payload: args
	  };
	};
	var initialPublish = function initialPublish(args) {
	  return {
	    type: 'INITIAL_PUBLISH',
	    payload: args
	  };
	};
	var publish = function publish(args) {
	  return {
	    type: 'PUBLISH',
	    payload: args
	  };
	};
	var collectionStarting = function collectionStarting() {
	  return {
	    type: 'COLLECTION_STARTING',
	    payload: null
	  };
	};
	var updateDroppableScroll = function updateDroppableScroll(args) {
	  return {
	    type: 'UPDATE_DROPPABLE_SCROLL',
	    payload: args
	  };
	};
	var updateDroppableIsEnabled = function updateDroppableIsEnabled(args) {
	  return {
	    type: 'UPDATE_DROPPABLE_IS_ENABLED',
	    payload: args
	  };
	};
	var move = function move(args) {
	  return {
	    type: 'MOVE',
	    payload: args
	  };
	};
	var moveByWindowScroll = function moveByWindowScroll(args) {
	  return {
	    type: 'MOVE_BY_WINDOW_SCROLL',
	    payload: args
	  };
	};
	var updateViewportMaxScroll = function updateViewportMaxScroll(max) {
	  return {
	    type: 'UPDATE_VIEWPORT_MAX_SCROLL',
	    payload: max
	  };
	};
	var moveUp = function moveUp() {
	  return {
	    type: 'MOVE_UP',
	    payload: null
	  };
	};
	var moveDown = function moveDown() {
	  return {
	    type: 'MOVE_DOWN',
	    payload: null
	  };
	};
	var moveRight = function moveRight() {
	  return {
	    type: 'MOVE_RIGHT',
	    payload: null
	  };
	};
	var moveLeft = function moveLeft() {
	  return {
	    type: 'MOVE_LEFT',
	    payload: null
	  };
	};
	var clean = function clean() {
	  return {
	    type: 'CLEAN',
	    payload: null
	  };
	};
	var prepare = function prepare() {
	  return {
	    type: 'PREPARE',
	    payload: null
	  };
	};
	var animateDrop = function animateDrop(pending) {
	  return {
	    type: 'DROP_ANIMATE',
	    payload: pending
	  };
	};
	var completeDrop = function completeDrop(result) {
	  return {
	    type: 'DROP_COMPLETE',
	    payload: result
	  };
	};
	var drop = function drop(args) {
	  return {
	    type: 'DROP',
	    payload: args
	  };
	};
	var dropPending = function dropPending(args) {
	  return {
	    type: 'DROP_PENDING',
	    payload: args
	  };
	};
	var dropAnimationFinished = function dropAnimationFinished() {
	  return {
	    type: 'DROP_ANIMATION_FINISHED',
	    payload: null
	  };
	};
	
	var lift$1 = (function (getMarshal) {
	  var timeoutId = null;
	
	  var tryAbortCriticalCollection = function tryAbortCriticalCollection() {
	    if (timeoutId == null) {
	      return;
	    }
	
	    clearTimeout(timeoutId);
	    timeoutId = null;
	  };
	
	  return function (_ref) {
	    var getState = _ref.getState,
	        dispatch = _ref.dispatch;
	    return function (next) {
	      return function (action) {
	        if (action.type === 'CLEAN') {
	          tryAbortCriticalCollection();
	          next(action);
	          return;
	        }
	
	        if (action.type !== 'LIFT') {
	          next(action);
	          return;
	        }
	
	        !!timeoutId ? process.env.NODE_ENV !== "production" ? invariant(false, 'There should not be a pending complete lift phase when a lift action is fired') : invariant(false) : void 0;
	        var marshal = getMarshal();
	        var _action$payload = action.payload,
	            id = _action$payload.id,
	            client = _action$payload.client,
	            autoScrollMode = _action$payload.autoScrollMode,
	            viewport = _action$payload.viewport;
	        var initial = getState();
	
	        if (initial.phase === 'DROP_ANIMATING') {
	          dispatch(completeDrop(initial.pending.result));
	        }
	
	        var postFlushState = getState();
	        !(postFlushState.phase === 'IDLE') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Incorrect phase to start a drag') : invariant(false) : void 0;
	        dispatch(prepare());
	        timeoutId = setTimeout(function () {
	          timeoutId = null;
	          var state = getState();
	          !(state.phase === 'PREPARING') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Invalid phase for completing lift') : invariant(false) : void 0;
	          var scrollOptions = {
	            shouldPublishImmediately: autoScrollMode === 'JUMP'
	          };
	          var request = {
	            draggableId: id,
	            scrollOptions: scrollOptions
	          };
	
	          var _marshal$startPublish = marshal.startPublishing(request, viewport.scroll.current),
	              critical = _marshal$startPublish.critical,
	              dimensions = _marshal$startPublish.dimensions;
	
	          dispatch(initialPublish({
	            critical: critical,
	            dimensions: dimensions,
	            client: client,
	            autoScrollMode: autoScrollMode,
	            viewport: viewport
	          }));
	        });
	      };
	    };
	  };
	});
	
	var style = (function (marshal) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type === 'INITIAL_PUBLISH') {
	          marshal.dragging();
	        }
	
	        if (action.type === 'COLLECTION_STARTING') {
	          marshal.collecting();
	        }
	
	        if (action.type === 'PUBLISH') {
	          marshal.dragging();
	        }
	
	        if (action.type === 'DROP_ANIMATE') {
	          marshal.dropping(action.payload.result.reason);
	        }
	
	        if (action.type === 'CLEAN' || action.type === 'DROP_COMPLETE') {
	          marshal.resting();
	        }
	
	        next(action);
	      };
	    };
	  };
	});
	
	var getNewHomeClientBorderBoxCenter = (function (_ref) {
	  var movement = _ref.movement,
	      draggable = _ref.draggable,
	      draggables = _ref.draggables,
	      destination = _ref.destination;
	  var originalCenter = draggable.client.borderBox.center;
	
	  if (destination == null) {
	    return originalCenter;
	  }
	
	  var displaced = movement.displaced,
	      isBeyondStartPosition = movement.isBeyondStartPosition;
	  var axis = destination.axis;
	  var isWithinHomeDroppable = destination.descriptor.id === draggable.descriptor.droppableId;
	
	  if (isWithinHomeDroppable && !displaced.length) {
	    return originalCenter;
	  }
	
	  var draggablesInDestination = getDraggablesInsideDroppable(destination, draggables);
	
	  var movingRelativeTo = function () {
	    if (isWithinHomeDroppable) {
	      return draggables[displaced[0].draggableId].client.borderBox;
	    }
	
	    if (displaced.length) {
	      return draggables[displaced[0].draggableId].client.borderBox;
	    }
	
	    if (draggablesInDestination.length) {
	      return draggablesInDestination[draggablesInDestination.length - 1].client.marginBox;
	    }
	
	    return destination.client.contentBox;
	  }();
	
	  var _ref2 = function () {
	    if (isWithinHomeDroppable) {
	      if (isBeyondStartPosition) {
	        return {
	          sourceEdge: 'end',
	          destinationEdge: 'end'
	        };
	      }
	
	      return {
	        sourceEdge: 'start',
	        destinationEdge: 'start'
	      };
	    }
	
	    if (!displaced.length && draggablesInDestination.length) {
	      return {
	        sourceEdge: 'start',
	        destinationEdge: 'end'
	      };
	    }
	
	    return {
	      sourceEdge: 'start',
	      destinationEdge: 'start'
	    };
	  }(),
	      sourceEdge = _ref2.sourceEdge,
	      destinationEdge = _ref2.destinationEdge;
	
	  var source = draggable.client.borderBox;
	  var targetCenter = moveToEdge({
	    source: source,
	    sourceEdge: sourceEdge,
	    destination: movingRelativeTo,
	    destinationEdge: destinationEdge,
	    destinationAxis: axis
	  });
	  return targetCenter;
	});
	
	var getScrollDisplacement = function getScrollDisplacement(droppable, viewport) {
	  return withDroppableDisplacement(droppable, viewport.scroll.diff.displacement);
	};
	
	var drop$1 = (function (_ref) {
	  var getState = _ref.getState,
	      dispatch = _ref.dispatch;
	  return function (next) {
	    return function (action) {
	      if (action.type !== 'DROP') {
	        next(action);
	        return;
	      }
	
	      var state = getState();
	      var reason = action.payload.reason;
	
	      if (state.phase === 'COLLECTING') {
	        dispatch(dropPending({
	          reason: reason
	        }));
	        return;
	      }
	
	      if (state.phase === 'PREPARING') {
	        dispatch(clean());
	        return;
	      }
	
	      if (state.phase === 'IDLE') {
	        return;
	      }
	
	      var isWaitingForDrop = state.phase === 'DROP_PENDING' && state.isWaiting;
	      !!isWaitingForDrop ? process.env.NODE_ENV !== "production" ? invariant(false, 'A DROP action occurred while DROP_PENDING and still waiting') : invariant(false) : void 0;
	      !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ? process.env.NODE_ENV !== "production" ? invariant(false, "Cannot drop in phase: " + state.phase) : invariant(false) : void 0;
	      var critical = state.critical;
	      var dimensions = state.dimensions;
	      var impact = reason === 'DROP' ? state.impact : noImpact;
	      var home = dimensions.droppables[state.critical.droppable.id];
	      var draggable = dimensions.draggables[state.critical.draggable.id];
	      var droppable = impact && impact.destination ? dimensions.droppables[impact.destination.droppableId] : null;
	      var source = {
	        index: critical.draggable.index,
	        droppableId: critical.droppable.id
	      };
	      var destination = reason === 'DROP' ? impact.destination : null;
	      var result = {
	        draggableId: draggable.descriptor.id,
	        type: home.descriptor.type,
	        source: source,
	        destination: destination,
	        reason: reason
	      };
	
	      var clientOffset = function () {
	        if (reason === 'CANCEL') {
	          return origin;
	        }
	
	        var newBorderBoxClientCenter = getNewHomeClientBorderBoxCenter({
	          movement: impact.movement,
	          draggable: draggable,
	          draggables: dimensions.draggables,
	          destination: droppable
	        });
	        return subtract(newBorderBoxClientCenter, draggable.client.borderBox.center);
	      }();
	
	      var newHomeOffset = add(clientOffset, getScrollDisplacement(droppable || home, state.viewport));
	      var isAnimationRequired = !isEqual(state.current.client.offset, newHomeOffset);
	      var pending = {
	        newHomeOffset: newHomeOffset,
	        result: result,
	        impact: impact
	      };
	
	      if (isAnimationRequired) {
	        dispatch(animateDrop(pending));
	        return;
	      }
	
	      dispatch(completeDrop(result));
	    };
	  };
	});
	
	var onDragStart = function onDragStart(start) {
	  return "\n  You have lifted an item in position " + (start.source.index + 1) + ".\n  Use the arrow keys to move, space bar to drop, and escape to cancel.\n";
	};
	
	var onDragUpdate = function onDragUpdate(update) {
	  if (!update.destination) {
	    return 'You are currently not dragging over a droppable area';
	  }
	
	  if (update.source.droppableId === update.destination.droppableId) {
	    return "You have moved the item to position " + (update.destination.index + 1);
	  }
	
	  return "\n    You have moved the item from list " + update.source.droppableId + " in position " + (update.source.index + 1) + "\n    to list " + update.destination.droppableId + " in position " + (update.destination.index + 1) + "\n  ";
	};
	
	var onDragEnd = function onDragEnd(result) {
	  if (result.reason === 'CANCEL') {
	    return "\n      Movement cancelled.\n      The item has returned to its starting position of " + (result.source.index + 1) + "\n    ";
	  }
	
	  if (!result.destination) {
	    return "\n      The item has been dropped while not over a droppable location.\n      The item has returned to its starting position of " + (result.source.index + 1) + "\n    ";
	  }
	
	  if (result.source.droppableId === result.destination.droppableId) {
	    if (result.source.index === result.destination.index) {
	      return "\n        You have dropped the item.\n        It has been dropped on its starting position of " + (result.source.index + 1) + "\n      ";
	    }
	
	    return "\n      You have dropped the item.\n      It has moved from position " + (result.source.index + 1) + " to " + (result.destination.index + 1) + "\n    ";
	  }
	
	  return "\n    You have dropped the item.\n    It has moved from position " + (result.source.index + 1) + " in list " + result.source.droppableId + "\n    to position " + (result.destination.index + 1) + " in list " + result.destination.droppableId + "\n  ";
	};
	
	var preset = {
	  onDragStart: onDragStart,
	  onDragUpdate: onDragUpdate,
	  onDragEnd: onDragEnd
	};
	
	var records = {};
	var flag = '__react-beautiful-dnd-debug-timings-hook__';
	
	var isTimingsEnabled = function isTimingsEnabled() {
	  return Boolean(window[flag]);
	};
	
	var start = function start(key) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (!isTimingsEnabled()) {
	      return;
	    }
	
	    var now = performance.now();
	    records[key] = now;
	  }
	};
	var finish = function finish(key) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (!isTimingsEnabled()) {
	      return;
	    }
	
	    var now = performance.now();
	    var previous = records[key];
	    !previous ? process.env.NODE_ENV !== "production" ? invariant(false, 'cannot finish timing as no previous time found') : invariant(false) : void 0;
	    var result = now - previous;
	    var rounded = result.toFixed(2);
	
	    var style = function () {
	      if (result < 12) {
	        return {
	          textColor: 'green',
	          symbol: '✅'
	        };
	      }
	
	      if (result < 40) {
	        return {
	          textColor: 'orange',
	          symbol: '⚠️'
	        };
	      }
	
	      return {
	        textColor: 'red',
	        symbol: '❌'
	      };
	    }();
	
	    console.log(style.symbol + " %cTiming %c" + rounded + " %cms %c" + key, 'color: blue; font-weight: bold; ', "color: " + style.textColor + "; font-size: 1.1em;", 'color: grey;', 'color: purple; font-weight: bold;');
	  }
	};
	
	var withTimings = function withTimings(key, fn) {
	  start(key);
	  fn();
	  finish(key);
	};
	
	var areLocationsEqual = function areLocationsEqual(first, second) {
	  if (first == null && second == null) {
	    return true;
	  }
	
	  if (first == null || second == null) {
	    return false;
	  }
	
	  return first.droppableId === second.droppableId && first.index === second.index;
	};
	
	var isCriticalEqual = function isCriticalEqual(first, second) {
	  if (first === second) {
	    return true;
	  }
	
	  var isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
	  var isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
	  return isDraggableEqual && isDroppableEqual;
	};
	
	var getExpiringAnnounce = function getExpiringAnnounce(announce) {
	  var wasCalled = false;
	  var isExpired = false;
	  setTimeout(function () {
	    isExpired = true;
	  });
	
	  var result = function result(message) {
	    if (wasCalled) {
	      if (process.env.NODE_ENV !== 'production') {
	        console.warn('Announcement already made. Not making a second announcement');
	      }
	
	      return;
	    }
	
	    if (isExpired) {
	      if (process.env.NODE_ENV !== 'production') {
	        console.warn("\n          Announcements cannot be made asynchronously.\n          Default message has already been announced.\n        ");
	      }
	
	      return;
	    }
	
	    wasCalled = true;
	    announce(message);
	  };
	
	  result.wasCalled = function () {
	    return wasCalled;
	  };
	
	  return result;
	};
	
	var getDragStart = function getDragStart(critical) {
	  return {
	    draggableId: critical.draggable.id,
	    type: critical.droppable.type,
	    source: {
	      droppableId: critical.droppable.id,
	      index: critical.draggable.index
	    }
	  };
	};
	
	var hooks = (function (getHooks, announce) {
	  var execute = function execute(hook, data, getDefaultMessage) {
	    if (!hook) {
	      announce(getDefaultMessage(data));
	      return;
	    }
	
	    var willExpire = getExpiringAnnounce(announce);
	    var provided = {
	      announce: willExpire
	    };
	    hook(data, provided);
	
	    if (!willExpire.wasCalled()) {
	      announce(getDefaultMessage(data));
	    }
	  };
	
	  var publisher = function () {
	    var lastLocation = null;
	    var lastCritical = null;
	    var _isDragStartPublished = false;
	
	    var beforeStart = function beforeStart(critical) {
	      !!_isDragStartPublished ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : invariant(false) : void 0;
	      withTimings('onBeforeDragStart', function () {
	        var fn = getHooks().onBeforeDragStart;
	
	        if (fn) {
	          fn(getDragStart(critical));
	        }
	      });
	    };
	
	    var start$$1 = function start$$1(critical) {
	      !!_isDragStartPublished ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : invariant(false) : void 0;
	      var data = getDragStart(critical);
	      lastCritical = critical;
	      lastLocation = data.source;
	      _isDragStartPublished = true;
	      withTimings('onDragStart', function () {
	        return execute(getHooks().onDragStart, data, preset.onDragStart);
	      });
	    };
	
	    var move = function move(critical, location) {
	      !(_isDragStartPublished && lastCritical) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot fire onDragMove when onDragStart has not been called') : invariant(false) : void 0;
	      var hasCriticalChanged = !isCriticalEqual(critical, lastCritical);
	
	      if (hasCriticalChanged) {
	        lastCritical = critical;
	      }
	
	      var hasLocationChanged = !areLocationsEqual(lastLocation, location);
	
	      if (hasLocationChanged) {
	        lastLocation = location;
	      }
	
	      if (!hasCriticalChanged && !hasLocationChanged) {
	        return;
	      }
	
	      var data = _extends({}, getDragStart(critical), {
	        destination: location
	      });
	
	      withTimings('onDragUpdate', function () {
	        return execute(getHooks().onDragUpdate, data, preset.onDragUpdate);
	      });
	    };
	
	    var drop = function drop(result) {
	      !_isDragStartPublished ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot fire onDragEnd when there is no matching onDragStart') : invariant(false) : void 0;
	      _isDragStartPublished = false;
	      lastLocation = null;
	      lastCritical = null;
	      withTimings('onDragEnd', function () {
	        return execute(getHooks().onDragEnd, result, preset.onDragEnd);
	      });
	    };
	
	    var abort = function abort() {
	      !(_isDragStartPublished && lastCritical) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot cancel when onDragStart not fired') : invariant(false) : void 0;
	
	      var result = _extends({}, getDragStart(lastCritical), {
	        destination: null,
	        reason: 'CANCEL'
	      });
	
	      drop(result);
	    };
	
	    return {
	      beforeStart: beforeStart,
	      start: start$$1,
	      move: move,
	      drop: drop,
	      abort: abort,
	      isDragStartPublished: function isDragStartPublished() {
	        return _isDragStartPublished;
	      }
	    };
	  }();
	
	  return function (store) {
	    return function (next) {
	      return function (action) {
	        if (action.type === 'INITIAL_PUBLISH') {
	          var critical = action.payload.critical;
	          publisher.beforeStart(critical);
	          next(action);
	          publisher.start(critical);
	          return;
	        }
	
	        next(action);
	
	        if (action.type === 'DROP_COMPLETE') {
	          var result = action.payload;
	          publisher.drop(result);
	          return;
	        }
	
	        if (action.type === 'CLEAN') {
	          if (publisher.isDragStartPublished()) {
	            publisher.abort();
	          }
	
	          return;
	        }
	
	        if (!publisher.isDragStartPublished()) {
	          return;
	        }
	
	        var state = store.getState();
	
	        if (state.phase === 'DRAGGING') {
	          publisher.move(state.critical, state.impact.destination);
	        }
	      };
	    };
	  };
	});
	
	var dropAnimationFinish = (function (store) {
	  return function (next) {
	    return function (action) {
	      if (action.type !== 'DROP_ANIMATION_FINISHED') {
	        next(action);
	        return;
	      }
	
	      var state = store.getState();
	      !(state.phase === 'DROP_ANIMATING') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot finish a drop animating when no drop is occurring') : invariant(false) : void 0;
	      store.dispatch(completeDrop(state.pending.result));
	    };
	  };
	});
	
	var dimensionMarshalStopper = (function (getMarshal) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type === 'DROP_COMPLETE' || action.type === 'CLEAN' || action.type === 'DROP_ANIMATE') {
	          var marshal = getMarshal();
	          marshal.stopPublishing();
	        }
	
	        next(action);
	      };
	    };
	  };
	});
	
	var shouldCancel = function shouldCancel(action) {
	  return action.type === 'CANCEL' || action.type === 'DROP_ANIMATE' || action.type === 'DROP' || action.type === 'DROP_COMPLETE' || action.type === 'COLLECTION_STARTING';
	};
	
	var autoScroll = (function (getScroller) {
	  return function (store) {
	    return function (next) {
	      return function (action) {
	        if (shouldCancel(action)) {
	          getScroller().cancel();
	          next(action);
	          return;
	        }
	
	        next(action);
	        var state = store.getState();
	
	        if (state.phase !== 'DRAGGING') {
	          return;
	        }
	
	        if (state.autoScrollMode === 'FLUID') {
	          getScroller().fluidScroll(state);
	          return;
	        }
	
	        if (!state.scrollJumpRequest) {
	          return;
	        }
	
	        getScroller().jumpScroll(state);
	      };
	    };
	  };
	});
	
	var shouldCheckOnAction = function shouldCheckOnAction(action) {
	  return action.type === 'MOVE' || action.type === 'MOVE_UP' || action.type === 'MOVE_RIGHT' || action.type === 'MOVE_DOWN' || action.type === 'MOVE_LEFT' || action.type === 'MOVE_BY_WINDOW_SCROLL';
	};
	
	var hasDroppableOverChanged = function hasDroppableOverChanged(previous, current) {
	  if (!previous) {
	    return Boolean(current);
	  }
	
	  if (!current) {
	    return Boolean(previous);
	  }
	
	  return previous.droppableId !== current.droppableId;
	};
	
	var getNewMaxScroll = function getNewMaxScroll(previous, current, action) {
	  if (!shouldCheckOnAction(action)) {
	    return null;
	  }
	
	  if (!isMovementAllowed(previous) || !isMovementAllowed(current)) {
	    return null;
	  }
	
	  if (!hasDroppableOverChanged(previous.impact.destination, current.impact.destination)) {
	    return null;
	  }
	
	  var viewport = current.viewport;
	  var doc = document.documentElement;
	  !doc ? process.env.NODE_ENV !== "production" ? invariant(false, 'Could not find document.documentElement') : invariant(false) : void 0;
	  var maxScroll = getMaxScroll({
	    scrollHeight: doc.scrollHeight,
	    scrollWidth: doc.scrollWidth,
	    width: viewport.frame.width,
	    height: viewport.frame.height
	  });
	
	  if (isEqual(maxScroll, viewport.scroll.max)) {
	    return null;
	  }
	
	  return maxScroll;
	};
	
	var maxScrollUpdater = (function (store) {
	  return function (next) {
	    return function (action) {
	      var previous = store.getState();
	      next(action);
	      var current = store.getState();
	      var maxScroll = getNewMaxScroll(previous, current, action);
	
	      if (maxScroll) {
	        next(updateViewportMaxScroll(maxScroll));
	      }
	    };
	  };
	});
	
	var composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : redux.compose;
	var createStore = (function (_ref) {
	  var getDimensionMarshal = _ref.getDimensionMarshal,
	      styleMarshal = _ref.styleMarshal,
	      getHooks = _ref.getHooks,
	      announce = _ref.announce,
	      getScroller = _ref.getScroller;
	  return redux.createStore(reducer, composeEnhancers(redux.applyMiddleware(style(styleMarshal), dimensionMarshalStopper(getDimensionMarshal), lift$1(getDimensionMarshal), drop$1, dropAnimationFinish, maxScrollUpdater, autoScroll(getScroller), hooks(getHooks, announce))));
	});
	
	var getEmptyMap = function getEmptyMap() {
	  return {
	    draggables: {},
	    droppables: {}
	  };
	};
	
	var timingKey = 'Publish collection from DOM';
	var createPublisher = (function (_ref) {
	  var getProvided = _ref.getProvided,
	      callbacks = _ref.callbacks;
	
	  var advancedUsageWarning = function () {
	    if (process.env.NODE_ENV === 'production') {
	      return function () {};
	    }
	
	    var hasAnnounced = false;
	    return function () {
	      if (hasAnnounced) {
	        return;
	      }
	
	      hasAnnounced = true;
	
	      if (process.env.NODE_ENV === 'production') {
	        return;
	      }
	
	      console.warn("\n        Advanced usage warning: you are adding or removing a dimension during a drag\n        This an advanced feature used to support dynamic interactions such as lazy loading lists.\n\n        Keep in mind the following restrictions:\n\n        - Draggable's can only be added to Droppable's that are scroll containers\n        - Adding a Droppable cannot impact the placement of other Droppables\n          (it cannot push a Droppable on the page)\n\n        (This warning will be stripped in production builds)\n      ".trim());
	    };
	  }();
	
	  var additions = getEmptyMap();
	  var removals = getEmptyMap();
	  var frameId = null;
	
	  var reset = function reset() {
	    additions = getEmptyMap();
	    removals = getEmptyMap();
	  };
	
	  var collect = function collect() {
	    advancedUsageWarning();
	
	    if (frameId) {
	      return;
	    }
	
	    frameId = requestAnimationFrame(function () {
	      frameId = null;
	      callbacks.collectionStarting();
	      start(timingKey);
	
	      var _getProvided = getProvided(),
	          entries = _getProvided.entries,
	          collection = _getProvided.collection;
	
	      var windowScroll = collection.initialWindowScroll;
	
	      var draggables = _Object$keys(additions.draggables).map(function (id) {
	        return entries.draggables[id].getDimension(windowScroll);
	      });
	
	      var droppables = _Object$keys(additions.droppables).map(function (id) {
	        return entries.droppables[id].callbacks.getDimensionAndWatchScroll(windowScroll, collection.scrollOptions);
	      });
	
	      var result = {
	        additions: {
	          draggables: draggables,
	          droppables: droppables
	        },
	        removals: {
	          draggables: _Object$keys(removals.draggables),
	          droppables: _Object$keys(removals.droppables)
	        }
	      };
	      reset();
	      finish(timingKey);
	      callbacks.publish(result);
	    });
	  };
	
	  var addDraggable = function addDraggable(id) {
	    additions.draggables[id] = true;
	
	    if (removals.draggables[id]) {
	      delete removals.draggables[id];
	    }
	
	    collect();
	  };
	
	  var removeDraggable = function removeDraggable(id) {
	    removals.draggables[id] = true;
	
	    if (additions.draggables[id]) {
	      delete additions.draggables[id];
	    }
	
	    collect();
	  };
	
	  var addDroppable = function addDroppable(id) {
	    additions.droppables[id] = true;
	
	    if (removals.droppables[id]) {
	      delete removals.droppables[id];
	    }
	
	    collect();
	  };
	
	  var removeDroppable = function removeDroppable(id) {
	    removals.droppables[id] = true;
	
	    if (additions.droppables[id]) {
	      delete additions.droppables[id];
	    }
	
	    collect();
	  };
	
	  var stop = function stop() {
	    if (!frameId) {
	      return;
	    }
	
	    cancelAnimationFrame(frameId);
	    frameId = null;
	    reset();
	  };
	
	  return {
	    addDraggable: addDraggable,
	    removeDraggable: removeDraggable,
	    addDroppable: addDroppable,
	    removeDroppable: removeDroppable,
	    stop: stop
	  };
	});
	
	var createDimensionMarshal = (function (callbacks) {
	  var entries = {
	    droppables: {},
	    draggables: {}
	  };
	  var collection = null;
	  var publisher = createPublisher({
	    callbacks: {
	      publish: callbacks.publish,
	      collectionStarting: callbacks.collectionStarting
	    },
	    getProvided: function getProvided() {
	      !collection ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot get scroll options when there is no collection') : invariant(false) : void 0;
	      return {
	        entries: entries,
	        collection: collection
	      };
	    }
	  });
	
	  var registerDraggable = function registerDraggable(descriptor, getDimension) {
	    var entry = {
	      descriptor: descriptor,
	      getDimension: getDimension
	    };
	    entries.draggables[descriptor.id] = entry;
	
	    if (!collection) {
	      return;
	    }
	
	    if (collection.critical.draggable.type !== descriptor.type) {
	      return;
	    }
	
	    publisher.addDraggable(descriptor.id);
	  };
	
	  var updateDraggable = function updateDraggable(previous, descriptor, getDimension) {
	    !entries.draggables[previous.id] ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot update draggable registration as no previous registration was found') : invariant(false) : void 0;
	    delete entries.draggables[previous.id];
	    var entry = {
	      descriptor: descriptor,
	      getDimension: getDimension
	    };
	    entries.draggables[descriptor.id] = entry;
	  };
	
	  var unregisterDraggable = function unregisterDraggable(descriptor) {
	    var entry = entries.draggables[descriptor.id];
	    !entry ? process.env.NODE_ENV !== "production" ? invariant(false, "Cannot unregister Draggable with id " + descriptor.id + " as it is not registered") : invariant(false) : void 0;
	
	    if (entry.descriptor !== descriptor) {
	      return;
	    }
	
	    delete entries.draggables[descriptor.id];
	
	    if (!collection) {
	      return;
	    }
	
	    !(collection.critical.draggable.id !== descriptor.id) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot remove the dragging item during a drag') : invariant(false) : void 0;
	
	    if (descriptor.type !== collection.critical.draggable.type) {
	      return;
	    }
	
	    publisher.removeDraggable(descriptor.id);
	  };
	
	  var registerDroppable = function registerDroppable(descriptor, droppableCallbacks) {
	    var id = descriptor.id;
	    entries.droppables[id] = {
	      descriptor: descriptor,
	      callbacks: droppableCallbacks
	    };
	
	    if (!collection) {
	      return;
	    }
	
	    if (descriptor.type !== collection.critical.droppable.type) {
	      return;
	    }
	
	    publisher.addDroppable(id);
	  };
	
	  var updateDroppable = function updateDroppable(previous, descriptor, droppableCallbacks) {
	    !entries.droppables[previous.id] ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot update droppable registration as no previous registration was found') : invariant(false) : void 0;
	    delete entries.droppables[previous.id];
	    var entry = {
	      descriptor: descriptor,
	      callbacks: droppableCallbacks
	    };
	    entries.droppables[descriptor.id] = entry;
	
	    if (collection) {
	      process.env.NODE_ENV !== "production" ? invariant(false, 'You are not able to update the id or type of a droppable during a drag') : invariant(false);
	    }
	  };
	
	  var unregisterDroppable = function unregisterDroppable(descriptor) {
	    var entry = entries.droppables[descriptor.id];
	    !entry ? process.env.NODE_ENV !== "production" ? invariant(false, "Cannot unregister Droppable with id " + descriptor.id + " as as it is not registered") : invariant(false) : void 0;
	
	    if (entry.descriptor !== descriptor) {
	      return;
	    }
	
	    delete entries.droppables[descriptor.id];
	
	    if (!collection) {
	      return;
	    }
	
	    !(collection.critical.droppable.id !== descriptor.id) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot remove the home Droppable during a drag') : invariant(false) : void 0;
	
	    if (collection.critical.droppable.type !== descriptor.type) {
	      return;
	    }
	
	    publisher.removeDroppable(descriptor.id);
	  };
	
	  var updateDroppableIsEnabled = function updateDroppableIsEnabled(id, isEnabled) {
	    !entries.droppables[id] ? process.env.NODE_ENV !== "production" ? invariant(false, "Cannot update the scroll on Droppable " + id + " as it is not registered") : invariant(false) : void 0;
	
	    if (!collection) {
	      return;
	    }
	
	    callbacks.updateDroppableIsEnabled({
	      id: id,
	      isEnabled: isEnabled
	    });
	  };
	
	  var updateDroppableScroll = function updateDroppableScroll(id, newScroll) {
	    !entries.droppables[id] ? process.env.NODE_ENV !== "production" ? invariant(false, "Cannot update the scroll on Droppable " + id + " as it is not registered") : invariant(false) : void 0;
	
	    if (!collection) {
	      return;
	    }
	
	    callbacks.updateDroppableScroll({
	      id: id,
	      offset: newScroll
	    });
	  };
	
	  var scrollDroppable = function scrollDroppable(id, change) {
	    var entry = entries.droppables[id];
	    !entry ? process.env.NODE_ENV !== "production" ? invariant(false, "Cannot scroll Droppable " + id + " as it is not registered") : invariant(false) : void 0;
	
	    if (!collection) {
	      return;
	    }
	
	    entry.callbacks.scroll(change);
	  };
	
	  var getInitialPublish = function getInitialPublish(args) {
	    var critical = args.critical,
	        scrollOptions = args.scrollOptions,
	        windowScroll = args.initialWindowScroll;
	    var timingKey = 'Initial collection from DOM';
	    start(timingKey);
	    var home = critical.droppable;
	
	    var droppables = _Object$keys(entries.droppables).map(function (id) {
	      return entries.droppables[id];
	    }).filter(function (entry) {
	      return entry.descriptor.type === home.type;
	    }).map(function (entry) {
	      return entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions);
	    }).reduce(function (previous, dimension) {
	      previous[dimension.descriptor.id] = dimension;
	      return previous;
	    }, {});
	
	    var draggables = _Object$keys(entries.draggables).map(function (id) {
	      return entries.draggables[id];
	    }).filter(function (entry) {
	      return entry.descriptor.type === critical.draggable.type;
	    }).map(function (entry) {
	      return entry.getDimension(windowScroll);
	    }).reduce(function (previous, dimension) {
	      previous[dimension.descriptor.id] = dimension;
	      return previous;
	    }, {});
	
	    finish(timingKey);
	    var dimensions = {
	      draggables: draggables,
	      droppables: droppables
	    };
	    var result = {
	      dimensions: dimensions,
	      critical: critical
	    };
	    return result;
	  };
	
	  var stopPublishing = function stopPublishing() {
	    if (!collection) {
	      return;
	    }
	
	    publisher.stop();
	    var home = collection.critical.droppable;
	
	    _Object$keys(entries.droppables).filter(function (id) {
	      return entries.droppables[id].descriptor.type === home.type;
	    }).forEach(function (id) {
	      return entries.droppables[id].callbacks.unwatchScroll();
	    });
	
	    collection = null;
	  };
	
	  var startPublishing = function startPublishing(request, windowScroll) {
	    !!collection ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot start capturing critical dimensions as there is already a collection') : invariant(false) : void 0;
	    var entry = entries.draggables[request.draggableId];
	    !entry ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot find critical draggable entry') : invariant(false) : void 0;
	    var home = entries.droppables[entry.descriptor.droppableId];
	    !home ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot find critical droppable entry') : invariant(false) : void 0;
	    var critical = {
	      draggable: entry.descriptor,
	      droppable: home.descriptor
	    };
	    collection = {
	      scrollOptions: request.scrollOptions,
	      critical: critical,
	      initialWindowScroll: windowScroll
	    };
	    return getInitialPublish(collection);
	  };
	
	  var marshal = {
	    registerDraggable: registerDraggable,
	    updateDraggable: updateDraggable,
	    unregisterDraggable: unregisterDraggable,
	    registerDroppable: registerDroppable,
	    updateDroppable: updateDroppable,
	    unregisterDroppable: unregisterDroppable,
	    updateDroppableIsEnabled: updateDroppableIsEnabled,
	    scrollDroppable: scrollDroppable,
	    updateDroppableScroll: updateDroppableScroll,
	    startPublishing: startPublishing,
	    stopPublishing: stopPublishing
	  };
	  return marshal;
	});
	
	var physics = function () {
	  var base = {
	    stiffness: 1000,
	    damping: 60,
	    precision: 0.99
	  };
	
	  var standard = _extends({}, base);
	
	  var fast = _extends({}, base, {
	    stiffness: base.stiffness * 2
	  });
	
	  return {
	    standard: standard,
	    fast: fast
	  };
	}();
	var css = {
	  outOfTheWay: 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)'
	};
	
	var prefix = 'data-react-beautiful-dnd';
	var dragHandle = prefix + "-drag-handle";
	var draggable = prefix + "-draggable";
	var droppable = prefix + "-droppable";
	
	var getStyles = (function (styleContext) {
	  var dragHandleSelector = "[" + dragHandle + "=\"" + styleContext + "\"]";
	  var draggableSelector = "[" + draggable + "=\"" + styleContext + "\"]";
	  var droppableSelector = "[" + droppable + "=\"" + styleContext + "\"]";
	  var dragHandleStyles = {
	    base: "\n      " + dragHandleSelector + " {\n        -webkit-touch-callout: none;\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        touch-action: manipulation;\n      }\n    ",
	    grabCursor: "\n      " + dragHandleSelector + " {\n        cursor: -webkit-grab;\n        cursor: grab;\n      }\n    ",
	    blockPointerEvents: "\n      " + dragHandleSelector + " {\n        pointer-events: none;\n      }\n    "
	  };
	  var draggableStyles = {
	    animateMovement: "\n      " + draggableSelector + " {\n        transition: " + css.outOfTheWay + ";\n      }\n    "
	  };
	  var droppableStyles = {
	    base: "\n      " + droppableSelector + " {\n        overflow-anchor: none;\n      }\n    "
	  };
	  var bodyStyles = {
	    whileActiveDragging: "\n      body {\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n      }\n    "
	  };
	  var base = [dragHandleStyles.base, droppableStyles.base];
	  var resting = base.concat([dragHandleStyles.grabCursor]);
	  var collecting = base.concat([dragHandleStyles.blockPointerEvents, bodyStyles.whileActiveDragging]);
	  var dragging = collecting.concat([draggableStyles.animateMovement]);
	  var dropAnimating = base.concat([dragHandleStyles.grabCursor, draggableStyles.animateMovement]);
	  var userCancel = base.concat([draggableStyles.animateMovement]);
	  return {
	    resting: resting.join(''),
	    dragging: dragging.join(''),
	    dropAnimating: dropAnimating.join(''),
	    collecting: collecting.join(''),
	    userCancel: userCancel.join('')
	  };
	});
	
	var count = 0;
	var resetStyleContext = function resetStyleContext() {
	  count = 0;
	};
	
	var getHead = function getHead() {
	  var head = document.querySelector('head');
	  !head ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot find the head to append a style to') : invariant(false) : void 0;
	  return head;
	};
	
	var createStyleMarshal = (function () {
	  var context = "" + count++;
	  var styles = getStyles(context);
	  var el = null;
	  var setStyle = memoizeOne(function (proposed) {
	    !el ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot set style of style tag if not mounted') : invariant(false) : void 0;
	    el.innerHTML = proposed;
	  });
	
	  var mount = function mount() {
	    !!el ? process.env.NODE_ENV !== "production" ? invariant(false, 'Style marshal already mounted') : invariant(false) : void 0;
	    el = document.createElement('style');
	    el.type = 'text/css';
	    el.setAttribute(prefix, context);
	    getHead().appendChild(el);
	    setStyle(styles.resting);
	  };
	
	  var collecting = function collecting() {
	    return setStyle(styles.collecting);
	  };
	
	  var dragging = function dragging() {
	    return setStyle(styles.dragging);
	  };
	
	  var dropping = function dropping(reason) {
	    if (reason === 'DROP') {
	      setStyle(styles.dropAnimating);
	      return;
	    }
	
	    setStyle(styles.userCancel);
	  };
	
	  var resting = function resting() {
	    return setStyle(styles.resting);
	  };
	
	  var unmount = function unmount() {
	    !el ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot unmount style marshal as it is already unmounted') : invariant(false) : void 0;
	    getHead().removeChild(el);
	    el = null;
	  };
	
	  var marshal = {
	    collecting: collecting,
	    dragging: dragging,
	    dropping: dropping,
	    resting: resting,
	    styleContext: context,
	    mount: mount,
	    unmount: unmount
	  };
	  return marshal;
	});
	
	var canStartDrag = (function (state, id) {
	  if (state.phase === 'IDLE') {
	    return true;
	  }
	
	  if (state.phase !== 'DROP_ANIMATING') {
	    return false;
	  }
	
	  if (state.pending.result.draggableId === id) {
	    return false;
	  }
	
	  return state.pending.result.reason === 'DROP';
	});
	
	var scrollWindow = (function (change) {
	  window.scrollBy(change.x, change.y);
	});
	
	var count$1 = 0;
	var visuallyHidden = {
	  position: 'absolute',
	  width: '1px',
	  height: '1px',
	  margin: '-1px',
	  border: '0',
	  padding: '0',
	  overflow: 'hidden',
	  clip: 'rect(0 0 0 0)',
	  'clip-path': 'inset(100%)'
	};
	
	var getBody = function getBody() {
	  !document.body ? process.env.NODE_ENV !== "production" ? invariant(false, 'Announcer cannot find document.body') : invariant(false) : void 0;
	  return document.body;
	};
	
	var createAnnouncer = (function () {
	  var id = "react-beautiful-dnd-announcement-" + count$1++;
	  var el = null;
	
	  var announce = function announce(message) {
	    !el ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot announce to unmounted node') : invariant(false) : void 0;
	    el.textContent = message;
	  };
	
	  var mount = function mount() {
	    !!el ? process.env.NODE_ENV !== "production" ? invariant(false, 'Announcer already mounted') : invariant(false) : void 0;
	    el = document.createElement('div');
	    el.id = id;
	    el.setAttribute('aria-live', 'assertive');
	    el.setAttribute('role', 'log');
	    el.setAttribute('aria-atomic', 'true');
	
	    _Object$assign(el.style, visuallyHidden);
	
	    getBody().appendChild(el);
	  };
	
	  var unmount = function unmount() {
	    !el ? process.env.NODE_ENV !== "production" ? invariant(false, 'Will not unmount annoucer as it is already unmounted') : invariant(false) : void 0;
	    getBody().removeChild(el);
	    el = null;
	  };
	
	  var announcer = {
	    announce: announce,
	    id: id,
	    mount: mount,
	    unmount: unmount
	  };
	  return announcer;
	});
	
	var getScrollableDroppables = memoizeOne(function (droppables) {
	  return toDroppableList(droppables).filter(function (droppable) {
	    if (!droppable.isEnabled) {
	      return false;
	    }
	
	    if (!droppable.viewport.closestScrollable) {
	      return false;
	    }
	
	    return true;
	  });
	});
	
	var getScrollableDroppableOver = function getScrollableDroppableOver(target, droppables) {
	  var maybe = getScrollableDroppables(droppables).find(function (droppable) {
	    !droppable.viewport.closestScrollable ? process.env.NODE_ENV !== "production" ? invariant(false, 'Invalid result') : invariant(false) : void 0;
	    return isPositionInFrame(droppable.viewport.closestScrollable.framePageMarginBox)(target);
	  });
	  return maybe;
	};
	
	var getBestScrollableDroppable = (function (_ref) {
	  var center = _ref.center,
	      destination = _ref.destination,
	      droppables = _ref.droppables;
	
	  if (destination) {
	    var _dimension = droppables[destination.droppableId];
	
	    if (!_dimension.viewport.closestScrollable) {
	      return null;
	    }
	
	    return _dimension;
	  }
	
	  var dimension = getScrollableDroppableOver(center, droppables);
	  return dimension;
	});
	
	var smallestSigned = apply(function (value) {
	  if (value === 0) {
	    return 0;
	  }
	
	  return value > 0 ? 1 : -1;
	});
	var getOverlap = function () {
	  var getRemainder = function getRemainder(target, max) {
	    if (target < 0) {
	      return target;
	    }
	
	    if (target > max) {
	      return target - max;
	    }
	
	    return 0;
	  };
	
	  return function (_ref) {
	    var current = _ref.current,
	        max = _ref.max,
	        change = _ref.change;
	    var targetScroll = add(current, change);
	    var overlap = {
	      x: getRemainder(targetScroll.x, max.x),
	      y: getRemainder(targetScroll.y, max.y)
	    };
	
	    if (isEqual(overlap, origin)) {
	      return null;
	    }
	
	    return overlap;
	  };
	}();
	var canPartiallyScroll = function canPartiallyScroll(_ref2) {
	  var rawMax = _ref2.max,
	      current = _ref2.current,
	      change = _ref2.change;
	  var max = {
	    x: Math.max(current.x, rawMax.x),
	    y: Math.max(current.y, rawMax.y)
	  };
	  var smallestChange = smallestSigned(change);
	  var overlap = getOverlap({
	    max: max,
	    current: current,
	    change: smallestChange
	  });
	
	  if (!overlap) {
	    return true;
	  }
	
	  if (smallestChange.x !== 0 && overlap.x === 0) {
	    return true;
	  }
	
	  if (smallestChange.y !== 0 && overlap.y === 0) {
	    return true;
	  }
	
	  return false;
	};
	var canScrollWindow = function canScrollWindow(viewport, change) {
	  return canPartiallyScroll({
	    current: viewport.scroll.current,
	    max: viewport.scroll.max,
	    change: change
	  });
	};
	var getWindowOverlap = function getWindowOverlap(viewport, change) {
	  if (!canScrollWindow(viewport, change)) {
	    return null;
	  }
	
	  var max = viewport.scroll.max;
	  var current = viewport.scroll.current;
	  return getOverlap({
	    current: current,
	    max: max,
	    change: change
	  });
	};
	var canScrollDroppable = function canScrollDroppable(droppable, change) {
	  var closest$$1 = droppable.viewport.closestScrollable;
	
	  if (!closest$$1) {
	    return false;
	  }
	
	  return canPartiallyScroll({
	    current: closest$$1.scroll.current,
	    max: closest$$1.scroll.max,
	    change: change
	  });
	};
	var getDroppableOverlap = function getDroppableOverlap(droppable, change) {
	  var closest$$1 = droppable.viewport.closestScrollable;
	
	  if (!closest$$1) {
	    return null;
	  }
	
	  if (!canScrollDroppable(droppable, change)) {
	    return null;
	  }
	
	  return getOverlap({
	    current: closest$$1.scroll.current,
	    max: closest$$1.scroll.max,
	    change: change
	  });
	};
	
	var config = {
	  startFrom: 0.25,
	  maxSpeedAt: 0.05,
	  maxScrollSpeed: 28,
	  ease: function ease(percentage) {
	    return Math.pow(percentage, 2);
	  }
	};
	var clean$1 = apply(function (value) {
	  return value === 0 ? 0 : value;
	});
	var getPixelThresholds = function getPixelThresholds(container, axis) {
	  var startFrom = container[axis.size] * config.startFrom;
	  var maxSpeedAt = container[axis.size] * config.maxSpeedAt;
	  var accelerationPlane = startFrom - maxSpeedAt;
	  var thresholds = {
	    startFrom: startFrom,
	    maxSpeedAt: maxSpeedAt,
	    accelerationPlane: accelerationPlane
	  };
	  return thresholds;
	};
	
	var getSpeed = function getSpeed(distance$$1, thresholds) {
	  if (distance$$1 >= thresholds.startFrom) {
	    return 0;
	  }
	
	  if (distance$$1 <= thresholds.maxSpeedAt) {
	    return config.maxScrollSpeed;
	  }
	
	  var distancePastStart = thresholds.startFrom - distance$$1;
	  var percentage = distancePastStart / thresholds.accelerationPlane;
	  var transformed = config.ease(percentage);
	  var speed = config.maxScrollSpeed * transformed;
	  return speed;
	};
	
	var adjustForSizeLimits = function adjustForSizeLimits(_ref) {
	  var container = _ref.container,
	      subject = _ref.subject,
	      proposedScroll = _ref.proposedScroll;
	  var isTooBigVertically = subject.height > container.height;
	  var isTooBigHorizontally = subject.width > container.width;
	
	  if (!isTooBigHorizontally && !isTooBigVertically) {
	    return proposedScroll;
	  }
	
	  if (isTooBigHorizontally && isTooBigVertically) {
	    return null;
	  }
	
	  return {
	    x: isTooBigHorizontally ? 0 : proposedScroll.x,
	    y: isTooBigVertically ? 0 : proposedScroll.y
	  };
	};
	
	var getRequiredScroll = function getRequiredScroll(_ref2) {
	  var container = _ref2.container,
	      subject = _ref2.subject,
	      center = _ref2.center;
	  var distance$$1 = {
	    top: center.y - container.top,
	    right: container.right - center.x,
	    bottom: container.bottom - center.y,
	    left: center.x - container.left
	  };
	
	  var y = function () {
	    var thresholds = getPixelThresholds(container, vertical);
	    var isCloserToBottom = distance$$1.bottom < distance$$1.top;
	
	    if (isCloserToBottom) {
	      return getSpeed(distance$$1.bottom, thresholds);
	    }
	
	    return -1 * getSpeed(distance$$1.top, thresholds);
	  }();
	
	  var x = function () {
	    var thresholds = getPixelThresholds(container, horizontal);
	    var isCloserToRight = distance$$1.right < distance$$1.left;
	
	    if (isCloserToRight) {
	      return getSpeed(distance$$1.right, thresholds);
	    }
	
	    return -1 * getSpeed(distance$$1.left, thresholds);
	  }();
	
	  var required = clean$1({
	    x: x,
	    y: y
	  });
	
	  if (isEqual(required, origin)) {
	    return null;
	  }
	
	  var limited = adjustForSizeLimits({
	    container: container,
	    subject: subject,
	    proposedScroll: required
	  });
	
	  if (!limited) {
	    return null;
	  }
	
	  return isEqual(limited, origin) ? null : limited;
	};
	
	var withPlaceholder = function withPlaceholder(droppable, draggable) {
	  var closest$$1 = droppable.viewport.closestScrollable;
	
	  if (!closest$$1) {
	    return null;
	  }
	
	  var isOverHome = droppable.descriptor.id === draggable.descriptor.droppableId;
	  var max = closest$$1.scroll.max;
	  var current = closest$$1.scroll.current;
	
	  if (isOverHome) {
	    return {
	      max: max,
	      current: current
	    };
	  }
	
	  var spaceForPlaceholder = patch(droppable.axis.line, draggable.placeholder.client.borderBox[droppable.axis.size]);
	  var newMax = add(max, spaceForPlaceholder);
	  var newCurrent = {
	    x: Math.min(current.x, newMax.x),
	    y: Math.min(current.y, newMax.y)
	  };
	  return {
	    max: newMax,
	    current: newCurrent
	  };
	};
	
	var createFluidScroller = (function (_ref3) {
	  var scrollWindow = _ref3.scrollWindow,
	      scrollDroppable = _ref3.scrollDroppable;
	  var scheduleWindowScroll = rafSchd(scrollWindow);
	  var scheduleDroppableScroll = rafSchd(scrollDroppable);
	
	  var scroller = function scroller(state) {
	    var center = state.current.page.borderBoxCenter;
	    var draggable = state.dimensions.draggables[state.critical.draggable.id];
	    var subject = draggable.page.marginBox;
	    var viewport = state.viewport;
	    var requiredWindowScroll = getRequiredScroll({
	      container: viewport.frame,
	      subject: subject,
	      center: center
	    });
	
	    if (requiredWindowScroll && canScrollWindow(viewport, requiredWindowScroll)) {
	      scheduleWindowScroll(requiredWindowScroll);
	      return;
	    }
	
	    var droppable = getBestScrollableDroppable({
	      center: center,
	      destination: state.impact.destination,
	      droppables: state.dimensions.droppables
	    });
	
	    if (!droppable) {
	      return;
	    }
	
	    var closestScrollable = droppable.viewport.closestScrollable;
	
	    if (!closestScrollable) {
	      return;
	    }
	
	    var requiredFrameScroll = getRequiredScroll({
	      container: closestScrollable.framePageMarginBox,
	      subject: subject,
	      center: center
	    });
	
	    if (!requiredFrameScroll) {
	      return;
	    }
	
	    var result = withPlaceholder(droppable, draggable);
	
	    if (!result) {
	      return;
	    }
	
	    var closest$$1 = droppable.viewport.closestScrollable;
	
	    if (!closest$$1) {
	      return;
	    }
	
	    var canScrollDroppable$$1 = canPartiallyScroll({
	      current: result.current,
	      max: result.max,
	      change: requiredFrameScroll
	    });
	
	    if (canScrollDroppable$$1) {
	      scheduleDroppableScroll(droppable.descriptor.id, requiredFrameScroll);
	    }
	  };
	
	  scroller.cancel = function () {
	    scheduleWindowScroll.cancel();
	    scheduleDroppableScroll.cancel();
	  };
	
	  return scroller;
	});
	
	var createJumpScroller = (function (_ref) {
	  var move = _ref.move,
	      scrollDroppable = _ref.scrollDroppable,
	      scrollWindow = _ref.scrollWindow;
	
	  var moveByOffset = function moveByOffset(state, offset) {
	    var client = add(state.current.client.selection, offset);
	    move({
	      client: client,
	      shouldAnimate: true
	    });
	  };
	
	  var scrollDroppableAsMuchAsItCan = function scrollDroppableAsMuchAsItCan(droppable, change) {
	    if (!canScrollDroppable(droppable, change)) {
	      return change;
	    }
	
	    var overlap = getDroppableOverlap(droppable, change);
	
	    if (!overlap) {
	      scrollDroppable(droppable.descriptor.id, change);
	      return null;
	    }
	
	    var whatTheDroppableCanScroll = subtract(change, overlap);
	    scrollDroppable(droppable.descriptor.id, whatTheDroppableCanScroll);
	    var remainder = subtract(change, whatTheDroppableCanScroll);
	    return remainder;
	  };
	
	  var scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan(viewport, change) {
	    if (!canScrollWindow(viewport, change)) {
	      return change;
	    }
	
	    var overlap = getWindowOverlap(viewport, change);
	
	    if (!overlap) {
	      scrollWindow(change);
	      return null;
	    }
	
	    var whatTheWindowCanScroll = subtract(change, overlap);
	    scrollWindow(whatTheWindowCanScroll);
	    var remainder = subtract(change, whatTheWindowCanScroll);
	    return remainder;
	  };
	
	  var jumpScroller = function jumpScroller(state) {
	    var request = state.scrollJumpRequest;
	
	    if (!request) {
	      return;
	    }
	
	    var destination = state.impact.destination;
	    !destination ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot perform a jump scroll when there is no destination') : invariant(false) : void 0;
	    var droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination.droppableId], request);
	
	    if (!droppableRemainder) {
	      return;
	    }
	
	    var viewport = state.viewport;
	    var windowRemainder = scrollWindowAsMuchAsItCan(viewport, droppableRemainder);
	
	    if (!windowRemainder) {
	      return;
	    }
	
	    moveByOffset(state, windowRemainder);
	  };
	
	  return jumpScroller;
	});
	
	var createAutoScroller = (function (_ref) {
	  var scrollDroppable = _ref.scrollDroppable,
	      scrollWindow = _ref.scrollWindow,
	      move = _ref.move;
	  var fluidScroll = createFluidScroller({
	    scrollWindow: scrollWindow,
	    scrollDroppable: scrollDroppable
	  });
	  var jumpScroll = createJumpScroller({
	    move: move,
	    scrollWindow: scrollWindow,
	    scrollDroppable: scrollDroppable
	  });
	  var marshal = {
	    cancel: fluidScroll.cancel,
	    fluidScroll: fluidScroll,
	    jumpScroll: jumpScroll
	  };
	  return marshal;
	});
	
	var prefix$1 = function prefix(key) {
	  return "private-react-beautiful-dnd-key-do-not-use-" + key;
	};
	
	var storeKey = prefix$1('store');
	var droppableIdKey = prefix$1('droppable-id');
	var droppableTypeKey = prefix$1('droppable-type');
	var dimensionMarshalKey = prefix$1('dimension-marshal');
	var styleContextKey = prefix$1('style-context');
	var canLiftContextKey = prefix$1('can-lift');
	
	var _DragDropContext$chil;
	var resetServerContext = function resetServerContext() {
	  resetStyleContext();
	};
	
	var printFatalDevError = function printFatalDevError(error) {
	  if (process.env.NODE_ENV === 'production') {
	    return;
	  }
	
	  console.warn("\n    An error has occurred while a drag is occurring.\n    Any existing drag will be cancelled.\n\n    Raw error:\n  ");
	  console.error(error);
	};
	
	var DragDropContext = function (_React$Component) {
	  _inheritsLoose(DragDropContext, _React$Component);
	
	  function DragDropContext(props, context) {
	    var _this;
	
	    _this = _React$Component.call(this, props, context) || this;
	    _this.store = void 0;
	    _this.dimensionMarshal = void 0;
	    _this.styleMarshal = void 0;
	    _this.autoScroller = void 0;
	    _this.announcer = void 0;
	    _this.unsubscribe = void 0;
	
	    _this.canLift = function (id) {
	      return canStartDrag(_this.store.getState(), id);
	    };
	
	    _this.onFatalError = function (error) {
	      printFatalDevError(error);
	
	      var state = _this.store.getState();
	
	      if (state.phase !== 'IDLE') {
	        _this.store.dispatch(clean());
	      }
	    };
	
	    _this.onWindowError = function (error) {
	      return _this.onFatalError(error);
	    };
	
	    _this.announcer = createAnnouncer();
	    _this.styleMarshal = createStyleMarshal();
	    _this.store = createStore({
	      getDimensionMarshal: function getDimensionMarshal() {
	        return _this.dimensionMarshal;
	      },
	      styleMarshal: _this.styleMarshal,
	      getHooks: function getHooks() {
	        return {
	          onBeforeDragStart: _this.props.onBeforeDragStart,
	          onDragStart: _this.props.onDragStart,
	          onDragEnd: _this.props.onDragEnd,
	          onDragUpdate: _this.props.onDragUpdate
	        };
	      },
	      announce: _this.announcer.announce,
	      getScroller: function getScroller() {
	        return _this.autoScroller;
	      }
	    });
	    var callbacks = redux.bindActionCreators({
	      collectionStarting: collectionStarting,
	      publish: publish,
	      updateDroppableScroll: updateDroppableScroll,
	      updateDroppableIsEnabled: updateDroppableIsEnabled
	    }, _this.store.dispatch);
	    _this.dimensionMarshal = createDimensionMarshal(callbacks);
	    _this.autoScroller = createAutoScroller(_extends({
	      scrollWindow: scrollWindow,
	      scrollDroppable: _this.dimensionMarshal.scrollDroppable
	    }, redux.bindActionCreators({
	      move: move
	    }, _this.store.dispatch)));
	    return _this;
	  }
	
	  var _proto = DragDropContext.prototype;
	
	  _proto.getChildContext = function getChildContext() {
	    var _ref;
	
	    return _ref = {}, _ref[storeKey] = this.store, _ref[dimensionMarshalKey] = this.dimensionMarshal, _ref[styleContextKey] = this.styleMarshal.styleContext, _ref[canLiftContextKey] = this.canLift, _ref;
	  };
	
	  _proto.componentDidMount = function componentDidMount() {
	    window.addEventListener('error', this.onWindowError);
	    this.styleMarshal.mount();
	    this.announcer.mount();
	  };
	
	  _proto.componentDidCatch = function componentDidCatch(error) {
	    this.onFatalError(error);
	
	    if (error.message.indexOf('Invariant failed') !== -1) {
	      this.setState({});
	      return;
	    }
	
	    throw error;
	  };
	
	  _proto.componentWillUnmount = function componentWillUnmount() {
	    window.removeEventListener('error', this.onWindowError);
	    var state = this.store.getState();
	
	    if (state.phase !== 'IDLE') {
	      this.store.dispatch(clean());
	    }
	
	    this.styleMarshal.unmount();
	    this.announcer.unmount();
	  };
	
	  _proto.render = function render() {
	    return this.props.children;
	  };
	
	  return DragDropContext;
	}(React__default.Component);
	
	DragDropContext.childContextTypes = (_DragDropContext$chil = {}, _DragDropContext$chil[storeKey] = PropTypes.shape({
	  dispatch: PropTypes.func.isRequired,
	  subscribe: PropTypes.func.isRequired,
	  getState: PropTypes.func.isRequired
	}).isRequired, _DragDropContext$chil[dimensionMarshalKey] = PropTypes.object.isRequired, _DragDropContext$chil[styleContextKey] = PropTypes.string.isRequired, _DragDropContext$chil[canLiftContextKey] = PropTypes.func.isRequired, _DragDropContext$chil);
	
	var isScrollable = function isScrollable() {
	  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
	    values[_key] = arguments[_key];
	  }
	
	  return values.some(function (value) {
	    return value === 'auto' || value === 'scroll';
	  });
	};
	
	var isElementScrollable = function isElementScrollable(el) {
	  var style = window.getComputedStyle(el);
	  return isScrollable(style.overflow, style.overflowY, style.overflowX);
	};
	
	var getClosestScrollable = function getClosestScrollable(el) {
	  if (el == null) {
	    return null;
	  }
	
	  if (!isElementScrollable(el)) {
	    return getClosestScrollable(el.parentElement);
	  }
	
	  return el;
	};
	
	var _DroppableDimensionPu;
	
	var getScroll = function getScroll(el) {
	  return {
	    x: el.scrollLeft,
	    y: el.scrollTop
	  };
	};
	
	var checkForNestedScrollContainers = function checkForNestedScrollContainers(scrollable) {
	  if (process.env.NODE_ENV === 'production') {
	    return;
	  }
	
	  if (!scrollable) {
	    return;
	  }
	
	  var anotherScrollParent = getClosestScrollable(scrollable.parentElement);
	
	  if (!anotherScrollParent) {
	    return;
	  }
	
	  console.warn("\n    Droppable: unsupported nested scroll container detected.\n    A Droppable can only have one scroll parent (which can be itself)\n    Nested scroll containers are currently not supported.\n\n    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131\n  ");
	};
	
	var listenerOptions = {
	  passive: true
	};
	
	var DroppableDimensionPublisher = function (_React$Component) {
	  _inheritsLoose(DroppableDimensionPublisher, _React$Component);
	
	  function DroppableDimensionPublisher(props, context) {
	    var _this;
	
	    _this = _React$Component.call(this, props, context) || this;
	    _this.watchingScroll = null;
	    _this.callbacks = void 0;
	    _this.publishedDescriptor = null;
	
	    _this.getClosestScroll = function () {
	      if (!_this.watchingScroll) {
	        return origin;
	      }
	
	      return getScroll(_this.watchingScroll.closestScrollable);
	    };
	
	    _this.memoizedUpdateScroll = memoizeOne(function (x, y) {
	      !_this.publishedDescriptor ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot update scroll on unpublished droppable') : invariant(false) : void 0;
	      var newScroll = {
	        x: x,
	        y: y
	      };
	      var marshal = _this.context[dimensionMarshalKey];
	      marshal.updateDroppableScroll(_this.publishedDescriptor.id, newScroll);
	    });
	
	    _this.updateScroll = function () {
	      var offset = _this.getClosestScroll();
	
	      _this.memoizedUpdateScroll(offset.x, offset.y);
	    };
	
	    _this.scheduleScrollUpdate = rafSchd(_this.updateScroll);
	
	    _this.onClosestScroll = function () {
	      !_this.watchingScroll ? process.env.NODE_ENV !== "production" ? invariant(false, 'Could not find scroll options while scrolling') : invariant(false) : void 0;
	      var options = _this.watchingScroll.options;
	
	      if (options.shouldPublishImmediately) {
	        _this.updateScroll();
	
	        return;
	      }
	
	      _this.scheduleScrollUpdate();
	    };
	
	    _this.scroll = function (change) {
	      !_this.watchingScroll ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot scroll a droppable with no closest scrollable') : invariant(false) : void 0;
	      var closestScrollable = _this.watchingScroll.closestScrollable;
	      closestScrollable.scrollTop += change.y;
	      closestScrollable.scrollLeft += change.x;
	    };
	
	    _this.watchScroll = function (closestScrollable, options) {
	      !!_this.watchingScroll ? process.env.NODE_ENV !== "production" ? invariant(false, 'Droppable cannot watch scroll as it is already watching scroll') : invariant(false) : void 0;
	
	      if (!closestScrollable) {
	        return;
	      }
	
	      _this.watchingScroll = {
	        options: options,
	        closestScrollable: closestScrollable
	      };
	      closestScrollable.addEventListener('scroll', _this.onClosestScroll, listenerOptions);
	    };
	
	    _this.unwatchScroll = function () {
	      var watching = _this.watchingScroll;
	
	      if (!watching) {
	        return;
	      }
	
	      _this.scheduleScrollUpdate.cancel();
	
	      watching.closestScrollable.removeEventListener('scroll', _this.onClosestScroll, listenerOptions);
	      _this.watchingScroll = null;
	    };
	
	    _this.getMemoizedDescriptor = memoizeOne(function (id, type) {
	      return {
	        id: id,
	        type: type
	      };
	    });
	
	    _this.publish = function () {
	      var marshal = _this.context[dimensionMarshalKey];
	
	      var descriptor = _this.getMemoizedDescriptor(_this.props.droppableId, _this.props.type);
	
	      if (!_this.publishedDescriptor) {
	        marshal.registerDroppable(descriptor, _this.callbacks);
	        _this.publishedDescriptor = descriptor;
	        return;
	      }
	
	      if (_this.publishedDescriptor === descriptor) {
	        return;
	      }
	
	      marshal.updateDroppable(_this.publishedDescriptor, descriptor, _this.callbacks);
	      _this.publishedDescriptor = descriptor;
	    };
	
	    _this.unpublish = function () {
	      !_this.publishedDescriptor ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot unpublish descriptor when none is published') : invariant(false) : void 0;
	      var marshal = _this.context[dimensionMarshalKey];
	      marshal.unregisterDroppable(_this.publishedDescriptor);
	      _this.publishedDescriptor = null;
	    };
	
	    _this.getDimensionAndWatchScroll = function (windowScroll, options) {
	      var _this$props = _this.props,
	          direction = _this$props.direction,
	          ignoreContainerClipping = _this$props.ignoreContainerClipping,
	          isDropDisabled = _this$props.isDropDisabled,
	          getDroppableRef = _this$props.getDroppableRef;
	      var targetRef = getDroppableRef();
	      var descriptor = _this.publishedDescriptor;
	      !targetRef ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot calculate a dimension when not attached to the DOM') : invariant(false) : void 0;
	      !descriptor ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot get dimension for unpublished droppable') : invariant(false) : void 0;
	      var scrollableRef = getClosestScrollable(targetRef);
	      checkForNestedScrollContainers(scrollableRef);
	
	      _this.watchScroll(scrollableRef, options);
	
	      var client = function () {
	        var base = cssBoxModel.getBox(targetRef);
	
	        if (!scrollableRef) {
	          return base;
	        }
	
	        if (targetRef !== scrollableRef) {
	          return base;
	        }
	
	        var top = base.paddingBox.top - scrollableRef.scrollTop;
	        var left = base.paddingBox.left - scrollableRef.scrollLeft;
	        var bottom = top + scrollableRef.scrollHeight;
	        var right = left + scrollableRef.scrollWidth;
	        var paddingBox = {
	          top: top,
	          right: right,
	          bottom: bottom,
	          left: left
	        };
	        var borderBox = {
	          top: paddingBox.top - base.border.top,
	          right: paddingBox.right + base.border.right,
	          bottom: paddingBox.bottom + base.border.bottom,
	          left: paddingBox.left - base.border.left
	        };
	        return cssBoxModel.createBox({
	          borderBox: borderBox,
	          margin: base.margin,
	          border: base.border,
	          padding: base.padding
	        });
	      }();
	
	      var page = cssBoxModel.withScroll(client, windowScroll);
	
	      var closest$$1 = function () {
	        if (!scrollableRef) {
	          return null;
	        }
	
	        var frameClient = cssBoxModel.getBox(scrollableRef);
	        return {
	          client: frameClient,
	          page: cssBoxModel.withScroll(frameClient),
	          scrollHeight: scrollableRef.scrollHeight,
	          scrollWidth: scrollableRef.scrollWidth,
	          scroll: getScroll(scrollableRef),
	          shouldClipSubject: !ignoreContainerClipping
	        };
	      }();
	
	      return getDroppableDimension({
	        descriptor: descriptor,
	        isEnabled: !isDropDisabled,
	        direction: direction,
	        client: client,
	        page: page,
	        closest: closest$$1
	      });
	    };
	
	    var callbacks = {
	      getDimensionAndWatchScroll: _this.getDimensionAndWatchScroll,
	      unwatchScroll: _this.unwatchScroll,
	      scroll: _this.scroll
	    };
	    _this.callbacks = callbacks;
	    return _this;
	  }
	
	  var _proto = DroppableDimensionPublisher.prototype;
	
	  _proto.componentDidMount = function componentDidMount() {
	    this.publish();
	  };
	
	  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
	    this.publish();
	
	    if (this.props.isDropDisabled === prevProps.isDropDisabled) {
	      return;
	    }
	
	    var marshal = this.context[dimensionMarshalKey];
	    marshal.updateDroppableIsEnabled(this.props.droppableId, !this.props.isDropDisabled);
	  };
	
	  _proto.componentWillUnmount = function componentWillUnmount() {
	    if (this.watchingScroll) {
	      if (process.env.NODE_ENV !== 'production') {
	        console.warn('Unmounting droppable while it was watching scroll');
	      }
	
	      this.unwatchScroll();
	    }
	
	    this.unpublish();
	  };
	
	  _proto.render = function render() {
	    return this.props.children;
	  };
	
	  return DroppableDimensionPublisher;
	}(React__default.Component);
	
	DroppableDimensionPublisher.contextTypes = (_DroppableDimensionPu = {}, _DroppableDimensionPu[dimensionMarshalKey] = PropTypes.object.isRequired, _DroppableDimensionPu);
	
	var Placeholder = function (_PureComponent) {
	  _inheritsLoose(Placeholder, _PureComponent);
	
	  function Placeholder() {
	    return _PureComponent.apply(this, arguments) || this;
	  }
	
	  var _proto = Placeholder.prototype;
	
	  _proto.componentDidMount = function componentDidMount() {
	    if (this.props.onMount) {
	      this.props.onMount();
	    }
	  };
	
	  _proto.componentWillUnmount = function componentWillUnmount() {
	    if (this.props.onUnmount) {
	      this.props.onUnmount();
	    }
	  };
	
	  _proto.render = function render() {
	    var placeholder = this.props.placeholder;
	    var client = placeholder.client,
	        display = placeholder.display,
	        tagName = placeholder.tagName;
	    var style = {
	      display: display,
	      boxSizing: 'border-box',
	      width: client.borderBox.width,
	      height: client.borderBox.height,
	      marginTop: client.margin.top,
	      marginRight: client.margin.right,
	      marginBottom: client.margin.bottom,
	      marginLeft: client.margin.left,
	      flexShrink: '0',
	      flexGrow: '0',
	      pointerEvents: 'none'
	    };
	    return React__default.createElement(tagName, {
	      style: style
	    });
	  };
	
	  return Placeholder;
	}(React.PureComponent);
	
	var throwIfRefIsInvalid = (function (ref) {
	  !(ref && ref instanceof HTMLElement) ? process.env.NODE_ENV !== "production" ? invariant(false, "\n    provided.innerRef has not been provided with a HTMLElement.\n\n    You can find a guide on using the innerRef callback functions at:\n    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md\n  ") : invariant(false) : void 0;
	});
	
	var _Droppable$contextTyp, _Droppable$childConte;
	
	var Droppable = function (_Component) {
	  _inheritsLoose(Droppable, _Component);
	
	  function Droppable(props, context) {
	    var _this;
	
	    _this = _Component.call(this, props, context) || this;
	    _this.styleContext = void 0;
	    _this.ref = null;
	    _this.isPlaceholderMounted = false;
	
	    _this.onPlaceholderMount = function () {
	      _this.isPlaceholderMounted = true;
	    };
	
	    _this.onPlaceholderUnmount = function () {
	      _this.isPlaceholderMounted = false;
	    };
	
	    _this.setRef = function (ref) {
	      if (ref === null) {
	        return;
	      }
	
	      if (ref === _this.ref) {
	        return;
	      }
	
	      _this.ref = ref;
	      throwIfRefIsInvalid(ref);
	    };
	
	    _this.getDroppableRef = function () {
	      return _this.ref;
	    };
	
	    _this.styleContext = context[styleContextKey];
	    return _this;
	  }
	
	  var _proto = Droppable.prototype;
	
	  _proto.getChildContext = function getChildContext() {
	    var _value;
	
	    var value = (_value = {}, _value[droppableIdKey] = this.props.droppableId, _value[droppableTypeKey] = this.props.type, _value);
	    return value;
	  };
	
	  _proto.componentDidMount = function componentDidMount() {
	    throwIfRefIsInvalid(this.ref);
	    this.warnIfPlaceholderNotMounted();
	  };
	
	  _proto.componentDidUpdate = function componentDidUpdate() {
	    this.warnIfPlaceholderNotMounted();
	  };
	
	  _proto.warnIfPlaceholderNotMounted = function warnIfPlaceholderNotMounted() {
	    if (process.env.NODE_ENV === 'production') {
	      return;
	    }
	
	    if (!this.props.placeholder) {
	      return;
	    }
	
	    if (this.isPlaceholderMounted) {
	      return;
	    }
	
	    console.warn("\n      Droppable setup issue: DroppableProvided > placeholder could not be found.\n      Please be sure to add the {provided.placeholder} Node as a child of your Droppable\n\n      More information: https://github.com/atlassian/react-beautiful-dnd#1-provided-droppableprovided\n    ");
	  };
	
	  _proto.getPlaceholder = function getPlaceholder() {
	    if (!this.props.placeholder) {
	      return null;
	    }
	
	    return React__default.createElement(Placeholder, {
	      placeholder: this.props.placeholder,
	      onMount: this.onPlaceholderMount,
	      onUnmount: this.onPlaceholderUnmount
	    });
	  };
	
	  _proto.render = function render() {
	    var _this$props = this.props,
	        children = _this$props.children,
	        direction = _this$props.direction,
	        droppableId = _this$props.droppableId,
	        ignoreContainerClipping = _this$props.ignoreContainerClipping,
	        isDraggingOver = _this$props.isDraggingOver,
	        isDropDisabled = _this$props.isDropDisabled,
	        draggingOverWith = _this$props.draggingOverWith,
	        type = _this$props.type;
	    var provided = {
	      innerRef: this.setRef,
	      placeholder: this.getPlaceholder(),
	      droppableProps: {
	        'data-react-beautiful-dnd-droppable': this.styleContext
	      }
	    };
	    var snapshot = {
	      isDraggingOver: isDraggingOver,
	      draggingOverWith: draggingOverWith
	    };
	    return React__default.createElement(DroppableDimensionPublisher, {
	      droppableId: droppableId,
	      type: type,
	      direction: direction,
	      ignoreContainerClipping: ignoreContainerClipping,
	      isDropDisabled: isDropDisabled,
	      getDroppableRef: this.getDroppableRef
	    }, children(provided, snapshot));
	  };
	
	  return Droppable;
	}(React.Component);
	
	Droppable.contextTypes = (_Droppable$contextTyp = {}, _Droppable$contextTyp[styleContextKey] = PropTypes.string.isRequired, _Droppable$contextTyp);
	Droppable.childContextTypes = (_Droppable$childConte = {}, _Droppable$childConte[droppableIdKey] = PropTypes.string.isRequired, _Droppable$childConte[droppableTypeKey] = PropTypes.string.isRequired, _Droppable$childConte);
	
	var isStrictEqual = (function (a, b) {
	  return a === b;
	});
	
	var makeMapStateToProps = function makeMapStateToProps() {
	  var getIsDraggingOver = function getIsDraggingOver(id, destination) {
	    if (!destination) {
	      return false;
	    }
	
	    return destination.droppableId === id;
	  };
	
	  var shouldUsePlaceholder = function shouldUsePlaceholder(id, descriptor, destination) {
	    if (!destination) {
	      return false;
	    }
	
	    if (id === descriptor.droppableId) {
	      return false;
	    }
	
	    return id === destination.droppableId;
	  };
	
	  var getMapProps = memoizeOne(function (isDraggingOver, draggingOverWith, placeholder) {
	    return {
	      isDraggingOver: isDraggingOver,
	      draggingOverWith: draggingOverWith,
	      placeholder: placeholder
	    };
	  });
	
	  var getDefault = function getDefault() {
	    return getMapProps(false, null, null);
	  };
	
	  var selector = function selector(state, ownProps) {
	    if (ownProps.isDropDisabled) {
	      return getDefault();
	    }
	
	    var id = ownProps.droppableId;
	
	    if (state.isDragging) {
	      var destination = state.impact.destination;
	      var isDraggingOver = getIsDraggingOver(id, destination);
	      var draggableId = state.critical.draggable.id;
	      var draggingOverWith = isDraggingOver ? draggableId : null;
	      var draggable = state.dimensions.draggables[draggableId];
	      var placeholder = shouldUsePlaceholder(id, draggable.descriptor, destination) ? draggable.placeholder : null;
	      return getMapProps(isDraggingOver, draggingOverWith, placeholder);
	    }
	
	    if (state.phase === 'DROP_ANIMATING') {
	      var _destination = state.pending.impact.destination;
	
	      var _isDraggingOver = getIsDraggingOver(id, _destination);
	
	      var _draggableId = state.pending.result.draggableId;
	
	      var _draggingOverWith = _isDraggingOver ? _draggableId : null;
	
	      var _draggable = state.dimensions.draggables[_draggableId];
	
	      var _placeholder = shouldUsePlaceholder(id, _draggable.descriptor, _destination) ? _draggable.placeholder : null;
	
	      return getMapProps(_isDraggingOver, _draggingOverWith, _placeholder);
	    }
	
	    return getDefault();
	  };
	
	  return selector;
	};
	var connectedDroppable = reactRedux.connect(makeMapStateToProps, null, null, {
	  storeKey: storeKey,
	  pure: true,
	  areStatePropsEqual: isStrictEqual
	})(Droppable);
	connectedDroppable.defaultProps = {
	  type: 'DEFAULT',
	  isDropDisabled: false,
	  direction: 'vertical',
	  ignoreContainerClipping: false
	};
	
	var _DraggableDimensionPu;
	
	var DraggableDimensionPublisher = function (_Component) {
	  _inheritsLoose(DraggableDimensionPublisher, _Component);
	
	  function DraggableDimensionPublisher() {
	    var _this;
	
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
	    _this.publishedDescriptor = null;
	    _this.getMemoizedDescriptor = memoizeOne(function (id, index, droppableId, type) {
	      return {
	        id: id,
	        index: index,
	        droppableId: droppableId,
	        type: type
	      };
	    });
	
	    _this.publish = function () {
	      var marshal = _this.context[dimensionMarshalKey];
	
	      var descriptor = _this.getMemoizedDescriptor(_this.props.draggableId, _this.props.index, _this.props.droppableId, _this.props.type);
	
	      if (!_this.publishedDescriptor) {
	        marshal.registerDraggable(descriptor, _this.getDimension);
	        _this.publishedDescriptor = descriptor;
	        return;
	      }
	
	      if (descriptor === _this.publishedDescriptor) {
	        return;
	      }
	
	      marshal.updateDraggable(_this.publishedDescriptor, descriptor, _this.getDimension);
	      _this.publishedDescriptor = descriptor;
	    };
	
	    _this.unpublish = function () {
	      !_this.publishedDescriptor ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot unpublish descriptor when none is published') : invariant(false) : void 0;
	      var marshal = _this.context[dimensionMarshalKey];
	      marshal.unregisterDraggable(_this.publishedDescriptor);
	      _this.publishedDescriptor = null;
	    };
	
	    _this.getDimension = function (windowScroll) {
	      var targetRef = _this.props.getDraggableRef();
	
	      var descriptor = _this.publishedDescriptor;
	      !targetRef ? process.env.NODE_ENV !== "production" ? invariant(false, 'DraggableDimensionPublisher cannot calculate a dimension when not attached to the DOM') : invariant(false) : void 0;
	      !descriptor ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot get dimension for unpublished draggable') : invariant(false) : void 0;
	      var computedStyles = window.getComputedStyle(targetRef);
	      var borderBox = targetRef.getBoundingClientRect();
	      var client = cssBoxModel.calculateBox(borderBox, computedStyles);
	      var page = cssBoxModel.withScroll(client, windowScroll);
	      var placeholder = {
	        client: client,
	        tagName: targetRef.tagName.toLowerCase(),
	        display: computedStyles.display
	      };
	      var dimension = {
	        descriptor: descriptor,
	        placeholder: placeholder,
	        client: client,
	        page: page
	      };
	      return dimension;
	    };
	
	    return _this;
	  }
	
	  var _proto = DraggableDimensionPublisher.prototype;
	
	  _proto.componentDidMount = function componentDidMount() {
	    this.publish();
	  };
	
	  _proto.componentDidUpdate = function componentDidUpdate() {
	    this.publish();
	  };
	
	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.unpublish();
	  };
	
	  _proto.render = function render() {
	    return this.props.children;
	  };
	
	  return DraggableDimensionPublisher;
	}(React.Component);
	
	DraggableDimensionPublisher.contextTypes = (_DraggableDimensionPu = {}, _DraggableDimensionPu[dimensionMarshalKey] = PropTypes.object.isRequired, _DraggableDimensionPu);
	
	var DoubleRenderBlocker = function (_React$Component) {
	  _inheritsLoose(DoubleRenderBlocker, _React$Component);
	
	  function DoubleRenderBlocker() {
	    return _React$Component.apply(this, arguments) || this;
	  }
	
	  var _proto = DoubleRenderBlocker.prototype;
	
	  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    if (isEqual(origin, nextProps.change)) {
	      return true;
	    }
	
	    if (isEqual(this.props.change, nextProps.change)) {
	      return false;
	    }
	
	    return true;
	  };
	
	  _proto.render = function render() {
	    return this.props.children(this.props.change);
	  };
	
	  return DoubleRenderBlocker;
	}(React__default.Component);
	
	var Moveable = function (_Component) {
	  _inheritsLoose(Moveable, _Component);
	
	  function Moveable() {
	    return _Component.apply(this, arguments) || this;
	  }
	
	  var _proto2 = Moveable.prototype;
	
	  _proto2.getFinal = function getFinal() {
	    var destination = this.props.destination;
	    var speed = this.props.speed;
	
	    if (speed === 'INSTANT') {
	      return destination;
	    }
	
	    var config = speed === 'FAST' ? physics.fast : physics.standard;
	    return {
	      x: reactMotion.spring(destination.x, config),
	      y: reactMotion.spring(destination.y, config)
	    };
	  };
	
	  _proto2.render = function render() {
	    var _this = this;
	
	    var final = this.getFinal();
	    return React__default.createElement(reactMotion.Motion, {
	      defaultStyle: origin,
	      style: final,
	      onRest: this.props.onMoveEnd
	    }, function (current) {
	      var _this$props = _this.props,
	          speed = _this$props.speed,
	          destination = _this$props.destination,
	          children = _this$props.children;
	      var target = speed === 'INSTANT' ? destination : current;
	      return React__default.createElement(DoubleRenderBlocker, {
	        change: target
	      }, children);
	    });
	  };
	
	  return Moveable;
	}(React.Component);
	
	Moveable.defaultProps = {
	  destination: origin
	};
	
	var getWindowFromRef = (function (ref) {
	  return ref ? ref.ownerDocument.defaultView : window;
	});
	
	var selector = "[" + dragHandle + "]";
	
	var isSVG = function isSVG(el) {
	  if (typeof SVGElement === 'undefined') {
	    return false;
	  }
	
	  return el instanceof SVGElement;
	};
	
	var throwIfSVG = function throwIfSVG(el) {
	  !!isSVG(el) ? process.env.NODE_ENV !== "production" ? invariant(false, "A drag handle cannot be an SVGElement: it has inconsistent focus support.\n\n    More information: https://github.com/atlassian/react-beautiful-dnd/tree/master/docs/guides/dragging-svgs.md") : invariant(false) : void 0;
	};
	
	var getDragHandleRef = function getDragHandleRef(draggableRef) {
	  if (draggableRef.hasAttribute(dragHandle)) {
	    throwIfSVG(draggableRef);
	    return draggableRef;
	  }
	
	  var el = draggableRef.querySelector(selector);
	  throwIfSVG(draggableRef);
	  !el ? process.env.NODE_ENV !== "production" ? invariant(false, "\n      Cannot find drag handle element inside of Draggable.\n      Please be sure to apply the {...provided.dragHandleProps} to your Draggable\n\n      More information: https://github.com/atlassian/react-beautiful-dnd#draggable\n    ") : invariant(false) : void 0;
	  !(el instanceof HTMLElement) ? process.env.NODE_ENV !== "production" ? invariant(false, 'A drag handle must be a HTMLElement') : invariant(false) : void 0;
	  return el;
	};
	
	var retainingFocusFor = null;
	var listenerOptions$1 = {
	  capture: true
	};
	
	var clearRetentionOnFocusChange = function () {
	  var isBound = false;
	
	  var bind = function bind() {
	    if (isBound) {
	      return;
	    }
	
	    isBound = true;
	    window.addEventListener('focus', onWindowFocusChange, listenerOptions$1);
	  };
	
	  var unbind = function unbind() {
	    if (!isBound) {
	      return;
	    }
	
	    isBound = false;
	    window.removeEventListener('focus', onWindowFocusChange, listenerOptions$1);
	  };
	
	  var onWindowFocusChange = function onWindowFocusChange() {
	    unbind();
	    retainingFocusFor = null;
	  };
	
	  var result = function result() {
	    return bind();
	  };
	
	  result.cancel = function () {
	    return unbind();
	  };
	
	  return result;
	}();
	
	var retain = function retain(id) {
	  retainingFocusFor = id;
	  clearRetentionOnFocusChange();
	};
	
	var tryRestoreFocus = function tryRestoreFocus(id, draggableRef) {
	  if (!retainingFocusFor) {
	    return;
	  }
	
	  if (id !== retainingFocusFor) {
	    return;
	  }
	
	  retainingFocusFor = null;
	  clearRetentionOnFocusChange.cancel();
	  var dragHandleRef = getDragHandleRef(draggableRef);
	
	  if (!dragHandleRef) {
	    console.warn('Could not find drag handle in the DOM to focus on it');
	    return;
	  }
	
	  dragHandleRef.focus();
	};
	
	var retainer = {
	  retain: retain,
	  tryRestoreFocus: tryRestoreFocus
	};
	
	var interactiveTagNames = {
	  input: true,
	  button: true,
	  textarea: true,
	  select: true,
	  option: true,
	  optgroup: true,
	  video: true,
	  audio: true
	};
	
	var isAnInteractiveElement = function isAnInteractiveElement(parent, current) {
	  if (current == null) {
	    return false;
	  }
	
	  var hasAnInteractiveTag = Boolean(interactiveTagNames[current.tagName.toLowerCase()]);
	
	  if (hasAnInteractiveTag) {
	    return true;
	  }
	
	  var attribute = current.getAttribute('contenteditable');
	
	  if (attribute === 'true' || attribute === '') {
	    return true;
	  }
	
	  if (current === parent) {
	    return false;
	  }
	
	  return isAnInteractiveElement(parent, current.parentElement);
	};
	
	var shouldAllowDraggingFromTarget = (function (event, props) {
	  if (props.canDragInteractiveElements) {
	    return true;
	  }
	
	  var target = event.target,
	      currentTarget = event.currentTarget;
	
	  if (!(target instanceof Element) || !(currentTarget instanceof Element)) {
	    return true;
	  }
	
	  return !isAnInteractiveElement(currentTarget, target);
	});
	
	var createScheduler = (function (callbacks) {
	  var memoizedMove = memoizeOne(function (x, y) {
	    var point = {
	      x: x,
	      y: y
	    };
	    callbacks.onMove(point);
	  });
	  var move = rafSchd(function (point) {
	    return memoizedMove(point.x, point.y);
	  });
	  var moveUp = rafSchd(callbacks.onMoveUp);
	  var moveDown = rafSchd(callbacks.onMoveDown);
	  var moveRight = rafSchd(callbacks.onMoveRight);
	  var moveLeft = rafSchd(callbacks.onMoveLeft);
	  var windowScrollMove = rafSchd(callbacks.onWindowScroll);
	
	  var cancel = function cancel() {
	    move.cancel();
	    moveUp.cancel();
	    moveDown.cancel();
	    moveRight.cancel();
	    moveLeft.cancel();
	    windowScrollMove.cancel();
	  };
	
	  return {
	    move: move,
	    moveUp: moveUp,
	    moveDown: moveDown,
	    moveRight: moveRight,
	    moveLeft: moveLeft,
	    windowScrollMove: windowScrollMove,
	    cancel: cancel
	  };
	});
	
	var sloppyClickThreshold = 5;
	var isSloppyClickThresholdExceeded = (function (original, current) {
	  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
	});
	
	var tab = 9;
	var enter = 13;
	var escape = 27;
	var space = 32;
	var pageUp = 33;
	var pageDown = 34;
	var end = 35;
	var home = 36;
	var arrowLeft = 37;
	var arrowUp = 38;
	var arrowRight = 39;
	var arrowDown = 40;
	
	var _preventedKeys;
	var preventedKeys = (_preventedKeys = {}, _preventedKeys[enter] = true, _preventedKeys[tab] = true, _preventedKeys);
	var preventStandardKeyEvents = (function (event) {
	  if (preventedKeys[event.keyCode]) {
	    event.preventDefault();
	  }
	});
	
	var getOptions = function getOptions(shared, fromBinding) {
	  return _extends({}, shared, fromBinding);
	};
	
	var bindEvents = function bindEvents(el, bindings, sharedOptions) {
	  bindings.forEach(function (binding) {
	    var options = getOptions(sharedOptions, binding.options);
	    el.addEventListener(binding.eventName, binding.fn, options);
	  });
	};
	var unbindEvents = function unbindEvents(el, bindings, sharedOptions) {
	  bindings.forEach(function (binding) {
	    var options = getOptions(sharedOptions, binding.options);
	    el.removeEventListener(binding.eventName, binding.fn, options);
	  });
	};
	
	var sharedOptions = {
	  capture: true
	};
	var createPostDragEventPreventer = (function (getWindow) {
	  var isBound = false;
	
	  var bind = function bind() {
	    if (isBound) {
	      return;
	    }
	
	    isBound = true;
	    bindEvents(getWindow(), pointerEvents, sharedOptions);
	  };
	
	  var unbind = function unbind() {
	    if (!isBound) {
	      return;
	    }
	
	    isBound = false;
	    unbindEvents(getWindow(), pointerEvents, sharedOptions);
	  };
	
	  var pointerEvents = [{
	    eventName: 'click',
	    fn: function fn(event) {
	      event.preventDefault();
	      unbind();
	    }
	  }, {
	    eventName: 'mousedown',
	    fn: unbind
	  }, {
	    eventName: 'touchstart',
	    fn: unbind
	  }];
	
	  var preventNext = function preventNext() {
	    if (isBound) {
	      unbind();
	    }
	
	    bind();
	  };
	
	  var preventer = {
	    preventNext: preventNext,
	    abort: unbind
	  };
	  return preventer;
	});
	
	var createEventMarshal = (function () {
	  var isMouseDownHandled = false;
	
	  var handle = function handle() {
	    !!isMouseDownHandled ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot handle mouse down as it is already handled') : invariant(false) : void 0;
	    isMouseDownHandled = true;
	  };
	
	  var isHandled = function isHandled() {
	    return isMouseDownHandled;
	  };
	
	  var reset = function reset() {
	    isMouseDownHandled = false;
	  };
	
	  return {
	    handle: handle,
	    isHandled: isHandled,
	    reset: reset
	  };
	});
	
	var supportedEventName = function () {
	  var base = 'visibilitychange';
	
	  if (typeof document === 'undefined') {
	    return base;
	  }
	
	  var candidates = [base, "ms" + base, "webkit" + base, "moz" + base, "o" + base];
	  var supported = candidates.find(function (eventName) {
	    return "on" + eventName in document;
	  });
	  return supported || base;
	}();
	
	var primaryButton = 0;
	
	var noop = function noop() {};
	
	var mouseDownMarshal = createEventMarshal();
	var createMouseSensor = (function (_ref) {
	  var callbacks = _ref.callbacks,
	      getWindow = _ref.getWindow,
	      canStartCapturing = _ref.canStartCapturing;
	  var state = {
	    isDragging: false,
	    pending: null
	  };
	
	  var setState = function setState(newState) {
	    state = newState;
	  };
	
	  var isDragging = function isDragging() {
	    return state.isDragging;
	  };
	
	  var isCapturing = function isCapturing() {
	    return Boolean(state.pending || state.isDragging);
	  };
	
	  var schedule = createScheduler(callbacks);
	  var postDragEventPreventer = createPostDragEventPreventer(getWindow);
	
	  var startDragging = function startDragging(fn) {
	    if (fn === void 0) {
	      fn = noop;
	    }
	
	    setState({
	      pending: null,
	      isDragging: true
	    });
	    fn();
	  };
	
	  var stopDragging = function stopDragging(fn, shouldBlockClick) {
	    if (fn === void 0) {
	      fn = noop;
	    }
	
	    if (shouldBlockClick === void 0) {
	      shouldBlockClick = true;
	    }
	
	    schedule.cancel();
	    unbindWindowEvents();
	    mouseDownMarshal.reset();
	
	    if (shouldBlockClick) {
	      postDragEventPreventer.preventNext();
	    }
	
	    setState({
	      isDragging: false,
	      pending: null
	    });
	    fn();
	  };
	
	  var startPendingDrag = function startPendingDrag(point) {
	    setState({
	      pending: point,
	      isDragging: false
	    });
	    bindWindowEvents();
	  };
	
	  var stopPendingDrag = function stopPendingDrag() {
	    stopDragging(noop, false);
	  };
	
	  var kill = function kill(fn) {
	    if (fn === void 0) {
	      fn = noop;
	    }
	
	    if (state.pending) {
	      stopPendingDrag();
	      return;
	    }
	
	    stopDragging(fn);
	  };
	
	  var unmount = function unmount() {
	    kill();
	    postDragEventPreventer.abort();
	  };
	
	  var cancel = function cancel() {
	    kill(callbacks.onCancel);
	  };
	
	  var windowBindings = [{
	    eventName: 'mousemove',
	    fn: function fn(event) {
	      var button = event.button,
	          clientX = event.clientX,
	          clientY = event.clientY;
	
	      if (button !== primaryButton) {
	        return;
	      }
	
	      var point = {
	        x: clientX,
	        y: clientY
	      };
	
	      if (state.isDragging) {
	        event.preventDefault();
	        schedule.move(point);
	        return;
	      }
	
	      if (!state.pending) {
	        kill();
	        process.env.NODE_ENV !== "production" ? invariant(false, 'Expected there to be a pending drag') : invariant(false);
	      }
	
	      if (!isSloppyClickThresholdExceeded(state.pending, point)) {
	        return;
	      }
	
	      event.preventDefault();
	      startDragging(function () {
	        return callbacks.onLift({
	          clientSelection: point,
	          autoScrollMode: 'FLUID'
	        });
	      });
	    }
	  }, {
	    eventName: 'mouseup',
	    fn: function fn(event) {
	      if (state.pending) {
	        stopPendingDrag();
	        return;
	      }
	
	      event.preventDefault();
	      stopDragging(callbacks.onDrop);
	    }
	  }, {
	    eventName: 'mousedown',
	    fn: function fn(event) {
	      if (state.isDragging) {
	        event.preventDefault();
	      }
	
	      stopDragging(callbacks.onCancel);
	    }
	  }, {
	    eventName: 'keydown',
	    fn: function fn(event) {
	      if (!state.isDragging) {
	        cancel();
	        return;
	      }
	
	      if (event.keyCode === escape) {
	        event.preventDefault();
	        cancel();
	        return;
	      }
	
	      preventStandardKeyEvents(event);
	    }
	  }, {
	    eventName: 'resize',
	    fn: cancel
	  }, {
	    eventName: 'scroll',
	    options: {
	      passive: true,
	      capture: false
	    },
	    fn: function fn() {
	      if (state.pending) {
	        stopPendingDrag();
	        return;
	      }
	
	      schedule.windowScrollMove();
	    }
	  }, {
	    eventName: 'webkitmouseforcechanged',
	    fn: function fn(event) {
	      if (event.webkitForce == null || MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN == null) {
	        if (process.env.NODE_ENV !== 'production') {
	          console.warn('handling a mouse force changed event when it is not supported');
	        }
	
	        return;
	      }
	
	      var forcePressThreshold = MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN;
	      var isForcePressing = event.webkitForce >= forcePressThreshold;
	
	      if (isForcePressing) {
	        cancel();
	      }
	    }
	  }, {
	    eventName: supportedEventName,
	    fn: cancel
	  }];
	
	  var bindWindowEvents = function bindWindowEvents() {
	    var win = getWindow();
	    bindEvents(win, windowBindings, {
	      capture: true
	    });
	  };
	
	  var unbindWindowEvents = function unbindWindowEvents() {
	    var win = getWindow();
	    unbindEvents(win, windowBindings, {
	      capture: true
	    });
	  };
	
	  var onMouseDown = function onMouseDown(event) {
	    if (mouseDownMarshal.isHandled()) {
	      return;
	    }
	
	    !!isCapturing() ? process.env.NODE_ENV !== "production" ? invariant(false, 'Should not be able to perform a mouse down while a drag or pending drag is occurring') : invariant(false) : void 0;
	
	    if (!canStartCapturing(event)) {
	      return;
	    }
	
	    if (event.button !== primaryButton) {
	      return;
	    }
	
	    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
	      return;
	    }
	
	    mouseDownMarshal.handle();
	    event.preventDefault();
	    var point = {
	      x: event.clientX,
	      y: event.clientY
	    };
	    startPendingDrag(point);
	  };
	
	  var sensor = {
	    onMouseDown: onMouseDown,
	    kill: kill,
	    isCapturing: isCapturing,
	    isDragging: isDragging,
	    unmount: unmount
	  };
	  return sensor;
	});
	
	var getBorderBoxCenterPosition = (function (el) {
	  return cssBoxModel.getRect(el.getBoundingClientRect()).center;
	});
	
	var _scrollJumpKeys;
	var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end] = true, _scrollJumpKeys);
	
	var noop$1 = function noop() {};
	
	var createKeyboardSensor = (function (_ref) {
	  var callbacks = _ref.callbacks,
	      getWindow = _ref.getWindow,
	      getDraggableRef = _ref.getDraggableRef,
	      canStartCapturing = _ref.canStartCapturing;
	  var state = {
	    isDragging: false
	  };
	
	  var setState = function setState(newState) {
	    state = newState;
	  };
	
	  var startDragging = function startDragging(fn) {
	    if (fn === void 0) {
	      fn = noop$1;
	    }
	
	    setState({
	      isDragging: true
	    });
	    bindWindowEvents();
	    fn();
	  };
	
	  var stopDragging = function stopDragging(fn) {
	    if (fn === void 0) {
	      fn = noop$1;
	    }
	
	    schedule.cancel();
	    unbindWindowEvents();
	    setState({
	      isDragging: false
	    });
	    fn();
	  };
	
	  var kill = function kill() {
	    return stopDragging();
	  };
	
	  var cancel = function cancel() {
	    stopDragging(callbacks.onCancel);
	  };
	
	  var isDragging = function isDragging() {
	    return state.isDragging;
	  };
	
	  var schedule = createScheduler(callbacks);
	
	  var onKeyDown = function onKeyDown(event) {
	    if (!isDragging()) {
	      if (event.defaultPrevented) {
	        return;
	      }
	
	      if (!canStartCapturing(event)) {
	        return;
	      }
	
	      if (event.keyCode !== space) {
	        return;
	      }
	
	      var ref = getDraggableRef();
	      !ref ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot start a keyboard drag without a draggable ref') : invariant(false) : void 0;
	      var center = getBorderBoxCenterPosition(ref);
	      event.preventDefault();
	      startDragging(function () {
	        return callbacks.onLift({
	          clientSelection: center,
	          autoScrollMode: 'JUMP'
	        });
	      });
	      return;
	    }
	
	    if (event.keyCode === escape) {
	      event.preventDefault();
	      cancel();
	      return;
	    }
	
	    if (event.keyCode === space) {
	      event.preventDefault();
	      stopDragging(callbacks.onDrop);
	      return;
	    }
	
	    if (event.keyCode === arrowDown) {
	      event.preventDefault();
	      schedule.moveDown();
	      return;
	    }
	
	    if (event.keyCode === arrowUp) {
	      event.preventDefault();
	      schedule.moveUp();
	      return;
	    }
	
	    if (event.keyCode === arrowRight) {
	      event.preventDefault();
	      schedule.moveRight();
	      return;
	    }
	
	    if (event.keyCode === arrowLeft) {
	      event.preventDefault();
	      schedule.moveLeft();
	      return;
	    }
	
	    if (scrollJumpKeys[event.keyCode]) {
	      event.preventDefault();
	      return;
	    }
	
	    preventStandardKeyEvents(event);
	  };
	
	  var windowBindings = [{
	    eventName: 'mousedown',
	    fn: cancel
	  }, {
	    eventName: 'mouseup',
	    fn: cancel
	  }, {
	    eventName: 'click',
	    fn: cancel
	  }, {
	    eventName: 'touchstart',
	    fn: cancel
	  }, {
	    eventName: 'resize',
	    fn: cancel
	  }, {
	    eventName: 'wheel',
	    fn: cancel
	  }, {
	    eventName: 'scroll',
	    options: {
	      capture: false
	    },
	    fn: callbacks.onWindowScroll
	  }, {
	    eventName: supportedEventName,
	    fn: cancel
	  }];
	
	  var bindWindowEvents = function bindWindowEvents() {
	    bindEvents(getWindow(), windowBindings, {
	      capture: true
	    });
	  };
	
	  var unbindWindowEvents = function unbindWindowEvents() {
	    unbindEvents(getWindow(), windowBindings, {
	      capture: true
	    });
	  };
	
	  var sensor = {
	    onKeyDown: onKeyDown,
	    kill: kill,
	    isDragging: isDragging,
	    isCapturing: isDragging,
	    unmount: kill
	  };
	  return sensor;
	});
	
	var timeForLongPress = 150;
	var forcePressThreshold = 0.15;
	var touchStartMarshal = createEventMarshal();
	
	var noop$2 = function noop() {};
	
	var webkitHack = function () {
	  var stub = {
	    preventTouchMove: noop$2,
	    releaseTouchMove: noop$2
	  };
	
	  if (typeof window === 'undefined') {
	    return stub;
	  }
	
	  if (!('ontouchstart' in window)) {
	    return stub;
	  }
	
	  var isBlocking = false;
	  window.addEventListener('touchmove', function (event) {
	    if (!isBlocking) {
	      return;
	    }
	
	    if (event.defaultPrevented) {
	      return;
	    }
	
	    event.preventDefault();
	  }, {
	    passive: false,
	    capture: false
	  });
	
	  var preventTouchMove = function preventTouchMove() {
	    isBlocking = true;
	  };
	
	  var releaseTouchMove = function releaseTouchMove() {
	    isBlocking = false;
	  };
	
	  return {
	    preventTouchMove: preventTouchMove,
	    releaseTouchMove: releaseTouchMove
	  };
	}();
	
	var initial = {
	  isDragging: false,
	  pending: null,
	  hasMoved: false,
	  longPressTimerId: null
	};
	var createTouchSensor = (function (_ref) {
	  var callbacks = _ref.callbacks,
	      getWindow = _ref.getWindow,
	      canStartCapturing = _ref.canStartCapturing;
	  var state = initial;
	
	  var setState = function setState(partial) {
	    state = _extends({}, state, partial);
	  };
	
	  var isDragging = function isDragging() {
	    return state.isDragging;
	  };
	
	  var isCapturing = function isCapturing() {
	    return Boolean(state.pending || state.isDragging || state.longPressTimerId);
	  };
	
	  var schedule = createScheduler(callbacks);
	  var postDragEventPreventer = createPostDragEventPreventer(getWindow);
	
	  var startDragging = function startDragging() {
	    var pending = state.pending;
	
	    if (!pending) {
	      kill();
	      process.env.NODE_ENV !== "production" ? invariant(false, 'cannot start a touch drag without a pending position') : invariant(false);
	    }
	
	    setState({
	      isDragging: true,
	      hasMoved: false,
	      pending: null,
	      longPressTimerId: null
	    });
	    callbacks.onLift({
	      clientSelection: pending,
	      autoScrollMode: 'FLUID'
	    });
	  };
	
	  var stopDragging = function stopDragging(fn) {
	    if (fn === void 0) {
	      fn = noop$2;
	    }
	
	    schedule.cancel();
	    touchStartMarshal.reset();
	    webkitHack.releaseTouchMove();
	    unbindWindowEvents();
	    postDragEventPreventer.preventNext();
	    setState(initial);
	    fn();
	  };
	
	  var startPendingDrag = function startPendingDrag(event) {
	    var touch = event.touches[0];
	    var clientX = touch.clientX,
	        clientY = touch.clientY;
	    var point = {
	      x: clientX,
	      y: clientY
	    };
	    var longPressTimerId = setTimeout(startDragging, timeForLongPress);
	    setState({
	      longPressTimerId: longPressTimerId,
	      pending: point,
	      isDragging: false,
	      hasMoved: false
	    });
	    bindWindowEvents();
	  };
	
	  var stopPendingDrag = function stopPendingDrag() {
	    if (state.longPressTimerId) {
	      clearTimeout(state.longPressTimerId);
	    }
	
	    schedule.cancel();
	    touchStartMarshal.reset();
	    webkitHack.releaseTouchMove();
	    unbindWindowEvents();
	    setState(initial);
	  };
	
	  var kill = function kill(fn) {
	    if (fn === void 0) {
	      fn = noop$2;
	    }
	
	    if (state.pending) {
	      stopPendingDrag();
	      return;
	    }
	
	    stopDragging(fn);
	  };
	
	  var unmount = function unmount() {
	    kill();
	    postDragEventPreventer.abort();
	  };
	
	  var cancel = function cancel() {
	    kill(callbacks.onCancel);
	  };
	
	  var windowBindings = [{
	    eventName: 'touchmove',
	    options: {
	      passive: false
	    },
	    fn: function fn(event) {
	      if (!state.isDragging) {
	        stopPendingDrag();
	        return;
	      }
	
	      if (!state.hasMoved) {
	        setState({
	          hasMoved: true
	        });
	      }
	
	      var _event$touches$ = event.touches[0],
	          clientX = _event$touches$.clientX,
	          clientY = _event$touches$.clientY;
	      var point = {
	        x: clientX,
	        y: clientY
	      };
	      event.preventDefault();
	      schedule.move(point);
	    }
	  }, {
	    eventName: 'touchend',
	    fn: function fn(event) {
	      if (!state.isDragging) {
	        stopPendingDrag();
	        return;
	      }
	
	      event.preventDefault();
	      stopDragging(callbacks.onDrop);
	    }
	  }, {
	    eventName: 'touchcancel',
	    fn: function fn(event) {
	      if (!state.isDragging) {
	        stopPendingDrag();
	        return;
	      }
	
	      event.preventDefault();
	      stopDragging(callbacks.onCancel);
	    }
	  }, {
	    eventName: 'touchstart',
	    fn: cancel
	  }, {
	    eventName: 'orientationchange',
	    fn: cancel
	  }, {
	    eventName: 'resize',
	    fn: cancel
	  }, {
	    eventName: 'scroll',
	    options: {
	      passive: true,
	      capture: false
	    },
	    fn: function fn() {
	      if (state.pending) {
	        stopPendingDrag();
	        return;
	      }
	
	      schedule.windowScrollMove();
	    }
	  }, {
	    eventName: 'contextmenu',
	    fn: function fn(event) {
	      event.preventDefault();
	    }
	  }, {
	    eventName: 'keydown',
	    fn: function fn(event) {
	      if (!state.isDragging) {
	        cancel();
	        return;
	      }
	
	      if (event.keyCode === escape) {
	        event.preventDefault();
	      }
	
	      cancel();
	    }
	  }, {
	    eventName: 'touchforcechange',
	    fn: function fn(event) {
	      if (state.hasMoved) {
	        event.preventDefault();
	        return;
	      }
	
	      var touch = event.touches[0];
	
	      if (touch.force >= forcePressThreshold) {
	        cancel();
	      }
	    }
	  }, {
	    eventName: supportedEventName,
	    fn: cancel
	  }];
	
	  var bindWindowEvents = function bindWindowEvents() {
	    bindEvents(getWindow(), windowBindings, {
	      capture: true
	    });
	  };
	
	  var unbindWindowEvents = function unbindWindowEvents() {
	    unbindEvents(getWindow(), windowBindings, {
	      capture: true
	    });
	  };
	
	  var onTouchStart = function onTouchStart(event) {
	    if (touchStartMarshal.isHandled()) {
	      return;
	    }
	
	    !!isCapturing() ? process.env.NODE_ENV !== "production" ? invariant(false, 'Should not be able to perform a touch start while a drag or pending drag is occurring') : invariant(false) : void 0;
	
	    if (!canStartCapturing(event)) {
	      return;
	    }
	
	    touchStartMarshal.handle();
	    webkitHack.preventTouchMove();
	    startPendingDrag(event);
	  };
	
	  var sensor = {
	    onTouchStart: onTouchStart,
	    kill: kill,
	    isCapturing: isCapturing,
	    isDragging: isDragging,
	    unmount: unmount
	  };
	  return sensor;
	});
	
	var _DragHandle$contextTy;
	
	var preventHtml5Dnd = function preventHtml5Dnd(event) {
	  event.preventDefault();
	};
	
	var DragHandle = function (_Component) {
	  _inheritsLoose(DragHandle, _Component);
	
	  function DragHandle(props, context) {
	    var _this;
	
	    _this = _Component.call(this, props, context) || this;
	    _this.mouseSensor = void 0;
	    _this.keyboardSensor = void 0;
	    _this.touchSensor = void 0;
	    _this.sensors = void 0;
	    _this.styleContext = void 0;
	    _this.canLift = void 0;
	    _this.isFocused = false;
	    _this.lastDraggableRef = void 0;
	
	    _this.onFocus = function () {
	      _this.isFocused = true;
	    };
	
	    _this.onBlur = function () {
	      _this.isFocused = false;
	    };
	
	    _this.onKeyDown = function (event) {
	      if (_this.mouseSensor.isCapturing() || _this.touchSensor.isCapturing()) {
	        return;
	      }
	
	      _this.keyboardSensor.onKeyDown(event);
	    };
	
	    _this.onMouseDown = function (event) {
	      if (_this.keyboardSensor.isCapturing() || _this.mouseSensor.isCapturing()) {
	        return;
	      }
	
	      _this.mouseSensor.onMouseDown(event);
	    };
	
	    _this.onTouchStart = function (event) {
	      if (_this.mouseSensor.isCapturing() || _this.keyboardSensor.isCapturing()) {
	        return;
	      }
	
	      _this.touchSensor.onTouchStart(event);
	    };
	
	    _this.canStartCapturing = function (event) {
	      if (_this.isAnySensorCapturing()) {
	        return false;
	      }
	
	      if (!_this.canLift(_this.props.draggableId)) {
	        return false;
	      }
	
	      return shouldAllowDraggingFromTarget(event, _this.props);
	    };
	
	    _this.isAnySensorCapturing = function () {
	      return _this.sensors.some(function (sensor) {
	        return sensor.isCapturing();
	      });
	    };
	
	    _this.getProvided = memoizeOne(function (isEnabled) {
	      if (!isEnabled) {
	        return null;
	      }
	
	      var provided = {
	        onMouseDown: _this.onMouseDown,
	        onKeyDown: _this.onKeyDown,
	        onTouchStart: _this.onTouchStart,
	        onFocus: _this.onFocus,
	        onBlur: _this.onBlur,
	        tabIndex: 0,
	        'data-react-beautiful-dnd-drag-handle': _this.styleContext,
	        'aria-roledescription': 'Draggable item. Press space bar to lift',
	        draggable: false,
	        onDragStart: preventHtml5Dnd
	      };
	      return provided;
	    });
	
	    var getWindow = function getWindow() {
	      return getWindowFromRef(_this.props.getDraggableRef());
	    };
	
	    var args = {
	      callbacks: _this.props.callbacks,
	      getDraggableRef: _this.props.getDraggableRef,
	      getWindow: getWindow,
	      canStartCapturing: _this.canStartCapturing
	    };
	    _this.mouseSensor = createMouseSensor(args);
	    _this.keyboardSensor = createKeyboardSensor(args);
	    _this.touchSensor = createTouchSensor(args);
	    _this.sensors = [_this.mouseSensor, _this.keyboardSensor, _this.touchSensor];
	    _this.styleContext = context[styleContextKey];
	    _this.canLift = context[canLiftContextKey];
	    return _this;
	  }
	
	  var _proto = DragHandle.prototype;
	
	  _proto.componentDidMount = function componentDidMount() {
	    var draggableRef = this.props.getDraggableRef();
	    this.lastDraggableRef = draggableRef;
	    !draggableRef ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot get draggable ref from drag handle') : invariant(false) : void 0;
	
	    if (!this.props.isEnabled) {
	      return;
	    }
	
	    var dragHandleRef = getDragHandleRef(draggableRef);
	    retainer.tryRestoreFocus(this.props.draggableId, dragHandleRef);
	  };
	
	  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var _this2 = this;
	
	    var ref = this.props.getDraggableRef();
	
	    if (ref !== this.lastDraggableRef) {
	      this.lastDraggableRef = ref;
	
	      if (!ref || !this.isFocused) {
	        return;
	      }
	
	      if (!this.props.isEnabled) {
	        return;
	      }
	
	      getDragHandleRef(ref).focus();
	    }
	
	    var isCapturing = this.isAnySensorCapturing();
	
	    if (!isCapturing) {
	      return;
	    }
	
	    var isDragStopping = prevProps.isDragging && !this.props.isDragging;
	
	    if (isDragStopping) {
	      this.sensors.forEach(function (sensor) {
	        if (sensor.isCapturing()) {
	          sensor.kill();
	        }
	      });
	    }
	
	    if (this.props.isEnabled) {
	      return;
	    }
	
	    this.sensors.forEach(function (sensor) {
	      if (!sensor.isCapturing()) {
	        return;
	      }
	
	      var wasDragging = sensor.isDragging();
	      sensor.kill();
	
	      if (wasDragging) {
	        if (process.env.NODE_ENV !== 'production') {
	          console.warn('You have disabled dragging on a Draggable while it was dragging. The drag has been cancelled');
	        }
	
	        _this2.props.callbacks.onCancel();
	      }
	    });
	  };
	
	  _proto.componentWillUnmount = function componentWillUnmount() {
	    var _this3 = this;
	
	    this.sensors.forEach(function (sensor) {
	      var wasDragging = sensor.isDragging();
	      sensor.unmount();
	
	      if (wasDragging) {
	        _this3.props.callbacks.onCancel();
	      }
	    });
	
	    var shouldRetainFocus = function () {
	      if (!_this3.props.isEnabled) {
	        return false;
	      }
	
	      if (!_this3.isFocused) {
	        return false;
	      }
	
	      return _this3.props.isDragging || _this3.props.isDropAnimating;
	    }();
	
	    if (shouldRetainFocus) {
	      retainer.retain(this.props.draggableId);
	    }
	  };
	
	  _proto.render = function render() {
	    var _this$props = this.props,
	        children = _this$props.children,
	        isEnabled = _this$props.isEnabled;
	    return children(this.getProvided(isEnabled));
	  };
	
	  return DragHandle;
	}(React.Component);
	
	DragHandle.contextTypes = (_DragHandle$contextTy = {}, _DragHandle$contextTy[styleContextKey] = PropTypes.string.isRequired, _DragHandle$contextTy[canLiftContextKey] = PropTypes.func.isRequired, _DragHandle$contextTy);
	
	var getWindowScroll = (function () {
	  return {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  };
	});
	
	var getViewport = (function () {
	  var scroll = getWindowScroll();
	  var top = scroll.y;
	  var left = scroll.x;
	  var doc = document.documentElement;
	  !doc ? process.env.NODE_ENV !== "production" ? invariant(false, 'Could not find document.documentElement') : invariant(false) : void 0;
	  var width = doc.clientWidth;
	  var height = doc.clientHeight;
	  var right = left + width;
	  var bottom = top + height;
	  var frame = cssBoxModel.getRect({
	    top: top,
	    left: left,
	    right: right,
	    bottom: bottom
	  });
	  var maxScroll = getMaxScroll({
	    scrollHeight: doc.scrollHeight,
	    scrollWidth: doc.scrollWidth,
	    width: frame.width,
	    height: frame.height
	  });
	  var viewport = {
	    frame: frame,
	    scroll: {
	      initial: scroll,
	      current: scroll,
	      max: maxScroll,
	      diff: {
	        value: origin,
	        displacement: origin
	      }
	    }
	  };
	  return viewport;
	});
	
	var _Draggable$contextTyp;
	var zIndexOptions = {
	  dragging: 5000,
	  dropAnimating: 4500
	};
	
	var getTranslate = function getTranslate(offset) {
	  if (isEqual(offset, origin)) {
	    return null;
	  }
	
	  return "translate(" + offset.x + "px, " + offset.y + "px)";
	};
	
	var getSpeed$1 = function getSpeed(isDragging, shouldAnimateDragMovement, isDropAnimating) {
	  if (isDropAnimating) {
	    return 'STANDARD';
	  }
	
	  if (isDragging && shouldAnimateDragMovement) {
	    return 'FAST';
	  }
	
	  return 'INSTANT';
	};
	
	var Draggable = function (_Component) {
	  _inheritsLoose(Draggable, _Component);
	
	  function Draggable(props, context) {
	    var _this;
	
	    _this = _Component.call(this, props, context) || this;
	    _this.callbacks = void 0;
	    _this.styleContext = void 0;
	    _this.ref = null;
	
	    _this.onMoveEnd = function () {
	      if (_this.props.isDropAnimating) {
	        _this.props.dropAnimationFinished();
	      }
	    };
	
	    _this.onLift = function (options) {
	      start('LIFT');
	      var ref = _this.ref;
	      !ref ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
	      !!_this.props.isDragDisabled ? process.env.NODE_ENV !== "production" ? invariant(false, 'Cannot lift a Draggable when it is disabled') : invariant(false) : void 0;
	      var clientSelection = options.clientSelection,
	          autoScrollMode = options.autoScrollMode;
	      var _this$props = _this.props,
	          lift = _this$props.lift,
	          draggableId = _this$props.draggableId;
	      var client = {
	        selection: clientSelection,
	        borderBoxCenter: getBorderBoxCenterPosition(ref),
	        offset: origin
	      };
	      lift({
	        id: draggableId,
	        client: client,
	        autoScrollMode: autoScrollMode,
	        viewport: getViewport()
	      });
	      finish('LIFT');
	    };
	
	    _this.setRef = function (ref) {
	      if (ref === null) {
	        return;
	      }
	
	      if (ref === _this.ref) {
	        return;
	      }
	
	      _this.ref = ref;
	      throwIfRefIsInvalid(ref);
	    };
	
	    _this.getDraggableRef = function () {
	      return _this.ref;
	    };
	
	    _this.getDraggingStyle = memoizeOne(function (change, dimension, isDropAnimating) {
	      var box = dimension.client;
	      var style = {
	        position: 'fixed',
	        top: box.marginBox.top,
	        left: box.marginBox.left,
	        boxSizing: 'border-box',
	        width: box.borderBox.width,
	        height: box.borderBox.height,
	        transition: 'none',
	        zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
	        transform: getTranslate(change),
	        pointerEvents: 'none'
	      };
	      return style;
	    });
	    _this.getNotDraggingStyle = memoizeOne(function (current, shouldAnimateDisplacement) {
	      var style = {
	        transform: getTranslate(current),
	        transition: shouldAnimateDisplacement ? null : 'none'
	      };
	      return style;
	    });
	    _this.getProvided = memoizeOne(function (change, isDragging, isDropAnimating, shouldAnimateDisplacement, dimension, dragHandleProps) {
	      var useDraggingStyle = isDragging || isDropAnimating;
	
	      var draggableStyle = function () {
	        if (!useDraggingStyle) {
	          return _this.getNotDraggingStyle(change, shouldAnimateDisplacement);
	        }
	
	        !dimension ? process.env.NODE_ENV !== "production" ? invariant(false, 'draggable dimension required for dragging') : invariant(false) : void 0;
	        return _this.getDraggingStyle(change, dimension, isDropAnimating);
	      }();
	
	      var provided = {
	        innerRef: _this.setRef,
	        draggableProps: {
	          'data-react-beautiful-dnd-draggable': _this.styleContext,
	          style: draggableStyle
	        },
	        dragHandleProps: dragHandleProps
	      };
	      return provided;
	    });
	    _this.getSnapshot = memoizeOne(function (isDragging, isDropAnimating, draggingOver) {
	      return {
	        isDragging: isDragging || isDropAnimating,
	        isDropAnimating: isDropAnimating,
	        draggingOver: draggingOver
	      };
	    });
	
	    _this.renderChildren = function (change, dragHandleProps) {
	      var _this$props2 = _this.props,
	          isDragging = _this$props2.isDragging,
	          isDropAnimating = _this$props2.isDropAnimating,
	          dimension = _this$props2.dimension,
	          draggingOver = _this$props2.draggingOver,
	          shouldAnimateDisplacement = _this$props2.shouldAnimateDisplacement,
	          children = _this$props2.children;
	      var child = children(_this.getProvided(change, isDragging, isDropAnimating, shouldAnimateDisplacement, dimension, dragHandleProps), _this.getSnapshot(isDragging, isDropAnimating, draggingOver));
	      var isDraggingOrDropping = isDragging || isDropAnimating;
	
	      var placeholder = function () {
	        if (!isDraggingOrDropping) {
	          return null;
	        }
	
	        !dimension ? process.env.NODE_ENV !== "production" ? invariant(false, 'Draggable: Dimension is required for dragging') : invariant(false) : void 0;
	        return React__default.createElement(Placeholder, {
	          placeholder: dimension.placeholder
	        });
	      }();
	
	      return React__default.createElement(React.Fragment, null, child, placeholder);
	    };
	
	    var callbacks = {
	      onLift: _this.onLift,
	      onMove: function onMove(clientSelection) {
	        return props.move({
	          client: clientSelection,
	          shouldAnimate: false
	        });
	      },
	      onDrop: function onDrop() {
	        return props.drop({
	          reason: 'DROP'
	        });
	      },
	      onCancel: function onCancel() {
	        return props.drop({
	          reason: 'CANCEL'
	        });
	      },
	      onMoveUp: props.moveUp,
	      onMoveDown: props.moveDown,
	      onMoveRight: props.moveRight,
	      onMoveLeft: props.moveLeft,
	      onWindowScroll: function onWindowScroll() {
	        return props.moveByWindowScroll({
	          scroll: getWindowScroll()
	        });
	      }
	    };
	    _this.callbacks = callbacks;
	    _this.styleContext = context[styleContextKey];
	    return _this;
	  }
	
	  var _proto = Draggable.prototype;
	
	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.ref = null;
	  };
	
	  _proto.render = function render() {
	    var _this2 = this;
	
	    var _this$props3 = this.props,
	        draggableId = _this$props3.draggableId,
	        index = _this$props3.index,
	        offset = _this$props3.offset,
	        isDragging = _this$props3.isDragging,
	        isDropAnimating = _this$props3.isDropAnimating,
	        isDragDisabled = _this$props3.isDragDisabled,
	        shouldAnimateDragMovement = _this$props3.shouldAnimateDragMovement,
	        disableInteractiveElementBlocking = _this$props3.disableInteractiveElementBlocking;
	    var droppableId = this.context[droppableIdKey];
	    var type = this.context[droppableTypeKey];
	    var speed = getSpeed$1(isDragging, shouldAnimateDragMovement, isDropAnimating);
	    return React__default.createElement(DraggableDimensionPublisher, {
	      key: draggableId,
	      draggableId: draggableId,
	      droppableId: droppableId,
	      type: type,
	      index: index,
	      getDraggableRef: this.getDraggableRef
	    }, React__default.createElement(Moveable, {
	      speed: speed,
	      destination: offset,
	      onMoveEnd: this.onMoveEnd
	    }, function (change) {
	      return React__default.createElement(DragHandle, {
	        draggableId: draggableId,
	        isDragging: isDragging,
	        isDropAnimating: isDropAnimating,
	        isEnabled: !isDragDisabled,
	        callbacks: _this2.callbacks,
	        getDraggableRef: _this2.getDraggableRef,
	        canDragInteractiveElements: disableInteractiveElementBlocking
	      }, function (dragHandleProps) {
	        return _this2.renderChildren(change, dragHandleProps);
	      });
	    }));
	  };
	
	  return Draggable;
	}(React.Component);
	
	Draggable.contextTypes = (_Draggable$contextTyp = {}, _Draggable$contextTyp[droppableIdKey] = PropTypes.string.isRequired, _Draggable$contextTyp[droppableTypeKey] = PropTypes.string.isRequired, _Draggable$contextTyp[styleContextKey] = PropTypes.string.isRequired, _Draggable$contextTyp);
	
	var defaultMapProps = {
	  isDropAnimating: false,
	  isDragging: false,
	  offset: origin,
	  shouldAnimateDragMovement: false,
	  shouldAnimateDisplacement: true,
	  dimension: null,
	  draggingOver: null
	};
	var makeMapStateToProps$1 = function makeMapStateToProps() {
	  var memoizedOffset = memoizeOne(function (x, y) {
	    return {
	      x: x,
	      y: y
	    };
	  });
	  var getNotDraggingProps = memoizeOne(function (offset, shouldAnimateDisplacement) {
	    return {
	      isDropAnimating: false,
	      isDragging: false,
	      offset: offset,
	      shouldAnimateDisplacement: shouldAnimateDisplacement,
	      shouldAnimateDragMovement: false,
	      dimension: null,
	      draggingOver: null
	    };
	  });
	  var getDraggingProps = memoizeOne(function (offset, shouldAnimateDragMovement, dimension, draggingOver) {
	    return {
	      isDragging: true,
	      isDropAnimating: false,
	      shouldAnimateDisplacement: false,
	      offset: offset,
	      shouldAnimateDragMovement: shouldAnimateDragMovement,
	      dimension: dimension,
	      draggingOver: draggingOver
	    };
	  });
	
	  var getOutOfTheWayMovement = function getOutOfTheWayMovement(id, movement) {
	    var map = getDisplacementMap(movement.displaced);
	    var displacement = map[id];
	
	    if (!displacement) {
	      return null;
	    }
	
	    if (!displacement.isVisible) {
	      return null;
	    }
	
	    var amount = movement.isBeyondStartPosition ? negate(movement.amount) : movement.amount;
	    return getNotDraggingProps(memoizedOffset(amount.x, amount.y), displacement.shouldAnimate);
	  };
	
	  var draggingSelector = function draggingSelector(state, ownProps) {
	    if (state.isDragging) {
	      if (state.critical.draggable.id !== ownProps.draggableId) {
	        return null;
	      }
	
	      var offset = state.current.client.offset;
	      var dimension = state.dimensions.draggables[ownProps.draggableId];
	      var shouldAnimateDragMovement = state.shouldAnimate;
	      var draggingOver = state.impact.destination ? state.impact.destination.droppableId : null;
	      return getDraggingProps(memoizedOffset(offset.x, offset.y), shouldAnimateDragMovement, dimension, draggingOver);
	    }
	
	    if (state.phase === 'DROP_ANIMATING') {
	      var pending = state.pending;
	
	      if (pending.result.draggableId !== ownProps.draggableId) {
	        return null;
	      }
	
	      var _draggingOver = pending.result.destination ? pending.result.destination.droppableId : null;
	
	      return {
	        isDragging: false,
	        isDropAnimating: true,
	        offset: pending.newHomeOffset,
	        dimension: state.dimensions.draggables[ownProps.draggableId],
	        draggingOver: _draggingOver,
	        shouldAnimateDragMovement: false,
	        shouldAnimateDisplacement: false
	      };
	    }
	
	    return null;
	  };
	
	  var movingOutOfTheWaySelector = function movingOutOfTheWaySelector(state, ownProps) {
	    if (state.isDragging) {
	      if (state.critical.draggable.id === ownProps.draggableId) {
	        return null;
	      }
	
	      return getOutOfTheWayMovement(ownProps.draggableId, state.impact.movement);
	    }
	
	    if (state.phase === 'DROP_ANIMATING') {
	      if (state.pending.result.draggableId === ownProps.draggableId) {
	        return null;
	      }
	
	      return getOutOfTheWayMovement(ownProps.draggableId, state.pending.impact.movement);
	    }
	
	    return null;
	  };
	
	  var selector = function selector(state, ownProps) {
	    var dragging = draggingSelector(state, ownProps);
	
	    if (dragging) {
	      return dragging;
	    }
	
	    var movingOutOfTheWay = movingOutOfTheWaySelector(state, ownProps);
	
	    if (movingOutOfTheWay) {
	      return movingOutOfTheWay;
	    }
	
	    return defaultMapProps;
	  };
	
	  return selector;
	};
	var mapDispatchToProps = {
	  lift: lift,
	  move: move,
	  moveUp: moveUp,
	  moveDown: moveDown,
	  moveLeft: moveLeft,
	  moveRight: moveRight,
	  moveByWindowScroll: moveByWindowScroll,
	  drop: drop,
	  dropAnimationFinished: dropAnimationFinished
	};
	var ConnectedDraggable = reactRedux.connect(makeMapStateToProps$1, mapDispatchToProps, null, {
	  storeKey: storeKey,
	  pure: true,
	  areStatePropsEqual: isStrictEqual
	})(Draggable);
	ConnectedDraggable.defaultProps = {
	  isDragDisabled: false,
	  disableInteractiveElementBlocking: false
	};
	
	exports.DragDropContext = DragDropContext;
	exports.Droppable = connectedDroppable;
	exports.Draggable = ConnectedDraggable;
	exports.resetServerContext = resetServerContext;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var _Object$assign = __webpack_require__(85);
	
	function _extends() {
	  module.exports = _extends = _Object$assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];
	
	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }
	
	    return target;
	  };
	
	  return _extends.apply(this, arguments);
	}
	
	module.exports = _extends;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(86);

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(87);
	module.exports = __webpack_require__(90).Object.assign;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(88);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(104) });


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(89);
	var core = __webpack_require__(90);
	var ctx = __webpack_require__(91);
	var hide = __webpack_require__(93);
	var has = __webpack_require__(103);
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 90 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.7' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(92);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 92 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(94);
	var createDesc = __webpack_require__(102);
	module.exports = __webpack_require__(98) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(95);
	var IE8_DOM_DEFINE = __webpack_require__(97);
	var toPrimitive = __webpack_require__(101);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(98) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(96);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 96 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(98) && !__webpack_require__(99)(function () {
	  return Object.defineProperty(__webpack_require__(100)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(99)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 99 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(96);
	var document = __webpack_require__(89).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(96);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 102 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 103 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(105);
	var gOPS = __webpack_require__(120);
	var pIE = __webpack_require__(121);
	var toObject = __webpack_require__(122);
	var IObject = __webpack_require__(108);
	var $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(99)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(106);
	var enumBugKeys = __webpack_require__(119);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(103);
	var toIObject = __webpack_require__(107);
	var arrayIndexOf = __webpack_require__(111)(false);
	var IE_PROTO = __webpack_require__(115)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(108);
	var defined = __webpack_require__(110);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(109);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 109 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 110 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(107);
	var toLength = __webpack_require__(112);
	var toAbsoluteIndex = __webpack_require__(114);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(113);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 113 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(113);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(116)('keys');
	var uid = __webpack_require__(118);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(90);
	var global = __webpack_require__(89);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	
	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: core.version,
	  mode: __webpack_require__(117) ? 'pure' : 'global',
	  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
	});


/***/ }),
/* 117 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 119 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 120 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(110);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var isProduction = process.env.NODE_ENV === 'production';
	var prefix = 'Invariant failed';
	function invariant(condition, message) {
	  if (condition) {
	    return;
	  }
	
	  if (isProduction) {
	    throw new Error(prefix);
	  } else {
	    throw new Error(prefix + ": " + (message || ''));
	  }
	}
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var invariant = _interopDefault(__webpack_require__(123));
	
	var getRect = function getRect(_ref) {
	  var top = _ref.top,
	      right = _ref.right,
	      bottom = _ref.bottom,
	      left = _ref.left;
	  var width = right - left;
	  var height = bottom - top;
	  var rect = {
	    top: top,
	    right: right,
	    bottom: bottom,
	    left: left,
	    width: width,
	    height: height,
	    x: left,
	    y: top,
	    center: {
	      x: (right + left) / 2,
	      y: (bottom + top) / 2
	    }
	  };
	  return rect;
	};
	var expand = function expand(target, expandBy) {
	  return {
	    top: target.top - expandBy.top,
	    left: target.left - expandBy.left,
	    bottom: target.bottom + expandBy.bottom,
	    right: target.right + expandBy.right
	  };
	};
	var shrink = function shrink(target, shrinkBy) {
	  return {
	    top: target.top + shrinkBy.top,
	    left: target.left + shrinkBy.left,
	    bottom: target.bottom - shrinkBy.bottom,
	    right: target.right - shrinkBy.right
	  };
	};
	
	var shift = function shift(target, shiftBy) {
	  return {
	    top: target.top + shiftBy.y,
	    left: target.left + shiftBy.x,
	    bottom: target.bottom + shiftBy.y,
	    right: target.right + shiftBy.x
	  };
	};
	
	var noSpacing = {
	  top: 0,
	  right: 0,
	  bottom: 0,
	  left: 0
	};
	var createBox = function createBox(_ref2) {
	  var borderBox = _ref2.borderBox,
	      _ref2$margin = _ref2.margin,
	      margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin,
	      _ref2$border = _ref2.border,
	      border = _ref2$border === void 0 ? noSpacing : _ref2$border,
	      _ref2$padding = _ref2.padding,
	      padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
	  var marginBox = getRect(expand(borderBox, margin));
	  var paddingBox = getRect(shrink(borderBox, border));
	  var contentBox = getRect(shrink(paddingBox, padding));
	  return {
	    marginBox: marginBox,
	    borderBox: getRect(borderBox),
	    paddingBox: paddingBox,
	    contentBox: contentBox,
	    margin: margin,
	    border: border,
	    padding: padding
	  };
	};
	
	var parse = function parse(raw) {
	  var value = raw.slice(0, -2);
	  var suffix = raw.slice(-2);
	  !(suffix === 'px') ? process.env.NODE_ENV !== "production" ? invariant(false, "Expected value to be a pixel value.\n      Expected form: 10px\n      Actual value: " + raw + "\n    ") : invariant(false) : void 0;
	  var result = Number(value);
	  !!isNaN(result) ? process.env.NODE_ENV !== "production" ? invariant(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : invariant(false) : void 0;
	  return result;
	};
	
	var getWindowScroll = function getWindowScroll() {
	  return {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  };
	};
	
	var offset = function offset(original, change) {
	  var borderBox = original.borderBox,
	      border = original.border,
	      margin = original.margin,
	      padding = original.padding;
	  var shifted = shift(borderBox, change);
	  return createBox({
	    borderBox: shifted,
	    border: border,
	    margin: margin,
	    padding: padding
	  });
	};
	var withScroll = function withScroll(original, scroll) {
	  if (scroll === void 0) {
	    scroll = getWindowScroll();
	  }
	
	  return offset(original, scroll);
	};
	var calculateBox = function calculateBox(borderBox, styles) {
	  var margin = {
	    top: parse(styles.marginTop),
	    right: parse(styles.marginRight),
	    bottom: parse(styles.marginBottom),
	    left: parse(styles.marginLeft)
	  };
	  var padding = {
	    top: parse(styles.paddingTop),
	    right: parse(styles.paddingRight),
	    bottom: parse(styles.paddingBottom),
	    left: parse(styles.paddingLeft)
	  };
	  var border = {
	    top: parse(styles.borderTopWidth),
	    right: parse(styles.borderRightWidth),
	    bottom: parse(styles.borderBottomWidth),
	    left: parse(styles.borderLeftWidth)
	  };
	  return createBox({
	    borderBox: borderBox,
	    margin: margin,
	    padding: padding,
	    border: border
	  });
	};
	var getBox = function getBox(el) {
	  var borderBox = el.getBoundingClientRect();
	  var styles = window.getComputedStyle(el);
	  return calculateBox(borderBox, styles);
	};
	
	exports.getRect = getRect;
	exports.expand = expand;
	exports.shrink = shrink;
	exports.createBox = createBox;
	exports.offset = offset;
	exports.withScroll = withScroll;
	exports.calculateBox = calculateBox;
	exports.getBox = getBox;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(126);

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(127);
	module.exports = __webpack_require__(90).Object.keys;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(122);
	var $keys = __webpack_require__(105);
	
	__webpack_require__(128)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(88);
	var core = __webpack_require__(90);
	var fails = __webpack_require__(99);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 129 */
/***/ (function(module, exports) {

	'use strict';
	
	var simpleIsEqual = function simpleIsEqual(a, b) {
	  return a === b;
	};
	
	function index (resultFn, isEqual) {
	  if (isEqual === void 0) {
	    isEqual = simpleIsEqual;
	  }
	
	  var lastThis;
	  var lastArgs = [];
	  var lastResult;
	  var calledOnce = false;
	
	  var isNewArgEqualToLast = function isNewArgEqualToLast(newArg, index) {
	    return isEqual(newArg, lastArgs[index]);
	  };
	
	  var result = function result() {
	    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
	      newArgs[_key] = arguments[_key];
	    }
	
	    if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
	      return lastResult;
	    }
	
	    lastResult = resultFn.apply(this, newArgs);
	    calledOnce = true;
	    lastThis = this;
	    lastArgs = newArgs;
	    return lastResult;
	  };
	
	  return result;
	}
	
	module.exports = index;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var $$observable = _interopDefault(__webpack_require__(131));
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var randomString = function randomString() {
	  return Math.random().toString(36).substring(7).split('').join('.');
	};
	
	var ActionTypes = {
	  INIT: "@@redux/INIT" + randomString(),
	  REPLACE: "@@redux/REPLACE" + randomString(),
	  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
	    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
	  }
	};
	
	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject(obj) {
	  if (typeof obj !== 'object' || obj === null) return false;
	  var proto = obj;
	
	  while (Object.getPrototypeOf(proto) !== null) {
	    proto = Object.getPrototypeOf(proto);
	  }
	
	  return Object.getPrototypeOf(obj) === proto;
	}
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
	    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
	  }
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	
	
	  function getState() {
	    if (isDispatching) {
	      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
	    }
	
	    return currentState;
	  }
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	
	
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected the listener to be a function.');
	    }
	
	    if (isDispatching) {
	      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
	    }
	
	    var isSubscribed = true;
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      if (isDispatching) {
	        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
	      }
	
	      isSubscribed = false;
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	
	
	  function dispatch(action) {
	    if (!isPlainObject(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }
	
	    return action;
	  }
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	
	
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({
	      type: ActionTypes.REPLACE
	    });
	  }
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
	
	
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object' || observer === null) {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return {
	          unsubscribe: unsubscribe
	        };
	      }
	    }, _ref[$$observable] = function () {
	      return this;
	    }, _ref;
	  } // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	
	
	  dispatch({
	    type: ActionTypes.INIT
	  });
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[$$observable] = observable, _ref2;
	}
	
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	
	
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	  } catch (e) {} // eslint-disable-line no-empty
	
	}
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
	  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!isPlainObject(inputState)) {
	    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });
	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });
	  if (action && action.type === ActionTypes.REPLACE) return;
	
	  if (unexpectedKeys.length > 0) {
	    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
	  }
	}
	
	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, {
	      type: ActionTypes.INIT
	    });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
	    }
	
	    if (typeof reducer(undefined, {
	      type: ActionTypes.PROBE_UNKNOWN_ACTION()
	    }) === 'undefined') {
	      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
	    }
	  });
	}
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	
	
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	
	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        warning("No reducer provided for key \"" + key + "\"");
	      }
	    }
	
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	
	  var finalReducerKeys = Object.keys(finalReducers);
	  var unexpectedKeyCache;
	
	  if (process.env.NODE_ENV !== 'production') {
	    unexpectedKeyCache = {};
	  }
	
	  var shapeAssertionError;
	
	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }
	
	  return function combination(state, action) {
	    if (state === void 0) {
	      state = {};
	    }
	
	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	
	      if (warningMessage) {
	        warning(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	
	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(_key, action);
	        throw new Error(errorMessage);
	      }
	
	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	
	    return hasChanged ? nextState : state;
	  };
	}
	
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(this, arguments));
	  };
	}
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	
	
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	
	  return boundActionCreators;
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	}
	
	function _objectSpread(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};
	    var ownKeys = Object.keys(source);
	
	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	      }));
	    }
	
	    ownKeys.forEach(function (key) {
	      _defineProperty(target, key, source[key]);
	    });
	  }
	
	  return target;
	}
	
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	function compose() {
	  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(void 0, arguments));
	    };
	  });
	}
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function () {
	      var store = createStore.apply(void 0, arguments);
	
	      var _dispatch = function dispatch() {
	        throw new Error("Dispatching while constructing your middleware is not allowed. " + "Other middleware would not be applied to this dispatch.");
	      };
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch() {
	          return _dispatch.apply(void 0, arguments);
	        }
	      };
	      var chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = compose.apply(void 0, chain)(store.dispatch);
	      return _objectSpread({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}
	
	/*
	 * This is a dummy function to check if the function name has been altered by minification.
	 * If the function has been minified and NODE_ENV !== 'production', warn the user.
	 */
	
	function isCrushed() {}
	
	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = createStore;
	exports.combineReducers = combineReducers;
	exports.bindActionCreators = bindActionCreators;
	exports.applyMiddleware = applyMiddleware;
	exports.compose = compose;
	exports.__DO_NOT_USE__ActionTypes = ActionTypes;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ponyfill = __webpack_require__(133);
	
	var _ponyfill2 = _interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var root; /* global window */
	
	
	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}
	
	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(132)(module)))

/***/ }),
/* 132 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 133 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
	
		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};

/***/ }),
/* 134 */
/***/ (function(module, exports) {

	'use strict';
	
	var index = (function (fn) {
	  var lastArgs = [];
	  var frameId = null;
	
	  var wrapperFn = function wrapperFn() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    lastArgs = args;
	
	    if (frameId) {
	      return;
	    }
	
	    frameId = requestAnimationFrame(function () {
	      frameId = null;
	      fn.apply(undefined, lastArgs);
	    });
	  };
	
	  wrapperFn.cancel = function () {
	    if (!frameId) {
	      return;
	    }
	
	    cancelAnimationFrame(frameId);
	    frameId = null;
	  };
	
	  var resultFn = wrapperFn;
	
	  return resultFn;
	});
	
	module.exports = index;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	var _Object$create = __webpack_require__(136);
	
	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = _Object$create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}
	
	module.exports = _inheritsLoose;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(137);

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(138);
	var $Object = __webpack_require__(90).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(88);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(139) });


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(95);
	var dPs = __webpack_require__(140);
	var enumBugKeys = __webpack_require__(119);
	var IE_PROTO = __webpack_require__(115)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(100)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(141).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(94);
	var anObject = __webpack_require__(95);
	var getKeys = __webpack_require__(105);
	
	module.exports = __webpack_require__(98) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(89).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	var _interopRequireWildcard = __webpack_require__(143);
	
	exports.__esModule = true;
	
	var _Provider = _interopRequireWildcard(__webpack_require__(144));
	
	exports.Provider = _Provider.default;
	exports.createProvider = _Provider.createProvider;
	
	var _connectAdvanced = _interopRequireDefault(__webpack_require__(148));
	
	exports.connectAdvanced = _connectAdvanced.default;
	
	var _connect = _interopRequireDefault(__webpack_require__(158));
	
	exports.connect = _connect.default;

/***/ }),
/* 143 */
/***/ (function(module, exports) {

	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};
	
	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) {
	          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
	
	          if (desc.get || desc.set) {
	            Object.defineProperty(newObj, key, desc);
	          } else {
	            newObj[key] = obj[key];
	          }
	        }
	      }
	    }
	
	    newObj.default = obj;
	    return newObj;
	  }
	}
	
	module.exports = _interopRequireWildcard;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.createProvider = createProvider;
	exports.default = void 0;
	
	var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(145));
	
	var _react = __webpack_require__(4);
	
	var _propTypes = _interopRequireDefault(__webpack_require__(5));
	
	var _PropTypes = __webpack_require__(146);
	
	var _warning = _interopRequireDefault(__webpack_require__(147));
	
	var didWarnAboutReceivingStore = false;
	
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	
	  didWarnAboutReceivingStore = true;
	  (0, _warning.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reduxjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}
	
	function createProvider(storeKey) {
	  var _Provider$childContex;
	
	  if (storeKey === void 0) {
	    storeKey = 'store';
	  }
	
	  var subscriptionKey = storeKey + "Subscription";
	
	  var Provider =
	  /*#__PURE__*/
	  function (_Component) {
	    (0, _inheritsLoose2.default)(Provider, _Component);
	    var _proto = Provider.prototype;
	
	    _proto.getChildContext = function getChildContext() {
	      var _ref;
	
	      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
	    };
	
	    function Provider(props, context) {
	      var _this;
	
	      _this = _Component.call(this, props, context) || this;
	      _this[storeKey] = props.store;
	      return _this;
	    }
	
	    _proto.render = function render() {
	      return _react.Children.only(this.props.children);
	    };
	
	    return Provider;
	  }(_react.Component);
	
	  if (process.env.NODE_ENV !== 'production') {
	    Provider.prototype.componentWillReceiveProps = function (nextProps) {
	      if (this[storeKey] !== nextProps.store) {
	        warnAboutReceivingStore();
	      }
	    };
	  }
	
	  Provider.propTypes = {
	    store: _PropTypes.storeShape.isRequired,
	    children: _propTypes.default.element.isRequired
	  };
	  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = _PropTypes.storeShape.isRequired, _Provider$childContex[subscriptionKey] = _PropTypes.subscriptionShape, _Provider$childContex);
	  return Provider;
	}
	
	var _default = createProvider();
	
	exports.default = _default;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 145 */
/***/ (function(module, exports) {

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}
	
	module.exports = _inheritsLoose;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.storeShape = exports.subscriptionShape = void 0;
	
	var _propTypes = _interopRequireDefault(__webpack_require__(5));
	
	var subscriptionShape = _propTypes.default.shape({
	  trySubscribe: _propTypes.default.func.isRequired,
	  tryUnsubscribe: _propTypes.default.func.isRequired,
	  notifyNestedSubs: _propTypes.default.func.isRequired,
	  isSubscribed: _propTypes.default.func.isRequired
	});
	
	exports.subscriptionShape = subscriptionShape;
	
	var storeShape = _propTypes.default.shape({
	  subscribe: _propTypes.default.func.isRequired,
	  dispatch: _propTypes.default.func.isRequired,
	  getState: _propTypes.default.func.isRequired
	});
	
	exports.storeShape = storeShape;

/***/ }),
/* 147 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = warning;
	
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	
	
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	
	}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = connectAdvanced;
	
	var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(145));
	
	var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(149));
	
	var _extends2 = _interopRequireDefault(__webpack_require__(150));
	
	var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(151));
	
	var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(152));
	
	var _invariant = _interopRequireDefault(__webpack_require__(156));
	
	var _react = __webpack_require__(4);
	
	var _reactIs = __webpack_require__(153);
	
	var _Subscription = _interopRequireDefault(__webpack_require__(157));
	
	var _PropTypes = __webpack_require__(146);
	
	var hotReloadingVersion = 0;
	var dummyState = {};
	
	function noop() {}
	
	function makeSelectorStateful(sourceSelector, store) {
	  // wrap the selector in an object that tracks its results between runs.
	  var selector = {
	    run: function runComponentSelector(props) {
	      try {
	        var nextProps = sourceSelector(store.getState(), props);
	
	        if (nextProps !== selector.props || selector.error) {
	          selector.shouldComponentUpdate = true;
	          selector.props = nextProps;
	          selector.error = null;
	        }
	      } catch (error) {
	        selector.shouldComponentUpdate = true;
	        selector.error = error;
	      }
	    }
	  };
	  return selector;
	}
	
	function connectAdvanced(
	/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	     export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
	selectorFactory, // options object:
	_ref) {
	  var _contextTypes, _childContextTypes;
	
	  if (_ref === void 0) {
	    _ref = {};
	  }
	
	  var _ref2 = _ref,
	      _ref2$getDisplayName = _ref2.getDisplayName,
	      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
	    return "ConnectAdvanced(" + name + ")";
	  } : _ref2$getDisplayName,
	      _ref2$methodName = _ref2.methodName,
	      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
	      _ref2$renderCountProp = _ref2.renderCountProp,
	      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
	      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
	      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
	      _ref2$storeKey = _ref2.storeKey,
	      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
	      _ref2$withRef = _ref2.withRef,
	      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
	      connectOptions = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]);
	  var subscriptionKey = storeKey + 'Subscription';
	  var version = hotReloadingVersion++;
	  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
	  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);
	  return function wrapWithConnect(WrappedComponent) {
	    (0, _invariant.default)((0, _reactIs.isValidElementType)(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + JSON.stringify(WrappedComponent)));
	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
	    var displayName = getDisplayName(wrappedComponentName);
	    var selectorFactoryOptions = (0, _extends2.default)({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      withRef: withRef,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent // TODO Actually fix our use of componentWillReceiveProps
	
	      /* eslint-disable react/no-deprecated */
	
	    });
	
	    var Connect =
	    /*#__PURE__*/
	    function (_Component) {
	      (0, _inheritsLoose2.default)(Connect, _Component);
	
	      function Connect(props, context) {
	        var _this;
	
	        _this = _Component.call(this, props, context) || this;
	        _this.version = version;
	        _this.state = {};
	        _this.renderCount = 0;
	        _this.store = props[storeKey] || context[storeKey];
	        _this.propsMode = Boolean(props[storeKey]);
	        _this.setWrappedInstance = _this.setWrappedInstance.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
	        (0, _invariant.default)(_this.store, "Could not find \"" + storeKey + "\" in either the context or props of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + ("or explicitly pass \"" + storeKey + "\" as a prop to \"" + displayName + "\"."));
	
	        _this.initSelector();
	
	        _this.initSubscription();
	
	        return _this;
	      }
	
	      var _proto = Connect.prototype;
	
	      _proto.getChildContext = function getChildContext() {
	        var _ref3;
	
	        // If this component received store from props, its subscription should be transparent
	        // to any descendants receiving store+subscription from context; it passes along
	        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
	        // Connect to control ordering of notifications to flow top-down.
	        var subscription = this.propsMode ? null : this.subscription;
	        return _ref3 = {}, _ref3[subscriptionKey] = subscription || this.context[subscriptionKey], _ref3;
	      };
	
	      _proto.componentDidMount = function componentDidMount() {
	        if (!shouldHandleStateChanges) return; // componentWillMount fires during server side rendering, but componentDidMount and
	        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
	        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
	        // To handle the case where a child component may have triggered a state change by
	        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
	        // re-render.
	
	        this.subscription.trySubscribe();
	        this.selector.run(this.props);
	        if (this.selector.shouldComponentUpdate) this.forceUpdate();
	      };
	
	      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.selector.run(nextProps);
	      };
	
	      _proto.shouldComponentUpdate = function shouldComponentUpdate() {
	        return this.selector.shouldComponentUpdate;
	      };
	
	      _proto.componentWillUnmount = function componentWillUnmount() {
	        if (this.subscription) this.subscription.tryUnsubscribe();
	        this.subscription = null;
	        this.notifyNestedSubs = noop;
	        this.store = null;
	        this.selector.run = noop;
	        this.selector.shouldComponentUpdate = false;
	      };
	
	      _proto.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant.default)(withRef, "To access the wrapped instance, you need to specify " + ("{ withRef: true } in the options argument of the " + methodName + "() call."));
	        return this.wrappedInstance;
	      };
	
	      _proto.setWrappedInstance = function setWrappedInstance(ref) {
	        this.wrappedInstance = ref;
	      };
	
	      _proto.initSelector = function initSelector() {
	        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
	        this.selector = makeSelectorStateful(sourceSelector, this.store);
	        this.selector.run(this.props);
	      };
	
	      _proto.initSubscription = function initSubscription() {
	        if (!shouldHandleStateChanges) return; // parentSub's source should match where store came from: props vs. context. A component
	        // connected to the store via props shouldn't use subscription from context, or vice versa.
	
	        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
	        this.subscription = new _Subscription.default(this.store, parentSub, this.onStateChange.bind(this)); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
	        // the middle of the notification loop, where `this.subscription` will then be null. An
	        // extra null check every change can be avoided by copying the method onto `this` and then
	        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
	        // listeners logic is changed to not call listeners that have been unsubscribed in the
	        // middle of the notification loop.
	
	        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
	      };
	
	      _proto.onStateChange = function onStateChange() {
	        this.selector.run(this.props);
	
	        if (!this.selector.shouldComponentUpdate) {
	          this.notifyNestedSubs();
	        } else {
	          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
	          this.setState(dummyState);
	        }
	      };
	
	      _proto.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
	        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
	        // needs to notify nested subs. Once called, it unimplements itself until further state
	        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
	        // a boolean check every time avoids an extra method call most of the time, resulting
	        // in some perf boost.
	        this.componentDidUpdate = undefined;
	        this.notifyNestedSubs();
	      };
	
	      _proto.isSubscribed = function isSubscribed() {
	        return Boolean(this.subscription) && this.subscription.isSubscribed();
	      };
	
	      _proto.addExtraProps = function addExtraProps(props) {
	        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props; // make a shallow copy so that fields added don't leak to the original selector.
	        // this is especially important for 'ref' since that's a reference back to the component
	        // instance. a singleton memoized selector would then be holding a reference to the
	        // instance, preventing the instance from being garbage collected, and that would be bad
	
	        var withExtras = (0, _extends2.default)({}, props);
	        if (withRef) withExtras.ref = this.setWrappedInstance;
	        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
	        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
	        return withExtras;
	      };
	
	      _proto.render = function render() {
	        var selector = this.selector;
	        selector.shouldComponentUpdate = false;
	
	        if (selector.error) {
	          throw selector.error;
	        } else {
	          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
	        }
	      };
	
	      return Connect;
	    }(_react.Component);
	    /* eslint-enable react/no-deprecated */
	
	
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = displayName;
	    Connect.childContextTypes = childContextTypes;
	    Connect.contextTypes = contextTypes;
	    Connect.propTypes = contextTypes;
	
	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        var _this2 = this;
	
	        // We are hot reloading!
	        if (this.version !== version) {
	          this.version = version;
	          this.initSelector(); // If any connected descendants don't hot reload (and resubscribe in the process), their
	          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
	          // listeners, this does mean that the old versions of connected descendants will still be
	          // notified of state changes; however, their onStateChange function is a no-op so this
	          // isn't a huge deal.
	
	          var oldListeners = [];
	
	          if (this.subscription) {
	            oldListeners = this.subscription.listeners.get();
	            this.subscription.tryUnsubscribe();
	          }
	
	          this.initSubscription();
	
	          if (shouldHandleStateChanges) {
	            this.subscription.trySubscribe();
	            oldListeners.forEach(function (listener) {
	              return _this2.subscription.listeners.subscribe(listener);
	            });
	          }
	        }
	      };
	    }
	
	    return (0, _hoistNonReactStatics.default)(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 149 */
/***/ (function(module, exports) {

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return self;
	}
	
	module.exports = _assertThisInitialized;

/***/ }),
/* 150 */
/***/ (function(module, exports) {

	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];
	
	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }
	
	    return target;
	  };
	
	  return _extends.apply(this, arguments);
	}
	
	module.exports = _extends;

/***/ }),
/* 151 */
/***/ (function(module, exports) {

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;
	
	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }
	
	  return target;
	}
	
	module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var ReactIs = __webpack_require__(153);
	var React = __webpack_require__(4);
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextType: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    getDerivedStateFromProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    callee: true,
	    arguments: true,
	    arity: true
	};
	
	var FORWARD_REF_STATICS = {
	    '$$typeof': true,
	    render: true
	};
	
	var TYPE_STATICS = {};
	TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;
	
	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	    if (typeof sourceComponent !== 'string') {
	        // don't hoist over string (html) components
	
	        if (objectPrototype) {
	            var inheritedComponent = getPrototypeOf(sourceComponent);
	            if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	            }
	        }
	
	        var keys = getOwnPropertyNames(sourceComponent);
	
	        if (getOwnPropertySymbols) {
	            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	        }
	
	        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
	        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;
	
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                try {
	                    // Avoid failures from read-only properties
	                    defineProperty(targetComponent, key, descriptor);
	                } catch (e) {}
	            }
	        }
	
	        return targetComponent;
	    }
	
	    return targetComponent;
	}
	
	module.exports = hoistNonReactStatics;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	if (process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(154);
	} else {
	  module.exports = __webpack_require__(155);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 154 */
/***/ (function(module, exports) {

	/** @license React v16.6.0
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';Object.defineProperty(exports,"__esModule",{value:!0});
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.concurrent_mode"):60111,m=b?Symbol.for("react.forward_ref"):60112,n=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):60115,r=b?Symbol.for("react.lazy"):
	60116;function t(a){if("object"===typeof a&&null!==a){var p=a.$$typeof;switch(p){case c:switch(a=a.type,a){case l:case e:case g:case f:return a;default:switch(a=a&&a.$$typeof,a){case k:case m:case h:return a;default:return p}}case d:return p}}}function u(a){return t(a)===l}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=l;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=m;exports.Fragment=e;exports.Profiler=g;exports.Portal=d;
	exports.StrictMode=f;exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===l||a===g||a===f||a===n||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===m)};exports.isAsyncMode=function(a){return u(a)};exports.isConcurrentMode=u;exports.isContextConsumer=function(a){return t(a)===k};exports.isContextProvider=function(a){return t(a)===h};
	exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===m};exports.isFragment=function(a){return t(a)===e};exports.isProfiler=function(a){return t(a)===g};exports.isPortal=function(a){return t(a)===d};exports.isStrictMode=function(a){return t(a)===f};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.6.0
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	
	
	if (process.env.NODE_ENV !== "production") {
	  (function() {
	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	
	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' ||
	  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
	}
	
	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var lowPriorityWarning = function () {};
	
	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	var lowPriorityWarning$1 = lowPriorityWarning;
	
	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;
	
	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;
	
	        switch (type) {
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	            return type;
	          default:
	            var $$typeofType = type && type.$$typeof;
	
	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;
	              default:
	                return $$typeof;
	            }
	        }
	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }
	
	  return undefined;
	}
	
	// AsyncMode alias is deprecated along with isAsyncMode
	var AsyncMode = REACT_CONCURRENT_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	
	var hasWarnedAboutDeprecatedIsAsyncMode = false;
	
	// AsyncMode should be deprecated
	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true;
	      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }
	  return isConcurrentMode(object);
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	
	exports.typeOf = typeOf;
	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Profiler = Profiler;
	exports.Portal = Portal;
	exports.StrictMode = StrictMode;
	exports.isValidElementType = isValidElementType;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isProfiler = isProfiler;
	exports.isPortal = isPortal;
	exports.isStrictMode = isStrictMode;
	  })();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 157 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = void 0;
	// encapsulates the subscription logic for connecting a component to the redux store, as
	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants
	var CLEARED = null;
	var nullListeners = {
	  notify: function notify() {}
	};
	
	function createListenerCollection() {
	  // the current/next pattern is copied from redux's createStore code.
	  // TODO: refactor+expose that code to be reusable here?
	  var current = [];
	  var next = [];
	  return {
	    clear: function clear() {
	      next = CLEARED;
	      current = CLEARED;
	    },
	    notify: function notify() {
	      var listeners = current = next;
	
	      for (var i = 0; i < listeners.length; i++) {
	        listeners[i]();
	      }
	    },
	    get: function get() {
	      return next;
	    },
	    subscribe: function subscribe(listener) {
	      var isSubscribed = true;
	      if (next === current) next = current.slice();
	      next.push(listener);
	      return function unsubscribe() {
	        if (!isSubscribed || current === CLEARED) return;
	        isSubscribed = false;
	        if (next === current) next = current.slice();
	        next.splice(next.indexOf(listener), 1);
	      };
	    }
	  };
	}
	
	var Subscription =
	/*#__PURE__*/
	function () {
	  function Subscription(store, parentSub, onStateChange) {
	    this.store = store;
	    this.parentSub = parentSub;
	    this.onStateChange = onStateChange;
	    this.unsubscribe = null;
	    this.listeners = nullListeners;
	  }
	
	  var _proto = Subscription.prototype;
	
	  _proto.addNestedSub = function addNestedSub(listener) {
	    this.trySubscribe();
	    return this.listeners.subscribe(listener);
	  };
	
	  _proto.notifyNestedSubs = function notifyNestedSubs() {
	    this.listeners.notify();
	  };
	
	  _proto.isSubscribed = function isSubscribed() {
	    return Boolean(this.unsubscribe);
	  };
	
	  _proto.trySubscribe = function trySubscribe() {
	    if (!this.unsubscribe) {
	      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
	      this.listeners = createListenerCollection();
	    }
	  };
	
	  _proto.tryUnsubscribe = function tryUnsubscribe() {
	    if (this.unsubscribe) {
	      this.unsubscribe();
	      this.unsubscribe = null;
	      this.listeners.clear();
	      this.listeners = nullListeners;
	    }
	  };
	
	  return Subscription;
	}();
	
	exports.default = Subscription;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.createConnect = createConnect;
	exports.default = void 0;
	
	var _extends2 = _interopRequireDefault(__webpack_require__(150));
	
	var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(151));
	
	var _connectAdvanced = _interopRequireDefault(__webpack_require__(148));
	
	var _shallowEqual = _interopRequireDefault(__webpack_require__(159));
	
	var _mapDispatchToProps = _interopRequireDefault(__webpack_require__(160));
	
	var _mapStateToProps = _interopRequireDefault(__webpack_require__(164));
	
	var _mergeProps = _interopRequireDefault(__webpack_require__(165));
	
	var _selectorFactory = _interopRequireDefault(__webpack_require__(166));
	
	/*
	  connect is a facade over connectAdvanced. It turns its args into a compatible
	  selectorFactory, which has the signature:
	
	    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
	  
	  connect passes its args to connectAdvanced as options, which will in turn pass them to
	  selectorFactory each time a Connect component instance is instantiated or hot reloaded.
	
	  selectorFactory returns a final props selector from its mapStateToProps,
	  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
	  mergePropsFactories, and pure args.
	
	  The resulting final props selector is called by the Connect component instance whenever
	  it receives new props or store state.
	 */
	function match(arg, factories, name) {
	  for (var i = factories.length - 1; i >= 0; i--) {
	    var result = factories[i](arg);
	    if (result) return result;
	  }
	
	  return function (dispatch, options) {
	    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
	  };
	}
	
	function strictEqual(a, b) {
	  return a === b;
	} // createConnect with default args builds the 'official' connect behavior. Calling it with
	// different options opens up some testing and extensibility scenarios
	
	
	function createConnect(_temp) {
	  var _ref = _temp === void 0 ? {} : _temp,
	      _ref$connectHOC = _ref.connectHOC,
	      connectHOC = _ref$connectHOC === void 0 ? _connectAdvanced.default : _ref$connectHOC,
	      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
	      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps.default : _ref$mapStateToPropsF,
	      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
	      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps.default : _ref$mapDispatchToPro,
	      _ref$mergePropsFactor = _ref.mergePropsFactories,
	      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps.default : _ref$mergePropsFactor,
	      _ref$selectorFactory = _ref.selectorFactory,
	      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory.default : _ref$selectorFactory;
	
	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
	    if (_ref2 === void 0) {
	      _ref2 = {};
	    }
	
	    var _ref3 = _ref2,
	        _ref3$pure = _ref3.pure,
	        pure = _ref3$pure === void 0 ? true : _ref3$pure,
	        _ref3$areStatesEqual = _ref3.areStatesEqual,
	        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
	        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
	        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _shallowEqual.default : _ref3$areOwnPropsEqua,
	        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
	        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _shallowEqual.default : _ref3$areStatePropsEq,
	        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
	        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _shallowEqual.default : _ref3$areMergedPropsE,
	        extraOptions = (0, _objectWithoutPropertiesLoose2.default)(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);
	    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
	    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
	    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
	    return connectHOC(selectorFactory, (0, _extends2.default)({
	      // used in error messages
	      methodName: 'connect',
	      // used to compute Connect's displayName from the wrapped component's displayName.
	      getDisplayName: function getDisplayName(name) {
	        return "Connect(" + name + ")";
	      },
	      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
	      shouldHandleStateChanges: Boolean(mapStateToProps),
	      // passed through to selectorFactory
	      initMapStateToProps: initMapStateToProps,
	      initMapDispatchToProps: initMapDispatchToProps,
	      initMergeProps: initMergeProps,
	      pure: pure,
	      areStatesEqual: areStatesEqual,
	      areOwnPropsEqual: areOwnPropsEqual,
	      areStatePropsEqual: areStatePropsEqual,
	      areMergedPropsEqual: areMergedPropsEqual
	    }, extraOptions));
	  };
	}
	
	var _default = createConnect();
	
	exports.default = _default;

/***/ }),
/* 159 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = shallowEqual;
	var hasOwn = Object.prototype.hasOwnProperty;
	
	function is(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}
	
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) return true;
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	  if (keysA.length !== keysB.length) return false;
	
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
	exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
	exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;
	exports.default = void 0;
	
	var _redux = __webpack_require__(130);
	
	var _wrapMapToProps = __webpack_require__(161);
	
	function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
	  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
	}
	
	function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
	  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return {
	      dispatch: dispatch
	    };
	  }) : undefined;
	}
	
	function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
	  }) : undefined;
	}
	
	var _default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];
	exports.default = _default;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
	exports.getDependsOnOwnProps = getDependsOnOwnProps;
	exports.wrapMapToPropsFunc = wrapMapToPropsFunc;
	
	var _verifyPlainObject = _interopRequireDefault(__webpack_require__(162));
	
	function wrapMapToPropsConstant(getConstant) {
	  return function initConstantSelector(dispatch, options) {
	    var constant = getConstant(dispatch, options);
	
	    function constantSelector() {
	      return constant;
	    }
	
	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	// 
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..
	
	
	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	// 
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//    
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//    
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//    
	
	
	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, _ref) {
	    var displayName = _ref.displayName;
	
	    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
	    }; // allow detectFactoryAndVerify to get ownProps
	
	
	    proxy.dependsOnOwnProps = true;
	
	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
	      var props = proxy(stateOrDispatch, ownProps);
	
	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }
	
	      if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject.default)(props, displayName, methodName);
	      return props;
	    };
	
	    return proxy;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = verifyPlainObject;
	
	var _isPlainObject = _interopRequireDefault(__webpack_require__(163));
	
	var _warning = _interopRequireDefault(__webpack_require__(147));
	
	function verifyPlainObject(value, displayName, methodName) {
	  if (!(0, _isPlainObject.default)(value)) {
	    (0, _warning.default)(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
	  }
	}

/***/ }),
/* 163 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = isPlainObject;
	
	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject(obj) {
	  if (typeof obj !== 'object' || obj === null) return false;
	  var proto = obj;
	
	  while (Object.getPrototypeOf(proto) !== null) {
	    proto = Object.getPrototypeOf(proto);
	  }
	
	  return Object.getPrototypeOf(obj) === proto;
	}

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
	exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;
	exports.default = void 0;
	
	var _wrapMapToProps = __webpack_require__(161);
	
	function whenMapStateToPropsIsFunction(mapStateToProps) {
	  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
	}
	
	function whenMapStateToPropsIsMissing(mapStateToProps) {
	  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
	    return {};
	  }) : undefined;
	}
	
	var _default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];
	exports.default = _default;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.defaultMergeProps = defaultMergeProps;
	exports.wrapMergePropsFunc = wrapMergePropsFunc;
	exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
	exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;
	exports.default = void 0;
	
	var _extends2 = _interopRequireDefault(__webpack_require__(150));
	
	var _verifyPlainObject = _interopRequireDefault(__webpack_require__(162));
	
	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  return (0, _extends2.default)({}, ownProps, stateProps, dispatchProps);
	}
	
	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, _ref) {
	    var displayName = _ref.displayName,
	        pure = _ref.pure,
	        areMergedPropsEqual = _ref.areMergedPropsEqual;
	    var hasRunOnce = false;
	    var mergedProps;
	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	
	      if (hasRunOnce) {
	        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;
	        if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject.default)(mergedProps, displayName, 'mergeProps');
	      }
	
	      return mergedProps;
	    };
	  };
	}
	
	function whenMergePropsIsFunction(mergeProps) {
	  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
	}
	
	function whenMergePropsIsOmitted(mergeProps) {
	  return !mergeProps ? function () {
	    return defaultMergeProps;
	  } : undefined;
	}
	
	var _default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];
	exports.default = _default;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
	exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
	exports.default = finalPropsSelectorFactory;
	
	var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(151));
	
	var _verifySubselectors = _interopRequireDefault(__webpack_require__(167));
	
	function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
	  return function impureFinalPropsSelector(state, ownProps) {
	    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
	  };
	}
	
	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
	  var areStatesEqual = _ref.areStatesEqual,
	      areOwnPropsEqual = _ref.areOwnPropsEqual,
	      areStatePropsEqual = _ref.areStatePropsEqual;
	  var hasRunAtLeastOnce = false;
	  var state;
	  var ownProps;
	  var stateProps;
	  var dispatchProps;
	  var mergedProps;
	
	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }
	
	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleNewState() {
	    var nextStateProps = mapStateToProps(state, ownProps);
	    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;
	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    var stateChanged = !areStatesEqual(nextState, state);
	    state = nextState;
	    ownProps = nextOwnProps;
	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }
	
	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	} // TODO: Add more comments
	// If pure is true, the selector returned by selectorFactory will memoize its results,
	// allowing connectAdvanced's shouldComponentUpdate to return false if final
	// props have not changed. If false, the selector will always return a new
	// object and shouldComponentUpdate will always return true.
	
	
	function finalPropsSelectorFactory(dispatch, _ref2) {
	  var initMapStateToProps = _ref2.initMapStateToProps,
	      initMapDispatchToProps = _ref2.initMapDispatchToProps,
	      initMergeProps = _ref2.initMergeProps,
	      options = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);
	  var mapStateToProps = initMapStateToProps(dispatch, options);
	  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  var mergeProps = initMergeProps(dispatch, options);
	
	  if (process.env.NODE_ENV !== 'production') {
	    (0, _verifySubselectors.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
	  }
	
	  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
	  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = verifySubselectors;
	
	var _warning = _interopRequireDefault(__webpack_require__(147));
	
	function verify(selector, methodName, displayName) {
	  if (!selector) {
	    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
	      (0, _warning.default)("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
	    }
	  }
	}
	
	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
	  verify(mapStateToProps, 'mapStateToProps', displayName);
	  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
	  verify(mergeProps, 'mergeProps', displayName);
	}

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _Motion = __webpack_require__(169);
	
	exports.Motion = _interopRequire(_Motion);
	
	var _StaggeredMotion = __webpack_require__(176);
	
	exports.StaggeredMotion = _interopRequire(_StaggeredMotion);
	
	var _TransitionMotion = __webpack_require__(177);
	
	exports.TransitionMotion = _interopRequire(_TransitionMotion);
	
	var _spring = __webpack_require__(179);
	
	exports.spring = _interopRequire(_spring);
	
	var _presets = __webpack_require__(180);
	
	exports.presets = _interopRequire(_presets);
	
	var _stripStyle = __webpack_require__(171);
	
	exports.stripStyle = _interopRequire(_stripStyle);
	
	// deprecated, dummy warning function
	
	var _reorderKeys = __webpack_require__(181);
	
	exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _mapToZero = __webpack_require__(170);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(171);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(172);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _performanceNow = __webpack_require__(173);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(174);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(175);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var msPerFrame = 1000 / 60;
	
	var Motion = (function (_React$Component) {
	  _inherits(Motion, _React$Component);
	
	  _createClass(Motion, null, [{
	    key: 'propTypes',
	    value: {
	      // TOOD: warn against putting a config in here
	      defaultStyle: _propTypes2['default'].objectOf(_propTypes2['default'].number),
	      style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired,
	      children: _propTypes2['default'].func.isRequired,
	      onRest: _propTypes2['default'].func
	    },
	    enumerable: true
	  }]);
	
	  function Motion(props) {
	    var _this = this;
	
	    _classCallCheck(this, Motion);
	
	    _React$Component.call(this, props);
	    this.wasAnimating = false;
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    this.unreadPropStyle = null;
	
	    this.clearUnreadPropStyle = function (destStyle) {
	      var dirty = false;
	      var _state = _this.state;
	      var currentStyle = _state.currentStyle;
	      var currentVelocity = _state.currentVelocity;
	      var lastIdealStyle = _state.lastIdealStyle;
	      var lastIdealVelocity = _state.lastIdealVelocity;
	
	      for (var key in destStyle) {
	        if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	          continue;
	        }
	
	        var styleValue = destStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            currentStyle = _extends({}, currentStyle);
	            currentVelocity = _extends({}, currentVelocity);
	            lastIdealStyle = _extends({}, lastIdealStyle);
	            lastIdealVelocity = _extends({}, lastIdealVelocity);
	          }
	
	          currentStyle[key] = styleValue;
	          currentVelocity[key] = 0;
	          lastIdealStyle[key] = styleValue;
	          lastIdealVelocity[key] = 0;
	        }
	      }
	
	      if (dirty) {
	        _this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
	      }
	    };
	
	    this.startAnimationIfNecessary = function () {
	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = _raf2['default'](function (timestamp) {
	        // check if we need to animate in the first place
	        var propsStyle = _this.props.style;
	        if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
	          if (_this.wasAnimating && _this.props.onRest) {
	            _this.props.onRest();
	          }
	
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.wasAnimating = false;
	          _this.accumulatedTime = 0;
	          return;
	        }
	
	        _this.wasAnimating = true;
	
	        var currentTime = timestamp || _performanceNow2['default']();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }
	
	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }
	
	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	
	        for (var key in propsStyle) {
	          if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
	            continue;
	          }
	
	          var styleValue = propsStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
	            var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
	            for (var i = 0; i < framesToCatchUp; i++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }
	
	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];
	
	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }
	
	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	        _this.setState({
	          currentStyle: newCurrentStyle,
	          currentVelocity: newCurrentVelocity,
	          lastIdealStyle: newLastIdealStyle,
	          lastIdealVelocity: newLastIdealVelocity
	        });
	
	        _this.unreadPropStyle = null;
	
	        _this.startAnimationIfNecessary();
	      });
	    };
	
	    this.state = this.defaultState();
	  }
	
	  Motion.prototype.defaultState = function defaultState() {
	    var _props = this.props;
	    var defaultStyle = _props.defaultStyle;
	    var style = _props.style;
	
	    var currentStyle = defaultStyle || _stripStyle2['default'](style);
	    var currentVelocity = _mapToZero2['default'](currentStyle);
	    return {
	      currentStyle: currentStyle,
	      currentVelocity: currentVelocity,
	      lastIdealStyle: currentStyle,
	      lastIdealVelocity: currentVelocity
	    };
	  };
	
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	
	  Motion.prototype.componentDidMount = function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  };
	
	  Motion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    if (this.unreadPropStyle != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyle);
	    }
	
	    this.unreadPropStyle = props.style;
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  };
	
	  Motion.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  };
	
	  Motion.prototype.render = function render() {
	    var renderedChildren = this.props.children(this.state.currentStyle);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  };
	
	  return Motion;
	})(_react2['default'].Component);
	
	exports['default'] = Motion;
	module.exports = exports['default'];
	
	// after checking for unreadPropStyle != null, we manually go set the
	// non-interpolating values (those that are a number, without a spring
	// config)

/***/ }),
/* 170 */
/***/ (function(module, exports) {

	
	
	// currently used to initiate the velocity style object to 0
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mapToZero;
	
	function mapToZero(obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) {
	      ret[key] = 0;
	    }
	  }
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ }),
/* 171 */
/***/ (function(module, exports) {

	
	// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
	// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}
	
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = stripStyle;
	
	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
	  }
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ }),
/* 172 */
/***/ (function(module, exports) {

	
	
	// stepper is used a lot. Saves allocation to return the same array wrapper.
	// This is fine and danger-free against mutations because the callsite
	// immediately destructures it and gets the numbers inside without passing the
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = stepper;
	
	var reusedTuple = [0, 0];
	
	function stepper(secondPerFrame, x, v, destX, k, b, precision) {
	  // Spring stiffness, in kg / s^2
	
	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);
	
	  // Damping, in kg / s
	  var Fdamper = -b * v;
	
	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;
	
	  var newV = v + a * secondPerFrame;
	  var newX = x + newV * secondPerFrame;
	
	  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
	    reusedTuple[0] = destX;
	    reusedTuple[1] = 0;
	    return reusedTuple;
	  }
	
	  reusedTuple[0] = newX;
	  reusedTuple[1] = newV;
	  return reusedTuple;
	}
	
	module.exports = exports["default"];
	// array reference around.

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
	(function() {
	  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - nodeLoadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    moduleLoadTime = getNanoSeconds();
	    upTime = process.uptime() * 1e9;
	    nodeLoadTime = moduleLoadTime - upTime;
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	//# sourceMappingURL=performance-now.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(173)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]
	
	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}
	
	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60
	
	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }
	
	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}
	
	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function(object) {
	  if (!object) {
	    object = root;
	  }
	  object.requestAnimationFrame = raf
	  object.cancelAnimationFrame = caf
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 175 */
/***/ (function(module, exports) {

	
	
	// usage assumption: currentStyle values have already been rendered but it says
	// nothing of whether currentStyle is stale (see unreadPropStyle)
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shouldStopAnimation;
	
	function shouldStopAnimation(currentStyle, style, currentVelocity) {
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	
	    if (currentVelocity[key] !== 0) {
	      return false;
	    }
	
	    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
	    // stepper will have already taken care of rounding precision errors, so
	    // won't have such thing as 0.9999 !=== 1
	    if (currentStyle[key] !== styleValue) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports['default'];

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _mapToZero = __webpack_require__(170);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(171);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(172);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _performanceNow = __webpack_require__(173);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(174);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(175);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var msPerFrame = 1000 / 60;
	
	function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
	  for (var i = 0; i < currentStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
	      return false;
	    }
	  }
	  return true;
	}
	
	var StaggeredMotion = (function (_React$Component) {
	  _inherits(StaggeredMotion, _React$Component);
	
	  _createClass(StaggeredMotion, null, [{
	    key: 'propTypes',
	    value: {
	      // TOOD: warn against putting a config in here
	      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].objectOf(_propTypes2['default'].number)),
	      styles: _propTypes2['default'].func.isRequired,
	      children: _propTypes2['default'].func.isRequired
	    },
	    enumerable: true
	  }]);
	
	  function StaggeredMotion(props) {
	    var _this = this;
	
	    _classCallCheck(this, StaggeredMotion);
	
	    _React$Component.call(this, props);
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    this.unreadPropStyles = null;
	
	    this.clearUnreadPropStyle = function (unreadPropStyles) {
	      var _state = _this.state;
	      var currentStyles = _state.currentStyles;
	      var currentVelocities = _state.currentVelocities;
	      var lastIdealStyles = _state.lastIdealStyles;
	      var lastIdealVelocities = _state.lastIdealVelocities;
	
	      var someDirty = false;
	      for (var i = 0; i < unreadPropStyles.length; i++) {
	        var unreadPropStyle = unreadPropStyles[i];
	        var dirty = false;
	
	        for (var key in unreadPropStyle) {
	          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	            continue;
	          }
	
	          var styleValue = unreadPropStyle[key];
	          if (typeof styleValue === 'number') {
	            if (!dirty) {
	              dirty = true;
	              someDirty = true;
	              currentStyles[i] = _extends({}, currentStyles[i]);
	              currentVelocities[i] = _extends({}, currentVelocities[i]);
	              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	            }
	            currentStyles[i][key] = styleValue;
	            currentVelocities[i][key] = 0;
	            lastIdealStyles[i][key] = styleValue;
	            lastIdealVelocities[i][key] = 0;
	          }
	        }
	      }
	
	      if (someDirty) {
	        _this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
	      }
	    };
	
	    this.startAnimationIfNecessary = function () {
	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = _raf2['default'](function (timestamp) {
	        var destStyles = _this.props.styles(_this.state.lastIdealStyles);
	
	        // check if we need to animate in the first place
	        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.accumulatedTime = 0;
	          return;
	        }
	
	        var currentTime = timestamp || _performanceNow2['default']();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }
	
	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }
	
	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	        var newLastIdealStyles = [];
	        var newLastIdealVelocities = [];
	        var newCurrentStyles = [];
	        var newCurrentVelocities = [];
	
	        for (var i = 0; i < destStyles.length; i++) {
	          var destStyle = destStyles[i];
	          var newCurrentStyle = {};
	          var newCurrentVelocity = {};
	          var newLastIdealStyle = {};
	          var newLastIdealVelocity = {};
	
	          for (var key in destStyle) {
	            if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	              continue;
	            }
	
	            var styleValue = destStyle[key];
	            if (typeof styleValue === 'number') {
	              newCurrentStyle[key] = styleValue;
	              newCurrentVelocity[key] = 0;
	              newLastIdealStyle[key] = styleValue;
	              newLastIdealVelocity[key] = 0;
	            } else {
	              var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
	              var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
	              for (var j = 0; j < framesToCatchUp; j++) {
	                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	                newLastIdealStyleValue = _stepper[0];
	                newLastIdealVelocityValue = _stepper[1];
	              }
	
	              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              var nextIdealX = _stepper2[0];
	              var nextIdealV = _stepper2[1];
	
	              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	              newLastIdealStyle[key] = newLastIdealStyleValue;
	              newLastIdealVelocity[key] = newLastIdealVelocityValue;
	            }
	          }
	
	          newCurrentStyles[i] = newCurrentStyle;
	          newCurrentVelocities[i] = newCurrentVelocity;
	          newLastIdealStyles[i] = newLastIdealStyle;
	          newLastIdealVelocities[i] = newLastIdealVelocity;
	        }
	
	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	        _this.setState({
	          currentStyles: newCurrentStyles,
	          currentVelocities: newCurrentVelocities,
	          lastIdealStyles: newLastIdealStyles,
	          lastIdealVelocities: newLastIdealVelocities
	        });
	
	        _this.unreadPropStyles = null;
	
	        _this.startAnimationIfNecessary();
	      });
	    };
	
	    this.state = this.defaultState();
	  }
	
	  StaggeredMotion.prototype.defaultState = function defaultState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	
	    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
	    var currentVelocities = currentStyles.map(function (currentStyle) {
	      return _mapToZero2['default'](currentStyle);
	    });
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: currentStyles,
	      lastIdealVelocities: currentVelocities
	    };
	  };
	
	  StaggeredMotion.prototype.componentDidMount = function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  };
	
	  StaggeredMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }
	
	    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  };
	
	  StaggeredMotion.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  };
	
	  StaggeredMotion.prototype.render = function render() {
	    var renderedChildren = this.props.children(this.state.currentStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  };
	
	  return StaggeredMotion;
	})(_react2['default'].Component);
	
	exports['default'] = StaggeredMotion;
	module.exports = exports['default'];
	
	// it's possible that currentStyle's value is stale: if props is immediately
	// changed from 0 to 400 to spring(0) again, the async currentStyle is still
	// at 0 (didn't have time to tick and interpolate even once). If we naively
	// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	// In reality currentStyle should be 400
	
	// after checking for unreadPropStyles != null, we manually go set the
	// non-interpolating values (those that are a number, without a spring
	// config)

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _mapToZero = __webpack_require__(170);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(171);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(172);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _mergeDiff = __webpack_require__(178);
	
	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);
	
	var _performanceNow = __webpack_require__(173);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(174);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(175);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var msPerFrame = 1000 / 60;
	
	// the children function & (potential) styles function asks as param an
	// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
	// {key: string, data?: any, style: PlainStyle}. However, the way we keep
	// internal states doesn't contain such a data structure (check the state and
	// TransitionMotionState). So when children function and others ask for such
	// data we need to generate them on the fly by combining mergedPropsStyles and
	// currentStyles/lastIdealStyles
	function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
	  // Copy the value to a `const` so that Flow understands that the const won't
	  // change and will be non-nullable in the callback below.
	  var cUnreadPropStyles = unreadPropStyles;
	  if (cUnreadPropStyles == null) {
	    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	      return {
	        key: mergedPropsStyle.key,
	        data: mergedPropsStyle.data,
	        style: plainStyles[i]
	      };
	    });
	  }
	  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	    for (var j = 0; j < cUnreadPropStyles.length; j++) {
	      if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
	        return {
	          key: cUnreadPropStyles[j].key,
	          data: cUnreadPropStyles[j].data,
	          style: plainStyles[i]
	        };
	      }
	    }
	    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
	  });
	}
	
	function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
	  if (mergedPropsStyles.length !== destStyles.length) {
	    return false;
	  }
	
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (mergedPropsStyles[i].key !== destStyles[i].key) {
	      return false;
	    }
	  }
	
	  // we have the invariant that mergedPropsStyles and
	  // currentStyles/currentVelocities/last* are synced in terms of cells, see
	  // mergeAndSync comment for more info
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	// core key merging logic
	
	// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
	// c}, previous current (interpolating) style is {a, b}
	// **invariant**: current[i] corresponds to merged[i] in terms of key
	
	// steps:
	// turn merged style into {a?, b, c}
	//    add c, value of c is destStyles.c
	//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
	// turn current (interpolating) style from {a, b} into {a?, b, c}
	//    maybe remove a
	//    certainly add c, value of c is willEnter(c)
	// loop over merged and construct new current
	// dest doesn't change, that's owner's
	function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
	  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
	    var leavingStyle = willLeave(oldMergedPropsStyle);
	    if (leavingStyle == null) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
	  });
	
	  var newCurrentStyles = [];
	  var newCurrentVelocities = [];
	  var newLastIdealStyles = [];
	  var newLastIdealVelocities = [];
	  for (var i = 0; i < newMergedPropsStyles.length; i++) {
	    var newMergedPropsStyleCell = newMergedPropsStyles[i];
	    var foundOldIndex = null;
	    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
	      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
	        foundOldIndex = j;
	        break;
	      }
	    }
	    // TODO: key search code
	    if (foundOldIndex == null) {
	      var plainStyle = willEnter(newMergedPropsStyleCell);
	      newCurrentStyles[i] = plainStyle;
	      newLastIdealStyles[i] = plainStyle;
	
	      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
	      newCurrentVelocities[i] = velocity;
	      newLastIdealVelocities[i] = velocity;
	    } else {
	      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
	      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
	      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
	      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
	    }
	  }
	
	  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
	}
	
	var TransitionMotion = (function (_React$Component) {
	  _inherits(TransitionMotion, _React$Component);
	
	  _createClass(TransitionMotion, null, [{
	    key: 'propTypes',
	    value: {
	      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
	        key: _propTypes2['default'].string.isRequired,
	        data: _propTypes2['default'].any,
	        style: _propTypes2['default'].objectOf(_propTypes2['default'].number).isRequired
	      })),
	      styles: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
	        key: _propTypes2['default'].string.isRequired,
	        data: _propTypes2['default'].any,
	        style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired
	      }))]).isRequired,
	      children: _propTypes2['default'].func.isRequired,
	      willEnter: _propTypes2['default'].func,
	      willLeave: _propTypes2['default'].func,
	      didLeave: _propTypes2['default'].func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      willEnter: function willEnter(styleThatEntered) {
	        return _stripStyle2['default'](styleThatEntered.style);
	      },
	      // recall: returning null makes the current unmounting TransitionStyle
	      // disappear immediately
	      willLeave: function willLeave() {
	        return null;
	      },
	      didLeave: function didLeave() {}
	    },
	    enumerable: true
	  }]);
	
	  function TransitionMotion(props) {
	    var _this = this;
	
	    _classCallCheck(this, TransitionMotion);
	
	    _React$Component.call(this, props);
	    this.unmounting = false;
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    this.unreadPropStyles = null;
	
	    this.clearUnreadPropStyle = function (unreadPropStyles) {
	      var _mergeAndSync = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, unreadPropStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);
	
	      var mergedPropsStyles = _mergeAndSync[0];
	      var currentStyles = _mergeAndSync[1];
	      var currentVelocities = _mergeAndSync[2];
	      var lastIdealStyles = _mergeAndSync[3];
	      var lastIdealVelocities = _mergeAndSync[4];
	
	      for (var i = 0; i < unreadPropStyles.length; i++) {
	        var unreadPropStyle = unreadPropStyles[i].style;
	        var dirty = false;
	
	        for (var key in unreadPropStyle) {
	          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	            continue;
	          }
	
	          var styleValue = unreadPropStyle[key];
	          if (typeof styleValue === 'number') {
	            if (!dirty) {
	              dirty = true;
	              currentStyles[i] = _extends({}, currentStyles[i]);
	              currentVelocities[i] = _extends({}, currentVelocities[i]);
	              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	              mergedPropsStyles[i] = {
	                key: mergedPropsStyles[i].key,
	                data: mergedPropsStyles[i].data,
	                style: _extends({}, mergedPropsStyles[i].style)
	              };
	            }
	            currentStyles[i][key] = styleValue;
	            currentVelocities[i][key] = 0;
	            lastIdealStyles[i][key] = styleValue;
	            lastIdealVelocities[i][key] = 0;
	            mergedPropsStyles[i].style[key] = styleValue;
	          }
	        }
	      }
	
	      // unlike the other 2 components, we can't detect staleness and optionally
	      // opt out of setState here. each style object's data might contain new
	      // stuff we're not/cannot compare
	      _this.setState({
	        currentStyles: currentStyles,
	        currentVelocities: currentVelocities,
	        mergedPropsStyles: mergedPropsStyles,
	        lastIdealStyles: lastIdealStyles,
	        lastIdealVelocities: lastIdealVelocities
	      });
	    };
	
	    this.startAnimationIfNecessary = function () {
	      if (_this.unmounting) {
	        return;
	      }
	
	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = _raf2['default'](function (timestamp) {
	        // https://github.com/chenglou/react-motion/pull/420
	        // > if execution passes the conditional if (this.unmounting), then
	        // executes async defaultRaf and after that component unmounts and after
	        // that the callback of defaultRaf is called, then setState will be called
	        // on unmounted component.
	        if (_this.unmounting) {
	          return;
	        }
	
	        var propStyles = _this.props.styles;
	        var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;
	
	        // check if we need to animate in the first place
	        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.accumulatedTime = 0;
	          return;
	        }
	
	        var currentTime = timestamp || _performanceNow2['default']();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }
	
	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }
	
	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	        var _mergeAndSync2 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);
	
	        var newMergedPropsStyles = _mergeAndSync2[0];
	        var newCurrentStyles = _mergeAndSync2[1];
	        var newCurrentVelocities = _mergeAndSync2[2];
	        var newLastIdealStyles = _mergeAndSync2[3];
	        var newLastIdealVelocities = _mergeAndSync2[4];
	
	        for (var i = 0; i < newMergedPropsStyles.length; i++) {
	          var newMergedPropsStyle = newMergedPropsStyles[i].style;
	          var newCurrentStyle = {};
	          var newCurrentVelocity = {};
	          var newLastIdealStyle = {};
	          var newLastIdealVelocity = {};
	
	          for (var key in newMergedPropsStyle) {
	            if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
	              continue;
	            }
	
	            var styleValue = newMergedPropsStyle[key];
	            if (typeof styleValue === 'number') {
	              newCurrentStyle[key] = styleValue;
	              newCurrentVelocity[key] = 0;
	              newLastIdealStyle[key] = styleValue;
	              newLastIdealVelocity[key] = 0;
	            } else {
	              var newLastIdealStyleValue = newLastIdealStyles[i][key];
	              var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
	              for (var j = 0; j < framesToCatchUp; j++) {
	                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	                newLastIdealStyleValue = _stepper[0];
	                newLastIdealVelocityValue = _stepper[1];
	              }
	
	              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              var nextIdealX = _stepper2[0];
	              var nextIdealV = _stepper2[1];
	
	              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	              newLastIdealStyle[key] = newLastIdealStyleValue;
	              newLastIdealVelocity[key] = newLastIdealVelocityValue;
	            }
	          }
	
	          newLastIdealStyles[i] = newLastIdealStyle;
	          newLastIdealVelocities[i] = newLastIdealVelocity;
	          newCurrentStyles[i] = newCurrentStyle;
	          newCurrentVelocities[i] = newCurrentVelocity;
	        }
	
	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	        _this.setState({
	          currentStyles: newCurrentStyles,
	          currentVelocities: newCurrentVelocities,
	          lastIdealStyles: newLastIdealStyles,
	          lastIdealVelocities: newLastIdealVelocities,
	          mergedPropsStyles: newMergedPropsStyles
	        });
	
	        _this.unreadPropStyles = null;
	
	        _this.startAnimationIfNecessary();
	      });
	    };
	
	    this.state = this.defaultState();
	  }
	
	  TransitionMotion.prototype.defaultState = function defaultState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	    var willEnter = _props.willEnter;
	    var willLeave = _props.willLeave;
	    var didLeave = _props.didLeave;
	
	    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;
	
	    // this is special. for the first time around, we don't have a comparison
	    // between last (no last) and current merged props. we'll compute last so:
	    // say default is {a, b} and styles (dest style) is {b, c}, we'll
	    // fabricate last as {a, b}
	    var oldMergedPropsStyles = undefined;
	    if (defaultStyles == null) {
	      oldMergedPropsStyles = destStyles;
	    } else {
	      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
	        // TODO: key search code
	        for (var i = 0; i < destStyles.length; i++) {
	          if (destStyles[i].key === defaultStyleCell.key) {
	            return destStyles[i];
	          }
	        }
	        return defaultStyleCell;
	      });
	    }
	    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    });
	    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    });
	
	    var _mergeAndSync3 = mergeAndSync(
	    // Because this is an old-style createReactClass component, Flow doesn't
	    // understand that the willEnter and willLeave props have default values
	    // and will always be present.
	    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
	    oldCurrentVelocities);
	
	    var mergedPropsStyles = _mergeAndSync3[0];
	    var currentStyles = _mergeAndSync3[1];
	    var currentVelocities = _mergeAndSync3[2];
	    var lastIdealStyles = _mergeAndSync3[3];
	    var lastIdealVelocities = _mergeAndSync3[4];
	    // oldLastIdealVelocities really
	
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities,
	      mergedPropsStyles: mergedPropsStyles
	    };
	  };
	
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	
	  TransitionMotion.prototype.componentDidMount = function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  };
	
	  TransitionMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }
	
	    var styles = props.styles;
	    if (typeof styles === 'function') {
	      this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
	    } else {
	      this.unreadPropStyles = styles;
	    }
	
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  };
	
	  TransitionMotion.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unmounting = true;
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  };
	
	  TransitionMotion.prototype.render = function render() {
	    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
	    var renderedChildren = this.props.children(hydratedStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  };
	
	  return TransitionMotion;
	})(_react2['default'].Component);
	
	exports['default'] = TransitionMotion;
	module.exports = exports['default'];
	
	// list of styles, each containing interpolating values. Part of what's passed
	// to children function. Notice that this is
	// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
	// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
	// contains the key & data info (so that we only have a single source of truth
	// for these, and to save space). Check the comment for `rehydrateStyles` to
	// see how we regenerate the entirety of what's passed to children function
	
	// the array that keeps track of currently rendered stuff! Including stuff
	// that you've unmounted but that's still animating. This is where it lives
	
	// it's possible that currentStyle's value is stale: if props is immediately
	// changed from 0 to 400 to spring(0) again, the async currentStyle is still
	// at 0 (didn't have time to tick and interpolate even once). If we naively
	// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	// In reality currentStyle should be 400

/***/ }),
/* 178 */
/***/ (function(module, exports) {

	
	
	// core keys merging algorithm. If previous render's keys are [a, b], and the
	// next render's [c, b, d], what's the final merged keys and ordering?
	
	// - c and a must both be before b
	// - b before d
	// - ordering between a and c ambiguous
	
	// this reduces to merging two partially ordered lists (e.g. lists where not
	// every item has a definite ordering, like comparing a and c above). For the
	// ambiguous ordering we deterministically choose to place the next render's
	// item after the previous'; so c after a
	
	// this is called a topological sorting. Except the existing algorithms don't
	// work well with js bc of the amount of allocation, and isn't optimized for our
	// current use-case bc the runtime is linear in terms of edges (see wiki for
	// meaning), which is huge when two lists have many common elements
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mergeDiff;
	
	function mergeDiff(prev, next, onRemove) {
	  // bookkeeping for easier access of a key's index below. This is 2 allocations +
	  // potentially triggering chrome hash map mode for objs (so it might be faster
	
	  var prevKeyIndex = {};
	  for (var i = 0; i < prev.length; i++) {
	    prevKeyIndex[prev[i].key] = i;
	  }
	  var nextKeyIndex = {};
	  for (var i = 0; i < next.length; i++) {
	    nextKeyIndex[next[i].key] = i;
	  }
	
	  // first, an overly elaborate way of merging prev and next, eliminating
	  // duplicates (in terms of keys). If there's dupe, keep the item in next).
	  // This way of writing it saves allocations
	  var ret = [];
	  for (var i = 0; i < next.length; i++) {
	    ret[i] = next[i];
	  }
	  for (var i = 0; i < prev.length; i++) {
	    if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
	      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
	      // merge in keys that the user desires to kill
	      var fill = onRemove(i, prev[i]);
	      if (fill != null) {
	        ret.push(fill);
	      }
	    }
	  }
	
	  // now all the items all present. Core sorting logic to have the right order
	  return ret.sort(function (a, b) {
	    var nextOrderA = nextKeyIndex[a.key];
	    var nextOrderB = nextKeyIndex[b.key];
	    var prevOrderA = prevKeyIndex[a.key];
	    var prevOrderB = prevKeyIndex[b.key];
	
	    if (nextOrderA != null && nextOrderB != null) {
	      // both keys in next
	      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
	    } else if (prevOrderA != null && prevOrderB != null) {
	      // both keys in prev
	      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
	    } else if (nextOrderA != null) {
	      // key a in next, key b in prev
	
	      // how to determine the order between a and b? We find a "pivot" (term
	      // abuse), a key present in both prev and next, that is sandwiched between
	      // a and b. In the context of our above example, if we're comparing a and
	      // d, b's (the only) pivot
	      for (var i = 0; i < next.length; i++) {
	        var pivot = next[i].key;
	        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	          continue;
	        }
	
	        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
	          return -1;
	        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
	          return 1;
	        }
	      }
	      // pluggable. default to: next bigger than prev
	      return 1;
	    }
	    // prevOrderA, nextOrderB
	    for (var i = 0; i < next.length; i++) {
	      var pivot = next[i].key;
	      if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	        continue;
	      }
	      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
	        return 1;
	      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
	        return -1;
	      }
	    }
	    // pluggable. default to: next bigger than prev
	    return -1;
	  });
	}
	
	module.exports = exports['default'];
	// to loop through and find a key's index each time), but I no longer care

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = spring;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _presets = __webpack_require__(180);
	
	var _presets2 = _interopRequireDefault(_presets);
	
	var defaultConfig = _extends({}, _presets2['default'].noWobble, {
	  precision: 0.01
	});
	
	function spring(val, config) {
	  return _extends({}, defaultConfig, config, { val: val });
	}
	
	module.exports = exports['default'];

/***/ }),
/* 180 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
	  gentle: { stiffness: 120, damping: 14 },
	  wobbly: { stiffness: 180, damping: 12 },
	  stiff: { stiffness: 210, damping: 20 }
	};
	module.exports = exports["default"];

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = reorderKeys;
	
	var hasWarned = false;
	
	function reorderKeys() {
	  if (process.env.NODE_ENV === 'development') {
	    if (!hasWarned) {
	      hasWarned = true;
	      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
	    }
	  }
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(12), __webpack_require__(4));
		else if(typeof define === 'function' && define.amd)
			define(["react-dom", "react"], factory);
		else if(typeof exports === 'object')
			exports["ReactDraggable"] = factory(require("react-dom"), require("react"));
		else
			root["ReactDraggable"] = factory(root["ReactDOM"], root["React"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__) {
	return /******/ (function(modules) { // webpackBootstrap
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
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 12);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findInArray = findInArray;
	exports.isFunction = isFunction;
	exports.isNum = isNum;
	exports.int = int;
	exports.dontSetMe = dontSetMe;
	
	// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
	function findInArray(array /*: Array<any> | TouchList*/, callback /*: Function*/) /*: any*/ {
	  for (var i = 0, length = array.length; i < length; i++) {
	    if (callback.apply(callback, [array[i], i, array])) return array[i];
	  }
	}
	
	function isFunction(func /*: any*/) /*: boolean*/ {
	  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
	}
	
	function isNum(num /*: any*/) /*: boolean*/ {
	  return typeof num === 'number' && !isNaN(num);
	}
	
	function int(a /*: string*/) /*: number*/ {
	  return parseInt(a, 10);
	}
	
	function dontSetMe(props /*: Object*/, propName /*: string*/, componentName /*: string*/) {
	  if (props[propName]) {
	    return new Error('Invalid prop ' + propName + ' passed to ' + componentName + ' - do not set this, set it on the child.');
	  }
	}
	
	/***/ }),
	/* 1 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;
	
	/***/ }),
	/* 2 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	
	/***/ }),
	/* 3 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;
	
	
	/***/ }),
	/* 4 */
	/***/ (function(module, exports) {
	
	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;
	
	/***/ }),
	/* 5 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.matchesSelector = matchesSelector;
	exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
	exports.addEvent = addEvent;
	exports.removeEvent = removeEvent;
	exports.outerHeight = outerHeight;
	exports.outerWidth = outerWidth;
	exports.innerHeight = innerHeight;
	exports.innerWidth = innerWidth;
	exports.offsetXYFromParent = offsetXYFromParent;
	exports.createCSSTransform = createCSSTransform;
	exports.createSVGTransform = createSVGTransform;
	exports.getTouch = getTouch;
	exports.getTouchIdentifier = getTouchIdentifier;
	exports.addUserSelectStyles = addUserSelectStyles;
	exports.removeUserSelectStyles = removeUserSelectStyles;
	exports.styleHacks = styleHacks;
	exports.addClassName = addClassName;
	exports.removeClassName = removeClassName;
	
	var _shims = __webpack_require__(0);
	
	var _getPrefix = __webpack_require__(19);
	
	var _getPrefix2 = _interopRequireDefault(_getPrefix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/*:: import type {ControlPosition, MouseTouchEvent} from './types';*/
	
	
	var matchesSelectorFunc = '';
	function matchesSelector(el /*: Node*/, selector /*: string*/) /*: boolean*/ {
	  if (!matchesSelectorFunc) {
	    matchesSelectorFunc = (0, _shims.findInArray)(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
	      // $FlowIgnore: Doesn't think elements are indexable
	      return (0, _shims.isFunction)(el[method]);
	    });
	  }
	
	  // Might not be found entirely (not an Element?) - in that case, bail
	  // $FlowIgnore: Doesn't think elements are indexable
	  if (!(0, _shims.isFunction)(el[matchesSelectorFunc])) return false;
	
	  // $FlowIgnore: Doesn't think elements are indexable
	  return el[matchesSelectorFunc](selector);
	}
	
	// Works up the tree to the draggable itself attempting to match selector.
	function matchesSelectorAndParentsTo(el /*: Node*/, selector /*: string*/, baseNode /*: Node*/) /*: boolean*/ {
	  var node = el;
	  do {
	    if (matchesSelector(node, selector)) return true;
	    if (node === baseNode) return false;
	    node = node.parentNode;
	  } while (node);
	
	  return false;
	}
	
	function addEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
	  if (!el) {
	    return;
	  }
	  if (el.attachEvent) {
	    el.attachEvent('on' + event, handler);
	  } else if (el.addEventListener) {
	    el.addEventListener(event, handler, true);
	  } else {
	    // $FlowIgnore: Doesn't think elements are indexable
	    el['on' + event] = handler;
	  }
	}
	
	function removeEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
	  if (!el) {
	    return;
	  }
	  if (el.detachEvent) {
	    el.detachEvent('on' + event, handler);
	  } else if (el.removeEventListener) {
	    el.removeEventListener(event, handler, true);
	  } else {
	    // $FlowIgnore: Doesn't think elements are indexable
	    el['on' + event] = null;
	  }
	}
	
	function outerHeight(node /*: HTMLElement*/) /*: number*/ {
	  // This is deliberately excluding margin for our calculations, since we are using
	  // offsetTop which is including margin. See getBoundPosition
	  var height = node.clientHeight;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  height += (0, _shims.int)(computedStyle.borderTopWidth);
	  height += (0, _shims.int)(computedStyle.borderBottomWidth);
	  return height;
	}
	
	function outerWidth(node /*: HTMLElement*/) /*: number*/ {
	  // This is deliberately excluding margin for our calculations, since we are using
	  // offsetLeft which is including margin. See getBoundPosition
	  var width = node.clientWidth;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  width += (0, _shims.int)(computedStyle.borderLeftWidth);
	  width += (0, _shims.int)(computedStyle.borderRightWidth);
	  return width;
	}
	function innerHeight(node /*: HTMLElement*/) /*: number*/ {
	  var height = node.clientHeight;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  height -= (0, _shims.int)(computedStyle.paddingTop);
	  height -= (0, _shims.int)(computedStyle.paddingBottom);
	  return height;
	}
	
	function innerWidth(node /*: HTMLElement*/) /*: number*/ {
	  var width = node.clientWidth;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  width -= (0, _shims.int)(computedStyle.paddingLeft);
	  width -= (0, _shims.int)(computedStyle.paddingRight);
	  return width;
	}
	
	// Get from offsetParent
	function offsetXYFromParent(evt /*: {clientX: number, clientY: number}*/, offsetParent /*: HTMLElement*/) /*: ControlPosition*/ {
	  var isBody = offsetParent === offsetParent.ownerDocument.body;
	  var offsetParentRect = isBody ? { left: 0, top: 0 } : offsetParent.getBoundingClientRect();
	
	  var x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
	  var y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;
	
	  return { x: x, y: y };
	}
	
	function createCSSTransform(_ref) /*: Object*/ {
	  var x = _ref.x,
	      y = _ref.y;
	
	  // Replace unitless items with px
	  return _defineProperty({}, (0, _getPrefix.browserPrefixToKey)('transform', _getPrefix2.default), 'translate(' + x + 'px,' + y + 'px)');
	}
	
	function createSVGTransform(_ref3) /*: string*/ {
	  var x = _ref3.x,
	      y = _ref3.y;
	
	  return 'translate(' + x + ',' + y + ')';
	}
	
	function getTouch(e /*: MouseTouchEvent*/, identifier /*: number*/) /*: ?{clientX: number, clientY: number}*/ {
	  return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, function (t) {
	    return identifier === t.identifier;
	  }) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, function (t) {
	    return identifier === t.identifier;
	  });
	}
	
	function getTouchIdentifier(e /*: MouseTouchEvent*/) /*: ?number*/ {
	  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
	  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
	}
	
	// User-select Hacks:
	//
	// Useful for preventing blue highlights all over everything when dragging.
	
	// Note we're passing `document` b/c we could be iframed
	function addUserSelectStyles(doc /*: ?Document*/) {
	  if (!doc) return;
	  var styleEl = doc.getElementById('react-draggable-style-el');
	  if (!styleEl) {
	    styleEl = doc.createElement('style');
	    styleEl.type = 'text/css';
	    styleEl.id = 'react-draggable-style-el';
	    styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {background: transparent;}\n';
	    styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {background: transparent;}\n';
	    doc.getElementsByTagName('head')[0].appendChild(styleEl);
	  }
	  if (doc.body) addClassName(doc.body, 'react-draggable-transparent-selection');
	}
	
	function removeUserSelectStyles(doc /*: ?Document*/) {
	  try {
	    if (doc && doc.body) removeClassName(doc.body, 'react-draggable-transparent-selection');
	    window.getSelection().removeAllRanges(); // remove selection caused by scroll
	  } catch (e) {
	    // probably IE
	  }
	}
	
	function styleHacks() /*: Object*/ {
	  var childStyle /*: Object*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  // Workaround IE pointer events; see #51
	  // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
	  return _extends({
	    touchAction: 'none'
	  }, childStyle);
	}
	
	function addClassName(el /*: HTMLElement*/, className /*: string*/) {
	  if (el.classList) {
	    el.classList.add(className);
	  } else {
	    if (!el.className.match(new RegExp('(?:^|\\s)' + className + '(?!\\S)'))) {
	      el.className += ' ' + className;
	    }
	  }
	}
	
	function removeClassName(el /*: HTMLElement*/, className /*: string*/) {
	  if (el.classList) {
	    el.classList.remove(className);
	  } else {
	    el.className = el.className.replace(new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g'), '');
	  }
	}
	
	/***/ }),
	/* 6 */
	/***/ (function(module, exports) {
	
	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;
	
	/***/ }),
	/* 7 */
	/***/ (function(module, exports, __webpack_require__) {
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(14)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(17)();
	}
	
	
	/***/ }),
	/* 8 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	
	
	var emptyFunction = __webpack_require__(1);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	module.exports = warning;
	
	/***/ }),
	/* 9 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getBoundPosition = getBoundPosition;
	exports.snapToGrid = snapToGrid;
	exports.canDragX = canDragX;
	exports.canDragY = canDragY;
	exports.getControlPosition = getControlPosition;
	exports.createCoreData = createCoreData;
	exports.createDraggableData = createDraggableData;
	
	var _shims = __webpack_require__(0);
	
	var _reactDom = __webpack_require__(4);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domFns = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*:: import type Draggable from '../Draggable';*/
	/*:: import type {Bounds, ControlPosition, DraggableData, MouseTouchEvent} from './types';*/
	/*:: import type DraggableCore from '../DraggableCore';*/
	function getBoundPosition(draggable /*: Draggable*/, x /*: number*/, y /*: number*/) /*: [number, number]*/ {
	  // If no bounds, short-circuit and move on
	  if (!draggable.props.bounds) return [x, y];
	
	  // Clone new bounds
	  var bounds = draggable.props.bounds;
	
	  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
	  var node = findDOMNode(draggable);
	
	  if (typeof bounds === 'string') {
	    var ownerDocument = node.ownerDocument;
	
	    var ownerWindow = ownerDocument.defaultView;
	    var boundNode = void 0;
	    if (bounds === 'parent') {
	      boundNode = node.parentNode;
	    } else {
	      boundNode = ownerDocument.querySelector(bounds);
	    }
	    if (!(boundNode instanceof HTMLElement)) {
	      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
	    }
	    var nodeStyle = ownerWindow.getComputedStyle(node);
	    var boundNodeStyle = ownerWindow.getComputedStyle(boundNode);
	    // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
	    bounds = {
	      left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.marginLeft),
	      top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.marginTop),
	      right: (0, _domFns.innerWidth)(boundNode) - (0, _domFns.outerWidth)(node) - node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingRight) - (0, _shims.int)(nodeStyle.marginRight),
	      bottom: (0, _domFns.innerHeight)(boundNode) - (0, _domFns.outerHeight)(node) - node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingBottom) - (0, _shims.int)(nodeStyle.marginBottom)
	    };
	  }
	
	  // Keep x and y below right and bottom limits...
	  if ((0, _shims.isNum)(bounds.right)) x = Math.min(x, bounds.right);
	  if ((0, _shims.isNum)(bounds.bottom)) y = Math.min(y, bounds.bottom);
	
	  // But above left and top limits.
	  if ((0, _shims.isNum)(bounds.left)) x = Math.max(x, bounds.left);
	  if ((0, _shims.isNum)(bounds.top)) y = Math.max(y, bounds.top);
	
	  return [x, y];
	}
	
	function snapToGrid(grid /*: [number, number]*/, pendingX /*: number*/, pendingY /*: number*/) /*: [number, number]*/ {
	  var x = Math.round(pendingX / grid[0]) * grid[0];
	  var y = Math.round(pendingY / grid[1]) * grid[1];
	  return [x, y];
	}
	
	function canDragX(draggable /*: Draggable*/) /*: boolean*/ {
	  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
	}
	
	function canDragY(draggable /*: Draggable*/) /*: boolean*/ {
	  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
	}
	
	// Get {x, y} positions from event.
	function getControlPosition(e /*: MouseTouchEvent*/, touchIdentifier /*: ?number*/, draggableCore /*: DraggableCore*/) /*: ?ControlPosition*/ {
	  var touchObj = typeof touchIdentifier === 'number' ? (0, _domFns.getTouch)(e, touchIdentifier) : null;
	  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch
	  var node = findDOMNode(draggableCore);
	  // User can provide an offsetParent if desired.
	  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
	  return (0, _domFns.offsetXYFromParent)(touchObj || e, offsetParent);
	}
	
	// Create an data object exposed by <DraggableCore>'s events
	function createCoreData(draggable /*: DraggableCore*/, x /*: number*/, y /*: number*/) /*: DraggableData*/ {
	  var state = draggable.state;
	  var isStart = !(0, _shims.isNum)(state.lastX);
	  var node = findDOMNode(draggable);
	
	  if (isStart) {
	    // If this is our first move, use the x and y as last coords.
	    return {
	      node: node,
	      deltaX: 0, deltaY: 0,
	      lastX: x, lastY: y,
	      x: x, y: y
	    };
	  } else {
	    // Otherwise calculate proper values.
	    return {
	      node: node,
	      deltaX: x - state.lastX, deltaY: y - state.lastY,
	      lastX: state.lastX, lastY: state.lastY,
	      x: x, y: y
	    };
	  }
	}
	
	// Create an data exposed by <Draggable>'s events
	function createDraggableData(draggable /*: Draggable*/, coreData /*: DraggableData*/) /*: DraggableData*/ {
	  return {
	    node: coreData.node,
	    x: draggable.state.x + coreData.deltaX,
	    y: draggable.state.y + coreData.deltaY,
	    deltaX: coreData.deltaX,
	    deltaY: coreData.deltaY,
	    lastX: draggable.state.x,
	    lastY: draggable.state.y
	  };
	}
	
	// A lot faster than stringify/parse
	function cloneBounds(bounds /*: Bounds*/) /*: Bounds*/ {
	  return {
	    left: bounds.left,
	    top: bounds.top,
	    right: bounds.right,
	    bottom: bounds.bottom
	  };
	}
	
	function findDOMNode(draggable /*: Draggable | DraggableCore*/) /*: HTMLElement*/ {
	  var node = _reactDom2.default.findDOMNode(draggable);
	  if (!node) {
	    throw new Error('<DraggableCore>: Unmounted during event!');
	  }
	  // $FlowIgnore we can't assert on HTMLElement due to tests... FIXME
	  return node;
	}
	
	/***/ }),
	/* 10 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	/* WEBPACK VAR INJECTION */(function(process) {
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(7);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(4);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domFns = __webpack_require__(5);
	
	var _positionFns = __webpack_require__(9);
	
	var _shims = __webpack_require__(0);
	
	var _log = __webpack_require__(11);
	
	var _log2 = _interopRequireDefault(_log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*:: import type {EventHandler, MouseTouchEvent} from './utils/types';*/
	
	
	// Simple abstraction for dragging events names.
	/*:: import type {Element as ReactElement} from 'react';*/
	var eventsFor = {
	  touch: {
	    start: 'touchstart',
	    move: 'touchmove',
	    stop: 'touchend'
	  },
	  mouse: {
	    start: 'mousedown',
	    move: 'mousemove',
	    stop: 'mouseup'
	  }
	};
	
	// Default to mouse events.
	var dragEventFor = eventsFor.mouse;
	
	/*:: type DraggableCoreState = {
	  dragging: boolean,
	  lastX: number,
	  lastY: number,
	  touchIdentifier: ?number
	};*/
	/*:: export type DraggableBounds = {
	  left: number,
	  right: number,
	  top: number,
	  bottom: number,
	};*/
	/*:: export type DraggableData = {
	  node: HTMLElement,
	  x: number, y: number,
	  deltaX: number, deltaY: number,
	  lastX: number, lastY: number,
	};*/
	/*:: export type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void;*/
	/*:: export type ControlPosition = {x: number, y: number};*/
	
	
	//
	// Define <DraggableCore>.
	//
	// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
	// work well with libraries that require more control over the element.
	//
	
	/*:: export type DraggableCoreProps = {
	  allowAnyClick: boolean,
	  cancel: string,
	  children: ReactElement<any>,
	  disabled: boolean,
	  enableUserSelectHack: boolean,
	  offsetParent: HTMLElement,
	  grid: [number, number],
	  handle: string,
	  onStart: DraggableEventHandler,
	  onDrag: DraggableEventHandler,
	  onStop: DraggableEventHandler,
	  onMouseDown: (e: MouseEvent) => void,
	};*/
	
	var DraggableCore = function (_React$Component) {
	  _inherits(DraggableCore, _React$Component);
	
	  function DraggableCore() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, DraggableCore);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DraggableCore.__proto__ || Object.getPrototypeOf(DraggableCore)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      dragging: false,
	      // Used while dragging to determine deltas.
	      lastX: NaN, lastY: NaN,
	      touchIdentifier: null
	    }, _this.handleDragStart = function (e) {
	      // Make it possible to attach event handlers on top of this one.
	      _this.props.onMouseDown(e);
	
	      // Only accept left-clicks.
	      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false;
	
	      // Get nodes. Be sure to grab relative document (could be iframed)
	      var thisNode = _reactDom2.default.findDOMNode(_this);
	      if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
	        throw new Error('<DraggableCore> not mounted on DragStart!');
	      }
	      var ownerDocument = thisNode.ownerDocument;
	
	      // Short circuit if handle or cancel prop was provided and selector doesn't match.
	
	      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.handle, thisNode) || _this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.cancel, thisNode)) {
	        return;
	      }
	
	      // Set touch identifier in component state if this is a touch event. This allows us to
	      // distinguish between individual touches on multitouch screens by identifying which
	      // touchpoint was set to this element.
	      var touchIdentifier = (0, _domFns.getTouchIdentifier)(e);
	      _this.setState({ touchIdentifier: touchIdentifier });
	
	      // Get the current drag point from the event. This is used as the offset.
	      var position = (0, _positionFns.getControlPosition)(e, touchIdentifier, _this);
	      if (position == null) return; // not possible but satisfies flow
	      var x = position.x,
	          y = position.y;
	
	      // Create an event object with all the data parents need to make a decision here.
	
	      var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);
	
	      (0, _log2.default)('DraggableCore: handleDragStart: %j', coreEvent);
	
	      // Call event handler. If it returns explicit false, cancel.
	      (0, _log2.default)('calling', _this.props.onStart);
	      var shouldUpdate = _this.props.onStart(e, coreEvent);
	      if (shouldUpdate === false) return;
	
	      // Add a style to the body to disable user-select. This prevents text from
	      // being selected all over the page.
	      if (_this.props.enableUserSelectHack) (0, _domFns.addUserSelectStyles)(ownerDocument);
	
	      // Initiate dragging. Set the current x and y as offsets
	      // so we know how much we've moved during the drag. This allows us
	      // to drag elements around even if they have been moved, without issue.
	      _this.setState({
	        dragging: true,
	
	        lastX: x,
	        lastY: y
	      });
	
	      // Add events to the document directly so we catch when the user's mouse/touch moves outside of
	      // this element. We use different events depending on whether or not we have detected that this
	      // is a touch-capable device.
	      (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
	      (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
	    }, _this.handleDrag = function (e) {
	
	      // Prevent scrolling on mobile devices, like ipad/iphone.
	      if (e.type === 'touchmove') e.preventDefault();
	
	      // Get the current drag point from the event. This is used as the offset.
	      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _this);
	      if (position == null) return;
	      var x = position.x,
	          y = position.y;
	
	      // Snap to grid if prop has been provided
	
	      if (Array.isArray(_this.props.grid)) {
	        var _deltaX = x - _this.state.lastX,
	            _deltaY = y - _this.state.lastY;
	
	        var _snapToGrid = (0, _positionFns.snapToGrid)(_this.props.grid, _deltaX, _deltaY);
	
	        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);
	
	        _deltaX = _snapToGrid2[0];
	        _deltaY = _snapToGrid2[1];
	
	        if (!_deltaX && !_deltaY) return; // skip useless drag
	        x = _this.state.lastX + _deltaX, y = _this.state.lastY + _deltaY;
	      }
	
	      var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);
	
	      (0, _log2.default)('DraggableCore: handleDrag: %j', coreEvent);
	
	      // Call event handler. If it returns explicit false, trigger end.
	      var shouldUpdate = _this.props.onDrag(e, coreEvent);
	      if (shouldUpdate === false) {
	        try {
	          // $FlowIgnore
	          _this.handleDragStop(new MouseEvent('mouseup'));
	        } catch (err) {
	          // Old browsers
	          var event = ((document.createEvent('MouseEvents') /*: any*/) /*: MouseTouchEvent*/);
	          // I see why this insanity was deprecated
	          // $FlowIgnore
	          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	          _this.handleDragStop(event);
	        }
	        return;
	      }
	
	      _this.setState({
	        lastX: x,
	        lastY: y
	      });
	    }, _this.handleDragStop = function (e) {
	      if (!_this.state.dragging) return;
	
	      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _this);
	      if (position == null) return;
	      var x = position.x,
	          y = position.y;
	
	      var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);
	
	      var thisNode = _reactDom2.default.findDOMNode(_this);
	      if (thisNode) {
	        // Remove user-select hack
	        if (_this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(thisNode.ownerDocument);
	      }
	
	      (0, _log2.default)('DraggableCore: handleDragStop: %j', coreEvent);
	
	      // Reset the el.
	      _this.setState({
	        dragging: false,
	        lastX: NaN,
	        lastY: NaN
	      });
	
	      // Call event handler
	      _this.props.onStop(e, coreEvent);
	
	      if (thisNode) {
	        // Remove event handlers
	        (0, _log2.default)('DraggableCore: Removing handlers');
	        (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.move, _this.handleDrag);
	        (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.stop, _this.handleDragStop);
	      }
	    }, _this.onMouseDown = function (e) {
	      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse
	
	      return _this.handleDragStart(e);
	    }, _this.onMouseUp = function (e) {
	      dragEventFor = eventsFor.mouse;
	
	      return _this.handleDragStop(e);
	    }, _this.onTouchStart = function (e) {
	      // We're on a touch device now, so change the event handlers
	      dragEventFor = eventsFor.touch;
	
	      return _this.handleDragStart(e);
	    }, _this.onTouchEnd = function (e) {
	      // We're on a touch device now, so change the event handlers
	      dragEventFor = eventsFor.touch;
	
	      return _this.handleDragStop(e);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(DraggableCore, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // Remove any leftover event handlers. Remove both touch and mouse handlers in case
	      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.
	      var thisNode = _reactDom2.default.findDOMNode(this);
	      if (thisNode) {
	        var ownerDocument = thisNode.ownerDocument;
	
	        (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
	        (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
	        (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
	        (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
	        if (this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(ownerDocument);
	      }
	    }
	
	    // Same as onMouseDown (start drag), but now consider this a touch device.
	
	  }, {
	    key: 'render',
	    value: function render() {
	      // Reuse the child provided
	      // This makes it flexible to use whatever element is wanted (div, ul, etc)
	      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
	        style: (0, _domFns.styleHacks)(this.props.children.props.style),
	
	        // Note: mouseMove handler is attached to document so it will still function
	        // when the user drags quickly and leaves the bounds of the element.
	        onMouseDown: this.onMouseDown,
	        onTouchStart: this.onTouchStart,
	        onMouseUp: this.onMouseUp,
	        onTouchEnd: this.onTouchEnd
	      });
	    }
	  }]);
	
	  return DraggableCore;
	}(_react2.default.Component);
	
	DraggableCore.displayName = 'DraggableCore';
	DraggableCore.propTypes = {
	  /**
	   * `allowAnyClick` allows dragging using any mouse button.
	   * By default, we only accept the left button.
	   *
	   * Defaults to `false`.
	   */
	  allowAnyClick: _propTypes2.default.bool,
	
	  /**
	   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
	   * with the exception of `onMouseDown`, will not fire.
	   */
	  disabled: _propTypes2.default.bool,
	
	  /**
	   * By default, we add 'user-select:none' attributes to the document body
	   * to prevent ugly text selection during drag. If this is causing problems
	   * for your app, set this to `false`.
	   */
	  enableUserSelectHack: _propTypes2.default.bool,
	
	  /**
	   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
	   * instead of using the parent node.
	   */
	  offsetParent: function offsetParent(props /*: DraggableCoreProps*/, propName /*: $Keys<DraggableCoreProps>*/) {
	    if (process.browser === true && props[propName] && props[propName].nodeType !== 1) {
	      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
	    }
	  },
	
	  /**
	   * `grid` specifies the x and y that dragging should snap to.
	   */
	  grid: _propTypes2.default.arrayOf(_propTypes2.default.number),
	
	  /**
	   * `handle` specifies a selector to be used as the handle that initiates drag.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *         return (
	   *            <Draggable handle=".handle">
	   *              <div>
	   *                  <div className="handle">Click me to drag</div>
	   *                  <div>This is some other content</div>
	   *              </div>
	   *           </Draggable>
	   *         );
	   *       }
	   *   });
	   * ```
	   */
	  handle: _propTypes2.default.string,
	
	  /**
	   * `cancel` specifies a selector to be used to prevent drag initialization.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *           return(
	   *               <Draggable cancel=".cancel">
	   *                   <div>
	   *                     <div className="cancel">You can't drag from here</div>
	   *                     <div>Dragging here works fine</div>
	   *                   </div>
	   *               </Draggable>
	   *           );
	   *       }
	   *   });
	   * ```
	   */
	  cancel: _propTypes2.default.string,
	
	  /**
	   * Called when dragging starts.
	   * If this function returns the boolean false, dragging will be canceled.
	   */
	  onStart: _propTypes2.default.func,
	
	  /**
	   * Called while dragging.
	   * If this function returns the boolean false, dragging will be canceled.
	   */
	  onDrag: _propTypes2.default.func,
	
	  /**
	   * Called when dragging stops.
	   * If this function returns the boolean false, the drag will remain active.
	   */
	  onStop: _propTypes2.default.func,
	
	  /**
	   * A workaround option which can be passed if onMouseDown needs to be accessed,
	   * since it'll always be blocked (as there is internal use of onMouseDown)
	   */
	  onMouseDown: _propTypes2.default.func,
	
	  /**
	   * These properties should be defined on the child, not here.
	   */
	  className: _shims.dontSetMe,
	  style: _shims.dontSetMe,
	  transform: _shims.dontSetMe
	};
	DraggableCore.defaultProps = {
	  allowAnyClick: false, // by default only accept left click
	  cancel: null,
	  disabled: false,
	  enableUserSelectHack: true,
	  offsetParent: null,
	  handle: null,
	  grid: null,
	  transform: null,
	  onStart: function onStart() {},
	  onDrag: function onDrag() {},
	  onStop: function onStop() {},
	  onMouseDown: function onMouseDown() {}
	};
	exports.default = DraggableCore;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))
	
	/***/ }),
	/* 11 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = log;
	
	/*eslint no-console:0*/
	function log() {
	  var _console;
	
	  if (undefined) (_console = console).log.apply(_console, arguments);
	}
	
	/***/ }),
	/* 12 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	
	var Draggable = __webpack_require__(13).default;
	
	// Previous versions of this lib exported <Draggable> as the root export. As to not break
	// them, or TypeScript, we export *both* as the root and as 'default'.
	// See https://github.com/mzabriskie/react-draggable/pull/254
	// and https://github.com/mzabriskie/react-draggable/issues/266
	module.exports = Draggable;
	module.exports.default = Draggable;
	module.exports.DraggableCore = __webpack_require__(10).default;
	
	/***/ }),
	/* 13 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(7);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(4);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(18);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _domFns = __webpack_require__(5);
	
	var _positionFns = __webpack_require__(9);
	
	var _shims = __webpack_require__(0);
	
	var _DraggableCore = __webpack_require__(10);
	
	var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
	
	var _log = __webpack_require__(11);
	
	var _log2 = _interopRequireDefault(_log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*:: import type {ControlPosition, DraggableBounds, DraggableCoreProps} from './DraggableCore';*/
	/*:: import type {DraggableEventHandler} from './utils/types';*/
	/*:: import type {Element as ReactElement} from 'react';*/
	/*:: type DraggableState = {
	  dragging: boolean,
	  dragged: boolean,
	  x: number, y: number,
	  slackX: number, slackY: number,
	  isElementSVG: boolean
	};*/
	
	
	//
	// Define <Draggable>
	//
	
	/*:: export type DraggableProps = {
	  ...$Exact<DraggableCoreProps>,
	  axis: 'both' | 'x' | 'y' | 'none',
	  bounds: DraggableBounds | string | false,
	  defaultClassName: string,
	  defaultClassNameDragging: string,
	  defaultClassNameDragged: string,
	  defaultPosition: ControlPosition,
	  position: ControlPosition,
	};*/
	
	var Draggable = function (_React$Component) {
	  _inherits(Draggable, _React$Component);
	
	  function Draggable(props /*: DraggableProps*/) {
	    _classCallCheck(this, Draggable);
	
	    var _this = _possibleConstructorReturn(this, (Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call(this, props));
	
	    _this.onDragStart = function (e, coreData) {
	      (0, _log2.default)('Draggable: onDragStart: %j', coreData);
	
	      // Short-circuit if user's callback killed it.
	      var shouldStart = _this.props.onStart(e, (0, _positionFns.createDraggableData)(_this, coreData));
	      // Kills start event on core as well, so move handlers are never bound.
	      if (shouldStart === false) return false;
	
	      _this.setState({ dragging: true, dragged: true });
	    };
	
	    _this.onDrag = function (e, coreData) {
	      if (!_this.state.dragging) return false;
	      (0, _log2.default)('Draggable: onDrag: %j', coreData);
	
	      var uiData = (0, _positionFns.createDraggableData)(_this, coreData);
	
	      var newState /*: $Shape<DraggableState>*/ = {
	        x: uiData.x,
	        y: uiData.y
	      };
	
	      // Keep within bounds.
	      if (_this.props.bounds) {
	        // Save original x and y.
	        var _x = newState.x,
	            _y = newState.y;
	
	        // Add slack to the values used to calculate bound position. This will ensure that if
	        // we start removing slack, the element won't react to it right away until it's been
	        // completely removed.
	
	        newState.x += _this.state.slackX;
	        newState.y += _this.state.slackY;
	
	        // Get bound position. This will ceil/floor the x and y within the boundaries.
	
	        var _getBoundPosition = (0, _positionFns.getBoundPosition)(_this, newState.x, newState.y),
	            _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2),
	            newStateX = _getBoundPosition2[0],
	            newStateY = _getBoundPosition2[1];
	
	        newState.x = newStateX;
	        newState.y = newStateY;
	
	        // Recalculate slack by noting how much was shaved by the boundPosition handler.
	        newState.slackX = _this.state.slackX + (_x - newState.x);
	        newState.slackY = _this.state.slackY + (_y - newState.y);
	
	        // Update the event we fire to reflect what really happened after bounds took effect.
	        uiData.x = newState.x;
	        uiData.y = newState.y;
	        uiData.deltaX = newState.x - _this.state.x;
	        uiData.deltaY = newState.y - _this.state.y;
	      }
	
	      // Short-circuit if user's callback killed it.
	      var shouldUpdate = _this.props.onDrag(e, uiData);
	      if (shouldUpdate === false) return false;
	
	      _this.setState(newState);
	    };
	
	    _this.onDragStop = function (e, coreData) {
	      if (!_this.state.dragging) return false;
	
	      // Short-circuit if user's callback killed it.
	      var shouldStop = _this.props.onStop(e, (0, _positionFns.createDraggableData)(_this, coreData));
	      if (shouldStop === false) return false;
	
	      (0, _log2.default)('Draggable: onDragStop: %j', coreData);
	
	      var newState /*: $Shape<DraggableState>*/ = {
	        dragging: false,
	        slackX: 0,
	        slackY: 0
	      };
	
	      // If this is a controlled component, the result of this operation will be to
	      // revert back to the old position. We expect a handler on `onDragStop`, at the least.
	      var controlled = Boolean(_this.props.position);
	      if (controlled) {
	        var _this$props$position = _this.props.position,
	            _x2 = _this$props$position.x,
	            _y2 = _this$props$position.y;
	
	        newState.x = _x2;
	        newState.y = _y2;
	      }
	
	      _this.setState(newState);
	    };
	
	    _this.state = {
	      // Whether or not we are currently dragging.
	      dragging: false,
	
	      // Whether or not we have been dragged before.
	      dragged: false,
	
	      // Current transform x and y.
	      x: props.position ? props.position.x : props.defaultPosition.x,
	      y: props.position ? props.position.y : props.defaultPosition.y,
	
	      // Used for compensating for out-of-bounds drags
	      slackX: 0, slackY: 0,
	
	      // Can only determine if SVG after mounting
	      isElementSVG: false
	    };
	    return _this;
	  }
	
	  _createClass(Draggable, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (this.props.position && !(this.props.onDrag || this.props.onStop)) {
	        // eslint-disable-next-line
	        console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // Check to see if the element passed is an instanceof SVGElement
	      if (typeof window.SVGElement !== 'undefined' && _reactDom2.default.findDOMNode(this) instanceof window.SVGElement) {
	        this.setState({ isElementSVG: true });
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps /*: Object*/) {
	      // Set x/y if position has changed
	      if (nextProps.position && (!this.props.position || nextProps.position.x !== this.props.position.x || nextProps.position.y !== this.props.position.y)) {
	        this.setState({ x: nextProps.position.x, y: nextProps.position.y });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.setState({ dragging: false }); // prevents invariant if unmounted while dragging
	    }
	  }, {
	    key: 'render',
	    value: function render() /*: ReactElement<any>*/ {
	      var _classNames;
	
	      var style = {},
	          svgTransform = null;
	
	      // If this is controlled, we don't want to move it - unless it's dragging.
	      var controlled = Boolean(this.props.position);
	      var draggable = !controlled || this.state.dragging;
	
	      var position = this.props.position || this.props.defaultPosition;
	      var transformOpts = {
	        // Set left if horizontal drag is enabled
	        x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : position.x,
	
	        // Set top if vertical drag is enabled
	        y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : position.y
	      };
	
	      // If this element was SVG, we use the `transform` attribute.
	      if (this.state.isElementSVG) {
	        svgTransform = (0, _domFns.createSVGTransform)(transformOpts);
	      } else {
	        // Add a CSS transform to move the element around. This allows us to move the element around
	        // without worrying about whether or not it is relatively or absolutely positioned.
	        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
	        // has a clean slate.
	        style = (0, _domFns.createCSSTransform)(transformOpts);
	      }
	
	      var _props = this.props,
	          defaultClassName = _props.defaultClassName,
	          defaultClassNameDragging = _props.defaultClassNameDragging,
	          defaultClassNameDragged = _props.defaultClassNameDragged;
	
	
	      var children = _react2.default.Children.only(this.props.children);
	
	      // Mark with class while dragging
	      var className = (0, _classnames2.default)(children.props.className || '', defaultClassName, (_classNames = {}, _defineProperty(_classNames, defaultClassNameDragging, this.state.dragging), _defineProperty(_classNames, defaultClassNameDragged, this.state.dragged), _classNames));
	
	      // Reuse the child provided
	      // This makes it flexible to use whatever element is wanted (div, ul, etc)
	      return _react2.default.createElement(
	        _DraggableCore2.default,
	        _extends({}, this.props, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
	        _react2.default.cloneElement(children, {
	          className: className,
	          style: _extends({}, children.props.style, style),
	          transform: svgTransform
	        })
	      );
	    }
	  }]);
	
	  return Draggable;
	}(_react2.default.Component);
	
	Draggable.displayName = 'Draggable';
	Draggable.propTypes = _extends({}, _DraggableCore2.default.propTypes, {
	
	  /**
	   * `axis` determines which axis the draggable can move.
	   *
	   *  Note that all callbacks will still return data as normal. This only
	   *  controls flushing to the DOM.
	   *
	   * 'both' allows movement horizontally and vertically.
	   * 'x' limits movement to horizontal axis.
	   * 'y' limits movement to vertical axis.
	   * 'none' limits all movement.
	   *
	   * Defaults to 'both'.
	   */
	  axis: _propTypes2.default.oneOf(['both', 'x', 'y', 'none']),
	
	  /**
	   * `bounds` determines the range of movement available to the element.
	   * Available values are:
	   *
	   * 'parent' restricts movement within the Draggable's parent node.
	   *
	   * Alternatively, pass an object with the following properties, all of which are optional:
	   *
	   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
	   *
	   * All values are in px.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *         return (
	   *            <Draggable bounds={{right: 300, bottom: 300}}>
	   *              <div>Content</div>
	   *           </Draggable>
	   *         );
	   *       }
	   *   });
	   * ```
	   */
	  bounds: _propTypes2.default.oneOfType([_propTypes2.default.shape({
	    left: _propTypes2.default.number,
	    right: _propTypes2.default.number,
	    top: _propTypes2.default.number,
	    bottom: _propTypes2.default.number
	  }), _propTypes2.default.string, _propTypes2.default.oneOf([false])]),
	
	  defaultClassName: _propTypes2.default.string,
	  defaultClassNameDragging: _propTypes2.default.string,
	  defaultClassNameDragged: _propTypes2.default.string,
	
	  /**
	   * `defaultPosition` specifies the x and y that the dragged item should start at
	   *
	   * Example:
	   *
	   * ```jsx
	   *      let App = React.createClass({
	   *          render: function () {
	   *              return (
	   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
	   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
	   *                  </Draggable>
	   *              );
	   *          }
	   *      });
	   * ```
	   */
	  defaultPosition: _propTypes2.default.shape({
	    x: _propTypes2.default.number,
	    y: _propTypes2.default.number
	  }),
	
	  /**
	   * `position`, if present, defines the current position of the element.
	   *
	   *  This is similar to how form elements in React work - if no `position` is supplied, the component
	   *  is uncontrolled.
	   *
	   * Example:
	   *
	   * ```jsx
	   *      let App = React.createClass({
	   *          render: function () {
	   *              return (
	   *                  <Draggable position={{x: 25, y: 25}}>
	   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
	   *                  </Draggable>
	   *              );
	   *          }
	   *      });
	   * ```
	   */
	  position: _propTypes2.default.shape({
	    x: _propTypes2.default.number,
	    y: _propTypes2.default.number
	  }),
	
	  /**
	   * These properties should be defined on the child, not here.
	   */
	  className: _shims.dontSetMe,
	  style: _shims.dontSetMe,
	  transform: _shims.dontSetMe
	});
	Draggable.defaultProps = _extends({}, _DraggableCore2.default.defaultProps, {
	  axis: 'both',
	  bounds: false,
	  defaultClassName: 'react-draggable',
	  defaultClassNameDragging: 'react-draggable-dragging',
	  defaultClassNameDragged: 'react-draggable-dragged',
	  defaultPosition: { x: 0, y: 0 },
	  position: null
	});
	exports.default = Draggable;
	
	/***/ }),
	/* 14 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	
	
	var emptyFunction = __webpack_require__(1);
	var invariant = __webpack_require__(2);
	var warning = __webpack_require__(8);
	var assign = __webpack_require__(15);
	
	var ReactPropTypesSecret = __webpack_require__(3);
	var checkPropTypes = __webpack_require__(16);
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};
	
	
	/***/ }),
	/* 15 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};
	
	
	/***/ }),
	/* 16 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	
	
	if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(2);
	  var warning = __webpack_require__(8);
	  var ReactPropTypesSecret = __webpack_require__(3);
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;
	
	
	/***/ }),
	/* 17 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	
	
	var emptyFunction = __webpack_require__(1);
	var invariant = __webpack_require__(2);
	var ReactPropTypesSecret = __webpack_require__(3);
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};
	
	
	/***/ }),
	/* 18 */
	/***/ (function(module, exports, __webpack_require__) {
	
	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
					__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());
	
	
	/***/ }),
	/* 19 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPrefix = getPrefix;
	exports.browserPrefixToKey = browserPrefixToKey;
	exports.browserPrefixToStyle = browserPrefixToStyle;
	var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
	function getPrefix() /*: string*/ {
	  var prop /*: string*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
	
	  // Checking specifically for 'window.document' is for pseudo-browser server-side
	  // environments that define 'window' as the global context.
	  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
	  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';
	
	  var style = window.document.documentElement.style;
	
	  if (prop in style) return '';
	
	  for (var i = 0; i < prefixes.length; i++) {
	    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
	  }
	
	  return '';
	}
	
	function browserPrefixToKey(prop /*: string*/, prefix /*: string*/) /*: string*/ {
	  return prefix ? '' + prefix + kebabToTitleCase(prop) : prop;
	}
	
	function browserPrefixToStyle(prop /*: string*/, prefix /*: string*/) /*: string*/ {
	  return prefix ? '-' + prefix.toLowerCase() + '-' + prop : prop;
	}
	
	function kebabToTitleCase(str /*: string*/) /*: string*/ {
	  var out = '';
	  var shouldCapitalize = true;
	  for (var i = 0; i < str.length; i++) {
	    if (shouldCapitalize) {
	      out += str[i].toUpperCase();
	      shouldCapitalize = false;
	    } else if (str[i] === '-') {
	      shouldCapitalize = true;
	    } else {
	      out += str[i];
	    }
	  }
	  return out;
	}
	
	// Default export is the prefix itself, like 'Moz', 'Webkit', etc
	// Note that you may have to re-test for certain things; for instance, Chrome 50
	// can handle unprefixed `transform`, but not unprefixed `user-select`
	exports.default = getPrefix();
	
	/***/ }),
	/* 20 */
	/***/ (function(module, exports) {
	
	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };
	
	
	/***/ })
	/******/ ]);
	});
	//# sourceMappingURL=react-draggable.js.map

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * Lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright JS Foundation and other contributors <https://js.foundation/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    asyncTag = '[object AsyncFunction]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    nullTag = '[object Null]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    proxyTag = '[object Proxy]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    undefinedTag = '[object Undefined]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}
	
	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice,
	    symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols,
	    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeKeys = overArg(Object.keys, Object);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}
	
	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	
	  this.size = data.size;
	  return result;
	}
	
	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);
	
	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;
	
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are compared by strict equality, i.e. `===`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = isEqual;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(132)(module)))

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactBeautifulDnd = __webpack_require__(83);
	
	var _util = __webpack_require__(185);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lodash = __webpack_require__(183);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var reorder = function reorder(list, startIndex, endIndex) {
	  var result = Array.from(list);
	
	  var _result$splice = result.splice(startIndex, 1),
	      _result$splice2 = _slicedToArray(_result$splice, 1),
	      removed = _result$splice2[0];
	
	  result.splice(endIndex, 0, removed);
	
	  return result;
	};
	
	var Vertical = function (_Component) {
	  _inherits(Vertical, _Component);
	
	  function Vertical(props) {
	    _classCallCheck(this, Vertical);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.onDragEnd = function (result) {
	      if (!result.destination) {
	        return;
	      }
	      var items = reorder(_this.state.items, result.source.index, result.destination.index);
	
	      _this.setState({
	        items: items
	      });
	      _this.props.onStop(result, items);
	    };
	
	    _this.onDragStart = function (result) {
	      _this.props.onStart(result, _this.state.items);
	    };
	
	    _this.state = {
	      items: _this.props.list || []
	    };
	    return _this;
	  }
	
	  Vertical.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (!(0, _lodash2['default'])(this.state.items, nextProps.list)) {
	      this.setState({
	        items: nextProps.list
	      });
	    }
	  };
	
	  Vertical.prototype.render = function render() {
	    var _this2 = this;
	
	    var _props = this.props,
	        onStart = _props.onStart,
	        onDrag = _props.onDrag,
	        onStop = _props.onStop,
	        onDragUpdate = _props.onDragUpdate,
	        dropClass = _props.dropClass,
	        dropOverClass = _props.dropOverClass,
	        dragClass = _props.dragClass,
	        dragingClass = _props.dragingClass,
	        showKey = _props.showKey,
	        type = _props.type;
	
	
	    return _react2['default'].createElement(
	      _reactBeautifulDnd.DragDropContext,
	      { onDragEnd: this.onDragEnd, onDragStart: this.onDragStart, onDragUpdate: onDragUpdate },
	      _react2['default'].createElement(
	        _reactBeautifulDnd.Droppable,
	        { droppableId: 'droppable', direction: type },
	        function (provided, snapshot) {
	          return _react2['default'].createElement(
	            'div',
	            {
	              ref: provided.innerRef,
	              className: (0, _classnames2['default'])(_extends({}, (0, _util.getClass)(_this2.props, snapshot.isDraggingOver).drop))
	            },
	            _this2.state.items.map(function (item, index) {
	              return _react2['default'].createElement(
	                _reactBeautifulDnd.Draggable,
	                { key: index, draggableId: index, index: index },
	                function (provided, snapshot) {
	                  return _react2['default'].createElement(
	                    'div',
	                    _extends({
	                      ref: provided.innerRef
	                    }, provided.draggableProps, provided.dragHandleProps, {
	                      className: (0, _classnames2['default'])(_extends({}, (0, _util.getClass)(_this2.props, snapshot.isDragging).drag)),
	                      style: _extends({}, provided.draggableProps.style)
	                    }),
	                    showKey ? item[showKey] : item
	                  );
	                }
	              );
	            }),
	            provided.placeholder
	          );
	        }
	      )
	    );
	  };
	
	  return Vertical;
	}(_react.Component);
	
	exports['default'] = Vertical;
	module.exports = exports['default'];

/***/ }),
/* 185 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var getClass = exports.getClass = function getClass(props, doing) {
	    var dropClass = props.dropClass,
	        dropOverClass = props.dropOverClass,
	        dragClass = props.dragClass,
	        dragingClass = props.dragingClass,
	        type = props.type;
	
	
	    var verticalObj = {
	        drop: {}, drag: {}
	    };
	    verticalObj.drop['u-drop ' + dropClass] = true;
	    verticalObj.drop['u-droping ' + dropOverClass] = doing;
	    verticalObj.drag['u-drag ' + dragClass] = true;
	    verticalObj.drag['u-draging ' + dragingClass] = doing;
	
	    var horizontalObj = {
	        drop: {}, drag: {}
	    };
	    horizontalObj.drop['u-drop u-drop-horizontal ' + dropClass] = true;
	    horizontalObj.drop['u-droping u-droping-horizontal ' + dropOverClass] = doing;
	    horizontalObj.drag['u-drag u-drag-horizontal ' + dragClass] = true;
	    horizontalObj.drag['u-draging u-draging-horizontal ' + dragingClass] = doing;
	
	    switch (type) {
	        case 'vertical':
	            return verticalObj;
	            break;
	        case 'horizontal':
	            return horizontalObj;
	            break;
	        case 'betweenVertical':
	            return verticalObj;
	            break;
	        case 'betweenHorizontal':
	            return horizontalObj;
	            break;
	    }
	};

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactBeautifulDnd = __webpack_require__(83);
	
	var _util = __webpack_require__(185);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lodash = __webpack_require__(183);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var reorder = function reorder(list, startIndex, endIndex) {
	    var result = Array.from(list);
	
	    var _result$splice = result.splice(startIndex, 1),
	        _result$splice2 = _slicedToArray(_result$splice, 1),
	        removed = _result$splice2[0];
	
	    result.splice(endIndex, 0, removed);
	
	    return result;
	};
	
	/**
	 * Moves an item from one list to another list.
	 */
	var move = function move(source, destination, droppableSource, droppableDestination) {
	    var sourceClone = Array.from(source);
	    var destClone = Array.from(destination);
	
	    var _sourceClone$splice = sourceClone.splice(droppableSource.index, 1),
	        _sourceClone$splice2 = _slicedToArray(_sourceClone$splice, 1),
	        removed = _sourceClone$splice2[0];
	
	    destClone.splice(droppableDestination.index, 0, removed);
	
	    var result = {};
	    result[droppableSource.droppableId] = sourceClone;
	    result[droppableDestination.droppableId] = destClone;
	
	    return result;
	};
	
	var Between = function (_Component) {
	    _inherits(Between, _Component);
	
	    function Between(props) {
	        _classCallCheck(this, Between);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.id2List = {
	            droppable: 'items',
	            droppable2: 'selected'
	        };
	
	        _this.getList = function (id) {
	            return _this.state[_this.id2List[id]];
	        };
	
	        _this.onDragEnd = function (result) {
	            console.log(result);
	            var source = result.source,
	                destination = result.destination;
	
	            // dropped outside the list
	
	            if (!destination) {
	                return;
	            }
	            var list = _this.state.items;
	            var otherList = _this.state.selected;
	
	            if (source.droppableId === destination.droppableId) {
	                var items = reorder(_this.getList(source.droppableId), source.index, destination.index);
	
	                var state = { items: items };
	                list = items;
	
	                if (source.droppableId === 'droppable2') {
	                    state = { selected: items };
	                    otherList = items;
	                    list = _this.state.items;
	                }
	                _this.setState(state);
	            } else {
	                var _result = move(_this.getList(source.droppableId), _this.getList(destination.droppableId), source, destination);
	
	                _this.setState({
	                    items: _result.droppable,
	                    selected: _result.droppable2
	                });
	                list = _result.droppable;
	                otherList = _result.droppable2;
	            }
	            _this.props.onStop(result, {
	                list: list,
	                otherList: otherList
	            });
	        };
	
	        _this.onDragStart = function (result) {
	            _this.props.onStart(result, {
	                list: _this.state.list,
	                otherList: _this.state.selected
	            });
	        };
	
	        _this.state = {
	            items: _this.props.list,
	            selected: _this.props.otherList
	        };
	        return _this;
	    }
	
	    Between.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!(0, _lodash2['default'])(this.state.items, nextProps.list)) {
	            this.setState({
	                items: nextProps.list
	            });
	        }
	        if (!(0, _lodash2['default'])(this.state.selected, nextProps.otherList)) {
	            this.setState({
	                selected: nextProps.otherList
	            });
	        }
	    };
	
	    Between.prototype.render = function render() {
	        var _this2 = this;
	
	        var _props = this.props,
	            onStart = _props.onStart,
	            onDrag = _props.onDrag,
	            onStop = _props.onStop,
	            onDragUpdate = _props.onDragUpdate,
	            dropClass = _props.dropClass,
	            dropOverClass = _props.dropOverClass,
	            dragClass = _props.dragClass,
	            dragingClass = _props.dragingClass,
	            showKey = _props.showKey,
	            type = _props.type;
	
	
	        return _react2['default'].createElement(
	            'div',
	            { className: (0, _classnames2['default'])({
	                    'u-drag-between': type == 'betweenVertical',
	                    'u-drag-between u-drag-between-horizontal': type == 'betweenHorizontal'
	
	                }) },
	            _react2['default'].createElement(
	                _reactBeautifulDnd.DragDropContext,
	                { onDragEnd: this.onDragEnd, onDragStart: this.onDragStart, onDragUpdate: onDragUpdate },
	                _react2['default'].createElement(
	                    _reactBeautifulDnd.Droppable,
	                    { droppableId: 'droppable', direction: type == 'betweenVertical' ? 'vertical' : 'horizontal' },
	                    function (provided, snapshot) {
	                        return _react2['default'].createElement(
	                            'div',
	                            {
	                                ref: provided.innerRef,
	                                className: (0, _classnames2['default'])(_extends({}, (0, _util.getClass)(_this2.props, snapshot.isDraggingOver).drop)) },
	                            _this2.state.items.map(function (item, index) {
	                                return _react2['default'].createElement(
	                                    _reactBeautifulDnd.Draggable,
	                                    {
	                                        key: '1' + index,
	                                        draggableId: '1' + index,
	                                        index: index },
	                                    function (provided, snapshot) {
	                                        return _react2['default'].createElement(
	                                            'div',
	                                            _extends({
	                                                ref: provided.innerRef
	                                            }, provided.draggableProps, provided.dragHandleProps, {
	                                                className: (0, _classnames2['default'])(_extends({}, (0, _util.getClass)(_this2.props, snapshot.isDragging).drag)),
	                                                style: _extends({}, provided.draggableProps.style) }),
	                                            showKey ? item[showKey] : item
	                                        );
	                                    }
	                                );
	                            }),
	                            provided.placeholder
	                        );
	                    }
	                ),
	                _react2['default'].createElement(
	                    _reactBeautifulDnd.Droppable,
	                    { droppableId: 'droppable2', direction: type == 'betweenVertical' ? 'vertical' : 'horizontal' },
	                    function (provided, snapshot) {
	                        return _react2['default'].createElement(
	                            'div',
	                            {
	                                ref: provided.innerRef,
	                                className: (0, _classnames2['default'])(_extends({}, (0, _util.getClass)(_this2.props, snapshot.isDraggingOver).drop)) },
	                            _this2.state.selected.map(function (item, index) {
	                                return _react2['default'].createElement(
	                                    _reactBeautifulDnd.Draggable,
	                                    {
	                                        key: '2' + index,
	                                        draggableId: '2' + index,
	                                        index: index },
	                                    function (provided, snapshot) {
	                                        return _react2['default'].createElement(
	                                            'div',
	                                            _extends({
	                                                ref: provided.innerRef
	                                            }, provided.draggableProps, provided.dragHandleProps, {
	                                                className: (0, _classnames2['default'])(_extends({}, (0, _util.getClass)(_this2.props, snapshot.isDragging).drag)),
	                                                style: _extends({}, provided.draggableProps.style) }),
	                                            showKey ? item[showKey] : item
	                                        );
	                                    }
	                                );
	                            }),
	                            provided.placeholder
	                        );
	                    }
	                )
	            )
	        );
	    };
	
	    return Between;
	}(_react.Component);
	
	exports['default'] = Between;
	module.exports = exports['default'];

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(81);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	/**
	 *
	 * @title 单个元素沿x轴y轴拖拽
	 * @description 设置axis="x"只可以沿着x轴拖拽，同理axis="y"只可以沿着y轴拖拽
	 *
	 */
	
	var Demo2 = function (_Component) {
	    _inherits(Demo2, _Component);
	
	    function Demo2() {
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, Demo2);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onStart = function () {
	            console.log('start');
	        }, _this.onStop = function () {
	            console.log('stop');
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    Demo2.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(
	                _index2['default'],
	                { axis: 'x', onStart: this.onStart, onStop: this.onStop },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'demo' },
	                    '\u6211\u53EA\u53EF\u5EF6X\u8F74\u62D6\u62FD'
	                )
	            )
	        );
	    };
	
	    return Demo2;
	}(_react.Component);
	
	exports['default'] = Demo2;
	module.exports = exports['default'];

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(81);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	/**
	 *
	 * @title 设置元素不可拖拽
	 * @description 设置 onStart 的返回值为false，则不可以拖拽
	 *
	 */
	
	var Demo3 = function (_Component) {
	    _inherits(Demo3, _Component);
	
	    function Demo3() {
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, Demo3);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onStart = function () {
	            console.log('start');
	            return false;
	        }, _this.onStop = function () {
	            console.log('stop');
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    Demo3.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(
	                _index2['default'],
	                { onStart: this.onStart, onStop: this.onStop },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'demo' },
	                    '\u6211\u4E0D\u53EF\u4EE5\u62D6\u62FD'
	                )
	            )
	        );
	    };
	
	    return Demo3;
	}(_react.Component);
	
	exports['default'] = Demo3;
	module.exports = exports['default'];

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(81);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 单个元素拖拽把手
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 设置 handle，值为选择器，例如 '.handle'
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *              设置不可拖拽区域 cancel，值为选择器，例如 '.handle'
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var Demo4 = function (_Component) {
	    _inherits(Demo4, _Component);
	
	    function Demo4() {
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, Demo4);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onStart = function () {
	            console.log('start');
	        }, _this.onStop = function () {
	            console.log('stop');
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    Demo4.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'demo-4' },
	            _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                    _index2['default'],
	                    { handle: '.handle', onStart: this.onStart, onStop: this.onStop },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'demo4 ' },
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'handle' },
	                            '\u6211\u662F\u628A\u624B'
	                        ),
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'drag-context' },
	                            '\u9700\u8981\u62D6\u62FD\u628A\u624B'
	                        )
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                    _index2['default'],
	                    { cancel: '.handle' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'demo4 ' },
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'handle' },
	                            '\u6211\u662F\u628A\u624B'
	                        ),
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'drag-context' },
	                            '\u4E0D\u8981\u62D6\u62FD\u628A\u624B'
	                        )
	                    )
	                )
	            )
	        );
	    };
	
	    return Demo4;
	}(_react.Component);
	
	exports['default'] = Demo4;
	module.exports = exports['default'];

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(81);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	/**
	 *
	 * @title 每次拖拽移动距离
	 * @description 设置 grid={[x,y]}
	 *
	 */
	
	var Demo5 = function (_Component) {
	    _inherits(Demo5, _Component);
	
	    function Demo5() {
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, Demo5);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onStart = function () {
	            console.log('start');
	        }, _this.onStop = function () {
	            console.log('stop');
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    Demo5.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(
	                _index2['default'],
	                { grid: [25, 25], onStart: this.onStart, onStop: this.onStop },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'demo' },
	                    '\u6211\u6BCF\u6B21\u62D6\u62FD\u53EF\u79FB\u52A825px'
	                )
	            )
	        );
	    };
	
	    return Demo5;
	}(_react.Component);
	
	exports['default'] = Demo5;
	module.exports = exports['default'];

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(81);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	/**
	 *
	 * @title 元素拖拽范围
	 * @description 设置上下左右可拖拽范围 bounds={{top: -xxx, left: -xxx, right: xxx, bottom: xx}}
	 *
	 */
	
	var Demo6 = function (_Component) {
	    _inherits(Demo6, _Component);
	
	    function Demo6() {
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, Demo6);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onStart = function () {
	            console.log('start');
	        }, _this.onStop = function () {
	            console.log('stop');
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    Demo6.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(
	                _index2['default'],
	                { bounds: { top: -50, left: -50, right: 50, bottom: 50 }, onStart: this.onStart, onStop: this.onStop },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'demo' },
	                    '\u6211\u53EA\u80FD\u518D\u4E0A\u4E0B\u5DE6\u53F350px\u5185\u79FB\u52A8'
	                )
	            )
	        );
	    };
	
	    return Demo6;
	}(_react.Component);
	
	exports['default'] = Demo6;
	module.exports = exports['default'];

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(81);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	/**
	 *
	 * @title 在指定容器中拖拽
	 * @description 设置只可以在指定容器中移动
	 * bounds的也可以设置为选择器,bounds=".demo8-parent"意为在class=demo8-parent的容器中移动
	 */
	
	var Demo7 = function (_Component) {
	    _inherits(Demo7, _Component);
	
	    function Demo7() {
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, Demo7);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onStart = function () {
	            console.log('start');
	        }, _this.onStop = function () {
	            console.log('stop');
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    Demo7.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(
	                'div',
	                { className: 'demo7-parent' },
	                _react2['default'].createElement(
	                    _index2['default'],
	                    { bounds: '.demo7-parent', onStart: this.onStart, onStop: this.onStop },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'demo' },
	                        '\u6211\u53EA\u80FD\u5728\u7236\u7EA7\u5143\u7D20\u4E2D\u79FB\u52A8'
	                    )
	                )
	            )
	        );
	    };
	
	    return Demo7;
	}(_react.Component);
	
	exports['default'] = Demo7;
	module.exports = exports['default'];

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(81);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 数据集合拖拽列表排序
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 增加list 可以为 [1,2,3]数组，
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *              也可以为 [{},{}...]，需要配置 showKey 。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *              也可以为 dom集合，见后边示例
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var Demo8 = function (_Component) {
	    _inherits(Demo8, _Component);
	
	    function Demo8() {
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, Demo8);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onDragStart = function (result, list) {
	            console.log('开始');
	        }, _this.onDragEnd = function (result, list) {
	            console.log('结束');
	        }, _this.onDragUpdate = function (result) {
	            console.log('update');
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    Demo8.prototype.render = function render() {
	        var list = [{
	            name: '第一',
	            code: 'a'
	        }, {
	            name: '第二',
	            code: 'b'
	        }, {
	            name: '第三',
	            code: 'c'
	        }, {
	            name: '第四',
	            code: 'd'
	        }, {
	            name: '第五',
	            code: 'e'
	        }];
	        return _react2['default'].createElement(_index2['default'], { showKey: 'name', list: list, onDragUpdate: this.onDragUpdate, onStart: this.onDragStart, onStop: this.onDragEnd });
	    };
	
	    return Demo8;
	}(_react.Component);
	
	exports['default'] = Demo8;
	module.exports = exports['default'];

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(81);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	/**
	 *
	 * @title DOM集合拖拽列表排序
	 * @description list传dom集合
	 *
	 */
	
	var Demo9 = function (_Component) {
	    _inherits(Demo9, _Component);
	
	    function Demo9() {
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, Demo9);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onDragStart = function (result, list) {
	            console.log('开始');
	        }, _this.onDragEnd = function (result, list) {
	            console.log('结束');
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    Demo9.prototype.render = function render() {
	        var list = [_react2['default'].createElement(
	            'div',
	            null,
	            'DOM\u7B2C\u4E00'
	        ), _react2['default'].createElement(
	            'div',
	            null,
	            'DOM\u7B2C\u4E8C'
	        ), _react2['default'].createElement(
	            'div',
	            null,
	            'DOM\u7B2C\u4E09'
	        ), _react2['default'].createElement(
	            'div',
	            null,
	            'DOM\u7B2C\u56DB'
	        ), _react2['default'].createElement(
	            'div',
	            null,
	            'DOM\u7B2C\u4E94'
	        )];
	        return _react2['default'].createElement(_index2['default'], { list: list, onStart: this.onDragStart, onStop: this.onDragEnd });
	    };
	
	    return Demo9;
	}(_react.Component);
	
	exports['default'] = Demo9;
	module.exports = exports['default'];

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Dnd = __webpack_require__(82);
	
	var _Dnd2 = _interopRequireDefault(_Dnd);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	/**
	 *
	 * @title 横向拖拽列表排序
	 * @description type='horizontal'
	 *
	 */
	
	var Demo90 = function (_Component) {
	    _inherits(Demo90, _Component);
	
	    function Demo90() {
	        _classCallCheck(this, Demo90);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }
	
	    Demo90.prototype.render = function render() {
	        var list = ['第一', '第二', '第三', '第四', '第五'];
	        return _react2['default'].createElement(_Dnd2['default'], { list: list, type: 'horizontal' });
	    };
	
	    return Demo90;
	}(_react.Component);
	
	exports['default'] = Demo90;
	module.exports = exports['default'];

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Dnd = __webpack_require__(82);
	
	var _Dnd2 = _interopRequireDefault(_Dnd);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	/**
	 *
	 * @title 两列纵向拖拽
	 * @description 设置 type='betweenVertical'。 如果不设置高度以及 overflow: scroll; 则高度会自动撑开
	 *
	 */
	
	var Demo90 = function (_Component) {
	    _inherits(Demo90, _Component);
	
	    function Demo90() {
	        _classCallCheck(this, Demo90);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }
	
	    Demo90.prototype.render = function render() {
	        var list1 = ['第一', '第二', '第三', '第四', '第五'];
	        var list2 = ['1', '2', '3', '4', '5'];
	        return _react2['default'].createElement(_Dnd2['default'], { className: 'demo91', list: list1, otherList: list2, type: 'betweenVertical' });
	    };
	
	    return Demo90;
	}(_react.Component);
	
	exports['default'] = Demo90;
	module.exports = exports['default'];

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Dnd = __webpack_require__(82);
	
	var _Dnd2 = _interopRequireDefault(_Dnd);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	/**
	 *
	 * @title 两列横向拖拽
	 * @description 设置 type='betweenVertical'
	 *
	 */
	
	var Demo90 = function (_Component) {
	    _inherits(Demo90, _Component);
	
	    function Demo90() {
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, Demo90);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onDragStart = function (result, list) {
	            console.log('开始');
	        }, _this.onDragEnd = function (result, listObj) {
	            console.log('结束');
	            console.log(listObj);
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    Demo90.prototype.render = function render() {
	        var list1 = ['第一', '第二', '第三', '第四', '第五'];
	        var list2 = ['1', '2', '3', '4', '5'];
	        return _react2['default'].createElement(_Dnd2['default'], { list: list1, otherList: list2, type: 'betweenHorizontal', onStart: this.onDragStart, onStop: this.onDragEnd });
	    };
	
	    return Demo90;
	}(_react.Component);
	
	exports['default'] = Demo90;
	module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=demo.js.map