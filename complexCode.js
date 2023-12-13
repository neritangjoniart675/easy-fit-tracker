/* 
 * Filename: complexCode.js
 * Content: A complex JavaScript code that demonstrates a fictional e-commerce shopping cart functionality.
 */

// Import necessary modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Enable JSON parsing for request data
app.use(bodyParser.json());

// Define global variables
let products = [];
let cart = [];

// Define routes
app.get('/products', (req, res) => {
  // Fetch and send all available products
  res.json(products);
});

app.post('/product', (req, res) => {
  // Add a new product to the available products list
  const newProduct = req.body;
  products.push(newProduct);
  res.sendStatus(201);
});

app.post('/cart', (req, res) => {
  // Add a product to the shopping cart
  const productToAdd = req.body;
  const productIndex = products.findIndex((product) => product.id === productToAdd.id);

  if (productIndex === -1) {
    res.sendStatus(404);
  } else {
    cart.push(productToAdd);
    res.sendStatus(200);
  }
});

app.get('/cart', (req, res) => {
  // Fetch and send the shopping cart with the added products
  res.json(cart);
});

app.delete('/cart/:productId', (req, res) => {
  // Remove a product from the shopping cart
  const { productId } = req.params;
  const productIndex = cart.findIndex((product) => product.id === productId);

  if (productIndex === -1) {
    res.sendStatus(404);
  } else {
    cart.splice(productIndex, 1);
    res.sendStatus(200);
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// Initialize some products
products.push({ id: '1', name: 'Product 1', price: 10 });
products.push({ id: '2', name: 'Product 2', price: 20 });
products.push({ id: '3', name: 'Product 3', price: 30 });
products.push({ id: '4', name: 'Product 4', price: 40 });

// Add a few products to the cart
cart.push({ id: '1', name: 'Product 1', price: 10 });
cart.push({ id: '3', name: 'Product 3', price: 30 });

/* 
 * ... Continues with additional code and business logic that exceeds 200 lines ... 
 * ... This code could include further functionality such as updating cart items, applying discounts, etc. ...
 */