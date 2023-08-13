import React from 'react';
import {Container, ToggleButton, Col, Image, Row} from 'react-bootstrap';
import {Player} from '../../interfaces/interfaces';
import './PlayerCard.scss';
import SkillBar from '../SkillBar/SkillBar';

interface PlayerCardProps {
  player: Player;
  handleChangeReady?: () => void;
}

function PlayerCard({player, handleChangeReady}: PlayerCardProps) {
  return (
    <Container className="player-card-container">
      <Row className="mb-5">
        <Col xs="2" lg="1" className="m-0 p-0">
          <Image className="selected-champion" src="/champion.webp" rounded />
        </Col>
        <Col xs="2" lg="2" className="">
          <Row className="player-name-container">
            <label id="name">{player?.name}</label>
          </Row>
          <Row className="champion-name-container">
            <label>Aatrox</label>
          </Row>
        </Col>
        <Col lg="4">
          <SkillBar />
        </Col>
        <Col>Stats</Col>
      </Row>
      <Row>
        <ToggleButton
          className="ready-toggle"
          id={`${player.name}-${player.isHost}`}
          type="checkbox"
          value="1"
          variant=""
          checked={player?.isReady || false}
          onChange={handleChangeReady}
        >
          Ready
        </ToggleButton>
      </Row>
    </Container>
  );
}

export default PlayerCard;
