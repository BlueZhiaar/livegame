'use strict';
const enterButton = document.getElementById('enter_button');



//question_log_arr = [{'question':[select,effectnum]},{'question':[select,effectnum]}]
class User {
    constructor(question_object_arr,question_log_arr,honesty,money,resultbody){
        this.question_object_arr = question_object_arr;
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
    let userObject = new User();
    let limitNum = 5;

 //test_json.jsを呼び出す
    //TODO 五回、ランダムなイベントを表示させる
    //TODO 所持金と良心の管理
    //イベント文と選択肢パラメータの増加をオブジェクトにしたい（Mapにしそう
    //個人の質問と答えによるパラメータの増減を記録するquestionRecMap
    //ランダムに出る質問と選択しごとのパラメータの増減を置いておくquestionLibraryオブジェクト
    //できたライブラリオブジェクトをすべて配列に格納する
    //TODO ラジオボタンを生成する
    
    const testSentence = create_element('h3','test','',getRandomEvent().question);
    fragment.append(testSentence);
    const testInput = create_input_element('radio','test','','テスト');
    fragment.append(testInput);
    const testLabel = create_label('テスト');
    fragment.append(testLabel);


    //イベント五回まわしてログにセットする関数を作る

//回数分の質問と選択肢のセットをセットする
setQuestionsObjects(limitNum,userObject);

//質問文とラジオボタンを試しに設置
makeAQuestionAndRadio(fragment,userObject,0)



   

    displayArea.append(fragment);
}

//Userオブジェクトに制限回分の質問オブジェクトをセットする
function setQuestionsObjects(limitnum,user_object){
    user_object.question_object_arr = new Array();
    for(let i =0; i < limitnum; i++){
        user_object.question_object_arr.push(getRandomEvent());
    }
    console.log(user_object);
}

//Userオブジェクトの質問オブジェクトから番号の質問文を返す
function returnQuestionSentence(user_object,question_num){
    console.log(user_object.question_object_arr[question_num].question);
    return user_object.question_object_arr[question_num].question;
}

//一回分の質問文とラジオボタンを設置する
function makeAQuestionAndRadio(fragment_object,user_object,num){
    const questionSentence = create_element('p','question_sentence','',user_object.question_object_arr[num].question);
    fragment_object.append(questionSentence);
    //choicesがMapなのかオブジェクトなのかJSONなのか区別がついてない。choicesのkeyだけを引っ張り出して選択肢のラベルにしたい
    console.log(choicesIter);
    const selectInput = create_input_element('radio','select_radio','',user_object.question_object_arr[num].choices);
    console.log(user_object.question_object_arr[num].choices);
    fragment_object.append(selectInput);
    const testLabel = create_label(user_object.question_object_arr[num].choices);
    fragment_object.append(testLabel);
}
