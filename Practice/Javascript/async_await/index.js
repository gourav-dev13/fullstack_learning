// async_await_basic.js

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000);
    });
}

async function fetchData() {
    console.log("Fetching data...");

    let result = await getData();   // wait until promise resolves

    console.log(result);
    console.log("Done!");
}

fetchData();