
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (  matrix === 0 || matrix === undefined)
  {
    return [];
  }
 for (j = 0; j < matrix.length; j++){
   if (j % 2 != 0){
     matrix[j].reverse();
   }
 }
 return matrix.flat();
}
