
        window.DEBUG = 1;
        require('i18n/core');
        require('common/css/animate.css');
        require('common/css/normalize.css');
        require('common/css/common.css');
        require('common/css/main.css');
        require('common/css/icon.css');
        require('common/css/grid.css');

        let tmp = '';

        require.include(`home/mod-common/${tmp}.js`); //业务公共部分代码，抽出，放到外层打包

        require.include('home/mod-launch/fire'); //防止各个入口重复打包
        var param = require("common/lang/Object").fromQueryString(location.search.substring(1));

        param.m = param.m || 'mod-index/index';
        param.m = param.m[0] === '/' ? param.m.substring(1) : param.m
        if (param.m === 'mod-index/index') {
            import(/* webpackChunkName: "mod-index-_-index" */ 'home/mod-index/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vm/index') {
            import(/* webpackChunkName: "mod-vm-_-index" */ 'home/mod-vm/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vnet/index') {
            import(/* webpackChunkName: "mod-vnet-_-index" */ 'home/mod-vnet/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-entity/entity') {
            import(/* webpackChunkName: "mod-entity-_-entity" */ 'home/mod-entity/entity').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-setting/main/index') {
            import(/* webpackChunkName: "mod-setting-_-main-_-index" */ 'home/mod-setting/main/index').then(() => {
                require('home/mod-launch/fire');
            });
        }
        