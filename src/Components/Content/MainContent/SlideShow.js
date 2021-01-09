import React from 'react';
import './SlideShow.css';

let slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

export default function SlideShow() {
    const handleChange = e =>
    {
      const n = Number(e.target.alt);
      currentSlide(n);
    }

    const handleArrow = e =>
    {
      e.target.className === 'prev' ? plusSlides(-1) : plusSlides(1); 
    }
    
    React.useEffect(() => {
    showSlides(slideIndex);
    },[])


    return (
        <div className="container">
        <div className="mySlides">
          <div className="numbertext">1 / 4</div>
            <img src="https://thumblr.uniid.it/banner/9543/73629b42ec8c.jpg" style={{width:"100%"}}></img>
        </div>
      
        <div className="mySlides">
          <div className="numbertext">2 / 4</div>
            <img src="https://thumblr.uniid.it/banner/9489/3006cb2e190e.jpg" style={{width:"100%"}}></img>
        </div>
      
        <div className="mySlides">
          <div className="numbertext">3 / 4</div>
            <img src="https://thumblr.uniid.it/banner/9511/d8e4646cf6ff.jpg" style={{width:"100%"}}></img>
        </div>
      
        <div className="mySlides">
          <div className="numbertext">4 / 4</div>
            <img src="https://thumblr.uniid.it/banner/9525/a4b827f57241.jpg" style={{width:"100%"}}></img>
        </div>
        
        <a className="prev" onClick={handleArrow}>&#10094;</a>
        <a className="next" onClick={handleArrow}>&#10095;</a>
      
        <div className="row">
          <div className="column">
            <img className="demo cursor" src="https://thumblr.uniid.it/banner/9543/73629b42ec8c.jpg" style={{width:"100%"}} onClick={handleChange} alt="1"></img>
          </div>
          <div className="column">
            <img className="demo cursor" src="https://thumblr.uniid.it/banner/9489/3006cb2e190e.jpg" style={{width:"100%"}} onClick={handleChange} alt="2"></img>
          </div>
          <div className="column">
            <img className="demo cursor" src="https://thumblr.uniid.it/banner/9511/d8e4646cf6ff.jpg" style={{width:"100%"}} onClick={handleChange} alt="3"></img>
          </div>
          <div className="column">
            <img className="demo cursor" src="https://thumblr.uniid.it/banner/9525/a4b827f57241.jpg" style={{width:"100%"}} onClick={handleChange} alt="4"></img>
          </div>
        </div>
      </div>
    )
}
