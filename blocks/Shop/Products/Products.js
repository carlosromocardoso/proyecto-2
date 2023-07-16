import './Products.css';

import cardsTemplate from './CardsTemplate';

const products = (productsList) => {
  const ul = document.querySelector('#cr-products');

  ul.innerHTML = '';

  for (const product of productsList) {
    const li = document.createElement('list');
    li.className = 'cr-card';
    li.innerHTML = cardsTemplate({
        name: product.name,
        seller: product.seller,
        img: product.img,
        price: product.price,
        url: product.url})
        
        ul.appendChild(li);
    }
};

export default products;
