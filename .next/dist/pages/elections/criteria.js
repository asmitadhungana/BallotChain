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

var _ballot = require("../../ethereum/ballot");

var _ballot2 = _interopRequireDefault(_ballot);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "H:\\blockChain\\myElection\\pages\\elections\\criteria.js?entry";


var ElectionCriteria = function (_Component) {
  (0, _inherits3.default)(ElectionCriteria, _Component);

  function ElectionCriteria() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ElectionCriteria);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ElectionCriteria.__proto__ || (0, _getPrototypeOf2.default)(ElectionCriteria)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      candidateName: "",
      voterName: "",
      voterAddress: "",
      loadingCandidateForm: false,
      loadingVoterForm: false,
      errorMessageVoterForm: "",
      errorMessageCandidateForm: ""
    }, _this.onCandidateSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var ballot, candidateName, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                ballot = (0, _ballot2.default)(_this.props.address);
                candidateName = _this.state.candidateName;

                _this.setState({
                  loadingCandidateForm: true,
                  errorMessageCandidateForm: ""
                });

                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return ballot.methods.addCandidates(candidateName).send({
                  from: accounts[0]
                });

              case 10:

                _routes.Router.pushRoute("/elections/" + _this.props.address + "/criteria"); //Refresh the page to show new added candidatesCount
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](4);

                _this.setState({ errorMessageCandidateForm: _context.t0.message });

              case 16:
                _this.setState({ loadingCandidateForm: false });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.onVoterSubmit = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var ballot, _this$state, voterName, voterAddress, accounts;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();

                ballot = (0, _ballot2.default)(_this.props.address);
                _this$state = _this.state, voterName = _this$state.voterName, voterAddress = _this$state.voterAddress;

                _this.setState({ loadingVoterForm: true, errorMessageVoterForm: "" });

                _context2.prev = 4;
                _context2.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context2.sent;
                _context2.next = 10;
                return ballot.methods.addVoter(voterAddress, voterName).send({
                  from: accounts[0]
                });

              case 10:
                _routes.Router.pushRoute("/elections/" + _this.props.address + "/criteria"); //For refreshing the page
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](4);

                _this.setState({ errorMessageVoterForm: _context2.t0.message });

              case 16:

                _this.setState({ loadingVoterForm: false });

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[4, 13]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ElectionCriteria, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_semanticUiReact.Container, {
        style: { width: "1000px", position: "relative", top: "70px" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "Registration Form ( ", this.props.ballotName, " )"), _react2.default.createElement(_semanticUiReact.Container, {
        inverted: true,
        style: {
          border: "1px solid",
          padding: "30px",
          marginTop: 30,
          position: "relative"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "Candidate Registration"), _react2.default.createElement(_semanticUiReact.Form, {
        onSubmit: this.onCandidateSubmit,
        error: !!this.state.errorMessageCandidateForm,
        loading: !!this.state.loadingCandidateForm,
        inverted: true,
        style: { marginTop: 30, position: "relative" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, {
        value: this.state.candidateName,
        onChange: function onChange(event) {
          return _this3.setState({ candidateName: event.target.value });
        },
        fluid: true,
        label: "Candidate Name",
        placeholder: "Asmita Dhungana",
        width: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      })), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement("div", { style: { fontSize: "0.60 rem" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "Added ", this.props.candidatesCount, " candidates")))), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: "Oops!",
        content: this.state.errorMessageCandidateForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, "Register"))), _react2.default.createElement(_semanticUiReact.Container, {
        inverted: true,
        style: { border: "1px solid", padding: "30px", marginTop: 80 },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "Voter's Registration"), _react2.default.createElement(_semanticUiReact.Form, {
        onSubmit: this.onVoterSubmit,
        error: !!this.state.errorMessageVoterForm,
        loading: !!this.state.loadingVoterForm,
        inverted: true,
        style: { marginTop: 30, position: "relative" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, {
        value: this.state.voterAddress,
        onChange: function onChange(event) {
          return _this3.setState({ voterAddress: event.target.value });
        },
        fluid: true,
        label: "Voter Address",
        placeholder: "0xad4980bb4a6fF42c45C5bCCa3DC9B9cC153A6090",
        width: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Input, {
        value: this.state.voterName,
        onChange: function onChange(event) {
          return _this3.setState({ voterName: event.target.value });
        },
        fluid: true,
        label: "Voter Name",
        placeholder: "Polarj Sapkota",
        width: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      })), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, _react2.default.createElement("div", { style: { fontSize: "0.60 rem" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, "Added ", this.props.votersCount, " voters")))), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: "Oops!",
        content: this.state.errorMessageVoterForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, "Register"))), _react2.default.createElement(_routes.Link, { route: "/elections/" + this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        size: "Massive",
        color: "Teal",
        positive: true,
        style: {
          borderRadius: "2px",
          marginTop: "40px",
          position: "relative"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, _react2.default.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, "Deploy my Ballot")))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var address, ballot, ballotName, candidatesCount, votersCount;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                address = props.query.address; //Gets address from url

                ballot = (0, _ballot2.default)(address);
                _context3.next = 4;
                return ballot.methods.ballotName().call();

              case 4:
                ballotName = _context3.sent;
                _context3.next = 7;
                return ballot.methods.candidatesCount().call();

              case 7:
                candidatesCount = _context3.sent;
                _context3.next = 10;
                return ballot.methods.votersCount().call();

              case 10:
                votersCount = _context3.sent;
                return _context3.abrupt("return", { address: address, ballotName: ballotName, candidatesCount: candidatesCount, votersCount: votersCount });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps(_x3) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ElectionCriteria;
}(_react.Component);

