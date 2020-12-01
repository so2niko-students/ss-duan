export default class View{
    btnGenerate = document.querySelector('#btn-generate');
    btnDeleteAll = document.querySelector('#btn-delete-all');
    contHero = document.querySelector('#hero-container');
    inpName = document.querySelector('#inp-name');
    inpNameNotify = document.querySelector('#inp-name-notify');
    inpGender = [...document.querySelectorAll('.inp-gender')];
    contLastVisit = document.querySelector('#info-last-visit');


    constructor(onGenerate, onDeleteAll, deleteUser){
        this.btnGenerate.addEventListener('click', onGenerate);
        this.btnDeleteAll.addEventListener('click', onDeleteAll);

        this.deleteUser = deleteUser;
    } 

    renderUser = ({ name, ava, hp, mp, race, clas, lvl, uid, icon }) => {
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
                <div class="col-4 col-xl-6">
                    <div class="float-left">
                        <img src="${icon}" 
                        class="card-img" alt="icon">
                    </div>
                </div>
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
    
        this.contHero.insertAdjacentHTML('afterbegin', heroHtml);
    
        document.querySelector(`.${ delClass }`).addEventListener('click', this.deleteUser);
    }

    getNameAndGender(){
        const answ = {
            name : this.inpName.value,
            gender : this.inpGender.find(el => el.checked).value
        };

        this.inpName.value = '';
        this.inpNameNotify.innerText = '';

        return answ;
    }

    showNameError(){
        this.inpNameNotify.innerText = 'ENTER A HERO NAME(!!WITHOUT NON-WORD CHARACTERS!!)!';
    }

    deleteAllUsers(){
        this.contHero.innerHTML = '';
    }

    showLastVisit({ interv, timeFormat }){
        this.contLastVisit.innerText = `: ${ interv }${ timeFormat} ago`;
    }
 }