let top_heroes = new Map();

top_heroes.set(1,"Iron Man");
top_heroes.set(2,"Spier Man");
top_heroes.set(3,"Thor");

let first_hero = top_heroes.get("first");


console.table(top_heroes);
console.log(top_heroes.has(2)); // returns boolean value
console.log(top_heroes.size);   // returns size (its a prorperty not function)
console.log(top_heroes.keys());

top_heroes.forEach((value,key)=>{
    if(key<3){
        console.log(`Top 2 heroes are: ${value}`);
    }
})

// Two sum solution as eg.
let arr =[1,3,5,6];
let target = 9;
 function twosum(arr ,target){
    let map = new Map();
    for(let i=0;i<arr.length; i++){
        if(map.has(target - arr[i])){
            return [map.get(target - arr[i]) , i ];
        }else {
            map.set(arr[i],i);
        }
    }
    return [-1 , -1];
};
console.log(twosum(arr,target));