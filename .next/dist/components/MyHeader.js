"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "H:\\blockChain\\myElection\\components\\MyHeader.js";

exports.default = function () {
  return _react2.default.createElement(_semanticUiReact.Menu, { fixed: "top", inverted: true, pointing: true, secondary: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", active: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, " BallotChain"))), _react2.default.createElement(_routes.Link, { route: "/elections", __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Company")), _react2.default.createElement(_routes.Link, { route: "/elections", __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "About")), _react2.default.createElement(_routes.Link, { route: "/elections", __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Contact")), _react2.default.createElement(_semanticUiReact.Menu.Item, { position: "right", __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement(_routes.Link, { route: "/elections", __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement(_semanticUiReact.Button, { inverted: true, style: { padding: "15px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "Ballots")))), _react2.default.createElement(_routes.Link, { route: "/elections/new", __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(_semanticUiReact.Button, { as: "a", inverted: true, primary: true, style: { marginLeft: "0.5em" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "+"))))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE15SGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiTWVudSIsIkxpbmsiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUTs7QUFDakIsQUFBUyxBQUFZLEFBRXJCOzs7Ozs7a0JBQWUsWUFBTSxBQUNuQjt5QkFDRSxBQUFDLHVDQUFLLE9BQU4sQUFBWSxPQUFNLFVBQWxCLE1BQTJCLFVBQTNCLE1BQW9DLFdBQXBDO2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRyxjQUFELHNCQUFBLEFBQU0sUUFBSyxJQUFYLEFBQWMsS0FBSSxRQUFsQjtnQkFBQTtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSE4sQUFDRSxBQUNFLEFBQ0UsQUFHSixtQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0csY0FBRCxzQkFBQSxBQUFNLFFBQUssSUFBWCxBQUFjO2dCQUFkO2tCQUFBO0FBQUE7S0FQSixBQU1FLEFBQ0UsQUFFRiw2QkFBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0csY0FBRCxzQkFBQSxBQUFNLFFBQUssSUFBWCxBQUFjO2dCQUFkO2tCQUFBO0FBQUE7S0FWSixBQVNFLEFBQ0UsQUFFRiwyQkFBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0csY0FBRCxzQkFBQSxBQUFNLFFBQUssSUFBWCxBQUFjO2dCQUFkO2tCQUFBO0FBQUE7S0FiSixBQVlFLEFBQ0UsQUFHRiw2QkFBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxVQUFYLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyw4QkFBSyxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMseUNBQU8sVUFBUixNQUFpQixPQUFPLEVBQUUsU0FBMUIsQUFBd0IsQUFBVztnQkFBbkM7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUpSLEFBQ0UsQUFDRSxBQUNFLEFBQ0UsQUFJTiwrQkFBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyx5Q0FBTyxJQUFSLEFBQVcsS0FBSSxVQUFmLE1BQXdCLFNBQXhCLE1BQWdDLE9BQU8sRUFBRSxZQUF6QyxBQUF1QyxBQUFjO2dCQUFyRDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBNUJaLEFBQ0UsQUFnQkUsQUFRRSxBQUNFLEFBQ0UsQUFDRSxBQU9iO0FBcENEIiwiZmlsZSI6Ik15SGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ikg6L2Jsb2NrQ2hhaW4vbXlFbGVjdGlvbiJ9