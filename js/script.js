;
(function ($) {

    $(document).ready(function () {
        var $gridImg = $('.grid').isotope({
            itemSelector: ".item",
            layoutMode: 'masonry',
            masonry: {
                columnWidth: 270,
                gutter: 5
            }
        });

        $("#filters button").click(function () {
            var $this = $(this);
            if (!$this.hasClass("is-checked")) {
                $this.parents("#navigation").find(".is-checked").removeClass("is-checked");
                $this.addClass("is-checked");
            }
            var selector = $this.attr("data-filter");
            $gridImg.isotope({
                filter: selector
            });
        });

        $('.team__slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            adaptiveHeight: true

        });
        $('.testimonials__slider').slick({
            dots: true,
            arroes:false,
            autoplay: true,
            autoplaySpeed: 3000
        });

    });



    })(jQuery);


 //Скрипт анимации












