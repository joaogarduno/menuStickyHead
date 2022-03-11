window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('down', window.scrollY > 0);
    
    //CHANGE LOGO
    var logo = document.querySelector(".logo a img");
    if (window.scrollY > 0){
        logo.setAttribute('src', 'img/logo/arthefacto_logo.png');
    } else{
        logo.setAttribute('src', 'img/logo/arthefacto_logo.png');
    }
});