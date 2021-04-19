import React from 'react'
import '../css/style.css'
import TheHeader from '../components/TheHeader'
import '../css/homePage.css'
import news1 from '../image/news1.jpg'
import news2 from '../image/news2.jpg'
import news3 from '../image/news3.jpg'


const Home =()=> {
    var slideIndex = 1;
    function startSlide(){
        window.onload = function afterPageLoad(){
            showSlides(slideIndex)
        }
    }
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slides");
        var dots = document.getElementsByClassName("dot");
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

    return (
        <div class='bgOrder' onLoad={startSlide()}>
            <TheHeader/>
            <div class="center-box-container" >
                <div class="slideshow-container">
                    <div class="slides fade" >
                        <div class="numbertext">1 / 3</div>
                        <img src={news1} class='news-img'/>
                    </div>
                    <div class="slides fade">
                        <div class="numbertext">2 / 3</div>
                        <img src={news2} class='news-img' />
                    </div>

                    <div class="slides fade">
                        <div class="numbertext">3 / 3</div>
                        <img src={news3} class='news-img'/>
                    </div>

                    <a class="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                    <a class="next" onClick={() => plusSlides(1)}>&#10095;</a>
                </div>
                <br/>

                <div class='dot-area'>
                    <span class="dot" onClick={() => currentSlide(1)}></span>
                    <span class="dot" onClick={() => currentSlide(2)}></span>
                    <span class="dot" onClick={() => currentSlide(3)}></span>
                </div>
            </div>
            <div class='bottom-box'>
                
            </div>
        </div>
    );
}

export default Home;