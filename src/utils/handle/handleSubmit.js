/***************************************
  handle/handleSubmit
***************************************/

/// imports ///
import handleAnything from './handleAnything';

/*--------------------------------------
  handleSubmit
----------------------------------------
  a descriptive alias for handle/handleAnything
--------------------------------------*/
const handleSubmit = (setter, opts) => (ev) => {
  console.log (`--> handling submit... <--`);
  handleAnything (setter, opts) (ev);
};

/// exports ///
export default handleSubmit;

