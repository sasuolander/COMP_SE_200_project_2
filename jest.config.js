const {defaults} = require('jest-config');

/** @type {import('jest').Config} */
//const config = {
//  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],
//};


/** @type {import('jest').Config} */
const config = {
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: -10,
      },
    },
  };
  
  module.exports = config;
