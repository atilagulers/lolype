import React from 'react';
import {
  Container,
  ToggleButton,
  Col,
  Image,
  Row,
  ProgressBar,
} from 'react-bootstrap';
import {Player, SourceType} from '../../interfaces/interfaces';
import './PlayerCard.scss';
import SkillBar from '../SkillBar/SkillBar';
import ChampionStats from '../ChampionStats/ChampionStats';

interface PlayerCardProps {
  player: Player;
  handleChangeReady?: () => void;
  showReadyBtn: boolean;
}
function PlayerCard({
  player,
  handleChangeReady,
  showReadyBtn,
}: PlayerCardProps) {
  const getSourceBarColor = function () {
    switch (player.champion?.sourceType) {
      case 'Mana':
        return 'blue';
      case 'Energy':
        return 'yellow';
      default:
        return 'Mana';
    }
  };

  return (
    <Container className="player-card-container">
      <Row className="">
        <Col xs="2" lg="1" className="selected-champion-container mb-3 p-0">
          {player.champion ? (
            <Image
              className="selected-champion"
              src={`/champions/${player.champion.name}/avatar.webp`}
              rounded
            />
          ) : (
            <Image
              className="selected-champion"
              src="/black-square.webp"
              rounded
            />
          )}
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
            <SkillBar champion={player.champion} />
            <ProgressBar
              className="health-bar"
              now={player.champion.currentHealth}
              label={`${player.champion.currentHealth} / ${player.champion.maxHealth}`}
            />
            <ProgressBar
              className={`source-bar source-bar-${getSourceBarColor()}`}
              now={player.champion.currentSource}
              label={`${player.champion.currentSource} / ${player.champion.maxSource}`}
            />
          </Col>
        )}
        {player.champion && <ChampionStats champion={player.champion} />}
      </Row>
      <Row>
        {showReadyBtn && (
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
        )}
      </Row>
    </Container>
  );
}

export default PlayerCard;
