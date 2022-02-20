function addItem() {

    let inputTextElement = document.querySelector('#newItemText');
    let listItemsElements = document.querySelector('#items');

    let createListElement = document.createElement('li');
    createListElement.textContent = inputTextElement.value;

    listItemsElements.appendChild(createListElement);

    let deleteElement = document.createElement('a');
    deleteElement.setAttribute('href', '#');
    deleteElement.textContent = '[Delete]';

    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
    });

    createListElement.appendChild(deleteElement);
    inputTextElement.value = '';
}