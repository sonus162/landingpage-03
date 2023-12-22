let valueDisplays = document.querySelectorAll(".count");

let interval = 10000;

// console.log(valueDisplays);

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-number"));

    // console.log(endValue);

    let duration = Math.floor(interval / endValue);

    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;

        if (startValue == endValue) {
            clearInterval(counter);
        }
    });
});

let currentImage = 1;
let countSlider = document.querySelectorAll(".testimonial__avatar").length;

function prevImage() {
    currentImage = currentImage > 2 ? currentImage - 1 : 6;
    console.log(currentImage);
    showImage("avatar", 1, currentImage);
}

function nextImage() {
    currentImage = currentImage < countSlider ? currentImage + 1 : 2;
    showImage("avatar", 1, currentImage);
}

function showImage(id_name, start, end) {
    id_name_start = id_name + start;
    id_name_end = id_name + end;
    const imgStart = document.getElementById(id_name_start).getAttribute("src");
    const imgEnd = document.getElementById(id_name_end).getAttribute("src");
    document.getElementById(id_name_start).src = imgEnd;
    document.getElementById(id_name_end).src = imgStart;
}
