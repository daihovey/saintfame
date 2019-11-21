webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/dist/ethers.min.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "/Users/davidhovey/SaintFame/Site/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
 // function parseLogs(logs: ethers.providers.Log[]): any[] {
//   let iface = new ethers.utils.Interface(new CardsFactory().interface.abi);
//   return logs.map((log) => iface.parseLog(log)).map(item => {
//       let result = {
//           name: item.name,
//           signature: item.signature,
//           values: {}
//       };
//       const keys = Object.keys(item.values);
//       const values = Object.values(item.values);
//       const start = item.values.length;
//       for (let i = start; i < (start * 2) - 1; i++) {
//           result.values[keys[i]] = values[i];
//       }
//       return result;
//   });
// }

var test =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var provider, abi, contractAddress, contract, Transfer, topics, filter;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            provider = new ethers__WEBPACK_IMPORTED_MODULE_4__["ethers"].providers.JsonRpcProvider('https://mainnet.infura.io/v3/ab962fb32dfc49a8ab6ab72a6a318c85');
            abi = [{
              "constant": true,
              "inputs": [],
              "name": "name",
              "outputs": [{
                "name": "",
                "type": "string"
              }],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            }, {
              "constant": false,
              "inputs": [{
                "name": "_spender",
                "type": "address"
              }, {
                "name": "_amount",
                "type": "uint256"
              }],
              "name": "approve",
              "outputs": [{
                "name": "success",
                "type": "bool"
              }],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "constant": true,
              "inputs": [],
              "name": "creationBlock",
              "outputs": [{
                "name": "",
                "type": "uint256"
              }],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            }, {
              "constant": true,
              "inputs": [],
              "name": "totalSupply",
              "outputs": [{
                "name": "",
                "type": "uint256"
              }],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            }, {
              "constant": false,
              "inputs": [{
                "name": "_from",
                "type": "address"
              }, {
                "name": "_to",
                "type": "address"
              }, {
                "name": "_amount",
                "type": "uint256"
              }],
              "name": "transferFrom",
              "outputs": [{
                "name": "success",
                "type": "bool"
              }],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "constant": true,
              "inputs": [],
              "name": "decimals",
              "outputs": [{
                "name": "",
                "type": "uint8"
              }],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            }, {
              "constant": false,
              "inputs": [{
                "name": "_newController",
                "type": "address"
              }],
              "name": "changeController",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "constant": true,
              "inputs": [{
                "name": "_owner",
                "type": "address"
              }, {
                "name": "_blockNumber",
                "type": "uint256"
              }],
              "name": "balanceOfAt",
              "outputs": [{
                "name": "",
                "type": "uint256"
              }],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            }, {
              "constant": true,
              "inputs": [],
              "name": "version",
              "outputs": [{
                "name": "",
                "type": "string"
              }],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            }, {
              "constant": false,
              "inputs": [{
                "name": "_cloneTokenName",
                "type": "string"
              }, {
                "name": "_cloneDecimalUnits",
                "type": "uint8"
              }, {
                "name": "_cloneTokenSymbol",
                "type": "string"
              }, {
                "name": "_snapshotBlock",
                "type": "uint256"
              }, {
                "name": "_transfersEnabled",
                "type": "bool"
              }],
              "name": "createCloneToken",
              "outputs": [{
                "name": "",
                "type": "address"
              }],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "constant": true,
              "inputs": [{
                "name": "_owner",
                "type": "address"
              }],
              "name": "balanceOf",
              "outputs": [{
                "name": "balance",
                "type": "uint256"
              }],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            }, {
              "constant": true,
              "inputs": [],
              "name": "parentToken",
              "outputs": [{
                "name": "",
                "type": "address"
              }],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            }, {
              "constant": false,
              "inputs": [{
                "name": "_owner",
                "type": "address"
              }, {
                "name": "_amount",
                "type": "uint256"
              }],
              "name": "generateTokens",
              "outputs": [{
                "name": "",
                "type": "bool"
              }],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "constant": true,
              "inputs": [],
              "name": "symbol",
              "outputs": [{
                "name": "",
                "type": "string"
              }],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            }, {
              "constant": true,
              "inputs": [{
                "name": "_blockNumber",
                "type": "uint256"
              }],
              "name": "totalSupplyAt",
              "outputs": [{
                "name": "",
                "type": "uint256"
              }],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            }, {
              "constant": false,
              "inputs": [{
                "name": "_to",
                "type": "address"
              }, {
                "name": "_amount",
                "type": "uint256"
              }],
              "name": "transfer",
              "outputs": [{
                "name": "success",
                "type": "bool"
              }],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "constant": true,
              "inputs": [],
              "name": "transfersEnabled",
              "outputs": [{
                "name": "",
                "type": "bool"
              }],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            }, {
              "constant": true,
              "inputs": [],
              "name": "parentSnapShotBlock",
              "outputs": [{
                "name": "",
                "type": "uint256"
              }],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            }, {
              "constant": false,
              "inputs": [{
                "name": "_spender",
                "type": "address"
              }, {
                "name": "_amount",
                "type": "uint256"
              }, {
                "name": "_extraData",
                "type": "bytes"
              }],
              "name": "approveAndCall",
              "outputs": [{
                "name": "success",
                "type": "bool"
              }],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "constant": false,
              "inputs": [{
                "name": "_owner",
                "type": "address"
              }, {
                "name": "_amount",
                "type": "uint256"
              }],
              "name": "destroyTokens",
              "outputs": [{
                "name": "",
                "type": "bool"
              }],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "constant": true,
              "inputs": [{
                "name": "_owner",
                "type": "address"
              }, {
                "name": "_spender",
                "type": "address"
              }],
              "name": "allowance",
              "outputs": [{
                "name": "remaining",
                "type": "uint256"
              }],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            }, {
              "constant": false,
              "inputs": [{
                "name": "_token",
                "type": "address"
              }],
              "name": "claimTokens",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "constant": true,
              "inputs": [],
              "name": "tokenFactory",
              "outputs": [{
                "name": "",
                "type": "address"
              }],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            }, {
              "constant": false,
              "inputs": [{
                "name": "_transfersEnabled",
                "type": "bool"
              }],
              "name": "enableTransfers",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "constant": true,
              "inputs": [],
              "name": "controller",
              "outputs": [{
                "name": "",
                "type": "address"
              }],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            }, {
              "inputs": [{
                "name": "_tokenFactory",
                "type": "address"
              }, {
                "name": "_parentToken",
                "type": "address"
              }, {
                "name": "_parentSnapShotBlock",
                "type": "uint256"
              }, {
                "name": "_tokenName",
                "type": "string"
              }, {
                "name": "_decimalUnits",
                "type": "uint8"
              }, {
                "name": "_tokenSymbol",
                "type": "string"
              }, {
                "name": "_transfersEnabled",
                "type": "bool"
              }],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "constructor"
            }, {
              "payable": true,
              "stateMutability": "payable",
              "type": "fallback"
            }, {
              "anonymous": false,
              "inputs": [{
                "indexed": true,
                "name": "_token",
                "type": "address"
              }, {
                "indexed": true,
                "name": "_controller",
                "type": "address"
              }, {
                "indexed": false,
                "name": "_amount",
                "type": "uint256"
              }],
              "name": "ClaimedTokens",
              "type": "event"
            }, {
              "anonymous": false,
              "inputs": [{
                "indexed": true,
                "name": "_from",
                "type": "address"
              }, {
                "indexed": true,
                "name": "_to",
                "type": "address"
              }, {
                "indexed": false,
                "name": "_amount",
                "type": "uint256"
              }],
              "name": "Transfer",
              "type": "event"
            }, {
              "anonymous": false,
              "inputs": [{
                "indexed": true,
                "name": "_cloneToken",
                "type": "address"
              }, {
                "indexed": false,
                "name": "_snapshotBlock",
                "type": "uint256"
              }],
              "name": "NewCloneToken",
              "type": "event"
            }, {
              "anonymous": false,
              "inputs": [{
                "indexed": true,
                "name": "_owner",
                "type": "address"
              }, {
                "indexed": true,
                "name": "_spender",
                "type": "address"
              }, {
                "indexed": false,
                "name": "_amount",
                "type": "uint256"
              }],
              "name": "Approval",
              "type": "event"
            }];
            contractAddress = "0xD275B1550E8ca8Da84c552ACa9313Ec4a5B9bD07";
            contract = new ethers__WEBPACK_IMPORTED_MODULE_4__["ethers"].Contract(contractAddress, abi, provider);
            Transfer = contract.filters.Transfer();
            topics = Transfer.topics ? Transfer.topics[1] : ""; //let topic = ethers.utils.id("transfer(address,address)");

            console.log("topics = ", topics);
            filter = {
              address: contractAddress,
              fromBlock: 8960961,
              toBlock: "latest",
              topics: [topics]
            };
            provider.getLogs(filter).then(function (result) {
              console.log("result ", result);
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(result), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var entry = _step.value;
                  console.log("entry ", entry);
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                    _iterator["return"]();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function test() {
    return _ref.apply(this, arguments);
  };
}();

var Home = function Home(_ref2) {
  var userAgent = _ref2.userAgent;
  test();
  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Hello world! - user agent: ", userAgent);
};

Home.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref3) {
    var req, userAgent;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            req = _ref3.req;
            userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
            return _context2.abrupt("return", {
              userAgent: userAgent
            });

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Home); // 7BB81632c66cfAf0c9c7aA2DBaBf21FBC036D013
// "0x0000000000000000000000007bb81632c66cfaf0c9c7aa2dbabf21fbc036d013"

/***/ })

})
//# sourceMappingURL=index.js.16e700ca9eea699e6da3.hot-update.js.map