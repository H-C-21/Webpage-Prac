const burger = document.getElementById("burger-toggler")
const burgerIcon = document.getElementById("nav-burger-icon")
const navmenu = document.getElementById('hamburger-menu')

let state = false

burger.addEventListener('click', event => {
    
    
    replaceIcon(burgerIcon.classList,'fa-bars','fa-times')
    replaceIcon(navmenu.classList, 'd-none', 'l')
    state = !state

})


// navmenu.addEventListener('animationend', event=>{
      
//     if(burgerIcon.classList.contains('fa-bars')){
   
//        navmenu.classList.add('slideInRight')
   
//     }
//     if(burgerIcon.classList.contains('fa-times')){
         
//     }

// })

function replaceIcon(list,a,b){
    if(list.contains(a)){
        list.remove(a)
        list.add(b)
    }
    else{
        list.remove(b)
        list.add(a)
    }
}