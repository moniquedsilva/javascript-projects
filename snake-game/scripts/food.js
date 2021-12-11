import { expandSnake, onSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
let newSegments
const expansion_rate = 1

export function update() {
  if (onSnake(food)) {
    expandSnake(expansion_rate)
    food = { x: 20, y: 10 }
  }
}

export function draw(gameBoard) {
  const fruitElement = document.createElement('div')
  fruitElement.style.gridRowStart = food.y
  fruitElement.style.gridColumnStart = food.x
  fruitElement.classList.add('fruit')
  gameBoard.appendChild(fruitElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}
