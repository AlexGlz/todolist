import React from 'react';
import logo from './logo.svg';
import './App.css';
import Createtodo from './components/createToDo'
import Tasklist from './components/Tasklist'



function App() {

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet"></link>
      <header className="App-header">
        <div class="container">
          <div class="row">
            <div className="col-sm-12">
              <Createtodo/>
            </div>
            <div className="col-sm-12">
              <Tasklist name="To-do Tasks" list={["HOLA"]}/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
