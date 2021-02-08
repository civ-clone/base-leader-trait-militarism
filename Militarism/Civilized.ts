import Leader from '@civ-clone/core-civilization/Leader';
import Militarism from '../Militarism';

export class Civilized extends Militarism {
  constructor(LeaderType: typeof Leader) {
    super(LeaderType, 0);
  }
}

export default Civilized;
