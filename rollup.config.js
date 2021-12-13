import babel from '@rollup/plugin-babel';
import cleaner from 'rollup-plugin-cleaner';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: ['src/index.js'],
  output:
  {
		exports: 'named',
    file: 'dist/bundle.js',
    format: 'iife',
		globals: {
			react: 'React'
		},
		name: 'bundle'
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      presets: [
        '@babel/preset-env',
        '@babel/preset-react'
      ]
    }),
		cleaner({
			targets: ['dist']
		}),
    commonjs(),
    copy({
      targets: [
        { src: 'package.json', dest: 'dist' },
				{ src: 'LICENSE', dest: 'dist' },
        { src: 'README.md', dest: 'dist' }
      ]
    }),
    peerDepsExternal(),
    resolve()
  ]
};