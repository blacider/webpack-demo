const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    module: {
        unknownContextCritical: false,
        rules: [
            {
                test: /\.js$/,
                use: "imports-loader?define=>false&this=>window",
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }, {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.tpl$/,
                use: 'raw-loader'
            }]
    },
    plugins: [
        new VueLoaderPlugin(),
        // new webpack.HashedModuleIdsPlugin(), //包id不再使用计数器，防止顺序变了hash变
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        alias: {
            vue: 'common/lib/vue/index.js',
            ajax: 'common/util/ajax.js',
            oop: 'common/util/oop.js',
            Observable: 'common/util/Observable',
            format: 'common/util/Format.js',
            numberic: 'common/util/Numberic.js',
            xtpl: 'common/lib/xtpl/index.js',
            '\$': 'common/lib/jquery/index.js',
            jquery: 'common/lib/jquery/index.js',
            grid: 'common/widget/Grid.js',
            gridStore: 'common/widget/Grid/Store.js',
            msgBox: 'common/widget/MessageBox.js',
            dialog: 'common/widget/Window.js',
            notify: 'common/widget/Notifier/index.js',
            tree: 'common/widget/Tree/index.js',
            loadMask: 'common/widget/LoadMask.js',
            tabs: 'home/mod-plugins/jquery/tabs/index.js',
            fixcheckbox: 'home/mod-plugins/jquery/fixcheckbox/index.js',
            fixselect: 'home/mod-plugins/jquery/fixselect/index.js',
            fixtreeselect: 'home/mod-plugins/jquery/fixtreeselect/index.js',
            fixcombogrid: 'home/mod-plugins/jquery/fixcombogrid/index.js',
            fixaction: 'home/mod-plugins/jquery/fixaction/index.js',
            fixscrollbar: 'home/mod-plugins/jquery/fixscrollbar/index.js',
            fixtrigger: 'home/mod-plugins/jquery/fixtrigger/index.js',
            vtype: 'home/mod-plugins/jquery/vtype/index.js',
            vtip: 'home/mod-plugins/jquery/vtip/index.js',
            vapi: "home/mod-api"
        }
    }
};
