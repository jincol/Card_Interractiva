// OBTENER DATOS
const form = document.querySelector("form");
const nombre = document.querySelector(".datos .nombre");
const numtar = document.querySelector(".numtar");
const mes = document.querySelector(".mes");
const anio = document.querySelector(".anio");
const cvv = document.querySelector(".cvv");

//EXPRESION REGULAR
const numericRegex = /^[0-9]+$/;
const letterRegex = /^[a-zA-Z]+$/;

function VerificaEntrada(){
  if ( nombre.value.length > 0 && numtar.value.length > 0 &&
    mes.value.length > 0 &&  anio.value.length > 0 && cvv.value.length > 0  ) {
    Modificadatos();
  }else{
    const incompleto = document.createElement("span")
    incompleto.classList.add("imc")
    incompleto.textContent="Uno de los campos se encuentra vacio"
    form.appendChild(incompleto);
  form.addEventListener('click',() => incompleto.remove());
  }
}


function Modificadatos() {
  // Obtenemos los identifcadores de los elementos html
  const suss = document.querySelector(".none")
  const inf = document.querySelector(".contenedor-datos")
  const numero = document.querySelector(".numero");
  const nombre_card = document.querySelector(".nombre-card");
  const fv = document.querySelector(".fv");
  const ncvv = document.querySelector(".ncvv");

  if (!isNaN(numtar.value) && typeof nombre.value == "string" && 
      !isNaN(mes.value) && !isNaN(anio.value) &&  !isNaN(cvv.value)) {
    numero.textContent = numtar.value;
    nombre_card.textContent = nombre.value;
    fv.textContent = mes.value + "/" + anio.value;
    ncvv.textContent = cvv.value;
    inf.style.display = 'none'
    suss.classList.add("enviado")
  } else {
    const invalido = document.createElement("span")
    invalido.classList.add("imc")
    invalido.textContent="Uno de los campos tiene un dato invalido"
    form.appendChild(invalido);
    form.addEventListener('click',() => invalido.remove());
  }
}

function imputs (input){
  const value = input.value;

  // Verifica el tipo y el valor del input
  if ((input.type === 'text' && !isNaN(value)) || (input.type === 'number' && isNaN(value))) {
    input.classList.add("error");
  } else {
    input.classList.add("check");
  }
}

// Agrega un evento de input a cada input seleccionado
nombre.addEventListener('input', function() {
  imputs(nombre);
});

numtar.addEventListener('input', function() {
  imputs(numtar);
});

mes.addEventListener('input', function() {
  imputs(mes);
});

anio.addEventListener('input', function() {
  imputs(anio);
});

cvv.addEventListener('input', function() {
  imputs(cvv);
})



form.addEventListener("submit", (e) => {
  e.preventDefault();
  VerificaEntrada();
  
});
