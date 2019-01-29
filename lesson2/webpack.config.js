const path = require('path');

module.exports = {
    entry: './src/user.js',
    output: {
        path: path.resolve('dist'),
        filename: 'main.js'
        },
    mode: 'development',
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            }  
        ]
    }
}
