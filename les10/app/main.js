document.querySelector('#btn-generate').addEventListener('click', onClickGenerate);

function onClickGenerate(){
    //считать имя
    //если имени нет - предупредить пользователя о том, что он не ввел имя и выйти
    const { isError, name } = inputAndCheckName();
    if(isError){
        return;
    }

    //сгенерировать число для аватара и использовать url из API (0 -- 99)
    //https://randomuser.me/api/portraits/men/77.jpg
    //сгенерировать ссылку на аватар
    const avaN = random(0, 99);
    const ava = `https://randomuser.me/api/portraits/men/${ avaN }.jpg`;

    //сгенерировать ХП и МП
    const hp = random(1, 100);
    const mp = random(1, 100);

    //Сгенерировать расу
    const races = ['Human', 'Elven', 'Orc', 'Dragon', 'Dwarf', 'Undead', 'Troll'];
    const race = races[random(0, races.length - 1)];

    //Сгенерировать класс
    const classes = ['Warrior', 'Mage', 'Warlock', 'Knight', 'Druid', 'Monk', 'Prophet'];
    const clas = classes[random(0, classes.length - 1)];

    //Сформировать HTML и вставить в контейнер(body)
    console.log(name, ava, hp, mp, race, clas);
    const heroHtml = `
    <div class="col mb-4">
    <div class="card h-100">
        <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" style="width: ${ hp }%" aria-valuenow="${ hp }" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="progress">
            <div class="progress-bar bg-info" role="progressbar" style="width: ${ mp }%" aria-valuenow="${ mp }" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <img src="${ ava }" class="card-img-top" alt="hero avatar">
        <div class="card-body">
        <h5 class="card-title">${ name }</h5>
        <p class="card-text">${ race }</p>
        <p class="card-text">${ clas }</p>
        </div>
    </div>
    </div>`;

    document.querySelector('#hero-container').innerHTML += heroHtml;

}

function inputAndCheckName(){
    const inpName = document.querySelector('#inp-name');
    const inpNameNot = document.querySelector('#inp-name-notify');
   
    const answ = {
        isError : false,
        name : inpName.value
    };

    inpName.value = '';
    inpNameNot.innerText = '';

    if(answ.name.length == 0){
        inpNameNot.innerText = 'ENTER A HERO NAME!';
        answ.isError = true;
    }

    return answ;
}

function random(from = 1, to = 100){
    return Math.floor(Math.random() * (to - from + 1) + from);
}