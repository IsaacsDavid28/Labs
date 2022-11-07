function main(){



let growMe = document.querySelector("#grow-me");

growMe.classList.add("big");

let shrinkMe = document.querySelector("#shrink-me");

shrinkMe.classList.remove("big");

let list = document.querySelector('ol')

let print = list.innerHTML

console.log(print)

let link = document.querySelector('.link');

link.setAttribute("href", "https://www.example.com");
link.innerHTML = "somewhere";

let userName = document.getElementById('name').value;
let header = document.querySelector('h1')

header.textContent = `Welcome ${userName}!`

}