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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/dist/ethers.min.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/davidhovey/SaintFame/Site/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var test =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var provider, myAddress, abi, contractAddress, contract, filterToMe, contractEnsName, topic, filter;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            provider = new ethers__WEBPACK_IMPORTED_MODULE_3__["ethers"].providers.JsonRpcProvider('https://mainnet.infura.io/v3/ab962fb32dfc49a8ab6ab72a6a318c85'); //let myAddress = "0x7bb81632c66cfaf0c9c7aa2dbabf21fbc036d013"

            myAddress = "0xD0c2A89B0e5E1f5Ac3b4373f078fe27c99AcB191";
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
            contract = new ethers__WEBPACK_IMPORTED_MODULE_3__["ethers"].Contract(contractAddress, abi, provider);
            filterToMe = contract.filters.Transfer(null, ethers__WEBPACK_IMPORTED_MODULE_3__["ethers"].constants.AddressZero); // Listen for our filtered results

            contract.on(filterToMe, function (from, to, value) {
              console.log('I received ' + value.toString() + ' tokens from ' + from);
            }); // provider.getLogs(filterToMe).then((result) => {
            //   console.log(result);
            //   // [ {
            //   //    blockNumber: 3313426,
            //   //    blockHash: "0xe01c1e437ed3af9061006492cb07454eca8561479454a709809b7897f225387d",
            //   //    transactionIndex: 5,
            //   //    removed: false,
            //   //    address: "0x6fC21092DA55B392b045eD78F4732bff3C580e2c",
            //   //    data: "0x00000000000000000000000053095760c154a1531a69fc718119d14c4aa1506f" +
            //   //            "000000000000000000000000000000000000000000000000016345785d8a0000",
            //   //    topics: [
            //   //      "0x179ef3319e6587f6efd3157b34c8b357141528074bcb03f9903589876168fa14",
            //   //      "0xe625ed7b108857745d1d9889a7ae05861d8aee38e0e92fd3a31191de01c2515b"
            //   //    ],
            //   //    transactionHash: "0x61d641aaf3dcf4cf6bafc3e79d332d8773ea0688f87eb00f8b60c3f0050e55f0",
            //   //    logIndex: 5
            //   // } ]
            // });
            // Get the filter event

            contractEnsName = 'registrar.firefly.eth';
            topic = ethers__WEBPACK_IMPORTED_MODULE_3__["ethers"].utils.id("nameRegistered(bytes32,address,uint256)");
            filter = {
              address: contractEnsName,
              fromBlock: 3313425,
              toBlock: 3313430,
              topics: [topic]
            };
            provider.getLogs(filter).then(function (result) {
              console.log(result); // [ {
              //    blockNumber: 3313426,
              //    blockHash: "0xe01c1e437ed3af9061006492cb07454eca8561479454a709809b7897f225387d",
              //    transactionIndex: 5,
              //    removed: false,
              //    address: "0x6fC21092DA55B392b045eD78F4732bff3C580e2c",
              //    data: "0x00000000000000000000000053095760c154a1531a69fc718119d14c4aa1506f" +
              //            "000000000000000000000000000000000000000000000000016345785d8a0000",
              //    topics: [
              //      "0x179ef3319e6587f6efd3157b34c8b357141528074bcb03f9903589876168fa14",
              //      "0xe625ed7b108857745d1d9889a7ae05861d8aee38e0e92fd3a31191de01c2515b"
              //    ],
              //    transactionHash: "0x61d641aaf3dcf4cf6bafc3e79d332d8773ea0688f87eb00f8b60c3f0050e55f0",
              //    logIndex: 5
              // } ]
            }); // let number = await provider.getBlockNumber()
            // let etherscanProvider = new ethers.providers.EtherscanProvider();
            // var Transfer = contract.interface.events.Transfer
            // etherscanProvider.perform("getLogs", { topic: Transfer.topic, address: myAddress, fromBlock: 10000, toBlock: number} ).then((history) => {
            //   console.log("history", history);
            // });
            // etherscanProvider.getHistory(myAddress, Transfer).then((history) => {
            //   console.log("history", history);
            //     history.forEach((tx) => {
            //         console.log("scan", tx);
            //     })
            // });
            // console.log('contract ',  contract.address);
            // console.log('contract ',  contract.functions);
            // let filterToMe = contract.filters.Transfer(null, "0x7bb81632c66cfaf0c9c7aa2dbabf21fbc036d013");
            // let logs = await provider.getLogs(filterToMe);
            // console.log('logs ',  logs);
            // console.log('derp');
            // provider.getBalance(address).then((balance) => {
            //     // balance is a BigNumber (in wei); format is as a sting (in ether)
            //     let etherString = ethers.utils.formatEther(balance);
            //     console.log("etherString = ", etherString)
            // });

          case 11:
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
      lineNumber: 126
    },
    __self: this
  }, "Hello world! - user agent: ", userAgent);
};

Home.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
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

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.eacaa85ffc977f5363e2.hot-update.js.map