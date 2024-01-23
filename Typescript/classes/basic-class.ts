class CPerson {
    // Properties
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let awais: CPerson = new CPerson("Muhammad Awais", 29);
console.log(awais);

