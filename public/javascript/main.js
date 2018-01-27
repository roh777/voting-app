import '../sass/style.scss';
import { $ , $$ } from './modules/bling';
import createChart from './modules/resultChart';


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

createChart($('#mychart'), $('canvas').dataset.pollid);
