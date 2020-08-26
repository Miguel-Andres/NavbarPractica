let tecnologia = document.querySelector(".titulos li.tecnologia")
let deportivo = document.querySelector(".titulos li.deportivo")

let  loren = document.querySelector(".titulos li.loren")
let  autos = document.querySelector(".titulos li.autos")


let subloren = document.querySelector("ul#loren")
loren.addEventListener("click" , function(){

 subloren.classList.toggle("active")

        
})

let subtecnologia = document.querySelector("ul#tecnologia")
tecnologia.addEventListener("click" , function(){

 subtecnologia.classList.toggle("active")

        
})

let subautos = document.querySelector("ul#autos")
autos.addEventListener("click" , function(){
 console.log(autos)
    subautos.classList.toggle("active")
   
           
   })
let subdeportivo= document.querySelector("ul#deportivo")
deportivo.addEventListener("click" , function(){
    console.log(deportivo)
       subdeportivo.classList.toggle("active")
      
              
      })

