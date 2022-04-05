//for(const num of numbers){} // array
//for(const prop in student){} // object
const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

//way-1:using for in to loop through object
//for-in unorder tai array tey use na korai better
for(let key in bottle){       //only get object key here
    console.log(`${key}:${bottle[key]}`)
}

//way-2:another way ot loop through object using for of loop
let keys=Object.keys(bottle) //will return a array and that array will be saved into keys
console.log(keys)
//now use for of loop to loop through keys array
for(let key of keys){
    console.log(bottle[key])
}

//way:3 using entries and for of
const entries=Object.entries(bottle)
console.log(entries)
// const [key, value] = ['color', 'yellow']; //array destructring concept use hobey here
//remember jekono loop through ekta ekta korey element/index niye kaj korey
for(const [key,value] of Object.entries(bottle)){    
    console.log(`${key}: ${value}`)
}