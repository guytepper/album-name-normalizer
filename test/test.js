const removeDescriptors = require('../index.js');

it('removes descriptors correctly', () => {
  const nevermind = removeDescriptors('Nevermind (Remastered)');
  expect(nevermind).toEqual('Nevermind');
});
