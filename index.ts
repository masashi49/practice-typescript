/* npm install -g typescrpt　でtscコマンドが使えるようになる 
*  tsc index.tsと打てばindex.jsが出来上がる
*  tsはドキュメントとしても役立つ。
*/
import axios from 'axios' // cmd　＋クリックで開く


axios.get('http://www.google.com', {
  headers:324
});

let hello: string = 'hello'
console.log(hello)

function add(a: string , b:number) : number{
  return a + b //aをstringにしたらエラーになった！
}

console.log(add(10,100))