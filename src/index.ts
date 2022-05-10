const read = require('read-file');
import { isValidAddress, toChecksumAddress } from 'ethereumjs-util';
import { join } from 'path';

const ASSETS_LIST_PATH = join(__dirname, '..', 'assets-list.json');

const excludedTokens: { [chainId in string]: string[] } = JSON.parse(read.sync(ASSETS_LIST_PATH, 'utf8'));

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
