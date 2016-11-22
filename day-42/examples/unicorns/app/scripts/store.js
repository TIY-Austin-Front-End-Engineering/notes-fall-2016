import Session from './models/session';
import Unicorns from './collections/unicorns';
import Powers from './collections/powers';

export default {
  session: new Session(),
  unicorns: new Unicorns(),
  powers: new Powers()
};
