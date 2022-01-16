$(document).ready(function(){

	$(".header__contact-us-button").hover(function(){
			$(this).css({
				"background": "#1a254c",
				"border": "1px solid #1a254c",
				"color": "#fff",
			});
		}, function(){
			$(this).css({
				"background": "transparent",
				"border": "1px solid #58beff",
				"color": "#fff",
			});
	});
	$(".header__contact-us-button").mousedown(function(){
		$(this).css({
			"background": "#f4f4f4",
			"border": "1px solid #f4f4f4",
			"color": "#000",
		});
	});
	$(".header__contact-us-button").mouseup(function(){
		$(this).css({
			"background": "transparent",
			"border": "1px solid #58beff",
			"color": "#fff",
		});
	});
/**************/
	
	$(".header__burger-menu").hover(function(){
		$("#header__burger-menu-item").css({
			"transform": "translateX(-10px)"
		});
		}, function(){
			$("#header__burger-menu-item").css({
				"transform": "translateX(0px)"
			});
	});

	$(".header__burger-menu-item__activate").hide();
	$(".landing-page__menu__activeted").hide();

	$(".header__burger-menu").click(function(){
		$(".header__burger-menu-item").toggle();
		$(".header__burger-menu-item__activate").toggle();
		$(".landing-page__menu__activeted").toggle();
	}, function(){
		$(".header__burger-menu-item").toggle();
		$(".header__burger-menu-item__activate").toggle();
		$(".landing-page__menu__activeted").toggle();
	});

/**************/
	$(".landing-page__button").hover(function(){
			$(this).css({
				"background": "#1a254c",
				"border": "1px solid #1a254c",
				"color": "#fff",
			});
		}, function(){
			$(this).css({
				"background": "#58beff",
				"border": "1px solid #58beff",
				"color": "#000",
			});
	});
	$(".landing-page__button").mousedown(function(){
		$(this).css({
			"background": "#f4f4f4",
			"border": "1px solid #f4f4f4",
			"color": "#000",
		});
	});
	$(".landing-page__button").mouseup(function(){
		$(this).css({
			"background": "#58beff",
			"border": "1px solid #58beff",
			"color": "#000",
		});
	});
/***************/
	$(".mission-content__button").hover(function(){
			$(this).css({
				"background": "transparent",
				"border": "1px solid #58beff",
				"color": "#fff",
			});
		}, function(){
			$(this).css({
				"background": "#58beff",
				"border": "1px solid #58beff",
				"color": "#000",
			});
	});
	$(".mission-content__button").mousedown(function(){
		$(this).css({
			"background": "#f4f4f4",
			"border": "1px solid #f4f4f4",
			"color": "#000",
			// "transition": ".25s"
		});
	});
	$(".mission-content__button").mouseup(function(){
		$(this).css({
			"background": "#58beff",
			"border": "1px solid #58beff",
			"color": "#000",
		});
	});

/**** Marketing - Slider ****/

	$(".marketing-slider__next-button").hover(function(){
		$(this).css({
			"border-bottom": "3px solid #fff",
			"border-right": "3px solid #fff"
		});
	}, function(){
		$(this).css({
			"border-bottom": "3px solid #42ffff",
			"border-right": "3px solid #42ffff"
		});
	});
	$(".marketing-slider__next-button").mousedown(function(){
		$(this).css({
			"border-bottom": "3px solid #1a254c",
			"border-right": "3px solid #1a254c"
		});
	});
	$(".marketing-slider__next-button").mouseup(function(){
		$(this).css({
			"border-bottom": "3px solid #42ffff",
			"border-right": "3px solid #42ffff"
		});
	});

/******************/

		$(".marketing-slider__prev-button").hover(function(){
		$(this).css({
			"border-top": "3px solid #fff",
			"border-left": "3px solid #fff"
		});
	}, function(){
		$(this).css({
			"border-top": "3px solid #42ffff",
			"border-left": "3px solid #42ffff"
		});
	});
	$(".marketing-slider__prev-button").mousedown(function(){
		$(this).css({
			"border-top": "3px solid #1a254c",
			"border-left": "3px solid #1a254c"
		});
	});
	$(".marketing-slider__prev-button").mouseup(function(){
		$(this).css({
			"border-top": "3px solid #42ffff",
			"border-left": "3px solid #42ffff"
		});
	});
/***********/

	var slideNow = 1;
	var slideCount = $(".marketing-slider__slidewrapper").children().length;
	var translateWidth = 0;

	function nextSlide() {
	    if (slideNow == 1) {
	        translateWidth = -$(".marketing-slider__viewport").width() * (slideNow);
	        $(".marketing-slider__slidewrapper").css({
	            "transform": "translate(" + translateWidth + "px, 0)",
	            "-webkit-transform": "translate(" + translateWidth + "px, 0)",
	            "-ms-transform": "translate(" + translateWidth + "px, 0)",
	        });
	        slideNow++;
	    }
	}

	function prevSlide() {
    if(slideNow == 2) {
        translateWidth = -$(".marketing-slider__viewport").width() * (slideNow - 2);
        $(".marketing-slider__slidewrapper").css({
            "transform": "translate(" + translateWidth + "px, 0)",
            "-webkit-transform": "translate(" + translateWidth + "px, 0)",
            "-ms-transform": "translate(" + translateWidth + "px, 0)",
        });
        slideNow--;
    }
	}

	$(".marketing-slider__prev-button").click(function(){
		prevSlide();
	});
	$(".marketing-slider__next-button").click(function(){
		nextSlide();
	});

/***********/

	$(".persons__gallery-button-outer").hover(function(){
		$(this).children().css({
			"border-bottom": "3px solid #1a254c",
			"border-right": "3px solid #1a254c",
		});
		$(this).css({
			"background-color": "#fff",
		});
	}, function(){
		$(this).children().css({
			"border-bottom": "3px solid #fff",
			"border-right": "3px solid #fff",
		});
		$(this).css({
			"background-color": "#31499b",
		});
	});
	$(".persons__gallery-button-outer").mousedown(function(){
		$(this).children().css({
			"border-bottom": "3px solid #263773",
			"border-right": "3px solid #263773"
		});
		$(this).css({
			"background-color": "#1a254c",
		});
	});
	$(".persons__gallery-button-outer").mouseup(function(){
		$(this).children().css({
			"border-bottom": "3px solid #fff",
			"border-right": "3px solid #fff"
		});
		$(this).css({
			"background-color": "#31499b",
		});
	});

// ******

	$(".persons-gallery__person-information").hide();

	$(".person-information__return").click(function(){
		$(".persons-gallery__person-information").hide();
		$(".person-information-1").hide();
		$(".person-information-2").hide();
		$(".person-information-3").hide();
		$(".person-information-4").hide();
	});	

	$(".persons__galery-1").click(function(){
			$(".persons-gallery__person-information").show();
		$(".person-information-1").show();
		$(".person-information-2").hide();
		$(".person-information-3").hide();
		$(".person-information-4").hide();
	});
	$(".persons__galery-2").click(function(){
			$(".persons-gallery__person-information").show();
		$(".person-information-1").hide();
		$(".person-information-2").show();
		$(".person-information-3").hide();
		$(".person-information-4").hide();
	});
	$(".persons__galery-3").click(function(){
			$(".persons-gallery__person-information").show();
		$(".person-information-1").hide();
		$(".person-information-2").hide();
		$(".person-information-3").show();
		$(".person-information-4").hide();
	});
	$(".persons__galery-4").click(function(){
			$(".persons-gallery__person-information").show();
		$(".person-information-1").hide();
		$(".person-information-2").hide();
		$(".person-information-3").hide();
		$(".person-information-4").show();
	});
//********
	$(".person-information__return").hover(function(){
		$(this).children().css({
			"border-bottom": "2px solid #1a254c",
			"border-left": "2px solid #1a254c"
		});
		$(this).css({
			"background-color": "#fff"
		});
		}, function(){
			$(this).children().css({
				"border-bottom": "2px solid #fff",
				"border-left": "2px solid #fff"
			});
			$(this).css({
				"background-color": "#31499b"
			});
		});
	$(".person-information__return").mousedown(function(){
		$(this).children().css({
			"border-bottom": "2px solid #213064",
			"border-left": "2px solid #213064"
		});
		$(this).css({
			"background-color": "#1a254c"
		});
	});
	$(".person-information__return").mouseup(function(){
		$(this).children().css({
			"border-bottom": "2px solid #fff",
			"border-left": "2px solid #fff"
		});
		$(this).css({
			"background-color": "#31499b"
		});
	});

//****
	$(".feedback__form-button").hover(function(){
		$(this).css({
			"background-color": "#31499b"
		});
	},function(){
			$(this).css({
				"background-color": "#1a254c"
			});
		});
	$(".feedback__form-button").mousedown(function(){
		$(this).css({
			"opacity": "0.5"
		});
	});
	$(".feedback__form-button").mouseup(function(){
		$(this).css({
			"opacity": "1"
		});
	});
});