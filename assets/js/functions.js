'use strict';
/**
 * HTMLの要素を作成する関数
 * create_element
 * @param {str} tag
 * @param {str} id_name
 * @param {str} class_name
 * @param {str} inner_text
 * @return {obj} HTM要素を返す
 */
function create_element(tag,id_name='',class_name='',inner_text=''){
    const el = document.createElement(tag);
    if(id_name){
        el.id = id_name;
    }
    if(class_name) {
        el.className = class_name;
    }
    if(inner_text) {
        el.innerText = inner_text;
    }

    return el;
}

//Eventsの中でランダムなオブジェクトを返す
function getRandomEvent(){
    let num;
    num = Math.floor(Math.random() * Events.length);

    return Events[num].question;
}