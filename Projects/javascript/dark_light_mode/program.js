let toggle=document.querySelector("#btn");
let body =document.querySelector("body");
let mode="light mode";
toggle.innerText="dark mode";

toggle.addEventListener("click", function(){
    if(mode==="light mode"){
        mode="dark mode";
        body.style.backgroundColor="black";
        toggle.innerText="Light Mode";
    }
    else{
        mode="light mode";
        body.style.backgroundColor="white";
        toggle.innerText="Dark Mode";
    }
    console.log(mode);
});



// let toggle=document.querySelector("#btn");
// let body=document.querySelector("body");
// toggle.innerText="Switch to dark mode";
// let mode="dark mode";

// const a = ()=>{
//     if(mode==="dark mode"){
//         mode="light mode";
//         body.style.backgroundColor="black";
//         toggle.innerText="Switch to Light mode";
//     }
//     else{
//         mode="dark mode";
//         body.style.backgroundColor="white";
//         toggle.innerText="Switch to dark mode";
//     }
//     console.log(mode);
// }

// toggle.addEventListener("click", a);




