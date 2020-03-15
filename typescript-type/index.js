var hasValue = true;
var count = 0;
var float = 3.123;
var negative = 3.123;
var single = 'hello';
var double = "helloo";
var back = "`hello`";
var hello = 2;
var person = {
    name: 'string',
    age: 1324,
    live: true,
    nnnnnme: {
        first: 'string',
        last: 86754
    }
};
// 配列の型
//文字列が入ったものと限定する: string[]
var fruites = ['Apple', 'Banana', 'Grape'];
var fruit = fruites[0];
// タプル型　配列の中身の型を限定する、とても厳しい指定となる
var book = ['business', 400, false];
book.push(21); // 後から追加されるのものに関してはエラーにならない
// book[0].push(21) このようにタプルでしている箇所に違う型をいれようとするとエラーになる。
// Enam型 自分で型を作ることができる
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
// = を省略すると0から数字が入る
// 任意の数字を入れると、それ以降は + 1された状態になる
var CoffeeSizeEX;
(function (CoffeeSizeEX) {
    CoffeeSizeEX[CoffeeSizeEX["SHORT"] = 0] = "SHORT";
    CoffeeSizeEX[CoffeeSizeEX["TALL"] = 90] = "TALL";
    CoffeeSizeEX[CoffeeSizeEX["GRANDE"] = 91] = "GRANDE";
    CoffeeSizeEX[CoffeeSizeEX["VENTI"] = 4] = "VENTI";
    CoffeeSizeEX[CoffeeSizeEX["MOSTBIG"] = 5] = "MOSTBIG";
})(CoffeeSizeEX || (CoffeeSizeEX = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
// coffee.size = true だめ
// coffee.size = 'SHORT'　だめ
coffee.size = CoffeeSize.SHORT; //この書き方しか受け付けない。
var coffeeEX = {
    hot: true,
    size: CoffeeSizeEX.TALL
};
coffeeEX.size = CoffeeSizeEX.SHORT; //この書き方しか受け付けない。
//anyタイプ
var anything = true;
anything = 243,
    anything = {};
anything = 'hello';
var banana = 'bananan';
banana = anything; // any型はなんでも入る jsをtsに移行するときにはanyを使っていくが、最終的にはanyは使わないほうがいい。カオスになる。
//ユニオンタイプ orのように型を限定できる
var unionType = 'asdfjalsfjalsjflj';
console.log(unionType.toUpperCase());
//配列のユニオンタイプ 宣言した型は順不同なことがわかる
var unionTypes = [true, 'hellp', 2343];
