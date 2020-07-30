let titulo = document.getElementById("titulo");
let muertes = document.getElementById("muertes")

//Prueba con la api de star wars
const API = "https://api.covid19api.com/country/mexico";

const date = new Date()

console.log(date.getDate())

fetch(`${API}`)
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    muertes.innerHTML = data[182].Deaths
    console.log(data[182].Date);
  })

  .catch((error) => console.log(error));
