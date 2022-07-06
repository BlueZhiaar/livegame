'use strict';

window.onload = function(){
    const displayArea = document.getElementById('display_area');
    const indexFragment = new DocumentFragment();

    //タイトルの追加
    const title = 'ちいさなRPG';
    const title_el = create_element('h1','','',title);
    indexFragment.append(title_el);

    


    //questionsを呼び出す
    const questions_js = document.createElement('script');
    questions_js.src = './assets/js/questions.js';
    indexFragment.append(questions_js);

    //最後に全てを追加する
    displayArea.append(indexFragment);
}
