
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


const toggleNav =()=>{
    IconClose.classList.toggle("hide");
    IconOpen.classList.toggle("hide");
    header.classList.toggle("open-nav");
    html.classList.toggle("hideOverflowY");  
}
BtnNav.addEventListener("click",toggleNav)

const allLinks =document.querySelectorAll('a:link');


allLinks.forEach( function(link){
    link.addEventListener('click',(e)=>{

        e.preventDefault();
        const href=link.getAttribute("href");

        //scroll back to top
        if(href==="#"){
            window.scrollTo({
                top:0,
                behavior:"smooth",

            })
        }

        //scroll to other links
        if(href !=="#" && href.startsWith("#")){
          const sectionEl=  document.querySelector(href);
          sectionEl.scrollIntoView(
            {
                behavior:"smooth",
            }
          )
        }

        //close mobile nav
        if(link.classList.contains('main-nav-link')){
           toggleNav();
            
        }

    });

})