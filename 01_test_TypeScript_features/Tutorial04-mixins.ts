class ActiveRecord {
    Deleted = false;
}
class Person extends ActiveRecord {
    constructor(firstName : string, lastName : string) {
        super();
        this.FirstName = firstName;
        this.LastName = lastName;
    }
    

    FirstName : string;
    LastName : string;
}

type Constructor<T = {}> = new (...args: any[]) => T;

function RecordStatus<T extends Constructor>(base : T) {
    return class extends base {
        Deleted : boolean = false;
    }
}

const ActivePerson = RecordStatus(Person);

let activePerson = new ActivePerson("Peter", "O'Reyly");
activePerson.Deleted = true;
console.log("Active is: ",activePerson);