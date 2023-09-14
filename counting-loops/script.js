//for loops
for (let i=1; i <= 10; i++) {
    console.log(i);
}
for (let i=10; i >= 1; i--) {
    console.log(i);
}
//while loops
let count = 1;
 while (count <= 10) {
    console.log(count);
    count++;
}
count = 10;
 while (count >= 1) {
    console.log(count);
    count--;
}
//do while loops
count = 1;
do {
    console.log(count);
    count++;
} while (count <= 10);
count = 10;
do {
    console.log(count);
    count--;
} while (count >= 1);
//for...of loops
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (const num of numbers) {
    console.log(num)
}