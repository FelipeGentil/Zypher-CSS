const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules:[{
            test: /\.(sa|c|sc|)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        },{
            test: /\.css$/i,
            use:[
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[ext]'

                }
            }
    }

 ]
},
devServer: {
    static: {
        directory: path.join(__dirname, 'public'),
    },
},
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        })
        , new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]

}

