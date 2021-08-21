"use strict";
var open_flag = false;
var check_flag = false;
var noise = false;
var color = false;
var play = false;
const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let answer = [
    ["魔弾オープンブレイン","魔弾オープン・ブレイン"],
    ["バグルパズル","バグル・パズル"],
    ["カラフルナスオ","カラフル・ナスオ"],
    ["再生妖精スズラン"],
    [""],
    ["オールデリート","オール・デリート"],
    ["霊","れい","レイ"]
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
                tenlow:0,
                noise:0,
                color:0,
                play:0,
                players:[
                    {name:"ドラ介(主催)",img:'img/drsk_icon.png'},
                    {name:"てんろー(運営)",img:'img/tenlow.png'},
                    {name:"████████",img:'img/cutie.png'},
                    {name:"████████",img:'img/lion.png'},
                    {name:"████████",img:'img/wh_lion.png'},
                    {name:"████████",img:'img/drsk.png'},
                    {name:"████████",img:'img/sukiya.png'},
                    {name:"████████",img:'img/tsugu.png'},
                    {name:"████████",img:'img/tokage.jpg'},
                    {name:"████████",img:'img/kureko.png'},
                    {name:"████████",img:'img/no_icon.png'},],
                input:"",
                progress:[0,0,0,0,0,0,0]
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
                if(this.currentFlag == 4){
                    return 'img_'+ String(this.currentFlag) + '_' + this.mode_1 + this.mode_2 + String(this.play);
                }else{
                    return 'img_'+ String(this.currentFlag) + '_' + this.mode_1 + this.mode_2;
                }
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
                                window.location.href = "https://tripledrive.github.io/COLORCUP/Sandbox/colorpy/cpage_qdlta.html";
                            }else if(this.currentFlag == 6){
                                this.tenlow = 1;
                            }
                            jQuery('.whiteout').fadeOut('normal');
                            this.progress[this.currentFlag] = 1
                            break;
                    }
                    if(!check_flag){
                    }
                }
            }
        }
    })
    
    // 魔弾オープン・ブレイン
    Wrapping.component('img_0_mc',{
        data(){
            return{
                img:"img/mc/q1_osbtprr.png"
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img :src="img" id="q1"></span>
        </div>
        </div>
        `
    })
    Wrapping.component('img_0_cc',{
        data(){
            return{}
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img src="img/cc/q1_osbtprr.png" id="q1"></span>
        </div>
        </div>
        `
    })
    Wrapping.component('img_0_mn',{
        data(){
            return{}
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img src="img/mn/q1_osbtprr.png" id="q1"></span>
        </div>
        </div>
        `
    })
    Wrapping.component('img_0_cn',{
        data(){
            return{}
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img src="img/cn/q1_osbtprr.png" id="q1"></span>
        </div>
        </div>
        `
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
            <span class="text">
            【大会概要】<br>
            DRSKカラー杯オンラインサーバーに入室頂き誠にありがとうございます。<br>
            当サーバーは皆様にDRSKカラー杯運営の営むイベントを楽しんで頂くサーバーです。<br>
            本日7月31日は、『DRSKカラー杯オンライン５ PHANTOM』のために開放しております。<br>
            明日も明後日も明々後日も開催しております。<br>
            私と一緒に終わりのないカラー杯を楽しみましょう。<br>
            <br>
            【サーバー説明】<br>
            左欄の各チャンネルには、それぞれサブイベントとして謎が１問ずつ用意されています。<br>
            各チャンネルのチャット入力欄に、答えとなるカードの正式名称を入力してください。<br>
            正解であれば、同チャット欄において反応いたします。<br>
            謎解きの作成は「てんろー」さんに作成していただきましたが、皆様と永遠にカラー杯を楽しむために、最終問題は白紙とさせていただきました。ご了承ください。<br>
            <br>
            【注意事項】
            推奨環境はパソコン、ブラウザは最新版のFireFox/Chrome/Safariのみ動作確認しております。<br>
            推奨環境以外でのプレイは非常に難しいため、ご注意ください。<br>
            ページを更新してしまったり、ブラウザバックをしてしまうと、謎の進捗情報がリセットされてしまいます。ご注意ください。<br>
            また、ページのソースコードを閲覧したり、ファイルのURLを覗き見ることで解ける謎はありません。<br>
            あらかじめご承知おきください。<br>
            </span>
        </div>
        </div>
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
            return{
                img:"img/mc/q4_pnzgir.png"
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img :src="img" id="q1"></span>
        </div>
        </div>
        `
    })
    Wrapping.component('img_1_cc',{
        data(){
            return{
                img:"img/cc/q4_pnzgir.png"
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img :src="img" id="q1"></span>
        </div>
        </div>
        `
    })
    Wrapping.component('img_1_mn',{
        data(){
            return{
                img:"img/mn/q4_pnzgir.png"
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img :src="img" id="q1"></span>
        </div>
        </div>
        `
    })
    Wrapping.component('img_1_cn',{
        data(){
            return{
                img:"img/cn/q4_pnzgir.png"
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img :src="img" id="q1"></span>
        </div>
        </div>
        `
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
            return{
                img:"img/mc/q2_cflsrg.png"
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img :src="img" id="q1"></span>
        </div>
        </div>
        `
    })
    Wrapping.component('img_2_cc',{
        data(){
            return{
                img:"img/cc/q2_cflsrg.png"
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img :src="img" id="q1"></span>
        </div>
        </div>
        `
    })
    Wrapping.component('img_2_mn',{
        data(){
            return{
                img:"img/mn/q2_cflsrg.png"
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img :src="img" id="q1"></span>
        </div>
        </div>
        `
    })
    Wrapping.component('img_2_cn',{
        data(){
            return{
                img:"img/cn/q2_cflsrg.png"
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img :src="img" id="q1"></span>
        </div>
        </div>
        `
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
            return{
                img:"img/mc/q3_tbrrcn.png"
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img :src="img" id="q1"></span>
        </div>
        </div>
        `
    })
    Wrapping.component('img_3_cc',{
        data(){
            return{
                img:"img/cc/q3_tbrrcn.png"
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img :src="img" id="q1"></span>
        </div>
        </div>
        `
    })
    Wrapping.component('img_3_mn',{
        data(){
            return{
                img:"img/mn/q3_tbrrcn.png"
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img :src="img" id="q1"></span>
        </div>
        </div>
        `
    })
    Wrapping.component('img_3_cn',{
        data(){
            return{
                img:"img/cn/q3_tbrrcn.png"
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img :src="img" id="q1"></span>
        </div>
        </div>
        `
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
            return{
                img:"img/mc/q5_ocdrra.png"
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img :src="img" id="q1"></span>
        </div>
        </div>
        `
    })
    Wrapping.component('img_5_cc',{
        data(){
            return{
                img:"img/cc/q5_ocdrra.png"
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img :src="img" id="q1"></span>
        </div>
        </div>
        `
    })
    Wrapping.component('img_5_mn',{
        data(){
            return{
                img:"img/mn/q5_ocdrra.png"
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img :src="img" id="q1"></span>
        </div>
        </div>
        `
    })
    Wrapping.component('img_5_cn',{
        data(){
            return{
                img:"img/cn/q5_ocdrra.png"
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/drsk_icon.png">
        </div>
        <div class="text">
        <span class="name role_orgn">ドラ介(主催)</span><br>
        <span class="text">以下の画像から推測されるカード名を答えよ。<br><img :src="img" id="q1"></span>
        </div>
        </div>
        `
    })

    //動画ページ
    //「再生」が解かれていない場合の画像を置く
    //レイアウトまだ詰められてないので後日
    //長方形の画像をセットする
    Wrapping.component('img_4_mc0',{
        data(){
            return{}
        },
        template:`
        <img src="img/mc/movdie.PNG" class="q5_1">
        `
    })
    Wrapping.component('img_4_cc0',{
        data(){
            return{}
        },
        template:`
        <img src="img/cc/movdie.PNG" class="q5_1">
        `
    })
    Wrapping.component('img_4_mn0',{
        data(){
            return{}
        },
        template:`
        <img src="img/mn/movdie.PNG" class="q5_1">
        `
    })
    Wrapping.component('img_4_cn0',{
        data(){
            return{}
        },
        template:`
        <img src="img/cn/movdie.PNG" class="q5_1">
        `
    })

    //「再生」が解かれている
    Wrapping.component('img_4_mc1',{
        data(){
            return{}
        },
        template:`
        <iframe src="https://www.youtube.com/embed/gEHheW2P3-E?controls=1&autoplay=1&mute=1&playsinline=0&loop=1&disablekb=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="q5_2"></iframe>
        `
    })
    Wrapping.component('img_4_cc1',{
        data(){
            return{}
        },
        template:`
        <iframe \src="https://www.youtube.com/embed/rEBe_r2hYTk?controls=1&autoplay=1&mute=1&playsinline=0&loop=1&disablekb=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="q5_2"></iframe>
        `
    })
    Wrapping.component('img_4_mn1',{
        data(){
            return{}
        },
        template:`
        <iframe src="https://www.youtube.com/embed/c684m6An-sQ?controls=1&autoplay=1&mute=1&playsinline=0&loop=1&disablekb=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="q5_2"></iframe>
        `
    })
    Wrapping.component('img_4_cn1',{
        data(){
            return{}
        },
        template:`
        <iframe src="https://www.youtube.com/embed/zbMby2CG4WI?controls=1&autoplay=1&mute=1&playsinline=0&loop=1&disablekb=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="q5_2"></iframe>
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
        template:`<hr width="95%" noshade="">`
    })
    Wrapping.component('text_2',{
        data(){
            return{
                imgs:'img/drsk_icon.png',
            }
        },
        template:`<hr width="95%" noshade="">`
    })
    Wrapping.component('text_3',{
        data(){
            return{
                imgs:'img/drsk_icon.png',
            }
        },
        template:`
        <hr width="95%" noshade="">`
    })
    Wrapping.component('text_5',{
        data(){
            return{
                imgs:'img/no_icon.png',
            }
        },
        template:`
        <hr width="95%" noshade="">
        `
    })
    Wrapping.component('text_6',{
        data(){
            return{
                imgs:'img/no_icon.png',
            }
        },
        template:`
        <div class="postage">
        <div class="icon">
        <img src="img/tenlow.png">
        </div>
        <div class="text">
        <span class="name role_ten">てんろー</span><br>
        <span class="text">
        こんにちは！<br>
この度謎の作成を依頼されましたてんろーです。<br>
にっくき暑さと戦いながら、頑張って制作しました。<br>
霊というのがひとつのテーマでしたが、ちょっと盛り込むのは難しかったですね。<br>
とはいえ、夏らしいフレーバーはつけられたのではないかと。<br>
入室していただいた皆様に少しでも楽しんでいただければ幸いです。<br>
力を入れた部分として、今回は謎を解くと「その答えに応じていろんなところに変化が現れる」ようにしました。<br>
しっかり作って、大掛かりな謎にできたと思います。変化が無いと解けない謎もあるかも……？<br>
ろしくお願いします。長文失礼しました。<br>
        </span>
        </div>
        </div>
        <hr width="95%" noshade="">
        `
    })

    Wrapping.component('ans_6_1',{
        data(){
            return{
                imgs_d:'img/tenlow.png',
                imgs_y:'img/no_icon.png'
            }
        },
        template:`
        <div class="postage">
    <div class="icon">
        <img :src="imgs_d">
    </div>
    <div class="text">
        <span class="name role_ten">てんろー(運営)</span><br>
        <span class="text">
        改めまして、謎を制作したてんろーです。<br>
        偽のDRSKに気づかれないよう仕込んだ縦読みに気づいてくれてありがとうございます。<br>
        このテキストはバグを突いて送信したものであり、主催の偽DRSKからは見えていません。<br>
        <br>
        このチャンネルは7月31日で時が止まっています。永遠に終わらないカラー杯が続けられている、異常な状態です。<br>
        あのDRSKは偽物で、このチャンネルは本来存在してはいけないチャンネルです。<br>
        それを解決するために、謎解きに少し仕掛けをしました。<br>
        そこで、謎が解けるあなたに協力していただきたいのです。<br>
        最終問題を解き明かして、こちら側のカラー杯を終わらせてください。<br>
        <br>
        最終問題は偽DRSKの指示に従って白紙で作ったように見せかけたダミーデータです。<br>
        謎を解いてサーバーに変化を与えることで、白紙ではなくなっていくように制作されています。<br>
        これは謎を解いていないDRSKからはわかりません。<br>
        最後の謎にある鍵を仕込んだのですが、「サブイベントの内容として」起動することが必要でした。<br>
        なので、ここで直接答えを教えることはできません。自力で謎を解いていただく必要があります。<br>
        もちろん自分は「謎製作者」であり運営の協力者であるため、謎を自分で回答することはできません。<br>
        <br>
        謎を解いて真実の最終問題を浮かび上がらせ、終わらないカラー杯を終わらせられるのはプレイヤーであるあなただけです。<br>
        どうかよろしくお願いします。<br>
        </span>
    </div>
    </div>
        <div class="postage">
    <div class="icon">
        <img :src="imgs_y">
    </div>
    <div class="text">
        <span class="name">あなた</span><br>
        <span class="text">霊
    </div>
    </div>
        `
    })

    //最終回答ページ
    Wrapping.component('text_4_0',{
        data(){
            return{
                imgs:'',
            }
        },
        template:``
    })
    Wrapping.component('text_4_1',{
        data(){
            return{
                imgs:'',
            }
        },
        template:``
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
