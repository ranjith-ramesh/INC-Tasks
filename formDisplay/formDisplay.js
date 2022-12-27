let iname, idob, isex, iphno, iemail,mail;
let namex = /^[a-z/A-Z/0-9/" "]+$/;
let dobex = /^((0?[1-9]|1[012])[-](0?[1-9]|[12][0-9]|3[01])[-](19|20)?[0-9]{2})*$/;
let phnex = /[6-9]{1}[0-9]{9}/;
let pname = '', dob = '', sex = '' , phno = '';let tk = 0;
let mailex= /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,4})$/;
function validate(){
    pname = iname.value;
    dob = idob.value;
    sex = isex.value;
    phno = iphno.value;
    mail = iemail.value;  tk=0;
    if(namex.test(pname)&&isNaN(pname)){tk++}else{document.getElementById('nameerr').style.visibility = 'visible';iname.style.borderColor='red'};
    if(dobex.test(dob)&&dob!==""){tk++}else{document.getElementById('doberr').style.visibility = 'visible'; idob.style.borderColor='red'};
    if(sex == "ns"){document.getElementById('sexerr').style.visibility = 'visible'; isex.style.borderColor='red'}else{tk++};
    if(phnex.test(phno)||phno==""){tk++}else{document.getElementById('phnerr').style.visibility = 'visible'; iphno.style.borderColor='red'}
    if(mailex.test(mail)){tk++}else{document.getElementById('emailerr').style.visibility = 'visible'; iemail.style.borderColor='red'}
    if(tk==5){disp()}
    iname.addEventListener('keydown',(e)=>{document.getElementById('nameerr').style.visibility = 'hidden';iname.style.borderColor='black'});
    idob.addEventListener('keydown',(e)=>{document.getElementById('doberr').style.visibility = 'hidden'; idob.style.borderColor='black'});
    isex.addEventListener('focus',(e)=>{document.getElementById('sexerr').style.visibility = 'hidden'; isex.style.borderColor='black'});
    iphno.addEventListener('keydown',(e)=>{document.getElementById('phnerr').style.visibility = 'hidden'; iphno.style.borderColor='black'})
    iemail.addEventListener('keydown',(e)=>{document.getElementById('emailerr').style.visibility = 'hidden'; iemail.style.borderColor='black'})
}
function disp(){
    document.getElementById("nametext").innerText= pname;
    document.getElementById("dobtext").innerText= dob;
    document.getElementById("gentext").innerText= sex;
    document.getElementById("emailText").innerText= mail;
    if (phno!==""){document.getElementById("pntext").innerText= phno;}
    document.getElementById("formContainer").style.display = 'none';
    document.getElementById("tableContainer").style.display = 'block';
}
function refresh(){
    document.getElementById("formContainer").style.display = 'block';
    document.getElementById("tableContainer").style.display = 'none';
}
function loaded(){
    iname = document.getElementById('name');
    idob = document.getElementById('dob');
    isex = document.getElementById('sex');
    iphno = document.getElementById('phno');
    iemail = document.getElementById('email');
    document.addEventListener('keyup',(e)=>{
        let tv ;
        tv=idob.value.length;
        if(tv==2&& e.keyCode!= 8){idob.value+="-"}
        if(tv==5&& e.keyCode!= 8){idob.value+="-"}
    });
}