var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
console.log(vegetables)

fruit.shift()
console.log(fruit)

var orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)

fruit.push("1")
console.log(fruit)

console.log(vegetables.length)

vegetables.push("3")
console.log(vegetables)

var fruit = ["apple", "orange", "watermelon", "1"]
var vegetables = ["carrot", "tomato", "pepper", "3"]
var food = fruit.concat(vegetables)
console.log(food)

food.splice(4, 2)
console.log(food)

food.reverse()
console.log(food)

var joinedFood = food.join()
console.log(joinedFood)