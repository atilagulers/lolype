import React from 'react';
import {Container} from 'react-bootstrap';

function Header() {
  return (
    <Container
      className="mt-5"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>LoLype</h1>
    </Container>
  );
}

export default Header;
