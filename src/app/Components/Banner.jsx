'use client'
import Image from "next/image";
import { useEffect, useState } from 'react';
import './Slider.css';

const Banner = () => {
    // Image data
    const images = [
        { path: "/images/banner-image-1.jpg", alt: "Silver Ball Fountains" },
        { path: "/images/banner-image-2.jpg", alt: "Winter Gardens Roof External" },
        { path: "/images/banner-image-3.jpg", alt: "Winter Gardens Roof Internal" },
        { path: "/images/banner-image-4.jpg", alt: "Crucible Theatre" },
        { path: "/images/banner-image-5.jpg", alt: "Now Then Graffiti" },
        { path: "/images/banner-image-6.jpg", alt: "Winter Gardens Palm Trees" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to a specific slide
    const showSlide = (index) => {
        setCurrentIndex(index);
    };

    // Functions for navigation
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <div className="banner-slider">
            {/* Slides */}
            <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <Image key={index} src={image.path} alt={image.alt} className="slide" width="1200" height="300" />
                ))}
            </div>

            {/* Navigation Buttons */}
            <button className="prev-btn" onClick={prevSlide}>Previous</button>
            <button className="next-btn" onClick={nextSlide}>Next</button>

            {/* Dots */}
            <div className="dots-container">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => showSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;
