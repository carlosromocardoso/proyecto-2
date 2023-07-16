import './Filter.css'

import data from '../../../src/data/data';
import {
  filterTemplate,
  sellerTemplate,
  priceTemplate,
} from './FilterTemplate.js';
import products from '../Products/Products';

const filterSection = document.querySelector('#cr-filter');
const filterContainer = document.createElement('div');
filterContainer.className = 'cr__section__filter';
filterSection.appendChild(filterContainer);
filterContainer.innerHTML += filterTemplate;

let filteredData = [];

const resetPrice = () => {
  inputElement.value = '';
};

const filter = () => {
  products(data);
};

const filterFunction = (seller, info) => {
  return info.filter((item) => item.seller === seller);
};

const sellerFilters = (list) => {
  const sellerImgContainer = document.querySelector('.cr__filter__brand--img');
  const sellersCounter = [];
  for (const details of list) {
    if (!sellersCounter.includes(details.seller)) {
      sellerImgContainer.innerHTML += sellerTemplate({
        seller: details.seller,
        sellerImg: details.sellerImg
      });
      sellersCounter.push(details.seller);
    }
  }
};
sellerFilters(data);

// Seleccionamos los botones de los sellers
// Sería interesante saber interpolar nombres de variables para hacer automático los siguientes pasos
const newBalanceButton = document.querySelector('#NewBalance__button');
const brooksButton = document.querySelector('#Brooks__button');
const nikeButton = document.querySelector('#Nike__button');
const adidasButton = document.querySelector('#Adidas__button');

newBalanceButton.addEventListener('click', () => {
  filteredData = filterFunction('NewBalance', data);
  products(filteredData);
});

brooksButton.addEventListener('click', () => {
  filteredData = filterFunction('Brooks', data);
  products(filteredData);
});

nikeButton.addEventListener('click', () => {
  filteredData = filterFunction('Nike', data);
  products(filteredData);
});

adidasButton.addEventListener('click', () => {
  filteredData = filterFunction('Adidas', data);
  products(filteredData);
});

let price = '';

const filterPriceFunction = (price, info) => {
    return info.filter((item) => item.price <= price);
  };

const priceContainer = document.querySelector('.cr__filter__price');
priceContainer.innerHTML += priceTemplate()

const searchButton = document.querySelector('.cr__filter__search--button')

const onButtonClicked = () => {
  filteredData = filterPriceFunction(price, data);
  products(filteredData); 
}

const onInputChanged = (event) => {
  price = event.target.value
}

searchButton.addEventListener('click', onButtonClicked)

const inputElement = document.querySelector('.cr__filter__price--input')
inputElement.addEventListener('input', onInputChanged)


// ⭐ Botón remove
// Seleccionamos el botón para eliminar todos los filtros
const removeButton = document.querySelector('.cr__filter__remove--button');
removeButton.addEventListener('click', () => {
  // Al hacer mención al filter reiniciamos los productos
  filter();
  resetPrice()
});


export default filter;
