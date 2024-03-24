const images = document.querySelectorAll("img");
console.log(images);
const module = document.querySelector("module");

forEach(img of images) {
    img.addEventListener("click", ()=> {
        console.log(img)
    })
}
