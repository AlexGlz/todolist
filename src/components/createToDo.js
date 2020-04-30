import React, {useState,useEffect} from 'react';




function Createtodo() {
    
    var  taskStoraged = localStorage.getItem("tasks")
    if(!taskStoraged){
        taskStoraged = []
    }

    const[todo,setTodo]= useState("");

    const[todos,setTodos]= useState([]);

    const[done,setDone]= useState([]);

    const[list,setList]= useState(taskStoraged)

    function submitTodo(){
        if(!todo){
           alert("ooooo")
        }else{
            console.log(list)
            var newlist = list.concat([todo])
            setList(newlist)
            setTodo("")
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
                onChange={e => setTodo(e.target.value)}/>
        <div class="input-group-append">
            <button type="button" class="btn btn-primary" onClick={submitTodo}>Save</button>
        </div>
        <div class="container">
            <div class="row">
                <ul>
                    {list.map((task,index) =>(
                        <li>{task}
                            <button type="button" class="btn btn-primary" onClick={()=>{completeTodo(index)}}>Done!</button>
                        </li>
                        
                    ))}
                </ul>
            </div>
        </div>
        </div>
      </div>
    );
  }
  
  export default Createtodo;
  