let num = [34,57];
Function(num);{
if(num[0]>=num[1]){
    console.log(num[0]);
}
else{
    console.log(num[1]);
}
}
Function(num);
//
const shoppingCart = ["milk","coffee","tea","honey"];
shoppingCart.unshift("meat");
shoppingCart.push("sugar");
console.log(shoppingCart);
let shopping = shoppingCart.splice(4,1);
console.log(shopping);
console.log(shoppingCart.length);
//
let numb = 7;
switch(numb){
    case 1:
        console.log("January");
        case 2:
            console.log("Febaruary");
            case 3:
                console.log("March");
                case 4:
                    console.log("April");
                    case 5:
                        console.log("May");
                        case 6:
        console.log("June");
        case 7:
            console.log("July");
            case 8:
                console.log("August");
                case 9:
                    console.log("September");
                    case 10:
                        console.log("October");
                        case 11:
                            console.log("November");
                            case 12:
                                console.log("December");
}
let arr = [23,67,89,12,45,90];
function mergeArray(arr){
    if(arr.length<=1){
        return arr
    }
}
midArray = Math.floor(arr.length/2);
leftArray = arr.slice(0,midArray);
rightArray = arr.slice(midArray);
console.log(leftArray);
console.log(rightArray);
return mergeSorting(mergeArray(leftArray),mergeArray(rightArray));

function mergeSorting(){
    emptyArray = [];
    while(leftArray&&rightArray){
        if(leftArray[0]<=rightArray[0]){
            emptyArray.push(leftArray.shift());
        }else{
            emptyArray.push(rightArray.shift())
        }

        console.log(emptyArray);
        return[...emptyArray,...leftArray,...rightArray];
    }
}


