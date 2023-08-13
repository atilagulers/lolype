import React, {useEffect} from 'react';
import {Image, Row, Col, InputGroup, Form} from 'react-bootstrap';
import './ChampionSelection.scss';

function ChampionSelection() {
  const championImages = Array(10).fill('/champion.webp');
  return (
    <Row>
      <Row className="mb-2">
        <InputGroup size="sm" className="p-0">
          <Form.Control
            className="champion-search-input"
            aria-label="Large"
            placeholder="Search"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
      </Row>
      <Row>
        {championImages.map((imageSrc, index) => (
          <Col className="p-0" key={index}>
            <Image className="champion" src={imageSrc} rounded />
          </Col>
        ))}
      </Row>
      <Row>
        {championImages.map((imageSrc, index) => (
          <Col className="p-0" key={index}>
            <Image className="champion" src={imageSrc} rounded />
          </Col>
        ))}
      </Row>
    </Row>
  );
}

export default ChampionSelection;
