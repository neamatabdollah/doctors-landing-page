// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear()

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for header
        behavior: "smooth",
      })
    }
  })
})

// Mobile navigation functionality
document.querySelector(".mobile-contact").addEventListener("click", () => {
  // You could implement a mobile menu here
  alert("Contact: (555) 123-4567")
})

// Example of how to add event listeners to appointment buttons
document.querySelectorAll(".appointment-buttons .btn").forEach((button) => {
  button.addEventListener("click", function () {
    if (this.classList.contains("btn-primary")) {
      window.open("https://example.com/book-appointment", "_blank")
    } else {
      window.location.href = "tel:5551234567"
    }
  })
})

// Map button functionality
document.querySelector(".location-section .btn").addEventListener("click", () => {
  window.open("https://maps.google.com/?q=123+Medical+Center+Drive,+San+Francisco,+CA+94123", "_blank")
})

// Reviews button functionality
document.querySelector(".reviews-section .btn").addEventListener("click", () => {
  window.open("https://google.com/maps/place/your-practice-id/reviews", "_blank")
})
