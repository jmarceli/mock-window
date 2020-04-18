const navigateToNextLocation = () => {
  const loc = window.location.href + '/next';
  window.location.replace(loc);
};

test('window nested variables mocking', () => {
  // setup
  const mockedReplace = jest.fn();
  // without making a copy you will have a circular dependency problem during mocking
  const originalWindow = { ...window };
  const windowSpy = jest.spyOn(global, 'window', 'get');
  windowSpy.mockImplementation(() => ({
    ...originalWindow,
    location: {
      ...originalWindow.location,
      href: 'http://my.test/page',
      replace: mockedReplace,
    },
  }));

  // tests
  navigateToNextLocation();

  // assertions
  expect(mockedReplace).toBeCalledWith('http://my.test/page/next');

  // cleanup
  windowSpy.mockRestore();
});
