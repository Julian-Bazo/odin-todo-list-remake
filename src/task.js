export default class Task {
    constructor(name, dueDate, desc, urgency) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName === `string`){
            this._name = newName
        }
        else {
            console.error("Must be a valid string");
        }
    }

    get dueDate() {
        return this._dueDate
    }

    set dueDate(newDate) {
        if (typeof newDate === `string`) {
            this._dueDate = newDate
        }
        else {
            console.error("Must be a valid string");
        }
    }

    get desc() {
        return this._desc;
    }

    set desc(newDesc) {
        if (typeof newDesc === `string`) {
            this._desc = newDesc;
        }
        else {
            console.error("Must be a valid string value")
        }
    }

    get urgency() {
        return this._urgency;
    }

    set urgency(status) {
        if (status === `true` || status === `false`) {
            this._urgency = status;
        }
        else {
            console.error("Urgency status must be true or false");
        }
    }

    
}