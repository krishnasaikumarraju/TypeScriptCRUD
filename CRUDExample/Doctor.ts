import {Identifiable} from './Identifiable'

class Doctor implements Identifiable{
    id:number;
    getId():number{
        return this.id;
    }
}