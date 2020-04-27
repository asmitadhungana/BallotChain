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

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "H:\\blockChain\\myElection\\pages\\elections.js?entry";

//import {Link} "../routes";

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
          header: "Ballot_name",
          description: address,
          meta: "At address:",
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
          lineNumber: 30
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 13, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
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
          lineNumber: 39
        }
      })))), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 13, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, this.renderBallots()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        size: "Massive",
        color: "Teal",
        positive: true,
        style: { borderRadius: "2px" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Create Ballot")))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return BallotIndex;
}(_react.Component);

exports.default = BallotIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxlbGVjdGlvbnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiSGVhZGVyIiwiQ29udGFpbmVyIiwiR3JpZCIsImZhY3RvcnkiLCJMYXlvdXQiLCJCYWxsb3RJbmRleCIsIml0ZW1zIiwicHJvcHMiLCJiYWxsb3RzIiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwibWV0YSIsImNvbG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3dXcmFwIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwicmVuZGVyQmFsbG90cyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZEJhbGxvdHMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQVEsQUFBVzs7QUFDMUMsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7Ozs7Ozs7QUFDbkI7O0ksQUFFTTs7Ozs7Ozs7Ozs7b0NBT1ksQUFDZDtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixJQUFJLFVBQUEsQUFBQyxTQUFZLEFBQ2hEOztrQkFBTyxBQUNHLEFBQ1I7dUJBRkssQUFFUSxBQUNiO2dCQUhLLEFBR0MsQUFDTjtpQkFKSyxBQUlFLEFBQ1A7OzZCQUFPLEFBQ1ksQUFDakI7cUJBRkssQUFFSSxBQUNUOzBCQUhLLEFBR1MsQUFDZDswQkFUSixBQUFPLEFBS0UsQUFJUyxBQUduQjtBQVBVLEFBQ0w7QUFORyxBQUNMO0FBRkosQUFBYyxBQWVkLE9BZmM7OzJDQWVQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLGFBQVosQUFBeUIsR0FBRyxPQUE1QixBQUFtQztvQkFBbkM7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQztZQUFELEFBQ0ssQUFDSDtpQkFGRixBQUVVLEFBQ1I7a0JBSEYsQUFJRTs7b0JBQU8sQUFDSyxBQUNWO3NCQUZLLEFBRU8sQUFDWjt3QkFISyxBQUdTLEFBQ2Q7cUJBUkosQUFJUyxBQUlNO0FBSk4sQUFDTDs7b0JBTEo7c0JBSlIsQUFDRSxBQUNFLEFBQ0UsQUFDRSxBQWNOO0FBZE07QUFDRSw2QkFhUixBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQXlCO0FBQXpCO2NBREYsQUFDRSxBQUF5QixBQUFLLEFBRTlCLGtDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDO2NBQUQsQUFDTyxBQUNMO2VBRkYsQUFFUSxBQUNOO2tCQUhGLEFBSUU7ZUFBTyxFQUFFLGNBSlgsQUFJUyxBQUFnQjs7b0JBSnpCO3NCQUFBLEFBTUU7QUFORjtBQUNFLHlCQUtBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQS9CZCxBQUNFLEFBa0JFLEFBQ0UsQUFHRSxBQUNFLEFBTUUsQUFDRSxBQVFmOzs7Ozs7Ozs7Ozs7dUJBaEV1QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IscUIsQUFBaEIsQUFBcUM7O21CQUFyRDtBO2lEQUVDLEVBQUUsUyxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFKZSxBQXFFMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZWxlY3Rpb25zLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ikg6L2Jsb2NrQ2hhaW4vbXlFbGVjdGlvbiJ9