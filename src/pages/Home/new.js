// import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import './Home.css';
// import { Button, Row } from 'react-bootstrap';
// import CardComponent from "../Component/CardComponents/CardComponents";

// const Home = () => {
//     const navigate = useNavigate();
// const bestSellerRef = useRef(null);
//     const topSellerRef = useRef(null);

//     const bestSellerProducts = [
//         {
//             id: 1,
//             name: "Wireless Earbuds",
//             category: "Electronics",
//             price: 49.99,
//             rating: 4.5,
//             reviews: 1500,
//             inStock: true,
//             imageUrl: "https://via.placeholder.com/150?text=Wireless+Earbuds"
//         },
//         {
//             id: 2,
//             name: "Smartwatch",
//             category: "Electronics",
//             price: 199.99,
//             rating: 4.7,
//             reviews: 3500,
//             inStock: true,
//             imageUrl: "https://via.placeholder.com/150?text=Smartwatch"
//         },
//         {
//             id: 3,
//             name: "Instant Pot",
//             category: "Home & Kitchen",
//             price: 89.99,
//             rating: 4.8,
//             reviews: 5000,
//             inStock: false,
//             imageUrl: "https://via.placeholder.com/150?text=Instant+Pot"
//         },
//         {
//             id: 4,
//             name: "Running Shoes",
//             category: "Sports & Outdoors",
//             price: 120.00,
//             rating: 4.6,
//             reviews: 2200,
//             inStock: true,
//             imageUrl: "https://via.placeholder.com/150?text=Running+Shoes"
//         },
//         {
//             id: 5,
//             name: "Gaming Laptop",
//             category: "Computers",
//             price: 1299.99,
//             rating: 4.9,
//             reviews: 1200,
//             inStock: false,
//             imageUrl: "https://via.placeholder.com/150?text=Gaming+Laptop"
//         },
//         {
//             id: 6,
//             name: "Blender",
//             category: "Home & Kitchen",
//             price: 59.99,
//             rating: 4.3,
//             reviews: 800,
//             inStock: true,
//             imageUrl: "https://via.placeholder.com/150?text=Blender"
//         },
//         {
//             id: 7,
//             name: "Electric Toothbrush",
//             category: "Personal Care",
//             price: 39.99,
//             rating: 4.4,
//             reviews: 1400,
//             inStock: true,
//             imageUrl: "https://via.placeholder.com/150?text=Electric+Toothbrush"
//         },
//         {
//             id: 8,
//             name: "Yoga Mat",
//             category: "Sports & Outdoors",
//             price: 25.99,
//             rating: 4.2,
//             reviews: 700,
//             inStock: true,
//             imageUrl: "https://via.placeholder.com/150?text=Yoga+Mat"
//         },
//         {
//             id: 9,
//             name: "Noise-Cancelling Headphones",
//             category: "Electronics",
//             price: 299.99,
//             rating: 4.7,
//             reviews: 2400,
//             inStock: true,
//             imageUrl: "https://via.placeholder.com/150?text=Noise+Cancelling+Headphones"
//         },
//         {
//             id: 10,
//             name: "Air Fryer",
//             category: "Home & Kitchen",
//             price: 99.99,
//             rating: 4.5,
//             reviews: 3300,
//             inStock: true,
//             imageUrl: "https://via.placeholder.com/150?text=Air+Fryer"
//         }
//     ];

