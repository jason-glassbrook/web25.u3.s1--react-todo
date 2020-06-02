/// external modules ///
import React from 'react';

/// styles ///
import './styles/App.css';

/***************************************
  COMPONENT
***************************************/
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render () {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

/**************************************/
export default App;
