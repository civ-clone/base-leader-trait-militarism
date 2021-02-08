import Leader from '@civ-clone/core-civilization/Leader';
import Militarism from '../Militarism';

export class Militaristic extends Militarism {
  constructor(LeaderType: typeof Leader) {
    super(LeaderType, 1);
  }
}

export default Militaristic;
