var images = document.querySelectorAll(".section-main-logo .section-main-logo__img img");
var i = 0;

  function autoSlide() {
  images[i].className = "";
  i++;

  if(i >= images.length) {
    i = 0;
  }

  images[i].className = "showed";
}

setInterval(autoSlide, 3000);