"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethereumjs_util_1 = require("ethereumjs-util");
const fs_1 = require("fs");
const path_1 = require("path");
const _readFileSync = (path) => JSON.parse((0, fs_1.readFileSync)(path, 'utf8'));
const ASSETS_LIST_PATH = (0, path_1.join)(__dirname, '..', 'assets-list.json');
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
