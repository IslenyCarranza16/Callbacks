// callbaks 
//ejercicio 1
const form = document.querySelector('#form');
const warning = document.querySelector('#warning')
warning.onclick=()=>(mostrarMensaje(form.mensaje.value,consoleWarm))

const informacion = document.querySelector('#info')
informacion.onclick=()=>(mostrarMensaje(form.mensaje.value,consoleInfo))

const loga = document.querySelector('#log')
loga.onclick=()=>(mostrarMensaje(form.mensaje.value,consoleLog))


console.log(form.mensaje.value)
function mostrarMensaje (mensaje,funcionconsole){
    funcionconsole(mensaje)
}

function consoleWarm(mensaje){
    console.warn(mensaje)
}

function consoleLog(mensaje){
    console.log(mensaje)
}

function consoleInfo(mensaje){
    console.info(mensaje)
}



//ejercicio 2
const form2 = document.querySelector('#form2');
const tipoVar = document.querySelector('#typeof')
const resultadoponer = document.querySelector('#resultado')
tipoVar.onclick=()=>(mensajedeTipoyContenido(form2.tipovar.value,tipoVariable))


function tipoVariable(variable){
    return typeof(variable)
}

function mensajedeTipoyContenido(variable,funcionTipoVariable){
    console.log(`La variable ${variable} es de tipo ${funcionTipoVariable(variable)}`)
    resultadoponer.innerText=`La variable ${variable} es de tipo ${funcionTipoVariable(variable)}`;
}


// ejercicio 3

const form3 = document.querySelector('#form3');
const sumabtn = document.querySelector('#suma')
const restabtn = document.querySelector('#resta')
const multibtn = document.querySelector('#multiplicacion')
const divisionbtn = document.querySelector('#division')
const resultadoejercicio3 = document.querySelector('#resultado2')

sumabtn.onclick=()=>(resultadoOperacion(parseFloat(form3.numero1.value),parseFloat(form3.numero2.value),suma))
restabtn.onclick=()=>(resultadoOperacion(parseFloat(form3.numero1.value),parseFloat(form3.numero2.value),resta))
multibtn.onclick=()=>(resultadoOperacion(parseFloat(form3.numero1.value),parseFloat(form3.numero2.value),multiplicacion))
divisionbtn.onclick=()=>(resultadoOperacion(parseFloat(form3.numero1.value),parseFloat(form3.numero2.value),division))
function suma(a,b){

const resultado = a + b;
resultadoejercicio3.innerText=`Los numeros suman ${resultado}`; }

function resta(a,b){

    const resultado = a - b;
    resultadoejercicio3.innerText=`Los numeros restan ${resultado}`; } 

 function multiplicacion(a,b){

        const resultado = a * b;
        resultadoejercicio3.innerText=`Los numeros multiplican ${resultado}`; }


       
 function division(a,b){

            const resultado = a/b;
            resultadoejercicio3.innerText=`Los numeros dividen ${resultado}`;}


    function resultadoOperacion(v1,v2, functionoperacion){
        functionoperacion(v1,v2)
    }

 


    // ejercicio 4

    const form4 = document.querySelector('#form4');
    const mayusbtn = document.querySelector('#mayuscula');
    const minusbtn = document.querySelector('#minusculas');
    const resultadoejercicio4 = document.querySelector('#resultado3')
    mayusbtn.onclick=()=>(conversion(form4.mensaje3.value,pasarMayuscula));
    minusbtn.onclick=()=>(conversion(form4.mensaje3.value,pasarMinuscula));

    function pasarMayuscula(caracteres){
     console.log(caracteres.toUpperCase())
     resultadoejercicio4.innerText=` ${caracteres.toUpperCase()}`;

    }

    function pasarMinuscula(caracteres){
        console.log(caracteres.toLowerCase())
        resultadoejercicio4.innerText=` ${caracteres.toLowerCase()}`;
   
       }

       function conversion(caracter,funcionConversion){
        funcionConversion(caracter)
       }

   
     //ejercicio 5
     function mirarArray(array,funcionVerificar){
       const nuevo= funcionVerificar(array);
       console.log(nuevo)
     }

     function verificar (array){
        const nuevoArray=[];
        for (let i of array){
            if(i>=120){
                nuevoArray.push(i)
            }
            

        }
        return nuevoArray

     }

     const arrayminutos = [120,60,20,500,30,300]

     mirarArray(arrayminutos,verificar)