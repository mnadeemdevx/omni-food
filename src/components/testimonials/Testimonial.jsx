import React from 'react'
import Testimonials from './Testimonials';
import TestiImg1 from "../../assets/customers/dave.jpg"
import TestiImg2 from "../../assets/customers/ben.jpg"
import TestiImg3 from "../../assets/customers/hannah.jpg"
import TestiImg4 from "../../assets/customers/steve.jpg"

import Gallery1 from "../../assets/gallery/gallery-1.jpg"
import Gallery2 from "../../assets/gallery/gallery-2.jpg"
import Gallery3 from "../../assets/gallery/gallery-3.jpg"
import Gallery4 from "../../assets/gallery/gallery-4.jpg"
import Gallery5 from "../../assets/gallery/gallery-5.jpg"
import Gallery6 from "../../assets/gallery/gallery-6.jpg"
import Gallery7 from "../../assets/gallery/gallery-7.jpg"
import Gallery8 from "../../assets/gallery/gallery-8.jpg"
import Gallery9 from "../../assets/gallery/gallery-9.jpg"
import Gallery10 from "../../assets/gallery/gallery-10.jpg"
import Gallery11 from "../../assets/gallery/gallery-11.jpg"
import Gallery12 from "../../assets/gallery/gallery-12.jpg"



function Testimonial() {
    const testimonialsData = [
        {
          imgSrc: TestiImg1,
          text: 'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
          name: 'Dave Bryson',
        },
        {
          imgSrc: TestiImg2,
          text: 'The AI algorithm is crazy good, it chooses the right meals for me every time. It\'s amazing not to worry about food anymore!',
          name: 'Ben Hadley',
        },
        {
          imgSrc: TestiImg4,
          text: 'Omnifood is a life saver! I just started a company, so there\'s no time for cooking. I couldn\'t live without my daily meals now!',
          name: 'Steve Miller',
        },
        {
          imgSrc: TestiImg3,
          text: 'I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.',
          name: 'Hannah Smith',
        },
      ];
    
      const galleryData = [
        { src: Gallery1, alt: 'Photo of beautifully arranged food' },
        { src: Gallery2, alt: 'Photo of beautifully arranged food' },
        { src: Gallery3, alt: 'Photo of beautifully arranged food' },
        { src: Gallery4, alt: 'Photo of beautifully arranged food' },
        { src: Gallery5, alt: 'Photo of beautifully arranged food' },
        { src: Gallery6, alt: 'Photo of beautifully arranged food' },
        { src: Gallery7, alt: 'Photo of beautifully arranged food' },
        { src: Gallery8, alt: 'Photo of beautifully arranged food' },
        { src: Gallery9, alt: 'Photo of beautifully arranged food' },
        { src: Gallery10, alt: 'Photo of beautifully arranged food' },
        { src: Gallery11, alt: 'Photo of beautifully arranged food' },
        { src: Gallery12, alt: 'Photo of beautifully arranged food' },
      ];
  return (
    <>
      <Testimonials  testimonials={testimonialsData} gallery={galleryData} />
    </>
  )
}

export default Testimonial
