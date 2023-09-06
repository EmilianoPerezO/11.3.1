const btn = document.getElementById("btnBuscar");
const container = document.getElementById("contenedor");

btn.addEventListener("click", () => {
    const input = document.getElementById("inputBuscar").value;
    const URL = `https://images-api.nasa.gov/search?q=${input}`;
    console.log(URL);

    fetch(URL)
        .then(res => res.json())
        .then(data => showData(data))
        .catch(error => console.log("Error al obtener los datos", error))
});

function showData(data) {
    container.innerHTML = "";
    for (const item of data.collection.items) {

        container.innerHTML += `
        <div class="col-md-4 ">
        <div class="card">
        <div class=" body">
        <img class="card-img-top" width="200" src="${item.links[0].href}" alt="Card image cap">
            <h3 class="card-title">${item.data[0].title}</h3>
            <p class="card-description">${item.data[0].description}</p>
            <p class="card-description">${item.data[0].date_created}</p>
         </div>   
        </div>
        </div>`;
    }
}


