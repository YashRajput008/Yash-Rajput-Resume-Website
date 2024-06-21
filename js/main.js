document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");
  let currentIndex = 0;

  const updateSlider = () => {
    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slides.length - 1;
    }
    updateSlider();
  });

  updateSlider();
});
