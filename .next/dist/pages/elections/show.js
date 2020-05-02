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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "H:\\blockChain\\myElection\\pages\\elections\\show.js?entry";


var ElectionShow = function (_Component) {
  (0, _inherits3.default)(ElectionShow, _Component);

  function ElectionShow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ElectionShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ElectionShow.__proto__ || (0, _getPrototypeOf2.default)(ElectionShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      ballotState: _this.props._ballotState,
      ballotColor: "purple",
      voters: [],
      onvoteloading: false,
      errorMessageOnStartVote: "",
      errorMessageOnVoteSubmit: "",
      errorMessageOnVoteEnd: "",
      voteStartLoading: false,
      voteSubmitLoading: false,
      voteEndLoading: false
    }, _this.onStartVote = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var ballot, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              alert("Vote Started!");
              event.preventDefault();

              ballot = (0, _ballot2.default)(_this.props.address);

              _this.setState({ voteStartloading: true, errorMessageOnStartVote: "" });
              _context.prev = 4;
              _context.next = 7;
              return _web2.default.eth.getAccounts();

            case 7:
              accounts = _context.sent;
              _context.next = 10;
              return ballot.methods.startVote().send({
                from: accounts[0]
              });

            case 10:
              Router.pushRoute("/elections/" + _this.props.address);
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](4);

              _this.setState({ errorMessageOnStartVote: _context.t0.message });

            case 16:
              _this.setState({ voteStartLoading: false });

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2, [[4, 13]]);
    })), _this.onVote = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
        var ballot, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ballot = (0, _ballot2.default)(_this.props.address);

                alert("You voted!");
                _this.setState({ voteSubmitloading: true, errorMessageOnVoteSubmit: "" });

                _context2.prev = 3;
                _context2.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context2.sent;
                _context2.next = 9;
                return ballot.methods.castVote(id).send({
                  from: accounts[0]
                });

              case 9:
                Router.pushRoute("/elections/" + _this.props.address);
                _context2.next = 16;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](3);

                _this.setState({ errorMessageOnVoteSubmit: _context2.t0.message });

                _this.setState({ voteSubmitloading: false });

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.onEndVote = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var ballot, accounts;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              ballot = (0, _ballot2.default)(_this.props.address);

              alert("Vote Ended!");
              _this.setState({ voteEndLoading: true, errorMessageOnVoteEnd: "" });

              _context3.prev = 3;
              _context3.next = 6;
              return _web2.default.eth.getAccounts();

            case 6:
              accounts = _context3.sent;
              _context3.next = 9;
              return ballot.methods.endVote().send({
                from: accounts[0]
              });

            case 9:
              _this.setState({ ballotState: "Ended", ballotColor: "Red" });
              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](3);

              _this.setState({ errorMessageOnVoteEnd: _context3.t0.message });

            case 15:
              alert("Now no one can vote in this election!");
              _this.setState({ voteEndLoading: false });

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this2, [[3, 12]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ElectionShow, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, this.props.ballotName)))), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 2, centered: true, style: { marginTop: 60 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react2.default.createElement(_semanticUiReact.Container, { centered: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, _react2.default.createElement(_semanticUiReact.Card, {
        fluid: true,
        style: {
          backgroundColor: "orange",
          overflowWrap: "break-word"
        },
        color: "purple",
        header: "Manager",
        description: this.props.ballotManager,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }), _react2.default.createElement(_semanticUiReact.Card, {
        fluid: true,
        style: {
          backgroundColor: "green"
        },
        color: "green",
        header: "Candidates Count",
        description: this.props.candidatesCount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }), _react2.default.createElement(_semanticUiReact.Card, {
        fluid: true,
        style: {
          backgroundColor: "teal"
        },
        color: "purple",
        header: "Voters Count",
        description: this.props.votersCount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 1, __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        width: 10,
        style: { marginTop: 20, position: "relative" },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, _react2.default.createElement(_semanticUiReact.Container, { centered: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, "Candidates Table"), _react2.default.createElement(_semanticUiReact.Table, { inverted: true, striped: true, cell: true, selectable: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, "Id"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, "Name"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, "VoteCount"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, "Decision"))), _react2.default.createElement(_semanticUiReact.Table.Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, this.props.candidates[0].id), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, this.props.candidates[0].candidateName), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, this.props.candidates[0].voteCount), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        name: this.props.candidates[0].id,
        positive: true,
        onClick: function onClick(event) {
          _this3.onVote(event.target.name);
        },
        loading: this.state.voteSubmitloading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, "Vote"))), _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, this.props.candidates[1].id), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, this.props.candidates[1].candidateName), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, this.props.candidates[1].voteCount), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        positive: true,
        loading: this.state.voteSubmitloading,
        onClick: function onClick(event) {
          var candidateId = _this3.props.candidates[1].id;
          _this3.onVote(candidateId);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, "Vote"))), _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, this.props.candidates[2].id), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }, this.props.candidates[2].candidateName), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, this.props.candidates[2].voteCount), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        positive: true,
        onClick: this.onVote,
        loading: this.state.voteSubmitloading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, "Vote"))), _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, this.props.candidates[3].id), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, this.props.candidates[3].candidateName), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, this.props.candidates[3].voteCount), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        positive: true,
        onClick: this.onVote,
        loading: this.state.voteSubmitloading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, "Vote"))))), _react2.default.createElement(_semanticUiReact.Grid.Row, { style: { marginTop: 60, position: "relative" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, "Voters Table"), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 14, __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }, _react2.default.createElement(_semanticUiReact.Table, { inverted: true, striped: true, cell: true, selectable: true, size: "large", __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Row, { style: { padding: "40px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, "Id"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }, "Name"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, "Address"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, "Voted"))), _react2.default.createElement(_semanticUiReact.Table.Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Row, { style: { padding: "40px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }, this.props.voters[0].id), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, this.props.voters[0].voterName), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }, this.props.voters[0].voterAddress), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }, this.props.voters[0].voted.toString())), _react2.default.createElement(_semanticUiReact.Table.Row, { style: { padding: "40px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }, this.props.voters[1].id), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }, this.props.voters[1].voterName), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }, this.props.voters[1].voterAddress), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        }
      }, this.props.voters[1].voted.toString())), _react2.default.createElement(_semanticUiReact.Table.Row, { style: { padding: "40px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      }, this.props.voters[2].id), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        }
      }, this.props.voters[2].voterName), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, this.props.voters[2].voterAddress), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, this.props.voters[2].voted.toString())), _react2.default.createElement(_semanticUiReact.Table.Row, { style: { padding: "100px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      }, this.props.voters[3].id), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }, this.props.voters[3].voterName), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }, this.props.voters[3].voterAddress), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, this.props.voters[3].voted.toString())))))))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 1, __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        }
      }), _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { marginTop: 60 }, width: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        }
      }, _react2.default.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }, "Manager's section"), _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        size: "massive",
        positive: true,
        onClick: this.onStartVote,
        loading: this.state.voteStartLoading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        }
      }, "Start Voting!"), _react2.default.createElement(_semanticUiReact.Card, {
        fluid: true,
        style: {
          backgroundColor: "purple"
        },
        color: "green",
        header: "Ballot State",
        description: this.state.ballotState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        size: "massive",
        negative: true,
        onClick: this.onEndVote,
        loading: this.state.voteEndLoading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        }
      }, "End Voting!"))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(props) {
        var address, ballot, ballotName, ballotManager, _ballotState, candidatesCount, votersCount, candidates, i, candidateIndex, voters, voter1, _i, voterIndex;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                address = props.query.address;
                //Call to the Ballot contract

                ballot = (0, _ballot2.default)(address);
                _context4.next = 4;
                return ballot.methods.ballotName().call();

              case 4:
                ballotName = _context4.sent;
                _context4.next = 7;
                return ballot.methods.manager().call();

              case 7:
                ballotManager = _context4.sent;
                _context4.next = 10;
                return ballot.methods.state().call();

              case 10:
                _ballotState = _context4.sent;
                _context4.next = 13;
                return ballot.methods.candidatesCount().call();

              case 13:
                candidatesCount = _context4.sent;
                _context4.next = 16;
                return ballot.methods.votersCount().call();

              case 16:
                votersCount = _context4.sent;
                candidates = [];
                i = 0;

              case 19:
                if (!(i < candidatesCount)) {
                  _context4.next = 27;
                  break;
                }

                _context4.next = 22;
                return ballot.methods.candidateRegister(i).call();

              case 22:
                candidateIndex = _context4.sent;

                candidates.push(candidateIndex);

              case 24:
                i++;
                _context4.next = 19;
                break;

              case 27:
                voters = [];
                _context4.next = 30;
                return ballot.methods.voterMapping(1).call();

              case 30:
                voter1 = _context4.sent;
                _i = 0;

              case 32:
                if (!(_i < votersCount)) {
                  _context4.next = 40;
                  break;
                }

                _context4.next = 35;
                return ballot.methods.voterMapping(_i).call();

              case 35:
                voterIndex = _context4.sent;

                voters.push(voterIndex);

              case 37:
                _i++;
                _context4.next = 32;
                break;

              case 40:
                return _context4.abrupt("return", {
                  address: address,
                  ballotName: ballotName,
                  ballotManager: ballotManager,
                  _ballotState: _ballotState,
                  candidatesCount: candidatesCount,
                  votersCount: votersCount,
                  candidates: candidates,
                  voters: voters,
                  voter1: voter1
                });

              case 41:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getInitialProps(_x2) {
        return _ref5.apply(this, arguments);
      }

      return getInitialProps;
    }()

    // renderVoters = async () => {
    //   this.setState({ votersCount });

    //   for (var i = 1; i <= votersCount; i++) {
    //     const voter = await ballot.methods.voterMapping(i).call();
    //     this.setState({
    //       voters: [...this.state.voters, voter],
    //     });
    //   }
    // };

    // async componentWillMount() {
    //   this.renderVoters();
    // }

  }]);

  return ElectionShow;
}(_react.Component);

