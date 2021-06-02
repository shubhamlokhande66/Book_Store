module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
    "moduleNameMapper": {
      "\\.(css|scss)$": "identity-obj-proxy",
      "\\.(png|svg|pdf|jpg|jpeg)$": "<rootDir>/fileMock.js"
  }
  };