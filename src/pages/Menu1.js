import React from 'react'
import './Menu1.css'
import { Link } from 'react-router-dom';
import image1 from '../images/menudisplay1.PNG';
import image2 from '../images/menudisplay2.webp';
import image3 from '../images/menudisplay3.PNG';
const Menu1 = () => {
  return (
    <div>
 <div className='menutext1'>
    <h1>ON THE MENU</h1>
    <h3>DRINKS</h3>
    </div>
    <div className='imagemenu1'>
       <Link to=""> <img src={image1} className='image1' /></Link>
        <img src={image2} className='image2' />
        <img src={image3} className='image3' />
    </div>
    </div>
   
    

  )
}

export default Menu1