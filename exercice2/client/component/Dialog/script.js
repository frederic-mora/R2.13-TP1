
let templateFile = await fetch('./component/Dialog/template.html');
let template = await templateFile.text();

import {Button} from '../Button/script.js';

let Dialog = {};

/*
    Le paramètre obj est un objet similaire DataDialog (data/dataDialog.js).
*/
Dialog.format = function(obj){
    let html = template;
    // TODO
    return html;
}

export {Dialog};