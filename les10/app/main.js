document.querySelector('#btn-generate').addEventListener('click', onClickGenerate);

function onClickGenerate(){
    //считать имя
    //если имени нет - предупредить пользователя о том, что он не ввел имя и выйти
    const { isError, name, gender } = inputAndCheckName();
    if(isError){
        return;
    }

    const user = { name };

    //сгенерировать число для аватара и использовать url из API (0 -- 99)
    //https://randomuser.me/api/portraits/men/77.jpg
    //сгенерировать ссылку на аватар
    const avaN = random(0, 99);
    const avaG = gender == 'female' ? 'women' : 'men';
    user.ava = `https://randomuser.me/api/portraits/${ avaG }/${ avaN }.jpg`;

    //сгенерировать ХП и МП
    user.hp = random(1, 100);
    user.mp = random(1, 100);
    user.lvl = random(1, 10);
    user.uid = generateUID();

    //Сгенерировать расу
    const races = ['Human', 'Elven', 'Orc', 'Dragon', 'Dwarf', 'Undead', 'Troll', 'Night Elf',
    'Draenei', 'Worgen', 'Pandaren', 'Tauren', 'Blood Elf', 'Goblin'];
    user.race = races[random(0, races.length - 1)];

    //Сгенерировать класс
    const classes = ['Warrior', 'Mage', 'Warlock', 'Knight', 'Druid', 'Monk', 'Prophet', 'Hunter',
    'Rogue', 'Paladin', 'Shaman', 'Priest', 'Death Knight', 'Demon Hunter'];
    user.clas = classes[random(0, classes.length - 1)];

    //Сформировать HTML и вставить в контейнер(body)
    saveUser(user);

    renderUser(user);

}

function renderUser({ name, ava, hp, mp, race, clas, lvl, uid }){
    const delClass = `btn-del-${ uid }`;

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
            <div class="float-right">
                <span style="background-color: #eeffcd; color: purple; border-color: #f34c8a; 
                border-radius: 10px;" class="card-text p-2">LVL ${lvl}</span>
            </div>
            <p class="card-text">${ clas }</p>
            <div>
                <button type="button" class="btn btn-warning ${ delClass }" data-uid="${ uid }">Delete</button>
            </div>
        </div>
    </div>
    </div>`;

    document.querySelector('#hero-container').innerHTML += heroHtml;

    document.querySelector(`.${ delClass }`).addEventListener('click', deleteUser);
}

function deleteUser({ target }){
    const uidF = target.dataset.uid;

    let users = Cookie.get('users');
    users = users === '' ? [] : JSON.parse(users);

    users = users.filter(({ uid }) => uid != uidF);
    Cookie.set('users', JSON.stringify(users), 30);  

    firstLoad();
}

function inputAndCheckName(){
    const inpName = document.querySelector('#inp-name');
    const inpNameNot = document.querySelector('#inp-name-notify');
    const inpGender = [...document.querySelectorAll('.inp-gender')];
   
    const answ = {
        isError : false,
        name : inpName.value,
        gender : inpGender.find(el => el.checked).value
    };

    inpName.value = '';
    inpNameNot.innerText = '';

    const regName = /\W/g;
    if(answ.name.length == 0 || answ.name.match(regName)){
        inpNameNot.innerText = 'ENTER A HERO NAME(!!WITHOUT NON-WORD CHARACTERS!!)!';
        answ.isError = true;
    }

    return answ;
}

function random(from = 1, to = 100){
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function saveUser(user){
    let users = Cookie.get('users');
    users = users === '' ? [] : JSON.parse(users);
    users.push(user);
    Cookie.set('users', JSON.stringify(users), 30);    
}

function firstLoad(){
    let users = Cookie.get('users');
    users = users === '' ? [] : JSON.parse(users);

    console.log(users);

    document.querySelector('#hero-container').innerHTML = '';

    users.forEach(renderUser);
}

class Cookie{
    static set(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `${cname}=${cvalue};${expires};path=/`;
    }
    static get(cname) {
        const name = `${cname}=`;
        const coo = document.cookie.split(';')
                    .find(el => (el.trim()).startsWith(name));

        return coo ? coo.slice(name.length) : '';
    }
    static del(cname){
        document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}

function generateUID(){
    const r = (Math.floor(Math.random() * 1000000)).toString(16);
    const d = Date.now().toString(16);
    return r + d;
}

firstLoad();

generateUID();