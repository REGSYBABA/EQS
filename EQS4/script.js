let arraay = [1,2,3]
console.log(arraay.length)

function reverseArray(array){
     let val = []
      for (let i = array.length - 1; i >= 0; i--){
        val.push(array[i])
      }
      return val
 }
 
  
console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];

function reverseArrayInPlace(array){
     for (let i = 0; i < Math.floor(array.length / 2); i++){
        let poop = array[i]
        array[i] = array[array.length - 1 -i]
        array[array.length - 1 -i] = poop
      }
      return array
}

reverseArrayInPlace(arrayValue);  

console.log(arrayValue)