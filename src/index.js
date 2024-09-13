import dropDownMenu from "@c8in4/drop-down-npm"
import "./style.css"

console.log("hello from JS")

dropDownMenu('menu')

const slidesContainer = document.querySelector('.slides-container')
const previousImageButton = document.querySelector('.previous-image')
const nextImageButton = document.querySelector('.next-image')

let slidePosition = 0

previousImageButton.addEventListener('click', () => {
  console.log('previous image')
  slidePosition -= 100
  if (slidePosition < 0) slidePosition = 400
  slidesContainer.style.left = `-${slidePosition}%`
})

nextImageButton.addEventListener('click', () => {
  console.log('previous image')
  slidePosition += 100
  if (slidePosition > 400) slidePosition = 0
  slidesContainer.style.left = `-${slidePosition}%`
})