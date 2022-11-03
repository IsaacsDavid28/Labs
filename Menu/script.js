const number = document.querySelector('.dropdown-numbers');
const letter = document.querySelector('.dropdown-letters');

letter.addEventListener('click', showLetters);
number.addEventListener('click', showNumbers);

function showLetters() {
    let letters = document.querySelector('.l')
    let numbers = document.querySelector('.n')
    letters.style.display = "block"
    numbers.style.display = "none"

}
function showNumbers() {
    let letters = document.querySelector('.l')
    let numbers = document.querySelector('.n')
    letters.style.display = "none"
    numbers.style.display = "block"
}