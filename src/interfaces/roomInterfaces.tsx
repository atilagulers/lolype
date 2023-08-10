export interface Player {
  //id: string;
  name: string;
  champion: string;
}

export interface Room {
  id: string;
  hostPlayer: Player;
  otherPlayer: Player;
}
