import React, { useState } from 'react';
import styled from 'styled-components';
import { db } from './firebaseConfig';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await db.collection("contacts").add({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date()
      });
      alert("✅ Your message has been sent!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <Container>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </Container>
  );
}

export default Contacts;

// 🎨 Styling
const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 20px;
  background: #fff9c4; /* Light yellow background */
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input, textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }

  button {
    background: linear-gradient(90deg, #ffeb3b, #ffc107);
    color: #222;
    border: none;
    padding: 10px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    background: linear-gradient(90deg, #ffc107, #ffeb3b);
  }
`;
