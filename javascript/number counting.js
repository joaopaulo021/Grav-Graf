let countingInProgress = false;

function numberCounting() {
    if (countingInProgress) {
        return;
    }

    countingInProgress = true;

    let valueDisplays = document.querySelectorAll('.num')
    let interval = 5

    let counter = setInterval(function () {
        let allFinished = true

        valueDisplays.forEach((valueDisplay) => {
            let startValue = parseInt(valueDisplay.textContent);
            let endValue = parseInt(valueDisplay.getAttribute('data-goal'))
            let duration = Math.floor(interval / endValue)

            if (startValue < endValue) {
                startValue += 1
                valueDisplay.textContent = startValue
                allFinished = false
            }
        })
        if (allFinished) {
            clearInterval(counter)
            countingInProgress = false
        }
    }, interval)
}

let elemento = document.querySelector('.references-container')
elemento.addEventListener('touchstart', numberCounting, true)
elemento.addEventListener('mousemove', numberCounting)