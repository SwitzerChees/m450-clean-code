const products = [
  { productId: 1, name: "Laptop", cost: 999 },
  { productId: 2, name: "Smartphone", cost: 599 },
  { productId: 3, name: "Headphones", cost: 199 },
];

function getProductById(id) {
  return products.find((product) => product.productId === id) || null;
}

function addProduct(name, cost) {
  const maxId = Math.max(...products.map((product) => product.productId));
  products.push({ productId: maxId + 1, name, cost });
}

function listProducts() {
  for (const product of products) {
    console.log(`${product.name} costs ${product.cost}€`);
  }
}

// Use functions
const selectedProduct = getProductById(2);
console.log(selectedProduct);
addProduct("Tablet", 399);
listProducts();
