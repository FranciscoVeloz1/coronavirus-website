let titulo = document.getElementById("titulo");
let info_muertes = document.getElementById("info-muertes")
let info_casos = document.getElementById("info-casos")
let info_recuperados = document.getElementById("info-recuperados")

//Prueba con la api de covid19
const API = "https://api.covid19api.com/country/mexico";

const date = new Date()

fetch(`${API}`)
  .then((response) => {
    return response.json();
  })

  .then((data) => {

    const tamaño = data.length - 1

    info_muertes.innerHTML = `${data[tamaño].Deaths}`
    info_casos.innerHTML = `${data[tamaño].Confirmed}`
    info_recuperados.innerHTML = `${data[tamaño].Recovered}`

  })

  .catch((error) => console.log(error));