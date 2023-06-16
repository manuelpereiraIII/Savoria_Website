window.addEventListener('DOMContentLoaded', function() {
	var calculateTotalButton = document.getElementById('calculate-total');
	var invoiceDiv = document.getElementById('invoice');

	calculateTotalButton.addEventListener('click', function() {
		var menuItems = document.querySelectorAll('.menu-item');
		var total = 0;

		menuItems.forEach(function(item) {
			var quantityInput = item.querySelector('.quantity-input');
			var quantity = parseInt(quantityInput.value);
			var price = 10; // Set the price of each item

			total += quantity * price;
		});

		invoiceDiv.textContent = 'Total: $' + total.toFixed(2);
	});
});