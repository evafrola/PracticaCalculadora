//Variables
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

//Dandole funcionalidad a cada boton por un array de botones
buttons.forEach((item) => {
    item.addEventListener("click", ()=>{
      if(item.id === "limpiar"){  //Funcionalidad de el boton "C" que elimina todo
        display.textContent ="";
      } else if(item.id === "borrar"){ //Funcionalidad de el boton "<-" que borra letra por letra
        display.textContent = display.textContent.slice(0, -1)
      } else if(display.textContent != "" && item.id === "igual"){ //Funcionalidad de el boton "="
        display.textContent = eval(display.textContent)
      } else if(display.textContent == "" && item.id === "igual"){//Funcion en caso de errores al estar vacio
        display.textContent = "Null"
        setTimeout(()=> (display.textContent = ""), 2000)
      } else {
        display.textContent += item.id;
      }
    })
});
