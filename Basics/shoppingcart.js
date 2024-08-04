// Shopping Cart System

// 1. Initialize the shopping cart (array of items)
let shoppingCart = [
    { id: 1, name: 'Apple', price: 1.00, quantity: 2 },
    { id: 2, name: 'Banana', price: 0.50, quantity: 5 },
    { id: 3, name: 'Orange', price: 1.25, quantity: 3 }
];
console.log("Initial cart:", shoppingCart);

// 2. Push: Add a new item to the cart
shoppingCart.push({ id: 4, name: 'Grapes', price: 2.00, quantity: 1 });
console.log("After adding Grapes:", shoppingCart);

// 3. Pop: Remove the last item from the cart
let removedItem = shoppingCart.pop();
console.log("After removing last item:", shoppingCart, "| Removed item:", removedItem);

// 4. Shift: Remove the first item from the cart
let firstItemRemoved = shoppingCart.shift();
console.log("After removing first item:", shoppingCart, "| First item removed:", firstItemRemoved);

// 5. Unshift: Add a new item to the beginning of the cart
shoppingCart.unshift({ id: 5, name: 'Pineapple', price: 3.00, quantity: 1 });
console.log("After adding Pineapple to the beginning:", shoppingCart);

// 6. Map: Calculate the total price for each item
let itemTotals = shoppingCart.map(item => ({
    name: item.name,
    totalPrice: item.price * item.quantity
}));
console.log("Total price per item:", itemTotals);

// 7. Filter: Find items that cost more than $1
let expensiveItems = shoppingCart.filter(item => item.price > 1);
console.log("Items costing more than $1:", expensiveItems);

// 8. Reduce: Calculate the total cost of the cart
let totalCost = shoppingCart.reduce((total, item) => total + (item.price * item.quantity), 0);
console.log("Total cost of the cart:", totalCost);

// 9. Final state of the cart
console.log("Final state of the shopping cart:", shoppingCart);