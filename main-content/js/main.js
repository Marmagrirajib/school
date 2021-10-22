$(document).ready(function () {
    
    // smoth work for section
$(".main-menu li a").on('click',function(slow){
    if(this.hash !== " "){
        slow.preventDefault();
 
        var hash=this.hash;
        $("html, body").animate({
            scrollTop:$(hash).offset().top
        },1000,function(){
            window.location=hash;
        } 
        );
    }
 })



 
//   extra section jq 
$(".toggle-item1").click(function(){
    $(".toggle-item1-text").slideToggle();
     $('.toggle-item1').toggleClass("icon-join");
     $(".toggle-item2-text").slideUp();
     $(".toggle-item3-text").slideUp();
     $(".toggle-item5-text").slideUp();
     $(".toggle-item4-text").slideUp();
     $(".toggle-item6-text").slideUp();
     $('.toggle-item2').removeClass("icon-join");
     $('.toggle-item5').removeClass("icon-join");
     $('.toggle-item4').removeClass("icon-join");
     $(".toggle-item3-text").slideUp();
     $('.toggle-item3').removeClass("icon-join");     
     $('.toggle-item6').removeClass("icon-join");     
})

$(".toggle-item2").click(function(){
    $(".toggle-item2-text").slideToggle();
    $(".toggle-item1-text").slideUp();
     $(".toggle-item2").toggleClass("icon-join");
     $('.toggle-item1').removeClass("icon-join");
     $(".toggle-item3-text").slideUp();
     $(".toggle-item4-text").slideUp();
     $(".toggle-item5-text").slideUp();
     $(".toggle-item6-text").slideUp();
     $('.toggle-item3').removeClass("icon-join");     
     $('.toggle-item4').removeClass("icon-join");     
     $('.toggle-item5').removeClass("icon-join");     
     $('.toggle-item6').removeClass("icon-join");     
})

$(".toggle-item3").click(function(){
    $(".toggle-item3-text").slideToggle();
     $(".toggle-item3").toggleClass("icon-join");
     $(".toggle-item2-text").slideUp();
     $('.toggle-item2').removeClass("icon-join");
     $(".toggle-item4-text").slideUp();
     $(".toggle-item5-text").slideUp();
     $(".toggle-item6-text").slideUp();
     $('.toggle-item4').removeClass("icon-join");  
     $('.toggle-item4').removeClass("icon-join");  
     $('.toggle-item5').removeClass("icon-join");  
     $('.toggle-item6').removeClass("icon-join");  
})

$(".toggle-item4").click(function(){
    $(".toggle-item4-text").slideToggle();
     $(".toggle-item4").toggleClass("icon-join");
     $(".toggle-item2-text").slideUp();
     $(".toggle-item3-text").slideUp();
     $(".toggle-item5-text").slideUp();
     $(".toggle-item6-text").slideUp();
     $('.toggle-item2').removeClass("icon-join");
     $('.toggle-item3').removeClass("icon-join");
     $('.toggle-item5').removeClass("icon-join");
     $('.toggle-item6').removeClass("icon-join");
        
})
$(".toggle-item5").click(function(){
    $(".toggle-item5-text").slideToggle();
     $(".toggle-item5").toggleClass("icon-join");
     $(".toggle-item2-text").slideUp();
     $(".toggle-item3-text").slideUp();
     $(".toggle-item4-text").slideUp();
     $(".toggle-item1-text").slideUp();
     $(".toggle-item6-text").slideUp();
     $('.toggle-item2').removeClass("icon-join");
     $('.toggle-item3').removeClass("icon-join");
     $('.toggle-item4').removeClass("icon-join");
     $('.toggle-item6').removeClass("icon-join");
        
})

$(".toggle-item6").click(function(){
    $(".toggle-item6-text").slideToggle();
     $(".toggle-item6").toggleClass("icon-join");
     $(".toggle-item2-text").slideUp();
     $(".toggle-item3-text").slideUp();
     $(".toggle-item4-text").slideUp();
     $(".toggle-item1-text").slideUp();
     $(".toggle-item5-text").slideUp();
     $('.toggle-item2').removeClass("icon-join");
     $('.toggle-item3').removeClass("icon-join");
     $('.toggle-item4').removeClass("icon-join");
     $('.toggle-item1').removeClass("icon-join");
     $('.toggle-item5').removeClass("icon-join");
        
});
// menu active jq
$(".main-menu li").click(function(){
   $(this).addClass("menu-active").siblings().removeClass("menu-active")
})


// slider jq
$(".owl-carousel").owlCarousel({
    loop:true,
    autoplayTimeout:1500,
    autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        900:{
            items:3,
        },
        1200:{
            items:4,
        },
        1600:{
            items:5,
        },
        2000:{
            items:6,
        }
        
    }
});

$(".click-h1").click(function(){
  $(".toggle-me").slideToggle();
});

// jq madal video 
$(".js-modal-btn").modalVideo();
// jquery counterup plagin 
$('.counter').counterUp({
    delay: 10,
    time: 4000
});

//   serch option jq 

$(".navbar-serch").click(function(){
    $(".serch-option").toggle();
  });



  // scroll top btn jq
  $(".top").click(function(){
    $("html,body").animate({
        scrollTop:0
    },2000)
 });

 $(window).scroll(function(){
    var ourwindow=$(this).scrollTop();
 
    if(ourwindow<200){
     $(".top").fadeOut();
     }
    else{
      $(".top").fadeIn();
    }
 // nav bar jq
    if(ourwindow>100){
        $("nav").addClass("sticky-menu");
    }
    else{ 
        $("nav").removeClass("sticky-menu")
    }
 
 });



 $('[data-fancybox="glarry"]').fancybox({
    
    thumbs : {
        autoStart : true
      }
  });



//  wow js for animation
 
new WOW().init();

$('.carousel').carousel({
          
  })
    
  


});



var webloder=document.querySelector(".loder");
function siteloder(){
    webloder.style.display="none";
}

alert("Hey Do You Know That? It Is Demo Web tamplate Created By Developer Rajib Marmagri");


