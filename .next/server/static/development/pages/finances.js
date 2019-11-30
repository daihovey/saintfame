module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/finances.tsx":
/*!****************************!*\
  !*** ./pages/finances.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ "ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/davidhovey/SaintFame/saintfame/pages/finances.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const API_KEY = 'X3SIP83C2DJ8VRBYIF9NSUKRBRGHI6DX22';
const DAO = '0xf739c4d15854cab9874e24a4d1ec084dcaf1f13f';
let FINANCES_ENDPOINT = `http://api.etherscan.io/api?module=account&action=tokentx&address=${DAO}&startblock=8972891&endblock=latest&sort=asc&apikey=${API_KEY}`;
const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__["ethers"].providers.EtherscanProvider('mainnet', API_KEY); // prettier-ignore

const financeContractABI = [{
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
let financeAddress = '0xf739C4d15854CaB9874E24a4D1Ec084DCAF1F13F';
let financeContract = new ethers__WEBPACK_IMPORTED_MODULE_1__["ethers"].Contract(financeAddress, financeContractABI, new ethers__WEBPACK_IMPORTED_MODULE_1__["ethers"].providers.JsonRpcProvider());

const getFinanceTransactions = async transactionHash => {
  let tx = await provider.getTransaction(transactionHash); //Function: deposit(address _token, uint256 _amount, string _reference)

  let abi = ['deposit(address _token, uint256 _amount, string _reference)'];
  let iface = new ethers__WEBPACK_IMPORTED_MODULE_1__["ethers"].utils.Interface(abi);
  const transaction = iface.parseTransaction(tx);
  const referenceString = transaction.args[2];
  const inputData = {
    reference: referenceString,
    fromAddress: tx.from
  };
  return inputData;
};

const getFinances = async () => {
  let transfers = [];
  const result = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(FINANCES_ENDPOINT);
  const data = result.data.result; // Don't show transfers from DAO, only incomming

  const filtered = data.filter(function (log) {
    return log.from !== DAO;
  });
  const parsedTransfers = filtered.map(function (log) {
    var date = new Date(log.timeStamp * 1000);
    var dateString = date.toLocaleDateString();
    let wei = ethers__WEBPACK_IMPORTED_MODULE_1__["ethers"].utils.bigNumberify(log.value);
    const amount = ethers__WEBPACK_IMPORTED_MODULE_1__["ethers"].utils.formatEther(wei) + ' ' + log.tokenSymbol;
    const transactionHash = log.hash;
    const parsed = {
      time: dateString,
      amount: amount,
      hash: transactionHash
    };
    return parsed;
  });

  for (let parsed of parsedTransfers) {
    let inputData = await getFinanceTransactions(parsed.hash);
    const transfer = {
      time: parsed.time,
      amount: parsed.amount,
      reference: inputData.reference,
      address: inputData.fromAddress
    };
    transfers.push(transfer);
  }

  return transfers;
};

const Finances = ({
  finances
}) => {
  const listItems = finances.map(finance => __jsx("li", {
    key: finance.address,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, finance.time, " -- ", finance.address, " -- ", finance.amount, " --", finance.reference));
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "Finances"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  })), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, "DAO FINANCES"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, listItems));
};

Finances.getInitialProps = async ({
  req
}) => {
  const finances = await getFinances();
  return {
    finances
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Finances);

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./pages/finances.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/davidhovey/SaintFame/saintfame/pages/finances.tsx */"./pages/finances.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ethers");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=finances.js.map