
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


// 3.
// for(let i=1;i<=10;i++){
//     if(i%2==0) continue;
//     console.log(i);
// }

// 4. 
// let arr=[1,2,3,4,5];
// console.log(arr.filter((num)=>num%2==0));


// 5.
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let mergArr=[...arr1,...arr2];
// console.log(mergArr);


// 6.
// let num=2;
// switch(num){
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid");
// }


// 7.
// let array=["a","ab","abc"];
// let res=array.map(valu=> valu.length);
// console.log(res);


// 8.
// let num=15;
// function res(num){
//     if(num%3==0 && num%5==0) console.log("Divisible by both");
//     //? or
//     //?if(Boolean(num%3)==false && Boolean(num%5)==false) console.log("Divisible by both");

// }
// res(num);


//9.
// let num=5;
// let res=(num)=>{
//     return num*num;
// }
// console.log(res(num));


//10.
// const person={
//     name: "John",
//     age: 25
// };
// function res({...person}){
//     console.log(`${person.name} is ${person.age} years old`);
// };
// res({...person});


// 11.
// let res=(...num)=>{
//     let sum=0;
//     for(let i=0;i<num.length;i++){
//         sum+=num[i];
//     }
//     return sum;
// }
// console.log(res(1,2,3,4,5));


// 12.
// function fn() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Success");
//         }, 3000); 
//     });
// }

// fn().then((res)=>{
//     console.log(res); 
// });


// 13.
// let arr=[1,3,7,2,4];
// function res(arr){   
//     let max=arr[0];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>max) max=arr[i];
//     }
//     return max;
// }
// console.log(res(arr));
//     //? or
//     //? console.log(Math.max(...arr));


//14.
// let user={
//     name: "John",
//     age: 30
// };
// let res=({...uuu})=>{
//     return Object.keys(uuu);
// }
// console.log(res({...user}));


// 15.
// let ss="The quick brown fox";
// let res=(ss)=>{
//     console.log(ss.split(" "));
// }
// res(ss);
