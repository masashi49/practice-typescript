"use strict";
exports.__esModule = true;
/*
  npm install -g typescrpt　でtscコマンドが使えるようになる
  tsc index.tsと打てばindex.jsが出来上がる
  tsはドキュメントとしても役立つ。
  tsを変換したjsは、import exportの解決ができていないためエラーが起きる。
  例) ReferenceError: exports is not defined
  webpackなどを使ってうまく混ぜ合わせる必要がある。
*/
var axios_1 = require("axios"); // cmd　＋クリックで開く
axios_1["default"].get('http://www.google.com', {
    headers: 324
});
var hello = 'hello';
console.log(hello);
function add(a, b) {
    return a + b; //aをstringにしたらエラーになった！
}
console.log(add(10, 100));
