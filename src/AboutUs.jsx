import React, { useEffect } from 'react';
import './AboutUs.css';
import { useDispatch } from 'react-redux';
import { addItem } from './CreateSlice';

function AboutUs() {
  
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">About Us</h1> */}
      <p className="about-us-description">Welcome to Bloom & Grow, Where Nature Thrives and Beauty Flourishes</p>
      <p className="about-us-content">
      At Bloom & Grow, we take pride in offering a diverse selection of lush, thriving plants—ranging from resilient succulents and elegant orchids to robust trees and vibrant flowering varieties. Each plant is carefully chosen to ensure it thrives in your unique environment. Our easy-to-navigate website provides comprehensive care guides, gardening tips, and expert advice to help your plants flourish.
      </p>
      {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      <p className="about-us-content">
      Whether you're a seasoned gardener or just beginning your green journey, Bloom & Grow is here to support you. Explore our curated collection, ask questions, and let us assist you in finding the perfect plant for your home or office.
      </p>
      {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}

      <p className="about-us-content">
      Join us in our mission to cultivate a greener, more vibrant world. Visit Bloom & Grow today and bring the beauty of nature right to your doorstep.
      </p>
    </div>
  );
}

export default AboutUs;