'use strict';
const enterButton = document.getElementById('enter_button');
const displayArea = document.getElementById('display_area');
const choiceForm = document.getElementById('choice');
const blueArea = document.getElementById('blue_area');
let limitNum = 5;



//question_log_arr = [{'question':[select,effectnum]},{'question':[select,effectnum]}]
class User {
    constructor(question_object_arr, question_log_arr, honesty, money, resultbody) {
        this.question_object_arr = question_object_arr;
        this.question_log_arr = question_log_arr;
        this.honesty = honesty;
        this.money = money;
        this.resultbody = resultbody;
    }




}

//一個一個のイベントを入れるテンプレート
class Question {
    constructor(question, choicesMap) {
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


enterButton.onclick = function () {
    let questionLimit = 5;
    //const displayArea = document.getElementById('display_area');
    displayArea.innerText = ''; //表示内容の消去
    let questionRecMap = new Map();
    let fragment = new DocumentFragment();
    let userObject = new User();

    //画面を表示した回数を記録する
    let recNum = 0;

    //question_log_arrにArray型を入れる
    userObject.question_log_arr = new Array();

    //test_json.jsを呼び出す
    //TODO 五回、ランダムなイベントを表示させる
    //TODO 所持金と良心の管理
    //イベント文と選択肢パラメータの増加をオブジェクトにしたい（Mapにしそう
    //個人の質問と答えによるパラメータの増減を記録するquestionRecMap
    //ランダムに出る質問と選択しごとのパラメータの増減を置いておくquestionLibraryオブジェクト
    //できたライブラリオブジェクトをすべて配列に格納する
    //TODO ラジオボタンを生成する




    //イベント五回まわしてログにセットする関数を作る

    //回数分の質問と選択肢のセットをセットする
    setQuestionsObjects(limitNum, userObject);

    //質問文とラジオボタンを試しに設置
    makeAQuestionAndRadio(fragment, userObject, recNum);







    //displayArea.append(fragment);
}

//Userオブジェクトに制限回分の質問オブジェクトをセットする
function setQuestionsObjects(limitnum, user_object) {
    user_object.question_object_arr = new Array();
    for (let i = 0; i < limitnum; i++) {
        user_object.question_object_arr.push(getRandomEvent());
    }
    //console.log(user_object);
}

//Userオブジェクトの質問オブジェクトから番号の質問文を返す
function returnQuestionSentence(user_object, question_num) {
    //console.log(user_object.question_object_arr[question_num].question);
    return user_object.question_object_arr[question_num].question;
}

//一回分の質問文とラジオボタンを設置する
function makeAQuestionAndRadio(fragment_object, user_object, num) {

    //イベントの制限回数に達したら終わる
    if (num > limitNum - 1) {
        //TODO 結果を記述するresult.jsへの値の受け渡しが困難なのでここでやる
        showResult(fragment_object, user_object);
        return;
    }
    const questionSentence = create_element('h5', 'question_sentence', 'text-light mt-5', user_object.question_object_arr[num].question);
    fragment_object.append(questionSentence);
    //choicesがMapなのかオブジェクトなのかJSONなのか区別がついてない。choicesのkeyだけを引っ張り出して選択肢のラベルにしたい
    const selectInput_0 = create_input_element('radio', 'select_radio', 'text-light mt-3', Object.keys(user_object.question_object_arr[num].choices)[0], '', 'choice_radio');
    fragment_object.append(selectInput_0);
    const selectLabel_0 = create_label(Object.keys(user_object.question_object_arr[num].choices)[0],'text-light');
    fragment_object.append(selectLabel_0);
    const br = create_element('br');
    fragment_object.append(br);
    const selectInput_1 = create_input_element('radio', 'select_radio', 'text-light mt-3', Object.keys(user_object.question_object_arr[num].choices)[1], '', 'choice_radio');
    fragment_object.append(selectInput_1);
    const selectLabel_1 = create_label(Object.keys(user_object.question_object_arr[num].choices)[1],'text-light mt-2');
    fragment_object.append(selectLabel_1);
    const br_2 = create_element('br');
    fragment_object.append(br_2);
    const submitButton = create_element('button', 'submit_button', 'btn btn-primary mt-2', '私は選択する');
    fragment_object.append(submitButton);

    //全てを描画
    //displayArea.append(fragment_object);
    displayArea.append(fragment_object);


    //radioをnameから取得する
    let choiceRadio = document.getElementsByName('choice_radio');

    //console.log(choiceRadio

    submitButton.onclick = function () {
        let flag = false;

        //チェックが入ってない時のガード句
        for(let i = 0; i < choiceRadio.length;i++){
            if(choiceRadio[i].checked === true){
                flag = true;
            }
        }
        if(flag === false){
            alert('選択してからボタンを押してください。');
            return;
        }

        //console.log('clicked');

        console.log(choiceRadio[0].checked);

        returnRadiosNum(choiceRadio);
        let questionLogObject = {
            question_sentence: user_object.question_object_arr[num].question,
            choices_sentences: Object.keys(user_object.question_object_arr[num].choices),
            users_choice_num: returnRadiosNum(choiceRadio),
            users_choice_sentence: Object.keys(user_object.question_object_arr[num].choices)[returnRadiosNum(choiceRadio)],
            change_param: {
                honesty: Object.values(user_object.question_object_arr[num].choices)[returnRadiosNum(choiceRadio)].honesty,
                money: Object.values(user_object.question_object_arr[num].choices)[returnRadiosNum(choiceRadio)].money
            }

        }
        user_object.question_log_arr.push(questionLogObject);
        displayArea.innerText = ''; //表示内容の消去
        //イベント回数を増やす
        num = num + 1;
        //質問画面を再度生成する
        makeAQuestionAndRadio(fragment_object, user_object, num);

        //console.log(user_object.question_log_arr);
    }
}

//結果を表示する
function showResult(fragment_object, user_object) {
    displayArea.style = '';
    blueArea.style = '';

    const discription = create_element('h2', '', 'text-light', 'あなたのとった行動と得られた称号');
    fragment_object.append(discription);
    let holdingMoney = 10000;
    let holdingHonesty = 0;
    let userQuestionSentenceArr = new Array();
    let userChoiceSentenceArr = new Array();
    let userChangeParamArr = new Array();

    //オブジェクトの場所指定する表記が長くなるので配列に入れて管理する
    for (let i = 0; i < user_object.question_log_arr.length; i++) {
        userQuestionSentenceArr.push(user_object.question_log_arr[i].question_sentence)
    }
    for (let i = 0; i < user_object.question_log_arr.length; i++) {
        userChoiceSentenceArr.push(user_object.question_log_arr[i].users_choice_sentence)
    }

    for (let i = 0; i < user_object.question_log_arr.length; i++) {
        userChangeParamArr.push(user_object.question_log_arr[i].change_param)
    }


    //計算だけやる表示は後にする
    for (let i = 0; i < user_object.question_log_arr.length; i++) {

        holdingHonesty = holdingHonesty + userChangeParamArr[i].honesty;
        holdingMoney = holdingMoney + userChangeParamArr[i].money
    }




    //結果を分岐する
    //〇〇で〇〇.前半は誠実さ、後半は金額で変わる称号
    let firstAchievement;
    let secondAchievement;

    if (holdingHonesty < 0) {
        firstAchievement = '軽薄な'
    } else if (holdingHonesty >= 0 && holdingHonesty <= 20) {
        firstAchievement = '普通の'
    } else {
        firstAchievement = '尊い'
    }

    if (holdingMoney < -10000) {
        secondAchievement = '貧乏人'
    } else if (holdingMoney >= -10000 && holdingMoney <= 20000) {
        secondAchievement = '落ち着いた小金持ち'
    } else {
        secondAchievement = '大富豪'
    }

    //結果の称号を表示する
    const achievementSentence = create_element('h2','', 'card-header text-success', 'あなたが今回獲得した称号:' + firstAchievement + secondAchievement);
    fragment_object.append(achievementSentence);
    const hr_0 = create_element('hr');
    fragment_object.append(hr_0);





    //最終的な誠実さとお金の表示
    let jpy_price1 = holdingMoney.toLocaleString('ja-JP', {style:'currency', currency: 'JPY'});
    const lastHonesty = create_element('h4', '', 'card-body text-light', `あなたの最終的な誠実さ: ${holdingHonesty}`);
    fragment_object.append(lastHonesty);
    const lastMoney = create_element('h4', '', 'card-body text-light', `あなたの最終的な所持金:${jpy_price1}`);

    
    fragment_object.append(lastMoney);
    //const hr_1 = create_element('hr');
    //fragment_object.append(hr_1);

    //経過ログであることを書く
    const logDiscription = create_element('h5', '', 'card-text text-light', '経過ログ');
    fragment_object.append(logDiscription);
    //const hr_2 = create_element('hr');
    //fragment_object.append(hr_2);

    //経過ログの表示
    for (let i = 0; i < user_object.question_log_arr.length; i++) {
        let resultParagraph = create_element('p', '', 'card-text text-light', userQuestionSentenceArr[i]);
        fragment_object.append(resultParagraph);
        //const hr_3 = create_element('hr');
        //fragment_object.append(hr_3);
        let sentaku = create_element('p', '', 'card-text text-light', 'あなたの選択');
        fragment_object.append(sentaku);
        //const hr_4 = create_element('hr');
        //fragment_object.append(hr_4);
        let choiceParagraph = create_element('p', '', 'card-text text-light', userChoiceSentenceArr[i]);
        fragment_object.append(choiceParagraph);
        //const hr_5 = create_element('hr');
        //fragment_object.append(hr_5);
        let changeHonestyParagraph = create_element('p', '', 'card-text text-light', `誠実さ:${userChangeParamArr[i].honesty}`);
        fragment_object.append(changeHonestyParagraph);
        //const hr_6 = create_element('hr');
        //fragment_object.append(hr_6);
        let jpy_price2 = userChangeParamArr[i].money.toLocaleString('ja-JP', {style:'currency', currency: 'JPY'});
        let changeMoneyParagraph = create_element('p', '', 'card-text text-light', `お金:${jpy_price2}`);
        fragment_object.append(changeMoneyParagraph);
        //const hr_7 = create_element('hr');
        //fragment_object.append(hr_7);
    }
    console.log(userChangeParamArr);
    const tweetDivided = document.getElementById('tweet_area');
    tweetDivided.className = 'text-center';
    // TODO ツイートエリアの作成
tweetDivided.innerText = '';
const anchor = document.createElement('a');
const hrefValue =
  'https://twitter.com/intent/tweet?button_hashtag=' + encodeURIComponent('ちいさなRPG') + "&hashtags=" + encodeURIComponent('称号とったぞ')+'&ref_src=twsrc%5Etfw';

anchor.setAttribute('href', hrefValue);
anchor.setAttribute('class', 'twitter-hashtag-button');
anchor.setAttribute('data-text', firstAchievement + secondAchievement);
anchor.innerText = 'Tweet #ちいさなRPG';

const script = document.createElement('script');
script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
tweetDivided.appendChild(script);

tweetDivided.appendChild(anchor);


    //全てを描画
    displayArea.append(fragment_object);
}
