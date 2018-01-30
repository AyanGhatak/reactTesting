describe('Protractor Demo App', function () {
  beforeEach(() => {
    browser.get('/');
  });
  it('should have a title', function () {
    browser.get('/about');
    expect($('.greeeting').isPresent()).toBeTruthy();
    browser.get('/');
    expect($('#root').isPresent()).toBeTruthy();
    expect($('.greeeting').isPresent()).toBeFalsy();
  });

  it('Routing should work', () => {
    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/');
    $('.about-action').click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/about');
    expect($('.greeeting').isPresent()).toBeTruthy();
  });
});
