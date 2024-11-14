function saludar(){
    console.log('Hola cacorro');
    alert("Hola cacorro'!");
}

//ALGORITMO QUE REALICE UNA SUMA ENTRE 2 VALORES INGRESADOS POR EL USUARIO

function suma(){
    //1 declarar las variables necesarias para la ejecucion del algoritmo
    let n1 = 0;
    let n2 = 0;
    let gato = 0;
    //2 solicitar y capturar los valores ingresado por el usuario
    n1 = parseInt(prompt('Porfavor ingrese el primer valor a sumar'))
    n2 = parseInt(prompt('Porfavor ingrese el segundo valor a sumar'))
    //3 realizar el procedimiento
    gato = n1 + n2
    //4 imprimir el resultado en pantalla al usuario
    console.log('El resultado de la suma es ' + gato)
    alert('El resultado de la suma es ' + gato)
}

//Algoritmo que realice una suma, resta multiplicacion, division entre 2 valores 
//ingresados por el usuario

function opBasicas(){
    let var1 =0;
    let var2 =0;
    let sum =0;
    let res =0;
    let div =0;
    let mul =0;
    var1 = parseInt(prompt('Porfavor ingrese el primer valor a sumar, restar, dividir y multiplicar'))
    var2 = parseInt(prompt('Porfavor ingrese el segundo valor a sumar, restar, dividir y multiplicar con el primer numero'))
    sum = var1 + var2
    res = var1 - var2
    div = var1 / var2
    mul = var1 * var2
    console.log('Los resultados son: de la suma es '+ sum + ' la resta es ' + res + ' la division' + div + ' por ultimo la multiplicacion es ' + mul)
    alert ('Los resultados son: de la suma es '+ sum + ' la resta es ' + res + ' la division' + div + ' por ultimo la multiplicacion es ' + mul)
}

//Realizar un algoritmo que determine el cuadrado por un numero ingresado por el usuario
function cuadrado(){
    let num1 =0
    let resul =0
    num1 = parseInt(prompt('Ingrese el numero del que quiere saber su cuadrado'))
    resul = num1 * num1
    console.log('El cuadrado de su numero es: ' + resul)
    alert ('El cuadrado de su numero es: ' + resul)
}

//Realizar un algoritmo que determine el area de un triangulo apartir de base*altura ingresada por el usuario
function triangulo(){
    let base =0
    let altura =0
    let resultado =0
    base = parseInt(prompt('Ingrese la base del triangulo'))
    altura = parseInt(prompt('Ingrese la altura del triangulo'))
    resultado = (base * altura)/2
    console.log('El area de su triangulo con base ' + base + ' y altura ' +  altura + ' es: ' + resultado)
    alert('El area de su triangulo con base ' + base + ' y altura ' +  altura + ' es: ' + resultado)
}

//Realizar un algoritmo que determine la medida en kilometros metros y centimetros de un valor en pulgadas ingresado por el usuario
function conversion(){
    let nume1 =0
    let pulakil =2.54 * 10**-5
    let met =0
    let cen =0
    let pul =0
    let resultadoc =0
    nume1 = parseInt(prompt('Ingrese su valor (en pulgadas) el cual sera trasnformado en: kilometros metros y centimetros'))

    resultadoc= 

}

//