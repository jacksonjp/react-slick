var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer-core');

module.exports = {
    devtool: '#inline-source-map',
    entry: {
        'docs.js': [
            './docs/index.jsx'
            // 'webpack/hot/only-dev-server',
            // 'webpack-dev-server/client?http://localhost:8000'
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name]'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            { test: /\.jsx$/, loader: require.resolve('babel-loader') },
            { test: /\.js$/, loader: require.resolve('babel-loader'), exclude: /node_modules/ },
            {
                test: /\.scss$/,
                use: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [autoprefixer({ browsers: ['last 2 version'] })]
                        }
                    },
                    {
                        loader: require.resolve('sass-loader'),
                        options: {
                            outputStyle: 'expanded&' + 'includePaths[]=' + path.resolve(__dirname, './node_modules')
                        }
                    }
                ]
            },
            {
                test: /\.md$/,
                use: [require.resolve('html-loader'), require.resolve('markdown-loader')]
            }
        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.IgnorePlugin(/vertx/)
    ]
};
