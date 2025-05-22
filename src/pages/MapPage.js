import React from 'react';
import "./MapPage.css";
import Footer from './Footer';
const MapPage = () => {
  return (
<div className='menubody'>
  <div className='structurediv'>
    <div className="maindiv">
      <div className="map">
        <iframe
          title="Restaurant Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d334.91169702722937!2d7.561514180438518!3d47.81452811022475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791a10061ce4af7%3A0xd2add527881bdc1!2sEuropa%20Baeckerei%20und%20Grill!5e0!3m2!1sen!2s!4v1747750954734!5m2!1sen!2s" 
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div className='locationtext'>
      <h1>Location</h1>
      <h3>Europa Baeckerei und Grill</h3>
      <p>Address: Rathauspl. 4, 79395 Neuenburg am Rhein, Germany</p>
      <p>Phone: (+383) 49 893 636</p>
      <p>Email:</p>
    </div>
  </div>
  <Footer />
</div>
  );
};

export default MapPage