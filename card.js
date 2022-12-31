const card_list = [
    {
        card_number: '1',
        card_symbol: "spade_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '2',
        card_symbol: "spade_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "엘리베이터가 건물 꼭대기로 올라갈 때 엘리베이터를 잡으십시오.",
        rule: "위로 올라가는 동안 엘리베이터는 때때로 불특정 시간 동안 움직이지 않아 게임이 필요 이상으로 오래 지속되고 플레이어의 체력에 부담이 증가합니다.",
        clear: "플레이어가 엘리베이터를 붙잡을 수 있다면 GAME CLEAR입니다.",
        over: "플레이어가 엘리베이터에서 떨어지면 게임 오버입니다."
    },
    {
        card_number: '3',
        card_symbol: "spade_y",
        player_limit: "없음",
        time_limit: "-",
        prize: "없음",
        summary: "-",
        rule: "마스코트가 모든 플레이어를 죽이면 게임 오버입니다.",
        clear: "플레이어가 마스코트에게 잡히지 않고 출구에 도달할 수 있는지 여부는 Game Clear입니다.",
        over: "마스코트가 모든 플레이어를 죽이면 게임 오버입니다."
    },
    {
        card_number: '4',
        card_symbol: "spade_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '5',
        card_symbol: "spade_y",
        player_limit: "없음",
        time_limit: "20분",
        prize: "없음",
        summary: "단지의 모든 사람들은 It이라고도 알려진 Oni에서 도망 칠 것입니다.<br>단지에는 안전 지대 인 잠금 해제된 방이 있습니다.",
        rule: "아파트 단지는 9 층이며 L 자 모양입니다. 3 개의 계단이 있으며, 양쪽 끝에 하나씩, 2 개의 복도가 교차하는 곳에 하나씩 있습니다. 규칙에 명시되어 있지는 않지만 게임을 클리어하려면 2명의 플레이어가 필요합니다. 폭탄을 비활성화하려면 안전 지대에서 멀리 떨어진 곳에 2 개의 버튼이 있으며 동시에 눌러야합니다.",
        clear: "플레이어가 제한 시간 내에 안전 지대를 찾아 만지면 GAME CLEAR입니다.",
        over: "제한 시간에 도달하거나 Oni가 모든 플레이어를 죽이면 GAME OVER입니다."
    },
    {
        card_number: '6',
        card_symbol: "spade_y",
        player_limit: "없음",
        time_limit: "-",
        prize: "없음",
        summary: "모두가 얼룩말입니다. 플레이어가 다른 동물에게 먹이를 먹는 경기장에서 유일한 선택은 싸움 또는 비행입니다.",
        rule: "죽여야 하는 야생 동물에는 하이에나, 사자, 치타가 포함되지만 이에 국한되지 않습니다.",
        clear: "모든 포식자가 죽으면 게임 클리어입니다.",
        over: "모든 플레이어가 포식자에 의해 죽으면 게임 오버 입니다."
    },
    {
        card_number: '7',
        card_symbol: "spade_y",
        player_limit: "없음",
        time_limit: "장소가 파괴될 때까지",
        prize: "없음",
        summary: "게임이 시작되기 전에 거대한 레이저가 하늘에서 발사되어 물을 뿜어내는 분화구를 만듭니다.",
        rule: "모든 플레이어가 경기장에 도착한 직후 게임이 시작됩니다. 끓는 물로 가득 찬 거대한 간헐천이 분출하여 경기장을 파괴합니다.",
        clear: "플레이어가 파괴되기 전에 경기장을 탈출 할 수 있다면 게임 클리어입니다.",
        over: "모든 플레이어가 죽거나 탈출하기 전에 경기장이 완전히 무너지면 게임 오버입니다."
    },
    {
        card_number: '8',
        card_symbol: "spade_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '9',
        card_symbol: "spade_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: "10",
        card_symbol: "spade_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: "J",
        card_symbol: "spade_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "선수는 경기장 내에 외부 무기를 반입할 수 없습니다.",
        rule: "플레이어는 필요한 모든 수단을 통해 시민 그룹으로부터 자신을 방어해야 합니다.<br>도장 센터 내부에는 나무 바닥이있는 넓은 공간이 있습니다. 도장의 중앙을 비추는 천장 조명은 하나뿐입니다. 파이프, 마체테, 칼과 같은 무기가 있습니다.",
        clear: "플레이어가 사망하거나 무력화되면 게임 오버입니다. 후자는 레이저로 이어집니다.",
        over: "플레이어가 제한 시간 전에 서 있으면 게임 클리어입니다."
    },
    {
        card_number: "Q",
        card_symbol: "spade_y",
        player_limit: "16",
        time_limit: "80분",
        prize: "-",
        summary: "무기는 허용되지 않지만 다른 종류의 폭력은 허용됩니다.<br>퀸 팀이 이기면 모든 플레이어가 자신을 시민으로 대우하고 스페이드의 여왕과 함께 계속 플레이할 수 있습니다.",
        rule: "게임은 16 라운드로 진행되며 각 팀은 5 분씩 교대로 진행됩니다.<br>자신의 차례 동안 각 팀은 다른 팀의 구성원을 쫓고 조끼 등의 버튼을 눌러야 합니다.<br>버튼을 누르면 해당 플레이어는 전기 충격을 받아 남은 턴 동안 움직일 수 없게 만들고 다음 턴에는 다른 팀의 일원이 됩니다.<br>각 팀의 왕은 팀 변경에서 제외됩니다.",
        clear: "16턴이 끝나면 멤버가 가장 많은 팀이 GAME CLEAR",
        over: "멤버가 적은 팀은 게임 오버를 받습니다."
    },
    {
        card_number: "K",
        card_symbol: "spade_y",
        player_limit: "없음",
        time_limit: "없음",
        prize: "없음",
        summary: "다른 게임에 참여하지 않는 플레이어는 자동으로 킹 오브 스페이드에 참여하게 됩니다.",
        rule: "King of Spades는 게임을 위한 지정된 장소가 없고 보더랜드 전체가 장소 역할을 하기 때문에 다른 모든 게임과 매우 독특합니다. 사실, 시라비는 도시 가장자리 너머의 숲 속으로도 들어갈 수 있는데, 이는 도쿄의 23개 특별구 밖에서 열리는 유일한 게임이기도 하다는 것을 의미합니다. 그러나 그가 가는 곳마다 그의 비행선이 따라오며 상대적인 위치를 플레이어에게 약간의 여유를 줍니다.",
        clear: "플레이어가 스페이드의 왕 이사오 시라비를 죽이면 게임이 명확해집니다.",
        over: "모든 플레이어가 스페이드의 왕에게 죽으면 게임이 종료됩니다."
    },

    {
        card_number: '1',
        card_symbol: "diamond_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '2',
        card_symbol: "diamond_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '3',
        card_symbol: "diamond_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '4',
        card_symbol: "diamond_y",
        player_limit: "없음",
        time_limit: "물이 전선에 도달할 때까지",
        prize: "없음",
        summary: "모든 플레이어가 방에 들어가면 물이 채워지기 시작합니다. 천장에는 4 개의 절단 된 전선이 매달려 있습니다.",
        rule: "방에는 전구 1개와 스위치가 3개 있는 인접한 방의 문이 있습니다.<br>전구에 연결되는 스위치가 하나 있습니다.<br>문이 닫힌 상태에서 플레이어는 스위치를 켤 수 있습니다.문이 열려 있는 동안 플레이어는 스위치를 한 번만 켤 수 있습니다.<br>두 방에 사람이 있거나 스위치가 뒤집혀 있으면 문이 닫히지 않습니다.",
        clear: "플레이어가 어떤 스위치가 조명을 켜는지 만장일치로 대답할 수 있다면 Game Clear입니다.",
        over: "수위가 상승하고 수면이 높은 전류선에 닿으면 게임 오버입니다."
    },
    {
        card_number: '5',
        card_symbol: "diamond_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '6',
        card_symbol: "diamond_y",
        player_limit: "최대 5명",
        time_limit: "1시간",
        prize: "권총 잡지",
        summary: "모든 참가자가 목에 올가미를 걸고 앉으면 게임이 공식적으로 시작됩니다. 플레이어는 비자에 남은 시간에 해당하는 칩을 받습니다.",
        rule: "21에 가장 가깝거나 이에 상응하는 핸드가 승리합니다. 같은 점수를 가진 손은 무승부로 끝납니다.<br>페이스 카드(J, Q, K)는 10 점으로 간주됩니다.에이스 카드는 플레이어의 손에 가장 적합한 것에 따라 1 점 또는 11 점으로 간주됩니다.<br>비 딜러는 칩을 베팅으로 배치합니다.최대 베팅은 딜러의 최대 칩 수와 같습니다.<br>딜러는 모든 비딜러에게 두 장의 카드를 나눠줍니다.일단 거래되면 딜러는 카드 중 하나를 열고 다른 카드는 뒤집어 놓습니다.<br>비 딜러는 서서(카드 뽑기를 멈추거나) 칠 수 있습니다(카드 한 장 뽑기).더블 다운, 스플릿 또는 비 딜러 블랙 잭은 상금을 두 배로 늘릴 수 있습니다.<br>    딜러는 16 점 이하인 경우 타격해야합니다.그러나 딜러는 17 점 이상이면 서 있어야합니다.<br>플레이어의 손에있는 포인트 수가 21을 초과하면 흉상이 발생합니다.딜러와 비 딜러가 모두 파산하면 비 딜러가 패배합니다.<br>비 딜러가 이기면 딜러로부터 베팅 한 동등한 칩 외에도 베팅 된 칩을받습니다.<br>딜러가 할당된 시간 동안 덱을 모두 사용하면 새로운 딜러가 인수합니다.",
        clear: "마지막 생존 플레이어의 게임 클리어입니다.",
        over: "플레이어의 칩 수가 0에 도달하면 게임 오버입니다."
    },
    {
        card_number: '7',
        card_symbol: "diamond_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '8',
        card_symbol: "diamond_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '9',
        card_symbol: "diamond_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: "10",
        card_symbol: "diamond_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: "J",
        card_symbol: "diamond_y",
        player_limit: "3명 필요",
        time_limit: "없음",
        prize: "-",
        summary: "모든 플레이어가 자리에 앉으면 게임이 시작됩니다. 각 의자 아래에는 트랩 도어가 있다고 추론 할 수 있습니다.<br>플레이어는 게임 중에 의자에서 일어나지 않을 수 있습니다.",
        rule: "마작 변형 규칙<br>한찬<br>칸젠 사쿠즈케(아토즈케, 쿠이탄 제외)<br>더블 론, 트리플 론 수<br>칸 우라도라, 칸도라, 카누라<br>아카도라 칸(남자 x1, 핀 x2, sou x1)<br>칸 파오<br>난바의 딜러, 심지어 Noten, 그들은 할 수 있습니다 렌짱<br>츠모 핀푸 없음<br>만약 퓨리텐 리이치, 부주의한 사람은 마지막 무승부 후 페널티를 받습니다.<br>같은 차례에 츠모를 할 수 없다<br>마지막 게임의 딜러는 야메 수 있습니다<br>Can Buttobi(다른 플레이어 점수가 0 미만인 경우)<br>1000 미만의 스컬러를 가진 Riichi는 할 수 없습니다(마지막 마지막 게임에서 점수 0과 모든 플레이어 Tenpai를 가진 Riichi의 경우 Buttobi가 됨) ",
        clear: "게임이 끝날 때까지 가장 많은 점수를 얻은 플레이어는 게임 클리어를받습니다.",
        over: "2위 이하의 모든 플레이어는 게임 오버를 받습니다."
    },
    {
        card_number: "Q",
        card_symbol: "diamond_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: "K",
        card_symbol: "diamond_y",
        player_limit: "4",
        time_limit: "1분/라운드<br>5분 / 1라운드 & 새로운 규칙으로 라운드",
        prize: "없음",
        summary: "입장하자마자 모든 플레이어는 좌석에 족쇄를 채우고 태블릿의 작동을 확인합니다. 그들의 머리 위에는 Aqua Regia를 채우는 무게/평형 스탠드가 있습니다.",
        rule: "남은 모든 플레이어:<br>모든 플레이어는 주어진 시간에 0에서 100 사이의 숫자를 선택합니다.<br>값의 평균에 4/5(0.8)를 곱합니다.<br>계산된 숫자에 가장 가까운 숫자를 선택하는 사람이 승리합니다.이것은 한 라운드를 구성합니다.<br>모든 패자는 점수를 잃게됩니다.<br>탈락한 모든 플레이어에 대해 새로운 규칙이 도입됩니다.첫 번째 라운드와 새로운 규칙이 도입되는 모든 라운드에서 플레이어는 규칙에 익숙해지는 방법으로 5분이 할당됩니다.<br>남은 선수 4명:<br>       같은 번호를 2명 이상 선택하면 선택한 번호가 무효가 되어 평균의 4/5에 가까운 숫자라도 점수를 잃게 됩니다.<br>두 명의 플레이어가 게임 오버를 받았기 때문에 이 규칙은 나머지 3명의 플레이어 발표에 대신 도입되었습니다.<br>남은 선수 3명:<br>정확한 숫자를 선택한 사람이 있으면 패자 페널티가 두 배가됩니다.<br>남은 선수 2명:<br>        누군가 0을 선택하면 100을 선택한 플레이어가 승자입니다.",
        clear: "마지막으로 남은 사람이 되십시오",
        over: "-10 포인트에 도달하십시오"
    },
    {
        card_number: '1',
        card_symbol: "heart_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '2',
        card_symbol: "heart_y",
        player_limit: "열차당 1명",
        time_limit: "없음",
        prize: "없음",
        summary: "각 열차는 4 개의 객차로 구성됩니다. 각 플레이어가 다른 기차에 탑승 할 때까지 게임이 시작되지 않습니다.",
        rule: "각 열차에는 한 명의 선수 만 탑승 할 수 있습니다. 각 열차는 4 개의 객차로 구성됩니다.<br>각 플레이어에게는 방독면과 3개의 공기 실린더가 제공되며 각 실린더는 5분 분량의 공기를 제공합니다.<br>플레이어가 캐리지에 들어가면 다음 캐리지의 문이 5분 동안 열리지 않으므로 플레이어는 무슨 일이 있어도 캐니스터를 사용해야 합니다.이것은 본질적으로 각 플레이어가 마스크 없이 입장하기 위해 하나의 마차를 선택해야 하고 독이 들어 있는 마차가 아니기를 바란다는 것을 의미합니다.",
        clear: "플레이어가 4개의 캐리지를 모두 통과하면 게임이 명확합니다",
        over: "4 개의 방 중 하나는 치명적인 유독 가스로 가득 차 있습니다. 산소통 없이 들어가면 게임 오버입니다."
    },
    {
        card_number: '3',
        card_symbol: "heart_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '4',
        card_symbol: "heart_y",
        player_limit: "최대 5명",
        time_limit: "질문당 1분",
        prize: "없음",
        summary: "참가 마감은 오후 6시입니다. 5명의 선수가 모두 등록한 후에는 각각 윈도우 클리닝 리프트에 들어가야 합니다.",
        rule: "각 선수들은 건물의 10층으로 이동된다.<br>화면에 질문이 나타납니다.질문 아래에는 설문 조사에서 수집한 답변이 나와 있습니다.<br>그 자료는 다수와 소수를 가지고 있다.플레이어는 조사 대상자의 대다수가 올바른지 또는 소수의 조사 대상자가 올바른지 여부를 선택해야 합니다.<br>다수결로 정답을 맞추면 리프트가 1층 위로 이동합니다.<br>소수로 정답을 맞추면 리프트가 2층 위로 이동합니다.<br>다수결로 잘못 대답하면 리프트를 1층 아래로 이동하여 플레이어에게 고전류 충격을 줍니다.",
        clear: "20층에 도착",
        over: "0층에 도착"
    },
    {
        card_number: '5',
        card_symbol: "heart_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '6',
        card_symbol: "heart_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '7',
        card_symbol: "heart_y",
        player_limit: "4명",
        time_limit: "10분",
        prize: "양고기",
        summary: "진행하기 전에 모든 플레이어는 헤드셋을 장착해야 합니다. 여기에는 폭발성 칼라에 연결된 접안렌즈 및 마이크가 포함된다. 게다가, 정원 가꾸기 도구들과 무기들의 많은 배열이 있는데, 그것들 중 어느 것이든 사용될 수 있다.",
        rule: "한 선수는 닥치는 대로 늑대가 되고, 나머지 세 선수는 양이 된다.<br>양은 늑대의 시선을 피하려고 노력해야 한다.<br>늑대가 양과 눈이 마주치면 센서가 반응하고 양이 늑대가 된다.<br>새로운 늑대가 만들어진 후, 양들은 다음 3초 동안 늑대가 될 수 없습니다.<br>일단 제한 시간에 도달하면, 모든 양들의 목줄은 폭발할 것이다.<br>이 극도로 도덕적으로 부담스러운 세븐 오브 하트 게임에서 오직 한 명만이 살아남을 수 있다는 것을 이해할 필요가 있다.",
        clear: "10분이 지나면 늑대가 되어라.",
        over: "10분이 지났을 때 양이 되거나 목걸이를 제거하려고 시도"
    },
    {
        card_number: '8',
        card_symbol: "heart_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '9',
        card_symbol: "heart_y",
        player_limit: "-",
        time_limit: "6라운드/라운드마다 10분",
        prize: "-",
        summary: "외계인 침공에서 살아남기 위해 플레이어는 해당 라운드의 제한 시간 전에 피난처 포드에 숨어 있어야 합니다.",
        rule: "대피소에 들어갈 수 없는 플레이어는 외계인의 침입을 받게 되며, 이는 해당 플레이어에게 게임 오버를 의미합니다.<br>각 포드에는 최대 용량이 있습니다.<br>팟에 접근하기 위해서는 각 플레이어의 전화기가 다른 전화기로부터 받은 라이프 카드를 모두 사용해야 한다.<br>참가자당 7개의 전화기가 있으며, 각 전화기에는 6개의 Life 카드와 1개의 Death 카드가 표시되며, 전화기가 지정된 게임을 제외한 7명의 개인을 나타내는 6개의 아바타가 표시됩니다.카드 아이콘을 아바타 아이콘으로 끌어 해당 개인에게 카드를 제공합니다.수신자의 전화기에는 수신한 카드가 표시되지만 누가 카드를 주는지는 표시되지 않습니다.<br>만약 한 개인이 외계인의 침공에서 패배한다면(그들의 전화기는 다음 라운드로 진행하기 위한 유효한 라이프 카드를 받지 못할 것이다), 그들의 아바타는 더 이상 카드를 받을 수 없을 것이다.<br>사망 카드를 받으면 받은 하나의 생명 카드가 무효화됩니다.<br>개인의 전화기는 다른 전화기로부터 두 개 이상의 카드를 받을 수 있다.<br>각 라운드에서 휴대폰은 하나의 Life 카드만 처리할 수 있습니다.데스 카드는 Life 카드와 독립적이며 언제든지 처리할 수 있습니다.<br>이 게임이 종료되기 전에 7장의 생사 카드를 모두 처리해야 승리를 거둘 수 있습니다.<br>이 게임은 사랑하는 사람이 살기를 바라는 사람들이 그들의 생존을 보장하기 위해 고안된 게임입니다. 외계인의 침입 앞에서, 당신이 소중히 여기는 사람들을 지켜주세요.",
        clear: "플레이어들은 그들의 모든 카드를 종료 전에 처리한다.",
        over: "선수들이 제 시간에 포드에 들어가지 못할 경우."
    },
    {
        card_number: "10",
        card_symbol: "heart_y",
        player_limit: "66(딜러 포함)",
        time_limit: "2시간",
        prize: "없음",
        summary: "이노우에 모모카가 살해당했습니다 마녀가 칼로 그녀의 가슴을 찔렀다.",
        rule: "그녀의 목숨을 앗아간 마녀는 해변의 멤버들 사이에 숨어있다.<br>그 살인자는 제목이 마녀일 뿐, 남자일 수도 있고 여자일 수도 있다.",
        clear: "플레이어들이 마녀를 발견하고, 정확한 신의 심판을 받고, 심판의 불꽃에서 그들의 불쌍한 영혼과 함께 그들의 몸을 불태운다면, 그것은 게임 클리어이다.",
        over: "만약 마녀가 120분 동안 살아남는다면."
    },
    {
        card_number: "J",
        card_symbol: "heart_y",
        player_limit: "20(기술적으로 19)",
        time_limit: "1시간/라운드",
        prize: "없음",
        summary: "선수들은 입장 시 폭발물 목걸이를 장착해야 한다. 선수들은 또한 어떠한 반사 표면이나 재료도 가지고 들어올 수 없다. 게임이 시작되기 전에 각 플레이어의 목걸이 뒤에 표시가 나타나며, 모든 플레이어가 자신의 표시(스페이드, 다이아몬드, 클럽, 하트)를 볼 수 없게 한다.",
        rule: "각 라운드는 1시간입니다. 플레이어는 이 시간 동안 어디서나 자유롭게 대화할 수 있습니다.<br>마지막 5분 동안, 모든 선수들은 감방에 들어가서 그들의 옷깃 뒤에 있다고 생각되는 표시를 발표해야 한다.만약 그들이 맞다면, 그들은 다음 라운드로 넘어갑니다.그들의 표시가 바뀌고, 주기가 반복된다.<br>플레이어가 침묵을 지키거나 잘못된 마크를 말하면 옷깃이 터집니다.<br>그 선수들 중에는 잭 오브 하트가 있다.잭 오브 하트가 죽으면 남은 선수들이 모두 살아남고 게임은 클리어 된다.<br>만약 두 명의 선수(Jack of Hearts 포함)가 남는다면, 그들의 정체가 분명해지기 때문에, 오직 Jack of Hearts만이 살 것이다.<br> 다음 3가지 조치는 금지됩니다.<br>잠긴 셀 내부에는 한 명 이상의 사용자가 있을 수 없습니다.<br>플레이어는 다른 플레이어가 셀에 들어가는 것을 방해해서는 안 됩니다.<br>플레이어는 자신의 마크(살인)를 발표하는 다른 사람의 능력을 취소할 수 없다.",
        clear: "하트 잭 처치",
        over: "표시를 잘못 말함<br>감금 중에는 침묵을 지키십시오.<br>금지된 작업을 수행합니다.<br>잭 오브 하트와 함께 남은 유일한 사람이 되어라."
    },
    {
        card_number: "Q",
        card_symbol: "heart_y",
        player_limit: "없음",
        time_limit: "없음",
        prize: "없음",
        summary: "다른 모든 페이스 카드 게임과 달리 플레이어나 시간 제한이 없을 뿐만 아니라 외부 무기나 도구를 가지고 오는 것을 금지하지 않는다.",
        rule: "표준 크로켓 규정 외에는 규칙이 없다.",
        clear: "선수들이 규정에 따라 3세트의 크로켓을 완성할 때",
        over: "선수들이 포기하면 게임 오버입니다."
    },
    {
        card_number: "K",
        card_symbol: "heart_y",
        player_limit: "-",
        time_limit: "-",
        prize: "없음",
        summary: "행사장 안은 어둡고 복도는 좁다. 창문도 없고, 벽은 콘크리트로 만들어졌고, 복도 구석에는 거울이 몇 개 보인다. 그 문들은 비슷하게 보이는 다른 복도들로 이어진다.",
        rule: "야수는 알려지지 않았고, 복도의 그림자들 사이에서 으르렁거리는 소리만 들렸다.<br>구석에 있는 거울들은 또한 선수들이 다른 길을 택하도록 속인다.<br>경기장 자체가 선수들 사이에서 편집증을 일으킨다.<br>플레이어는 게임 중에 다른 사람들에게 들어가지 마세요라고 말하며, 이는 그들이 루프된 경로에 갇혔음을 암시한다.<br> 잠재적으로, 선수들 중 한 명은 그들을 지치게 하고 상처를 주기 위해 선수들을 속이기 위해 동맹으로 가장하는 하트의 왕이 될 수 있다.",
        clear: "야수가 당신을 잡는다면",
        over: "만약 당신이 그 장소를 탈출한다면"
    },
    {
        card_number: '1',
        card_symbol: "club_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '2',
        card_symbol: "club_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "이 게임에서 플레이어들은 그것을 사냥할 것이다.",
        rule: "-",
        clear: "플레이어 중 한 명이 그것을 찾으면.",
        over: "그것을 찾기 전에 제한 시간에 도달한 경우."
    },
    {
        card_number: '3',
        card_symbol: "club_y",
        player_limit: "없음",
        time_limit: "모든 등불이 꺼질 때까지",
        prize: "없음",
        summary: "각 선수들은 종이 운세를 뽑는다.",
        rule: "각각의 운세에는 문제의 난이도를 나타내는 운 등급이 있다.<br>각 질문에는 숫자 정수 답변이 있으며, 오답이 있을 경우 정답과 오답의 차이에 따라 경기장에서 발사되는 화염 화살 1발이 벌칙이다.",
        clear: "모든 플레이어가 종이 운세를 뽑았을 때.",
        over: "모든 램프가 꺼질 때까지 종이 운세를 뽑지 않은 플레이어가 있거나 게임 중에 모든 플레이어가 사망한 경우"
    },
    {
        card_number: '4',
        card_symbol: "club_y",
        player_limit: "없음",
        time_limit: "50분",
        prize: "없음",
        summary: "모든 참가 선수들이 터널에 진입한 직후, 터널은 폐쇄될 것이다. 대규모 붕괴는 잔해 더미를 사방으로 흩날리게 할 것이다. 이때 쿠즈류는 다리에 심한 부상을 입어 계속할 수 없었다.",
        rule: "그 터널은 길이가 10킬로미터이다.<br>선수들은 네 번의 시련을 견뎌내고 제 시간에 목표에 도달해야 한다.<br>실험은 10분 후에 풀어주는 치타, 20분 후에 풀어주는 악어와 물, 30분 후에 눈보라, 50분 후에 폭발 등 4가지다.",
        clear: "할당된 시간 내에 안전하게 목표에 도달합니다.",
        over: "재판에서 죽거나 시간이 부족하다."
    },
    {
        card_number: '5',
        card_symbol: "club_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '6',
        card_symbol: "club_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '7',
        card_symbol: "club_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '8',
        card_symbol: "club_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: '9',
        card_symbol: "club_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "-",
        rule: "-",
        clear: "-",
        over: "-"
    },
    {
        card_number: "10",
        card_symbol: "club_y",
        player_limit: "-",
        time_limit: "-",
        prize: "없음",
        summary: "총 25개의 거대한 방들이 5×5 그리드에 있다. 표준 빙고에서처럼 중앙 공간은 자유롭다.",
        rule: "24개의 방마다 찾을 수 있는 번호가 있고, 그 번호가 발견되면 빙고 카드에 추가된다.<br>선수들에게는 각각 9개의 성냥개비만 주어지기 때문에, 그들은 성냥개비를 현명하게 사용해야 한다",
        clear: "발견된 모든 숫자가 빙고 시트에서 행, 열 또는 대각선을 완성하면 생존하는 모든 플레이어에게 게임 클리어가 된다.",
        over: "모든 경기를 다 써버릴 경우"
    },
    {
        card_number: "J",
        card_symbol: "club_y",
        player_limit: "-",
        time_limit: "-",
        prize: "-",
        summary: "선수들은 경기장에서 줄타기를 해야 한다.",
        rule: "컨벤션 센터 안에는 행사장의 여러 층에 다양한 밧줄이 걸려 있는데, 각각의 밧줄은 서로 다른 길이로 걸려 있다. 어떤 밧줄은 스포트라이트 플랫폼에 걸려 있고, 다른 밧줄은 건물의 맨 꼭대기에 걸려 있다.",
        clear: "잭 오브 클럽이 넘어지면 남은 선수들에게는 게임 클리어가 된다.",
        over: "붙잡지 못하면 게임 오버다. 넘어지기 전에 레이저를 맞을 것이다."
    },
    {
        card_number: "Q",
        card_symbol: "club_y",
        player_limit: "12",
        time_limit: "없음",
        prize: "없음",
        summary: "선수들은 2인 1조로 짝을 지어야 한다.",
        rule: "선수들은 경기장에서 좁은 빔을 차지해야 한다.<br>선수들은 상대 선수들을 쓰러뜨리기 위해 빛나는 공을 던져야 한다.",
        clear: "마지막 한 쌍이 되면 게임 클리어입니다.",
        over: "맞고 허공에 떨어지면 게임 오버다. 넘어지기 전에 레이저를 맞을 것이다."
    },
    {
        card_number: "K",
        card_symbol: "club_y",
        player_limit: "5명",
        time_limit: "2시간",
        prize: "없음",
        summary: "각 플레이어는 경기장에 입장하기 전에 제공된 팔찌 중 하나를 장착해야 합니다. 참가자는 행사장에 무기나 금속 물체를 반입할 수 없습니다(이는 폭력과 팔찌의 탐지 가능성에 대한 방해를 방지할 수 있음). 각 팀은 총 10,000점으로 시작합니다. 각 팀의 구성원은 적절하다고 판단되는 대로 구성원에게 포인트를 자유롭게 분배할 수 있으며 1인당 최소 100점입니다. 각 팀에는 각각의 기지가 있으며, 상단에는 플라즈마 구체처럼 보이는 키가 큰 기둥이 있습니다. 게임은 모든 포인트가 플레이어에게 분배 된 후에 만 시작됩니다.",
        rule: "제한시간 내 최대한 많은 승점을 팀에 쌓는 것이 이 경기의 목표다. 포인트를 획득하는 방법에는 배틀, 아이템, 베이스의 세 가지가 있습니다. 모든 실점 또는 획득한 점수는 팀 합계에 영향을 미칩니다.<br>전투를 하기 위해서, 그 선수는 상대의 몸과 신체적인 접촉을 해야 할 것이다. 그 팔찌는 생체 전기를 감지하고 게임을 시작할 것이다.<br>그 팔찌들은 전투에서 선수와 상대의 포인트를 반영할 것이다.포인트 수가 많은 플레이어가 이 전투의 승자입니다.진 사람은 전투 종료 시 자동으로 500점을 승자에게 이전합니다.<br>팀은 신체적 접촉을 유지하면서 상대 선수/ 그룹을 만짐으로써 여러 선수와 싸울 수 있다.전투를 위해 함께 모일 수 있는 선수의 수에는 제한이 없다.<br>이 경우 총점이 추가되고 비교됩니다.그러나, 상과 벌은 전투에 참가한 모든 구성원들에게 나누어진다(500).<br>조별리그에서 조별리그의 총점을 보기는 하지만 점수가 어떻게 나뉘는지는 여전히 모호하다(예를 들어 2명의 선수가 총점이 3000점이라면 2000 + 1000점, 1500 + 1500점, 2900 + 100점 등인지는 알 수 없다.",
        clear: "제한시간이 끝날 때까지 가장 많은 득점을 기록한 팀",
        over: "플레이어의 포인트가 0 아래로 떨어지면 게임 오버입니다<br> 제한시간이 끝날 때까지 가장 점수가 적은 팀"
    },
]