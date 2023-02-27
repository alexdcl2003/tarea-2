class Ejercicio{
//1) Sumar dos numeros siempre cuando el promero sea mayor al segundo
// suma(guarda la suma de los numeros),num1(primer numero),num2(segundo numero)
ejercicio1(num1,num2){
    console.warn(`*** EJERCICIOS JAVASCRIPT ***`)
    console.log(``);
    let suma=0
    if(num1>num2){
        suma=num1+num2
        console.log(`E1) ${num1} + ${num2} = ${suma}`);
    }else{
        console.log(`E1) No se puede realizar el primer número debe ser mayor`)
    }
    console.log(``);
}

// 2) Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y residuo
// suma,r,multi,divi,residuo(las operaciones individuales) num1(primer numero) num 2(segundo numero)
ejercicio2(num1,num2){
    let suma=0,r=0,multi=0,divi=0,residuo=0;
    let ops="+",opr="-",opm="*",opd="/",oprs="%" 
    suma=num1+num2
    r=num1-num2
    multi=num1*num2
    divi=num1/num2
    residuo=num1%num2
    console.warn(`E2) suma: ${num1} ${ops} ${num2} = ${suma}`)
    console.warn(`E2) resta: ${num1} ${opr} ${num2} = ${r}`)
    console.warn(`E2) multiplicación: ${num1} ${opm} ${num2} = ${multi}`)
    console.warn(`E2) división: ${num1} ${opd} ${num2} = ${divi.toFixed(2)}`)
    console.warn(`E2) residuo: ${num1} ${oprs} ${num2} = ${residuo}`)
    console.log(``);
}

// 3) Presentar el mayor de dos numeros
//num1(el primer numero),num2(segundo numero)
ejercicio3(num1,num2){
    if(num1>num2){
        console.log(`E3) El número mayor es ${num1}`)
    }else{
         if(num1>num2){
            console.log(`E3) El número mayor es ${num2}`)
        }else{
            console.log(`E3) Ambos números son iguales`)
        }
    }
    console.log(``);  
}  

// 4) Dado un nombre presentarlo
// nombre(guarda el nombre)
ejercicio4(){
    let nombre="Anita"
    console.warn(`E4) El nombre es ${nombre}`)
    console.log(``);     
}

// 5) Dado un valor de compra presentar el total considerando un 12% de iva
// iva(guarda el resultado al multiplicar por 0,12) precio(valor randomizado) total(resultado)
ejercicio5(precio){
    let iva=0,total=0
    iva=precio*0.12
    total=precio+iva
    console.log(`E5) ***** ALMACENES C1 *****`)
    console.log(`Precio por unidad: $${precio}`)
    console.log(`IVA:               $${iva}`)
    console.log(`Precio total:      $${total}`)
    console.log(``);
}

// 6) Presentar 5 veces un nombre
//nombre(guarda el nombre) cont(contador para saber cuantas veces ya se ha cumplido la orden)
ejercicio6(){
    let nombre="Luis",cont=0
    while(cont<5){
        console.warn(`E6) ${nombre}`)
        cont=cont+1
    }
    console.log(``);
}

// 7) Presentar los numeros multiplos de 3 del 3 al 21
ejercicio7(){
    let num=3
    console.warn(`***** E7) Multiplos de 3,desde el 3 hasta el 21 *****`)
    for(num=3;num<=21;num++){
        if(num%3==0){
            console.log(` El número ${num} es multiplo de 3`)
        }
    }
    console.log(``);
}

// 8) Presentar los numeros multiplos de 3 del 21 al 3
ejercicio8(){
    let num=21
    console.log(`***** E8) Multiplos de 3,desde el 21 hasta el 3 *****`)
    for(num=21;num>=3;num--){
        if(num%3==0){
            console.warn(`El numero ${num} es multiplo de 3`)
        }
    }
    console.log(``);
}

// 9) Dados dos nombres indicar si son iguales o diferentes
ejercicio9(){
    let nombre1="Iker",nombre2="iker"
    if(nombre1==nombre2){
         console.log(`E9) Los nombres ${nombre1} y ${nombre2} son iguales`)
    }else{
         console.log(`E9) Los nombres ${nombre1} y ${nombre2} no son iguales`)
    }
    console.log(``);
}

// 10) Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres
ejercicio10(){
    let numeros=[n1,n2,n3,n4,n5,n6,n7,n8,n9,n10],i=0,long=0
        console.warn(`E10) Arreglo de números`);
        console.warn(`--${numeros=[n1,n2,n3,n4,n5,n6,n7,n8,n9,n10]}--`);
        for(i=0;i<numeros.length;i++){
            long=numeros[i]            
            if(long.toString().length<5){
                console.warn(` Este número <${long}> tiene menos de 5 dígitos`);
            
            }
        }
console.log(``);
}

// 11) Dado un arreglo presentar sus elementos
ejercicio11(){
    let arreglo=["vaca","Lucía","perrito","91818", ];
    console.log(`E11) ${arreglo}`);
    console.log(``);
}

// 12) Dado un arreglo de numeros presentar los menores a 10
ejercicio12(){
    let arreglo=[1,3,5,20,65,9,4,2,1]
    for(let pos=0;pos<arreglo.length;pos=pos+1){
         if(arreglo[pos]<10){
            console.warn(`E12) El numero ${arreglo[pos]} es menor a 10`);
        }
    }
    console.log(``);
}

// 13) Dado un arreglo de numeros presentar los impares y al final la suma de los pares
ejercicio13(){
    let arre = [N1,N2,N3,N4,N5],i=0,l=0,par=0
    console.log(`E13) Números <<${arre = [N1,N2,N3,N4,N5]}>>`);
    for(i=0;i<arre.length;i++){
        l=arre[i]            
        if(l%2==0){
        par=par+l
        }else{
            console.log(`*El ${l} es impar`);
        }
    }
    console.log(`-La suma de los pares es ${par}`);
    console.log(``);
}  

// 14) Presentar el primero el medio y el ultimo valor de un arreglo
ejercicio14(){
    let arreglo=[ 5,6,7,7,8,]
    console.warn(`E14) El primer digito del arreglo es: ${arreglo[0]}`);
    let trunmit=Math.trunc(arreglo.length/2)
    console.warn(`El digito del medio es: ${arreglo[trunmit]}`);
    let long=arreglo.length
    console.warn(`El ultimo digito del arreglo es ${arreglo[long-1]}`);
    console.log(``);
}

// 15) Calcular el vuelto de un a compra dado el costo y el pago
ejercicio15(costo){
    let  vuelto=0,efectivo=30;
    vuelto=efectivo-costo
    console.log(`E15) El vuelto de su compra es: $${vuelto}`);
    console.log(``);
}

// 16) Presentar la tabla de multiplicar de cualquier numero del 1 al 12
ejercicio16(num){
    let  result=0
    console.warn(`*** E16) La tabla del numero ${num} del 1 hasta el 12 ***`)
    for(let tabla=1;tabla<=12;tabla++){
        result=num*tabla
        console.warn(`${num} * ${tabla} = ${result}`)
    }
    console.log(``);
}

// 17) Realizar la multiplicacion de dos numeros por medio de sumas sucesivas
ejercicio17(n1,n2){
    let suma=0,cont=0
    while(cont<n2){
        suma=suma+n1
        console.log(`E17) ${suma-n1} + ${n1} es igual a: ${suma}`);
        cont=cont+1
    }
    console.log(`La multiplicacion de ${n1} * ${n2} mediante sumas sucesivas es: ${suma}`)
    console.log(``);
}

// 18)Realizar la division de dos numeros por medio de restas sucesivas
ejercicio18(){
    let n1=18,n2=6
    let resta=n1,acu=0
    while(resta>=n2){
        resta=resta-n2
        console.warn(`E18) ${resta+n2} - ${n2} = ${resta}`)
        acu=acu+1
    }
    console.warn(`La division entre ${n1} y ${n2} es = ${acu}`)
    console.log(``);
}

// 19)Calcular el factorial de un numero
ejercicio19(){
    let num=Math.floor(Math.random()*10)
    let ifact=0,f=1
    for(ifact=1;ifact<=num;ifact++){
        f=f*ifact;
    }
    console.log(`E19) El factorial del numero ${num} es: ${f}`);
    console.log(``);
}

// 20)Calcular el exponente de un numero
ejercicio20(){
    let num=Math.floor(Math.random()*10),exp=Math.floor(Math.random()*10)
    let c=0,mult=1
    while(c<exp){
        mult=mult*num
        c=c+1
    }
    console.warn(`E20) El numero ${num}^${exp} = ${mult}`)
    console.log(``);
}  

// 21)Calcular la serie de fibonacci dado un numero
ejercicio21(){
    let a=0,b=1,c=1,cont=3,n=8,x=0
    console.log(`E21)`)
    console.log(x)
    console.log(a,b,c)
    while (cont < n){
        a=b;b=c;c=a+b
        console.log(c)
        cont=cont+1
    }
    console.log(``);
}

// 22) Dado un numero invertirlo
ejercicio22(){
    let num=56734,digito=0
    console.warn(`E22) Numero invertido de ${num}`)
    while(num>0){
        digito=Math.floor(num%10)
        num=Math.floor(num/10)
        console.warn(digito)
    }
    console.log(``);
}

// 23) Presentar los divisores de un numero
ejercicio23(){
    let num=Math.floor(Math.random()*50)
    console.log(`E23) Los divisores de ${num}`);
    for (let pos=0;pos<=num;pos++){
        if(num%pos==0){
            console.log(`${pos} es divisor de ${num}`);
        }
    }
    console.log(``);
}

// 24) Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los 
// divisores incluidos el 1 y excluido el propio numero dada igual al numero)
ejercicio24(){
    let num=Math.floor(Math.random()*10)
    let acu=0
    for(let pos=0;pos<num;pos++){
        if(num%pos==0){
            acu=acu+pos
            console.warn(`E24) ${pos} es divisor de ${num}`);
        }
    }
    if(acu==num){
        console.warn(`E24) El numero ${num} es perfecto`); 
    }else{
        console.warn(`E24) El numero ${num} no es perfecto`)
    }
    console.log(``);
}

// 25) Verfificar si un numero es primo o no(Primo cuando solo es divisible 
// para 1 y el propio numero, es decir no tenga divisores)
ejercicio25(){
    let num=Math.floor(Math.random()*10)
    let acu=0
    for(let pos=0;pos<=num;pos++){
        if(num%pos==0){
            acu=acu+1
        }
    }
    if(acu<=2){
        console.log(`E25) ${num} es primo`)
    }else{
        console.log(`E25) ${num} no es primo`);
    }
    console.log(``);
}

}
let deber=new Ejercicio
deber.ejercicio1(num1=Math.floor(Math.random()*100),num2=Math.floor(Math.random()*100))
deber.ejercicio2(num1=Math.floor(Math.random()*10),num2=Math.floor(Math.random()*10))
deber.ejercicio3(num1=Math.floor(Math.random()*10),num2=Math.floor(Math.random()*10))
deber.ejercicio4()
deber.ejercicio5(precio=Math.floor(Math.random()*100))
deber.ejercicio6()
deber.ejercicio7()
deber.ejercicio8()
deber.ejercicio9()
deber.ejercicio10(n1=Math.floor(Math.random()*100000),n2=Math.floor(Math.random()*100000),
n3=Math.floor(Math.random()*100000),n4=Math.floor(Math.random()*100000),
n5=Math.floor(Math.random()*100000),n6=Math.floor(Math.random()*100000),
n7=Math.floor(Math.random()*100000),n8=Math.floor(Math.random()*100000),
n9=Math.floor(Math.random()*100000),n10=Math.floor(Math.random()*100000),
)
deber.ejercicio11()
deber.ejercicio12()
deber.ejercicio13(N1=Math.floor(Math.random()*100),N2=Math.floor(Math.random()*100),N3=Math.floor(Math.random()*100),N4=Math.floor(Math.random()*100),N5=Math.floor(Math.random()*100))
deber.ejercicio14()
deber.ejercicio15(costo=Math.floor(Math.random()*20))
deber.ejercicio16(num=Math.floor(Math.random()*12))
deber.ejercicio17(n1=Math.floor(Math.random()*10),n2=Math.floor(Math.random()*10))
deber.ejercicio18()
deber.ejercicio19()
deber.ejercicio20()
deber.ejercicio21()
deber.ejercicio22()
deber.ejercicio23()
deber.ejercicio24()
deber.ejercicio25()