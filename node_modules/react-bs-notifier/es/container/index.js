import React from "react";
import * as t from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import styles from "./styles";

export var ENTER_TIMEOUT = 500;
export var EXIT_TIMEOUT = 300;

var AlertContainer = function AlertContainer(_ref) {
	var _ref$position = _ref.position,
	    position = _ref$position === undefined ? "top-right" : _ref$position,
	    children = _ref.children,
	    classes = _ref.sheet.classes;

	return React.createElement(
		"div",
		{ className: classes.container + " " + classes[position] },
		React.createElement(
			ReactCSSTransitionGroup,
			{
				transitionName: classes,
				transitionEnterTimeout: ENTER_TIMEOUT,
				transitionLeaveTimeout: EXIT_TIMEOUT
			},
			children
		)
	);
};

export var PropTypes = {
	position: t.oneOf(["top-right", "top-left", "bottom-right", "bottom-left"])
};

AlertContainer.propTypes = PropTypes;

export default styles(AlertContainer);