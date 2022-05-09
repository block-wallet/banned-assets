import { isValidAddress, toChecksumAddress } from 'ethereumjs-util';
import { readFileSync } from 'fs';
import { join } from 'path';

const _readFileSync = (path: string) => JSON.parse(readFileSync(path, 'utf8'));

const ASSETS_LIST_PATH = join(__dirname, '..', 'assets-list.json');

const excludedTokens: { [chainId in string]: string[] } = _readFileSync(ASSETS_LIST_PATH);

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
