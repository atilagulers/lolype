import {GameState} from './enums';

export type Role = 'Tank' | 'Assassin' | 'Figther';
export type SourceType = 'Mana' | 'Energy' | 'Rage' | 'None';

export interface Champion {
  name: string;
  role: Role;
  maxHealth: number;
  currentHealth: number;
  sourceType: SourceType;
  maxSource: number;
  currentSource: number;
  abilityPower: number;
  attackDamage: number;
  defensePower: number;
  magicResistance: number;
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
  countdown: number;
}
