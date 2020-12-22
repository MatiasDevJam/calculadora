let calculadora = {
    sumar : function(numA, numB){
        return numA + numB},
    restar : function(numA, numB){
        return numA - numB},
    dividir : function(numA, numB){
     if(numA !=0 && numB!==0){
         return numA / numB
     } else{
         let mensaje = 'Error';
         return mensaje
     }
    },
    multiplicar : function(numA, numB){
        return numA * numB}
    }

    console.log(calculadora.sumar (2, 3));
    console.log(calculadora.restar (10, 3));
    console.log(calculadora.dividir (20, 0));
    console.log(calculadora.multiplicar (2, 3));
