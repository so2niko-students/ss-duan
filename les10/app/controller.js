import Model from "./model.js";
import View from "./view.js";

export default class Controller{
    constructor(){
        this.view = new View(this.onGenerate, this.onDeleteAll, this.onDeleteUser);
        this.model = new Model();
        this.onLoad();

        this._lastVisit();
    } 

    onLoad(){
        const users = this.model.getUsers();

        this.view.deleteAllUsers();
        users.forEach(this.view.renderUser);
    }

    onGenerate = () => {
        const nameAndGender = this.view.getNameAndGender();

        if(this.model.isNameNotValid(nameAndGender.name)){
            this.view.showNameError();
        }else{            
            const user = this.model.generateUser(nameAndGender);
            this.view.renderUser(user);
        }
    }

    onDeleteAll = () => {
        this.model.deleteAllUsers();
        this.view.deleteAllUsers();
    }

    onDeleteUser = ({ target }) => {
        this.model.deleteUser(target.dataset.uid);

        this.onLoad();
    }

    _lastVisit(){
        const visit = this.model.getLastVisit();
        
        this.view.showLastVisit(visit);
    }
}