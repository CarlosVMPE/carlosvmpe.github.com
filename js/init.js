/** *************Init JS*********************
	
    TABLE OF CONTENTS
	---------------------------
	1.Load function
	2.Set height-width function
	3.Matresume function
	4.MasonryPortfolio function
	5.Ready function
	6.Resize function
	7.LightGallery Init
	8.Availablity Calendar
 ** ***************************************/

"use strict";

$(window).load(function () {
	$(".preloader-it").delay(500).fadeOut("slow");
	if (window.location.href.indexOf("index.html#") > -1)
		$("html, body").animate({ scrollTop: $(window.location.hash).offset().top - 50 }, 800);
});

/*****Load function start*****/
const loader = document.querySelector('.loader');
const main = document.querySelector('.main');
const contloader = document.querySelector('.cont-loader');
const body = document.getElementById('body');

function init() {
	setTimeout(() => {
		loader.style.opacity = 0;
		loader.style.display = 'none';
		contloader.style.display = 'none';

		main.style.display = 'block';
		body.style.overflow = 'inherit';

		setTimeout(() => {
			main.style.opacity = 1;
		}, 50);

	}, 1800);
}

init();
hideNavs();
/*****Load function* end*****/

/*****Hide Nav start*****/
function hideNavs() {
	const navs = document.querySelectorAll('.mdl-layout__drawer a');
	const leftNav = document.querySelector('.mdl-layout__drawer');
	const obfuscator = document.querySelector('.mdl-layout__obfuscator');
	for (let i = 0; i < navs.length; i++) {
		navs[i].addEventListener("click", function () {
			leftNav.setAttribute('aria-hidden', true);
			leftNav.classList.remove('is-visible');

		});
	}

	const closenav = document.querySelector('.closeLeftSidebar');
	closenav.addEventListener('click', function () {
		leftNav.setAttribute('aria-hidden', true);
		leftNav.classList.remove('is-visible');
	});

}
/*****Hide Nav* end*****/

/***** Set height-width function start *****/
var setHeightWidth = function () {
	var height = $(window).height();
	$('.full-height').css('min-height', (height));
	$('.full-width-header').width($('.main-wrapper').width());
};
/***** Set height-width function end *****/

/***** Matresume function start *****/
var matResume = function () {

	/*SmoothScroll*/
	smoothScroll.init({
		speed: 800,
		easing: 'easeInOutCubic',
		offset: 50,
		updateURL: false,
		callbackBefore: function (toggle, anchor) { },
		callbackAfter: function (toggle, anchor) { },
	});

	/*Scrollspy*/
	var bodySel = $("#body");
	bodySel.scrollspy({ target: ".mdl-scroll-spy-1", offset: 52 });
	var scollSpy2ActiveLI = "";
	bodySel.on('activate.bs.scrollspy', function () {
		if (scollSpy2ActiveLI != "") {
			scollSpy2ActiveLI.removeClass('active');
		}
		var activeTab = $('.mdl-scroll-spy-1 li.active a').attr('href');
		scollSpy2ActiveLI = $('.mdl-scroll-spy-2 li a[href="' + activeTab + '"]').parent();
		scollSpy2ActiveLI.addClass('active');
	})
	bodySel.trigger('activate.bs.scrollspy');

	/*Progressbar animation*/
	var progressBar = $('.progress-bar-graph div');
	for (var i = 0; i < progressBar.length; i++) {
		$(progressBar[i]).appear(function () {
			var percent = $(this).find('span').attr('data-width');
			var $endNum = parseInt($(this).find('.bar-wrap strong i').text(), 10);

			var $that = $(this);
			$(this).find('span').animate({
				'width': percent + '%'
			}, 1600, function () {
			});
			$(this).find('.bar-wrap strong').animate({
				'opacity': 1
			}, 1400);
			if (percent == '100') {
				$that.find('bar-wrap strong').addClass('full');
			}
		});
	}

	/*Slimscroll*/
	$('.nicescroll-bar').slimscroll({ height: '100%', color: '#01c853', opacity: 1, size: 5 });

	/*Testimonial carousel*/
	$('.testimonial-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		navText: ["<i class='zmdi zmdi-arrow-left'></i>", "<i class='zmdi zmdi-arrow-right'></i>"],
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		responsive: {
			0: {
				items: 1
			}
		}
	});

};
/***** Matresume function end *****/



/***** Availablity Calendar Start*****/
var d = new Date();
var n = d.getFullYear();
var notAvailableDates = ['01-05-' + n + '', '01-02-' + n + '', '01-12-' + n + '', '01-01-2017'];
$('#datepicker1').datepicker({
	showAnim: 'show',
	dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
	beforeShowDay: function (d) {
		var dmy = (d.getMonth() + 1);
		if (d.getMonth() < 9)
			dmy = "0" + dmy;
		dmy += "-";
		if (d.getDate() < 10) dmy += "0";
		dmy += d.getDate() + "-" + d.getFullYear();

		if ($.inArray(dmy, notAvailableDates) != -1) {
			return [false, "", "notAvailableDates"];
		} else {
			return [true, "", "Available"];
		}
	}
});
$(document).on('click', '#datepickopn', function (e) {
	e.stopPropagation();
	$('.datepicker').toggleClass('datepicker-open');
	return;
});
$(document).on('click', 'body', function (e) {
	$('.datepicker').removeClass('datepicker-open');
	return;
});
/***** Availablity Calendar End*****/