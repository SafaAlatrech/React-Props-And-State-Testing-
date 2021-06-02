
import './App.css';

// App Component = Parent component : 
function App() {
  
  this.state = { 
       parent : 'App component is Parent Component  '
  }

  return (
    <div className="App">
      Hello React Js from parent Component
      <Child name="Test Child"/>
      State of this component is {this.state.parent}
    </div>
  );

  
}

// Child Component 

function Child (props) {
  
  return ( 
  <p> Child Component and Props is :{props.name}</p>
   )
}

export default App;
