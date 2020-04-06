let hasValue: boolean = true;
let count: number = 0;
let float: number = 3.123;
let negative: number = 3.123;
let single: string = 'hello';
let double: string = "helloo"
let back: string = "`hello`"

let hello = 2;

const person: {
  name: string,
  age: number,
  live: boolean,
  nnnnnme: {
    first: string,
    last: number
  }
} = {
  name: 'string',
  age: 1324,
  live: true,
  nnnnnme: {
    first: 'string',
    last: 86754
  }
}

// 配列の型
//文字列が入ったものと限定する: string[]
const fruites: string[] = ['Apple', 'Banana', 'Grape'];
const fruit = fruites[0];

// タプル型　配列の中身の型を限定する、とても厳しい指定となる
const book: [string, number, boolean] = ['business', 400, false]
book.push(21) // 後から追加されるのものに関してはエラーにならない
// book[0].push(21) このようにタプルでしている箇所に違う型をいれようとするとエラーになる。

// Enam型 自分で型を作ることができる
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

// = を省略すると0から数字が入る
// 任意の数字を入れると、それ以降は + 1された状態になる
enum CoffeeSizeEX {
  SHORT,
  TALL = 90,
  GRANDE,
  VENTI = 4,
  MOSTBIG,
}
const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

// coffee.size = true だめ
// coffee.size = 'SHORT'　だめ
coffee.size = CoffeeSize.SHORT //この書き方しか受け付けない。


const coffeeEX = {
  hot: true,
  size: CoffeeSizeEX.TALL
}
coffeeEX.size = CoffeeSizeEX.SHORT //この書き方しか受け付けない。

//anyタイプ
let anything: any = true
anything = 243,
  anything = {}
anything = 'hello'

let banana = 'bananan'
banana = anything; // any型はなんでも入る jsをtsに移行するときにはanyを使っていくが、最終的にはanyは使わないほうがいい。カオスになる。

//ユニオンタイプ orのように型を限定できる
let unionType: number | string = 'asdfjalsfjalsjflj';
console.log(unionType.toUpperCase());

//配列のユニオンタイプ 宣言した型は順不同なことがわかる
let unionTypes: (number | string | boolean)[] = [true, 'hellp', 2343]

//リテラル型 : 型注釈にしたものしか入れることができない。 完全に決まったものしかダメ
const hugaga: 'hello' = 'hello'
const turururu: true = true
// わざわざリテラル型採用時に型注釈を使わなくても、consotと宣言すると自動的にリテラル型となる。
const apple = 'apple'; // const apple:'apple' = 'apple'と同じ
const bananana: 'bananana' = 'bananana'

// typeエイリアス(別名)
type ClothSize = 'small' | 'medium' | 'large'; // リテラル型注釈を変数のようにして扱うことが出来る
let clothSize: ClothSize = 'large' // enum型と似ている宣言ができ、この3つしか入れれない。

const cloth: {
  color: string,
  size: ClothSize,
} = {
  color: 'white',
  size: clothSize
}
cloth.size = 'medium'

console.log(cloth.size)

// 関数の型 引数パラメータは型推論できない、型を書かないとanyになってしまうので注意、returnは推論してくれる
// 関数の方は引数、returnすべて型を宣言したほうが良い。ドキュメントにもなるのであいまいを避けれる。
function add(num1: number, num2: number): number {
  return num1 + num2 //reutrn の型推論は正しく動く
}

// 何も返さない
function sayHello(): void {
  console.log('hello');
  return;
};

// : voidはreturn文があっても無くても使える。

// typescriptは基本的にreturn でundefindeは返す事を認めていない。voidかanyを返さないといけない。
// function sayHello():undefined{
//   console.log('hello');
//   return; // return;とした場合はundefinedを返すことが出来る。
// };

console.log(sayHello());

let tmp: undefined;
// typescriptはundefinedは返すことを許していない。
// 基本的にはundefinedはつかなわない。
// どうしてもundifinedを返したい！という場合はfunction hoge():undifined{}としてもいいけど、ちょっとそもそも仕組みを考えたほうが良い。

let testTypleUndifined: undefined;
let testTypeNull: null = undefined; // undifined型もnull型も、お互いに入ることが出来る。

//　関数文の型注釈
const anotherAdd: (num1: number, num2: number) => number = add;
anotherAdd(43, 4)

function collbackFunction(num: number): number {
  return num
}
// コールバック関数のts    第一引数はnumber , 第２引数はnumberを引数にもってnumberをreturnするコールバック関数
function doubleAndHandle(num: number, cd: (num: number) => number): void {
  const doubleNum = cd(num * 3);
  console.log(doubleNum)
}

//コールバック関数の戻り地をvoidにしてしまうと、コールバック関数を使うことができなくなってしまう(使用時の宣言を無視する)
// function doubleAndHandle(num:number , cd:(num:number) => void):void{
//   const doubleNum = cd(num * 3);
//   console.log(doubleNum)
// }

doubleAndHandle(21, doubleNum => {
  return doubleNum
})

// アロー関数を使うと色々としょ略できる
let doubleNumber: (nummm: number) => number = (nummm: number) => nummm * 2;

let unkowninput: unknown;
let anyinput: any;

unkowninput = 320;
unkowninput = '23435'

// unkown型は変数に入れることができない
let tetsstsxt: string = unkowninput;
let anyinputs: number = unkowninput;

//unkowninputがstringの時だけ代入してねというように、ifで保証してあげれば使える。
if (typeof unkowninput === 'string') {
  tetsstsxt = unkowninput;
}
