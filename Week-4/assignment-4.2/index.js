var Person = function() {};

Person.prototype.initialize = function(name,age) {
    this.name=name;
    this.age=age;
}

// TODO: create the class Teacher and a method teach
var Teacher = function(name, age) {
    Person.call(this, name, age);
    this.teach = function(subject) {
        // [teacher's name]is now teaching[subject]
        console.log(`${this.name} is now teaching ${subject}`);
    }
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");