// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    let data = JSON.parse(json);
    let products = data.products;
        return products;
   
}

function renderProductsCards(json){   
    clearProducts();
   renderProductsCards (products);  
 products = parseProducts(json);
  
  
for (let i = 0; i < length; i += 1) {
  length = products.length;
    addProducts (products[i]);  
 }
 } 


 

 

