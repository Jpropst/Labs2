const Room = class {
  available = true;
  constructor(name, length, width, capacity = 15) {
    this.name = name;
    this.length = length;
    this.width = width;
    this.available = true;
    this.capacity = capacity;
  }
  getArea() {
    return this.length * this.width;
  }
  getPerimeter() {
    return (this.length + this.width) * 2;
  }
};

const room1 = new Room("Sun", 30, 20);
const room2 = new Room("Green", 15, 20, 18);
room2.available = false;
// room2.capacity = 18;

console.log("Room 1:");
console.log("Name:", room1.name);
console.log("Length:", room1.length);
console.log("Width:", room1.width);
console.log("Area:", room1.getArea());
console.log("Perimeter:", room1.getPerimeter());
console.log("Capacity:", room1.capacity);
console.log("Available:", room1.available);

console.log("\nRoom 2:");
console.log("Name:", room2.name);
console.log("Length:", room2.length);
console.log("Width:", room2.width);
console.log("Area:", room2.getArea());
console.log("Perimeter:", room2.getPerimeter());
console.log("Capacity", room2.capacity);
console.log("Available:", room2.available);
