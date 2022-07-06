'use strict';
/**
 * HTMLの要素を作成する関数
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