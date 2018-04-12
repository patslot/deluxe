var path = require("path"); 
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js',
        publicPath: '/public'
    },
    module: {
        rules: [

            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use:  ['css-loader', 'sass-loader']
                
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    watch: true
    
};