import Leader from '@civ-clone/core-civilization/Leader';
import Militarism from '../Militarism';

export class Normal extends Militarism {
  constructor(LeaderType: typeof Leader) {
    super(LeaderType, 0.5);
  }
}

export default Normal;
