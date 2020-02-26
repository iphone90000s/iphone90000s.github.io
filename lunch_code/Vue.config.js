// module.exports = {
//     publicPath: process.env.NODE_ENV === 'production' ?
//         '/production-sub-path/' : './'
// }

const path = require('path');
const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin');
const {
    styles
} = require('@ckeditor/ckeditor5-dev-utils');

module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ?
    //     '/website/' : '/website/',
    publicPath: process.env.NODE_ENV === 'production' ?
        '/' : '/',

    devServer: {
        port: 8081,

        host: "localhost",

        https: false,

        // 自动启动浏览器

        open: false,
        proxy: {
            "/connect": {
                target: "http://localhost/connect", //设置调用的接口域名和端口
                changeOrigin: true, //是否跨域
                ws: true,
                pathRewrite: {
                    "^/connect": ""
                }
            }
        }
    },
    transpileDependencies: [
        /ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/,
    ],
    configureWebpack: {
        plugins: [
            // CKEditor needs its own plugin to be built using webpack.
            new CKEditorWebpackPlugin({
                // The UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
                language: 'en'
            })
        ]
    },
    chainWebpack: config => {
        // (1.) To handle editor icons, get the default rule for *.svg files first:
        const svgRule = config.module.rule('svg');

        // Then you can either:
        //
        // * clear all loaders for existing 'svg' rule:
        //
        //		svgRule.uses.clear();
        //
        // * or exclude ckeditor directory from node_modules:
        svgRule.exclude.add(path.join(__dirname, 'node_modules', '@ckeditor'));

        // Add an entry for *.svg files belonging to CKEditor. You can either:
        //
        // * modify the existing 'svg' rule:
        //
        //		svgRule.use( 'raw-loader' ).loader( 'raw-loader' );
        //
        // * or add a new one:
        config.module
            .rule('cke-svg')
            .test(/ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/)
            .use('raw-loader')
            .loader('raw-loader');

        // (2.) Transpile the .css files imported by the editor using PostCSS.
        // Make sure only the CSS belonging to ckeditor5-* packages is processed this way.
        config.module
            .rule('cke-css')
            .test(/ckeditor5-[^/\\]+[/\\].+\.css$/)
            .use('postcss-loader')
            .loader('postcss-loader')
            .tap(() => {
                return styles.getPostCssConfig({
                    themeImporter: {
                        themePath: require.resolve('@ckeditor/ckeditor5-theme-lark'),
                    },
                    minify: true
                });
            });
    }

}