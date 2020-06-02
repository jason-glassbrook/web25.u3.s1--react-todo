/***************************************
  handle/handleChange
***************************************/

/// imports ///
import handleAnything from './handleAnything';

/*--------------------------------------
  handleChange
----------------------------------------
  a descriptive alias for handle/anything
--------------------------------------*/
const handleChange = (setter, opts) => (ev) => {
  console.log (`--> handling change... <--`);
  handleAnything (setter, opts) (ev);
};

/// exports ///
export default handleChange;

