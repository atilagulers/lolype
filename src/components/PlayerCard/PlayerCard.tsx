import React from 'react';
import {Container, ToggleButton, Col, Image, Row} from 'react-bootstrap';
import {Player} from '../../interfaces/interfaces';
import './PlayerCard.scss';

interface PlayerCardProps {
  player: Player;
  handleChangeReady?: () => void;
}

function PlayerCard({player, handleChangeReady}: PlayerCardProps) {
  return (
    <Container className="player-card-container">
      <Row>
        <Col xs="2" lg="1" className="m-0 p-0">
          <Image className="avatar" src="/avatar.png" roundedCircle />
        </Col>
        <Col className="champion-name-container">
          <label>Katarina</label>
        </Col>
        <Col>
          <ToggleButton
            className="ready-toggle"
            id={`${player.name}-${player.isHost}`}
            type="checkbox"
            value="1"
            variant="outline-primary"
            checked={player?.isReady || false}
            onChange={handleChangeReady}
          >
            Ready
          </ToggleButton>
        </Col>
      </Row>
      <Row>
        <Col className="player-name-container">
          <label id="name">{player?.name}</label>
        </Col>
      </Row>
    </Container>
  );
}

export default PlayerCard;
