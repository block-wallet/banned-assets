"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethereumjs_util_1 = require("ethereumjs-util");
const fs = require('fs');
const path = require('path');
const readFileSync = (path) => JSON.parse(fs.readFileSync(path, 'utf8'));
const ASSETS_LIST_PATH = path.join(__dirname, '..', 'assets-list.json');
const excludedTokens = readFileSync(ASSETS_LIST_PATH);
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
