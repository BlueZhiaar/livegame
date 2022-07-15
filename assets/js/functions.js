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
function create_input_element(type,id_name='',class_name='',value='',innner_text='',name_name=''){
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
    if(name_name){
        el.name = name_name;
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

//選択されているradioの番号を返す
/**
 * @param {object} radio
 * @return {string} 
 */
function returnRadiosValue(radio_object){
        let checkValue = '';
        let num;

        for(let i = 0; i < radio_object.length;i++){
            if(radio_object.item(i).checked){
                checkValue = radio_object.item(i).value;
                num = i;
            }
        }

        console.log(`選択されているのは${checkValue}です${num}`);
        return num;
}
