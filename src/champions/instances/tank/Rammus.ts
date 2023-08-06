import TankChampion from '../../base/TankChampion';

const stats = {
  name: 'Rammus',
  hp: 1000,
  mp: 500,
  ad: 80,
  ap: 0,
  ar: 50,
  mr: 30,
  armor: 100,
};

export default class Rammus extends TankChampion {
  constructor() {
    super(
      stats.name,
      stats.hp,
      stats.mp,
      stats.ad,
      stats.ap,
      stats.ar,
      stats.mr,
      stats.armor
    );
  }
}
