import React, {useEffect} from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import './SkillBar.scss';
import {Champion} from '../../interfaces/interfaces';

interface SkillBarProps {
  champion: Champion;
}

function SkillBar({champion}: SkillBarProps) {
  return (
    <Row className="skills-container mb-5">
      <Col className="skill-column">
        <Image
          className="skill-image"
          src={`/champions/${champion?.name}/skill-0.webp`}
          rounded
        />
      </Col>
      <Col className="skill-column">
        <Image
          className="skill-image"
          src={`/champions/${champion?.name}/skill-1.webp`}
          rounded
        />
      </Col>
      <Col className="skill-column">
        <Image
          className="skill-image"
          src={`/champions/${champion?.name}/skill-2.webp`}
          rounded
        />
      </Col>
      <Col className="skill-column">
        <Image
          className="skill-image"
          src={`/champions/${champion?.name}/skill-3.webp`}
          rounded
        />
      </Col>
      <Col className="skill-column">
        <Image
          className="skill-image"
          src={`/champions/${champion?.name}/skill-4.webp`}
          rounded
        />
      </Col>
    </Row>
  );
}

export default SkillBar;
