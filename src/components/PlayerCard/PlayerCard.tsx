import React from 'react';
import {
  Container,
  ToggleButton,
  Col,
  Image,
  Row,
  ProgressBar,
} from 'react-bootstrap';
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
      <Row className="">
        <Col xs="2" lg="1" className="m-0 p-0">
          <Image className="selected-champion" src="/champion.webp" rounded />
        </Col>
        <Col xs="2" lg="2" className="">
          <Row className="player-name-container">
            <label id="name">{player?.name}</label>
          </Row>
          <Row className="champion-name-container">
            <label>{player.champion?.name}</label>
          </Row>
        </Col>
        {player.champion && (
          <Col lg="4" className="me-5">
            <SkillBar />
            <ProgressBar className="health-bar" now={75} label={`${75}%`} />
            <ProgressBar className="source-bar" now={45} label={`${45}%`} />
          </Col>
        )}

        {player.champion && (
          <Col lg="2">
            <Row className="mb-3">
              <Col>AD: 30</Col>
              <Col>AP: 78</Col>
            </Row>
            <Row className="mb-3">
              <Col>DP: 30</Col>
              <Col>MR: 78</Col>
            </Row>
          </Col>
        )}
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
