// This module recieves a list of task form the parent an displays it in a bullet list format.
// It also receives some predefined data such as the List Name and messages if the list is empty

import React, {useState,useEffect} from 'react';
import "../style/Tasklist.css"

function Tasklist(props){
    const [tasklist,setList] = useState(props.list)
    const [profileState, setProfileState] = useState(props);

    //This hook is used to detect changes in the props of the element from the parent
    useEffect(() => {
        setProfileState(props);
    }, [props]);
    
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    {profileState.name}
                </div>
                <div className="card-body">
                    {/*This section verifies if the list is empty*/}
                    {profileState.list.length===0? /*If it is, it will show a friendly message to the user*/
                    <div>
                        <h5>{profileState.emptyMessage}</h5>
                        <h6>{profileState.emptyTip}</h6>
                    </div>
                        :
                        <></>
                    }
                    <ul>
                        {/*Generate a element in the list for each task*/}
                       {profileState.list.map((task,index)=>(
                           <li className="task">
                               <div className="containder">
                                   <div className="row">
                                        <div className="col-11"
                                            onClick={()=>profileState.action(index)}>
                                            <i className="material-icons check">{profileState.icon}</i> {task}
                                        </div>
                                        <div className="col-1"> 
                                                <i className="material-icons text-danger"
                                                    onClick={()=>profileState.delete(index)}>
                                                    delete
                                                </i>
                                        </div>
                                   </div>
                               </div>
                            </li>
                       ))}
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tasklist;