
////////////////////////////////////////////////////////////////////

{let number = Number(prompt("Digite um número"))

         if (number < 0 ){
           alert(" seu número é negativo ".concat(number));
      }
     else if(number === 0 ){
        console.log("número nulo")
      }
    else{
         console.log("seu número é positivo")
  }
   }
////////////////////////////////////////////////////////////////////
   {let number = Number(prompt("Digite um número"))

   let result = number / 2

   if(result % 2 === 0 ){
          console.log("seu numero é par")
   }
   else if(result === 0){
         console.log("numero nulo")
   }
   else {
     console.log("seu numero é impa")
   }
}
//////////////////////////////////////////////////////////////////////////////


{let nome = "João";

let nomes = ["João","Pedro","Débora"];

// nomes[3] = "Ana"; <- adiciona
nomes.push("Ana") // tambem adiciona , no final
nomes.pop(); // retira o ultimo da lista , nesse caso a Ana

nomes.unshift("Calebe")
nomes.shift()

console.log(nomes)
}
let nome1 = "frutas"
let frutas = ["maçã","Pêra","Abacate","Limão","Banana"]

frutas.shift([0])
frutas.shift([1])

frutas[5] = "Açaí"
frutas[6] = "Guarana"
frutas[7] = "fruta dragão"

console.log(frutas)


