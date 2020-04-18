test('it works', () => {
  // setup
  jest.resetModules(); // to make sure that require will return a new module instance
  jest.mock('./googleApi', () => ({ googleApi: { maps: 'test' } })); // mock whatever you want, even constants
  const { getGoogleMaps } = require('./getGoogleMaps'); // import tested module

  // tests
  const maps = getGoogleMaps();

  // assertions
  expect(maps).toBe('test');

  // cleanup
  jest.resetModules(); // not required if you resetModules() at the beginning of each test case
});
