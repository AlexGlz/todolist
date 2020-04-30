import React, {useState,useEffect} from 'react';

function Createtodo(props) {
    
    const[todo,setTodo]= useState("");

    function submitTodo(){
        if(!todo){
           alert("Please write a task")
        }else if(!todo.replace(/\s/g, '').length)//Verify if the new task only contains empty space
        {
            alert("Pleas write a task")
            setTodo("") //Erase the empty spaces
        }
            else{
            props.parentCall(todo) //Send to the parent the new task, so it will add it to the list
            setTodo("")//Clear the input fiield
        }
    }

    function completeTodo(index){
        console.log(index)
    }

    return (
      <div>
        <div class="input-group mb-3">
            <input type="text"  
                class="form-control" 
                value={todo} 
                placeholder="Create a new task"
                onChange={e => setTodo(e.target.value)} //On Change handler
                onKeyPress={event => {if(event.key == "Enter"){submitTodo()}}} //Enter key handler
            />
        <div class="input-group-append">
            <button type="button" class="btn btn-primary" 
                onClick={submitTodo}//Click handler
            >
                Save
            </button>
        </div>
        </div>
      </div>
    );
  }
  
  export default Createtodo;
  