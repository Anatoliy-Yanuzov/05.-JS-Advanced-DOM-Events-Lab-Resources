function focused() {
    
    let inputElement = document.getElementsByTagName('input');

    for (const element of inputElement) {
        element.addEventListener('focus', focusElement);
        element.addEventListener('blur', unFocusElement);
    }
    function focusElement(event) {
        event.target.parentNode.className = 'focused';
    }
    function unFocusElement(event) {
        event.target.parentNode.className = '';
    }
}