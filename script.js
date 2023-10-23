console.clear();

// 스크롤이벤트 (top-bar & toTop)
function Topbar_Scroll() {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$(".top-bar").addClass("f-top-bar");
			$("#toTop").addClass("active");
		} else {
			$(".top-bar").removeClass("f-top-bar");
			$("#toTop").removeClass("active");
		}
	});
}

Topbar_Scroll();

// toTop버튼 누르면 위로 스크롤되도록
function ToTop__init(options) {
	
	const defaults = {
		srcollSpeed: 1200,
		easingType: 'linear'
	};
	
	const settings = $.extend(defaults, options);
	
	$("#toTopHover").click(function () {
		$("html, body").animate(
			{
				scrollTop: 0
			},
			settings.scrollSpeed,
			settings.easingType
		);
	});
}

ToTop__init();

// 반응형 사이드바 노출
function MobileTopBar__init() {
	$(".m-top-bar__btn-show").click(function () {
		MobileSideBar__show();
	});
}

// 반응형 사이드바 초기화
function MobileSideBar__init() {
	$(".m-side-bar__btn-close").click(function () {
		MobileSideBar__hide();
	});
}

// 반응형 사이드바 노출
const MobileSideBar__show = () => {
	$(".m-side-bar").addClass("active");
};

// 반응형 사이드바 숨김
function MobileSideBar__hide() {
	$(".m-side-bar").removeClass("active");
}

// main4 스와이퍼 구현
var mainSwiper = new Swiper(".main4-slide", {
	slidesPerView: 2,
	effect: "slide",
	centeredSlides: true,
	loopAdditionalSlides: 1,
	loopFillGroupWithBlank: false,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false
	},
	loop: true,
	spaceBetween: 20,
	breakpoints: {
		1600: {
			slidesPerView: 6,
			spaceBetween: 60
		},
		1300: {
			slidesPerView: 5,
			spaceBetween: 50
		},
		1080: {
			slidesPerView: 4,
			spaceBetween: 40
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	}
});

$(function () {
	$(".main4-slide").mouseover(function () {
		mainSwiper.autoplay.stop();
	});
	$(".main4-slide").mouseout(function () {
		mainSwiper.autoplay.start();
	});
});

/* 반응형 메뉴박스 시작 */
function MobileMenuBox1__init() {
	$(".m-menu-box-1 ul > li").click(function () {
		let $this = $(this);

		// 클릭 당한 녀석의 active 붙어 있는 형제의 active 붙어 있는 후손
		$this.siblings(".active").find(".active").removeClass("active");
		$this.siblings(".active").removeClass("active");

		if ($this.hasClass("active")) {
			$this.find(".active").removeClass("active");
			$this.removeClass("active");
		} else {
			$this.addClass("active");
		}
	});

	$(".m-menu-box-1 ul").click(function () {
		return false;
	});
}

function MobileMenuBox1__hide() {
	$(".m-menu-box-1 .active").removeClass("active");
}
/* 모바일 메뉴박스 끝 */

MobileMenuBox1__init();
MobileTopBar__init();
MobileSideBar__init();
