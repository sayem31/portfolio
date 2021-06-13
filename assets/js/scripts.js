$(document).ready(function(){

	/*-------------------------------
			progress bar js
	--------------------------------*/
	$('#bar1').barfiller({ barColor: '#4EBE2A', duration: 2000 });
	$('#bar2').barfiller({ barColor: '#4EBE2A', duration: 2000 });
	$('#bar3').barfiller({ barColor: '#4EBE2A', duration: 2000 });
	$('#bar4').barfiller({ barColor: '#4EBE2A', duration: 2000 });
	$('#bar5').barfiller({ barColor: '#4EBE2A', duration: 2000 });
	$('#bar6').barfiller({ barColor: '#4EBE2A', duration: 2000 });
	$('#bar7').barfiller({ barColor: '#4EBE2A', duration: 2000 });
	/*--------------------------------
			owl-carousel js
	--------------------------------*/
	$('.team-item').owlCarousel({
		items:3,
		loop:true,
		autoplay:true,
		nav:true,
		margin:30,
		autoplaySpeed:100,
		 responsive: {

            0: {
                items: 1,
            },

            767: {
                items: 2,
            },
            
            991: {
            	items: 3,
            }
        },
	});
	/*-------------------------------
			Mix it up js
	--------------------------------*/
	var mixer = mixitup('.portfolio',{
				load:{
					filter:'.design, .dev, .apps, .graphics'
				},
				 	 animation: {
      				  effects: 'rotateY(-25deg)',
     				   perspectiveDistance: '2000px'
 			    }

			});
	/*-----------------------------------
			Rippls effect js
	-----------------------------------*/
			/*$('.header-area').ripples({
  				dropRadius: 10,
  				perturbance: 0.5,
  
				});*/
	/*----------------------------
			menu toggle js
	----------------------------*/
	$('.nav-icon').click(function(){
		$('.menu ul').slideToggle(1000);

		return false
	});
 	/*---------------------------------
			back to top js
 	---------------------------------*/
 	jQuery("#backtotop").click(function () {
    	jQuery("body,html").animate({
        	scrollTop: 0
    	}, 1000);
	});
	jQuery(window).scroll(function () {
    	if (jQuery(window).scrollTop() > 150) {
        	jQuery("#backtotop").addClass("visible");
    	} 
    	else {
        	jQuery("#backtotop").removeClass("visible");
    	}
	});
	/*----------------------------------------
			Detect Mobile
	----------------------------------------*/
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};
	/*----------------------------------
			typed js
	----------------------------------*/ 
	var typed = new Typed(".typing2", {
        strings: ["I am <strong>Sayem</strong>", "I am a <strong>Developer</strong>", 
        "I am a <strong>Designer</strong>", "I am a <strong>Freelancer</strong>"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
	/*-----------------------------------
			section scroll js
	------------------------------------*/
	$( '.menu ul li a' ).on( 'click', function(e){
  		var href = $(this).attr( 'href' );
  			$( 'html, body' ).animate({
			scrollTop: $( href ).offset().top
  			}, '1000' );
  		e.preventDefault();
		});
	/*----------------------------------
				menu fixed
	------------------------------------*/
	$(window).scroll(function () {

		if (this.scrollY > 20) {
		$('.logo-menu-area').addClass("sticky");
		} else {
		$('.logo-menu-area').removeClass("sticky");
		}
		
});

});

