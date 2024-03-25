const boxContents = document.querySelectorAll(".box-content");
const slideshowPage = document.getElementsByClassName("slideshow-page");
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
