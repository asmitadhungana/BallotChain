"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require("../../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _web = require("../../ethereum/web3");

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
      errorMessage: "",
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true, errorMessage: "" });

                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _factory2.default.methods.createBallot(_this.state.ballotName).send({
                  from: accounts[0]
                });

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 13:

                _this.setState({ loading: false });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 10]]);
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
          lineNumber: 33
        }
      }, _react2.default.createElement(_semanticUiReact.Container, {
        style: { width: "1000px", position: "relative", top: "50px" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "New Election!"), _react2.default.createElement(_semanticUiReact.Form, {
        size: "large",
        inverted: true,
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage,
        loading: !!this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Create Ballot"), _react2.default.createElement(_semanticUiReact.Input, {
        label: "Ballot name",
        value: this.state.ballotName,
        onChange: function onChange(event) {
          return _this3.setState({ ballotName: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Create!"))));
    }
  }]);

  return ElectionNew;
}(_react.Component);

exports.default = ElectionNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxlbGVjdGlvbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRhaW5lciIsIklucHV0IiwiRm9ybSIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIkVsZWN0aW9uTmV3Iiwic3RhdGUiLCJiYWxsb3ROYW1lIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVCYWxsb3QiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJ3aWR0aCIsInBvc2l0aW9uIiwidG9wIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFXLEFBQU8sQUFBTSxBQUFROztBQUN6QyxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7Ozs7O3NOLEFBQ0o7a0JBQVEsQUFDTSxBQUNaO29CQUZNLEFBRVEsQUFDZDtlLEFBSE0sQUFHRztBQUhILEFBQ04sYSxBQUtGOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDtZQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFFTjs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FIdEIsQUFHVCxBQUFjLEFBQStCOztnQ0FIcEM7Z0NBQUE7dUJBTWdCLGNBQUEsQUFBSyxJQU5yQixBQU1nQixBQUFTOzttQkFBMUI7QUFOQyxvQ0FBQTtnQ0FBQTt5Q0FPRCxBQUFRLFFBQVIsQUFBZ0IsYUFBYSxNQUFBLEFBQUssTUFBbEMsQUFBd0MsWUFBeEMsQUFBb0Q7d0JBQ2xELFNBUkQsQUFPRCxBQUF5RCxBQUN2RCxBQUFTO0FBRDhDLEFBQzdELGlCQURJOzttQkFQQztnQ0FBQTtBQUFBOzttQkFBQTtnQ0FBQTtnREFXUDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQVh2QixBQVdQLEFBQWMsQUFBb0I7O21CQUdwQzs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FkUCxBQWNULEFBQWMsQUFBVzs7bUJBZGhCO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBaUJGO21CQUNQOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7ZUFDUSxFQUFFLE9BQUYsQUFBUyxVQUFVLFVBQW5CLEFBQTZCLFlBQVksS0FEbEQsQUFDUyxBQUE4Qzs7b0JBRHZEO3NCQUFBLEFBR0U7QUFIRjtBQUNFLHlCQUVBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhGLEFBR0UsQUFFQSxrQ0FBQSxBQUFDO2NBQUQsQUFDTyxBQUNMO2tCQUZGLEFBR0U7a0JBQVUsS0FIWixBQUdpQixBQUNmO2VBQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUpoQixBQUlzQixBQUNwQjtpQkFBUyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BTGxCLEFBS3dCOztvQkFMeEI7c0JBQUEsQUFPRTtBQVBGO0FBQ0UseUJBTUMsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esa0NBQUEsQUFBQztlQUFELEFBQ1EsQUFDTjtlQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO2tCQUFVLGtCQUFBLEFBQUMsT0FBRDtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFFLFlBQVksTUFBQSxBQUFNLE9BRDFCLEFBQ1IsQUFBYyxBQUEyQjtBQUo3Qzs7b0JBQUE7c0JBVEosQUFPRSxBQUVFLEFBU0Y7QUFURTtBQUNFLDJCQVFKLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtvQkFBbEQ7c0JBbEJGLEFBa0JFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQTFCUixBQUNFLEFBQ0UsQUFLRSxBQW1CRSxBQUtUOzs7OztBQUdILEEsQUEzRDBCOztrQkEyRDFCLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ikg6L2Jsb2NrQ2hhaW4vbXlFbGVjdGlvbiJ9