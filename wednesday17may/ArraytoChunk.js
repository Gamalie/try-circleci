// let empty = []
// pos =0
// function arrayToChunk(Array,chunk){
//     for (let a=0; a<=Array.length;a++){
//         for(let c=0;c<=chunk.length;c++){
//         empty.push(Array.slice(pos,pos+chunk))
//         pos += chunk
//         }
//         return empty
//     }
// }
// console.log(arrayToChunk(([1,3,4,6],3)))



// function chunkArray(arr, size) {
//     const chunkedArr = [];
//     let index = 0;
  
//     while (index < arr.length) {
//       chunkedArr.push(arr.slice(index, index + size));
//       index += size;
//     }
  
//     return chunkedArr;
//   }

//   console.log(chunkArray([1,2,4,5],2)



// DEBUGGING | LOGGING

const debug = console.log;

class ArrayHandler {

// METHOD TO DIVIDE ARRAY

static divvyArray(arr, CHUNK_SIZE) {

for (let i = 0; i < arr.length-1; i++) {

if (i == CHUNK_SIZE) {

let temp = arr.splice(0, (arr[CHUNK_SIZE]));

return [temp, arr];

}

}

}

}

debug(ArrayHandler.divvyArray([1, 2, 3, 4, 5, 6, 7, 8], 3));