exports.default = ElectionCriteria;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxlbGVjdGlvbnNcXGNyaXRlcmlhLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udGFpbmVyIiwiRm9ybSIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJHcmlkIiwiTGF5b3V0IiwiQmFsbG90Iiwid2ViMyIsIkxpbmsiLCJSb3V0ZXIiLCJFbGVjdGlvbkNyaXRlcmlhIiwic3RhdGUiLCJjYW5kaWRhdGVOYW1lIiwidm90ZXJOYW1lIiwidm90ZXJBZGRyZXNzIiwibG9hZGluZ0NhbmRpZGF0ZUZvcm0iLCJsb2FkaW5nVm90ZXJGb3JtIiwiZXJyb3JNZXNzYWdlVm90ZXJGb3JtIiwiZXJyb3JNZXNzYWdlQ2FuZGlkYXRlRm9ybSIsIm9uQ2FuZGlkYXRlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJhbGxvdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhZGRDYW5kaWRhdGVzIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwib25Wb3RlclN1Ym1pdCIsImFkZFZvdGVyIiwid2lkdGgiLCJwb3NpdGlvbiIsInRvcCIsImJhbGxvdE5hbWUiLCJib3JkZXIiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwidGFyZ2V0IiwidmFsdWUiLCJmb250U2l6ZSIsImNhbmRpZGF0ZXNDb3VudCIsInZvdGVyc0NvdW50IiwiYm9yZGVyUmFkaXVzIiwicXVlcnkiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBVyxBQUFNLEFBQVEsQUFBUzs7QUFDM0MsQUFBTyxBQUFZOzs7O0FBRW5CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQWM7Ozs7Ozs7SSxBQUV2Qjs7Ozs7Ozs7Ozs7Ozs7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LEFBQ047cUJBUEYsQUFPYyxBQUNaO2VBUkYsQUFRUzs7b0JBUlQ7c0JBbEJKLEFBT0UsQUFXRSxBQVdGO0FBWEU7QUFDRSwyQkFVSixBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssT0FBTyxFQUFFLFVBQWQsQUFBWSxBQUFZO29CQUF4QjtzQkFBQTtBQUFBO1NBQ1MsZUFBQSxBQUFLLE1BRGQsQUFDb0IsYUFqQzVCLEFBNkJFLEFBQ0UsQUFDRSxBQUNFLEFBTU4sK0JBQUEsQUFBQztlQUFELEFBRUU7Z0JBRkYsQUFFUyxBQUNQO2lCQUFTLEtBQUEsQUFBSyxNQUhoQixBQUdzQjs7b0JBSHRCO3NCQXRDRixBQXNDRSxBQUtBO0FBTEE7QUFDRSwwQkFJRixBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQXRHTixBQXNERSxBQUtFLEFBMkNFLEFBSUosK0JBQUEsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQWhDLEFBQXNDO29CQUF0QztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztjQUFELEFBQ08sQUFDTDtlQUZGLEFBRVEsQUFDTjtrQkFIRixBQUlFOzt3QkFBTyxBQUNTLEFBQ2Q7cUJBRkssQUFFTSxBQUNYO29CQVBKLEFBSVMsQUFHSztBQUhMLEFBQ0w7O29CQUxKO3NCQUFBLEFBVUU7QUFWRjtBQUNFLHlCQVNBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQXpIZCxBQUNFLEFBQ0UsQUEwR0UsQUFDRSxBQUNFLEFBVUUsQUFDRSxBQVFmOzs7Ozs2RyxBQXpMNEI7Ozs7O21CQUNuQjtBLDBCQUFZLE0sQUFBTSxNLEFBQWxCLFNBQXlCLEFBRTNCOztBLHlCQUFTLHNCLEFBQUEsQUFBTzs7dUJBQ0csT0FBQSxBQUFPLFFBQVAsQUFBZSxhLEFBQWYsQUFBNEI7O21CQUEvQztBOzt1QkFDd0IsT0FBQSxBQUFPLFFBQVAsQUFBZSxrQixBQUFmLEFBQWlDOzttQkFBekQ7QTs7dUJBQ29CLE9BQUEsQUFBTyxRQUFQLEFBQWUsYyxBQUFmLEFBQTZCOzttQkFBakQ7QTtrREFFQyxFQUFFLFNBQUYsU0FBVyxZQUFYLFlBQXVCLGlCQUF2QixpQkFBd0MsYSxBQUF4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLEFBbkJvQixBQXVNL0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiY3JpdGVyaWEuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiSDovYmxvY2tDaGFpbi9teUVsZWN0aW9uIn0=