import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const extensions = [
    '.js', '.ts'
];

const name = 'EmpireECS';

export default [
    {
        input: './src/index.ts',
        external: [],
        plugins: [
            resolve({ extensions }),
            commonjs(),
            babel({
                extensions,
                include: ['src/**/*'],
                exclude: ['src/**/*.spec.ts']
            }),
            terser()
        ],
        output: [{
            file: 'dist/empire-ecs.cjs.js',
            format: 'cjs',
            sourcemap: true
        }, {
            file: 'dist/empire-ecs.esm.js',
            format: 'es',
            sourcemap: true
        }, {
            file: 'dist/empire-ecs.iife.js',
            format: 'iife',
            name,
            globals: {},
            sourcemap: true
        }]
    }
];
