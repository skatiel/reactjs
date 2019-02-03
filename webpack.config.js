const path = require('path');

module.exports = {
    entry: './src/App.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'main.js'
        },
    mode: 'development',
    module: {
        rules: [
            {
            test: /\.js?$/,
            exclude: /node_modules/,
            use: "babel-loader"
            },
            {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
            } 
        ]
    },
    devServer: {
        contentBase: path.resolve (__dirname, 'dist')
    }
}
