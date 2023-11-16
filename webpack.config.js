const path = require('path');
const htmlPlugin=require('html-webpack-plugin')

module.exports = {
    entry: {
        index:'./src/index.js',
        print:'./src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true
    },
    devtool:'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',

            },
            {

                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                
            },
        ],
        
    },
    plugins:[
        
            new htmlPlugin({
                title:'document'
            })
    ]
}