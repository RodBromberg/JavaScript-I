// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:



class Intern {
    constructor(id, email, name, gender) {
        this.id = id
        this.email = email
        this.name = name
        this.gender = gender
    }
}



// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
    "id": 0,
    "name": "Example",
    "email": "examples@you.edu",
    "gender": "F"
}

// Write your intern objects here:
// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

const mitzi = new Intern(1, 'melloy0@psu.edu', 'Mitzi', 'F');
const antonietta = new Intern(5, 'adaine5@samsung.com', 'Antonietta', 'F')
console.log(mitzi.name)

Intern.prototype.multiply = function(a, b) {
    return a * b
}
console.log(antonietta.multiply(3, 4))

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const Parent = {
    name: 'Susan',
    age: 70,
    child: {
        name: 'George',
        age: 50,
        grandchild: {
            name: 'Sam',
            age: 30
        }
    }
}
Parent.prototype = {
    sayName: function() {
        return `My name is ${this.name}`
    }
}

Parent.prototype = {
    ageName: function() {
        return `My name is ${this.name} and I'm ${this.age} years old`
    }
}


console.log(Parent.name)
console.log(Parent.child.age)
console.log(Parent.prototype.ageName.call(Parent.child.grandchild))
console.log(Parent.prototype.sayName.call(Parent))
console.log(Parent.prototype.sayName.call(Parent.child))
console.log(Parent.prototype.sayName.call(Parent.child.grandchild))


// Log the parent object's name

// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak