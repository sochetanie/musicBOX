var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import * as t from "prop-types";

import Container, { PropTypes as ContainerPropTypes } from "./container";
import Alert, { PropTypes as AlertPropTypes } from "./alert-timer";

var AlertList = function AlertList(_ref) {
	var position = _ref.position,
	    alerts = _ref.alerts,
	    onDismiss = _ref.onDismiss,
	    props = _objectWithoutProperties(_ref, ["position", "alerts", "onDismiss"]);

	return React.createElement(
		Container,
		{ position: position },
		alerts.map(function (item) {
			var dismiss = onDismiss ? function () {
				return onDismiss(item);
			} : null;

			var message = item.message,
			    alertProps = _objectWithoutProperties(item, ["message"]);

			return React.createElement(
				Alert,
				_extends({ key: item.id }, props, alertProps, { onDismiss: dismiss }),
				message
			);
		})
	);
};

AlertList.propTypes = _extends({}, ContainerPropTypes, {
	alerts: t.arrayOf(t.shape({
		id: t.any.isRequired,
		type: AlertPropTypes.type,
		headline: AlertPropTypes.headline,
		message: t.oneOfType([t.string, t.node, t.object]).isRequired
	})).isRequired,
	onDismiss: t.func,
	timeout: AlertPropTypes.timeout
});

export default AlertList;