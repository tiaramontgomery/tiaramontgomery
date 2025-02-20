function changeImage() {
  const img = document.querySelector(".persona-mobile");
  const img2 = document.querySelector(".interviews-mobile");
  if (window.innerWidth <= 768) {
    img.src = "photos/Persona-mobile.png";
    img2.src = "photos/interviews-mobile.png";
  } else {
    img.src = "photos/persona.png";
    img2.src = "photos/interviews.png";
  }
}

window.onload = changeImage;

window.onresize = changeImage;
