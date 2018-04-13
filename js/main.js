$(document).ready(function(){
	function initActiveMenuItem() {
		function setActiveMenuItem() {
			var scrolledTopNow = $(document).scrollTop(),
					windowHeight = $(window).outerHeight(),
					menuItems = $("a", $('.menu')).map(function() {
						if (this.hash != '') {
							return this;
						}
					});

			menuItems.each(function() {
				var menuItem,
						targetItem,
						sectionTopPosition,
						sectionHeight;

				menuItem = $(this);
				targetItem = menuItem.attr('href');
				sectionTopPosition = $(targetItem).position().top;
				sectionHeight = $(targetItem).innerHeight();
				if (scrolledTopNow >= sectionTopPosition - windowHeight/4 &&
					scrolledTopNow < sectionTopPosition + sectionHeight - windowHeight/4) {

					menuItems.removeClass('active');
					$(this).addClass('active');

				} else {
					menuItem.removeClass("active");
				}
			});
		}

		$(window).scroll(function() {
			setTimeout(function() {
				setActiveMenuItem();
			}, 1000);
		});

		setActiveMenuItem();
	}

	function setFooterDate() {
		$('footer span').text(new Date().getFullYear());
	}

	function smoothscroll() {
		$(".navbar a").click(function(){
			$("body,html").animate({
				scrollTop:$($(this).attr('href')).offset().top
			},1000)
		})
	}

	initActiveMenuItem();
	setFooterDate();
	smoothscroll();
})