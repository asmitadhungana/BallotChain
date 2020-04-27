"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Web3 with capital W is the constructor.

// New instance of Web3 with the provider that is automatically provided to us by MetaMask inside the browser.
// This makes the assumption that the user has MetaMask.
var web3 = void 0;

// if - We execute inside the browser and MetaMask is available
// ethereum/web3.js
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running MetaMask.
  // Create our own provider:
  var provider = new _web2.default.providers.HttpProvider(
  // Pass the URL of some remote node that we have excess to (such as Infura node).
  "https://rinkeby.infura.io/v3/4d5ebec5432f4f559690e1091210c6c1");
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBLEFBQ0EsQUFBTzs7Ozs7O0FBQWtCOztBQUV6QjtBQUNBO0FBQ0EsSUFBSSxZQUFKOztBQUVBO0FBUEE7QUFRQSxJQUFJLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsU0FBbkQsQUFBNEQsYUFBYSxBQUN2RTtTQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQXZCLEFBQU8sQUFBcUIsQUFDN0I7QUFGRCxPQUVPLEFBQ0w7QUFDQTtBQUNBO01BQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLEFBQ2xDO0FBQ0E7QUFGRixBQUFpQixBQUlqQjtTQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBQ2pCO0FBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJIOi9ibG9ja0NoYWluL215RWxlY3Rpb24ifQ==