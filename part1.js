
// 1.
console.log(Number("123")+7); // type conversion
console.log(+"123"+7); // unary plus

console.log("========================");

// 2.
if(Boolean(0) == false){
    console.log("Invalid");
}else{
    console.log("valid");
}

console.log("========================");

// 3.
for(let i=1;i<=10;i++){
    if(i%2==0) continue;
    console.log(i);
}

console.log("========================");

// 4. 
let arr=[1,2,3,4,5];
console.log(arr.filter((num)=>num%2==0));

console.log("========================");

// 5.
let arr1=[1,2,3];
let arr2=[4,5,6];
let mergArr=[...arr1,...arr2];
console.log(mergArr);

console.log("========================");

// 6.
let num=2;
switch(num){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid");
}

console.log("========================");

// 7.
let array=["a","ab","abc"];
let res=array.map(valu=> valu.length);
console.log(res);

console.log("========================");

// 8.
let n=15;
function res1(num){
    if(n%3==0 && n%5==0) console.log("Divisible by both");
    // or
    //if(Boolean(num%3)==false && Boolean(num%5)==false) console.log("Divisible by both");

}
res1(num);

console.log("========================");

//9.
let number=5;
let ress=(number)=>{
    return number*number;
}
console.log(ress(number));

console.log("========================");

//10.
const person={
    name: "John",
    age: 25
};
function result({...person}){
    console.log(`${person.name} is ${person.age} years old`);
};
result({...person});

console.log("========================");

// 11.
let ans=(...num)=>{
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum+=num[i];
    }
    return sum;
}
console.log(ans(1,2,3,4,5));

console.log("========================");

// 12.
function fn() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Success");
        }, 3000); 
    });
}

fn().then((res)=>{
    console.log(res); 
});

console.log("========================");

// 13.
let arrr=[1,3,7,2,4];
function anss(arrr){   
    let max=arrr[0];
    for(let i=1;i<arr.length;i++){
        if(arrr[i]>max) max=arrr[i];
    }
    return max;
}
console.log(anss(arrr));
    //? or
    //? console.log(Math.max(...arr));

console.log("========================");

//14.
let user={
    name: "John",
    age: 30
};
let rres=({...uuu})=>{
    return Object.keys(uuu);
}
console.log(rres({...user}));

console.log("========================");

// 15.
let ss="The quick brown fox";
let seee=(ss)=>{
    console.log(ss.split(" "));
}
seee(ss);
