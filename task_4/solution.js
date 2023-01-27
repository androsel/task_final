// Задание 4.1. Вывод карточек товаров

function parseProducts(JSON) {
    let data = JSON.parse(JSON);
    let products = data.products;
        return products;
   
}

function renderProductsCards(JSON){   
    clearProducts();
   renderProductsCards (products);  
 products = parseProducts(JSON);
  
  
for (let i = 0; i < length; i += 1) {
  length = products.length;
    addproducts (products[i]);  
 }
 } 


 

 

