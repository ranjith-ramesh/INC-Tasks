let day ;let i;
let hrs, mins, sec, h1, h2, m1, m2, s1, s2 ;
function run(){
    day = new Date();day.toLocaleTimeString;
    hrs=day.getHours();
    mins=day.getMinutes();
    sec = day.getSeconds();
    if(hrs>9){let t = JSON.stringify(hrs); h1= t[0]; h2=t[1]; gf(h1,"h1"); gf(h2,"h2")}
    else{h2= JSON.stringify(hrs); gf("0","h1"); gf(h2,"h2"); }
    if(mins>9){let t = JSON.stringify(mins); m1= t[0]; m2=t[1]; gf(m1,"m1"); gf(m2,"m2")}
    else{m2= JSON.stringify(mins); gf("0","m1"); gf(m2,"m2");}
    if(sec>9){let t = JSON.stringify(sec); s1= t[0]; s2=t[1]; gf(s1,"s1"); gf(s2,"s2")}
    else{s2= JSON.stringify(sec); gf("0","s1"); gf(s2,"s2");}
}
function gf(v,z){
        switch(v){
        case "1" : {
            document.getElementById(`${z}a`).style.visibility="hidden";
            document.getElementById(`${z}b`).style.visibility="hidden";
            document.getElementById(`${z}c`).style.visibility="visible";
            document.getElementById(`${z}d`).style.visibility="hidden";
            document.getElementById(`${z}e`).style.visibility="hidden";
            document.getElementById(`${z}f`).style.visibility="visible";
            document.getElementById(`${z}g`).style.visibility="hidden";
            break;}
        case "2": {
            document.getElementById(`${z}a`).style.visibility="visible";
            document.getElementById(`${z}b`).style.visibility="hidden";
            document.getElementById(`${z}c`).style.visibility="visible";
            document.getElementById(`${z}d`).style.visibility="visible";
            document.getElementById(`${z}e`).style.visibility="visible";
            document.getElementById(`${z}f`).style.visibility="hidden";
            document.getElementById(`${z}g`).style.visibility="visible";
            break;}
        case "3": {
            document.getElementById(`${z}a`).style.visibility="visible";
            document.getElementById(`${z}b`).style.visibility="hidden";
            document.getElementById(`${z}c`).style.visibility="visible";
            document.getElementById(`${z}d`).style.visibility="visible";
            document.getElementById(`${z}e`).style.visibility="hidden";
            document.getElementById(`${z}f`).style.visibility="visible";
            document.getElementById(`${z}g`).style.visibility="visible";
            break;}
        case "4" : {
            document.getElementById(`${z}a`).style.visibility="hidden";
            document.getElementById(`${z}b`).style.visibility="visible";
            document.getElementById(`${z}c`).style.visibility="visible";
            document.getElementById(`${z}d`).style.visibility="visible";
            document.getElementById(`${z}e`).style.visibility="hidden";
            document.getElementById(`${z}f`).style.visibility="visible";
            document.getElementById(`${z}g`).style.visibility="hidden";
            break;}
        case "5": {
            document.getElementById(`${z}a`).style.visibility="visible";
            document.getElementById(`${z}b`).style.visibility="visible";
            document.getElementById(`${z}c`).style.visibility="hidden";
            document.getElementById(`${z}d`).style.visibility="visible";
            document.getElementById(`${z}e`).style.visibility="hidden";
            document.getElementById(`${z}f`).style.visibility="visible";
            document.getElementById(`${z}g`).style.visibility="visible";
            break;}
        case "6": {
            document.getElementById(`${z}a`).style.visibility="visible";
            document.getElementById(`${z}b`).style.visibility="visible";
            document.getElementById(`${z}c`).style.visibility="hidden";
            document.getElementById(`${z}d`).style.visibility="visible";
            document.getElementById(`${z}e`).style.visibility="visible";
            document.getElementById(`${z}f`).style.visibility="visible";
            document.getElementById(`${z}g`).style.visibility="visible";
            break;}
        case "7" : {
            document.getElementById(`${z}a`).style.visibility="visible";
            document.getElementById(`${z}b`).style.visibility="hidden";
            document.getElementById(`${z}c`).style.visibility="visible";
            document.getElementById(`${z}d`).style.visibility="hidden";
            document.getElementById(`${z}e`).style.visibility="hidden";
            document.getElementById(`${z}f`).style.visibility="visible";
            document.getElementById(`${z}g`).style.visibility="hidden";
            break;}
        case "8": {
            document.getElementById(`${z}a`).style.visibility="visible";
            document.getElementById(`${z}b`).style.visibility="visible";
            document.getElementById(`${z}c`).style.visibility="visible";
            document.getElementById(`${z}d`).style.visibility="visible";
            document.getElementById(`${z}e`).style.visibility="visible";
            document.getElementById(`${z}f`).style.visibility="visible";
            document.getElementById(`${z}g`).style.visibility="visible";
            break;}
        case "9": {
            document.getElementById(`${z}a`).style.visibility="visible";
            document.getElementById(`${z}b`).style.visibility="visible";
            document.getElementById(`${z}c`).style.visibility="visible";
            document.getElementById(`${z}d`).style.visibility="visible";
            document.getElementById(`${z}e`).style.visibility="hidden";
            document.getElementById(`${z}f`).style.visibility="visible";
            document.getElementById(`${z}g`).style.visibility="visible";
            break;}
        case "0": {
            document.getElementById(`${z}a`).style.visibility="visible";
            document.getElementById(`${z}b`).style.visibility="visible";
            document.getElementById(`${z}c`).style.visibility="visible";
            document.getElementById(`${z}d`).style.visibility="hidden";
            document.getElementById(`${z}e`).style.visibility="visible";
            document.getElementById(`${z}f`).style.visibility="visible";
            document.getElementById(`${z}g`).style.visibility="visible";
            break;}
        }
    }   setInterval(run,1000);