import vue from 'rollup-plugin-vue'
import commonJs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import { babelConfig } from './rollup.babel.config'

const distPath = 'test-dist'
const libraryName = 'vue-easy-lightbox'

export default [
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: `${distPath}/${libraryName}.es5.esm.min.js`
    },
    plugins: [
      vue(),
      babel(babelConfig),
      resolve(),
      commonJs(),
      terser()
    ]
  },
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: `${distPath}/${libraryName}.esm.min.js`
    },
    plugins: [
      vue(),
      resolve(),
      commonJs(),
      terser()
    ]
  },
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: `${distPath}/${libraryName}.es5.cjs.min.js`
    },
    plugins: [
      vue(),
      babel(babelConfig),
      resolve(),
      commonJs(),
      terser()
    ]
  },
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: `${distPath}/${libraryName}.cjs.min.js`
    },
    plugins: [
      vue(),
      resolve(),
      commonJs(),
      terser()
    ]
  },
  {
    input: 'src/index.js',
    output: {
      format: 'umd',
      file: `${distPath}/${libraryName}.es5.umd.min.js`,
      name: libraryName
    },
    plugins: [
      vue(),
      babel(babelConfig),
      resolve(),
      commonJs(),
      terser()
    ]
  },
  {
    input: 'src/index.js',
    output: {
      format: 'umd',
      file: `${distPath}/${libraryName}.umd.min.js`,
      name: libraryName
    },
    plugins: [
      vue(),
      resolve(),
      commonJs(),
      terser()
    ]
  }
]
