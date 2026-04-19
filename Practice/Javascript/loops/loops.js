// All loops that exsists in js
// for,while,do-while are common loops 
let arr = [1,3,6,1,4];
// for each loop
arr.forEach(( value  , index)=>{
    console.log( index ,"=>", value);
});

// for of loop
 for( num  of arr){
    console.log(num );
}

// for in loop (mostly used for objects)
 for( value in arr){
    console.log(value);
 }

 // map method
 let arr2 = arr.map((value , index)=>{
    console.log("index", index , "value", value);
    return value<2;
 });
 console.log(arr2);

 // filter method (returns new array with filtered values)
let arr3 = arr.filter((value , index)=>{
    console.log("before filtering ", "idx",index  , "value",value);
    return value>2;
});
console.log( "filtered array" ,arr3);

// reduce method
let arr4 = arr.reduce((acc ,currValue)=>{
    console.log("acc", acc, " currValue", currValue);
    console.log(typeof currValue);
    return acc+=currValue;
},0);

console.log(arr4);