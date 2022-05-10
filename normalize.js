const fs = require('fs');
const path = require('path');
const { toChecksumAddress, isValidAddress } = require('ethereumjs-util');

const readFileSync = (path) => JSON.parse(fs.readFileSync(path, 'utf8'));
const writeFileSync = (path, data) => fs.writeFileSync(path, data);

(async () => {
  const assets = readFileSync(path.join(__dirname, 'assets-list.json'));

  for (const chainId in assets) {
    for (let i = 0; i < assets[chainId].length; i++) {
      if (isValidAddress(assets[chainId][i])) {
        assets[chainId][i] = toChecksumAddress(assets[chainId][i]);
      }
    }
  }

  const tsFileContent = `const excludedTokens: { [chainId in string]: string[] } = ${JSON.stringify(
    assets,
  )}; export default excludedTokens;`;

  writeFileSync(path.join(__dirname, 'src', 'assets-list.ts'), tsFileContent);
})();
