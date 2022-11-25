
const nav =document.querySelector(".main-nav")
const navLinks =document.querySelectorAll(".main-nav-link");



nav.addEventListener("click",(e)=>{
if(e.target.classList.contains("main-nav-link")){
    navLinks.forEach((link)=>link.classList.remove("active-link"));
    e.target.classList.add("active-link");

}

});