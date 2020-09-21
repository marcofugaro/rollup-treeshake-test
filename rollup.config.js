import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/main.js',
  treeshake: true,
  plugins: [
    resolve(),
  ],
  output: {
    file: './build/index.js',
  },
}