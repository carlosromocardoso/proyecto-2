const cardsTemplate = (card) => `
<article class="cr-card">
    <figure>
        <img src="${card.img}" alt="${card.name}">
    </figure>
    <section class="cr-card-details">
        <div class="cr-card-min-details">
        <h1>${card.seller}<span>${card.name}</span></h1>
        <h1 class="cr-card-min-details__price">${card.price} €</h1>
        </div>
        <a href="${card.url}" class="cr-card-details-btn" target="_blank" rel="noopener">Comprar</a>
    </section>
    </article>
`;

export default cardsTemplate;