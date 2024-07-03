//Pedirle al usuario que ingrese una cantidad de alumnos, para luego solicitarle las 2 notas y luego brindarle el promedio
let nota1;
let nota2;

function sumaNota(nota1,nota2){
    return nota1+nota2;
}
function promedio(){
    return (nota1+nota2)/2;
}
let cantidadAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos a promediar'))
console.log(cantidadAlumnos)
for(i=1; i <= cantidadAlumnos; i++){
    let alumno = prompt('Ingrese el nombre del alumno ' );
    console.log(`${i}: ${alumno}`);
    let numero1;
    do{
        numero1= parseInt(prompt('Ingrese la nota 1, recuerde que sea entre 1 y 10'));
    }while((isNaN(numero1) || numero1 > 11))
    nota1=numero1; 
    console.log(`${nota1}: ${alumno}`);
    let numero2;
    do{
        numero2= parseInt(prompt('Ingrese la nota2, recuerde que sea entre 1 y 10'));
    }while((isNaN(numero2) || numero2 > 11))
    nota2=numero2;
    console.log(`${nota2}: ${alumno}`);
    let sum= sumaNota(nota1,nota2);
    let prom= promedio();
    alert(`La suma es ${sum} y el promedio es ${prom} de ${alumno}`);
}
sumaNota();
promedio();


//let num1;
////let num2;
//let num3;
//let num4;
//let num5;

//if(cantidadAPromediar>0 && cantidadAPromediar<6){
//    num1= parseInt(prompt('Ingrese el primer numero: '))
//    console.log(num1)
//    num2= parseInt(prompt('Ingrese el segundo numero: '))
//    console.log(num2)
//    num3= parseInt(prompt('Ingrese el tercer numero: '))
//    console.log(num3)
//    num4= parseInt(prompt('Ingrese el cuarto numero: '))
//    console.log(num4)
 //   num5= parseInt(prompt('Ingrese el quinto numero: '))
//    console.log(num5)
//}else {
//    console.log("Por favor, elija un valor entre 1 y 5");
//    alert('Por favor, elija un valor entre 1 y 5');
//} 
//if(isNaN(numero) && numero > 5 ){
//alert ('Ingresa un número entre 1 y 4')}