$(document).ready(function () {

    let make_header = `<a href="index.html" class="a_box">
            <div class="logo_box">
                <img src="./img/spade_s.png" alt="spade_s"><img src="./img/diamond_s.png" alt="diamond_s"><img
                    src="./img/heart_s.png" alt="heart_s"><img src="./img/club_s.png" alt="club_s">
            </div>
        </a>
        <div class="menu_box">
            <div class="menu">
                <div>소개</div>
                <div>ABOUT</div>
            </div>
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
            <div id="login">로그인</div>
            <div id="join">회원가입</div>
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