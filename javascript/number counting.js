function numberCounting() {

    let valueDisplays = document.querySelectorAll('.num')
    let interval = 100

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0
        let endValue = parseInt(valueDisplay.getAttribute('data-goal'))
        let duration = Math.floor(interval / endValue)
        let counter = setInterval(function() {
            startValue += 1
            valueDisplay.textContent = startValue
            if (startValue == endValue) {
                clearInterval(counter)
            }

        }, duration, )
    })
}
let elemento = document.querySelector('.references-container')
elemento.addEventListener('touchstart', numberCounting, true)
elemento.addEventListener('mousemove', numberCounting)