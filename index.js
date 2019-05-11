const descriptors = ['Remaster', 'Deluxe', 'Explicit', 'Original Motion Picture Soundtrack', 'Single'];

/**
 * Remove descriptors from the provided album name.
 * @param {string} albumName - The album name to remove descriptors from.
 * @returns {string} The album name without descriptors.
 */
function removeDescriptors(albumName) {
  const foundDescriptors = descriptors.find(d => albumName.indexOf(d) > 0) || [];

  if (foundDescriptors.length > 0) {
    let normalizedName = '';

    // Check if the spacing character between the album name & the descriptor is a hyphen.
    if (albumName.charAt(albumName.indexOf(foundDescriptors[0]) - 2) === '-') {
      const lastHyphen = albumName.lastIndexOf('-');
      normalizedName = albumName.slice(0, lastHyphen - 1);
    } else {
      // Descriptors are usually wrapped inside brackets, so we'll remove anything inside those brackets.
      const lastBracket = albumName.lastIndexOf('(');
      normalizedName = albumName.slice(0, lastBracket - 1);
    }

    return normalizedName;
  }

  return albumName;
}

module.exports = removeDescriptors;
