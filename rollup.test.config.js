import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import multi from '@rollup/plugin-multi-entry';

const env = process.env.NODE_ENV;

const lodashExternal = [
  'lodash/find',
  'lodash/findIndex',
  'lodash/each',
  'lodash/isArray',
  'lodash/filter',
  'lodash/set',
  'lodash/get',
  'lodash/map',
  'lodash/isObject',
  'lodash/orderBy',
  'lodash/isNumber',
  'lodash/mapValues',
  'lodash/isObjectLike',
  'lodash/forIn',
  'lodash/every',
  'lodash/some',
]

export default {
  input: 'tests/**/*-test.js',
  external: [
    'isomorphic-fetch',
    '@turf/turf',
    're-reselect',
    'chroma-js',
    'moment',
    'chai',
    ...lodashExternal
  ],
  output: {
    file: 'build/bundle-tests.js',
    format: env,
    globals: {
      // 'lodash/random': '_.random'
    },
    exports: 'named', /** Disable warning for default imports */
    sourcemap: true,
  },
  plugins: [
    multi(),
    babel({
      plugins: ["lodash"],
    }),
    commonjs({
        include: 'node_modules/**',
    }),
  ]
};