


function tazarVehiculo(){
    let codigo= prompt("ingresa el monto de la poliza(informacion entre parentesis)")
    let modelo= parseInt(prompt("ingresa el modelo (a partir del año 2000)"))
    
    if(modelo >=2000){
        console.log("vehiculo:",codigo)
        console.log("modelo:",modelo)

    } else{
        console.error("modelos menores al año 2000 ,no aseguramos")
    }

    for(let m=1; m <=4; m++)
   parseInt( console.log("cantidad de cuotas:", m ,codigo/4 )) 
    
}