exports.default = ElectionShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxlbGVjdGlvbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiSGVhZGVyIiwiR3JpZCIsIlRhYmxlIiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiTGF5b3V0IiwiQmFsbG90Iiwid2ViMyIsIkVsZWN0aW9uU2hvdyIsInN0YXRlIiwiYmFsbG90U3RhdGUiLCJwcm9wcyIsIl9iYWxsb3RTdGF0ZSIsImJhbGxvdENvbG9yIiwidm90ZXJzIiwib252b3RlbG9hZGluZyIsImVycm9yTWVzc2FnZU9uU3RhcnRWb3RlIiwiZXJyb3JNZXNzYWdlT25Wb3RlU3VibWl0IiwiZXJyb3JNZXNzYWdlT25Wb3RlRW5kIiwidm90ZVN0YXJ0TG9hZGluZyIsInZvdGVTdWJtaXRMb2FkaW5nIiwidm90ZUVuZExvYWRpbmciLCJvblN0YXJ0Vm90ZSIsImFsZXJ0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJhbGxvdCIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsInZvdGVTdGFydGxvYWRpbmciLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsInN0YXJ0Vm90ZSIsInNlbmQiLCJmcm9tIiwiUm91dGVyIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsIm9uVm90ZSIsImlkIiwidm90ZVN1Ym1pdGxvYWRpbmciLCJjYXN0Vm90ZSIsIm9uRW5kVm90ZSIsImVuZFZvdGUiLCJiYWxsb3ROYW1lIiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIiwib3ZlcmZsb3dXcmFwIiwiYmFsbG90TWFuYWdlciIsImNhbmRpZGF0ZXNDb3VudCIsInZvdGVyc0NvdW50IiwicG9zaXRpb24iLCJjYW5kaWRhdGVzIiwiY2FuZGlkYXRlTmFtZSIsInZvdGVDb3VudCIsInRhcmdldCIsIm5hbWUiLCJjYW5kaWRhdGVJZCIsInBhZGRpbmciLCJ2b3Rlck5hbWUiLCJ2b3RlckFkZHJlc3MiLCJ2b3RlZCIsInRvU3RyaW5nIiwicXVlcnkiLCJjYWxsIiwibWFuYWdlciIsImkiLCJjYW5kaWRhdGVSZWdpc3RlciIsImNhbmRpZGF0ZUluZGV4IiwicHVzaCIsInZvdGVyTWFwcGluZyIsInZvdGVyMSIsInZvdGVySW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBRVg7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQXVESjttQkFDZSxNQUFBLEFBQUssTUFEWixBQUNrQixBQUN4QjttQkFGTSxBQUVPLEFBQ2I7Y0FITSxBQUdFLEFBQ1I7cUJBSk0sQUFJUyxBQUNmOytCQUxNLEFBS21CLEFBQ3pCO2dDQU5NLEFBTW9CLEFBQzFCOzZCQVBNLEFBT2lCLEFBQ3ZCO3dCQVJNLEFBUVksQUFDbEI7eUJBVE0sQUFTYSxBQUNuQjtzQixBQVZNLEFBVVU7QUFWVixBQUNOLGEsQUFZRix1RkFBYyxtQkFBQTtrQkFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFDWjtvQkFBQSxBQUFNLEFBQ047b0JBQUEsQUFBTSxBQUVBOztBQUpNLHVCQUlHLHNCQUFPLE1BQUEsQUFBSyxNQUpmLEFBSUcsQUFBa0IsQUFDakM7O29CQUFBLEFBQUssU0FBUyxFQUFFLGtCQUFGLEFBQW9CLE1BQU0seUJBTDVCLEFBS1osQUFBYyxBQUFtRDs4QkFMckQ7OEJBQUE7cUJBT2EsY0FBQSxBQUFLLElBUGxCLEFBT2EsQUFBUzs7aUJBQTFCO0FBUEksa0NBQUE7OEJBQUE7NEJBUUosQUFBTyxRQUFQLEFBQWUsWUFBZixBQUEyQjtzQkFDekIsU0FURSxBQVFKLEFBQWdDLEFBQzlCLEFBQVM7QUFEcUIsQUFDcEMsZUFESTs7aUJBR047cUJBQUEsQUFBTywwQkFBd0IsTUFBQSxBQUFLLE1BWDFCLEFBV1YsQUFBMEM7OEJBWGhDO0FBQUE7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