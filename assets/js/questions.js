'use strict';
const enterButton = document.getElementById('enter_button');

let questionLibrary = {
    'おばあさんが倒れている':[-1,2],
    'お金が落ちている':[-2,5]
}

let questionLibraryArray = new Array();






enterButton.onclick = function(){
    const displayArea = document.getElementById('display_area');
    displayArea.innerText = ''; //表示内容の消去
    let questionRecMap = new Map();
    let fragment = new DocumentFragment();

    //TODO 五回、ランダムなイベントを表示させる
    //TODO 所持金と良心の管理
    //イベント文と選択肢パラメータの増加をオブジェクトにしたい（Mapにしそう
    //個人の質問と答えによるパラメータの増減を記録するquestionRecMap
    //ランダムに出る質問と選択しごとのパラメータの増減を置いておくquestionLibraryオブジェクト
    //できたライブラリオブジェクトをすべて配列に格納する
    //TODO ラジオボタンを生成する
    
    const testSentence = create_element('h3','test','',Object.keys(questionLibrary)[0]);
    fragment.append(testSentence);

    displayArea.append(fragment);
}