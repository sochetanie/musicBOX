"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toetag = require("toetag");

var _reactJss = require("react-jss");

var _reactJss2 = _interopRequireDefault(_reactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAGICAL_MAX_HEIGHT = "20em";

exports.default = (0, _reactJss2.default)({
	container: {
		position: "fixed",
		paddingTop: _toetag.bootstrap.paddingBaseVertical,
		paddingRight: _toetag.bootstrap.paddingBaseHorizontal,
		paddingBottom: _toetag.bootstrap.paddingBaseVertical,
		paddingLeft: _toetag.bootstrap.paddingBaseHorizontal,
		zIndex: _toetag.bootstrap.zindexNavbarFixed + 1
	},
	"top-right": {
		top: 0,
		right: 0,
		textAlign: "right"
	},
	"top-left": {
		top: 0,
		left: 0
	},
	"bottom-right": {
		bottom: 0,
		right: 0,
		textAlign: "right"
	},
	"bottom-left": {
		bottom: 0,
		left: 0
	},
	enter: {
		opacity: 0.01,
		transform: "translateX(-25%)",
		maxHeight: 0,
		overflow: "hidden",
		transition: ".25s ease-in"
	},
	enterActive: {
		opacity: 1,
		transform: "translateX(0)",
		maxHeight: MAGICAL_MAX_HEIGHT
	},
	leave: {
		opacity: 1,
		transform: "translateX(0)",
		maxHeight: MAGICAL_MAX_HEIGHT,
		overflow: "hidden",
		transition: ".25s ease-out"
	},
	leaveActive: {
		opacity: 0.01,
		transform: "translateX(25%)",
		maxHeight: 0
	}
});