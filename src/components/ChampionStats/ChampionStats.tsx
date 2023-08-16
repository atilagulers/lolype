import React, {useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {Champion} from '../../interfaces/interfaces';

interface ChampionStatsProps {
  champion: Champion;
}

function ChampionStats({champion}: ChampionStatsProps) {
  return (
    <Col lg="2">
      <Row className="mb-3">
        <Col>AD: {champion.attackDamage}</Col>
        <Col>AP: {champion.abilityPower}</Col>
      </Row>
      <Row className="mb-3">
        <Col>DP: {champion.defensePower}</Col>
        <Col>MR: {champion.magicResistance}</Col>
      </Row>
    </Col>
  );
}

export default ChampionStats;
