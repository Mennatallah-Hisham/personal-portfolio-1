
const nav =document.querySelector(".main-nav")
const navLinks =document.querySelectorAll(".main-nav-link");

const BtnNav =document.querySelector(".btn-mobile-nav");
const IconClose =document.querySelector(".icon-close");
const IconOpen =document.querySelector(".icon-open");
const header =document.querySelector(".header");
const html =document.querySelector("html")


nav.addEventListener("click",(e)=>{
if(e.target.classList.contains("main-nav-link")){
    navLinks.forEach((link)=>link.classList.remove("active-link"));
    e.target.classList.add("active-link");

}

});



BtnNav.addEventListener("click",()=>{
    IconClose.classList.toggle("hide");
    IconOpen.classList.toggle("hide");
    header.classList.toggle("open-nav");
    html.classList.toggle("hideOverflowY");
})
