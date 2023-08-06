import Champion from './Champion';

export default class TankChampion extends Champion {
  constructor(
    name: string,
    hp: number,
    mp: number,
    ad: number,
    ap: number,
    ar: number,
    mr: number,
    armor: number
  ) {
    super(name, hp, mp, ad, ap, ar, mr);
  }
}
