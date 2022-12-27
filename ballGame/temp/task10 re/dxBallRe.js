let gameC = document.getElementById('gameArea');
let rightPress=false;
let leftPress=false;
let min = 0, s1 = 0 , s2= 0 , timeInter;
let time= `0${min}:${s1}${s2}`;
let life=3;
let score = 0, cScore = 10;
let scoreA = [0,0,0,0], timeA = ['','','',''];
let playerName, overAllScore;
let highScoreV = [0,0];//highScoreValue
let highScoreO = ['',''];//highScoreOutput
let level = 1;let bricks=[];let txv =0;//variable for mouse move
let speed=[0,8,6,4]; let pp=0,gp=0;//variable for pause and play
let keyMoveSelected=false, mouseSelected=false;
const paddleWidth=100;
const paddleHeight=20, paddleBottom = 20;
let ballRadius=10;
const paddle = {
    x: parseFloat(gameC.style.width)/2 - paddleWidth/2,
    y: parseFloat(gameC.style.height) - paddleHeight - paddleBottom,
    width: paddleWidth,
    height: paddleHeight,
    cx: 5
}
const ball = {
    radius: ballRadius,
    speed : 3,
    cx:3,
    cy:-3,
    x: parseFloat(gameC.style.width)/2-ballRadius,
    y: paddle.y - ballRadius*2
}
const brick = {
    width: 55,
    height: 10,
    row : 5,
    column : 5,
    padT: 10,
    padL: 35,
    padR: 35,
    marginT: 25,
    color:"#000000"
}
function draw(){
    gameC.innerHTML='';
    drawBall();
    drawPaddle();
    drawBricks();
}
function update(){
    ballMove();
    ballCollision();
    paddleMove();
    ballPaddle();
    ballBrick();
    levelUp();
}
function run(){
   draw();
   update();
}
function setBricks(){
    for(let r=0;r<brick.row;r++){
        bricks[r]=[];
        for(let c=0;c<brick.column;c++){
            bricks[r][c]={
                x: c*(brick.width+brick.padL)+brick.padL,
                y: r*(brick.height+brick.padT)+brick.padT+brick.marginT,
                activityStatus:true
            }
        }
    }
}; setBricks();
function drawBricks(){
    for(let r=0;r<brick.row;r++){
        for(let c=0;c<brick.column;c++){
            let tV= bricks[r][c].activityStatus ;
            let tx= bricks[r][c].x;
            let ty= bricks[r][c].y;
            let tw= brick.width;
            let th= brick.height;
            if(tV){
                let tdiv = document.createElement("div");
                tdiv.setAttribute('class',"brick");
                tdiv.setAttribute('id',`b${r}${c}`)
                tdiv.style.width = `${tw}px`;
                tdiv.style.height = `${th}px`;
                tdiv.style.top= `${ty}px`;
                tdiv.style.left= `${tx}px`;
                gameC.appendChild(tdiv);
            }
        }
    }
}
function drawPaddle(){
    let tdiv = document.createElement("div");
    tdiv.setAttribute('class',"paddle");
    tdiv.setAttribute('id',`paddle`)
    tdiv.style.width = `${paddle.width}px`;
    tdiv.style.height = `${paddle.height}px`;
    tdiv.style.top= `${paddle.y}px`;
    tdiv.style.left= `${paddle.x}px`;
    gameC.appendChild(tdiv);
}
function paddleMove(){
    if(leftPress&&paddle.x>0){paddle.x-=paddle.cx}
    if(rightPress&&paddle.x<parseFloat(gameC.style.width)-paddle.width){paddle.x+=paddle.cx}
}
function drawBall(){
    let tdiv = document.createElement("div");
    tdiv.setAttribute('class',"ball");
    tdiv.setAttribute('id',`ball`);
    tdiv.style.width = `${ball.radius*2}px`;
    tdiv.style.height = `${ball.radius*2}px`;
    tdiv.style.top= `${ball.y}px`;
    tdiv.style.left= `${ball.x}px`;
    tdiv.style.borderRadius= `${ball.radius}px`;
    gameC.appendChild(tdiv);
}
function ballMove(){
    ball.x += ball.cx;
    ball.y += ball.cy;
}
function ballCollision (){
    if(ball.x>parseFloat(gameC.style.width)-ball.radius*2){
        ball.cx=-ball.cx;
    }
    if(ball.x<=0){
        ball.cx=-ball.cx;
    }
    if(ball.y<=0){
        ball.cy=-ball.cy;
    }
    if(ball.y+ballRadius*2> parseFloat(gameC.style.height)){
        life--;
        if(life<=0){
            gameOver();
            return;
            }
        ballReset();
    }
}
function ballPaddle() {
    if(ball.x < paddle.x+paddle.width && ball.x+ballRadius > paddle.x &&paddle.y <
        paddle.y+paddle.height && ball.y+ball.radius> paddle.y)
        {
            let collisionPoint = ball.x+ ball.radius - (paddle.x + paddle.width/2)
            collisionPoint = collisionPoint/(paddle.width/2);
            if(collisionPoint>1){collisionPoint=1};
            let angel = collisionPoint * Math.PI/3;
            ball.cx = ball.speed * Math.sin(angel);
            ball.cy =-ball.speed * Math.cos(angel);
            cScore = 10;
        }
}
function ballReset(){
    ball.y = paddle.y-ball.radius*2;
    ball.x = parseFloat(gameC.style.width)/2;
    ball.cx = 3*(Math.random() * 2 -1 );
    ball.cy = -3;
    paddle.x = parseFloat(gameC.style.width)/2-paddle.width/2;
    cScore=10;
}
function ballBrick(){
    for(let r=0;r<brick.row;r++){
        for(let c=0;c<brick.column;c++){
            let b = bricks[r][c];
            if(ball.x+ball.radius*2>b.x&&ball.x<b.x+brick.width&&
                ball.y+ballRadius*2>b.y&& ball.y<b.y+brick.height&&b.activityStatus){
                ball.cy=-ball.cy;
                b.activityStatus=false;
                score += cScore;
                cScore += 10;
            }
        }
    }
}
function timerF(){
    if(s2<=9){s2++}
    if(s2==10&&s1<=5){s2=0;s1++}
    if(s1==6&&s2==0){s1=0;s2=0;min++}
    if(min<10){time = `0${min}:${s1}${s2}`}
    else{time = `${min}:${s1}${s2}`};
}
function timerStart(){
    timeInter = setInterval(timerF,1000);
}
function timerPause(){
    clearInterval(timeInter);
}
function timerReset(){
    clearInterval(timeInter);
    min=0;s1=0;s2=0;
    time= `0${min}:${s1}${s2}`;
}

