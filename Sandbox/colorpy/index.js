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
    ["再生妖精スズラン"],
    [""],
    ["オールデリート","オール・デリート"]
];
let progress = [0,0,0,0,0,0]

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
                input:"",
                progress:[0,0,0,0,0,0]
            }
        },
        computed:{
            currentFlagComp(){
                console.log(this.currentFlag);
                console.log(this.bugFlag);
                if(this.currentFlag == 4){
                    console.log('text_' + String(this.currentFlag) + '_' + String(this.play))
                    return 'text_' + String(this.currentFlag) + '_' + String(this.play);
                }else{
                    return 'text_' + String(this.currentFlag);
                }
            },
            currentMode(){
                return 'img_'+ String(this.currentFlag) + '_' + this.mode_1 + this.mode_2;
            },
            answer(){
                return 'ans_' + String(this.currentFlag) + '_' + String(this.progress[this.currentFlag]);
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
                            }else if(this.currentFlag == 5){
                                jQuery('.whiteout').css('display','block');
                                window.location.href = "https://note.com/preview/n468b2d55a290?prev_access_key=bfb22913e60e36c1be53f6b3e62f08c5";
                            }
                            jQuery('.whiteout').fadeOut('normal');
                            this.progress[this.currentFlag] = 1
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
        template:'<img src="img/cc/q1_osbtprr.PNG" id="q1">'
    })
    Wrapping.component('img_0_mn',{
        data(){
            return{}
        },
        template:'<img src="img/mn/q1_osbtprr.PNG" id="q1">'
    })
    Wrapping.component('img_0_cn',{
        data(){
            return{}
        },
        template:'<img src="img/cn/q1_osbtprr.PNG" id="q1">'
    })
    Wrapping.component('ans_0_1',{
        data(){
            return{
                imgs_d:'img/drsk_icon.png',
                imgs_y:'img/no_icon.png'
            }
        },
        template:`
        <div class="postage">
    <div class="icon">
        <img :src="imgs_d">
    </div>
    <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">正解です。</span>
    </div>
    </div>
        <div class="postage">
    <div class="icon">
        <img :src="imgs_y">
    </div>
    <div class="text">
        <span class="name">あなた</span><br>
        <span class="text">魔弾オープン・ブレイン
    </div>
    </div>
        `
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
    Wrapping.component('img_1_cn',{
        data(){
            return{}
        },
        template:'<img src="img/cn/q4_pnzgir.PNG" id="q1">'
    })
    Wrapping.component('ans_1_1',{
        data(){
            return{
                imgs_d:'img/drsk_icon.png',
                imgs_y:'img/no_icon.png'
            }
        },
        template:`
        <div class="postage">
    <div class="icon">
        <img :src="imgs_d">
    </div>
    <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">正解です。</span>
    </div>
    </div>
        <div class="postage">
    <div class="icon">
        <img :src="imgs_y">
    </div>
    <div class="text">
        <span class="name">あなた</span><br>
        <span class="text">バグル・パズル
    </div>
    </div>
        `
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
    Wrapping.component('img_2_cn',{
        data(){
            return{}
        },
        template:'<img src="img/cn/q2_cflsrg.PNG" id="q1">'
    })
    Wrapping.component('ans_2_1',{
        data(){
            return{
                imgs_d:'img/drsk_icon.png',
                imgs_y:'img/no_icon.png'
            }
        },
        template:`
        <div class="postage">
    <div class="icon">
        <img :src="imgs_d">
    </div>
    <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">正解です。</span>
    </div>
    </div>
        <div class="postage">
    <div class="icon">
        <img :src="imgs_y">
    </div>
    <div class="text">
        <span class="name">あなた</span><br>
        <span class="text">カラフル・ナスオ
    </div>
    </div>
        `
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
    Wrapping.component('img_3_cn',{
        data(){
            return{}
        },
        template:'<img src="img/cn/q3_tbrrcn.PNG" id="q1">'
    })
    Wrapping.component('ans_3_1',{
        data(){
            return{
                imgs_d:'img/drsk_icon.png',
                imgs_y:'img/no_icon.png'
            }
        },
        template:`
        <div class="postage">
    <div class="icon">
        <img :src="imgs_d">
    </div>
    <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">正解です。</span>
    </div>
    </div>
        <div class="postage">
    <div class="icon">
        <img :src="imgs_y">
    </div>
    <div class="text">
        <span class="name">あなた</span><br>
        <span class="text">再生妖精スズラン
    </div>
    </div>
        `
    })

    //オールデリート
    Wrapping.component('img_5_mc',{
        data(){
            return{}
        },
        template:'<img src="img/mc/q5_ocdrra.PNG" id="q1">'
    })
    Wrapping.component('img_5_cc',{
        data(){
            return{}
        },
        template:'<img src="img/cc/q5_ocdrra.PNG" id="q1">'
    })
    Wrapping.component('img_5_mn',{
        data(){
            return{}
        },
        template:'<img src="img/mn/q5_ocdrra.PNG" id="q1">'
    })
    Wrapping.component('img_5_cn',{
        data(){
            return{}
        },
        template:'<img src="img/cn/q5_ocdrra.PNG" id="q1">'
    })

    //動画ページ
    //「再生」が解かれていない場合の画像を置く
    //レイアウトまだ詰められてないので後日
    //長方形の画像をセットする
    Wrapping.component('img_4_mc',{
        data(){
            return{}
        },
        template:`
        <img src="img/cn/q3_tbrrcn.PNG" class="q5_1">
        `
    })
    Wrapping.component('img_4_cc',{
        data(){
            return{}
        },
        template:`
        <img src="img/cn/q3_tbrrcn.PNG" class="q5_1">
        `
    })
    Wrapping.component('img_4_mn',{
        data(){
            return{}
        },
        template:`
        <img src="img/cn/q3_tbrrcn.PNG" class="q5_1">
        `
    })
    Wrapping.component('img_4_cn',{
        data(){
            return{}
        },
        template:`
        <img src="img/cn/q3_tbrrcn.PNG" class="q5_1">
        `
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
    Wrapping.component('text_2',{
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
            【謎解きルール】<br>
            <br>
            決勝戦が始まり次第、それぞれのテキストチャンネルに謎が張り出されます。<br>
            各謎を解き、すべてのクリアを目指してください。<br>
            また、本ページは更新(F5)や戻るボタンを押すと進捗状況がリセットされます。<br>
            十分にご注意ください。<br>
            <br>
        </div>
        </div>
        <hr width="95%" noshade="">
        `
    })
    Wrapping.component('text_3',{
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
            【会場案内】<br>
            <br>
            ■FIRST<br>
            #【必読】はじめに <br>
            大会概要、主催挨拶が記述されています。<br>
            参加前に必ず一読お願いします。<br>
            <br>
            #【必読】大会ルール<br>
            当大会のルールが記述されています。<br>
            参加前に必ず一読お願いします。<br>
            <br>
            #【必読】会場案内<br>
            ここです。<br>
            参加前に必ず一読お願いします。<br>
            <br>
            #連絡（大会開始前） <br>
            大会開始前(参加者ロール付与前)に全体もしくは個人に連絡を取る際に使う場です。<br>
            <br>
            #お知らせ・告知 <br>
            カラー杯に関する告知や宣伝を行っている場です。<br>
            次回大会やイベントの予定も載せてあるので、お手隙の際にぜひご覧ください。<br>
            </div>
            </div>
            <hr width="95%" noshade="">
        `
    })
    Wrapping.component('text_5',{
        data(){
            return{
                imgs:'img/no_icon.png',
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
            <img :src="imgs">
        </div>
        <div class="text">
            <span class="name role_orgn">■■■■■■</span><br>
            <span class="text">
            現在、このチャンネルには投稿がありません。<br>
            <br>
        </div>
        </div>
        <hr width="95%" noshade="">
        `
    })

    //最終回答ページ
    Wrapping.component('text_4_0',{
        data(){
            return{
                imgs:'',
            }
        },
        template:`
        <div class="voicepage">
            <component v-bind:is="currentMode"></component>
        </div>`
    })
    Wrapping.component('text_4_1',{
        data(){
            return{
                imgs:'',
            }
        },
        template:`<div class="voicepage"></div>`
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
