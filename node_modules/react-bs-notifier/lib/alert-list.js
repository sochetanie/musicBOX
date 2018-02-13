"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var t = _interopRequireWildcard(_propTypes);

var _container = require("./container");

var _container2 = _interopRequireDefault(_container);

var _alertTimer = require("./alert-timer");

var _alertTimer2 = _interopRequireDefault(_alertTimer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var AlertList = function AlertList(_ref) {
	var position = _ref.position,
	    alerts = _ref.alerts,
	    onDismiss = _ref.onDismiss,
	    props = _objectWithoutProperties(_ref, ["position", "alerts", "onDismiss"]);

	return _react2.default.createElement(
		_container2.default,
		{ position: position },
		alerts.map(function (item) {
			var dismiss = onDismiss ? function () {
				return onDismiss(item);
			} : null;

			var message = item.message,
			    alertProps = _objectWithoutProperties(item, ["message"]);

			return _react2.default.createElement(
				_alertTimer2.default,
				_extends({ key: item.id }, props, alertProps, { onDismiss: dismiss }),
				message
			);
		})
	);
};

AlertList.propTypes = _extends({}, _container.PropTypes, {
	alerts: t.arrayOf(t.shape({
		id: t.any.isRequired,
		type: _alertTimer.PropTypes.type,
		headline: _alertTimer.PropTypes.headline,
		message: t.oneOfType([t.string, t.node, t.object]).isRequired
	})).isRequired,
	onDismiss: t.func,
	timeout: _alertTimer.PropTypes.timeout
});

exports.default = AlertList;