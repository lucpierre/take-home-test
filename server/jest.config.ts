import type { Config } from 'jest'

const config: Config = {
    testEnvironment: 'node',
    roots: ['<rootDir>/src', '<rootDir>/test'],
    testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
    transform: {
        '^.+\\.(t|j)sx?$': '@swc/jest',
    },
    transformIgnorePatterns: ['node_modules/(?!(nanoid)/)'],
    collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    verbose: true,
}

export default config
