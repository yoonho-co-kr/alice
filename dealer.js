$(document).ready(function () {

    put_card()
    function put_card() {
        let url = location.href;
        if (url.includes("dealer.html")) {
            for (let i = 0; i < dealer.length; i++) {
                let insert_dealers = `<div class="people_card">
                <div class="front">
                    <div class="key">
                        <div>직업</div>
                        <div>한자 이름</div>
                        <div>영어 이름</div>
                        <div>별명</div>
                        <div>딜러</div>
                    </div>
                    <div class="value">
                        <div>${dealer[i].job}</div>
                        <div>${dealer[i].chinese}</div>
                        <div>${dealer[i].name}</div>
                        <div>${dealer[i].nickname1}</div>
                        <div>${dealer[i].nickname2}</div>
                    </div>
                </div>
                <div class="back">
                    <img src="./img/dealer/${dealer[i].img}.png" alt="${dealer[i].img}">
                </div>
            </div>`
                $(".people_box").append(insert_dealers)
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


})