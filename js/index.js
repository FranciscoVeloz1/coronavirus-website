let titulo = document.getElementById("titulo")

//Prueba con la api de star wars
const API = "https://swapi.dev/api/people/"

fetch(`${API}1/`)
.then(response => response.json())
.then(data => {
    titulo.innerHTML = data.name
})