const hamburger=document.querySelector(".menu");
const list=document.querySelector(".nav ul");

hamburger.addEventListener("click",()=>{
    if(list.style.display==="none"){
        list.style.display="block";
    }else{
        list.style.display="none";
    }
});