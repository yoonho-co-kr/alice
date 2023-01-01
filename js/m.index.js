$(document).ready(function () {
    let ua = navigator.userAgent.toLowerCase();
    let sp = ["android", "ipad", "iphone"];
    for (let i = 0; i < sp.length; i++) {
        if (ua.match(sp[i])) {
            location.replace("./m.index.html");
        }
    }

    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    let put_banner_img = document.getElementsByClassName("swiper-slide")
    for (let i = 0; i < 4; i++) {
        put_banner_img[i].innerHTML += `<img src="./img/banner/banner${i + 1}.jpg" alt="">`;
    }

    // card section
    class CardFlipOnScroll {
        constructor(wrapper, sticky) {
            this.wrapper = wrapper
            this.sticky = sticky
            this.cards = sticky.querySelectorAll('.card')
            this.length = this.cards.length

            this.start = 0
            this.end = 0
            this.step = 0
        }

        init() {
            this.start = this.wrapper.offsetTop - 100
            this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight * 1.2
            this.step = (this.end - this.start) / (this.length * 2)
        }

        animate() {
            this.cards.forEach((card, i) => {
                const s = this.start + this.step * i
                const e = s + this.step * (this.length + 1)

                if (scrollY <= s) {
                    card.style.transform = `
              perspective(100vw)
              translateX(100vw) 
              rotateY(180deg)
            `
                } else if (scrollY > s && scrollY <= e - this.step) {
                    card.style.transform = `
              perspective(100vw)
              translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
              rotateY(180deg)
            `
                } else if (scrollY > e - this.step && scrollY <= e) {
                    card.style.transform = `
              perspective(100vw)
              translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
              rotateY(${180 + -(scrollY - (e - this.step)) / this.step * 180}deg)
            `
                } else if (scrollY > e) {
                    card.style.transform = `
              perspective(100vw)
              translateX(0vw) 
              rotateY(0deg)
            `
                }
            })
        }
    }

    const card_section = document.querySelector('.card_section')
    const sticky = document.querySelector('.sticky')
    const cardFlipOnScroll = new CardFlipOnScroll(card_section, sticky)
    cardFlipOnScroll.init()

    window.addEventListener('scroll', () => {
        cardFlipOnScroll.animate()
    })

    window.addEventListener('resize', () => {
        cardFlipOnScroll.init()
    })

    // console.log($(".photo").length)
    let count = 1;
    $(window).scroll(function () {
        let scroll_bottom = $(window).scrollTop() + $(window).height()
        let footer_top = $('.footer_section').offset().top;

        if (count < 4 && scroll_bottom >= footer_top) {
            for (let i = 0; i < 2; i++) {
                // $('.container').append(`<li class="item"></li>`)
                $(`<div class="photo"><div class="clone"></div></div>`).appendTo('.photo_box')
            }
            count += 1;
            // photo_click()
        }
    })

    // function index_chk() {
    //     let url = location.href;
    //     if (url.includes("index.html")) {
    //         // $(".menu div").eq(0).css({ transform: "translate(0, -40px)" })
    //         $(".menu").eq(0).find("div").css({ transform: "translate(0, -40px)" })
    //     }
    //     $()
    // }
    // index_chk()
    // photo_click()
    // function photo_click() {
    //     $(".photo").click(function () {

    //     })
    // }
    $(".photo").mouseenter(function () {
        $(this).children().css({
            scale: "1.2"
        })
    })
    $(".photo").mouseleave(function () {
        $(".photo").children().css({
            scale: "1"
        })
    })
})