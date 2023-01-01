$(document).ready(function () {
    let card_arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    let put_picture = "spade_w"
    for (let i = 0; i < card_arr.length * 4; i++) {
        if (i <= 12) {
            put_picture = "spade_w"
        }
        else if (i > 12 && i < 26) {
            put_picture = "diamond_w"
        }
        else if (i >= 26 && i < 39) {
            put_picture = "heart_w"
        }
        else if (i >= 39) {
            put_picture = "club_w"
        }
        let make_card_options = `<div class="card_option">${card_arr[i % 13]}
                        <img src="./img/${put_picture}.png" alt="">
                    </div>`
        $(".cards_box").append(make_card_options);
    }
    $(".card_option").click(function () {
        // console.log($(this).index())
        $(".selected").empty()
        let put_selected = ` <div class="top_symbol">
                    <img src="./img/${card_list[$(this).index()].card_symbol}.png" alt="">
                </div>
                <div class="top_number">${card_list[$(this).index()].card_number}</div>
                <div class="info_wrap">
                <div class="p_limit">
                    <div>제한인원</div>
                    <div>${card_list[$(this).index()].player_limit}</div>
                </div>
                <div class="t_limit">
                    <div>제한시간</div>
                    <div>${card_list[$(this).index()].time_limit}</div>
                </div>
                <div class="prize">
                    <div>상품</div>
                    <div>${card_list[$(this).index()].prize}</div>
                </div>
                </div>
                <div class="desc_wrap">
                <div class="summary">${card_list[$(this).index()].summary}
                </div>
                <div class="rules">
                    <div>규칙</div>
                    <div>${card_list[$(this).index()].rule}</div>
                    <div>클리어 조건</div>
                    <div>${card_list[$(this).index()].clear}</div>
                    <div>게임오버 조건</div>
                    <div>${card_list[$(this).index()].over}</div>
                </div>
                </div>
                <div class="bot_number">${card_list[$(this).index()].card_number}</div>
                <div class="bot_symbol">
                    <img src="./img/${card_list[$(this).index()].card_symbol}.png" alt="">
                </div>`
        if (card_list[$(this).index()].rule != "-") {
            $(".selected").append(put_selected);
        }
        else {
            let make_error = `<div class="top_symbol">
                                <img src="./img/${card_list[$(this).index()].card_symbol}.png" alt="">
                            </div>
                            <div class="top_number">${card_list[$(this).index()].card_number}</div>
                            <div class="card_error">해당 카드에 대한 정보가 없습니다.</div>
                            <div class="bot_number">${card_list[$(this).index()].card_number}</div>
                            <div class="bot_symbol">
                                <img src="./img/${card_list[$(this).index()].card_symbol}.png" alt="">
                            </div>`
            $(".selected").append(make_error);
        }
        // if ($(this).index() > 12 && $(this).index() < 39) {
        //     $(".top_number").css({
        //         color: "#E0001A"
        //     })
        //     $(".bot_number").css({
        //         color: "#E0001A"
        //     })
        // }
        // else {
        //     $(".top_number").css({
        //         color: "black"
        //     })
        //     $(".bot_number").css({
        //         color: "black"
        //     })
        // }
        // $(".card_option").css({
        //     backgroundColor: "white"
        // })
        // $(this).css({
        //     backgroundColor: "grey"
        // })
    })
    function index_chk() {
        let url = location.href;
        if (url.includes("game.html")) {
            // $(".menu div").eq(0).css({ transform: "translate(0, -40px)" })
            $(".menu").eq(3).find("div").css({ transform: "translate(0, -40px)" })
        }
        $()
    }
    index_chk()


})