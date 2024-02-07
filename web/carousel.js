const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

nextBtn.addEventListener("click", showNextImage);
prevBtn.addEventListener("click", showPrevImage);

//document.getElementsByClassName return HTML collection so we are using "Array.from" method to get an iterable

const images = Array.from(document.getElementsByClassName("carousel__img"));
const totalImages = images.length;

let currentImageIndex = 0; //index of image that being display on screen

function addTransitionEffectToImages() {
  images.forEach((img) => {
    img.style.transition = "transform 0.8s ease";
  });
}

function showNextImage() {
  //if we are at last image reset the carousel
  if (currentImageIndex == totalImages - 1) {
    resetCarousel();
    return;
  }

  if (currentImageIndex === 0) addTransitionEffectToImages();
  //translate every image with (-100%) every time we go to next image
  images.forEach((img) => {
    img.style.transform = `translate(${(currentImageIndex + 1) * -100}%)`;
  });
  currentImageIndex++;
}

function resetCarousel() {
  images.forEach((img) => {
    //we are setting "none" so when every image gets back to position we don't want to show sliding effect
    img.style.transition = "none";
    img.style.transform = `translate(0)`; //every image back to original position
  });
  currentImageIndex = 0;
}