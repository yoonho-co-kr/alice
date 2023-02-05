$(document).ready(function () {


    var swiper = new Swiper(".swipper-container", {
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
    $(".swiper-slide").click(function () {
        $(location).attr("href", "game.html")
    })
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
            this.start = this.wrapper.offsetTop - 1000
            this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight * 1.2
            this.step = (this.end - this.start) / (this.length * 2)
        }

        animate() {
            this.cards.forEach((card, i) => {
                const s = this.start + this.step * i
                const e = s + this.step * (this.length + 1)

                if (scrollY <= s) {
                    if (i % 2 == 1) {
                        card.style.transform = `
                                                perspective(100vw)
                                                translateY(77vh) 
                                                rotateY(180deg)
                                                `
                    }
                    else {
                        card.style.transform = `
                                                perspective(100vw)
                                                translateY(-77vh) 
                                                rotateY(180deg)
                                                `
                    }

                } else if (scrollY > s && scrollY <= e - this.step) {
                    if (i % 2 == 1) {
                        card.style.transform = `
                                perspective(100vw)
                                translateY(${77 + (scrollY - s) / (e - s) * -77}vh)
                                rotateY(180deg)
                                `
                    }
                    else {
                        card.style.transform = `
                                perspective(100vw)
                                translateY(-${77 + (scrollY - s) / (e - s) * -77}vh)
                                rotateY(180deg)
                                `
                    }
                } else if (scrollY > e - this.step && scrollY <= e) {
                    if (i % 2 == 1) {
                        card.style.transform = `
                                perspective(100vw)
                                translateY(${77 + (scrollY - s) / (e - s) * -77}vh)
                                rotateY(${180 + -(scrollY - (e - this.step)) / this.step * 180}deg)
                                `
                    }
                    else {
                        card.style.transform = `
                                perspective(100vw)
                                translateY(-${77 + (scrollY - s) / (e - s) * -77}vh)
                                rotateY(${180 + -(scrollY - (e - this.step)) / this.step * 180}deg)
                                `
                    }

                } else if (scrollY > e) {
                    card.style.transform = `
                                perspective(100vw)
                                translateY(0vh) 
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
    for (let i = 0; i < 12; i++) {
        let put_photo = `<img src="./img/photo/photo${i + 1}.png" alt="photo${i + 1}"></img>`
        $(".photo").eq(i).append(put_photo);
    }
    // console.log($(".photo").length)
    let count = 1;
    $(window).scroll(function () {
        let scroll_bottom = $(window).scrollTop() + $(window).height()
        let footer_top = $('.footer_section').offset().top;

        if (count < 4 && scroll_bottom >= footer_top) {
            for (let i = 0; i < 3; i++) {
                // $('.container').append(`<li class="item"></li>`)
                $(`<div class="photo"><img src = "./img/photo/photo${(count * 3) + i + 1}.png" alt = "photo${(count * 3) + i + 1}" ></div></div>`).appendTo('.photo_box')
            }
            count += 1;
            // photo_click()
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
        }
    })

    function index_chk() {
        let url = location.href;
        if (url.includes("index.html")) {
            // $(".menu div").eq(0).css({ transform: "translate(0, -40px)" })
            $(".menu").eq(0).find("div").css({ transform: "translate(0, -40px)" })
        }
        $()
    }
    index_chk()
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