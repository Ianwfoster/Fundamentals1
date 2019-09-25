/*
*Conditionals, Functions, Scope, and Loops
 */

let equals = 1 === 1;
console.log(equals);

let greaterThan = 5 > 1;

let lessThan = 2 < 10;

let greaterThanEq = 5 >= 5;

let lessThanEq = 4 <= 9;

let notEquals = 5 !== 2;

let storeA = 4.40;
let storeB = 4.40;

function compareStorePrices(storeA, storeB) {
	let storeAIsLower = storeA < storeB;
	if(storeAIsLower) {
		console.log("Store A has a lower price.")
	} else if(storeB < storeA) {
		console.log("Store B has a lower price.")
	} else {
		console.log("Their prices are equal.")
	}
}

compareStorePrices(10,11);
compareStorePrices(10,9);

function squareNum (number) {
	let squared = number * number;
	return squared;
}

let squaredNumber = squareNum(12);
console.log(squaredNumber);

let x = 10;

function addNumbers (n,m,x) {
	console.log(x);
	let b;
	if (1===1) {
		b = 123;
	}
	console.log(b);
	return n + m;
}
addNumbers(2, 3, 8);
console.log(x);

//              0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++){
	//console.log("i is equal to:" +1);
	console.log(ourArray[i]);
	for(let j = 0; j<10; j++) {
		console.log('j is equal to: ' + j);
	}
}

let u = 0;
while (u < 10) {
	console.log('Ran');
	u = u + 1;
}