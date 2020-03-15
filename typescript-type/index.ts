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
let clothSize: 'small' | 'medium' | 'large' = 'medium' // enum型と似ている宣言ができ、この3つしか入れれない。

const cloth: {
  color: string
  // clothSize.small とはできない 
  size: 'small' | 'medium' | 'large' // このようにしておけば後からこの3つのどれかに変更できる。
} = {
  color: 'white',
  size: clothSize
}
cloth.size = 'medium'
