import { isValidAddress, toChecksumAddress } from 'ethereumjs-util';
import { join } from 'path';

const ASSETS_LIST_PATH = join(__dirname, '..', 'assets-list.json');

const excludedTokens: { [chainId in string]: string[] } = require(ASSETS_LIST_PATH);

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
