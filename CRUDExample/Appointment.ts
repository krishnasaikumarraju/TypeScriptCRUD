import {Identifiable} from './Identifiable'

class Appointment implements Identifiable{
    id:number;
    getId():number{
        return this.id;
    }
}