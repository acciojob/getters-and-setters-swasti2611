//complete this code
class Person {
	Constructor(name,age){
		thhis.name=name;
		this.age=age;
	}
	get name(){
		return this.name
	}
	set age(age){
		 this.age=age;
	}
}

class Student extends Person {
	Constructor(){
		super(name);
	}
	
	
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	Constructor(){
		super(name);
	}
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
