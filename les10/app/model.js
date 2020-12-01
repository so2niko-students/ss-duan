import races from './helpers/races.js';
import classes from './helpers/classes.js';
import Cookie from './helpers/cookie.js';

export default class Model{
    isNameNotValid(name){
        const regName = /\W/g;

        return name.length == 0 || name.match(regName);
    }

    generateUser({ name, gender }){
        const user = { name };

        const avaN = this._random(0, 99);
        const avaG = gender == 'female' ? 'women' : 'men';
        user.ava = `https://randomuser.me/api/portraits/${ avaG }/${ avaN }.jpg`;

        user.hp = this._random(1, 100);
        user.mp = this._random(1, 100);
        user.lvl = this._random(1, 10);
        user.uid = this.generateUID();

        const race = races[this._random(0, races.length - 1)];
        user.race = race.name;
        user.icon = race.url;

        user.clas = classes[this._random(0, classes.length - 1)];

        this.saveUser(user);

        return user;
    }

    generateUID(){
        const r = (Math.floor(Math.random() * 1000000)).toString(16);
        const d = Date.now().toString(16);
        return r + d;
    }

    saveUser(user){
        const users = this.getUsers();

        users.push(user);
        Cookie.set('users', JSON.stringify(users), 30);    
    }

    deleteAllUsers(){
        Cookie.set('users', JSON.stringify([]), 30);  
    }

    deleteUser(uidF){
        const users = this.getUsers();
        const newUsers = users.filter(({ uid }) => uid != uidF);
        Cookie.set('users', JSON.stringify(newUsers), 30);
    }

    getUsers(){
        const users = Cookie.get('users');
        return users === '' ? [] : JSON.parse(users);
    }

    getLastVisit(){
        let visit = Cookie.get('visit');
        visit = visit == '' ? Date.now() : visit;

        const curTime = Date.now();
        let interv = Math.floor((curTime - visit) / 1000);

        Cookie.set('visit', curTime, 365);
        let timeFormat = '';

        switch(true){
            case interv < 60 : {
                timeFormat = 's';
                break;
            }
            case interv >= 60 && interv < 3600 : {
                interv = Math.floor(interv / 60);
                timeFormat = 'm';
                break;
            }
            case interv >= 3600 && interv < 3600 * 24 : {
                interv = Math.floor(interv / 3600);
                timeFormat = 'h';
                break;
            }
            case interv >= 3600 * 24: {
                interv = Math.floor(interv / 3600 * 24);
                timeFormat = 'd';
                break;
            }
        }

        return {
            interv,
            timeFormat
        };
    }

    _random(from = 1, to = 100){
        return Math.floor(Math.random() * (to - from + 1) + from);
    }
 }