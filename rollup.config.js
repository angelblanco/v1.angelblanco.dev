import resolve from 'rollup-plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';
import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { string } from "rollup-plugin-string";
import config from 'sapper/config/rollup.js';
import pkg from './package.json';
import svelteAutoPreprocess from 'svelte-preprocess';
import alias from '@rollup/plugin-alias';
import path from 'path';
import { markdownIt } from './src/services/markdown/rollupPlugin';
import env from './src/services/env/index';
import fs from 'fs';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	onwarn(warning)

const dedupe = importee => importee === 'svelte' || importee.startsWith('svelte/');

const aliasOptions = {
	resolve: ['', '.js', '.svelte'],
	entries: [
		{ find: '@', replacement: path.resolve(__dirname, './src') },
	]
};

const pathToScss = scss => path.resolve(__dirname, `./src/styles/${scss}`);

const envVars = env(__dirname);

const scssPreppendData = [
	fs.readFileSync(pathToScss('_variables.scss', 'utf8')),
	fs.readFileSync(pathToScss('_mixins.scss', 'utf8')),
	fs.readFileSync(pathToScss('_fonts.scss', 'utf8')),
].join("\n");

const autoPreprocess = () => svelteAutoPreprocess({ scss: { prependData: scssPreppendData } });

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),

		plugins: [
			replace({
				preventAssignment: true,
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
				...envVars,
			}),
			json(),
			string({
				include: '**/*.txt',
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true,
				preprocess: autoPreprocess(),
			}),
			resolve({
				browser: true,
				dedupe
			}),

			commonjs(),

			alias(aliasOptions),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				runtimeHelpers: true,
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],
		preserveEntrySignatures: false,

		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				preventAssignment: true,
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode),
				...envVars,
			}),
			json(),
			string({
				include: '**/*.txt',
			}),
			markdownIt({
				docLocation: path.resolve(__dirname, './docs/articles')
			}),
			svelte({
				generate: 'ssr',
				hydratable: true,
				dev,
				preprocess: autoPreprocess(),
			}),
			resolve({
				dedupe,
			}),
			commonjs(),
			alias(aliasOptions),
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),

		preserveEntrySignatures: 'strict',
		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				preventAssignment: true,
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
				...envVars,
			}),
			commonjs(),
			!dev && terser()
		],

		preserveEntrySignatures: false,
		onwarn,
	}
};