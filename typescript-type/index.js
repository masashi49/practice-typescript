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
//リテラル型 : 型注釈にしたものしか入れることができない。 完全に決まったものしかダメ
var hugaga = 'hello';
var turururu = true;
// わざわざリテラル型採用時に型注釈を使わなくても、consotと宣言すると自動的にリテラル型となる。
var apple = 'apple'; // const apple:'apple' = 'apple'と同じ
var bananana = 'bananana';
var clothSize = 'large'; // enum型と似ている宣言ができ、この3つしか入れれない。
var cloth = {
    color: 'white',
    size: clothSize
};
cloth.size = 'medium';
console.log(cloth.size);
// 関数の型 引数パラメータは型推論できない、型を書かないとanyになってしまうので注意、returnは推論してくれる
// 関数の方は引数、returnすべて型を宣言したほうが良い。ドキュメントにもなるのであいまいを避けれる。
function add(num1, num2) {
    return num1 + num2; //reutrn の型推論は正しく動く
}
// 何も返さない
function sayHello() {
    console.log('hello');
    return;
}
;
// : voidはreturn文があっても無くても使える。
// typescriptは基本的にreturn でundefindeは返す事を認めていない。voidかanyを返さないといけない。
// function sayHello():undefined{
//   console.log('hello');
//   return; // return;とした場合はundefinedを返すことが出来る。
// };
console.log(sayHello());
var tmp;
// typescriptはundefinedは返すことを許していない。
// 基本的にはundefinedはつかなわない。
// どうしてもundifinedを返したい！という場合はfunction hoge():undifined{}としてもいいけど、ちょっとそもそも仕組みを考えたほうが良い。
var testTypleUndifined;
var testTypeNull = undefined; // undifined型もnull型も、お互いに入ることが出来る。
//　関数文の型注釈
var anotherAdd = add;
anotherAdd(43, 4);
function collbackFunction(num) {
    return num;
}
// コールバック関数のts    第一引数はnumber , 第２引数はnumberを引数にもってnumberをreturnするコールバック関数
function doubleAndHandle(num, cd) {
    var doubleNum = cd(num * 3);
    console.log(doubleNum);
}
//コールバック関数の戻り地をvoidにしてしまうと、コールバック関数を使うことができなくなってしまう(使用時の宣言を無視する)
// function doubleAndHandle(num:number , cd:(num:number) => void):void{
//   const doubleNum = cd(num * 3);
//   console.log(doubleNum)
// }
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
// アロー関数を使うと色々としょ略できる
var doubleNumber = function (nummm) { return nummm * 2; };
