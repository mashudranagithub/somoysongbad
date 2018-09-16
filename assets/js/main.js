$(document).ready(function(){
    
    
    
//    $breadcrumb-divider: quote(">");
    
    
    $('.latest_news').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
    $('.box_slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
    $('.bd_slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
    $('.international_slide').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    
    $('.big_news_image').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
    
    //main menu active effect
//    $(document).ready(function () {
////        $('.main_mega_menu').children('ul').children('li').click(function(){
//////            $(this).nextAll().removeClass('bg_deep');
//////            $(this).prevAll().removeClass('bg_deep');
////            $('.main_mega_menu').children('ul').children('li').removeClass('bg_deep');
////            $(this).addClass('bg_deep');
////        });
//        
////        $('.main_mega_menu').children('ul').children('li').children('a').click(function(){
////            $(this).parent('li').addClass('bg_deep');
////            $(this).parent('li').siblings('li').removeClass('bg_deep');
////        });
//    });
    
    
    
    
    
    
    
    //Comment Form
    $(document).ready(function(){
        $('.comment_form').hide();
        $('.comment_cancel').hide();
        
        $('.btn-reply').click(function(){
            $(this).parent('.comment').siblings('.comment_form').show();
            $(this).hide();
            $(this).siblings('.comment_cancel').show();
        });
        
        $('.comment_cancel').click(function(){
            $(this).parent('.comment').siblings('.comment_form').hide();
            $(this).hide();
            $(this).siblings('.btn-reply').show();
        });
        
    });
    
        $(document).ready(function () {
            //for sticky menu
            var x = $('.header_bottom').offset().top;
            $(window).scroll(function () {
                var y = $(window).scrollTop();
                if (y > x) {
                    $('.header_bottom').addClass('sticky');
                }
                else {
                    $('.header_bottom').removeClass('sticky');
                }
            });
            $('.header_bottom').wrapAll('<div class="cover">');
            $('.cover').css('height', $('.header_bottom').outerHeight());
            
            
            
            
            
//jQuery Code for back to top          
            
$(window).scroll(function(){    
    var wScroll = $(this).scrollTop();

    var showScrollButton = 5;

    if(wScroll > showScrollButton){
        $('#top').fadeIn();  
    }else{
        $('#top').fadeOut();
    }

});


//creating click function
$('#top').click(function(){
    $('body, html').animate({
       scrollTop:0 
    }, 2000);
    return false;
});
            
            
        });
});


$(document).ready(function(){
    $(".closeMenu").css({"display": "none"});
    $(".openMenu").click(function(){
        $(this).css({"display": "none"});
        $(".main_mega_menu").css({"width": "200px", "right": "0" , "display": "inline-block", "background": "black", "opacity": "1", "transition": "0.5s"});
        $(".closeMenu").css({"display": "inline-block"});
        $(".mega_menu_content").css({"display": "none"});
        $(".mega_menu a i.fa").css({"display": "none"});
        $(".search-container").css({"display": "none"});
    });
    
    $(".closeMenu").click(function(){
        $(this).css({"display": "none"});
        $(".main_mega_menu").css({"width": "-25px", "opacity": "0"});
        setTimeout(function(){
          $(".openMenu").show();
        }, 500);
    });
});