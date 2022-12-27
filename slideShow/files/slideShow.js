let imi = 1;let a,ic;
function nextIm() {
  showIm(imi += 1);
}
function prevIm() {
    showIm(imi -= 1);
  }
function showIm(n) {
  var i;
  var x = document.getElementsByClassName("im");
  if (n > x.length) {imi = 1}
  if (n < 1) {imi = x.length}
  for (i = 0; i < x.length; i++) { x[i].style.opacity = "0";}
  x[imi-1].style.opacity = "1";
}
//autoSlide -> aus
function aus() { a = setInterval(function(){nextIm()},3000)} 
function setUp(){
      showIm(imi);//imi-imageIndex
      aus();
      ic = document.getElementById("ic");
      ic.addEventListener("click",function(){nextIm();});
      ic.addEventListener("mouseover",function(){clearInterval(a);clearInterval(aus)});
      ic.addEventListener("mouseleave",function(){aus()});
      ic.addEventListener("mousedown",function(e){
          if(e.button==2){clearInterval(a);clearInterval(aus);prevIm();}})
      document.addEventListener("keydown",function(e){
          if(e.key== "ArrowDown"||e.key== "ArrowLeft"||e.key== "PageDown")
          {clearInterval(a);clearInterval(aus);prevIm();}});
      document.addEventListener("keydown",function(e){
          if(e.key== "ArrowUp"||e.key== "PageUp"||e.key== "ArrowRight")
          {clearInterval(a);clearInterval(aus);nextIm();}});
}