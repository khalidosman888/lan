let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("title");
let welcome = document.getElementById("welcome-text");
let about = document.getElementById("about");
let aboutText = document.getElementById("about-text");
let contact = document.getElementById("contact");
arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang", "arabic");
};
english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang", "english");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};
function setLanugage(getLanuage){
if(getLanuage === "arabic"){
   title.innerHTML = "خالد محمد عثمان";
   welcome.innerHTML = "مرحبا بكم في  موقع الالعاب";
   about.innerHTML = "حولنا";
   aboutText.innerHTML = "انا طالب واتعلم جافا سكريبت";
   contact.innerHTML = "اتصل بنا";
}else if(getLanuage === "english"){
    title.innerHTML = "khalid mohamed osman";
   welcome.innerHTML = "welcome to website of people rom!";
   about.innerHTML = "about us";
   aboutText.innerHTML = " i am a student and i learning javascript.";
   contact.innerHTML = "contact";
}    
}