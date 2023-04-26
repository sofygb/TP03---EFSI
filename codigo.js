var contadorIds = 0
var link = `https://dummyjson.com/products`

function obtenerResultado(){
    resetearRow()

    let parametro = document.getElementById("q").value
    let consultaFinal = link + `/search?q=${parametro}`

    fetch(consultaFinal)
        .then(res => res.json())
        .then(res => {
            console.log("obtuve respuesta")
            console.log(res);
            row = document.getElementById("row");
            
            //Si no hay resultados
            if(res.products.length === 0){
                //Crear col
                col = document.createElement("div")
                col.classList.add("col-2")
                row.appendChild(col)

                let noEncontrado = document.createElement("i")
                noEncontrado.innerText = "ERROR! No se han encontrado resultados"
                col.appendChild(noEncontrado)
            }

            res.products.forEach(producto => {
                contadorIds++;

                //Crear col
                col = document.createElement("div")
                col.classList.add("col-2")
                row.appendChild(col)

                //Crear card
                card = document.createElement("div")
                card.classList.add("card")
                card.setAttribute("id","card" + contadorIds)
                col.appendChild(card)

                //Crear imagen
                img = document.createElement("img")
                img.src = producto.images[0]
                card.appendChild(img)

                //Crear card-body
                cardBody = document.createElement("div")
                cardBody.classList.add("card-body")
                card.appendChild(cardBody)

                h5 = document.createElement("h5")
                h5.classList.add("card-title")
                h5.setAttribute("id","nombre" + contadorIds)
                h5.innerHTML = producto.title
                cardBody.appendChild(h5)

                p = document.createElement("p")
                p.classList.add("card-text")
                p.setAttribute("id","descripcion" + contadorIds)
                p.innerHTML = producto.description
                cardBody.appendChild(p)

                i = document.createElement("i")
                i.classList.add("mb-4")
                i.setAttribute("id","marca" + contadorIds)
                i.innerHTML = "Marca: " + producto.brand
                cardBody.appendChild(i)

                br = document.createElement("br")
                cardBody.appendChild(br)

                i2 = document.createElement("i")
                i2.classList.add("mb-4")
                i2.setAttribute("id","precio" + contadorIds)
                i2.innerHTML = "Precio: $" + producto.price
                cardBody.appendChild(i2)

                br2 = document.createElement("br")
                cardBody.appendChild(br2)
                br3 = document.createElement("br")
                cardBody.appendChild(br3)

                boton = document.createElement("a")
                boton.href = `verProducto.html?producto=${producto.id}`
                boton.classList.add("btn")
                boton.setAttribute("id","boton" + contadorIds)
                boton.setAttribute("style","color: #fff;background-color: #0054d1b5;border-color: #0f6cf7;")
                boton.innerHTML = "Ver Producto"
                cardBody.appendChild(boton)

                console.log(producto)
            })
        })
        .catch(err => console.error("error", err))
    console.log("Fin consulta - fetch")     
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const resetearRow = () => {
    //limpiar childs de la row
    contadorIds = 0
    let row = document.getElementById("row")
    removeAllChildNodes(row);
}

function crearProducto(){
//crear producto
fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'BMW Pencil',
    /* other product data */
  })
})
.then(res => res.json())
.then(console.log);
}
