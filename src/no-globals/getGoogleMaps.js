const { googleApi } = require('./googleApi');

const getGoogleMaps = () => {
  return googleApi.maps;
};

module.exports = { getGoogleMaps };
