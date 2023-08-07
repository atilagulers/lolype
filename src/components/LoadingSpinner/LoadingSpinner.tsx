import React from 'react';
import {Container, Spinner} from 'react-bootstrap';
import './LoadingSpinner.scss';

function LoadingSpinner() {
  return (
    <Container className="loading-spinner-container">
      <Spinner animation="border" />
    </Container>
  );
}

export default LoadingSpinner;
