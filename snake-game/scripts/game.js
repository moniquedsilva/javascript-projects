import {
  update as updateSnake,
  draw as drawSnake,
  snakeSpeed,
} from './snake.js'
import { update as updateFruit, draw as drawFruit } from './food.js'

let lastRenderTime = 0
const gameBoard = document.querySelector('.board')

function main(currentTime) {
  window.requestAnimationFrame(main)
  const lastRender = (currentTime - lastRenderTime) / 1000
  if (lastRender < 1 / snakeSpeed) return
  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFruit()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFruit(gameBoard)
}
