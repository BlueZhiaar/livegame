//'use strict';
console.log('result到達');


const lastDisplay = document.getElementById('display_area');
const lastFragment = new DocumentFragment();

const resultTitle = '結果';
const resultTitleElement = create_element('h1', '', '', resultTitle);
lastFragment.append(resultTitleElement);




console.log(User.prototype);
//全てを追加する
lastDisplay.append(lastFragment);
