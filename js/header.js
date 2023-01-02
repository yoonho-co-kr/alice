$(document).ready(function () {

    let make_header = `<a href="index.html" class="a_box">
            <div class="logo_box">
                <img src="./img/spade_w.png" alt="spade_w"><img src="./img/diamond_w.png" alt="diamond_w"><img
                    src="./img/heart_w.png" alt="heart_w"><img src="./img/club_w.png" alt="club_w">
            </div>
        </a>
        <div class="menu_box">
        <a href="./index.html">
            <div class="menu">
                <div>소개</div>
                <div>ABOUT</div>
            </div>
            </a>
            <a href="./player.html">
                <div class="menu">
                    <div>플레이어</div>
                    <div>PLAYERS</div>
                </div>
            </a>
            <a href="./dealer.html">
                <div class="menu">
                    <div>딜러</div>
                    <div>DEALERS</div>
                </div>
            </a>
            <a href="./game.html">
                <div class="menu">
                    <div>게임</div>
                    <div>GAMES</div>
                </div>
            </a>
        </div>
        <div class="account_box">
            <a href="./login.html"><div id="login">로그인</div></a>
            <a href="./join.html"><div id="join">회원가입</div></a>
        </div>`
    $(".header_section").append(make_header)


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
                opacity: "1"
            })
        }
    })


})