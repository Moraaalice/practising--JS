const ages = [19,22,19,24,20,25,26,24,25,24];
let ages2 = ages.sort(function (a,b){return a-b});
console.log(ages2);
midArray = Math.floor(ages.length/2);
console.log(midArray);
let aging = Math.min(...ages);
console.log(aging);
let aged = Math.max(...ages);
console.log(aged);
range = (aged - aging)/(aged+aging);
console.log(range);


    for(let x=0;x<=10;x++){
        console.log(x);
    }
 let a = 0;
 while(a<=10){
    console.log(a);
    a++
 } 
for (let p=0;p<=100;p++){
    if(p%2 != 0){
        console.log(p);
    }
    let numb = [10,20,30,20,20];
    let sum = 0;
    for(let s=0;s<numb.length;s++){
        sum+=numb[s];
        console.log(sum);
    }
}
let array = [10,20,30,40,50];
function mergingArray(arr){
    if(arr.length<=1){
        return arr;
    }
};   
middleArray = Math.floor(arr.length/2);
leftArray = arr.slice(0,middleArray);
rightArray = arr.slice(middleArray);
return mergeArray(mergingArray(leftArray),mergingArray(rightArray));

function mergeArray(leftArray,rightArray){
    empty = [];
    while(leftArray&&rightArray){
        if(leftArray[0]<=rightArray[0]){
            empty.push(leftArray.shift())
        }else{
            empty.push(leftArray.shift())
        }
        console.log(empty);
        return[...empty,...leftArray,...rightArray];
    }
}


