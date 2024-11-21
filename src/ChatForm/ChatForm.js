import React, { useState } from 'react';
import './ChatForm.css';

// Input 
const Input = ({ label, type, name, value, onChange, placeholder, required }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  </div>
);

// Textarea 
const Textarea = ({ label, name, value, onChange, placeholder, required }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      >
      </textarea>
  </div>
);

// Button 
const Button = ({ type = 'button', children, onClick, className }) => (
  <button type={type} onClick={onClick} className={className}>
    {children}
  </button>
);

// ChatForm 
const ChatForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Обработчик изменений в Input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="First Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            required
          />
          <Input
            label="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(999)-999-99-99"
          />
          <Textarea
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
            >
            </Textarea>
          
          <Button type="submit" className="submit-btn">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatForm;
