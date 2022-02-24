import React from 'react';
import './App.css';
import {logDOM} from "@testing-library/react";
import Button from './Button';
import Product from './Product';
import Tile from './Tile';
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';

function App() {

  return (
      <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button
          text="to the collection"
          title="to the collection"
        />
        <Button
          text="shop all bags"
          title="shop all bags"
          />
        <Button
          title="pre-orders"
          disabled={true}
          />
      </nav>
      <main>
          <Product
              label="Best seller"
              afbeelding={bag_1}
              naam="The handy bag"
              prijs="€400,-"
              />
          <Product
              label="Best seller"
              afbeelding={bag_2}
              naam="The stylish bag"
              prijs="€250,-"
              />
          <Product
              label="New collection"
              afbeelding={bag_3}
              naam="The simple bag"
              prijs="€300,-"
              />
          <Product
              label="New collection"
              afbeelding={bag_4}
              naam="The trandy bag"
              prijs="€150,-"
              />
          </main>
      <footer>
        <Tile
            titel="THE BRAND">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim tortor at auctor urna nunc id cursus. Tempus imperdiet nulla malesuada pellentesque elit eget.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim tortor at auctor urna nunc id cursus. Tempus imperdiet nulla malesuada pellentesque elit eget.</p>
        </Tile>
        <Tile
        afbeelding={brand}
        />
        <Tile
        afbeelding={our_story}
        />
        <Tile
            titel="OUR STORY">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim tortor at auctor urna nunc id cursus. Tempus imperdiet nulla malesuada pellentesque elit eget.</p>
        </Tile>
      </footer>

      </>
  );
}

export default App;



