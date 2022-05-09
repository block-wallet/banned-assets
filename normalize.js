const fs = require('fs');
const path = require('path');
const { toChecksumAddress, isValidAddress } = require('ethereumjs-util');

const ASSETS_LIST_PATH = path.join(__dirname, 'assets-list.json');

const readFileSync = (path) => JSON.parse(fs.readFileSync(path, 'utf8'));

const writeFileSync = (path, data) => fs.writeFileSync(path, JSON.stringify(data));

(async () => {
  const assets = readFileSync(ASSETS_LIST_PATH);

  for (const chainId in assets) {
    for (let i = 0; i < assets[chainId].length; i++) {
      if (isValidAddress(assets[chainId][i])) {
        assets[chainId][i] = toChecksumAddress(assets[chainId][i]);
      }
    }
  }

  writeFileSync(ASSETS_LIST_PATH, assets);
})();
