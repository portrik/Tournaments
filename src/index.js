import React from 'react';
import ReactDOM from 'react-dom';
import Material from './Components/Material'
import Teams from './Components/Teams'

function App() {
  return (
      <Material>
        <Teams />
      </Material>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));