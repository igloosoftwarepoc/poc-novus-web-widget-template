var bundle = (function (exports, React) {
	'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

	var Button = function Button(props) {
	  return /*#__PURE__*/React__default["default"].createElement("div", null, props.title);
	};

	var App = function App() {
	  return /*#__PURE__*/React__default["default"].createElement(Button, {
	    title: "Hello World 123"
	  });
	};

	exports["default"] = App;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

})({}, React);
