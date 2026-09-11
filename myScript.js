
const images = document.querySelectorAll("img");

images.forEach(function (image) {
    image.addEventListener("click", function () {
        image.classList.toggle("enlarged");
    });
});

function toggleInfo() {
    const info = document.getElementById ("director-moreinformation");
    info.classList.toggle("show");
}
