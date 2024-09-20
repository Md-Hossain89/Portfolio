(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);








document.addEventListener('DOMContentLoaded', function() {
            const items = document.querySelectorAll('#team-items .team-item');
            const seeMoreBtn = document.getElementById('see-more-btn');
            const seeLessBtn = document.getElementById('see-less-btn');
            const itemsPerPage = 4;
            let currentItemIndex = 0;

            function showItems(startIndex, endIndex) {
                for (let i = startIndex; i < endIndex; i++) {
                    if (items[i]) {
                        items[i].classList.remove('hidden');
                    }
                }
            }

            function hideItems(startIndex, endIndex) {
                for (let i = startIndex; i < endIndex; i++) {
                    if (items[i]) {
                        items[i].classList.add('hidden');
                    }
                }
            }

            function updateDisplay() {
                hideItems(0, items.length);
                showItems(0, Math.min(itemsPerPage, items.length));
                currentItemIndex = itemsPerPage;

                if (items.length <= itemsPerPage) {
                    seeMoreBtn.style.display = 'none';
                } else {
                    seeMoreBtn.style.display = 'block';
                }
                seeLessBtn.style.display = 'none';
            }

            seeMoreBtn.addEventListener('click', function() {
                const nextItemIndex = currentItemIndex + itemsPerPage;
                showItems(currentItemIndex, nextItemIndex);
                currentItemIndex = nextItemIndex;

                if (currentItemIndex >= items.length) {
                    seeMoreBtn.style.display = 'none';
                }
                seeLessBtn.style.display = 'block';
            });

            seeLessBtn.addEventListener('click', function() {
                const previousItemIndex = currentItemIndex - itemsPerPage;
                hideItems(previousItemIndex, currentItemIndex);
                currentItemIndex = previousItemIndex;

                if (currentItemIndex <= itemsPerPage) {
                    hideItems(0, items.length);
                    showItems(0, itemsPerPage);
                    seeMoreBtn.style.display = 'block';
                    seeLessBtn.style.display = 'none';
                } else {
                    showItems(currentItemIndex - itemsPerPage, currentItemIndex);
                }
            });

            updateDisplay();
        });













