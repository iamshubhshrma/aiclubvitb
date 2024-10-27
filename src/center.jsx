
import Slider from 'react-slick';
import { Paper, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCard from './imagecard';
import React, { useState } from 'react';

const items = [
    { src: "./events/1.png", heading: "AI club", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae, odit necessitatibus voluptas, libero dolor sunt ipsam tempore, reiciendis vel illo minus? Ullam, eius repellat?" },
    { src: "./events/2.png", heading: "AI club", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae, odit necessitatibus voluptas, libero dolor sunt ipsam tempore, reiciendis vel illo minus? Ullam, eius repellat?" },
    { src: "./events/4.png", heading: "AI club", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae, odit necessitatibus voluptas, libero dolor sunt ipsam tempore, reiciendis vel illo minus? Ullam, eius repellat?" },
    { src: "./events/5.png", heading: "AI club", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae, odit necessitatibus voluptas, libero dolor sunt ipsam tempore, reiciendis vel illo minus? Ullam, eius repellat?" },
    { src: "./events/8.png", heading: "AI club", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae, odit necessitatibus voluptas, libero dolor sunt ipsam tempore, reiciendis vel illo minus? Ullam, eius repellat?" }
];

export default function EnlargedCenterCarousel() {
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: '40px',
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2500, // Change slides every 3000ms (3 seconds)
        pauseOnHover: true, // Pause on hover
        slidesToShow: 3,
        focusOnSelect: true,
        speed: 500,
        afterChange: (index) => setCenterIndex(index),
    };

    const [centerIndex, setCenterIndex] = useState(0);

    return (
        <Slider {...settings}>
            {items.map((item, index) => (
                <ImageCard
                    key={index}
                    src={item.src}
                    heading={item.heading}
                    text={item.text}
                    isCenter={index === centerIndex} // Pass true for the center card
                />
            ))}
        </Slider>
    );
}
