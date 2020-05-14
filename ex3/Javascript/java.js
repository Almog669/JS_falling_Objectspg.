
function initialize()
{
    var f_name=("Almog").length;
    var l_name=("Klinger").length;
    var sol_=f_name*l_name;
    for(let i =0 ; i<sol_;i++){
        const tr = document.createElement('article');
        tr.className='box_js';
        const mainRef = document.getElementById('main_r');
        mainRef.append(tr);
    }
    
}


const ShutDown = document.getElementById('ShutDown');
const SwitchMode = document.getElementById('SwitchMode');

ShutDown.addEventListener('click', function() {
    const f_sq = document.getElementsByClassName('box_js');
    for (let i = 0; i < 5; i++) {
        f_sq[i].style.cssText = "background-color: black; color: white"
    }
});
SwitchMode.addEventListener('click', function() {
    const last = document.getElementsByClassName('box_js');
    for (let i = 6; i < 13; i++) {
        last[i].style.cssText = "background-color: white"
    }
});

const sq = document.getElementsByClassName('box_js')[0];
sq.addEventListener('mouseenter', function() {
    const txt = document.createTextNode('A')
    sq.append(txt)
});

const sq_ =document.getElementsByClassName('box_js')[0];
sq_.addEventListener('mouseleave', function () {
    sq_.innerText = ''
});