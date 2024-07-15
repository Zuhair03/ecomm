import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Carousel } from 'react-bootstrap';
import "./Home.css";
import CardComponent from "../Component/CardComponents/CardComponents";

function Home() {
    const bestSellerProducts = [
        {
            id: 1,
            name: "Wireless Earbuds",
            category: "Electronics",
            price: 49.99,
            rating: 4.5,
            reviews: 1500,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Wireless+Earbuds"
        },
        {
            id: 2,
            name: "Smartwatch",
            category: "Electronics",
            price: 199.99,
            rating: 4.7,
            reviews: 3500,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Smartwatch"
        },
        {
            id: 3,
            name: "Instant Pot",
            category: "Home & Kitchen",
            price: 89.99,
            rating: 4.8,
            reviews: 5000,
            inStock: false,
            imageUrl: "https://via.placeholder.com/150?text=Instant+Pot"
        },
        {
            id: 4,
            name: "Running Shoes",
            category: "Sports & Outdoors",
            price: 120.00,
            rating: 4.6,
            reviews: 2200,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Running+Shoes"
        },
        {
            id: 5,
            name: "Gaming Laptop",
            category: "Computers",
            price: 1299.99,
            rating: 4.9,
            reviews: 1200,
            inStock: false,
            imageUrl: "https://via.placeholder.com/150?text=Gaming+Laptop"
        },
        {
            id: 6,
            name: "Blender",
            category: "Home & Kitchen",
            price: 59.99,
            rating: 4.3,
            reviews: 800,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Blender"
        },
        {
            id: 7,
            name: "Electric Toothbrush",
            category: "Personal Care",
            price: 39.99,
            rating: 4.4,
            reviews: 1400,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Electric+Toothbrush"
        },
        {
            id: 8,
            name: "Yoga Mat",
            category: "Sports & Outdoors",
            price: 25.99,
            rating: 4.2,
            reviews: 700,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Yoga+Mat"
        },
        {
            id: 9,
            name: "Noise-Cancelling Headphones",
            category: "Electronics",
            price: 299.99,
            rating: 4.7,
            reviews: 2400,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Noise+Cancelling+Headphones"
        },
        {
            id: 10,
            name: "Air Fryer",
            category: "Home & Kitchen",
            price: 99.99,
            rating: 4.5,
            reviews: 3300,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Air+Fryer"
        }
    ];
    const images = [
        "https://via.placeholder.com/600x400?text=Image+1",
        "https://via.placeholder.com/600x400?text=Image+2",
        "https://via.placeholder.com/600x400?text=Image+3",
        "https://via.placeholder.com/600x400?text=Image+4",
        "https://via.placeholder.com/600x400?text=Image+5"
    ];

    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (<>
        <div className='container'>
            <Carousel>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img className="w-100 " src={image} />
                        <Carousel.Caption>
                            <h3>Slide label</h3>
                            <p>Some description for slide</p>
                        </Carousel.Caption>

                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
        <div className="container" style={{ backgroundColor: '#e7e7e7' }}>
            <div>
                <div className="mt-4 position-relative p-3">
                    <Slider {...settings}>
                        {bestSellerProducts.map((product, index) => (
                            <CardComponent productData={product} key={index} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    </>

    );
}

export default Home;
