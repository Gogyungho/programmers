/*

ROR 게임은 두 팀으로 나누어서 진행하며, 상대 팀 진영을 먼저 파괴하면 이기는 게임입니다. 따라서, 각 팀은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리합니다.

지금부터 당신은 한 팀의 팀원이 되어 게임을 진행하려고 합니다. 다음은 5 x 5 크기의 맵에, 당신의 캐릭터가 (행: 1, 열: 1) 위치에 있고, 상대 팀 진영은 (행: 5, 열: 5) 위치에 있는 경우의 예시입니다.


입출력 예
maps |	answer
[[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]] |	11
[[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]] |	-1
*/

function solution(maps){
    let xPos = [1,0,-1,0];
   let yPos = [0,1,0,-1];
   let answer = -1; // 도달하지 못하면 그대로 -1 리턴
   const q = [[0,0,1]];
   
   while(q.length != 0){
       let x=q[0][1];
       let y=q[0][0];
       let count=q[0][2];
       q.shift();
       if(y===maps.length-1 && x===maps[0].length-1){
           answer=count;
           break;
       }
       for(let i=0; i<4; i++){
           let xn = x+xPos[i];
           let yn = y+yPos[i];
            if(xn<0 || yn<0 || xn>=maps[0].length || yn>=maps.length)continue;
           if(maps[yn][xn]==2)continue;
           if(maps[yn][xn]==0)continue;
           maps[yn][xn]=2;
           q.push([yn,xn,count+1]);  
       }
   }
   return answer;
}
