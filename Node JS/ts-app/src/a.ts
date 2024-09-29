const x: number = 1;
// console.log(x);

function helloWorld(firstname: string, lastname: string) {
	console.log(`Hello ${firstname} ${lastname}`);
}

const sum = (a: number, b: number): number => {
	return a + b;
};

const isLegal = (age: number): boolean => {
	if (age >= 18) return true;
	return false;
};

function runAfter1s(fn: () => void) {
	setTimeout(fn, 1000);
}

runAfter1s(function () {
	console.log("hi there");
});

// helloWorld("John", "Doe");
// console.log(sum(1, 2));
// console.log(isLegal(21));
