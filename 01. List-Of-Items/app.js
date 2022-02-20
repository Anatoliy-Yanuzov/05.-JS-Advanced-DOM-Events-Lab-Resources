function addItem() {

    let inputTextElement = document.querySelector('#newItemText');
    let listItemsElements = document.querySelector('#items');

    let createNewElement = document.createElement('li');
    createNewElement.textContent = inputTextElement.value;

    listItemsElements.appendChild(createNewElement);
    inputTextElement.value = ' ';
}
