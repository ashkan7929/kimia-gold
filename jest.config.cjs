/** @type {import('jest').Config} */
module.exports = {
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/src/**/*.test.ts?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    transform: {
        '^.+\\.(t|j)sx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|scss|sass|less)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|svg|webp|woff2?|ttf|eot)$': '<rootDir>/test/__mocks__/fileMock.js',
    },

    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
