import { $ , $$ } from './modules/bling';

const addnew = $('button#addnew');
const options = $('#options');

if(addnew) {
    addnew.on('click', ()=>{
        const input = document.createElement('input');
        input.setAttribute('type','text');
        input.setAttribute('name','options[]');
        input.setAttribute('placeholder', 'options');
        options.insertAdjacentElement('beforeend', input);
    });
}
