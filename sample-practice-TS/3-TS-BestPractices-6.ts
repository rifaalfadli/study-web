// Use Modules to Organize Code
import {hadis, clara} from './3-external-person';
import {logMessages} from './3-external-functions';
import {Persons} from './3-external-interface';

const alex: Persons = {
    name: "Alex",
    age: 24
}

logMessages("This is a log message");
console.log(hadis);
console.log(clara);
console.log(alex);
