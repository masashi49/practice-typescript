const ignore: string = 'hello';
console.log(ignore.toUpperCase())



const hogoggogo = "test" // グローバル変数はnoUnusedLocalsの設定の影響を受けない。
// noImplicitAny 暗黙的なanyを禁止する
function echo(message: string | null) { //引数にはかならず型を指定しよう

    const hello: string = "hello" //"noUnusedLocals": trueの時、使っていないものはダメになる。 falseだと通る。

    //function echo(message) { //パラメータは型が定まらないのでエラーがでる
    return message
}

let implicitAny; //変数にいれる場合は使える、なぜなら、そのあとに代入するもので暗黙的に型を決めるから。
implicitAny = 'imasdf'
implicitAny


//strictNullChecksをみていく
// "strictNullChecks": falseの場合、nullとundefinedを許容する
// let nulableMessage: string = null;
// let undefinedableMessage: number = undefined;
// let onlyNull: null = undefined;
// let onlyundefined: undefined = null;

//strictNullCheckがtrueの場合、nullとundefinedはダメ
let subulableMessage: string | null = echo("hi"); //
let subUndefinedableMessage: number | undefined = undefined; //
let subOnlyNull: null = null;
let subOnlyundefined: undefined = undefined;

//subulableMessage.toUpperCase() //nullの可能性があるので.toUpperCaseが使えない。

if (subulableMessage) {  //ifに入れた場合、nullだとtrueにならないので必ずstringのためtoUpperCaseが使える
    subulableMessage.toUpperCase();
}
