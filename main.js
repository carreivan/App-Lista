(function(){
    //Variables
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");
         

//Funciones
var agregarTarea = function(){
    var tarea = tareaInput.value,
        nuevaTarea = document.createElement("li"),
        enlace = document.createElement("a"),
        contenido = document.createTextNode(tarea);

        if(tarea === ""){
            tareaInput.setAttribute("placeholder", "Agrega una Tarea Valida");
            tareaInput.className = "error";
            return false;
        }

        //agregamos el contenido al enlace
        enlace.appendChild(contenido);
        //le establecemos  un atributo href
        enlace.setAttribute("href", "#");
        //agregamos el enlace a la nueva tarea (li)
        nuevaTarea.appendChild(enlace);
        lista.appendChild(nuevaTarea);

        tareaInput.value = "";

        for (var i = 0; i <= lista.children.length -1; i++){
            lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });
        }

};
var comprobarInput = function(){
   
    tareaInput.className = "";
    tareaInput.setAttribute("placeholder", "Agrega tu Tarea");
};
var eliminarTarea = function(){
    this.parentNode.removeChild(this);
};

//Eventos
//Agregar Tarea
btnNuevaTarea.addEventListener("click", agregarTarea);

//Comprobar Imput
tareaInput.addEventListener("click", comprobarInput);

//borrando Elementos de la lista    
for (var i = 0; i <= lista.children.length -1; i++){
    lista.children[i].addEventListener("click", eliminarTarea);
}















}());