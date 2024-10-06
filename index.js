const inputItem = document.getElementById('input__item');
const addItem = document.getElementById('add__btn');

addItem.addEventListener('click', (e)=> {
    e.preventDefault();
    const valor = inputItem.value;
    console.log(valor);

})