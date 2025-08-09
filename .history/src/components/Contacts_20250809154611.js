import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Contacts = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    num: '',
    password: ''
  });

  const [show, setShow] = useState(false);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const Details = () => {
    return (
      <DetailsContainer>
        <h1>✨ Your Details ✨</h1>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.num}</p>
        <p><strong>Password:</strong> {user.password}</p>
      </DetailsContainer>
    );
  };

  return (
    <Wrapper>
      <FormBox>
        <h1>🚀 Sign Up Form 🚀</h1>
        <h4>Enter your details below:</h4>
        <InputField>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputs}
            placeholder="Name"
          />
        </InputField>
        <InputField>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputs}
            placeholder="Email"
          />
        </InputField>
        <InputField>
          <input
            type="tel"
            name="num"
            value={user.num}
            onChange={handleInputs}
            placeholder="Phone Number"
          />
        </InputField>
        <InputField>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputs}
            placeholder="Password"
          />
        </InputField>
        <SubmitButton
          onClick={(e) => {
            e.preventDefault();
            setShow(true);
          }}
        >
          Submit 🚀
        </SubmitButton>
      </FormBox>
      {show && <Details />}
    </Wrapper>
  );
};

export default Contacts;

// Animations
const glow = keyframes`
  0% { box-shadow: 0 0 5px #ff00ff, 0 0 10px #00ffff; }
  50% { box-shadow: 0 0 20px #ff00ff, 0 0 30px #00ffff; }
  100% { box-shadow: 0 0 5px #ff00ff, 0 0 10px #00ffff; }
`;

// Styled Components
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e1e2f, #3a0ca3, #7209b7);
  background-size: 400% 400%;
  animation: backgroundShift 15s ease infinite;
  color: white;

  @keyframes backgroundShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const FormBox = styled.div`
  backdrop-filter: blur(15px);
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  width: 350px;
  text-align: center;
`;

const InputField = styled.div`
  margin: 15px 0;

  input {
    width: 90%;
    padding: 12px;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    transition: all 0.3s ease;

    &:focus {
      background: rgba(255, 255, 255, 0.3);
      animation: ${glow} 1.5s infinite alternate;
    }

    &::placeholder {
      color: #ddd;
    }
  }
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 12px 20px;
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(45deg, #00ffff, #ff00ff);
  }
`;

const DetailsContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  border-radius: 15px;
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  color: black;
  width: 350px;
  text-align: left;
  box-shadow: 0 0 20px #ff00ff, 0 0 20px #00ffff;

  h1 {
    text-align: center;
    margin-bottom: 15px;
  }

  p {
    margin: 5px 0;
  }
`;
