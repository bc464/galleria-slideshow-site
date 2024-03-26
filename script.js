const boxContents = document.querySelectorAll(".box-content");
const slideshowPage = document.querySelector(".slideshow-page");
const module = document.querySelector("module");

boxContents.forEach((box) => {
  box.addEventListener("click", () => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log();
      });

    if (box.classList[3] == "box1") {
      window.location.href = "starry-night.html";
    }
  });
});

const viewImage = document.querySelector(".viewImageLink");
const moduleContainer = document.querySelector(".module-container");

const closeBtn = document.querySelector(".btn-close");

viewImage.addEventListener("click", () => {
  slideshowPage.style.opacity = "0.1";
  moduleContainer.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  moduleContainer.style.display = "none";
  slideshowPage.style.opacity = "1";
});
