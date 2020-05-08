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

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _ballot = require("../ethereum/ballot");

var _ballot2 = _interopRequireDefault(_ballot);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "H:\\blockChain\\myElection\\pages\\elections.js?entry";


var BallotIndex = function (_Component) {
  (0, _inherits3.default)(BallotIndex, _Component);

  function BallotIndex() {
    (0, _classCallCheck3.default)(this, BallotIndex);

    return (0, _possibleConstructorReturn3.default)(this, (BallotIndex.__proto__ || (0, _getPrototypeOf2.default)(BallotIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(BallotIndex, [{
    key: "renderBallots",
    value: function renderBallots() {
      var items = this.props.ballots.map(function (address) {
        return {
          header: "Ballot Address",

          description: _react2.default.createElement(_routes.Link, { route: "/elections/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          }, _react2.default.createElement("a", { style: { color: "Purple" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          }, _react2.default.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          }, _react2.default.createElement("h3", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          }, " Show this ballot ")))),
          meta: address,
          color: "blue",
          style: {
            backgroundColor: "DodgerBlue",
            padding: "10px",
            borderRadius: "40px",
            overflowWrap: "break-word"
          }
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 3, items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 13, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Header, {
        as: "h2",
        content: "Open Ballots",
        inverted: true,
        style: {
          fontSize: "3em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: "3em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })))), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 13, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, this.renderBallots()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_routes.Link, { route: "/elections/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        size: "Massive",
        color: "Teal",
        positive: true,
        style: { borderRadius: "2px" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Create Ballot")))))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var ballots;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedBallots().call();

              case 2:
                ballots = _context.sent;
                return _context.abrupt("return", { ballots: ballots });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return BallotIndex;
}(_react.Component);

exports.default = BallotIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxlbGVjdGlvbnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiSGVhZGVyIiwiQ29udGFpbmVyIiwiR3JpZCIsImZhY3RvcnkiLCJCYWxsb3QiLCJMYXlvdXQiLCJMaW5rIiwiQmFsbG90SW5kZXgiLCJpdGVtcyIsInByb3BzIiwiYmFsbG90cyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImNvbG9yIiwibWV0YSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93V3JhcCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsInJlbmRlckJhbGxvdHMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRCYWxsb3RzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFRLEFBQVc7O0FBQzFDLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7O29DQVFZLEFBQ2Q7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsSUFBSSxVQUFBLEFBQUMsU0FBWSxBQUNoRDs7a0JBQU8sQUFDRyxBQUVSOzt1Q0FDRSxBQUFDLDhCQUFLLHVCQUFOLEFBQTJCO3dCQUEzQjswQkFBQSxBQUNFO0FBREY7V0FBQSxrQkFDRSxjQUFBLE9BQUcsT0FBTyxFQUFFLE9BQVosQUFBVSxBQUFTO3dCQUFuQjswQkFBQSxBQUNFO0FBREY7NkJBQ0UsY0FBQTs7d0JBQUE7MEJBQUEsQUFDRTtBQURGO0FBQUEsNkJBQ0UsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBUEgsQUFJSCxBQUNFLEFBQ0UsQUFDRSxBQUtSO2dCQVpLLEFBWUMsQUFDTjtpQkFiSyxBQWFFLEFBQ1A7OzZCQUFPLEFBQ1ksQUFDakI7cUJBRkssQUFFSSxBQUNUOzBCQUhLLEFBR1MsQUFDZDswQkFsQkosQUFBTyxBQWNFLEFBSVMsQUFHbkI7QUFQVSxBQUNMO0FBZkcsQUFDTDtBQUZKLEFBQWMsQUF3QmQsT0F4QmM7OzJDQXdCUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxhQUFaLEFBQXlCLEdBQUcsT0FBNUIsQUFBbUM7b0JBQW5DO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7WUFBRCxBQUNLLEFBQ0g7aUJBRkYsQUFFVSxBQUNSO2tCQUhGLEFBSUU7O29CQUFPLEFBQ0ssQUFDVjtzQkFGSyxBQUVPLEFBQ1o7d0JBSEssQUFHUyxBQUNkO3FCQVJKLEFBSVMsQUFJTTtBQUpOLEFBQ0w7O29CQUxKO3NCQUpSLEFBQ0UsQUFDRSxBQUNFLEFBQ0UsQUFjTjtBQWRNO0FBQ0UsNkJBYVIsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUF5QjtBQUF6QjtjQURGLEFBQ0UsQUFBeUIsQUFBSyxBQUU5QixrQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7Y0FBRCxBQUNPLEFBQ0w7ZUFGRixBQUVRLEFBQ047a0JBSEYsQUFJRTtlQUFPLEVBQUUsY0FKWCxBQUlTLEFBQWdCOztvQkFKekI7c0JBQUEsQUFNRTtBQU5GO0FBQ0UseUJBS0EsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBakNsQixBQUNFLEFBa0JFLEFBQ0UsQUFHRSxBQUNFLEFBQ0UsQUFDRSxBQU1FLEFBQ0UsQUFVbkI7Ozs7OzJHLEFBL0U0Qjs7Ozs7Ozt1QkFFTCxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IscUIsQUFBaEIsQUFBcUM7O21CQUFyRDtBO2lEQUVDLEVBQUUsUyxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEVYLEEsQUFuRjBCOztrQkFtRjFCLEFBQWUiLCJmaWxlIjoiZWxlY3Rpb25zLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ikg6L2Jsb2NrQ2hhaW4vbXlFbGVjdGlvbiJ9