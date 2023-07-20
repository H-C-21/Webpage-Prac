let navbar = document.querySelector("#navmain");

console.log(navbar)

document.addEventListener("scroll", event => {
    if(window.scrollY > 100){
        navbar.classList.add("nav2")
    }
    else{
        navbar.classList.remove("nav2")
    }
   
},{passive:true});

let up = document.getElementById("up-arrow")
up.addEventListener("click", event =>{
        window.scrollTo(0,0)
})