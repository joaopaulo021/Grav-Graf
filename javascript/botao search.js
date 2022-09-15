function searchButton() {
    const searchInput = document.getElementById("search-input").value
    searchInput.value = ''
    document.getElementById("search-input").focus()
    document.getElementById("search-input").value = ''

    let elements = document.querySelectorAll(".product h4")
    let cards = document.querySelectorAll(".product")

    elements.forEach((element, index) => {

        if (element.innerText.toLowerCase().includes(searchInput)) {

            cards[index].classList.remove('hidden')
        } else {
            cards[index].classList.add("hidden")
        }
    })
}

document.querySelector('.search-container img').addEventListener("click", () => {
    searchButton()


})

document.querySelector('#search-input').addEventListener("keyup", (e) => {
    let key = e.keyCode
    if (key == 13) {
        searchButton()

    }
})