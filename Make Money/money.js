document.getElementById('button').onclick = function() {
    let type = document.getElementById('moneyType').value ;
    for (let i = 0; i < document.getElementById('quantity').value; i++) {

        let img = document.createElement('img');
        if (type.valueOf() === 'Quarter') {
            img.src = "quarter.jpg"
            img.classList.add("coin")
        }
        if (type.valueOf() ==='Dime') {
            img.src = "dime.jpg"
            img.classList.add("coin")
        }
        if (type.valueOf() === 'Nickel') {
            img.src = "nickle.jpg"
            img.classList.add("coin")
        }
        if (type.valueOf() === 'Penny') {
            img.src = "penny.jpg"
            img.classList.add("coin")
        }
        document.getElementById('display').appendChild(img);
    
    }
    const display = document.querySelector('#display');

    display.addEventListener('click', e => {
    e.target.classList.add('remove')
    })
}

