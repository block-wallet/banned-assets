import { isValidAddress, toChecksumAddress } from 'ethereumjs-util';
// @ts-ignore
import excludedTokens from './assets-list';

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
