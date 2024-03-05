// let myName = 'Vivek     '
let myChannel = 'chai     '

// console.log(myName.trueLength);




let myHeros = ['thor', 'spiderman']

let herosPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.vivek = function(){
    console.log('Vivek is presant in all object');
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh say hello`);
}

// herosPower.vivek()
// myHeros.vivek()
// myHeros.heyHitesh()
// herosPower.heyHitesh()



//inheritance

const User = {
    name: 'chai',
    email: 'google@gmail.com'
}

const Teacher = {
    makeVideo: 'true'
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: 'true',

    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(TASupport, Teacher)

console.log(TASupport);


let anotherUserName = 'ChaiAurCode     '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
} 

anotherUserName.trueLength();
'vivek'.trueLength();
'iceTea'.trueLength();
