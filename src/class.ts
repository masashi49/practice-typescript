export { };

class Person {
    name: string; //nameフィールド
    constructor(initName: string) { //値を受け取れる
        this.name = initName;
    }

    greeting() {
        console.log(`${this.name}`)
    }
}
const jonn = new Person('ジョン');
jonn.greeting();

const onotherGreeting = {
    name: 'wao',
    test: jonn.greeting,
}
onotherGreeting.test();
