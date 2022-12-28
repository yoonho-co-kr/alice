$(document).ready(function () {

    $(window).scroll(function () {
        let s_top = $(window).scrollTop();
        let banner_s = $(".banner_section").offset().top;

        if (s_top >= banner_s) {
            $(".header_section").css({
                opacity: "1"
            })
        }
        else {
            $(".header_section").css({
                opacity: "0"
            })
        }
    })

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,

        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    let put_banner_img = document.getElementsByClassName("swiper-slide")
    for (let i = 0; i < 4; i++) {
        put_banner_img[i].innerHTML += `<img src="./img/banner/banner${i + 1}.jpg" alt="">`;
    }
    // class CardFlipOnScroll {
    //     constructor(wrapper, sticky) {
    //         this.wrapper = wrapper
    //         this.sticky = sticky
    //         this.cards = sticky.querySelectorAll('.card')
    //         this.length = this.cards.length

    //         this.start = 0
    //         this.end = 0
    //         this.step = 0
    //     }

    //     init() {
    //         this.start = this.wrapper.offsetTop - 100
    //         this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight * 1.2
    //         this.step = (this.end - this.start) / (this.length * 2)
    //     }

    //     animate() {
    //         this.cards.forEach((card, i) => {
    //             const s = this.start + this.step * i
    //             const e = s + this.step * (this.length + 1)

    //             if (scrollY <= s) {
    //                 card.style.transform = `
    //           perspective(100vw)
    //           translateX(100vw) 
    //           rotateY(180deg)
    //         `
    //             } else if (scrollY > s && scrollY <= e - this.step) {
    //                 card.style.transform = `
    //           perspective(100vw)
    //           translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
    //           rotateY(180deg)
    //         `
    //             } else if (scrollY > e - this.step && scrollY <= e) {
    //                 card.style.transform = `
    //           perspective(100vw)
    //           translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
    //           rotateY(${180 + -(scrollY - (e - this.step)) / this.step * 180}deg)
    //         `
    //             } else if (scrollY > e) {
    //                 card.style.transform = `
    //           perspective(100vw)
    //           translateX(0vw) 
    //           rotateY(0deg)
    //         `
    //             }
    //         })
    //     }
    // }

    // const mainContent1 = document.querySelector('.main-content-1')
    // const sticky = document.querySelector('.sticky')
    // const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky)
    // cardFlipOnScroll.init()

    // window.addEventListener('scroll', () => {
    //     cardFlipOnScroll.animate()
    // })

    // window.addEventListener('resize', () => {
    //     cardFlipOnScroll.init()
    // })


})