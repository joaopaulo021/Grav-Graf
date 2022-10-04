const productsArea = document.querySelector('#products')

const preencheItem = (productItem, item, index) => {
    productItem.setAttribute('data-key', index)
    productItem.querySelector('.product h4').innerHTML = item.name
    productItem.querySelector('.product p').innerHTML = item.description
    productItem.querySelector('.img-container a').href = item.img
    productItem.querySelector('.product img').src = item.img


}

const seleciona = (elemento) => document.querySelector(elemento)

produtos.map((item, index) => {
    let productItem = seleciona('.models .product').cloneNode(true)
    preencheItem(productItem, item, index)

    seleciona('#products').append(productItem)

    productItem.classList.add(item.tipo, "hidden")
    productItem.classList.add("hid")



})