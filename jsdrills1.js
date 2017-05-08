function whoAmI(name, age){
	let yearOfBirth = new Date().getFullYear() - age;
	console.log(`My name is ${name} and I'm ${age} years old.`);
	console.log(`I was born in ${yearOfBirth}`);
}

whoAmI("Sonja", 30);