import isFileExcluded from '../index';

test('excluded asset', () => {
  expect(isFileExcluded(1, '0x410B428BDB85cBF32ddea8c329eD5f73B560A51b')).toBe(true);
});

test('not excluded asset', () => {
  expect(isFileExcluded(1, '0xdac17f958d2ee523a2206206994597c13d831ec7')).toBe(false);
});

test('unknown chain', () => {
  expect(isFileExcluded(123, '0x410B428BDB85cBF32ddea8c329eD5f73B560A51b')).toBe(false);
});

test('invalid address', () => {
  expect(isFileExcluded(1, 'usdt')).toBe(false);
});

test('excluded asset not checksummed addrtess', () => {
  expect(isFileExcluded(1, '0x410B428bdb85cbf32ddea8c329ed5f73B560A51b')).toBe(true);
});
