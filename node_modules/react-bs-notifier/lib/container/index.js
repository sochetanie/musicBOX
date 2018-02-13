"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PropTypes = exports.EXIT_TIMEOUT = exports.ENTER_TIMEOUT = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var t = _interopRequireWildcard(_propTypes);

var _reactAddonsCssTransitionGroup = require("react-addons-css-transition-group");

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENTER_TIMEOUT = exports.ENTER_TIMEOUT = 500;
var EXIT_TIMEOUT = exports.EXIT_TIMEOUT = 300;

var AlertContainer = function AlertContainer(_ref) {
	var _ref$position = _ref.position,
	    position = _ref$position === undefined ? "top-right" : _ref$position,
	    children = _ref.children,
	    classes = _ref.sheet.classes;

	return _react2.default.createElement(
		"div",
		{ className: classes.container + " " + classes[position] },
		_react2.default.createElement(
			_reactAddonsCssTransitionGroup2.default,
			{
				transitionName: classes,
				transitionEnterTimeout: ENTER_TIMEOUT,
				transitionLeaveTimeout: EXIT_TIMEOUT
			},
			children
		)
	);
};

var PropTypes = exports.PropTypes = {
	position: t.oneOf(["top-right", "top-left", "bottom-right", "bottom-left"])
};

AlertContainer.propTypes = PropTypes;

exports.default = (0, _styles2.default)(AlertContainer);