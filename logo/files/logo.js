let xv = 0,yv = 0,tc;
window.addEventListener('mousemove',function (e){ xv = e.x; yv = e.y;})
let rolls = { oname : "Rolls-Royce", ceo : "Torsten Müller-Ötvös", year : "1906", scr: "../images/rolls.jpg"}
let benz = {oname : "Mercedes-Benz",ceo : "Dieter Zetsche",year : "1926" , scr: "../images/benz.jpg"}
let bmw = {oname : "Bavarian Motor Works",ceo : "Oliver Zipse",year : "1916", scr: "../images/bmw.jpg"}
let jag = {oname : "Jaguar",ceo : "Ralf Speth",year : "1922", scr: "../images/jag.jpg"}
let bentley = {oname : "Bentley",ceo : "Adrian Hallmark",year : "1919", scr: "../images/bentley.jpg"}
let lambo = {oname : "Lamborgini",ceo : "Stephan Winkelmann",year : "1963", scr: "../images/lambo.jpg"}
let lexus = {oname : "Lexus",ceo : "Scott Thompson",year : "1989", scr: "../images/lexus.jpg"}
let mc = {oname : "Mc-Laren",ceo : "Tony Imbrogno",year : "1963", scr: "../images/mc.jpg"}
let porsche = {oname : "Porsche",ceo : "Oliver Blume",year : "1931", scr: "../images/porsche.jpg"}
let skoda = {oname : "Skoda",ceo : "Zac Hollis",year : "1895", scr: "../images/skoda.jpg"}
function disp(brand){
    let ont = document.getElementById("ont");
    let ceot = document.getElementById("ceot");
    let yeart = document.getElementById("yeart");
    let lct = document.getElementById("lct");
    let tct = document.getElementById("tct");
    let fl = document.getElementById("fl");
    tc = document.getElementById("tableContainer");
    tc.addEventListener('mouseenter',function(){
        document.getElementById("closeTable").style.visibility="visible"})
    tc.addEventListener('mouseleave',function(){
        document.getElementById("closeTable").style.visibility="hidden"})
    fl.setAttribute("src",brand.scr)
    ont.innerText= brand.oname;
    ceot.innerText= brand.ceo;
    yeart.innerText= brand.year;
    lct.innerText= xv;
    tct.innerText= yv;
    tc.style.display="flex";
}
function back (){tc.style.display="none";}

