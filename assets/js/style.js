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
