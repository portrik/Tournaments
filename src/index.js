import React from 'react';
import ReactDOM from 'react-dom';
import Material from './Components/Material'
import Teams from './Components/Teams'

// index.js serves as starting point of a react application
// It's only function is to render the components on the /public/index.html file

function App() {
  return (
    <Material>
      <Teams />
    </Material>
  );
}

// index.js renders it's content in the component with id=app
ReactDOM.render(<App />, document.querySelector('#app'));