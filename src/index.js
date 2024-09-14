import "./style.css"
import dropDownMenu from "@c8in4/drop-down-npm"
import Img1 from "./images/01.jpg"
import Img2 from "./images/02.jpg"
import Img3 from "./images/03.jpg"
import Img4 from "./images/04.jpg"
import Img5 from "./images/05.jpg"

// console.log("hello from JS")

dropDownMenu("menu")

const slidesContainer = document.querySelector(".slides-container")
const slideCircles = document.querySelector(".circles-container")

const images = [Img1, Img2, Img3, Img4, Img5]

let currentSlidePosition = 0
const lastSlidePosition = images.length - 1
const slideDelay = 5000

const previousImageButton = document.querySelector(".previous-image")
previousImageButton.addEventListener("click", previousImage)

const nextImageButton = document.querySelector(".next-image")
nextImageButton.addEventListener("click", nextImage)

renderCircles()

images.forEach((image, index) => {
  const imgElement = document.createElement("img")
  imgElement.src = image
  imgElement.alt = `Step ${index + 1}`
  slidesContainer.append(imgElement)
})

let imageAdvancer = setInterval(nextImage, slideDelay)
function resetImageAdvander() {
  clearInterval(imageAdvancer)
  imageAdvancer = setInterval(nextImage, slideDelay)
}

function nextImage() {
  currentSlidePosition++
  if (currentSlidePosition > lastSlidePosition) currentSlidePosition = 0
  moveToCurrentImage()
}

function previousImage() {
  currentSlidePosition--
  if (currentSlidePosition < 0) currentSlidePosition = lastSlidePosition
  moveToCurrentImage()
}

function moveToCurrentImage() {
  slidesContainer.style.left = `-${currentSlidePosition}00%`
  renderCircles()
  resetImageAdvander()
}

function renderCircles() {
  slideCircles.innerHTML = ""
  for (let i = 0; i < images.length; i++) {
    const circle = document.createElement("button")
    if (i == currentSlidePosition) {
      circle.classList.add("active")
    } else {
      circle.classList.remove("active")
    }
    slideCircles.append(circle)
  }
  slideCircles.childNodes.forEach((circle, index) => {
    circle.addEventListener("click", () => {
      currentSlidePosition = index
      moveToCurrentImage()
    })
  })
}
