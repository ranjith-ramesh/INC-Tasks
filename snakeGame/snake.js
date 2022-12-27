let snake = [{x:15,y:15},{x:14,y:15}];let inter;let ffTrue=false;let puAte=0;
let currentDir="x", dirC = {x:1,y:0}; let splFoodInter; let foodAte = 0,fullFood = [],puf4TimeOut;
let min = 0, s1 = 0 , s2= 0 ;let gameTimerV, timeInSeconds = 0;let gp, pp;let interSpeed=90; let splFoodTimeOut;
let time= `0${min}:${s1}${s2}`;let splFoodTrue = false;let puTrue=false, puMovingDir=0, hvDVariable=Math.floor(Math.random()*2-1);
let cScore = 10 ,score = 0;let foodPoint = randomPos(), splFoodPos = randomPos(), mpuPos = randomPos();
let highScoreA=[0,0,0]; let iV = false;puCdTrue=false;
function nameContinue(){
    document.getElementById("gameContainer").style.display="none";
    document.getElementById("nameInputContainer").style.display="none";
    document.getElementById("menuContainer").style.display='block';
    playerName = document.getElementById("playerName");
    document.getElementById("playerGreet").innerText=`Hello ${playerName.value}!`;
}
function menuPlayGame(){
    document.getElementById("menuContainer").style.display="none";
    document.getElementById("gameContainer").style.display="block";
    document.getElementById("gameContainerStartButton").style.display="block";
    pp=0; score = 0;snake = [{x:15,y:15},{x:14,y:15}];
    let temp = document.getElementById('tempMSG');
    if(temp!=null){temp.parentElement.removeChild(temp)}
}
function highScore(){
    document.getElementById("menuContainer").style.display="none";
    document.getElementById("highScoreContainer").style.display="block";
}
function highScoreClose(){
    document.getElementById("menuContainer").style.display="block";
    document.getElementById("highScoreContainer").style.display="none";
}
function cdOpen(){
    document.getElementById("menuContainer").style.display="none";
    document.getElementById("cdContainer").style.display="block";
}
function cdClose(){
    document.getElementById("menuContainer").style.display="block";
    document.getElementById("cdContainer").style.display="none";
}
function newPlayer(){
    document.getElementById("gameContainerMainButton").style.display="none";
    document.getElementById("gameContainer").style.display="none";
    document.getElementById("nameInputContainer").style.display="block";
    document.getElementById("menuContainer").style.display='none';
}
function mainMenu(){
    document.getElementById("gameContainerMainButton").style.display="none";
    document.getElementById("gameContainer").style.display="none";
    document.getElementById("gameContainerRetryButton").style.display="none";
    document.getElementById("nameInputContainer").style.display="none";
    document.getElementById("menuContainer").style.display='block';
    document.getElementById("playerGreet").innerText=`Main Menu`;
    dispDetailsC();pp=0;gp=0;timerReset();snake = [{x:15,y:15},{x:14,y:15}];
    document.getElementById("girds").innerHTML='';cScore=10;
    currentDir="x"; puCdTrue=false;interSpeed=90;
    dirC={x:1,y:0}; clearTimeout(splFoodTimeOut);
}
function highScoreSet(){
    let tempName= document.getElementById('playerName').value;
    if(tempName==""){tempName="unnamed player"}
    if(score>highScoreA[0]){
        highScoreA[0]=score;
        document.getElementById('highScore0').innerHTML='';
        document.getElementById('highScore0').innerText=`${tempName}
        ${score} Points`
    }
    if(timeInSeconds>highScoreA[1]){
        highScoreA[1]=timeInSeconds;
        document.getElementById('highScore1').innerHTML='';
        document.getElementById('highScore1').innerText=`${tempName}
        Time Survived: ${time}`
    }
    if(puAte>highScoreA[2]){
        highScoreA[2]=puAte;
        document.getElementById('highScore2').innerHTML='';
        document.getElementById('highScore2').innerText=`${tempName}
        PowerUps Ate: ${puAte}`
    }
}
//GAME CODE
//GAME CODE
//GAME CODE
//GAME CODE
function run(){
    draw();
    update();
}
function draw(){
    document.getElementById("girds").innerHTML='';
    drawSnake();
    food();
}
function update(){
    snakeMove();
    dispDetails();
    if(isGameOver()){gameOver()};
    if(splFoodTrue){splFood();slpFoodCheck();};
    if(ffTrue){fullFoodPU();setTimeout(function(){ffTrue=false},5000)};
    if(puTrue){movingPU();setTimeout(function(){puTrue=false},10000)};
    if(timeInSeconds%120==0&&timeInSeconds!=0){splFoodTrue=true};
    highScoreSet();
}
document.addEventListener('keydown',function(e){
    let eye = document.getElementsByClassName('snakeHead');
    if(gp==1){
        switch(true){
            case e.key=="ArrowUp"&&currentDir!="y":{
                dirC={x:0,y:-1};
                setTimeout(function(){currentDir="y"},interSpeed); 
                break;
            }
            case e.key=="ArrowDown"&&currentDir!="y":{
                dirC={x:0,y:1};
                setTimeout(function(){currentDir="y"},interSpeed); 
                break;
            }
            case e.key=="ArrowLeft"&&currentDir!="x":{
                dirC={x:-1,y:0};
                setTimeout(function(){currentDir="x"},interSpeed); 
                break;
            }
            case e.key=="ArrowRight"&&currentDir!="x":{
                dirC={x:1,y:0};
                setTimeout(function(){currentDir="x"},interSpeed); 
                break;
            }
        }
    }
})
document.addEventListener('keydown',function(e){
  if(e.key==" "){gamePauseResume()}
})
function drawSnake(){
    let tGameC=document.getElementById("girds");
    for(let i=0;i<snake.length;i++){
        let tdiv = document.createElement("div");
        tdiv.style.gridRowStart= snake[i].y;
        tdiv.style.gridColumnStart= snake[i].x;
        if(i==0){tdiv.classList.add("snakeHead")}
        else{tdiv.classList.add("snake")}
        tGameC.appendChild(tdiv);
    }
}
function drawFood(pos){
    let tGameC=document.getElementById("girds");
    let tdiv = document.createElement("div");
    tdiv.style.gridRowStart= pos.y;
    tdiv.style.gridColumnStart= pos.x;
    tdiv.classList.add("food");
    let gFood = document.querySelector(".food");
    if(gFood!=null){gFood.parentElement.removeChild(gFood);}
    tGameC.appendChild(tdiv);
}
function snakeMove(){
    var temp = JSON.parse(JSON.stringify(snake));
    for(var i = 1;i<snake.length;i++){
        snake[i]=JSON.parse(JSON.stringify(temp[i-1]));
    }
    snake[0].x=snake[0].x+dirC.x;
    snake[0].y=snake[0].y+dirC.y;
}
function snakeInFood(pos){
    let a;
    for(i=1;i<snake.length;i++){
        if(snake[i].y==pos.y&&snake[i].x==pos.x){
            a="true"
        }
    }
    if(a=="true"){
        return true;
    }
    return false;
}
function food(){
    drawFood(foodPoint);
    if(snakeAte(foodPoint)){
        foodPoint=randomPos();
        let tdiv=JSON.parse(JSON.stringify(snake[snake.length-1]));
        snake.push(tdiv);
        score += cScore;
        foodAte++;
        if(foodAte%10==0){puTrue=true};
    }
}
function randomPos(){
    let tPos ={};
    tPos.x= Math.floor(Math.random()*39)+1;
    tPos.y= Math.floor(Math.random()*39)+1;
    while(snakeInFood(tPos)){
        tPos.x= Math.floor(Math.random()*39)+1;
        tPos.y= Math.floor(Math.random()*39)+1;
    }
    return tPos;
}
function isGameOver(){
    let sHeadX = snake[0].x;
    let sHeadY = snake[0].y;
    if(!iV){
        if(sHeadX<1||sHeadX>40||sHeadY<1||sHeadY>40){return true}
        for(i=1;i<snake.length;i++){
            if(snake[i].x==sHeadX&&snake[i].y==sHeadY||sHeadX<1||sHeadX>40||sHeadY<1||sHeadY>40){
                return true;
            }
        }
        return false;
    }
    if(iV){
        if(sHeadX>40){snake[0].x=1}
        if(sHeadX<0){snake[0].x=40}
        if(sHeadY>40){snake[0].y=1}
        if(sHeadY<0){snake[0].y=40}
    }
}
function gameOver(){
    document.querySelector('.snakeHead').style.backgroundColor="#ff0000";
    clearInterval(inter);gp=0;pp=0;
    timerReset(gameTimerV);puCdTrue=false;
    document.getElementById("gameContainerMainButton").style.display="block";
    document.getElementById("gameContainerRetryButton").style.display="block";
    let gameC = document.getElementById("girds");
    let tdiv = document.createElement("h2");
    tdiv.innerText="GAME OVER";interSpeed=90;
    tdiv.style.color='#ff0000';cScore=10;
    tdiv.style.position="absolute";
    tdiv.style.top= `${parseFloat(gameC.style.height)/2-90}px`;
    tdiv.style.left= `${parseFloat(gameC.style.width)/2-75}px`;
    gameC.appendChild(tdiv);
    clearTimeout(puf4TimeOut);
    clearTimeout(splFoodTimeOut);
}
function gameOverRetry(){
    document.getElementById("gameContainerMainButton").style.display="none";
    document.getElementById("gameContainerRetryButton").style.display="none";
    gp=1; snake = [{x:15,y:15},{x:14,y:15}]; ffTrue=false;
    timerStart();foodPoint = randomPos();puTrue=false;
    document.getElementById("girds").innerHTML='';splFoodTrue=false;
    currentDir="x";score=0;puAte=0;iV = false;
    dirC={x:1,y:0}; splFoodTimeOut = setTimeout(function(){splFoodTrue=true},120000);
    inter = setInterval(run,interSpeed);foodAte=0;
    let temp = document.getElementById('tempMSG');
    if(temp!=null){temp.parentElement.removeChild(temp)}
}
function gamePauseResume(){
    let gameC = document.getElementById("girds");
    if(gp==1){
        switch(pp){
            case 0 : {
                clearInterval(inter);
                timerPause();
                document.getElementById("gameContainerMainButton").style.display="block";
                let tdiv = document.createElement("h2");
                tdiv.innerText="GAME PAUSED";
                tdiv.style.color='#ffffff';
                tdiv.style.position="absolute";
                tdiv.style.top= `${parseFloat(gameC.style.height)/2-90}px`;
                tdiv.style.left= `${parseFloat(gameC.style.width)/2-90}px`;
                gameC.appendChild(tdiv);
                pp=1;break;
            }
            case 1: {
                timerStart();
                inter = setInterval(run,interSpeed);
                document.getElementById("gameContainerMainButton").style.display="none";
                pp=0;break;
            }
        }
    }
}
function startGame(){
    foodPoint = randomPos();score=0;puAte=0;timeInSeconds=0;
    inter = setInterval(run,interSpeed);iV = false;
    timerStart();gp=1;pp=0;setFullPos();foodAte=0;splFoodTrue=false;
    document.getElementById("gameContainerStartButton").style.display="none";
}
function timerF(){
    timeInSeconds++;
    if(s2<=9){s2++}
    if(s2==10&&s1<=5){s2=0;s1++}
    if(s1==6&&s2==0){s1=0;s2=0;min++}
    if(min<10){time = `0${min}:${s1}${s2}`}
    else{time = `${min}:${s1}${s2}`};
}
function timerStart(){
    gameTimerV = setInterval(timerF,1000);
}
function timerPause(){
    clearInterval(gameTimerV);
}
function timerReset(){
    clearInterval(gameTimerV);
    min=0;s1=0;s2=0;
    time= `0${min}:${s1}${s2}`;
    timeInSeconds=0;
}
function splFood(){
    let tGameC=document.getElementById("girds");
    let tdiv = document.createElement("div");
    tdiv.style.gridRowStart=  splFoodPos.y;
    tdiv.style.gridColumnStart=  splFoodPos.x;
    tdiv.classList.add("splFood");
    let gFood = document.querySelector(".splFood");
    if(gFood!=null){gFood.parentElement.removeChild(gFood);}
    tGameC.appendChild(tdiv);
}
function slpFoodCheck(){
    if(snakeAte(splFoodPos)){
        splFoodTrue=false;
        let tdiv=JSON.parse(JSON.stringify(snake[snake.length-1]));
        snake.push(tdiv);
        score += cScore*2;
        splFoodPos=randomPos();
    }
}
function dispDetails(){
    document.getElementById("scoreT").innerHTML=`SCORE: ${score}`;
    document.getElementById("timerT").innerHTML=`TIME: ${time}`;
    if(playerName.value !== ""){
        document.getElementById("playerT").innerHTML=`${playerName.value}`;
    }
    if(puCdTrue){
        document.getElementById('puCd').innerText=`${tempTime}`;
    }
}
function dispDetailsC(){
    document.getElementById("scoreT").innerHTML='SCORE:';
    document.getElementById("timerT").innerHTML='TIME:';
    document.getElementById("playerT").innerHTML='';
}
function movingPU(){
    drawPU();
    movePU();
    testPU();
}
function  drawPU(){
    if(puTrue){
    let tGameC=document.getElementById("girds");
    let tdiv = document.createElement("div");
    tdiv.style.gridRowStart = mpuPos.y;
    tdiv.style.gridColumnStart = mpuPos.x;
    tdiv.classList.add("mpu");
    let gFood = document.querySelector("mpu");
    if(gFood!=null){gFood.parentElement.removeChild(gFood);}
    tGameC.appendChild(tdiv);
    }
}
function movePU(){
    if(hvDVariable==0){
        if(mpuPos.x>=38&&mpuPos.x>2){puMovingDir=1;}
        if(mpuPos.x<=2&&mpuPos.x<38){puMovingDir=0}
        if(puMovingDir==0){mpuPos.x++}
        if(puMovingDir==1){mpuPos.x--}
    }else{
        if(mpuPos.y>=38&&mpuPos.y>2){puMovingDir=1;}
        if(mpuPos.y<=2&&mpuPos.y<38){puMovingDir=0}
        if(puMovingDir==0){mpuPos.y++}
        if(puMovingDir==1){mpuPos.y--}
    }
}
function testPU(){
    let ate=false;
    if(snake[0].y==mpuPos.y&&snake[0].x==mpuPos.x||snake[1].y==mpuPos.y&&snake[1].x==mpuPos.x){
        ate=true;
    }
    if(ate){
        puAte++;
        puTrue=false;
        hvDVariable=Math.floor(Math.random()*2-1);
        mpuPos=randomPos();
        let tN = Math.floor(Math.random()*5);
        if(tN==2){setFullPos()};
        switch(tN){
            case 0: {puF1();break;}
            case 1: {puF2();break;}
            case 2: {puF3();break;}
            case 3: {puF4();break;}
            case 4: {puF5();break;}
            default:{puF1();break;}
        }
    }
}
function snakeAte(pos){
    let ate = false;
    if(snake[0].y==pos.y&&snake[0].x==pos.x){
        ate=true;
    }
    return ate;
}
function puF1(){
    cScore=cScore*2;
    let tGameC=document.getElementById("gameArea");
    let tdiv = document.createElement("p");
    tdiv.innerHTML=`you got 2x SCORE for next <span id="puCd"></span> seconds`;
    tdiv.setAttribute('id',"tempMSG");countDown(30);
    tGameC.appendChild(tdiv);
    setTimeout(function(){
        cScore=cScore/2;
        let temp = document.getElementById('tempMSG');
        if(temp!=null){temp.parentElement.removeChild(temp)}
        },30000)
}
function puF2(){
    let sL = snake.length;
    let l= Math.floor((sL/100)*80);
    snake = snake.slice(0,l);
    let tGameC=document.getElementById("gameArea");
    let tdiv = document.createElement("p");
    tdiv.innerText="your snake's length have been reduced by 20%";
    tdiv.setAttribute('id',"tempMSG");
    tGameC.appendChild(tdiv);
    setTimeout(function(){
        let temp = document.getElementById('tempMSG');
        if(temp!=null){temp.parentElement.removeChild(temp)}
        },10000)
}
function puF3(){
    ffTrue=true;
    let tGameC=document.getElementById("gameArea");
    let tdiv = document.createElement("p");countDown(5);
    tdiv.innerHTML=`boost up your score in next <span id="puCd"></span> seconds`;
    tdiv.setAttribute('id',"tempMSG");
    tGameC.appendChild(tdiv);
    setTimeout(function(){
        let temp = document.getElementById('tempMSG');
        if(temp!=null){temp.parentElement.removeChild(temp)}
        },5000)
}
function fullFoodPU(){
    drawFullFood();
    fullFoodCheck();
}
function setFullPos(){
    for(let r=0;r<40;r++){
        fullFood[r]=[];
        for(let c=0;c<40;c++){
                fullFood[r][c]={x:r+1,y:c+1,aStatus:true}
        }
    }
}
function drawFullFood(){
    ffTrue=true;
    let tGameC=document.getElementById("girds");
    for(let r=0;r<40;r++){
        for(let c=0;c<40;c++){
            let posi = fullFood[r][c];
            let condi1=true, condi2= true;
            if(snakeInFood(posi)){condi1=false};
            if(foodPoint.x==posi.x&&foodPoint.y==posi.y){condi2=false}
            if(condi1&&condi2&&posi.aStatus){
                let tdiv = document.createElement("div");
                tdiv.style.gridRowStart= posi.y;
                tdiv.style.gridColumnStart= posi.x;
                tdiv.setAttribute('id',`ff${r}${c}`)
                tdiv.classList.add("fullFood");
                tGameC.appendChild(tdiv);
            }
        }
    }
}
function fullFoodCheck(){
    for(let r=0;r<40;r++){
        for(let c=0;c<40;c++){
            let tfood=fullFood[r][c];
                if(tfood.aStatus){
                    if(snakeAte(tfood)){
                    score += cScore*2;
                    let tdiv=JSON.parse(JSON.stringify(snake[snake.length-1]));
                    snake.push(tdiv);
                    tfood.aStatus=false;
                }}
        }
    }
}
function puF4(){
    clearInterval(inter);
    interSpeed+=60;
    inter = setInterval(run,interSpeed);
    let tGameC=document.getElementById("gameArea");
    let tdiv = document.createElement("p");countDown(30);
    tdiv.innerHTML=`snake speed have been reduced for next<span id="puCd"></span> seconds`;
    tdiv.setAttribute('id',"tempMSG");
    tGameC.appendChild(tdiv);
    puf4TimeOut = setTimeout(function(){
        clearInterval(inter);
        interSpeed-=60;
        inter = setInterval(run,interSpeed);
        let temp = document.getElementById('tempMSG');
        if(temp!=null){temp.parentElement.removeChild(temp)}
        },30000)
}
function puF5(){
    iV=true;countDown(30);
    let tGameC=document.getElementById("gameArea");
    let tdiv = document.createElement("p");
    tdiv.innerHTML=`Invisibility mode ON for next <span id="puCd"></span> seconds`;
    tdiv.setAttribute('id',"tempMSG");
    tGameC.appendChild(tdiv);
    setTimeout(function(){
        iV=false;
        let temp = document.getElementById('tempMSG');
        if(temp!=null){temp.parentElement.removeChild(temp)}
        },30000)
}
let tempInter, tempTime=0;
function countDown(sec){
    tempTime = sec;
    puCdTrue = true;
    tempInter = setInterval(function(){tempTime--;dispDetails()},1000);
    setTimeout(function(){clearInterval(tempInter);tempTime=0;puCdTrue=false},sec*1000)
}