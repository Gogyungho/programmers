function solution(dirs) {
    // 명령어
    const move = {
        U: [0,1],
        D: [0,-1],
        R: [1,0],
        L: [-1,0],
    };
    let array = new Set();
    let position = [0,0]; // 시작 위치

    for(let i=0; i < dirs.length; i++){
        let x = position[0] + move[dirs[i]][0];
        let y = position[1] + move[dirs[i]][1];
    if(x < -5 || x >5 || y>5 || y<-5)continue;

        array.add('' + position[0] + position[1] + x + y);
        array.add('' + x + y + position[0] + position[1]);

        position = [x, y];
    }
    return array.size / 2;
}