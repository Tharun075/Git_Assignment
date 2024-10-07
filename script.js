//Question 1.A
let arr1 =[2,3,4,5];
let n1 = arr1.map(num=>num*num);
console.log("Question 1.A O/P: ",n1);

//Question 1.B

let arr2 = [1,2,3,4,5,6];
let n2 = arr2.filter(num=>num%2===0);
console.log("Question 1.B O/P: ",n2);

//Question 1.C
let arr3=[5,10,15,20];
let n3 = arr3.reduce((acc,num)=>{
    return acc+num;
},0);

console.log("Question 1.C O/P: ",n3);

//Question 1.D

let arr4=[1,2,3,4,5];
let n4 = arr4.filter(num=>num%2===0).map(num=>num*num).reduce((acc,num)=>{
    return acc+num;
},0);

console.log("Question 1.D O/P: ",n4);