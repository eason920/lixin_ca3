const fs = require('fs');
const minify = require('html-minifier').minify;

let script = "<?php include('head.php'); ?>"

console.log('\x1b[33m%s\x1b[0m','圖片壓縮完成 (vite.config.js 可調整壓縮設定)');

fs.readFile(__dirname + '/dist/index.html', 'utf8', function (err, html) {

    let result = minify(html, {
        removeAttributeQuotes: true,
        collapseWhitespace: true
    });

    result = result.replace("</head>", `${script}</head>`)
    fs.writeFileSync(__dirname + '/dist/index.html', result);
    console.log('\x1b[33m%s\x1b[0m','head.php 已寫入 index.html');
    console.log('');
    console.log('\x1b[36m%s\x1b[0m','編譯完成');
})