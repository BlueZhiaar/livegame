'use strict';
const enterButton = document.getElementById('enter_button');

let questionLibrary = {
    'おばあさんが倒れている':[-1,2],
    'お金が落ちている':[-2,5]
}

let questionLibraryArray = new Array();
//question_log_arr = [{'question':[select,effectnum]},{'question':[select,effectnum]}]
class User {
    constructor(question_log_arr,honesty,money,resultbody){
        this.question_log_arr = question_log_arr;
        this.honesty = honesty;
        this.money = money;
        this.resultbody = resultbody;
    }

  


}

//一個一個のイベントを入れるテンプレート
class Question {
    constructor(question,choicesMap){
        this.question = question;
        this.choicesMap = choicesMap;
    }
}

/**
 * HTMLの要素を作成する関数
 * create_element
 * @param {str} tag
 * @param {str} id_name
 * @param {str} class_name
 * @param {str} inner_text
 * @param {str} value_text
 * @param {str} type_name
 * @param {str} name_name
 * @return {obj} HTM要素を返す
 */


enterButton.onclick = function(){
    let questionLimit = 5;
    const displayArea = document.getElementById('display_area');
    displayArea.innerText = ''; //表示内容の消去
    let questionRecMap = new Map();
    let fragment = new DocumentFragment();
    let userExample = new User();

    userExample.question_log_arr = [1,2,3];
    //五回入れてから表示とか

    console.log(userExample);
 //test_json.jsを呼び出す
    //TODO 五回、ランダムなイベントを表示させる
    //TODO 所持金と良心の管理
    //イベント文と選択肢パラメータの増加をオブジェクトにしたい（Mapにしそう
    //個人の質問と答えによるパラメータの増減を記録するquestionRecMap
    //ランダムに出る質問と選択しごとのパラメータの増減を置いておくquestionLibraryオブジェクト
    //できたライブラリオブジェクトをすべて配列に格納する
    //TODO ラジオボタンを生成する
    
    const testSentence = create_element('h3','test','',getRandomEvent());
    fragment.append(testSentence);
   

    displayArea.append(fragment);
}