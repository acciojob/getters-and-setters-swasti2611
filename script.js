//complete this code
class Person {
	Constructor(name,age){
		thhis.name=name;
		this.age=age;
	}
}

class Student extends Person {
	Constructor(){
		super(name);
	}
	get name(){
		return this.name
	}
	set age(age){
		 this.age=age;
	}
	
	study(){
		console.log(`${name} is studying`);
	}
}

class Teacher extends Person {
	Constructor(){
		super(name);
	}
	teach(){
		console.log(`${name} is studying`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
