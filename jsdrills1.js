function yearOfBirth(age) {
	if (age < 0){
		throw new Error("Age cannot be negative!");
	}
	return new Date().getFullYear() - age;
}

function whoAmI(name, age){
	if (!name || !age){
		console.error("Arguments not valid.");
		return;
	}
	else if(typeof age !== "number" || typeof name !== "string"){
		console.error("Arguments are not correctly typed");
		return;
	}

	let yOB = yearOfBirth(age);
	console.log(`My name is ${name} and I'm ${age} years old.`);
	console.log(`I was born in ${yOB}.`);
}

whoAmI("Sonja", 30);