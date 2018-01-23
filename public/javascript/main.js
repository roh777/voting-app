import { $ , $$ } from './modules/bling';

const addnew = $('button#addnew');
const options = $('#options');

if(addnew) {
    addnew.on('click', ()=>{
        const input = document.createElement('input');
        const br = document.createElement('br');
        input.setAttribute('type','text');
        input.setAttribute('name','options[]');
        input.setAttribute('placeholder', 'options');
        options.insertAdjacentElement('beforeend', br);
        options.insertAdjacentElement('beforeend', input);

    });
}
