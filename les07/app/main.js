function show(){
    document.body.insertAdjacentHTML('beforeend', `<div id="cont">${ '<div></div>'.repeat(100) }</div>`);
    const containers = [...document.querySelectorAll('#cont>div')].sort(() => Math.random() - Math.random());

    const opt = {
        containers
    };

    opt.colorInterval = setInterval(col, 100, opt);
}
function col({ containers, colorInterval }){
    console.log(containers);
    if(containers.length == 1){
        document.getElementById('task1').innerHTML = 'completed';
        clearInterval(colorInterval);
    }
    const el = containers.pop();
    el.style.backgroundColor = '#'+Math.random().toString(16).slice(2,8);
}

show();