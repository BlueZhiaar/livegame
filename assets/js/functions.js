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

    return Events[num];
}

//input属性の要素を返す
function create_input_element(type,id_name='',class_name='',value='',innner_text=''){
    const el = document.createElement('input');
    if(type){
        el.type = type;
    }
    if(id_name){
        el.id = id_name;
    }
    if(class_name){
        el.className = class_name;
    }
    if(value){
        el.value = value;
    }
    if(innner_text){
        el.innerText = innner_text;
    }

    return el;

}

//labelを作る
function create_label(label_name){
    const el = document.createElement('label');

    if(label_name){
        el.innerText = label_name;
    }
    return el;
}