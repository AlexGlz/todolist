import React, {useState, useEffect,useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import Createtodo from './components/createToDo'
import Tasklist from './components/Tasklist'


document.title = "What to do?"

//This function gets the given local storaged variable from the navigator.
function getFromStorage(listname){
  const tasksList =  localStorage.getItem(listname)
  //Verifies if the variable exists
  if(!tasksList){
    return []
  }else{
    return tasksList.split(",");
  }
}

function App() {

  function updateLocalStorage(){
    localStorage.setItem("undoneList",undoneTasks) //Save the lists in the local storage
    localStorage.setItem("doneList",doneTask) 
  }

  //Special hook called Reducer Hook. This hook is recommended for multivalue states such as Arrays
  const [undoneTasks, dispatchUndone] = useReducer((myArray, { type, value }) => {
    switch (type) {
      case "add":
        return [...myArray, value].sort();
      case "remove":
        return myArray.filter((_, index) => index !== value);
      default:
        return myArray;
    }}, getFromStorage("undoneList"))

    //Reducer Hook to storage the List of the Done tasks
    const [doneTask, dispatchDone] = useReducer((myArray, { type, value }) => {
      switch (type) {
        case "add":
          return [...myArray, value].sort();
        case "remove":
          return myArray.filter((_, index) => index !== value);
        default:
          return myArray;
      }}, getFromStorage("doneList"))

  function addTask(task){
    //Add the given task to the undone list and sort it using the Javascript Array Sort
    dispatchUndone({ type: "add", value: task })
  }

  function deleteUndone(index){
    //Ask the user for a confirmation
    if(!window.confirm("Are you sure to delete the task: "+ undoneTasks[index])){
      return
    }
    //Use the hook to update de value
    dispatchUndone({ type: "remove", value: index })
  }


  function deleteDone(index){
    //Ask the user for a confirmation
    if(!window.confirm("Are you sure to delete the task: "+ undoneTasks[index])){
      return
    }
    //Use the hook to update de value
    dispatchDone({ type: "remove", value: index })
  }

  function setDone(index){
    //Save the selected task into the done list
    dispatchDone({type:"add",value:undoneTasks[index]})
    //Delete the task from the undone list
    dispatchUndone({type:"remove",value:index})
  }

  function setUndone(index){
    //Save the selected task into the undone list
    dispatchUndone({type:"add",value:doneTask[index]})
    //Delete the task from the done list
    dispatchDone({type:"remove",value:index})
  }

  //This hook activates every time one of the tasks hook is changed
  useEffect(()=>{
    updateLocalStorage()//Save the changes on the tasks lists
  })

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet"></link>
      <header className="App-header">
        <h1>My To-do List</h1>
        <div className="container">
          <div className="row">
           {/*Task creator Module*/}
            <div className="col-sm-12">
              <Createtodo parentCall={addTask}/>
            </div>
            {/*Undone Task List Display Module*/}
            <div className="col-sm-12">
              <Tasklist 
                id="undone" 
                name="My To-do List" 
                icon="panorama_fish_eye" 
                list={undoneTasks} 
                delete={deleteUndone} 
                action={setDone}
                emptyMessage="There is nothing to do!"
                emptyTip="Try adding a new task using the field above"
                />
            </div>
            {/*Done Tasks List Display Module */}
            <div className="col-sm-12">
              <Tasklist 
                id="done" 
                name="My Done Activities" 
                icon="check_circle" 
                list={doneTask} 
                delete={deleteDone} 
                action={setUndone}
                emptyMessage="You haven't completed any task"
                emptyTip="Complete any task by checking it"
                />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
