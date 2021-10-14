const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Fade in show
const popUpFront = $('.popup-front');
const closePopUp = $('.close-popup');
const imgclosePopUp = $('.img-close-popup');
closePopUp.onclick = function () {
    popUpFront.style.display = 'none';
}

popUpFront.onclick = function () {
    popUpFront.style.display = 'none';
}

imgclosePopUp.onclick = function (event) {
    event.stopPropagation();
}

//Header and to header
const header = $('#header');
const clickToHeader = $('.click-to-header');

window.onscroll = function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        header.classList.add('header-fix');
        clickToHeader.style.display = 'block';
    } else {
        header.classList.remove('header-fix');
        clickToHeader.style.display = 'none';
    }
}

//Header-right open
const navIconRegion = $('#nav-icon-region');
const menuRight = $('.menu-position-right');

navIconRegion.onclick =function() {
    if(this.classList.contains('open')) {
        this.classList.remove('open');
        menuRight.style.transform = 'translateX(100%)';
    }else {
        this.classList.add('open');
        menuRight.style.transform = 'translateX(0)';
    }
}

// Mobile menu full
const menuToggleBtn = $('.menu-toggle-btn');
const mobileMenuFull = $('.mobile-menu-full');
menuToggleBtn.onclick = function() {
    if(this.classList.contains('active')) {
        this.classList.remove('active');
        mobileMenuFull.style.transform = 'translateX(-100%)';
    }else {
        this.classList.add('active');
        mobileMenuFull.style.transform = 'translateX(0)';
    }
}

//Nav-item active
const navItems = $$('.nav-item');
const tabContents = $$('.tab-content');

navItems.forEach(function(navItem, index) {

    const tabContent = tabContents[index];
    navItem.onclick = function(e) {
        e.preventDefault();

        $('.nav-item.active').classList.remove('active');
        $('.tab-content.active').classList.remove('active');

        this.classList.add('active');
        tabContent.classList.add('active');
    }
})

// Slide-img
var slideIndex = 0;
var i = 0;
var slides = $$(".slide-img");

//Clear all images
function reset() {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
}

showItemsBlock1();

// Show images
function showItemsBlock1() {
    reset();
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showItemsBlock1, 4000); // Change image every 4 seconds
}

// Click prev
$('#slide-pre').onclick = function () {
    reset();
    slideIndex--;
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    slides[slideIndex - 1].style.display = "block";
}

// Click next
$('#slide-next').onclick = function () {
    reset();
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
}

// Block -slide-container
const blockNumbers = $$('.block-number');
const blockSlideContainers = $$('.block-slide-container');

blockNumbers.forEach(function(blockNumber, index) {

    const blockSlideContainer = blockSlideContainers[index];
    blockNumber.onclick = function(e) {

        $('.block-number.active').classList.remove('active');
        $('.block-slide-container.active').classList.remove('active');

        this.classList.add('active');
        blockSlideContainer.classList.add('active');
    }
})

// Slide-item-block1
var slideQuote = 0;
var i = 0;

var slideItems = $$(".swiper-slide .item");
const pieCountDowns = $$('.pie-count-down');
pieCountDowns.forEach(function(pieCountDown, index) {

    const slideItem = slideItems[index];
    pieCountDown.onclick = function() {

        $('.pie-count-down.active').classList.remove('active');
        $('.swiper-slide .item-active').classList.remove('active');

        this.classList.add('active');
        slideItem.classList.add('active');
    }
})

// Slide-item-block2
const swiperWrapper2 = $(".block2 .swiper-wrapper");
const swiperSlides2 = $$(".block2 .swiper-slide");
const pieCountDowns2 = $$(".block2 .swiper-pagination .pie-countdown");
swiperSlides2.forEach(function(slide, index) {
    slide.style.width = (window.innerWidth / 2) + "px";
    next = (window.innerWidth / 2) * 3/2;
    if (window.innerWidth < 768) {
        slide.style.width = (window.innerWidth) + "px";
    }
})
const widthSlide2 = swiperSlides2[2].offsetWidth;
var next = widthSlide2 * 3/2 + 7;
if (window.innerWidth < 768) {
    next = widthSlide2 * 2 + 7;
}
let index = 2;
let pageIndex = 0;
swiperWrapper2.style.transform = 'translateX(-' + next + 'px)';
setInterval(function() {
    $(".block2 .swiper-slide.swiper-slide-active").classList.remove('swiper-slide-active');
    $(".block2 .swiper-slide.swiper-slide-prev").classList.remove('swiper-slide-prev');
    $(".block2 .swiper-slide.swiper-slide-next").classList.remove('swiper-slide-next');
    $(".block2 .swiper-pagination .pie-countdown-swiper-active").classList.remove('pie-countdown-swiper-active');
    if (window.innerWidth < 768) {
        if(next < widthSlide2 * 4) {
            next += widthSlide2;
            if(index < 5) {
                index++;
            }
            if(pageIndex < 3) {
                pageIndex++;
            }
        } else {
            next = widthSlide2 * 3/2 + 7;
            if (window.innerWidth < 768) {
                next = widthSlide2 * 2 + 3;
            }
            index = 2;
            pageIndex = 0;
        }
    } else {
        if(next < widthSlide2 * 3) {
            next += widthSlide2;
            if(index < 5) {
                index++;
            }
            if(pageIndex < 3) {
                pageIndex++;
            }
        } else {
            next = widthSlide2 * 3/2 + 7;
            if (window.innerWidth < 768) {
                next = widthSlide2 * 2 + 3;
            }
            index = 2;
            pageIndex = 0;
        }
    }
    swiperWrapper2.style.transform = 'translateX(-' + next + 'px)';
    swiperWrapper2.style.transition = 'all 0.3s linear';
    swiperSlides2[index].classList.add('swiper-slide-active');
    swiperSlides2[index - 1].classList.add('swiper-slide-prev');
    swiperSlides2[index + 1].classList.add('swiper-slide-next');
    pieCountDowns2[pageIndex].classList.add('pie-countdown-swiper-active');
    let pieCountDownNotActives2 = $$(".block2 .swiper-pagination .pie-countdown:not(.pie-countdown-swiper-active)");
    for(let i = 0; i < pieCountDownNotActives2.length; i++) {
        pieCountDownNotActives2[i].innerHTML = `<span></span>`;
    }
    pieCountDowns2[pageIndex].innerHTML = `<div class="wrapper-circle" data-anim="base wrapper">
                                                <div class="circle" data-anim="base left"></div>
                                                <div class="circle" data-anim="base right"></div>
                                            </div>
                                            <label class="dot"></label>`;
}, 5000)

