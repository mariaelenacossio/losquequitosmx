$(function() {
	$('.set-bg').each(function () {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
});

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteDropdown = function() {

		$('nav .dropdown').hover(function(){
			var $this = $(this);
			$this.addClass('show');
			$this.find('> a').attr('aria-expanded', true);
			$this.find('.dropdown-menu').addClass('show');
		}, function(){
			var $this = $(this);
				$this.removeClass('show');
				$this.find('> a').attr('aria-expanded', false);
				$this.find('.dropdown-menu').removeClass('show');
		});


		$('#dropdown04').on('show.bs.dropdown', function () {
		  console.log('show');
		});

	  $('.navbar .dropdown > a').click(function(){
	    location.href = this.href;
	  });
	}; 
	siteDropdown();

	if ( $('.owl-2').length > 0 ) {
        $('.owl-2').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 20,
            smartSpeed: 1000,
            autoplay: true,
            nav: true,
            dots: true,
            pauseOnHover: false,
            responsive:{
                600:{
                    margin: 20,
                    nav: true,
                  items: 2
                },
                1000:{
                    margin: 20,
                    stagePadding: 0,
                    nav: true,
                  items: 3
                }
            }
        });            
    }



});