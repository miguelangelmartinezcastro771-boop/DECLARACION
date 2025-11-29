let currentCarouselIndex = 0

function changeCarousel(direction) {
  const items = document.querySelectorAll(".carousel-item")
  items[currentCarouselIndex].classList.remove("active")

  currentCarouselIndex += direction
  if (currentCarouselIndex >= items.length) {
    currentCarouselIndex = 0
  } else if (currentCarouselIndex < 0) {
    currentCarouselIndex = items.length - 1
  }

  items[currentCarouselIndex].classList.add("active")
}
function showQuestion() {
  document.getElementById("confessModal").classList.add("hidden")
  document.getElementById("proposalModal").classList.remove("hidden")
}
function closeConfess() {
  document.getElementById("confessModal").classList.add("hidden")
  document.getElementById("proposalModal").classList.remove("hidden")
}
function answerYes() {
  document.getElementById("proposalModal").classList.add("hidden")
  document.getElementById("successModal").classList.remove("hidden")
}
function answerNo() {
  const noBtn = document.getElementById("noBtn")
  const randomX = (Math.random() - 0.5) * 200
  const randomY = (Math.random() - 0.5) * 200
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`
}
function closeSuccess() {
  document.getElementById("successModal").classList.add("hidden")
}
