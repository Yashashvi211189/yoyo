import React from 'react';
import styled from 'styled-components';

function Discover() {
  const articles = [
    {
      icon: "🚀",
      title: "Tesla’s Latest Speed Upgrade",
      desc: "Discover how the new software update pushes your Tesla to the next level."
    },
    {
      icon: "🔋",
      title: "Battery Life Extended",
      desc: "Learn about the latest battery technology offering up to 20% more range."
    },
    {
      icon: "🌍",
      title: "Eco-Friendly Production",
      desc: "See how Tesla is reducing its carbon footprint in manufacturing."
    },
    {
      icon: "📱",
      title: "App Update Brings New Controls",
      desc: "Remote start, climate control, and charging now with a better interface."
    },
    {
      icon: "🤖",
      title: "Autopilot 2.0",
      desc: "New AI features improve safety and performance."
    }
  ];

  return (
    <Wrapper>
      <Title>Discover Page</Title>
      <Subtitle>Explore new and exciting features and updates.</Subtitle>
      <List>
        {articles.map((article, i) => (
          <Card key={i}>
            <Icon>{article.icon}</Icon>
            <Content>
              <h3>{article.title}</h3>
              <p>{article.desc}</p>
            </Content>
          </Card>
        ))}
      </List>
    </Wrapper>
  );
}

export default Discover;

// Styled Components
const Wrapper = styled.div`
  padding: 40px;
  min-height: 100vh;
  background: linear-gradient(to bottom, #f7f8fa, #ffffff);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #111;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 30px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled.div`
  display: flex;
  align-items: flex-start;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  margin-right: 15px;
`;

const Content = styled.div`
  h3 {
    font-size: 1.2rem;
    margin: 0 0 5px;
  }
  p {
    font-size: 0.95rem;
    color: #555;
  }
`;
