/*******************************************************************************
  handle/handleSuccessOrFailure
*******************************************************************************/

/// imports ///
import { is, response, } from './tools/iffy';

/// helpers ///
const trySay = (ev, re) => {
  if (is (re.message)) {
    console.log (re.message);
  };
};

const tryAct = ([opts, name], ev, re) => {
  if (is (opts)) {
    const act = opts[name];

    if (is (act)) {
      act (ev, re);
    };
  };
};

/// MAIN ///
const handleSuccessOrFailure = (opts, ev, re) => {
  if (response.success (re)) {

    trySay (ev, re);
    tryAct ([opts, 'handleSuccess'], ev, re);

  } else if (response.failure (re)) {

    trySay (ev, re);
    tryAct ([opts, 'handleFailure'], ev, re);

  } else {

    console.log (`Hmm -- something weird happened.`);
    throw (new response.Error);

  };
};

/// exports ///
export default handleSuccessOrFailure;