// Xe ô tô Block 3
const swiperContainer3 = $(".block3 .swiper-container");
const swiperWrapper3 = $(".block3 .swiper-wrapper");
const swiperSlides3 = $$(".block3 .swiper-slide");
const pieCountDowns3 = $$(".block3 .swiper-pagination .pie-countdown");

const widthSlide3 = swiperSlides3[1].offsetWidth;
let next3 = window.innerWidth;
swiperSlides3[0].classList.add("swiper-slide-active")
let index3 = 0;
setInterval(function() {
    $(".block3 .swiper-slide-active").classList.remove("swiper-slide-active")
    $(".block3 .swiper-pagination .pie-countdown-swiper-active").classList.remove('pie-countdown-swiper-active');
    if(index3 < 1) {
        index3++;
        next3 = widthSlide3;
    } else {
        index3 = 0;
        next3 = 0;
    }
    swiperWrapper3.style.transform = "translate(-" + next3 + "px)";
    swiperWrapper3.style.transition = "all 0.3s linear";
    swiperSlides3[index3].classList.add("swiper-slide-active");
    pieCountDowns3[index3].classList.add('pie-countdown-swiper-active');
    let pieCountDownNotActives3 = $$(".block3 .swiper-pagination .pie-countdown:not(.pie-countdown-swiper-active)");
    for(let i = 0; i < pieCountDownNotActives3.length; i++) {
        pieCountDownNotActives3[i].innerHTML = `<span></span>`;
    }
    pieCountDowns3[index3].innerHTML = `<div class="wrapper-circle" data-anim="base wrapper">
                                                <div class="circle" data-anim="base left"></div>
                                                <div class="circle" data-anim="base right"></div>
                                            </div>
                                            <label class="dot"></label>`;
}, 5000);

// Xe máy Block 4
const swiperContainer4 = $(".block4 .swiper-container");
const swiperWrapper4 = $(".block4 .swiper-wrapper");
const swiperSlides4 = $$(".block4 .swiper-slide");
const pieCountDowns4 = $$(".block4 .swiper-pagination .pie-countdown");

const widthSlide4 = swiperSlides4[1].offsetWidth;
swiperSlides4[0].classList.add("swiper-slide-active")
let index4 = 0;
let next4 = widthSlide4;
setInterval(function() {
    $(".block4 .swiper-slide-active").classList.remove("swiper-slide-active")
    $(".block4 .swiper-pagination .pie-countdown-swiper-active").classList.remove('pie-countdown-swiper-active');
    if(index4 < 1) {
        index4++;
        next4 = widthSlide4;
    } else {
        index4 = 0;
        next4 = 0;
    }
    swiperWrapper4.style.transform = "translate(-" + next4 + "px)";
    swiperWrapper4.style.transition = "all 0.3s linear";
    swiperSlides4[index4].classList.add("swiper-slide-active");
    pieCountDowns4[index4].classList.add('pie-countdown-swiper-active');
    let pieCountDownNotActives4 = $$(".block4 .swiper-pagination .pie-countdown:not(.pie-countdown-swiper-active)");
    for(let i = 0; i < pieCountDownNotActives4.length; i++) {
        pieCountDownNotActives4[i].innerHTML = `<span></span>`;
    }
    pieCountDowns4[index4].innerHTML = `<div class="wrapper-circle" data-anim="base wrapper">
                                                <div class="circle" data-anim="base left"></div>
                                                <div class="circle" data-anim="base right"></div>
                                            </div>
                                            <label class="dot"></label>`;
}, 5000);




// Responsive footer

const listmenuFooters = $$(".list-menu")
const menuFooters = $$(".list-menu .menu")
const caretDowns = $$(".caret-down")
const menuTitles = $$(".menu-title")
menuTitles.forEach(function (menuTitle, index) {

    const menuFooter = menuFooters[index];
    const caretDown = caretDowns[index];
    const listmenuFooter = listmenuFooters[index];
    menuTitle.onclick = function () {
        listmenuFooter.classList.toggle("active");
        caretDown.classList.toggle('active');
        // menuFooter.style.transition = 'all 0.3s linear';
    }
})










