let currentSlide = 1;
function nextSlide(){
    switch(currentSlide){
        case 1 : {
            document.getElementById('b1').classList.remove('setOne');
            document.getElementById('b1').classList.add('setTwo');
            document.getElementById('set1').classList.toggle('open');
            document.getElementById('set2').classList.toggle('open');
            currentSlide=2;
            break;
        }
        case 2 : {
            document.getElementById('b1').classList.remove('setTwo');
            document.getElementById('set2').classList.toggle('open');
            document.getElementById('b1').classList.add('setThree');
            document.getElementById('set3').classList.toggle('open');
            currentSlide=3;
            break;
        }
        case 3 : {
            document.getElementById('b1').classList.remove('setThree');
            document.getElementById('set3').classList.toggle('open');
            document.getElementById('b1').classList.add('setOne');
            document.getElementById('set1').classList.toggle('open');
            currentSlide=1;
            break;
        }
    }
}
function preSlide(){
    switch(currentSlide){
        case 1 : {
            document.getElementById('b1').classList.remove('setOne');
            document.getElementById('b1').classList.add('setThree');
            document.getElementById('set1').classList.toggle('open');
            document.getElementById('set3').classList.toggle('open');
            currentSlide=3;
            break;
        }
        case 2 : {
            document.getElementById('b1').classList.remove('setTwo');
            document.getElementById('set2').classList.toggle('open');
            document.getElementById('b1').classList.add('setOne');
            document.getElementById('set1').classList.toggle('open');
            currentSlide=1;
            break;
        }
        case 3 : {
            document.getElementById('b1').classList.remove('setThree');
            document.getElementById('set3').classList.toggle('open');
            document.getElementById('b1').classList.add('setTwo');
            document.getElementById('set2').classList.toggle('open');
            currentSlide=2;
            break;
        }
    }
}
let b5CurrentSlide=1, b5slideTOut;
function b5SlideSwitchNext(){
    document.getElementById('b5SlideC').classList.toggle(`slide${b5CurrentSlide}`);
    if(b5CurrentSlide==3){b5CurrentSlide=1}else{b5CurrentSlide++}
    document.getElementById('b5SlideC').classList.toggle(`slide${b5CurrentSlide}`);
    clearTimeout(b5slideTOut);
    b5slideTOut =  setTimeout(b5SlideSwitchNext,3000);
}
function b5SlideSwitchPre(){
    clearTimeout(b5slideTOut);
    b5slideTOut =  setTimeout(b5SlideSwitchNext,5000);
    document.getElementById('b5SlideC').classList.toggle(`slide${b5CurrentSlide}`);
    if(b5CurrentSlide==1){b5CurrentSlide=3}else{b5CurrentSlide--}
    document.getElementById('b5SlideC').classList.toggle(`slide${b5CurrentSlide}`);
}
function pollSelect(classToSet, elem){
    let tempV = document.getElementsByClassName(classToSet);
    if(tempV.length==0){
        elem.parentElement.classList.toggle('op1select');
        elem.parentElement.classList.toggle('op2select');
    }
}
function loader(){
    recentArticleNextSlide();
    b5SlideSwitchNext();
}
function removeDD(e){
    let tempV = document.querySelector('.dd');
    if(tempV != null&& e.target.classList[0]!="selectForm"){tempV.classList.remove('dd')}
}
function selectDD(elem){
    let tempV = document.querySelector('.dd');
    if(tempV != null && elem.parentElement.id != tempV.id){tempV.classList.remove('dd')}
    elem.parentElement.classList.toggle('dd')
}
let recentArticleCurrentSlide = 1 , rAtOut;
function recentArticleNextSlide(){
    document.getElementById('gsC').classList.remove(`se${recentArticleCurrentSlide}`);
    if(recentArticleCurrentSlide==5){recentArticleCurrentSlide=0}
    recentArticleCurrentSlide++;
    document.getElementById('gsC').classList.add(`se${recentArticleCurrentSlide}`);
    clearTimeout(rAtOut);
    rAtOut = setTimeout(recentArticleNextSlide,5000);
}
function setSlide(slideToSet){
    clearTimeout(rAtOut);
    document.getElementById('gsC').classList.remove(`se${recentArticleCurrentSlide}`);
    if(recentArticleCurrentSlide==5){recentArticleCurrentSlide=0}
    recentArticleCurrentSlide=slideToSet;
    document.getElementById('gsC').classList.add(`se${recentArticleCurrentSlide}`);
    rAtOut = setTimeout(recentArticleNextSlide,5000);
}
function addActive(elem, cX){
    document.querySelector('.active').classList.remove('active');
    elem.classList.toggle('active')
    let activeC = document.querySelector('.activeCard');
    activeC.classList.remove('activeCard');
    let cardToSet = document.getElementsByClassName(cX)[0];
    let tempChildNo =  cardToSet.classList[cardToSet.classList.length-1];
    activeC.classList.add(tempChildNo);
    cardToSet.classList.remove(tempChildNo);
    cardToSet.classList.add('activeCard');
}
function epfSetValue(elem){
    elem.parentElement.parentElement.childNodes[3].innerHTML=elem.innerHTML;
    let tempV = document.querySelector('.dd');
    if(tempV != null){tempV.classList.remove('dd')}
}