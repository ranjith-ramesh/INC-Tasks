let ob, p = 0,j = 0;
let inter,inter2;
function pause(){clearInterval(inter);j=0;}
function reset(){ pause();ob.style.left= 0;p=0;j=0;}
function move(){
    ob = document.getElementById("ob");
    j++
    if(j==1){inter = setInterval(start,18);}
    function start(){
        if(p >= 799){
            clearInterval(inter);
            inter2 = setInterval(end,18);
        }
        else{
            ob.style.left= p+"px";
            p+=2;}
        }
    function end(){
        if(p <= 0){
            clearInterval(inter2);
            inter = setInterval(start,18);
        }
        else{
            ob.style.left= p+"px";
            p-=2;}
        }
}

