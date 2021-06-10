var screenWidth = window.innerWidth;
var navSubMenu = document.querySelector(".menu-item.has-sub-menu");
var navMenu = document.querySelector(".header-menu");
var burger = document.querySelector(".burger");
var mobileToggleButton = document.querySelectorAll(".has-sub-menu i");
var closeNavbarIcon = document.querySelector(".close");
var transBackground = document.querySelector(".trans-background");


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
        transBackground.classList.toggle("active");
    });
    for(i=0;i<mobileToggleButton.length;i++){
        mobileToggleButton[i].addEventListener('click', function(){
            this.parentElement.classList.toggle("active");
            this.classList.toggle("active");
            console.log(this);
        });
    }
    
    closeNavbarIcon.addEventListener('click', function(){
        navMenu.classList.toggle("active");
        burger.classList.toggle("active");
        transBackground.classList.toggle("active");
    });
    transBackground.addEventListener('click', function(){
        this.classList.toggle("active");
        navMenu.classList.toggle("active");
        burger.classList.toggle("active");

    });
}

