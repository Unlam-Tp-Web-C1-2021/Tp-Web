// --------------------------------------------- Clases ---------------------------------------------

class Curso {
    constructor(id, nombre, img, precio, duracion) {
        this.id = id
        this.nombre = nombre
        this.img = img
        this.precio = precio
        this.duracion = duracion
    }
}

class Banner {
    constructor(image, description) {
        this.image = image
        this.description = description
    }
}

class Category {
    constructor(id, title, image) {
        this.id = id
        this.title = title
        this.image = image
    }
}

// --------------------------------------------- Constantes ---------------------------------------------

const CAROUSEL_INTERVAL = 3000 // seconds
const CLASS_AGREGAR_CARRITO = "button"
const CLASS_REMOVER_CARRITO = "button-remove-shopping"
const BUTTON_ITEM_ID = "button-item-id-"
const ITEM_LIST_SHOPPING_ADDED_ID = "item-list-shopping-added-id-"
const mediaQuery45 = window.matchMedia('screen and (min-width: 45em)')
const mediaQuery65 = window.matchMedia('screen and (min-width: 65em)')
const mediaQuery85 = window.matchMedia('screen and (min-width: 85em)')

// Lista de cursos que se van a mostrar en index
const cursos = [
    new Curso(1, "Photoshop Básico", "img/imagencursot.jpg", 1400, 6),
    new Curso(2, "Adobe Premiere Básico", "img/imagencursot.jpg", 1000, 4),
    new Curso(3, "Protoshop Avanzado", "img/imagencursot.jpg", 1800, 8),
    new Curso(4, "Python desde cero", "img/imagencursot.jpg", 2000, 10),
    new Curso(5, "Marketin Digital", "img/imagencursot.jpg", 1500, 12),
    new Curso(6, "HTML5, CSS3 y Javascript", "img/imagencursot.jpg", 1000, 15),
    new Curso(7, "Wordpress", "img/imagencursot.jpg", 1100, 9)
]

const imagesBanner = [
    new Banner("img/sadio-computacion-cuantica.jpg", ""),
    new Banner("img/curso_progracion.jpg", ""),
    new Banner("img/sadio-computacion-cuantica.jpg", ""),
    new Banner("img/curso_progracion.jpg", "")
]

const categoriesList = [
    new Category(1, "Reparación de PC", "img/curso_progracion.jpg"),
    new Category(1, "Reparación de PC", "img/curso_progracion.jpg"),
    new Category(1, "Reparación de PC", "img/curso_progracion.jpg"),
    new Category(1, "Reparación de PC", "img/curso_progracion.jpg"),
    new Category(1, "Reparación de PC", "img/curso_progracion.jpg"),
    new Category(1, "Reparación de PC", "img/curso_progracion.jpg"),
    new Category(1, "Reparación de PC", "img/curso_progracion.jpg"),
    new Category(1, "Reparación de PC", "img/curso_progracion.jpg")
]

// --------------------------------------------- Variables ---------------------------------------------

var addedToCartList = []

// --------------------------------------------- Métodos ---------------------------------------------

window.onload = function() {
    let badge = $(".shopping-counter-container")
    badge.style.display = "none"

    let badgeContainer = $(".shopping-container")
    badgeContainer.addEventListener("mouseover", showShoppingList)
    badgeContainer.addEventListener("mouseout", hideShoppingList)

    setupCarousel()

    loadCursos()

    new bootstrap.Carousel($("#carousel-category"), {
        interval: CAROUSEL_INTERVAL,
        wrap: true,
        touch: true
      })
    
    setupCategories(5)
    
    mediaQuery45.addEventListener("change", (e) => {
        setupCategories(2)
    })

    mediaQuery65.addEventListener("change", (e) => {
        setupCategories(3)
    })

    mediaQuery85.addEventListener("change", (e) => {
        setupCategories(5)
    })
}

function setupCarousel() {
    let containerItems = $("#container-banner-main")

    imagesBanner.forEach((banner, pos) => {
        containerItems.innerHTML += 
        `
        <div class="carousel-item ${ pos == 0 ? "active" : "" } container-banner-main-item">
            <img src="${ banner.image }" alt="${ banner.description }">
        </div>
        `
    })

    let container = $("#container-banner")
    new bootstrap.Carousel(container, {
        interval: CAROUSEL_INTERVAL,
        wrap: true,
        touch: true
      })
}

