$(document).ready(function () {
    $("#start").click(function () {
        let shape_choice = $("#shapes option:selected").val();
        let number_choice = +($("#numbers option:selected").val());

        let shape_to_num;
        if (shape_choice == "spade") {
            shape_to_num = 0
        }
        else if (shape_choice == "diamond") {
            shape_to_num = 1
        }
        else if (shape_choice == "heart") {
            shape_to_num = 2
        }
        else if (shape_choice == "club") {
            shape_to_num = 3
        }
        $(".selected").empty()
        let final_index = ((shape_to_num * 13) - 1) + number_choice;

        let put_selected = ` <div class="top_symbol">
                    <img src="./img/${card_list[final_index].card_symbol}.png" alt="">
                </div>
                <div class="top_number">${card_list[final_index].card_number}</div>
                <div class="info_wrap">
                <div class="p_limit">
                    <div>제한인원</div>
                    <div>${card_list[final_index].player_limit}</div>
                </div>
                <div class="t_limit">
                    <div>제한시간</div>
                    <div>${card_list[final_index].time_limit}</div>
                </div>
                <div class="prize">
                    <div>상품</div>
                    <div>${card_list[final_index].prize}</div>
                </div>
                </div>
                <div class="desc_wrap">
                <div class="summary">${card_list[final_index].summary}
                </div>
                <div class="rules">
                    <div>규칙</div>
                    <div>${card_list[final_index].rule}</div>
                    <div>클리어 조건</div>
                    <div>${card_list[final_index].clear}</div>
                    <div>게임오버 조건</div>
                    <div>${card_list[final_index].over}</div>
                </div>
                </div>
                <div class="bot_number">${card_list[final_index].card_number}</div>
                <div class="bot_symbol">
                    <img src="./img/${card_list[final_index].card_symbol}.png" alt="">
                </div>`
        if (card_list[final_index].rule != "-") {
            $(".selected").append(put_selected);
        }
        else {
            let make_error = `<div class="top_symbol">
                                <img src="./img/${card_list[final_index].card_symbol}.png" alt="">
                            </div>
                            <div class="top_number">${card_list[final_index].card_number}</div>
                            <div class="card_error">해당 카드에 대한 정보가 없습니다.</div>
                            <div class="bot_number">${card_list[final_index].card_number}</div>
                            <div class="bot_symbol">
                                <img src="./img/${card_list[final_index].card_symbol}.png" alt="">
                            </div>`
            $(".selected").append(make_error);
        }
    })


})