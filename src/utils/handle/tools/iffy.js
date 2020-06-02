/*******************************************************************************
  handle/tools/iffy
*******************************************************************************/

/// imports ///
import iffy, { is, isnt, yes, no, } from '../../iffy';

/***************************************
  response
***************************************/

/*
response.success
(re) =>
  isnt re -> true
  is re && (yes re.success || no re.failure) -> true
  else -> false
*/
const success = (re) => (
  isnt (re)
  ||
  is (re) && (yes (re.success) || no (re.failure))
);
  
/*
response.failure
(re) =>
  is re && (no re.success || yes re.failure) -> true
  else -> false
*/
const failure = (re) => (
  is (re) && (no (re.success) || yes (re.failure))
);

/// errors ///
class ResponseError {
  name = 'ResponseError';
  message = 'Somehow response was neither a success nor a failure.';
};

/**************************************/

/// exports ///
export default ({
  ...iffy,
  response : {
    success,
    failure,
    Error : ResponseError,
  },
});
