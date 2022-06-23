let  paragraph
let counter = 0

function requestRemote() {
  // https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
  fetch('https://jsonplaceholder.typicode.com/todos/'+counter).then(response => response.json())
  .then((data)=>{
    console.log('then')
    console.log(data)
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    paragraph.innerHTML = JSON.stringify(data)
  }).catch((err)=>{
    console.log('catch')
    console.log(err)
  }).finally(()=>{
    console.log('finally')
    counter++
    // counter = counter + 1
  })
}

function requestBackend() {
  fetch('http://localhost:8002/').then(response => response.text())
  .then((data)=>{
    console.log('then')
    console.log(data)
    paragraph.innerHTML = data
  }).catch((err)=>{
    console.log('catch')
    console.log(err)
  }).finally(()=>{
    console.log('finally')
    // counter++
    // counter = counter + 1
  })
}

window.addEventListener('load', () => {
  paragraph = document.getElementById('data_paragraph')
})
