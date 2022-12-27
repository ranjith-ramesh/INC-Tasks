function validate(){
    let checkB = document.getElementById('tncCheck');
    let submitB=false;
    if(checkB.checked){submitB = true}
    else{
        document.getElementById('errText').style.visibility="visible";
    }
    checkB.addEventListener('focus',function(){
        document.getElementById('errText').style.visibility="hidden";
    })
    if(submitB){
        document.getElementById('c1').style.display="none";
        document.getElementById('c2').style.display="block";
    }
}
