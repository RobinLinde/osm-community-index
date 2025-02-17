import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.mjs',
  output: {
    name: 'oci',
    file: 'dist/index.js',
    format: 'umd'
  },
  plugins: [
    nodeResolve(),
    commonjs()
  ]
};
