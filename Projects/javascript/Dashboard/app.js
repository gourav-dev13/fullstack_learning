let data = fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json));

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();

  console.log(data[0].id); // ✅ works
}

getData();