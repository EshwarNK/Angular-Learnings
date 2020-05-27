for(let i=0; i<5; i++){
    console.log(i);
}

let reviews: number[] = [5,4,3,2,3,2];
let total: number=0;
for(let i=0; i<reviews.length; i++){
    console.log(reviews[i]);
    total+=reviews[i];
}
console.log("Total "+total);
console.log("average "+total/reviews.length);