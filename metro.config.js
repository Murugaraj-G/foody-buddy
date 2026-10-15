const path = require('path');

module.exports = {
  resolver: {
    blacklistRE: /node_modules\/.*\/node_modules\/react-native\/.*/,
  },
  watchFolders: [
    path.resolve(__dirname, 'node_modules'),
  ],
};
