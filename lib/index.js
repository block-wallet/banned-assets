"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const read = require('read-file');
const ethereumjs_util_1 = require("ethereumjs-util");
const path_1 = require("path");
const ASSETS_LIST_PATH = (0, path_1.join)(__dirname, '..', 'assets-list.json');
const excludedTokens = JSON.parse(read.sync(ASSETS_LIST_PATH, 'utf8'));
const isTokenExcluded = (chainId, address) => {
    if (!(0, ethereumjs_util_1.isValidAddress)(address)) {
        return false;
    }
    if (!(chainId.toString() in excludedTokens)) {
        return false;
    }
    return excludedTokens[chainId.toString()].includes((0, ethereumjs_util_1.toChecksumAddress)(address));
};
exports.default = isTokenExcluded;
