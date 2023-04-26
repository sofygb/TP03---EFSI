var contadorIds = 0
var link = `https://dummyjson.com/products`

//Obtiene todos los parámetros de la url
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let parametro = params.producto //el Id
let consultaFinal = link + `/${parametro}`
let producto = null

fetch(consultaFinal)
    .then(res => res.json())
    .then(res => {
        producto = res
        let padre = document.getElementById("Carrousel")
        let padre2 = document.getElementById("Informacion")

        let f = document.createElement("h4")
        f.classList.add("mb-2")
        f.innerText = "Imágenes del Producto"
        padre.appendChild(f)

        //carrousel
        let carrouselExampleRide = document.createElement("div")
        carrouselExampleRide.setAttribute("id", "carouselExampleRide")
        carrouselExampleRide.classList.add("carousel", "slide", "mb-4")
        carrouselExampleRide.setAttribute("data-bs-ride", "true")
        padre.appendChild(carrouselExampleRide)

        //inner div
        let carrouselInner = document.createElement("div")
        carrouselInner.classList.add("carousel-inner")
        carrouselExampleRide.appendChild(carrouselInner)

        //crear carrousel-items según la cantidad de imagenes
        let imagenes = producto.images

        imagenes.forEach((imagen, index) => {
            //items
            if (index === 0) {
                let carrouselItemActive = document.createElement("div")
                carrouselItemActive.classList.add("carousel-item", "active")
                carrouselInner.appendChild(carrouselItemActive)

                let img = document.createElement("img")
                img.src = imagen
                img.classList.add("d-block", "w-100")
                carrouselItemActive.appendChild(img)
                img.alt = "..."
            }
            else {
                let carrouselItem = document.createElement("div")
                carrouselItem.classList.add("carousel-item")
                carrouselInner.appendChild(carrouselItem)

                let img = document.createElement("img")
                img.src = imagen
                img.classList.add("d-block", "w-100")
                carrouselItem.appendChild(img)
                img.alt = "..."
            }
        })

        //boton previo
        let botonPrevio = document.createElement("button")
        botonPrevio.classList.add("carousel-control-prev")
        botonPrevio.type = "button"
        botonPrevio.setAttribute("data-bs-target", "#carouselExampleRide")
        botonPrevio.setAttribute("data-bs-slide", "prev")
        carrouselExampleRide.appendChild(botonPrevio)

        let span1 = document.createElement("span")
        span1.classList.add("carousel-control-prev-icon")
        span1.ariaHidden=true
        botonPrevio.appendChild(span1)

        let span2 = document.createElement("span")
        span2.classList.add("visually-hidden")
        span2.innerText = "Previous"
        botonPrevio.appendChild(span2)

        //boton siguiente
        let botonSiguiente = document.createElement("button")
        botonSiguiente.classList.add("carousel-control-next")
        botonSiguiente.type = "button"
        botonSiguiente.setAttribute("data-bs-target", "#carouselExampleRide")
        botonSiguiente.setAttribute("data-bs-slide", "next")
        carrouselExampleRide.appendChild(botonSiguiente)
        
        let span3 = document.createElement("span")
        span3.classList.add("carousel-control-next-icon")
        span3.ariaHidden=true
        botonSiguiente.appendChild(span3)

        let span4 = document.createElement("span")
        span4.classList.add("visually-hidden")
        span4.innerText = "Next"
        botonSiguiente.appendChild(span4)

        //Otra info
        let otraInfo = document.createElement("h4")
        otraInfo.classList.add("mb-2")
        otraInfo.innerText = "Información Principal"
        padre2.appendChild(otraInfo)

        i1 = document.createElement("i")
        i1.classList.add("mb-4")
        i1.setAttribute("id","titulo")
        i1.innerText = "Nombre: " + res.title
        padre2.appendChild(i1)

        br4 = document.createElement("br")
        padre2.appendChild(br4)
        
        i5 = document.createElement("i")
        i5.classList.add("mb-4")
        i5.setAttribute("id","marca")
        i5.innerText = "Marca: " + res.brand + " - " + res.category
        padre2.appendChild(i5)

        br1 = document.createElement("br")
        padre2.appendChild(br1)

        i2 = document.createElement("i")
        i2.classList.add("mb-4")
        i2.setAttribute("id","descripción")
        i2.innerText = res.description
        padre2.appendChild(i2)

        br2 = document.createElement("br")
        padre2.appendChild(br2)

        i3 = document.createElement("i")
        i3.classList.add("mb-4")
        i3.setAttribute("id","precio")
        i3.innerText = "Precio original: $" + res.price + " / Precio con descuento: $" + (res.price * (1-(res.discountPercentage/100))).toFixed(2) + " (-%" + res.discountPercentage + ")"
        padre2.appendChild(i3)

        br3 = document.createElement("br")
        padre2.appendChild(br3)

        i4 = document.createElement("i")
        i4.classList.add("mb-4")
        i4.setAttribute("id","rating")
        i4.innerText = "Valoración: " + res.price
        padre2.appendChild(i4)




    })
    .catch(err => console.error("error", err))

function modificarProducto(){
    
}
function eliminarProducto(){

}




/*
{
"id": 27,
"title": "Flying Wooden Bird",
"description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
"price": 51,
"discountPercentage": 15.58,
"rating": 4.41,
"stock": 17,
"brand": "Flying Wooden",
"category": "home-decoration",
"thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp",
"images": [
    "https://i.dummyjson.com/data/products/27/1.jpg",
    "https://i.dummyjson.com/data/products/27/2.jpg",
    "https://i.dummyjson.com/data/products/27/3.jpg",
    "https://i.dummyjson.com/data/products/27/4.jpg",
    "https://i.dummyjson.com/data/products/27/thumbnail.webp"
]
}
*/
