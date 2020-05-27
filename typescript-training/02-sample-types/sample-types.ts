let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Anup";
let lastName: string = "Kumar";

// This will give error
// found = 0;
// grade = "A";
// firstname = false;

console.log(found);
console.log("The grade is "+ grade);
console.log("Hi "+firstName+" "+lastName);

console.log(`Hi ${firstName} ${lastName}`);

//tsc sample-types.ts 
//node sample-types.js