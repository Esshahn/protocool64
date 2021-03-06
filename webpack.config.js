const path = require ('path');


module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/env']
            }
        }]
    }
}