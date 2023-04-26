const path = require('path');
const { version } = require('./package');

module.exports = {
    components: 'src/components/**/[A-Z]*.js',
    defaultExample: true,
    moduleAliases: {
        'rsg-example': path.resolve(__dirname, 'src'),
    },
    require: [
        path.join(__dirname, './dist/output.css')
    ],
    ribbon: {
        url: 'https://github.com/styleguidist/react-styleguidist',
    },
    version,
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: { presets: ['@babel/env', '@babel/preset-react'] },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
    },
};
