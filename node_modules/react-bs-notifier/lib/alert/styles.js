"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toetag = require("toetag");

var _reactJss = require("react-jss");

var _reactJss2 = _interopRequireDefault(_reactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactJss2.default)({
	alert: {
		composes: "alert",
		marginBottom: _toetag.bootstrap.paddingBaseVertical,
		display: "inline-block",
		textAlign: "left"
	},
	info: {
		composes: "alert-info"
	},
	success: {
		composes: "alert-success"
	},
	warning: {
		composes: "alert-warning"
	},
	danger: {
		composes: "alert-danger"
	},
	dismissable: {
		composes: "alert-dismissable"
	},
	close: {
		composes: "close"
	},
	msgContainer: {
		display: "inline-block"
	},
	icon: {
		verticalAlign: "top",
		fontSize: _toetag.bootstrap.fontSizeH4,
		paddingRight: _toetag.bootstrap.paddingLargeHorizontal,
		opacity: 0.2
	},
	headline: {
		margin: 0,
		marginBottom: _toetag.bootstrap.paddingBaseVertical
	},
	body: {
		maxWidth: "40em"
	}
});