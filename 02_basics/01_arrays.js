//array

const myArray = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

//const myArray2 = new Array(1, 2, 3, 4, 5)

//console.log(myArray[1]);

//myArray.push(6)
//myArray.push(7)
//myArray.pop()


//myArray.unshift(9)
//myArray.shift(0)
//console.log(myArray);

//console.log(myArray.includes(9));
//console.log(myArray.indexOf(9));

const newArr = myArray.join()

//console.log(myArray);
//console.log(typeof newArr);



//slice, splice

console.log("A ", myArray);
const myn1 = myArray.slice(1, 3) 

console.log(myn1);
console.log("B ", myArray);


const myn2 = myArray.splice(1, 3) 
console.log("c ", myArray);
console.log(myn2);
