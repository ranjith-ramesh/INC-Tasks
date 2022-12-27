let p = 0;let blocks;
function expand(){
    document.getElementById('navBar').classList.toggle("expand");
    document.getElementById('container').classList.toggle("expand");
    document.getElementById("navBg").classList.toggle("expand");
    document.getElementById("gBg1").classList.toggle("expand");
    let lable = document.getElementsByClassName("iLable");
    let ni = document.getElementsByClassName("navIcon");
    for(i=0;i<ni.length;i++){ni[i].classList.toggle("bl")}
    for(i=0;i<lable.length;i++){lable[i].classList.toggle("expand")}
    if(p==0){p=1;document.getElementById("eBut").innerText="<";return}
    if(p==1){p=0;document.getElementById("eBut").innerText=">"}
}
function darkModeT(){document.body.classList.toggle("dark")}
function addMobile(){document.getElementById("addMobileC").classList.add("visible");blocks = document.querySelectorAll(".inpB")}
function nxtM(){
    document.getElementById("addMs").classList.add("two");
    setTimeout(otpShift,500);
}
function verify(){cMobile();document.getElementById("b4").classList.add("added")}
function cMN(){document.getElementById("addMs").classList.remove("two")}
function cMobile(){
    document.getElementById("addMobileC").classList.remove("visible");
    document.getElementById("mInput").value="";
    document.getElementById("addMs").classList.remove("two")
}
function otpShift(){
    for(i=0;i<blocks.length;i++){
        if(i<=6){blocks[i].addEventListener('keyup',function(e){shiftCheck(e.keyCode)})}
    }
    document.getElementById("inpB1").focus();
}
function shiftCheck(e){
    let t = 1;
    for(i=0;i<blocks.length;i++){
        if(i<5&&e!=8){if(blocks[i].value!==""){blocks[i+1].focus()}}
        if(i>0&&i<blocks.length&&e==8&&t==1&&blocks[i].value==""){blocks[i-1].focus();t=0}
    }
}