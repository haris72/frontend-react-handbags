import React from 'react';

function Tile ({afbeelding, titel, children}) {
    return (
        <section>
            <h2>{titel}</h2>
            {children}
            <img src={afbeelding}/>
        </section>
    );
}

export default Tile;


