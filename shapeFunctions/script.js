// Area of Circle
function getAreaOfCircle(radius) {
    return Math.PI * radius**2
}
const x = getAreaOfCircle(5)
console.log(x)



//Function Expression
// function getAreaOfCircle () {}
//Function Declaration
// const getAreaOfCircle = function() {}
//Arrow Function
// const getAreaOfCircle = () => {}


// Circumference of Circle
const getCircumferenceofCircle = function(radius) {
    return 2 * Math.PI * radius
}
const y = getCircumferenceofCircle(5)
console.log(y)

//Area of Square
const getAreaOfSquare = (side) => {
    return side * side
}
console.log(getAreaOfSquare(5))

//Area of Triangle
const getAreaOfTriangle = (base, height) => (1 / 2 * base) * height
console.log(getAreaOfTriangle(10, 5))
