// Generic Class
var GenericContainer = /** @class */ (function () {
    function GenericContainer(value) {
        this.value = value;
    }
    GenericContainer.prototype.getValue = function () {
        return this.value;
    };
    return GenericContainer;
}());
var numberContainer = new GenericContainer(10);
var stringContainer = new GenericContainer("World");
