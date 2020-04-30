import React, {useState,useEffect} from 'react';

function Tasklist(props){
    return (
        <div>
            <div class="card">
                <div class="card-header">
                    {props.name}
                </div>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <ul>
                       
                        <i className="material-icons">check_box</i>
                        <i className="material-icons">check_box_outline_blank</i>
                        {props.list.map((task,index)=>(
                            <li>
                                {task}
                            </li>
                        ))}
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tasklist;