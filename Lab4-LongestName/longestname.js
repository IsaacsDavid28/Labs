let name1 = "John";

let name2 = "Dave";

let name3 = "Patricia";

if(name1.length === name2.length && name1.length === name3.length){
    console.log(`${name1}, ${name2}, and ${name3} are the same length!`);
}
else if(name1.length === name2.length && name1.length > name3.length){
    console.log(`${name1} and ${name2} are the same length!`);
}
else if(name1.length < name2.length && name2.length === name3.length){
    console.log(`${name3} and ${name2} are the same length!`);
}
else if(name1.length > name2.length && name1.length === name3.length){
    console.log(`${name1} and ${name3} are the same length!`);
}
else if(name1.length > name2.length && name2.length >= name3.length){
    console.log(`${name1} has the longest name`)
}
else if(name1.length < name2.length && name1.length >= name3.length){
    console.log(`${name2} has the longest name`)
}
else{
    console.log(`${name3} has the longest name`)
}

