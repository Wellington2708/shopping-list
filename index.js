const item = document.getElementById('input__item');
const addItem = document.getElementById('add__btn');
const shoppingList = document.getElementById('shopping__list');
let counter = 0;

// structure to create item in the list
addItem.addEventListener('click', (e) => {
    e.preventDefault();
    if (item.value){
    // creating LI element and container list item.

    const listItem = document.createElement('li');
    const containerListItem = document.createElement("div")
    containerListItem.classList.add('list__item-container');
    const flexContainer = document.createElement('div');
    flexContainer.classList.add('flex__container');

    // create checkbox input container and  label
    const checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('checkbox__container');
    const checkboxLabel = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add("checkbox__input");
    input.id = "checkbox-" + counter++;
    checkboxLabel.setAttribute('for', input.id);


// create custom checkbox
    const customCheckbox = document.createElement('div');
    customCheckbox.classList.add('custom__checkbox' , 'checked');
    checkboxLabel.appendChild(input);
    checkboxLabel.appendChild(customCheckbox)
    checkboxContainer.appendChild(checkboxLabel);



// create paragraph with item name
    const nameItem = document.createElement('p');
    nameItem.innerText = item.value;

// append checkbox container and item name to flexContainer

    flexContainer.appendChild(checkboxContainer)
    flexContainer.appendChild(nameItem);

// create container with delete and edit buttons 

    const flexButtons = document.createElement('div');
    flexButtons.classList.add('flex__buttons');
    

    // create delete and edit buttons
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('item__list-button');

    const deleteImage = document.createElement('img');
    deleteImage.src = 'img/delete.svg';
    deleteImage.alt = 'Delete button';
    deleteButton.appendChild(deleteImage);

    const editButton = document.createElement('button');
    editButton.classList.add('item__list-button');
    const editImage = document.createElement('img');
    editImage.src = "img/edit.svg";
    editImage.alt = "Edit Button";
    editButton.appendChild(editImage);

    // append buttons to flex container
    flexButtons.appendChild(deleteButton);
    flexButtons.appendChild(editButton);

 // append flexContainer and flexButton to containerListItem
    containerListItem.appendChild(flexContainer);
    containerListItem.appendChild(flexButtons);

    // append listItem to shoppingList
    listItem.appendChild(containerListItem);
    shoppingList.appendChild(listItem);
    item.value = '';
}else {
    alert('Please enter item name!');
}

})