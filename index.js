const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


const formContainer = document.getElementById("form__container");
const numberInput = document.getElementById("number");


//Funcion para que el campo no esté vacio

const isEmpty = (input) => {
  return !input.value.trim().length;
}

//Funcion de error

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success")
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.style.display = "block";
  error.textContent = message;
}

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  const error = formField.querySelector("small");
  error.textContent = "";
};



const checkNumber = (input) => {
  let valid = false 

 

  if(isEmpty(input)) {
    showError(input, "Llena el campo")
    return;
  }



  showSuccess(input)
  valid = true;
  return valid

}

const cardContainer = document.querySelector(".container")

const createCard = (pizza) => {
  const {nombre, precio, ingredientes, imagen} = pizza

  return `
    <div class="card__container">
    <img class="card__img" src=" ${imagen} " alt="">
    <div class="card__details">
        
    </div>
    <div class="card__title">
        <h2> ${nombre} </h2>
    </div>
    <div class="card__info">
        <p> Ingredientes: ${ingredientes} </p>
        <p> Precio: $ ${precio} </p>
    </div>
  `
  
};

cardContainer.innerHTML = pizzas.map((pizza) => createCard(pizza)).join('');
cardContainer.style.display = "none";



const id = pizzas.filter((pizza) => {
  if(pizza.id >= 1 && pizza.id <= 5 ) {
    console.log(`Las pizzas disponibles son: ${pizza.nombre}`)
  } else {
    console.log(`Esa pizza no está disponible`)
  }
})

const search = (e) => {
  e.preventDefault()
}

const init = () => {
  numberInput.addEventListener("input", () => checkNumber(numberInput))
  formContainer.addEventListener("submit", search)
};

init()