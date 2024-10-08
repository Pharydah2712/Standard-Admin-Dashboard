
    const swiper = new Swiper('.dataStatsSlider', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Enable touch events
        touchEventsTarget: 'container',
        grabCursor: true,
    });
