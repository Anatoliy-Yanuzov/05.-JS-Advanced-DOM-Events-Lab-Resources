function solve() {
   
   let buttonAddProducts = document.querySelectorAll('.add-product')
   let textAreaElement = document.querySelector('textarea');
   let checkoutButtonElement = document.querySelector('.checkout');
   let totalPrice = 0;
   let products = new Set();

   for (const addButtonEvent of buttonAddProducts) {
      addButtonEvent.addEventListener('click', (e) => {
         let currentProductElement = e.currentTarget.parentElement.parentElement;
         let productName = currentProductElement.querySelector('.product-title').textContent;
         let productPrice = Number(currentProductElement.querySelector('.product-line-price').textContent);

         totalPrice += productPrice;
         products.add(productName);

         textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
      });
   }
   checkoutButtonElement.addEventListener('click', (e) => {
      let uniqueProduct = [];
      for (const product of products) {
         uniqueProduct.push(product);
      }
      textAreaElement.textContent += `You bought ${uniqueProduct.join(', ')} for ${totalPrice.toFixed(2)}.\n`
      disableButtons()
   });
   function disableButtons() {
      let buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(button => button.disabled = true);
   }
}