class Human {
  constructor (){
  this.name = 'Pavel';
  this.age = 35;
  this.dateOfBirth = '30.01.1970';
  }
  displayHumanInfo () {
    console.log(this.name, this.age, this.dateOfBirth);
  }
}

class Employee extends Human {
  constructor (){
  super();
  this.salary = 100000;
  this.department = 'IT-deparment';
  }
  displayInfo () {
    console.log(this.salary, this.department);
  }
}

class Manager extends Employee {
  constructor (){
  super();
  this.developers = [
    'Ivanov', 
    'Petrov', 
    'Sidorov'
  ];
  }
  displayManagerInfo () {
    console.log(this.developers);
  }
  addDeveloper (developer) {
    this.developers.push(developer);
    console.log(this.developers);
  }
   deleteDeveloper (developer) {
    this.developers.splice(developer,1);
    console.log(this.developers);
  }
 }

class Developer extends Employee {
  constructor (){
  super();
  this.manager = 'Menegerov';
  }
  displayInfo () {
    console.log(this.manager);
  }
  setManager (manager) {
  this.manager = manager;
  console.log(this.manager);
  }
}

const manager = new Manager ();
manager.displayManagerInfo ();
manager.deleteDeveloper (1);
manager.addDeveloper ('Mihailov');

const developer = new Developer ();
developer.displayInfo();
developer.setManager('Newmanagerov');