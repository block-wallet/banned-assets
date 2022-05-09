import { isValidAddress, toChecksumAddress } from 'ethereumjs-util';
const fs = require('fs');
const path = require('path');
const readFileSync = (path: string) => JSON.parse(fs.readFileSync(path, 'utf8'));

const ASSETS_LIST_PATH = path.join(__dirname, '..', 'assets-list.json');

const excludedTokens: { [chainId in string]: string[] } = readFileSync(ASSETS_LIST_PATH);

const isTokenExcluded = (chainId: number, address: string): boolean => {
  if (!isValidAddress(address)) {
    return false;
  }
  if (!(chainId.toString() in excludedTokens)) {
    return false;
  }

  return excludedTokens[chainId.toString()].includes(toChecksumAddress(address));
};

export default isTokenExcluded;
