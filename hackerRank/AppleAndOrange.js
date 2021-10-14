/*
Task
Sam's house has an apple tree and an orange tree that yield an abundance of fruit. 
In the diagram below, the red region denotes his house, where s is the start point, 
and t is the endpoint. The apple tree is to the left of his house, 
and the orange tree is to its right. 
You can assume the trees are located on a single point, 
where the apple tree is at point a, and the orange tree is at point b.

When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. 
A negative value of d means the fruit fell  units to the tree's left, 
and a positive value of d means it falls d units to the tree's right.
Given the value of d for m apples and n oranges, 
determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s, t] )?
*/

{
    function countApplesAndOranges(s, t, a, b, apples, oranges) {
        let appleCount = 0;
        let orangesCount = 0;
        
        for(let i=0; i<=apples.length; i++){
            let apple = apples[i]+a;
            if(apple>=s && apple<=t)
                appleCount++;
        }
        for(let j=0; j<=oranges.length; j++){
            let orange = oranges[j]+b;
            if(orange>=s && orange<=t){
                orangesCount++;
            }
        }
        console.log(appleCount);
        console.log(orangesCount);
    }
}