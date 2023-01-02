/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '.+.(ts|tsx)': [
            'ts-jest',
            {
                // tsconfig: '<rootDir>/test/tsconfig.json',
            },
        ],
    },
};
