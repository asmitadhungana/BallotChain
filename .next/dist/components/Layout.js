"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _MyHeader = require("../components/MyHeader");

var _MyHeader2 = _interopRequireDefault(_MyHeader);

var _MyFooter = require("../components/MyFooter");

var _MyFooter2 = _interopRequireDefault(_MyFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "H:\\blockChain\\myElection\\components\\Layout.js";


var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Layout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Layout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement("link", {
        rel: "stylesheet",
        href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement(_semanticUiReact.Segment, {
        inverted: true,
        textAlign: "center",
        style: { minHeight: 800, padding: "1em 0em" },
        vertical: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_MyHeader2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), children, _react2.default.createElement(_MyFooter2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlNlZ21lbnQiLCJNeUhlYWRlciIsIk15Rm9vdGVyIiwiTGF5b3V0Iiwic3RhdGUiLCJjaGlsZHJlbiIsInByb3BzIiwibWluSGVpZ2h0IiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBYzs7Ozs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7NE0sQUFDSixRLEFBQVE7Ozs7OzZCQUVDO1VBQUEsQUFDQyxXQUFhLEtBRGQsQUFDbUIsTUFEbkIsQUFDQyxBQUVSOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBO2FBQ0UsQUFDTSxBQUNKO2NBRkYsQUFFTzs7b0JBRlA7c0JBREYsQUFDRSxBQUlBO0FBSkE7QUFDRSwwQkFHRixBQUFDO2tCQUFELEFBRUU7bUJBRkYsQUFFWSxBQUNWO2VBQU8sRUFBRSxXQUFGLEFBQWEsS0FBSyxTQUgzQixBQUdTLEFBQTJCLEFBQ2xDO2tCQUpGOztvQkFBQTtzQkFBQSxBQU1FO0FBTkY7QUFDRSx5QkFLQSxBQUFDOztvQkFBRDtzQkFORixBQU1FLEFBQ0M7QUFERDtBQUFBLFVBTkYsQUFTRSwwQkFBQSxBQUFDOztvQkFBRDtzQkFmTixBQUNFLEFBS0UsQUFTRSxBQUlQO0FBSk87QUFBQTs7Ozs7QSxBQXJCVyxBQTRCckI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ikg6L2Jsb2NrQ2hhaW4vbXlFbGVjdGlvbiJ9