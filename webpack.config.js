const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/client/index.html',
    filename: './index.html'
});

module.exports = {
    entry: './src/client/index.js',
    output: {
        filename: 'bundle.js',
    },
    plugins: [htmlPlugin],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};