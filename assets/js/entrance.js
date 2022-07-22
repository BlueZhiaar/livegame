'use strict';

window.onload = function(){
    const displayArea = document.getElementById('display_area');
    const indexFragment = new DocumentFragment();

    //タイトルの追加
    const title = 'ちいさなRPG';
    const title_el = create_element('h1','','text-light mt-5',title);
    indexFragment.append(title_el);

    const enterButton = create_element('button','enter_button','btn btn-primary btn-lg mt-2','入口');
    indexFragment.append(enterButton);

    


    //questionsを呼び出す
    const questions_js = document.createElement('script');
    questions_js.src = './assets/js/questions.js';
    indexFragment.append(questions_js);

    //最後に全てを追加する
    displayArea.append(indexFragment);
}
