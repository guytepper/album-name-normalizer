/**
 * Remove descriptors from the provided album name.
 * @param {string} albumName - The album name to remove descriptors from.
 * @returns {string} The album name without descriptors.
 */
function removeDescriptors(albumName) {
  let descriptorIndex = -1;
  descriptorIndex = albumName.indexOf('Remaster');

  if (descriptorIndex < 0) {
    descriptorIndex = albumName.indexOf('Deluxe');
  }

  if (descriptorIndex < 0) {
    descriptorIndex = albumName.indexOf('Explicit Version');
  }

  if (descriptorIndex < 0) {
    descriptorIndex = albumName.indexOf('Original Motion Picture Soundtrack');
  }

  // Descriptors are usually wrapped inside brackets, so we'll remove anything inside those brackets.
  if (descriptorIndex > 0) {
    const lastBracket = albumName.lastIndexOf('(');
    const normalizedName = albumName.slice(0, lastBracket - 1);
    return normalizedName;
  }

  return albumName;
}

module.exports = removeDescriptors;
