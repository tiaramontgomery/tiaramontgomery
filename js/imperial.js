const buttons = document.querySelectorAll(".project-button");
const contentSections = document.querySelectorAll(".content-section");

function activateButton(index) {
  buttons.forEach((button, i) => {
    if (i === index) {
      button.classList.add("active");
      button.classList.remove("inactive");
    } else {
      button.classList.remove("active");
      button.classList.add("inactive");
    }
  });

  // Show the corresponding content section and hide others
  contentSections.forEach((section, i) => {
    if (i === index) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

// Automatically activate the first button and content section on load
window.onload = function () {
  activateButton(0);
};
