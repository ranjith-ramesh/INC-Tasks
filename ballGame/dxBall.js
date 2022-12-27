let gameC;
let min = 0, s1 = 0 , s2= 0 , timeInter;
let time= `0${min}:${s1}${s2}`;
const paddleWidth=100;let inter;
const paddleHeight=20, paddleBottom = 20;
let leftPress=false, rightPress= false, life=3;
const ballRadius=10;let score = 0, cScore = 10;
let scoreA = [0,0,0,0], timeA = ['','','',''];
let playerName, overAllScore;
let highScoreV = [0,0];//highScoreValue
let highScoreO = ['',''];//highScoreOutput
let level = 1;let bricks=[];let txv =0;//variable for mouse move
let speed=[0,6,4,3]; let pp=0,gp=0;//variable for pause and play & Game Playing!
document.addEventListener('keydown',function(e){if(e.keyCode==32){gamePauseResume()}})
let keyMoveSelected=true, mouseSelected=false;
let paddle, ball, brick;
function loader(){
    gameC = document.getElementById('gameArea');
    paddle = {
        x: parseFloat(gameC.style.width)/2 - paddleWidth/2,
        y: parseFloat(gameC.style.height) - paddleHeight - paddleBottom,
        width: paddleWidth,
        height: paddleHeight,
        cx: 5
    }
    ball = {
        radius: ballRadius,
        speed : 3,
        cx:3,
        cy:-3,
        x: parseFloat(gameC.style.width)/2-ballRadius,
        y: paddle.y - ballRadius*2
    }
    brick = {
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
}
function nameContinue(){
    document.getElementById("gameContainer").style.display="none";
    document.getElementById("nameInputContainer").style.display="none";
    document.getElementById("menuContainer").style.display='block';
    playerName = document.getElementById("playerName");keyMove();
    document.getElementById("playerGreet").innerText=`Hello ${playerName.value}!`;
}
function menuPlayGame(){
    document.getElementById("menuContainer").style.display="none";
    document.getElementById("gameContainer").style.display="block";
    document.getElementById("gameContainerStartButton").style.display="block";
    life =3;pp=0;
    score = 0;level = 1; setBricks();
    ballReset();
}
function settings(){
    document.getElementById("menuContainer").style.display="none";
    document.getElementById("settingContainer").style.display="block";
}
function settingControl(){
    document.getElementById("controlMenu").style.display = "block";
}
function mouseMove(){
    mouseSelected=true;
    document.getElementById("controlKeyButton").style.border="1px solid #000000";
    document.getElementById("controlMouseButton").style.border="2px solid #00ff00";
    if(keyMoveSelected){
        document.removeEventListener('keydown',keyControl1);
        document.removeEventListener('keyup',keyControl2);
        keyMoveSelected=false;
    }
    document.addEventListener('mousemove',mouseControl);
}
function keyMove(){
    document.getElementById("controlMouseButton").style.border="1px solid #000000";
    document.getElementById("controlKeyButton").style.border="2px solid #00ff00";
    if(mouseSelected){document.removeEventListener('mousemove',mouseControl);
    mouseSelected=false;}
    keyMoveSelected=true;
    document.addEventListener('keydown',keyControl1)
    document.addEventListener('keyup',keyControl2)
}
function mouseControl(e){
    if(txv>e.x){leftPress=true;}else{leftPress=false;}
    if(txv<e.x){rightPress=true;}else{rightPress=false;}
    if(txv==e.x){leftPress=false;rightPress=false;}
    txv= e.x;
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
function controlDone(){
    document.getElementById("controlMenu").style.display = "none";
    document.getElementById("menuContainer").style.display="block";
    document.getElementById("settingContainer").style.display="none";
}
function newPlayer(){
    dispDetailsC();gp=0;pp=0;timerReset();
    gameC.innerHTML='';
    document.getElementById("gameContainerMainButton").style.display="none";
    document.getElementById("gameContainerRetryButton").style.display="none";
    document.getElementById("gameContainerNewPlayerButton").style.display="none";
    document.getElementById("gameContainer").style.display="none";
    document.getElementById("nameInputContainer").style.display="block";
    document.getElementById("menuContainer").style.display='none';
}
function highScore(){
    document.getElementById("menuContainer").style.display="none";
    document.getElementById("highScoreContainer").style.display="block";
}
function highScoreClose(){
    document.getElementById("menuContainer").style.display="block";
    document.getElementById("highScoreContainer").style.display="none";
}
function highScoreSet(){
    if(mouseSelected){
        if(highScoreV[1]<score){
            highScoreV[1]=score;
            if(playerName.value!=''){
highScoreO[1]=
`Player : ${playerName.value}
Level : ${level}
Score : ${score}`
            }else{
highScoreO[1]=
`Unnamed Player
Level : ${level}
Score : ${score}`
            }
        }
    }
    if(keyMoveSelected){
        if(highScoreV[0]<score){
            highScoreV[0]=score;
            if(playerName.value!=''){
highScoreO[0]=
`Player : ${playerName.value}
Level : ${level}
Score : ${score}`
            }else{
highScoreO[0]=
`Unnamed Player
Level : ${level}
Score : ${score}`
            }
        }
    }
document.getElementById("highScore0").innerText= highScoreO[0];
document.getElementById("highScore1").innerText= highScoreO[1];
}
function cdOpen(){
    document.getElementById("menuContainer").style.display="none";
    document.getElementById("cdContainer").style.display="block";
}
function cdClose(){
    document.getElementById("menuContainer").style.display="block";
    document.getElementById("cdContainer").style.display="none";
}
//gameCodes
function run (){
    draw();
    update();
}
function draw(){
    gameC.innerHTML='';
    drawBall();
    drawPaddle();
    drawBricks();
}
function update(){
    paddleMove();
    ballMove();
    dispDetails();
    ballCollision();
    ballPaddle();
    ballBrick();
    levelUp();
    highScoreSet();
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
    if(ball.x < paddle.x+paddle.width && ball.x+ballRadius > paddle.x && (ball.y+ballRadius*2) <
        paddle.y+paddle.height && ball.y+ballRadius > paddle.y)
        {
            let collisionPoint = ball.x+ ball.radius - (paddle.x + paddle.width/2)
            collisionPoint = collisionPoint/(paddle.width/2);
            if(collisionPoint>1){collisionPoint=1}
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
};
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
        scoreA[level]=score-scoreA[1]-scoreA[2];
        overAllScore = scoreA[1]+scoreA[2]+scoreA[3];
        let tdiv = document.createElement("h2");
        tdiv.innerText=`Overall Score: ${overAllScore}`;
        tdiv.style.color='#000000';
        tdiv.style.position="absolute";
        tdiv.style.top= `${parseFloat(gameC.style.height)/2-80}px`;
        tdiv.style.left= `155px`;
        gameC.appendChild(tdiv);
        tdiv = document.createElement("h2");
        tdiv.innerText="You WON";
        tdiv.style.color='#000000';
        tdiv.style.position="absolute";
        tdiv.style.top= `${parseFloat(gameC.style.height)/2-110}px`;
        tdiv.style.left= `195px`;
        gameC.appendChild(tdiv);
        if(playerName.value !== ""){
            tdiv = document.createElement("h2");
            tdiv.innerText=`${playerName.value.toUpperCase()}!`;
            tdiv.style.color='#000000';
            tdiv.style.position="absolute";
            tdiv.style.top= `${parseFloat(gameC.style.height)/2-140}px`;
            tdiv.style.left= `${parseFloat(gameC.style.width)/2-playerName.value.length*7-6}px`;
            gameC.appendChild(tdiv);
        }
        document.getElementById("gameContainerMainButton").style.display="block";
        document.getElementById("gameContainerNewPlayerButton").style.display="block";
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
function startGame(){
    inter = setInterval(run,speed[level]);gp=1; timerStart(); setBricks();
    document.getElementById("gameContainerStartButton").style.display="none";
}
function dispDetails(){
    document.getElementById("scoreT").innerHTML=`SCORE: ${score}`;
    document.getElementById("lifeT").innerHTML=`LIFE: ${life}`;
    document.getElementById("levelT").innerHTML=`LEVEL: ${level}`;
    document.getElementById("timerT").innerHTML=`TIME: ${time}`;
    if(playerName.value !== ""){
        document.getElementById("playerNameT").innerHTML=`Player: ${playerName.value}`;
    }
    if(level>=2){
        document.getElementById("level1ST").innerHTML=`LEVEL1 SCORE: ${scoreA[1]} [${timeA[1]}]`;
    }
    if(level==3){
        document.getElementById("level2ST").innerHTML=`LEVEL2 SCORE: ${scoreA[2]} [${timeA[2]}]`;
    }
}
function dispDetailsC(){
    document.getElementById("scoreT").innerHTML='SCORE:';
    document.getElementById("lifeT").innerHTML='LIFE:';
    document.getElementById("timerT").innerHTML='TIME:';
    document.getElementById("levelT").innerHTML='LEVEL:';
    document.getElementById("playerNameT").innerHTML='';
    document.getElementById("level1ST").innerHTML='';
    document.getElementById("level2ST").innerHTML='';
}
function gameOver(){
    timerPause();
    clearInterval(inter);gp=0;
    gameC.innerHTML='';
    let tdiv = document.createElement("h2");
    tdiv.innerText="GAME OVER";
    tdiv.style.color='#ff0000';
    tdiv.style.position="absolute";
    tdiv.style.top= `${parseFloat(gameC.style.height)/2-90}px`;
    tdiv.style.left= `${parseFloat(gameC.style.width)/2-75}px`;
    gameC.appendChild(tdiv);
    document.getElementById("gameContainerRetryButton").style.display="block";
    document.getElementById("gameContainerNewPlayerButton").style.display="block";
}
function gameOverRetry(){
    document.getElementById("gameContainerNewPlayerButton").style.display="none";
    document.getElementById("gameContainerRetryButton").style.display="none";
    ballReset();
    setBricks();
    if(level==1){score=scoreA[level-1]}
    else{score=scoreA[level-1]+scoreA[level-2];}
    life=3;gp=1;
    timerStart();
    inter = setInterval(run,speed[level]);
}
function mainMenu(){
    document.getElementById("gameContainerMainButton").style.display="none";
    document.getElementById("gameContainerNewPlayerButton").style.display="none";
    document.getElementById("gameContainer").style.display="none";
    document.getElementById("nameInputContainer").style.display="none";
    document.getElementById("menuContainer").style.display='block';
    playerName = document.getElementById("playerName");
    document.getElementById("playerGreet").innerText=`Main Menu`;
    dispDetailsC();pp=0;gp=0;timerReset();
    gameC.innerHTML='';
}
function gamePauseResume(){
    if(gp==1){
        switch(pp){
            case 0 : {
                clearInterval(inter);
                timerPause();
                document.getElementById("gameContainerMainButton").style.display="block";
                let tdiv = document.createElement("h2");
                tdiv.innerText="GAME PAUSED";
                tdiv.style.color='#0000ff';
                tdiv.style.position="absolute";
                tdiv.style.top= `${parseFloat(gameC.style.height)/2-90}px`;
                tdiv.style.left= `${parseFloat(gameC.style.width)/2-90}px`;
                gameC.appendChild(tdiv);
                pp=1;break;
            }
            case 1: {
                timerStart();
                inter = setInterval(run,speed[level]);
                document.getElementById("gameContainerMainButton").style.display="none";
                pp=0;break;
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