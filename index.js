"use strict";
exports.__esModule = true;
/* npm install -g typescrpt　でtscコマンドが使えるようになる
*  tsc index.tsと打てばindex.jsが出来上がる
*/
var axios_1 = require("axios"); // cmd　＋クリックで開く
axios_1["default"].get('http://www.google.com', {
    headers: 324
});
var hello = 'hello';
console.log(hello);
function add(a, b) {
    return a + b;
}
console.log(add(10, 100));
