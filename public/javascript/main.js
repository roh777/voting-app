import { $ , $$ } from './modules/bling';

const addnew = $('button#addnew');
if (addnew) {
    addnew.on('click', function() {
        const form = $('form');
        if(!form) return; //skip it
        form.innerHTML += `<input type='text' name='options[]'></input>`
    });    
}
