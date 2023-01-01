$(document).ready(function () {

    let make_logo = `<img src="./img/spade_w.png" alt="spade_w">
                        <img src="./img/diamond_w.png" alt="diamond_w">
                        <img src="./img/heart_w.png" alt="heart_w">
                        <img src="./img/club_w.png" alt="club_w">
                        `
    $(".logo_box").append(make_logo)
    let make_menu = `
                        
                            <a href="./m.player.html">
                                <div class="menu">
                                    <div>플레이어</div>
                                    <div>PLAYERS</div>
                                </div>
                            </a>
                            <a href="./m.dealer.html">
                                <div class="menu">
                                    <div>딜러</div>
                                    <div>DEALERS</div>
                                </div>
                            </a>
                            <a href="./m.game.html">
                                <div class="menu">
                                    <div>게임</div>
                                    <div>GAMES</div>
                                </div>
                            </a>
                            <div class="account_box">
                            <div id="login">로그인</div>
                            <div id="join">회원가입</div>
                            </div>
                            <div class="menu_btn_box"><div class="menu_btn"><div class="arrow"><img src="./img/down-arrow.png" alt="down_arrow"></div></div></div>
                            `
    $(".menu_box").append(make_menu)

    $(window).scroll(function () {
        // let s_top = $(window).scrollTop();
        // let banner_s = $(".banner_section").offset().top;

        // if (s_top >= banner_s) {
        //     $(".header_section").css({
        //         opacity: "1"
        //     })
        // }
        // else {
        //     $(".header_section").css({
        //         opacity: "1"
        //     })
        // }
    })
    let menu_active = false;
    $(".menu_btn").click(function () {
        if (menu_active != true) {
            $(".menu_box").css({ transform: "translateY(0)" })
            $(".arrow").css({ transform: "ratateZ(180deg)" })
            menu_active = true;

        }
        else {
            $(".menu_box").css({ transform: "translateY(-100%)" })
            $(".arrow").css({ transform: "ratateZ(0)" })
            menu_active = false;

        }
    })
})