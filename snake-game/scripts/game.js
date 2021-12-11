import {
  update as updateSnake,
  draw as drawSnake,
  snakeSpeed,
} from './snake.js'

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
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
}
