const { getGoogleApi } = require('./getGoogleApi');

const getGoogleMaps = () => {
  return getGoogleApi().maps;
};

module.exports = { getGoogleMaps };
