import React from 'react';
import cola from '../images/cocacola1.png';
import cola1 from '../images/cocacolacan.png';
import cola2 from '../images/cocacolalight.png';
import cola3 from '../images/cocacolalightcan.png';
import fanta from '../images/fanta.png';
import fanta2 from '../images/fantacan.png';
import sprite from '../images/sprite.png';
import sprite2 from '../images/spritecan.png';
import mezzomix from '../images/mezzomix.png';
import goldengeale from '../images/goldeneagle.png';
import redbull from '../images/redbull.png';
import strumka from '../images/strumka.png';
import './products.css';
const objects = [
  {
    id: 1,
    type: 'drink',
    name: 'Coca Cola 0,5',
    image: cola,
    price: '',
  },
  {
    id: 2,
    type: 'drink',
    name: 'Coca Coal Dose',
    image: cola1,
    price: '',

  },
  {
    id: 3,
    type: 'drink',
    name: 'Coca Cola Light 0,5',
    image: cola2,
    price: '',
  },
  {
    id: 4,
    type: 'drink',
    name: 'Coca  Cola Light Dose',
    image: cola3,
    price: '',
  },
  {
    id: 5,
    type: 'drink',
    name: 'Fanta 0,5',
    image: fanta,
    price: '',
  },
  {
    id: 6,
    type: 'drink',
    name: 'Fanta Dose',
    image: fanta2,
    price: '',
  },
  {
    id: 7,
    type: 'drink',
    name: 'Sprite 0,5',
    image: sprite,
    price: '',
  },
  {
    id: 8,
    type: 'drink',
    name: 'Sprite Dose',
    image: sprite2,
    price: '',
  },
  {
    id: 9,
    type: 'drink',
    name: 'Mezzomix',
    image: mezzomix,
    price: '',
  },
  {
    id: 10,
    type: 'drink',
    name: 'Golden Eagle',
    image: goldengeale,
    price: '',
  },
  {
    id: 11,
    type: 'drink',
    name: 'RedBull',
    image: redbull,
    price: '',
  },
  {
    id: 12,
    type: 'drink',
    name: 'Strumka',
    image: strumka,
    price: '',
  },
];

function ObjectList({ objects }) {
  return (
    <div className='griddiv'>
    <div className='productdiv'>
      {objects.map((obj) => (
        <div key={obj.id}  className='product'>
          <img style={{height: "300px", width: "200px"}} src={obj.image} alt={obj.name} />
          <div>
            <h4>{obj.name}</h4>
            <p>{obj.price} €</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

function Products() {
  return (
    <div>
      <ObjectList objects={objects} />
    </div>
  );
}

export default Products;



