enum Direction {
    Up = 1, // Starts at 1
    Down, // Automatically gets 2
    Left, // Automatically gets 3
    Right // Automatically gets 4
}

enum Color {
    Red = "FF0000", // String value
    Green = "00FF00",
    Blue = "0000FF"
}

// Usage:
let myDirection: Direction = Direction.Up;
console.log(myDirection); // Output: 1

let myColor: Color = Color.Green;
console.log(myColor); // Output: "00FF00"

// Reverse Mapping

enum Weekday {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
  }
  
  let dayName: string = Weekday[2]; // Accessing the name from the value
  console.log(`Day: ${dayName}`); // Output: Day: Tuesday