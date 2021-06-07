var screenWidth = window.innerWidth;
var navSubMenu = document.querySelector(".menu-item.has-sub-menu");
var navMenu = document.querySelector(".header-menu");
var burger = document.querySelector(".burger");

var mobileToggleButton = document.querySelector(".has-sub-menu i");
var closeNavbarIcon = document.querySelector(".close");

console.log(screenWidth);

if(screenWidth > 993){
    navSubMenu.onmouseover = function(){
        this.classList.add("active");
    }
    
    navSubMenu.onmouseout = function(){
        this.classList.remove("active");
    }
}else{
    burger.addEventListener('click', function(){
        this.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    mobileToggleButton.addEventListener('click', function(){
        this.parentElement.classList.toggle("active");
        this.classList.toggle("active");
    });
    closeNavbarIcon.addEventListener('click', function(){
        navMenu.classList.toggle("active");
        burger.classList.toggle("active");
    });
}

