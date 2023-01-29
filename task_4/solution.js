// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    let data;
    data  (JSON.parse(json));
    let products ;
    products = data.products;
        return data.products;
   
}

function renderProductsCards(json){   
    clearProducts();
products  (parseProducts(json));
    
for (let i = 0; i < length; i += 1) {
length = products.length;
 addProducts (products[i]);  
 }
 } 


 

 

