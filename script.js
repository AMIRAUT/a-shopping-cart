document.addEventListener('DOMContentLoaded', function() {
    const plusButtons = document.querySelectorAll('.fa-plus-circle');
    const minusButtons = document.querySelectorAll('.fa-minus-circle');
    const trashButtons = document.querySelectorAll('.fa-trash-alt');
    const heartButtons = document.querySelectorAll('.fa-heart');
    const totalPriceElement = document.querySelector('.total');
  
    // Add event listeners to plus buttons
    plusButtons.forEach(button => {
      button.addEventListener('click', function() {
        const quantityElement = this.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = ++quantity;
        updateTotalPrice();
      });
    });
  
    // Add event listeners to minus buttons
    minusButtons.forEach(button => {
      button.addEventListener('click', function() {
        const quantityElement = this.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantityElement.textContent = --quantity;
        }
        updateTotalPrice();
      });
    });
  
    // Add event listeners to trash buttons
    trashButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productCard = this.closest('.card');
        productCard.remove();
        updateTotalPrice();
      });
    });
  
    // Add event listeners to heart buttons
    heartButtons.forEach(button => {
      button.addEventListener('click', function() {
        this.classList.toggle('liked');
      });
    });
  
    // Function to update the total price
    function updateTotalPrice() {
      const products = document.querySelectorAll('.card-body');
      let total = 0;
      products.forEach(product => {
        const quantity = parseInt(product.querySelector('.quantity').textContent);
        const unitPrice = parseFloat(product.querySelector('.unit-price').textContent.replace('$', ''));
        total += quantity * unitPrice;
      });
      totalPriceElement.textContent = total + ' $';
    }
  });
  