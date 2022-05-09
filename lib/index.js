"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethereumjs_util_1 = require("ethereumjs-util");
const fs_1 = require("fs");
const ASSETS_LIST_PATH = 'assets-list.json';
const _readFileSync = (path) => JSON.parse((0, fs_1.readFileSync)(path, 'utf8'));
const excludedTokens = _readFileSync(ASSETS_LIST_PATH);
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
