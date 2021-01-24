if (window.innerWidth < 768) {
    new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 0
    }); 
} else {
    document.querySelector('.swiper-container').classList.remove('swiper-container');
    document.querySelector('.swiper-wrapper').classList.remove('swiper-wrapper');
    document.querySelector('.swiper-pagination').classList.remove('swiper-pagination');
    let swiperSlides = document.querySelectorAll('.swiper-slide');
    for ( let i = 0; i < swiperSlides.length ; i++ ) {
        swiperSlides[i].classList.remove('swiper-slide');
    }
}

let lists = document.querySelectorAll('.list__item');
if ( window.innerWidth >= 768 && window.innerWidth < 1120 ) {
    for ( let i = 6; i < lists.length; i++ ) {
        lists[i].style.display = 'none';
    }

    let button = document.querySelector('.button');
    button.addEventListener('click', function () {
        for ( let i = 6; i < lists.length; i++ ) {
            if ( lists[i].style.display == 'none' ) {
                lists[i].style.display = 'block';  
            } else {
                lists[i].style.display = 'none';
            } 
        }
    });
}


if ( window.innerWidth >= 1120 ) {
    for ( let i = 8; i < lists.length; i++ ) {
        lists[i].style.display = 'none';
    }
    
    let button = document.querySelector('.button');
    button.addEventListener('click', function () {
        for ( let i = 8; i < lists.length; i++ ) {
            if ( lists[i].style.display == 'none' ) {
                lists[i].style.display = 'block';  
            } else {
                lists[i].style.display = 'none';
            } 
        }
    });
}
