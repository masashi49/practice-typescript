const ignore: string = 'hello';
console.log(ignore.toUpperCase())



// noImplicitAny 暗黙的なanyを禁止する
function echo(message: string) { //引数にはかならず型を指定しよう
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
let subulableMessage: string | null = null; //
let subUndefinedableMessage: number | undefined = undefined; //
let subOnlyNull: null = null;
let subOnlyundefined: undefined = undefined;
