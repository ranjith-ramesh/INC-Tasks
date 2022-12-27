let inp ,oup;
let inv;let l ;
let single =['',"I","II","III","IV","V","VI","VII","VIII","IX"];
let double =['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
let triple =['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
let ov='';let i;let r;let t;
let mn = '';let pl;
document.addEventListener('keydown',function(e){if(e.key=='Enter'){calc()}})
function calc(){
    inp = document.getElementById('inv');
    oup = document.getElementById('oup');
    inp.addEventListener('focus',function(){
        document.getElementById("errmsg").style.visibility="hidden";
    })
    let ex = /[0-9]/;
    ov='';mn='';
    inv=inp.value;
    if(ex.test(inv)==false){document.getElementById("errmsg").style.visibility="visible";return;}
    l = inv.length;
    pl = l;
    if(l>3){t = l-3;r= parseInt(inv/1000);l=4;};
    switch(l){
        case 1:{one(); break;}
        case 2:{two(); break;}
        case 3:{tri(); break;}
        case 4:{mc(r);max(); break;}
    }
    oup.value=ov;
}
function one(){ov = single[inv];}
function two(){ov = `${double[inv[0]]}${single[inv[1]]}`;}
function tri(){ov = `${triple[inv[0]]}${double[inv[1]]}${single[inv[2]]}`;}
function mc(s){for(i=0;i<s;i++){mn+='M';};}
function max(){ov = `${mn}${triple[inv[pl-3]]}${double[inv[pl-2]]}${single[inv[pl-1]]}`}
let mcal; let tinv = ''; let ft;let tov;let tl;
let once = {I:1,II:2,III:3,IV:4,V:5,VI:6,VII:7,VIII:8,IX:9}
let tence = {X:10,XX:20,XXX:30,XL:40,L:50,LX:60,LXX:70,LXXX:80,XC:90}
function rom(){
    inp = document.getElementById('inv');
    oup = document.getElementById('oup');
    inp.addEventListener('focus',function(){
        document.getElementById("errmsg").style.visibility="hidden";
    })
    ov=0;
    inv = inp.value;
    let rex=/^M{0,1000}(?:C[MD]|D?C{0,3})(?:X[CL]|L?X{0,3})(?:I[XV]|V?I{0,3})$/;
    if(rex.test(inv)!==true){document.getElementById("errmsg").style.visibility="visible";return}
    ft = inv.search(/c|d|x|v|i/gi);if(ft == -1){mcal=inv;}else{mcal = inv.slice(0,ft);};
    ov += mcal.length*1000;
    rex=/l|x|i|v/i;
    tinv = inv.slice(ft,inv.length);
    ft = tinv.search(/l|x|v|i/gi);
    mcal = tinv.slice(0,ft+1);
    tov = mcal.split('');
    tl =tov.length;
    for(i=0;i<tl;i++){
        let q = tov[i];
        switch(q){
            case "C" : ov+=100; break; 
            case "D" : ov+=500; break;
        }
    }
    rex=/i|v/i;
    tinv=tinv.slice(ft,tinv.length);
    ft = tinv.search(/v|i/gi);if(ft == -1){mcal=tinv;}else{ mcal = tinv.slice(0,ft);};
    switch(mcal){
        case "X" : ov+=10; break; 
        case "XX" : ov+=20; break;
        case "XXX" : ov+=30; break; 
        case "XL" : ov+=40; break;
        case "L" : ov+=50; break; 
        case "LX" : ov+=60; break;
        case "LXX" : ov+=70; break; 
        case "LXXX" : ov+=80; break;
        case "XC" : ov+=90; break; 
    }
    tl=tinv.length;
    mcal = tinv.slice(ft,tl);
    switch(mcal){
        case "I" : ov+=1; break; 
        case "II" : ov+=2; break;
        case "III" : ov+=3; break; 
        case "IV" : ov+=4; break;
        case "V" : ov+=5; break; 
        case "VI" : ov+=6; break;
        case "VII" : ov+=7; break; 
        case "VIII" : ov+=8; break;
        case "IX" : ov+=9; break; 
    }
    oup.value=ov;
}
    