var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right"; // Automatically gets 4
})(Direction || (Direction = {}));
var Color;
(function (Color) {
    Color["Red"] = "FF0000";
    Color["Green"] = "00FF00";
    Color["Blue"] = "0000FF";
})(Color || (Color = {}));
// Usage:
var myDirection = Direction.Up;
console.log(myDirection); // Output: 1
var myColor = Color.Green;
console.log(myColor); // Output: "00FF00"
// Reverse Mapping
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Sunday"] = 0] = "Sunday";
    Weekday[Weekday["Monday"] = 1] = "Monday";
    Weekday[Weekday["Tuesday"] = 2] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 3] = "Wednesday";
    Weekday[Weekday["Thursday"] = 4] = "Thursday";
    Weekday[Weekday["Friday"] = 5] = "Friday";
    Weekday[Weekday["Saturday"] = 6] = "Saturday";
})(Weekday || (Weekday = {}));
var dayName = Weekday[2]; // Accessing the name from the value
console.log("Day: ".concat(dayName)); // Output: Day: Tuesday
