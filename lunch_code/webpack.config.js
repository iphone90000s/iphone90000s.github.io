const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: `./script/main.js`,
    // watch: true,
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [{
                test: /\.(html|htm)$/i,
                loader: 'html-withimg-loader'
            },
            {
                test: /\.(gif|png|jpg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 5 * 2,
                        outputPath: "./img/",
                        esModule: false,
                        name: "[name].[ext]"
                    }
                }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.js$/,
                loader: 'babel-loader'
            }, {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    "css-loader",
                    "sass-loader"
                ]
            }, {
                test: /\.html$/,
                loader: 'html-loader',
            }
        ]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/style.css',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: `index.html`,
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: "/script",
        filename: "./js/app.js"
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname),
        // historyApiFallback: true,
        // inline: true
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                terserOptions: {
                    output: {
                        comments: false,
                    }
                }
            })
        ]
    }
};