function showShoppingList(e) {
    let shoppingListContainer = $(".shopping-list-container")

    if (addShopping.length != 0) {
        shoppingListContainer.style.display = "block"
    }
}

function hideShoppingList(e) {
    $(".shopping-list-container").style.display = "none"
}

/**
 * Carga la lista de cursos en el contenedor
 */
function loadCursos() {
    let container = $(".container-cursos-destacados")

    cursos.forEach(curso => {
        container.innerHTML += 
    `<div class="curso-destacado-item scale-animation">
        <div class="container-curso-image">
            <img src="${ curso.img }" alt="">
            <p class="curso-precio">$ ${ curso.precio }</p>
        </div>
        <div class="curso-detail">
            <div class="curso-detail-title">
                <p>${ curso.duracion }hs</p>
                <p>${ curso.nombre }</p>
            </div>
            <a href="detalles-curso.html" class="ver-datalle-link">Ver Detalle</a>
            <p href="" id=${ BUTTON_ITEM_ID + curso.id } class="curso-destacado-item-button button" onclick="onClickButtonItemCursoDestacado(${ curso.id })">Agregar al carrito</p>
        </div>
    </div>`
    });
}

/**
 * 
 * @param {*} cursoId 
 */
function onClickButtonItemCursoDestacado(cursoId) {
    let button = $("#" + BUTTON_ITEM_ID + cursoId)
    if (button.classList.contains(CLASS_REMOVER_CARRITO)) {
        removeShopping(cursoId)
        print("Item Removido")
    } else {
        addShopping(cursoId)
        print("Item Agregado")
    }
}

function addShopping(cursoId) {
    let budge = document.querySelector(".shopping-counter-container")
    budge.style.display = "flex"

    let curso = cursos.find(e => e.id == cursoId)
    addedToCartList.push(curso)
    
    $(".shopping-counter").textContent = getCountItemsAdded()

    $(".shopping-list-container").innerHTML +=
    `
    <li id="${ ITEM_LIST_SHOPPING_ADDED_ID + cursoId }">
        <div class="shopping-item-container">
            <img class="shopping-item-img" src="${ curso.img }" alt="${ curso.name }">
            <div class="shopping-item-text"><p>${ curso.nombre }</p></div>
        </div>
        <div class="shopping-item-separator"></div>
    </li>
    `

    let button = $("#" + BUTTON_ITEM_ID + cursoId)
    button.textContent = "Remover del carrito"
    button.classList.add(CLASS_REMOVER_CARRITO)
}

function removeShopping(cursoId) {
    let curso = cursos.find(e => e.id == cursoId)
    let pos = addedToCartList.indexOf(curso)
    print(addedToCartList.length)
    removeAt(addedToCartList, pos)
    print(addedToCartList.length)

    if (addedToCartList.length == 0) {
        $(".shopping-counter-container").style.display = "none"
    } else {
        $(".shopping-counter").textContent = getCountItemsAdded()
    }

    $("#" + ITEM_LIST_SHOPPING_ADDED_ID + cursoId).remove()

    let button = $("#" + BUTTON_ITEM_ID + cursoId)
    button.classList.remove(CLASS_REMOVER_CARRITO)
    button.textContent = "Agregar al carrito"
}

function getCountItemsAdded() {
    return addedToCartList.length > 9 ? "+9" : addedToCartList.length
}

function print(message) {
    console.log(message)
}

function $(name) {
    return document.querySelector(name)
}

function removeAt(list, index) {
    list.splice(index, 1)
}

function calculateItemCategories(maxItems) {
    let group = []
    let aux = []

    categoriesList.forEach((element) => {
        if (aux.length > maxItems - 1) {
            group.push(aux)
            aux = []
        }
        
        aux.push(element)
    })

    group.push(aux)
    
    return group
}

function setupCategories(maxItems) {
    let container = $("#carousel-container")
    let categories = calculateItemCategories(maxItems)
    
    let html = ""
    categories.forEach((element, pos) => {
        html += `<div class="carousel-item ${ pos == 0 ? "active" : "" }">`
            html += `<div class="container-items-categorias">`
            element.forEach(elem => {
                html += `
                <div class="item-categoria">
                    <img class="item-categoria-img scale-animation" src="${ elem.image }" alt="${ elem.title }">
                    <h3 class="item-categoria-title">${ elem.title }</h3>
                </div>
                `
            })                                
            html += `</div>`
        html += `</div>`
    })

    container.innerHTML = html
}