exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/**/*.spec.js'],
  onPrepare: () => {
    browser.ignoreSynchronization = true;
  },
  baseUrl: 'http://localhost:3000/',
  capabilities: {
    browserName: 'chrome'
  },
};
