import React, {useEffect, useState} from 'react';
import {Image, Row, Col, InputGroup, Form} from 'react-bootstrap';
import './ChampionSelection.scss';
import {Player, Champion} from '../../interfaces/interfaces';
import {fetchAllChampions} from '../../services/api';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

interface ChampionSelectionProps {
  player: Player | undefined;
  setPlayer: React.Dispatch<React.SetStateAction<Player | undefined>>;
}

function ChampionSelection({player, setPlayer}: ChampionSelectionProps) {
  const [champions, setChampions] = useState<Champion[]>([]);

  useEffect(() => {
    async function fetchChampions() {
      try {
        const championList = await fetchAllChampions();
        setChampions(championList);
      } catch (error) {
        console.error('Component Error:', error);
      }
    }

    fetchChampions();
  }, []);

  const championImages = Array(10).fill('/champion.webp');

  const handleSelectChampion = (selectedChampion: Champion) => {
    if (player) {
      setPlayer({...player, champion: selectedChampion});
    }
  };

  if (!champions) return <LoadingSpinner />;

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
        {champions.map((champion, index) => (
          <Col
            onClick={() => handleSelectChampion(champion)}
            className="champion-container p-0"
            key={index}
          >
            <Image
              className="champion"
              src={`/champions/${champion.name}/avatar.webp`}
              rounded
            />
          </Col>
        ))}
      </Row>
    </Row>
  );
}

export default ChampionSelection;
