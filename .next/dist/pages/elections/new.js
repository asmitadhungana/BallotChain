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