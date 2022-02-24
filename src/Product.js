import React from 'react';

function Product ({label, afbeelding, naam, prijs}) {
    return (
        <article>
        <span>{label}</span>
        <img src={afbeelding} alt={naam}/>
        <p>{naam}</p>
        <h4>{prijs}</h4>
        </article>
    );
}

export default Product;