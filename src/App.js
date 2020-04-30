import React from 'react';
import logo from './logo.svg';
import './App.css';
import Createtodo from './components/createToDo'
//import Tasklist from './components/tasklist'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <div class="row ">
            <div class="col-sm-12">
              <Createtodo/> 
            </div>
            <div class="col-sm">
  
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
