import '@testing-library/jest-dom';

// Mock SCSS modules
jest.mock('*.module.scss', () => ({
  __esModule: true,
  default: new Proxy({}, {
    get: (_, key) => key
  })
})); 