//     const topRatedProducts = [
//         {
//             id: 1,
//             name: "4K OLED TV",
//             category: "Electronics",
//             price: 1499.99,
//             rating: 4.9,
//             reviews: 1800,
//             inStock: true,
//             imageUrl: "https://via.placeholder.com/150?text=4K+OLED+TV"
//         },
//         {
//             id: 2,
//             name: "Professional Camera",
//             category: "Electronics",
//             price: 1999.99,
//             rating: 4.8,
//             reviews: 2500,
//             inStock: true,
//             imageUrl: "https://via.placeholder.com/150?text=Professional+Camera"
//         },
//         {
//             id: 3,
//             name: "Memory Foam Mattress",
//             category: "Home & Furniture",
//             price: 899.99,
//             rating: 4.7,
//             reviews: 3000,
//             inStock: true,
//             imageUrl: "https://via.placeholder.com/150?text=Memory+Foam+Mattress"
//         },
//         {
//             id: 4,
//             name: "Electric Scooter",
//             category: "Sports & Outdoors",
//             price: 499.99,
//             rating: 4.7,
//             reviews: 2000,
//             inStock: true,
//             imageUrl: "https://via.placeholder.com/150?text=Electric+Scooter"
//         },
//         {
//             id: 5,
//             name: "Smart Refrigerator",
//             category: "Appliances",
//             price: 2499.99,
//             rating: 4.6,
//             reviews: 1500,
//             inStock: true,
//             imageUrl: "https://via.placeholder.com/150?text=Smart+Refrigerator"
//         },
//         {
//             id: 6,
//             name: "Wireless Gaming Mouse",
//             category: "Computers",
//             price: 79.99,
//             rating: 4.6,
//             reviews: 1800,
//             inStock: true,
//             imageUrl: "https://via.placeholder.com/150?text=Wireless+Gaming+Mouse"
//         },
//         {
//             id: 7,
//             name: "Noise-Cancelling Earbuds",
//             category: "Electronics",
//             price: 199.99,
//             rating: 4.5,
//             reviews: 2200,
//             inStock: true,
//             imageUrl: "https://via.placeholder.com/150?text=Noise-Cancelling+Earbuds"
//         },
//         {
//             id: 8,
//             name: "Robot Vacuum Cleaner",
//             category: "Home & Kitchen",
//             price: 349.99,
//             rating: 4.5,
//             reviews: 2500,
//             inStock: true,
//             imageUrl: "https://via.placeholder.com/150?text=Robot+Vacuum+Cleaner"
//         },
//         {
//             id: 9,
//             name: "Portable Power Bank",
//             category: "Electronics",
//             price: 39.99,
//             rating: 4.4,
//             reviews: 3000,
//             inStock: true,
//             imageUrl: "https://via.placeholder.com/150?text=Portable+Power+Bank"
//         },
//         {
//             id: 10,
//             name: "Fitness Tracker Watch",
//             category: "Fitness",
//             price: 129.99,
//             rating: 4.4,
//             reviews: 2800,
//             inStock: true,
//             imageUrl: "https://via.placeholder.com/150?text=Fitness+Tracker+Watch"
//         }
//     ];


//     const scrollLeft = (data) => {
//         console.log(data);
//         if (data === "bestSeller") {
//             bestSellerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
//         } else if (data === "topSeller") {
//             topSellerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
//         } else { }
//     };

//     const scrollRight = (data) => {
//         console.log(data);
//         if (data === "bestSeller") {
//             bestSellerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//         } else {
//             topSellerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//         }

//     };


//     const handleNavigation = () => {
//         console.log("Navigating to About");
//         navigate("/about");
//     };


//     console.log("bestSellerProducts", bestSellerProducts)
//     return (
//         <React.Fragment>
//             <div className="container" style={{ backgroundColor: '#e7e7e7' }}>
// <div>
//     <div style={{}}>
//         <h3>Best Seller</h3>
//         <div className="container mt-4 position-relative">
//             <Button variant="primary" className="prev-button" onClick={() => scrollLeft('bestSeller')}>&lt;</Button>
//             <div className="scroll-container" ref={bestSellerRef}>
// <Row className="flex-nowrap">
//     {bestSellerProducts.map((product, index) => (
//         <CardComponent productData={product} key={index} />
//     ))}
// </Row>
//             </div>
//             <Button variant="primary" className="next-button" onClick={() => scrollRight('bestSeller')}>&gt;</Button>
//         </div>
//     </div>

//                     <div style={{}}>
//                         <h3>Top rated</h3>
//                         <div className="container mt-4 position-relative">
// <Button variant="primary" className="prev-button" onClick={() => scrollLeft('topSeller')}>&lt;</Button>
// <div className="scroll-container" ref={topSellerRef}>
//     <Row className="flex-nowrap">
//         {topRatedProducts.map((product, index) => (
//             <CardComponent productData={product} key={index} />
//         ))}
//     </Row>
// </div>
// <Button variant="primary" className="next-button" onClick={() => scrollRight('topSeller')}>&gt;</Button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// };

// export default Home;
