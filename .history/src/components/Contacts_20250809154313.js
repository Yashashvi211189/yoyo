import React, { useState } from 'react';
import styled from 'styled-components';

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
        <div>
          <h2>🚀 Your Details</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.num}</p>
          <p><strong>Password:</strong> {user.password}</p>
        </div>
      </DetailsContainer>
    );
  };

  return (
    <>
      <Wrapper>
        <FormBox>
          <h1>🚀 Sign Up Form</h1>
          <h4>Enter your details below:</h4>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputs}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputs}
            placeholder="Email"
          />
          <input
            type="tel"
            name="num"
            value={user.num}
            onChange={handleInputs}
            placeholder="Phone Number"
          />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputs}
            placeholder="Password"
          />
          <button onClick={(e) => { e.preventDefault(); setShow(true); }}>
            Submit 🚀
          </button>
        </FormBox>
      </Wrapper>
      {show && <Details />}
    </>
  );
};

export default Contacts;

// 🌞 Light Yellow Background
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fff9c4, #fffde7);
`;

// 📦 Form Box Styling
const FormBox = styled.form`
  backdrop-filter: blur(15px);
  background: rgba(255, 255, 224, 0.85);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  width: 350px;
  text-align: center;

  h1 {
    color: #333;
    margin-bottom: 10px;
  }

  h4 {
    color: #444;
    margin-bottom: 20px;
  }

  input {
    padding: 12px;
    margin: 8px 0;
    border: 2px solid #fbc02d;
    border-radius: 12px;
    outline: none;
    font-size: 1rem;
    background: #fffde7;
  }

  input:focus {
    border-color: #ffeb3b;
    box-shadow: 0 0 10px #ffeb3b;
  }

  button {
    padding: 12px;
    margin-top: 15px;
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: bold;
    background: linear-gradient(90deg, #fbc02d, #ffeb3b);
    color: #333;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    transform: scale(1.05);
    background: linear-gradient(90deg, #ffeb3b, #fbc02d);
  }
`;

// 📜 Details Styling
const DetailsContainer = styled.div`
  margin: 20px auto;
  background: #fff9c4;
  padding: 20px;
  border-radius: 15px;
  width: 300px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    color: #333;
  }

  p {
    color: #444;
    margin: 8px 0;
  }
`;
