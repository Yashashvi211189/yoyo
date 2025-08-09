import React from 'react';
import styled from 'styled-components';

function Vehicles() {
  const vehicles = [
    {
      name: "Model A",
      speed: "300 km/h",
      range: "650 km",
      img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/7b2f4906-2b8f-4e49-b5b1-84fdf6e69eb9/bvlatuR/std/2880x1800/MS-Performance-Red"
    },
    {
      name: "Model L",
      speed: "280 km/h",
      range: "600 km",
      img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/91e6da02-f8dd-4ee3-9cb8-7bb0dcb0d36d/bvlatuR/std/2880x1800/MS-Performance-Blue"
    },
    {
      name: "Model U",
      speed: "310 km/h",
      range: "700 km",
      img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/18c42c65-560b-4b8a-8aeb-24c0467920f8/bvlatuR/std/2880x1800/MS-Performance-White"
    },
    {
      name: "Model Q",
      speed: "290 km/h",
      range: "620 km",
      img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/bf655d1e-9a9d-4c7b-b6cf-13e0fef3eaf4/bvlatuR/std/2880x1800/MS-Performance-Black"
    },
    {
      name: "Cybertruck",
      speed: "210 km/h",
      range: "800 km",
      img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/2e3762a4-17e7-43e4-bcd7-4bb1a3d4dafa/bvlatuR/std/2880x1800/Cybertruck-Hero-Desktop"
    },
    {
      name: "Roadster",
      speed: "400 km/h",
      range: "1000 km",
      img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/33c1a949-45ff-42d7-91cb-6f5ecb7da75a/bvlatuR/std/2880x1800/roadster-social"
    }
  ];

  return (
    <Wrapper>
      <Title>Our Vehicles</Title>
      <Grid>
        {vehicles.map((car, index) => (
          <Card key={index}>
            <CarImage src={car.img} alt={car.name} />
            <CardContent>
              <h2>{car.name}</h2>
              <p>Top Speed: {car.speed}</p>
              <p>Range: {car.range}</p>
              <OrderButton>Order Now</OrderButton>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default Vehicles;

// Styled Components
const Wrapper = styled.div`
  padding: 40px;
  min-height: 100vh;
  background: linear-gradient(to bottom, #e3e9f0, #f8f9fa);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  font-weight: 700;
  color: #111;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const Card = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

const CarImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
  text-align: center;
`;

const OrderButton = styled.button`
  margin-top: 10px;
  background: black;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;
  &:hover {
    background: #333;
  }
`;
