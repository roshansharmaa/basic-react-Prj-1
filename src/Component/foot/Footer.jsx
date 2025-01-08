import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>&copy; {new Date().getFullYear()} Fan Zone. All rights reserved.</p>
        <nav>
          <ul style={navStyle}>
            <li style={listItemStyle}><a href="#about">About</a></li>
            <li style={listItemStyle}><a href="#services">Services</a></li>
            <li style={listItemStyle}><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 0',
  textAlign: 'center',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const navStyle = {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'center',
};

const listItemStyle = {
  margin: '0 10px',
};

export default Footer;