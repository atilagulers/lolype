import React, {useEffect} from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import './SkillBar.scss';

function SkillBar() {
  return (
    <Row className="skills-container mb-5">
      <Col className="skill-column">
        <Image
          className="skill-image"
          src="/champions/aatrox/skill-0.webp"
          rounded
        />
      </Col>
      <Col className="skill-column">
        <Image
          className="skill-image"
          src="/champions/aatrox/skill-1.webp"
          rounded
        />
      </Col>
      <Col className="skill-column">
        <Image
          className="skill-image"
          src="/champions/aatrox/skill-2.webp"
          rounded
        />
      </Col>
      <Col className="skill-column">
        <Image
          className="skill-image"
          src="/champions/aatrox/skill-3.webp"
          rounded
        />
      </Col>
      <Col className="skill-column">
        <Image
          className="skill-image"
          src="/champions/aatrox/skill-4.webp"
          rounded
        />
      </Col>
    </Row>
  );
}

export default SkillBar;
