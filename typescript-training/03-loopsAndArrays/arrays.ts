let sportsOne: string[] = ["Golf", "Cricket", "tennis", "Swimming"];
for(let i=0; i<sportsOne.length; i++){
    console.log(sportsOne[i]);
}

for(let tempSport of sportsOne){
    console.log(tempSport);
}

for(let tempSport of sportsOne){
    if(tempSport=="Cricket"){
    console.log(tempSport + " << My Favourite");
    } else{
        console.log(tempSport)
    }
}

