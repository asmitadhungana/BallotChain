webpackHotUpdate(7,{

/***/ 1303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(432);

var _Layout = __webpack_require__(967);

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = __webpack_require__(1097);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(1098);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "H:\\blockChain\\myElection\\pages\\elections\\new.js?entry";


var ElectionNew = function (_Component) {
  (0, _inherits3.default)(ElectionNew, _Component);

  function ElectionNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ElectionNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ElectionNew.__proto__ || (0, _getPrototypeOf2.default)(ElectionNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      ballotName: "",
      errorMessage: ""
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _context.prev = 1;
                _context.next = 4;
                return _web2.default.eth.getAccounts();

              case 4:
                accounts = _context.sent;
                _context.next = 7;
                return _factory2.default.methods.createBallot(_this.state.ballotName).send({
                  from: accounts[0]
                });

              case 7:
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);

                _this.setState({ errorMessage: _context.t0.message });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[1, 9]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ElectionNew, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(_semanticUiReact.Container, {
        style: { width: "1000px", position: "relative", top: "50px" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "New Election!"), _react2.default.createElement(_semanticUiReact.Form, { size: "large", inverted: true, onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Create Ballot"), _react2.default.createElement(_semanticUiReact.Input, {
        label: "Ballot name",
        value: this.state.ballotName,
        onChange: function onChange(event) {
          return _this3.setState({ ballotName: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Create!"))));
    }
  }]);

  return ElectionNew;
}(_react.Component);

exports.default = ElectionNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxlbGVjdGlvbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRhaW5lciIsIklucHV0IiwiRm9ybSIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIkVsZWN0aW9uTmV3Iiwic3RhdGUiLCJiYWxsb3ROYW1lIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVCYWxsb3QiLCJzZW5kIiwiZnJvbSIsInNldFN0YXRlIiwibWVzc2FnZSIsIndpZHRoIiwicG9zaXRpb24iLCJ0b3AiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVcsQUFBTyxBQUFNLEFBQVE7O0FBQ3pDLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7Ozs7Ozs7Ozs7c04sQUFDSjtrQkFBUSxBQUNNLEFBQ1o7b0IsQUFGTSxBQUVRO0FBRlIsQUFDTixhLEFBSUY7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO1lBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBRFMsQUFDVCxBQUFNOztnQ0FERztnQ0FBQTt1QkFJZ0IsY0FBQSxBQUFLLElBSnJCLEFBSWdCLEFBQVM7O21CQUExQjtBQUpDLG9DQUFBO2dDQUFBO3lDQUtELEFBQVEsUUFBUixBQUFnQixhQUFhLE1BQUEsQUFBSyxNQUFsQyxBQUF3QyxZQUF4QyxBQUFvRDt3QkFDbEQsU0FORCxBQUtELEFBQXlELEFBQ3ZELEFBQVM7QUFEOEMsQUFDN0QsaUJBREk7O21CQUxDO2dDQUFBO0FBQUE7O21CQUFBO2dDQUFBO2dEQVNQOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBVHZCLEFBU1AsQUFBYyxBQUFvQjs7bUJBVDNCO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBYUY7bUJBQ1A7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQztlQUNRLEVBQUUsT0FBRixBQUFTLFVBQVUsVUFBbkIsQUFBNkIsWUFBWSxLQURsRCxBQUNTLEFBQThDOztvQkFEdkQ7c0JBQUEsQUFHRTtBQUhGO0FBQ0UseUJBRUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUVBLGtDQUFBLEFBQUMsdUNBQUssTUFBTixBQUFXLFNBQVEsVUFBbkIsTUFBNEIsVUFBVSxLQUF0QyxBQUEyQztvQkFBM0M7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGtDQUFBLEFBQUM7ZUFBRCxBQUNRLEFBQ047ZUFBTyxLQUFBLEFBQUssTUFGZCxBQUVvQixBQUNsQjtrQkFBVSxrQkFBQSxBQUFDLE9BQUQ7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBRSxZQUFZLE1BQUEsQUFBTSxPQUQxQixBQUNSLEFBQWMsQUFBMkI7QUFKN0M7O29CQUFBO3NCQUhKLEFBQ0UsQUFFRSxBQVNGO0FBVEU7QUFDRSwyQkFRSixBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQW5CUixBQUNFLEFBQ0UsQUFLRSxBQVlFLEFBS1Q7Ozs7O0EsQUE1Q3VCLEFBK0MxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiSDovYmxvY2tDaGFpbi9teUVsZWN0aW9uIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "H:\\blockChain\\myElection\\pages\\elections\\new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "H:\\blockChain\\myElection\\pages\\elections\\new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/elections\\new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5hZmU1NTc0NzkyZTMyNmViMmY5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZWxlY3Rpb25zL25ldy5qcz9jNmVhODkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBJbnB1dCwgRm9ybSwgQnV0dG9uLCBNZXNzYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi8uLi9ldGhlcmV1bS9mYWN0b3J5XCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcblxyXG5jbGFzcyBFbGVjdGlvbk5ldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBiYWxsb3ROYW1lOiBcIlwiLFxyXG4gICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTsgLy9mZXRjaGluZyBhY2NvdW50cyBmcm9tIHdlYjNcclxuICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzLmNyZWF0ZUJhbGxvdCh0aGlzLnN0YXRlLmJhbGxvdE5hbWUpLnNlbmQoe1xyXG4gICAgICAgIGZyb206IGFjY291bnRzWzBdLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMDBweFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IFwiNTBweFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgxPk5ldyBFbGVjdGlvbiE8L2gxPlxyXG5cclxuICAgICAgICAgIDxGb3JtIHNpemU9XCJsYXJnZVwiIGludmVydGVkIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkNyZWF0ZSBCYWxsb3Q8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJCYWxsb3QgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYWxsb3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJhbGxvdE5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5DcmVhdGUhPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVsZWN0aW9uTmV3O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9lbGVjdGlvbnMvbmV3LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOztBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFTQTtBQUNBO0FBREE7QUFDQTtBQVZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBREE7QUFHQTtBQUhBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBSkE7O0FBQUE7QUFTQTtBQVRBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFLQTs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=