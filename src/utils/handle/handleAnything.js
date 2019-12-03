/***************************************
  handle/handleAnything
***************************************/

/// imports ///
import { is, yes, } from './tools/iffy';
import handleSuccessOrFailure from './handleSuccessOrFailure';

/*--------------------------------------
  handleAnything
----------------------------------------
  :~ (...args) => response | undefined | null

  ...args
  setter :~ (event) => response | undefined | null
  opts   :~ {
    'preventDefault' :~ boolean,
    'handleSuccess'  :~ (event, response) => void,
    'handleFailure'  :~ (event, response) => void,
  }

  type response := (
    {
      'success' :~ boolean
      ? 'failure' :~ boolean
      ? 'message' :~ string
    }
    | undefined
    | null
  )
--------------------------------------*/
const handleAnything = (setter, opts) => (ev) => {
  
  if (is (opts) && yes (opts.preventDefault)) {
    ev.preventDefault ();
  };
  
  const re = setter (ev);

  handleSuccessOrFailure (opts, ev, re);

};

/// exports ///
export default handleAnything;

