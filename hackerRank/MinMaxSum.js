/*
Given five positive integers, find the minimum and maximum values 
that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line 
of two space-separated long integers.

For example, arr = [1, 3, 5, 7, 9]. 
Our minimum sum is 1 + 3 + 5 + 7 = 16 and our maximum sum is  3 + 5 + 7 + 9 = 24. We would print

*/

{
    function miniMaxSum(arr) {
        var sum = arr.reduce((a,b)=> {return a+b});
        var min = sum - Math.max(...arr);
        var max = sum - Math.min(...arr);
      
      return process.stdout.write(min+' '+max);
    };
}