export const filterTemplate = `
<div class="cr__filter__title"> 
  <h2>Filtros</h2>
</div>
<div class="cr__filter__brand">
  <h3>Marcas</h3>
<div class="cr__filter__brand--img"></div>
</div>
<div class="cr__filter__price"><h3>Precio</h3></div>
<div class="cr__filter__remove">
<button class="cr__filter__remove--button">Borrar filtros</button>`;

export const sellerTemplate = (seller) =>
  `<button type="button" class="cr__filter__brand--button" id="${seller.seller}__button">
    <img class="image__seller" src=${seller.sellerImg} alt="Logo de la marca"/>
</button>`;

export const priceTemplate = (price) => `<input
type="number"
name="priceNumber"
id="priceNumber"
class="cr__filter__price--input"
/>
<button class="cr__filter__search--button">
<img src="https://res.cloudinary.com/dqip8uhet/image/upload/v1689456510/magnifier_dxsalt.png" alt="search" />
</button>
`;

export default filterTemplate