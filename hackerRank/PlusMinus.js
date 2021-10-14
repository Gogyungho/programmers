/*
Given an array of integers, calculate the fractions of its elements that are positive, negative, 
and are zeros. Print the decimal value of each fraction on a new line.
*/

{
    function plusMinus(arr) {
        var len = arr.length;
        var plus = (arr.filter((i)=> i > 0).length / len).toFixed(6);
        var min = (arr.filter((i)=> i < 0).length/ len).toFixed(6);
        var zero = (arr.filter((i)=> i === 0).length/ len).toFixed(6);
    
      return process.stdout.write(`${plus} \n ${min} \n ${zero}`);
    }
}