function gameOver(){
    timerPause();
    clearInterval(inter);gp=0;
    gameC.innerHTML='';
    let tdiv = document.createElement("h2");
    tdiv.innerText="GAME OVER";
    tdiv.style.color='#ff0000';
    tdiv.style.position="absolute";
    tdiv.style.top= `${parseFloat(gameC.style.height)/2-60}px`;
    tdiv.style.left= `${parseFloat(gameC.style.width)/2-70}px`;
    gameC.appendChild(tdiv);
    // document.getElementById("gameContainerRetryButton").style.display="block";
    // document.getElementById("gameContainerNewPlayerButton").style.display="block";
}
function startGame(){
    inter = setInterval(run,speed[level]);gp=1; timerStart();
    // document.getElementById("gameContainerStartButton").style.display="none";
}startGame();
document.addEventListener('keydown',function(e){if(e.keyCode==32){gamePauseResume()}})
function gamePauseResume(){
    if(gp==1){
        switch(pp){
            case 0 : {
                clearInterval(inter);
                timerPause();
                // document.getElementById("gameContainerMainButton").style.display="block";
                let tdiv = document.createElement("h2");
                tdiv.innerText="GAME PAUSED";
                tdiv.style.color='#0000ff';
                tdiv.style.position="absolute";
                tdiv.style.top= `${parseFloat(gameC.style.height)/2-60}px`;
                tdiv.style.left= `${parseFloat(gameC.style.width)/2-90}px`;
                gameC.appendChild(tdiv);
                pp=1;break;
            }
            case 1: {
                timerStart();
                inter = setInterval(run,speed[level]);
                // document.getElementById("gameContainerMainButton").style.display="none";
                pp=0;break;
            }
        }
    }
}
function levelUp(){
    let tempLevelV = 0; 
    for(let r=0;r<brick.row;r++){
        for(let c=0;c<brick.column;c++){
            let b = bricks[r][c];
            if(b.activityStatus){tempLevelV++}
        }
    }
    if(tempLevelV==0 && level==3){
        gameC.innerHTML='';
        clearInterval(inter);gp=0;
        timeA[level]= time;
        scoreA[level]=score;
        overAllScore = scoreA[1]+scoreA[2]+scoreA[3];
        let tdiv = document.createElement("h2");
        tdiv.innerText=`Overall Score: ${overAllScore}`;
        tdiv.style.color='#000000';
        tdiv.style.position="absolute";
        tdiv.style.top= `${parseFloat(gameC.style.height)/2-80}px`;
        tdiv.style.left= `155px`;
        gameC.appendChild(tdiv);
        // ctx.fillText(`Overall Score: ${overAllScore}`, 135, gameCvs.height/2-30);
        tdiv = document.createElement("h2");
        tdiv.innerText="You WON";
        tdiv.style.color='#000000';
        tdiv.style.position="absolute";
        tdiv.style.top= `${parseFloat(gameC.style.height)/2-110}px`;
        tdiv.style.left= `189px`;
        gameC.appendChild(tdiv);
        // ctx.fillText("You WON", 189, gameCvs.height/2-60);
        // if(playerName.value !== ""){
        //     tdiv = document.createElement("h2");
        //     tdiv.innerText=`${playerName.value}!`;
        //     tdiv.style.color='#000000';
        //     tdiv.style.position="absolute";
        //     tdiv.style.top= `${parseFloat(gameC.style.height)/2-140}px`;
        //     tdiv.style.left= `${parseFloat(gameC.style.width)/2-playerName.value.length*7}px`;
        //     gameC.appendChild(tdiv);
        //     ctx.fillText(`${playerName.value}!`, gameCvs.width/2-playerName.value.length*7, gameCvs.height/2-90);
        // }
        // document.getElementById("gameContainerMainButton").style.display="block";
        // document.getElementById("gameContainerNewPlayerButton").style.display="block";
    }
    else if(tempLevelV==0 && level<3){
        scoreA[level]=score-scoreA[level-1];
        timeA[level]=time;
        timerReset();
        timerStart();
        level++;
        life=3;
        clearInterval(inter);
        ballReset();
        setBricks();
        inter = setInterval(run,speed[level]);
    }
}
function mouseMove(){
    mouseSelected=true;
    // document.getElementById("controlKeyButton").style.border="1px solid #000000";
    // document.getElementById("controlMouseButton").style.border="2px solid #00ff00";
    if(keyMoveSelected){
        document.removeEventListener('keydown',keyControl1);
        document.removeEventListener('keyup',keyControl2);
        keyMoveSelected=false;
    }
    document.addEventListener('mousemove',mouseControl);
}
function mouseControl(e){
    if(txv>e.x){leftPress=true;}else{leftPress=false;}
    if(txv<e.x){rightPress=true;}else{rightPress=false;}
    if(txv==e.x){leftPress=false;rightPress=false;}
    txv= e.x;
}
function keyMove(){
    // document.getElementById("controlMouseButton").style.border="1px solid #000000";
    // document.getElementById("controlKeyButton").style.border="2px solid #00ff00";
    if(mouseSelected){document.removeEventListener('mousemove',mouseControl);
    mouseSelected=false;}
    keyMoveSelected=true;
    document.addEventListener('keydown',keyControl1)
    document.addEventListener('keyup',keyControl2)
}
function keyControl1(e){
    if(e.key=="ArrowLeft"){
        leftPress=true;
    }
    if(e.key=="ArrowRight"){
        rightPress=true;
    }
}
function keyControl2(e){
    if(e.key=="ArrowLeft"){
        leftPress=false;
    }
    if(e.key=="ArrowRight"){
        rightPress=false;
    }
}