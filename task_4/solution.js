// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    let data = JSON.parse(json);// Аргументом функции является JSON
    let products = data.products;
    return products;
    // Преобразуйте строку json, переданную как аргумент функции,
    // в объект с помощью функции JSON.parse(json)
    // и запишите в переменную data
    // Верните как результат функции свойство products объекта data
}

function renderProductsCards(json){   
    clearProducts();
let products = renderProductsCards;
products = parseProducts(json);
 
for (let i = 0; i < length; i += 1) {
    let length = products.length;
    addproducts (products[i]);  
 }
 } 


 

 

