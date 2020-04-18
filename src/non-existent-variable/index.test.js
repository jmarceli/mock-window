const getGoogleMaps = () => {
  return global.google.maps;
};

test('direct global variable', () => {
  // setup
  const originalGoogle = global.google;
  global.google = { maps: 'test' };

  // tests
  const maps = getGoogleMaps();

  // assertions
  expect(maps).toBe('test');

  // cleanup
  global.google = originalGoogle;
});
