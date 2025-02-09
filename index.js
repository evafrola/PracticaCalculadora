//Variables
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

//Dandole funcionalidad a cada boton por un array de botones
buttons.forEach((item) => {
    item.onclick= ()=>{
      if(item.id === "limpiar"){  //Funcionalidad de el boton "C" que elimina todo
        display.innerText="";
      } else if(item.id === "borrar"){ //Funcionalidad de el boton "<-" que borra letra por letra
        let string = display.innerText.toString();
        display.innerText = string.substring(0, string.length-1)
      } else if(display.innerText != "" & item.id === "igual"){ //Funcionalidad de el boton "="

      }
    }
});