export { };

class Person {
    name: string; //nameフィールド
    constructor(initName: string) { //値を受け取れる
        this.name = initName;
    }
}

const jonn = new Person('ジョン');
