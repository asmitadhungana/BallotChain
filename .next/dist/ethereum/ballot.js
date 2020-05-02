"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Ballot = require("./build/Ballot.json");

var _Ballot2 = _interopRequireDefault(_Ballot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Ballot2.default.interface), address); //since we won't have only one instance of Ballot contract deployed to the like BallotFactory
  //we'll have multiple address for multiple campaigns deployed
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxiYWxsb3QuanMiXSwibmFtZXMiOlsid2ViMyIsIkJhbGxvdCIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQW1CLEFBQW5CLEFBRUE7Ozs7OztrQkFBZSxVQUFDLEFBQUQsU0FBYSxBQUMxQjtTQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUFzQixLQUFLLEFBQUwsTUFBVyxpQkFBTyxBQUFsQixBQUF0QixZQUFvRCxBQUFwRCxBQUFQLEFBRDBCLFVBQzJDLEFBQ3JFO0FBQ0Q7QUFIRCIsImZpbGUiOiJiYWxsb3QuanMiLCJzb3VyY2VSb290IjoiSDovYmxvY2tDaGFpbi9teUVsZWN0aW9uIn0=