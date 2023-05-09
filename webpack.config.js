
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'assets'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                    },
                },
            },
            {
                test: /\.(js|jsx)$/i,
                exclude: /Alert/,
            },
        ],
    }
};

