const removeDescriptors = require('../index.js');
const albumNames = require('./album-names.json');

it('removes descriptors correctly', () => {
  const normalizedNames = albumNames.map(name => removeDescriptors(name));
  normalizedNames.forEach(name => {
    expect(name).toEqual('Album Name');
  });
});
