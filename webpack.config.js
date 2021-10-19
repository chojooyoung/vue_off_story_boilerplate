const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    resolve: {
        extensions: ['.vue', '.js'],
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
    },
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // axios 패키지 사용시 babel-loader로 변환해야 함 이 경우 아래와 같이 작성
                // node_modules 내부에 axios 패키지를 제외하고 나머지 패키지 선택
                // exclude: /node_modules\/(?!axios|다른패키지|다른패키지)/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.s?css$/,
                use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
        }),
        new CopyPlugin({
            patterns: [{ from: 'static', to: 'dist' }],
        }),
    ],
    devServer: {
        historyApiFallback: true
    }
}
