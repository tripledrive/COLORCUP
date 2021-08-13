"use strict";
var open_flag = false;
var check_flag = false;
var noise = false;
var color = false;
var play = false;
let answer = [
    ["魔弾オープンブレイン","魔弾オープン・ブレイン"],
    ["バグルパズル","バグル・パズル"],
    ["カラフルナスオ","カラフル・ナスオ"],
    ["再生妖精スズラン"]
];
let progress = [0,0,0,0]

let target = document.getElementById('main');
target.scrollIntoView(false);

    const Wrapping = Vue.createApp({
        data(){
            return{
                currentFlag: 0,
                bugFlag:0,
                mode_1:"m", //mc cc mn cn 
                mode_2:"c", //mono|color_clear|noizy
                noise:0,
                color:0,
                play:0,
                players:[
                    {name:"あああ",img:'img/drsk_icon.png'},
                    {name:"BBB",img:'img/drsk_icon.png'},
                    {name:"ccc",img:'img/drsk_icon.png'}],
                input:""
            }
        },
        computed:{
            currentFlagComp(){
                console.log(this.currentFlag);
                console.log(this.bugFlag);
                return 'text_' + String(this.currentFlag);
            },
            currentMode(){
                return 'img_'+ String(this.currentFlag) + '_' + this.mode_1 + this.mode_2;
            }
        },
        methods:{
            checkanswer(){
                check_flag = false
                    for(let i = 0; i < answer[this.currentFlag].length; i++){
                        if(this.input == answer[this.currentFlag][i]){
                            open_flag = true
                            check_flag = true
                            this.input = ""
                            if(progress[this.currentFlag] == 0){
                                jQuery('.whiteout').css('display','block');
                                jQuery('.whiteout').fadeOut('normal');
                            }
                            progress[this.currentFlag] = 1
                            
                            if(this.currentFlag == 0){
                                jQuery('.st').css('display','block')
                            }else if(this.currentFlag == 1){
                                this.mode_2 = "n";
                            }else if(this.currentFlag == 2){
                                this.mode_1 = "c";
                            }else if(this.currentFlag == 3){
                                this.play = 1;
                            }
                            break;
                    }
                    if(!check_flag){}
                }
            }
        }
    })
    
    // 魔弾オープン・ブレイン
    Wrapping.component('img_0_mc',{
        data(){
            return{}
        },
        template:'<img src="img/mc/q1_osbtprr.png" id="q1">'
    })
    Wrapping.component('img_0_cc',{
        data(){
            return{}
        },
        template:'<img src="img/cc/q1_osbtprr.png" id="q1">'
    })
    Wrapping.component('img_0_mn',{
        data(){
            return{}
        },
        template:'<img src="img/mn/q1_osbtprr.png" id="q1">'
    })
    Wrapping.component('img_0_mc',{
        data(){
            return{}
        },
        template:'<img src="img/mc/q1_osbtprr.png" id="q1">'
    })

    // バグル・パズル
    Wrapping.component('img_1_mc',{
        data(){
            return{}
        },
        template:'<img src="img/mc/q4_pnzgir.PNG" id="q1">'
    })
    Wrapping.component('img_1_cc',{
        data(){
            return{}
        },
        template:'<img src="img/cc/q4_pnzgir.PNG" id="q1">'
    })
    Wrapping.component('img_1_mn',{
        data(){
            return{}
        },
        template:'<img src="img/mn/q4_pnzgir.PNG" id="q1">'
    })
    Wrapping.component('img_1_mc',{
        data(){
            return{}
        },
        template:'<img src="img/mc/q4_pnzgir.PNG" id="q1">'
    })

    //カラフル・ナスオ
    Wrapping.component('img_2_mc',{
        data(){
            return{}
        },
        template:'<img src="img/mc/q2_cflsrg.PNG" id="q1">'
    })
    Wrapping.component('img_2_cc',{
        data(){
            return{}
        },
        template:'<img src="img/cc/q2_cflsrg.PNG" id="q1">'
    })
    Wrapping.component('img_2_mn',{
        data(){
            return{}
        },
        template:'<img src="img/mn/q2_cflsrg.PNG" id="q1">'
    })
    Wrapping.component('img_2_mc',{
        data(){
            return{}
        },
        template:'<img src="img/mc/q2_cflsrg.PNG" id="q1">'
    })

    //再生妖精スズラン
    Wrapping.component('img_3_mc',{
        data(){
            return{}
        },
        template:'<img src="img/mc/q3_tbrrcn.PNG" id="q1">'
    })
    Wrapping.component('img_3_cc',{
        data(){
            return{}
        },
        template:'<img src="img/cc/q3_tbrrcn.PNG" id="q1">'
    })
    Wrapping.component('img_3_mn',{
        data(){
            return{}
        },
        template:'<img src="img/mn/q3_tbrrcn.PNG" id="q1">'
    })
    Wrapping.component('img_3_mc',{
        data(){
            return{}
        },
        template:'<img src="img/mc/q3_tbrrcn.PNG" id="q1">'
    })

    Wrapping.component('text_0',{
    data(){
        return{
            role:'role_orgn',
            imgs:'img/drsk_icon.png',
            subtitle: "ここが、このサーバーの始まりです。",
            title: "DRSKカラー杯オンラインserverへようこそ"
        }
    },
    template:`
    <div class="postage">
    <div class="icon">
        <img :src="imgs">
    </div>
    <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">【大会概要】<br>
            <br>
            DRSKカラー杯オンラインサーバーに入室頂き誠にありがとうございます。<br>
            当サーバーは皆様にDRSKカラー杯運営の営むイベントを楽しんで頂くサーバーです。<br>
            <br>
            <br>
            イベントにおきまして、フィーチャーマッチ他、試合風景をビデオ撮影を行う場合があります。<br>
            撮影した映像はYouTubeやTwitterで使用させて頂く場合があります。<br>
            入賞者のデッキリストはツイッター上で公開させていただく場合がございます。<br>
            あらかじめご了承ください。</span>
    </div>
    </div>
    <hr width="95%" noshade="">
    <p id="top_tex">{{subtitle}}</p>
    <h2 id="top">{{title}}</h2>`
})
Wrapping.component('text_1',{
    data(){
        return{
            imgs:'img/drsk_icon.png',
        }
    },
    template:`
    <div class="postage">
    <div class="icon">
        <img :src="imgs">
    </div>
    <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">
        【大会の流れ】<br>
        <br>
        ■大会開始前(受付)<br>
        来場されましたらまず#参加受付 もしくは#参加受付（当日枠用） へ<br>
        ・Tonamelで入力したエントリー名<br>
        ・大会詳細の確認の有無(ルール確認しましたと一言お願いします)<br>
        をお送りください。<br>
        その後運営より「参加者」のロールが付与されれば、エントリー完了です。<br>
        <br>
        <br>
        ■各試合開始前<br>
        各予選の対戦組み合わせはTonamelのトーナメント表にて発表しその旨をdiscord内で@参加者宛にアナウンスさせて頂きます。<br>
        アナウンス後は指定されたテーブルにご着席ください。<br>
        試合開始タイミングは @参加者 で通知いたします。<br>
        <br>
        ■各試合終了後<br>
        勝者の方は#対戦結果受付にてテーブル番号と結果を書き込んでください。<br>
        (必ず勝者が書き込むようお願いします)<br>
        <br>
        <br>
        ■サブイベント<br>
        謎解きはスイスドロー3回戦終了時より #９枚の謎（step１）にて解禁されます。<br>
        お手隙の際にぜひお楽しみください</span>
    </div>
    </div>
    <hr width="95%" noshade="">`
})
Wrapping.component('text_0_x',{
    data(){
        return{
            role:'role_orgn',
            imgs:'img/drsk_icon.png',
            subtitle: "ここが、このサーバーの始まりです。",
            title: "DRSKカラー杯オンラインserverへようこそ"
        }
    },
    template:`
    <div class="postage">
    <div class="icon">
        <img :src="imgs">
    </div>
    <div class="text">
        <span class="name role_orgn">ド███催)</span><br>
        <span class="text">【大会███要】<br>
            <br>
            DRSK██████杯オンラインサーバーに入室頂き誠にありがとうございます。<br>
            当サーバーは皆様にDRSKカラー杯運███の営むイベントを楽しんで頂くサーバーです。<br>
            <br>
            <br>
            イベントにおき█████████ャーマッチ他、試合風景をビデオ██████を行う場合があります。<br>
            撮影した映像はYouTubeやTwitterで使用させ███場合がありま███。<br>
            入賞者のデッ██████はツイッター上で公開させてい███場合がございます。<br>
            あ███じめご了承ください。</span>
    </div>
    </div>
    <hr width="95%" noshade="">
    <p id="top_tex">{{subtitle}}</p>
    <h2 id="top">{{title}}</h2>`
})
Wrapping.component('text_1_x',{
    data(){
        return{
            imgs:'img/drsk_icon.png',
        }
    },
    template:`
    <div class="postage">
    <div class="icon">
        <img :src="imgs">
    </div>
    <div class="text">
        <span class="name role_orgn">ドラ██████主催)</span><br>
        <span class="text">
        【大会の流れ】<br>
        <br>
        ■大会開始前(受付)<br>
        来場されましたらまず#参加受付 もしくは#参加受付（当日枠用） へ<br>
        ・Tonamelで入力したエントリー名<br>
        ・大会詳細███確認の有無(ルール確認し█████████言お願いします)<br>
        をお送りください。<br>
        その後運営より「参加者」のロールが付与███れれば██████トリー完了です。<br>
        <br>
        <br>
        ■各試合開始前<br>
        各予選の対戦組み合わせはTonamelのトーナメント表にて発表しその旨をdiscord内で@参加者宛にアナウンスさせて頂きます。<br>
        アナウンス█████████れたテーブルにご着席ください。<br>
        試合開始タイミングは @参加者 で通知いた███。<br>
        <br>
        ■各試合終了後<br>
        勝者の方は#対戦結果受付にてテー███ル番号と結果を書き込んでください。<br>
        (必ず勝███き込むようお願いします)<br>
        <br>
        <br>
        ■サブイベント<br>
        謎解きはスイスドロー3回戦終了時より #█████████（step１）にて解禁されます。<br>
        お手隙の際にぜひお楽しみください</span>
    </div>
    </div>
    <hr width="95%" noshade="">`
})

Wrapping.mount('#wrap')

　　var btn = document.getElementsByClassName('btn');
　　for (var i = btn.length - 1; i >= 0; i--) {
　　　　btnAction(btn[i],i);
　　}
    btn[0].classList.add('active')

　　function btnAction(btnDOM,btnId){
　　　　btnDOM.addEventListener("click", function(){
       if(!(btn[btnId].classList.contains('active'))){
　　　　    this.classList.toggle('active');
       }

　　　　for (var i = btn.length - 1; i >= 0; i--) {
　　　　　　if(btnId !== i){
　　　　　　　　if(btn[i].classList.contains('active')){
　　　　　　　　　　btn[i].classList.remove('active');
　　　　　　　　}
　　　　　　}
　　　　}
　　})
}

jQuery('#testclk').on('click',function(){
   if(flag){
      flag = false
      jQuery('.st').css('display','none')
    }else{
        flag = true
        jQuery('.st').css('display','block')
    }
    console.log(flag);
});
