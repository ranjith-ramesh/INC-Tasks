let a, b, c, d, e, f, g, h, i,pv="X",clickI=0;
let va,vb,vc,vd,ve,vf,vg,vh,vi,trn,won=0;
function add(v){
    a=document.getElementById("11");
    b=document.getElementById("12");
    c=document.getElementById("13");
    d=document.getElementById("21");
    e=document.getElementById("22");
    f=document.getElementById("23");
    g=document.getElementById("31");
    h=document.getElementById("32");
    i=document.getElementById("33");
    res = document.getElementById("result");
    v.setAttribute('onclick',null);
    v.style.color="black";
    v.innerText=pv;clickI++;
    if(pv=="X"){pv="O"}else{pv="X"};
    if(clickI>4){winCheck()}
    if(clickI>=8&&won==0){res.innerText="MATCH DRAW"}
}
function reset(){location.reload();}
function winCheck(){
    va=a.innerText;vb=b.innerText;vc=c.innerText;
    vd=d.innerText;ve=e.innerText;vf=f.innerText;
    vg=g.innerText;vh=h.innerText;vi=i.innerText;
    if(va!=="."&&va==vb&&va==vc) {res.innerText=`${va}-won the match`;won++};
    if(vd!=="."&&vd==ve&&vd==vf) {res.innerText=`${vd}-won the match`;won++};
    if(vg!=="."&&vg==vh&&vg==vi) {res.innerText=`${vg}-won the match`;won++};
    if(va!=="."&&va==vd&&va==vg) {res.innerText=`${va}-won the match`;won++};
    if(vb!=="."&&vb==ve&&vb==vh) {res.innerText=`${vb}-won the match`;won++};
    if(vc!=="."&&vc==vf&&vc==vi) {res.innerText=`${vc}-won the match`;won++};
    if(va!=="."&&va==ve&&va==vi) {res.innerText=`${va}-won the match`;won++};
    if(vc!=="."&&vc==ve&&vc==vg) {res.innerText=`${vc}-won the match`;won++};
}