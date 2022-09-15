const btnProducts = document.querySelector('.btn-products a')
const subSection = document.querySelector('.sub-section')



subSection.addEventListener('click', () => {
    subSection.classList.remove('show')
    subSection.classList.add('hide')
})

btnProducts.addEventListener('click', () => {
    if (subSection.classList.contains("hide")) {
        subSection.classList.remove("hide")
        subSection.classList.add('show')
    } else {
        subSection.classList.remove('show')
        subSection.classList.add('hide')
    }

});

window.onload = () => {
    filterProduct("Todos")
}

function filterProduct(value) {

    let elements = document.querySelectorAll('.product')

    elements.forEach((element) => {
        if (value == "Todos") {
            element.classList.remove("hidden")
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hidden")
            } else {
                element.classList.add("hidden")
            }
        }
    })
}