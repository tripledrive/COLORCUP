jQuery(function() {
    // プレイヤー名管理
    const player1 = "倉沢小夜";
    const player2 = "yk800";

    // ログ進行管理
    let cnt = 0;
    let log = [];

    // プレイヤーステータス管理
    // シールド枚数
    let shield_1 = 5;
    let shield_2 = 5;
    
    // 山札枚数
    let deck_1 = 30;
    let deck_2 = 30;

    // 墓地枚数
    let gy_1 = 0;
    let gy_2 = 0;

    // 手札
    let hand_1 = 5;
    let hand_1_on = [];
    let hand_2 = 5;
    let hand_2_on = [];

    // マナ
    let mana_1 = 0;
    let mana_2 = 0;

    // ログのロード処理
    jQuery.when(

        jQuery.ajax({
            url:'log.txt',
            success: function(data){
            var data_array = data.split(/\r\n|\r|\n/);  // 改行コードで分割
            var len = data_array.length;
            var log_split = []
        
            for (var i = 0; i < len; i++){
                    data_array[i].trim();
                    log_split[i] = data_array[i].split("s：");
                    log[i] = log_split[i][1]
                }
            }
        })

    ).done(function(){
        
        jQuery('#log-output').text(log[cnt][1]);
        console.log(log.length);

    }).done(function(){
        // 初期盤面処理
        let gamestart_flag = false  

    });

    
    // ログ送りボタン ただし今はログを送るだけ
    jQuery('#btn-back').on('click', function(){
        if(cnt != 0){
            cnt--
            jQuery('#log-output').text(log[cnt]);
            MoveCardsParam();
        }
    });

    jQuery('#btn-next').on('click', function(){
        if(cnt != log.length-2){
            cnt++
            jQuery('#log-output').text(log[cnt]); 
            MoveCardsParam(); 
        }
    });

    function MoveCardsParam(){

    };

    // Vueで描画処理
    new Vue({
        el:'#status-p1',
        data:{
            deck: deck_1,
            hand: hand_1,
            sh : shield_1,
            gy : gy_1,
            mana : mana_1

        }
    });
    
    new Vue({
        el:'#status-p2',
        data:{
            deck: deck_2,
            hand: hand_2,
            sh : shield_2,
            gy : gy_2,
            mana : mana_2
        }
    });

    
});
