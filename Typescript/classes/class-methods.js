var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old!");
    };
    return User;
}());
// Create an instance of the User class
var myName = new User("Muhammad Awais", 30);
// Access properties and methods
var greeting = myName.greet();
console.log(greeting);
