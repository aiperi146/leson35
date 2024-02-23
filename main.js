'use strict';

let somePerson = {
    name: 'Айжан',
    age: 23,
    say: sayName,
    };



const otherPerson = {
    name: 'Саша',
    age: 45,
    say:sayName,
};
function sayName (){
        console.log('Меня зовут', this.name);
        console.log('мой возраст', this.age);
 };

somePerson.say()
otherPerson.say()