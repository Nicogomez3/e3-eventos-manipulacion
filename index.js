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
const numberInput = document.querySelector(".number__input")
const cardContainer = document.querySelector(".container")

// formContainer.addEventListener('submit', () => {
//   console.log(`Elemento enviado`)
// })

let pizzaFind = JSON.parse(localStorage.getItem('pizzas')) || []
 
const saveLocalStorage = () => {
  localStorage.setItem('pizzas', JSON.stringify(pizzaFind))
}

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

const errorNumber = (input) => {
  return `El numero ingresado no coincide`
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
   const numberId = Number(numberInput.value);
   if(numberId > 5) {
    cardContainer.innerHTML = errorNumber();
    return
  }

   showSuccess(input)
   valid = true;
   return valid

 }


 const createCardsHTML = (pizza) => {
    if (!pizza) {
      return ''; 
  }

    return `
      <div class="card__container">
      <img class="card__img" src=" ${pizza.imagen} " alt="">
      <div class="card__details">
        
      </div>
      <div class="card__title">
          <h2> ${pizza.nombre} </h2>
      </div>
      <div class="card__info">
          <p> Ingredientes: ${pizza.ingredientes}  </p>
          <p> Precio:  ${pizza.precio} </p>
         
      </div>
    `
  
 };


 


 const renderCardsList = () => {
    const numberId = Number(numberInput.value);
    pizzaFind = [pizzas.find(pizza => pizza.id === numberId)];

    if (pizzaFind.length > 0) {
      cardContainer.innerHTML = createCardsHTML(pizzaFind[0]);
      return;
    }

    

    

 }

 const renderCards = () => {

  cardContainer.innerHTML = pizzaFind.map((pizza) => createCardsHTML(pizza));

};



const search = (e) => {
  e.preventDefault()
  
  
  renderCardsList()
  renderCards()
  saveLocalStorage(pizzaFind)
  formContainer.reset()
  checkNumber(numberInput)
 
}





const init = () => {
  document.addEventListener('DOMContentLoaded', renderCards)
  formContainer.addEventListener("submit", search)
  numberInput.addEventListener("input", () => checkNumber(numberInput))
};

init()