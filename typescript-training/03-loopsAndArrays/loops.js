for (var i = 0; i < 5; i++) {
    console.log(i);
}
var reviews = [5, 4, 3, 2, 3, 2];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("Total " + total);
console.log("average " + total / reviews.length);
