// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
        //  console.log("5 is best number");
    }
    //  console.log(i);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value is ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and Outer loop value ${i}`);   
        // console.log(i + '*' + j + ' = ' + i*j);     
    }    
}


let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];    
    // console.log(element);
}


//break and continue

for (let i = 0; i < 20; i++) {
    if (i == 5) {
        // console.log("5 Detected");
        break
    }
    const element = i;    
    // console.log(`value of i is ${i}`);
}



for (let i = 0; i < 20; i++) {
    if (i == 5) {
        // console.log("5 Detected");
        continue
    }
    const element = i;    
    // console.log(`value of i is ${i}`);
}


