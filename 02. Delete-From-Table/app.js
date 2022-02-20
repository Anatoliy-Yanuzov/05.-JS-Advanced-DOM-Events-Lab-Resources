function deleteByEmail() {

    let inputEmailElement = document.querySelector('input').value;
    let bodyTrElement = document.querySelectorAll('tbody tr');
    let resultElement = document.querySelector('#result');

    for (const tr of bodyTrElement) {
        let td = tr.children[1].textContent;

        if (td === inputEmailElement) {
            resultElement.textContent = 'Deleted';
            tr.parentNode.removeChild(tr);
        }
        else {
            resultElement.textContent = "Not found."
        }
    }
}