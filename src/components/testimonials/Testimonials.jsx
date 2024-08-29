import React from 'react'
import "./Testimonials.css"


function Testimonials({ testimonials, gallery }) {
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="testimonials-container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">Once you try it, you can't go back</h2>

        <div className="testimonials">
          {testimonials.map((item, index) => (
            <figure className="testimonial" key={index}>
              <img
                className="testimonial-img"
                alt={`Photo of customer ${item.name}`} 
                src={item.imgSrc}
              />
              <blockquote className="testimonial-text">
                {item.text}
              </blockquote>
              <p className="testimonial-name">&mdash; {item.name}</p>
            </figure>
          ))}
        </div>
      </div>

      <div className="gallery">
        {gallery.map((image, index) => (
          <figure className="gallery-item" key={index}>
            <img src={image.src} alt={image.alt} />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
