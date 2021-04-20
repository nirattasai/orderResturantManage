import React from 'react'
import '../css/style.css'
import Header from '../components/header'
import Footer from '../components/footer'
import '../css/homePage.css'
import { db } from "./../firebase"
import { useState,useEffect } from 'react'
import $ from "jquery";


const Home =()=> {
    var slideIndex = 1;
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        console.log(document.readyState)
        if( document.readyState == 'complete' ) {
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
        } else {
            document.addEventListener('DOMContentLoaded', function () {
                showSlides(slideIndex)
            });
        }
    }

    const [newList, setNewList] = useState({
        new: []
    })

    const downloadNew = async() => {
        db.ref(`/new`).on('value', async snapshot => {
            const data = await snapshot.val()
            if (data) {
                setNewList({
                    new: Object.keys(data),
                    data: data
                })
            }
        })
    }
    useEffect(() => {
        downloadNew()
    }, db.ref(`/new`))

    return (
        <div class='bgOrder' onLoad={()=>showSlides(slideIndex)}>
            <Header/>
            <div class="center-box-container" >
                <div class="slideshow-container">
                    {newList.new.map((key,index) => {
                        return(
                            <div class="slides fade" >
                                <img src={newList.data[key].img} class='news-img'/>
                            </div>
                        )
                    }
                    )}

                    <a class="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                    <a class="next" onClick={() => plusSlides(1)}>&#10095;</a>
                    
                </div>
                <br/>

                <div class='dot-area'>
                    <span class="dot" onClick={() => currentSlide(1)}></span>
                    <span class="dot" onClick={() => currentSlide(2)}></span>
                    <span class="dot" onClick={() => currentSlide(3)}></span>
                </div>

                <button type="submit" onClick={() =>window.location.href = '/menu'}>Get started</button>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;