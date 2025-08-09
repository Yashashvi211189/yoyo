import React from 'react';
import styled, { keyframes } from 'styled-components';
import { db } from './firebaseConfig'; // Firebase config file
import { collection, addDoc } from 'firebase/firestore';

function Shop() {
  const products = [
    { name: 'Model A', desc: 'Fast, sleek, and slightly overconfident.', price: '₹25,00,000' },
    { name: 'Model L', desc: 'Luxury on wheels. Comes with bragging rights.', price: '₹40,00,000' },
    { name: 'Model U', desc: 'Unstoppable power. Your neighbors will notice.', price: '₹55,00,000' },
    { name: 'Model Q', desc: 'Quirky yet elegant. Be different.', price: '₹30,00,000' }
  ];

  // Handle Buy Now click
  const handleBuy = async (car) => {
    try {
      await addDoc(collection(db, "orders"), {
        name: car.name,
        description: car.desc,
        price: car.price,
        date: new Date().toISOString()
      });
      alert(`✅ Order placed for ${car.name}!`);
    } catch (error) {
      console.error("❌ Error saving order: ", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Wrapper>
      <Title>🚗 Welcome to the Tesla Shop 🚗</Title>
      <SubTitle>Buy it if you love it — no bargaining, only blessings 😄</SubTitle>
      <ProductGrid>
        {products.map((car, index) => (
          <ProductCard key={index}>
            <h2>{car.name}</h2>
            <p>{car.desc}</p>
            <Price>{car.price}</Price>
            <BuyButton onClick={() => handleBuy(car)}>Buy Now</BuyButton>
          </ProductCard>
        ))}
      </ProductGrid>
    </Wrapper>
  );
}

export default Shop;

// 🎨 Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// 🌅 Page Wrapper
const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ffecd2, #fcb69f);
  padding: 60px 20px;
  text-align: center;
  color: #222;
`;

// 🏷 Title
const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  animation: ${fadeIn} 1s ease;
`;

const SubTitle = styled.h3`
  margin-top: 10px;
  font-weight: normal;
  color: #444;
  animation: ${fadeIn} 1.5s ease;
`;

// 📦 Product Grid
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

// 🏎 Product Card
const ProductCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  animation: ${fadeIn} 1.2s ease;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  }

  h2 {
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    color: #555;
  }
`;

// 💰 Price Tag
const Price = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 10px;
  color: #d35400;
`;

// 🛒 Button
const BuyButton = styled.button`
  margin-top: 15px;
  padding: 10px 15px;
  background: linear-gradient(90deg, #ff6f61, #ff9068);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #ff9068, #ff6f61);
    transform: scale(1.05);
  }
`;
