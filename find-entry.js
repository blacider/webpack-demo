var path = require("path");
var fs = require("fs");

var set;
var base = [
    'mod-index/index',
    'mod-vm/index',
    'mod-vnet/index',
    'mod-entity/entity',
    'mod-setting/main/index'
];

function recursiveReadFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    if (isFile(filePath)) {
        return check(filePath);
    }

    var files = fs.readdirSync(filePath);

    files.forEach(function (val) {
        var temp = path.join(filePath, val);

        recursiveReadFile(temp);
    })
}

function check(filePath) {
    var data = readFile(filePath);
    var exc = /\?m=[\/]?(mod-.*?)[&'"#]/gi;
    var tmp;

    tmp = exc.exec(data)

    if (tmp) {
        addPath(tmp[1]);
    }

}

function addPath(tmp) {
    set.add(tmp);
}
function isFile(path) {
    return fs.statSync(path).isFile();
}

function readFile(path) {
    return fs.readFileSync(path, "utf-8");
}

function mkdir(path) {
    if (fs.existsSync(path)) return;

    fs.mkdirSync(path, 0755);
}

module.exports = function (directory = 'src/home') {
    set = new Set();

    base.forEach(item => addPath(item));


    recursiveReadFile(directory);

    let requireCode = [...set].map(tmp => {
        let target = tmp.replace(/\//g, '-_-');

        return `if (param.m === '${tmp}') {
            import(/* webpackChunkName: "${target}" */ 'home/${tmp}').then(() => {
                require('home/mod-launch/fire');
            });
        }`
    }).join(' ');

    fs.writeFileSync(
        `./src/entry.js`,
        `
        window.DEBUG = 1;
        require('i18n/core');
        require('common/css/animate.css');
        require('common/css/normalize.css');
        require('common/css/common.css');
        require('common/css/main.css');
        require('common/css/icon.css');
        require('common/css/grid.css');

        let tmp = '';

        require.include(\`home/mod-common/\${tmp}.js\`); //业务公共部分代码，抽出，放到外层打包

        require.include('home/mod-launch/fire'); //防止各个入口重复打包
        var param = require("common/lang/Object").fromQueryString(location.search.substring(1));

        param.m = param.m || 'mod-index/index';
        param.m = param.m[0] === '/' ? param.m.substring(1) : param.m
        ${requireCode}
        `
    );

    return Array.from(set);
};

module.exports();