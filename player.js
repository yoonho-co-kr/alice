$(document).ready(function () {

    put_card()
    function put_card() {
        let url = location.href;
        if (url.includes("player.html")) {

            for (let i = 0; i < player.length; i++) {
                let insert_players = `<div class="people_card">
                <div class="front">
                    <div class="key">
                        <div>직업</div>
                        <div>한자 이름</div>
                        <div>영어 이름</div>
                        <div>별명</div>
                    </div>
                    <div class="value">
                        <div>${player[i].job}</div>
                        <div>${player[i].chinese}</div>
                        <div>${player[i].name}</div>
                        <div>${player[i].nickname1}</div>
                    </div>
                </div>
                <div class="back">
                    <img src="./img/player/${player[i].img}.png" alt="${player[i].img}">
                </div>
            </div>`
                $(".people_box").append(insert_players)
            }
        }
    }
    $(".people_card").click(function () {
        if ($(this).hasClass("active") != true) {
            $(this).addClass("active");
            $(this).css({
                transform: "perspective(100vw) rotateY(180deg)"
            })
        }
        else {
            $(this).removeClass("active");
            $(this).css({
                transform: "perspective(100vw) rotateY(0)"
            })
        }
    })

    function index_chk() {
        let url = location.href;
        if (url.includes("player.html")) {
            // $(".menu div").eq(0).css({ transform: "translate(0, -40px)" })
            $(".menu").eq(1).find("div").css({ transform: "translate(0, -40px)" })
        }
        $()
    }
    index_chk()
})