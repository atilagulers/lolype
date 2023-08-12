import {GameState} from './enums';

export interface Champion {
  name: string;
}

export interface Player {
  socketId: string | undefined;
  isHost: boolean;
  isReady: boolean;
  name: string;
  champion: Champion | null;
}

export interface Room {
  id: string;
  players: Player[];
  gameState: GameState;
}
