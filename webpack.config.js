var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //依赖 uglify-js 仓库
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});


module.exports = {
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },{
                test: /\.scss$/,
                exclude: /node_modules/,
                use:ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: [
                        {
                            loader:"css-loader",
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () { // post css plugins, 可以把他放在 postcss.config.js 中
                                    return [
                                        require('precss'),
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        },
                        {
                            loader:"sass-loader"
                        }
                    ]
                })
            },{
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }, {
                test: /\.(png|jpe?g|gif)(\?\S*)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]',
                        outputPath: 'images/'
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    }
};

if (process.env.NODE_ENV === 'production') {
    module.exports.entry = [
        './app/index.js'
    ];
    module.exports.devtool = 'source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new UglifyJSPlugin(),
        new ExtractTextPlugin({
            filename: 'css/style.css',
            allChunks: true
        }),
        HTMLWebpackPluginConfig
    ])
} else {
    module.exports.entry = [
        'react-hot-loader/patch', //react 局部刷新功能
        './app/index.js'
    ]
    module.exports.devServer = {
        port:3002,
        host:'localhost',
        hot:true,
        inline:true,
        open:true,
        stats: { colors: true },
        historyApiFallback:true
    }
    module.exports.devtool = 'cheap-module-eval-source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        HTMLWebpackPluginConfig,
        new FriendlyErrorsWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),
        new ExtractTextPlugin({
            filename: 'css/style.css',
            allChunks: true,
            //disable: process.env.NODE_ENV !== 'production'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ])
}

