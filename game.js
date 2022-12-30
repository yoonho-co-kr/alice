$(document).ready(function () {

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
        if ($(this).index() > 12 && $(this).index() < 39) {
            $(".top_number").css({
                color: "#E0001A"
            })
            $(".bot_number").css({
                color: "#E0001A"
            })
        }
        else {
            $(".top_number").css({
                color: "black"
            })
            $(".bot_number").css({
                color: "black"
            })
        }
        $(".card_option").css({
            backgroundColor: "white"
        })
        $(this).css({
            backgroundColor: "grey"
        })
    })


})