window.onload = function(){
    navslide();
}


function navslide() {
    document.querySelector('.burger').addEventListener('click', function() {
        var slide = document.querySelector('.inner');
        var nav1 = document.querySelector('.nav1');
        var nav2 = document.querySelector('.nav2');
        var nav3 = document.querySelector('.nav3');
        var nav4 = document.querySelector('.nav4');
        if(slide.style.transform != "translateX(0%)"){
            slide.style.transform = "translateX(0%)";
            nav1.style.opacity = "1";
            nav2.style.opacity = "1";
            nav3.style.opacity = "1";
            nav4.style.opacity = "1";
        }else{
            slide.style.transform = "translateX(100%)";
            nav1.style.opacity = "0";
            nav2.style.opacity = "0";
            nav3.style.opacity = "0";
            nav4.style.opacity = "0";
        }
    })
  }
