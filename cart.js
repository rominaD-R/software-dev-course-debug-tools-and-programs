const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

const discount = 0.5;

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be < - Uncaught TypeError: can't access property "price", cartItems[i] is undefined
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
  }
  return total;
}

function applyDiscount(total, discountRate) {
  console.log(`The final price is ${total} - ${total * discountRate}:  ${total - total * discountRate}`);
  return total - total * discountRate; // Bug: Missing validation for discountRate
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  if (typeof total !== 'number') return 'Please enter a valid total that is a number';
  if (cartItems.length == 0) return `No items in cart.`;
  cartItems.forEach(item => {
      console.log(`Item:  ${item.name} - $${item.price}`)
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; 
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, discount); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("discount").textContent = `${discount*100}%`;     
document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;                     // Why do we need to show the total twice?
