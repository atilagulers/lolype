import React from 'react';
import {Container, ToggleButton, Col} from 'react-bootstrap';
import {Player} from '../../interfaces/interfaces';
import './PlayerCard.scss';

interface PlayerCardProps {
  player: Player;
  handleChangeReady?: () => void;
}

function PlayerCard({player, handleChangeReady}: PlayerCardProps) {
  return (
    <Container className="player-card-container">
      <Col className="player-name-container">
        <label id="name">{player?.name}</label>
      </Col>

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
    </Container>
  );
}

export default PlayerCard;
