for(let i = 1; i < 11; i++){
    console.log(`${i}`);
}

for(let i = 10; i > 0; i--){
    console.log(`${i}`);
}

let a = 1;
while(a < 11){
    console.log(a);
    a++;
}

let b = 10;
while(b > 0){
    console.log(b);
    b--;
}

do{
    console.log(a);
    a++;
}
while(a < 11);

do{
    console.log(b);
    b--;
}
while(b > 0);

let numbers = [1,2,3,4,5,6,7,8,9,10];

for(let number of numbers){
    console.log(number);
}
