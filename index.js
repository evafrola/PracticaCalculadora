//Variables
const display = document.querySelector("display");
const buttons = document.querySelectorAll("button");

//Dandole funcionalidad a cada boton por un array de botones
buttons.forEach((item) => {
    item.addEventListener("click", ()=>{
      if(item.id === "limpiar"){  //Funcionalidad de el boton "C" que elimina todo
        display.value="";
      } else if(item.id === "borrar"){ //Funcionalidad de el boton "<-" que borra letra por letra
        display.value = display.value.slice(0, -1)
      } else if(display.value != "" && item.id === "igual"){ //Funcionalidad de el boton "="
        display.value = eval(display.value)
      }
    })
});