document.addEventListener("DOMContentLoaded", function () {
  const boxContents = document.querySelectorAll(".box-content");

  const mainContainer = document.querySelector(".main-container");

  // displaying json data

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      jsonData = data;
    })
    .catch((error) => console.log("error fetching JSON:", error));

  function showBoxContent(index) {
    boxContents.forEach((box) => {
      box.addEventListener("click", () => {
        fetch("data.json")
          .then((response) => response.json())
          .then((data) => {
            let dataNumber = box.getAttribute("data-number");
            currentIndex = dataNumber;
            index = currentIndex;

            const { name, artist, year, description, source } = data[index];
            let newName = name.toLowerCase().replace(/\s+/g, "-");

            mainContainer.innerHTML = `<main id="slideshowContainerId" class="slideshow-page slideshow-container">

            <div id="overlay"></div>
            <div class="slideshow-main--content">
            <div class="main-content--left">
            <div class="content-left--mainImg">
            <img src="./assets/${newName}/hero-large.jpg"   alt="large hero image" />
            <div class="viewImageLink">
            <img src="./assets/shared/icon-view-image.svg"   alt="icon view image" />
            <a href="#" class="linkToImage">VIEW IMAGE</a>
            </div>
            </div>
            <div class="content-left--heading">
            <h2>${name}</h2>
            <p>${artist.name}</p>
            </div>
            <div class="content-left--artistImg">
            <img src="./assets/${newName}/artist.jpg" alt="artist img" />
            </div>
            </div>
            <div class="main-content--right">
            <div class="content-right--main">
            <h1>${year}</h1>
              <p>${description}</p>
            </div>
            <a href="${source}"
              >GO TO SOURCE</a
            >
          </div>
        </div>
        <div id="progressBar" class="progressBar-fill"></div>
        <div class="slideshow-bottom--links">
          <div class="bottom-links--name">
            <h3>${name}</h3>
            <p>${artist.name}</p>
          </div>
          <div class="bottom-links--arrows">

             <img
              src="./assets/shared/icon-back-button.svg"
              alt="icon back button"
              id="prevButton"
              class="button "
            />
            <img
              src="./assets/shared/icon-next-button.svg"
              alt="next-button icon"
              id="nextButton"
              class="button "
            />

          </div>
        </div>
         </section>
    </main>
    <div role="contentinfo" class="module-container">
      <button class="btn-close">CLOSE</button>
      <picture>
        <source
          srcset="./assets/${newName}/hero-large.jpg"
          media="(min-width: 900px)"
        />
        <source
          srcset="./assets/${newName}/hero-small.jpg"
          media="(min-width: 600px)"
        />
        <img src="./assets/${newName}/thumbnail.jpg" alt="thumnail image" />
      </picture>
    </div>

      `;
            window.scrollTo(0, 0);
            viewingImage();
            attachEventListeners();
            updateButtons();
            updateProgressBar();
          });
      });
    });
  }
  showBoxContent();

  function renderContent(index) {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        const { name, artist, year, description, source } = data[index];
        let newName = name.toLowerCase().replace(/\s+/g, "-");

        const slideshowContainer = document.querySelector(
          ".slideshow-container"
        );

        slideshowContainer.innerHTML = `
    <main id="slide-show" class="slideshow-page" >
      <div id="overlay"></div>
      <div class="slideshow-main--content">
          <div class="main-content--left">
            <div class="content-left--mainImg">
              <img
                src="./assets/${newName}/hero-large.jpg"
                alt="large hero image"
              />
              <div class="viewImageLink">
                <img
                  src="./assets/shared/icon-view-image.svg"
                  alt="icon view image"
                />
                <a href="#" class="linkToImage">VIEW IMAGE</a>
              </div>
            </div>
            <div class="content-left--heading">
              <h2>${name}</h2>
              <p>${artist.name}</p>
            </div>
            <div class="content-left--artistImg">
              <img src="./assets/${newName}/artist.jpg" alt="artist img" />
            </div>
          </div>
          <div class="main-content--right">
            <div class="content-right--main">
              <h1>${year}</h1>
              <p>${description}</p>
            </div>
            <a href="${source}"
              >GO TO SOURCE</a>
          </div>
        </div>
        <div id="progressBar" class="progressBar-fill"></div>
        <div class="slideshow-bottom--links">
          <div class="bottom-links--name">
            <h3>${name}</h3>
            <p>${artist.name}</p>
          </div>
          <div class="bottom-links--arrows">

             <img
              src="./assets/shared/icon-back-button.svg"
              alt="icon back button"
              id="prevButton"
              class="button "
            />
            <img
              src="./assets/shared/icon-next-button.svg"
              alt="next-button icon"
              id="nextButton"
              class="button "
            />

          </div>
        </div>
         </section>
    </main>
    <div role="contentinfo" class="module-container">
      <button class="btn-close">CLOSE</button>
      <picture>
        <source
          srcset="./assets/${newName}/hero-large.jpg"
          media="(min-width: 900px)"
        />
        <source
          srcset="./assets/${newName}/hero-small.jpg"
          media="(min-width: 600px)"
        />
        <img src="./assets/${newName}/thumbnail.jpg" alt="thumnail image" />
      </picture>
    </div>

      `;
        viewingImage();
        attachEventListeners();
        updateButtons();
        updateProgressBar();
      });
  }

  let currentIndex = 0;
  let jsonData = null;
  renderContent(currentIndex);

  // function for prev/next buttons
  function attachEventListeners() {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + jsonData.length) % jsonData.length;
      functionsCalledByButtons();
      window.scrollTo(0, 0);
    });

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % jsonData.length;
      functionsCalledByButtons();
      window.scrollTo(0, 0);
    });
  }
  // grouping functions that are called by prev/next buttons
  function functionsCalledByButtons() {
    showBoxContent(currentIndex);
    renderContent(currentIndex);
    attachEventListeners();
    updateButtons();
    viewingImage();
    updateProgressBar();
  }

  // Update Buttons
  function updateButtons() {
    if (currentIndex === 0) {
      prevButton.classList.toggle("disabled");
    }
    if (currentIndex === jsonData.length - 1) {
      nextButton.classList.toggle("disabled");
    }
  }

  // Viewing Images in module
  function viewingImage() {
    const viewImage = document.querySelector(".viewImageLink");
    const moduleContainer = document.querySelector(".module-container");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.querySelector(".btn-close");
    viewImage.addEventListener("click", () => {
      moduleContainer.style.display = "block";
      overlay.style.display = "block";

      viewingImage();
    });
    closeBtn.addEventListener("click", () => {
      moduleContainer.style.display = "none";
      overlay.style.display = "none";

      viewingImage();
    });
  }
  // Progress Bar
  function updateProgressBar() {
    let progressBarFill = document.querySelector(".progressBar-fill");
    let progress = Math.round((currentIndex / 14) * 100);
    progressBarFill.style.width = `${progress}%`;
  }
  window.scrollTo(0, 0);
});
