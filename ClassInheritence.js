class User{
 constructor(user, email='t1@test.com'){
	 this.user = user;
   this.email = email;
 }
};
class Employee extends User{
constructor(id){
  super();
  this.Empid = id;}
}

class Manager extends Employee{
constructor(){
  super();
}
}
let a = new  User();
let b = new  User('Emp2','abc@abc.com');
let E1 = new Employee();
let M1 = new Manager();
console.log(a);
console.log(b);
console.log(E1);
console.log(M1);
