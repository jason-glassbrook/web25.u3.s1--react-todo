/*******************************************************************************
  Immutably
--------------------------------------------------------------------------------
  A set of helper functions for "mutating" immutable values.
*******************************************************************************/

export const toggle = (value) => (!value);

export class Immutably {
  // constructor () {
  //   console.log ('--> constructing Immutably is unnecessary <--');
  // }

  /***************************************
    setters
  ***************************************/
  /*--------------------------------------
    set
  ----------------------------------------
    - make a copy (shallow) of an object
    - directly set the value of one "path" (eg: a field or index)
  --------------------------------------*/
  static set = (object, path, value) => ({
    ...object,
    [path] : value
  });

  /*--------------------------------------
    setField, setItem
  ----------------------------------------
    - aliases for easier reading
  --------------------------------------*/
  static setField = (object, field, value) => (
    Immutably.set (object, field, value)
  );
  static setItem = (array, index, value) => (
    Immutably.set (array, index, value)
  );

  /*--------------------------------------
    setBy
  ----------------------------------------
    - make a copy (shallow) of an object
    - functionally set the value of one "path" (eg: a field or index)
    - the function takes the original object, path, and original value of object[path]
  --------------------------------------*/
  static setBy = (object, path, fun) => (
    Immutably.set (object, path, fun (object, path, object[path]))
  );

  /*--------------------------------------
    setFieldBy, setItemBy
  ----------------------------------------
    - aliases for easier reading
  --------------------------------------*/
  static setFieldBy = (object, field, fun) => (
    Immutably.setBy (object, field, fun)
  );
  static setItemBy = (array, index, fun) => (
    Immutably.setBy (array, index, fun)
  );

  /***************************************
    togglers
  ***************************************/
  /*--------------------------------------
    toggle
  ----------------------------------------
    - make a copy (shallow) of an object
    - toggle the boolean value of one "path" (eg: a field or index)
  --------------------------------------*/
  static toggle = (object, path) => (
    Immutably.set (object, path, toggle (object[path]))
  );

  /*--------------------------------------
    toggleField, toggleItem
  ----------------------------------------
    - aliases for easier reading
  --------------------------------------*/
  static toggleField = (object, field) => (
    Immutably.toggle (object, field)
  );
  static toggleItem = (array, index) => (
    Immutably.toggle (array, index)
  );
}

/**************************************/
default export Immutably;
