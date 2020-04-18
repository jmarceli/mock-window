const { getGoogleMaps } = require('./getGoogleMaps');
const { getGoogleApi } = require('./getGoogleApi');
jest.mock('./getGoogleApi');

test('it works', () => {
  // setup
  getGoogleApi.mockImplementation(() => ({ maps: 'test' }));

  // tests
  const maps = getGoogleMaps();

  // assertions
  expect(maps).toBe('test');

  // cleanup
  jest.resetModules(); // not required if you resetModules() at the beginning of each test case
});
