let titulo = document.getElementById("titulo");
let info_muertes = document.getElementById("info-muertes")
let info_casos = document.getElementById("info-casos")
let info_recuperados = document.getElementById("info-recuperados")

//Prueba con la api de star wars
const API = "https://api.covid19api.com/country/mexico";

const date = new Date()

console.log(date.getDate())

fetch(`${API}`)
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    console.log(data)
    info_muertes.innerHTML = `-${data[189].Deaths}`
    info_casos.innerHTML = `-${data[189].Confirmed}`
    info_recuperados.innerHTML = `-${data[189].Recovered}`
  })

  .catch((error) => console.log(error));
