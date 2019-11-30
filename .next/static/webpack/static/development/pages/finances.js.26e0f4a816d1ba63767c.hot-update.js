webpackHotUpdate("static/development/pages/finances.js",{

/***/ "./pages/finances.tsx":
/*!****************************!*\
  !*** ./pages/finances.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/dist/ethers.min.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "/Users/davidhovey/SaintFame/saintfame/pages/finances.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var API_KEY = 'X3SIP83C2DJ8VRBYIF9NSUKRBRGHI6DX22';
var DAO = '0xf739c4d15854cab9874e24a4d1ec084dcaf1f13f';
var FINANCES_ENDPOINT = "http://api.etherscan.io/api?module=account&action=tokentx&address=".concat(DAO, "&startblock=8972891&endblock=latest&sort=asc&apikey=").concat(API_KEY);
var provider = new ethers__WEBPACK_IMPORTED_MODULE_4__["ethers"].providers.EtherscanProvider('mainnet', API_KEY); // prettier-ignore

var financeContractABI = [{
  "constant": true,
  "inputs": [],
  "name": "proxyType",
  "outputs": [{
    "name": "proxyTypeId",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "isDepositable",
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
  "name": "implementation",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "appId",
  "outputs": [{
    "name": "",
    "type": "bytes32"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "kernel",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "name": "_kernel",
    "type": "address"
  }, {
    "name": "_appId",
    "type": "bytes32"
  }, {
    "name": "_initializePayload",
    "type": "bytes"
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
    "indexed": false,
    "name": "sender",
    "type": "address"
  }, {
    "indexed": false,
    "name": "value",
    "type": "uint256"
  }],
  "name": "ProxyDeposit",
  "type": "event"
}];
var financeAddress = '0xf739C4d15854CaB9874E24a4D1Ec084DCAF1F13F';
var financeContract = new ethers__WEBPACK_IMPORTED_MODULE_4__["ethers"].Contract(financeAddress, financeContractABI, new ethers__WEBPACK_IMPORTED_MODULE_4__["ethers"].providers.JsonRpcProvider());

var getFinanceTransactions =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(transactionHash) {
    var tx, abi, iface, transaction, referenceString, inputData;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return provider.getTransaction(transactionHash);

          case 2:
            tx = _context.sent;
            //Function: deposit(address _token, uint256 _amount, string _reference)
            abi = ['deposit(address _token, uint256 _amount, string _reference)'];
            iface = new ethers__WEBPACK_IMPORTED_MODULE_4__["ethers"].utils.Interface(abi);
            transaction = iface.parseTransaction(tx);
            referenceString = transaction.args[2];
            inputData = {
              reference: referenceString,
              fromAddress: tx.from
            };
            return _context.abrupt("return", inputData);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getFinanceTransactions(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getFinances =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    var transfers, result, data, filtered, parsedTransfers, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, parsed, inputData, transfer;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            transfers = [];
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(FINANCES_ENDPOINT);

          case 3:
            result = _context2.sent;
            data = result.data.result; // Don't show transfers from DAO, only incomming

            filtered = data.filter(function (log) {
              return log.from !== DAO;
            });
            parsedTransfers = filtered.map(function (log) {
              var date = new Date(log.timeStamp * 1000);
              var dateString = date.toLocaleDateString();
              var wei = ethers__WEBPACK_IMPORTED_MODULE_4__["ethers"].utils.bigNumberify(log.value);
              var amount = ethers__WEBPACK_IMPORTED_MODULE_4__["ethers"].utils.formatEther(wei) + ' ' + log.tokenSymbol;
              var transactionHash = log.hash;
              var parsed = {
                time: dateString,
                amount: amount,
                hash: transactionHash
              };
              return parsed;
            });
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 10;
            _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(parsedTransfers);

          case 12:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context2.next = 22;
              break;
            }

            parsed = _step.value;
            _context2.next = 16;
            return getFinanceTransactions(parsed.hash);

          case 16:
            inputData = _context2.sent;
            transfer = {
              time: parsed.time,
              amount: parsed.amount,
              reference: inputData.reference,
              address: inputData.fromAddress
            };
            transfers.push(transfer);

          case 19:
            _iteratorNormalCompletion = true;
            _context2.next = 12;
            break;

          case 22:
            _context2.next = 28;
            break;

          case 24:
            _context2.prev = 24;
            _context2.t0 = _context2["catch"](10);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 28:
            _context2.prev = 28;
            _context2.prev = 29;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 31:
            _context2.prev = 31;

            if (!_didIteratorError) {
              _context2.next = 34;
              break;
            }

            throw _iteratorError;

          case 34:
            return _context2.finish(31);

          case 35:
            return _context2.finish(28);

          case 36:
            return _context2.abrupt("return", transfers);

          case 37:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[10, 24, 28, 36], [29,, 31, 35]]);
  }));

  return function getFinances() {
    return _ref2.apply(this, arguments);
  };
}();

var Finances = function Finances(_ref3) {
  var finances = _ref3.finances;
  var listItems = finances.map(function (finance) {
    return __jsx("li", {
      key: finance.address,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, finance.time, " -- ", finance.address, " -- ", finance.amount, " --", ' ', finance.reference);
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Finances"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "DAO FINANCES"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, listItems));
};

Finances.getInitialProps =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(_ref4) {
    var req, finances;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            req = _ref4.req;
            _context3.next = 3;
            return getFinances();

          case 3:
            finances = _context3.sent;
            return _context3.abrupt("return", {
              finances: finances
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x2) {
    return _ref5.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Finances);

/***/ })

})
//# sourceMappingURL=finances.js.26e0f4a816d1ba63767c.hot-update.js.map