// Callbacks
function sum( a , b){
    console.log(`${a} + ${b} =`,a+b);
}
function callback(a, b, c){
    c(a,b);
}
callback( 2 , 5 , sum)

// callback Hell
function getData( dataId , getnextData){
    setTimeout(()=>{
        console.log("data : ", dataId);
        if(getnextData){
            getnextData();
        }
    },2000);
}
 
getData( 1 , ()=>{
    getData(2 , ()=>{
        getData(3 ,()=>{
            getData(4);
        })
    })
});


// Promises
let promise = new Promise((resolve,reject)=>{
    console.log("I am a  promise");
    try{
         resolve("this is resolved promise");
        }
    catch{
            reject("error occurerd");
        }
});

// Handling promises with .then
function getdata(dataId){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("api's Data : " , dataId);
            resolve("success");
        },2000);
    });
}

getdata(1).then(() =>{
    console.log("complete 1st promise");
    getdata(2).then(()=>{
        console.log("complete 2nd promise");
        getdata(3).then(()=>{
            console.log("complete 3rd promise");
        })
    })
}); 

// async Await
function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data :" ,id);
            resolve("Data received!");
        }, 2000);
    });
}

async function fetchData() {
    console.log("Fetching data...");

    let res1 = await getData(1);   // wait until promise resolves
    let res2 = await getData(2);   // wait until promise resolves
    let res3 = await getData(3);   // wait until promise resolves
    let res4 = await getData(4);   // wait until promise resolves

    console.log("res1 : ",res1);
    console.log("Done!");
}

fetchData();

// eg with real api 
async function GETDATA(){
    console.log("getting Data");
    let data = await fetch('https://jsonplaceholder.typicode.com/todos');
    let realdata = await data.json();
    for(let i = 0; i< 10 ; i++){
        console.log(realdata[i].completed)
    }

}

GETDATA();