/***************************************
  handle/handleReset
***************************************/

/// imports ///
import handleAnything from './handleAnything';

/*--------------------------------------
  handleReset
----------------------------------------
  a descriptive alias for handle/anything
--------------------------------------*/
const handleReset = (setter, opts) => (ev) => {
  console.log (`--> handling reset... <--`);
  handleAnything (setter, opts) (ev);
};

/// exports ///
export default handleReset;

