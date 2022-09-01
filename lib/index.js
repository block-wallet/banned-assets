"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethereumjs_util_1 = require("ethereumjs-util");
// @ts-ignore
const assets_list_1 = require("./assets-list");
const isTokenExcluded = (chainId, address) => {
    if (!(0, ethereumjs_util_1.isValidAddress)(address)) {
        return false;
    }
    if (!(chainId.toString() in assets_list_1.default)) {
        return false;
    }
    return assets_list_1.default[chainId.toString()].includes((0, ethereumjs_util_1.toChecksumAddress)(address));
};
exports.default = isTokenExcluded;
