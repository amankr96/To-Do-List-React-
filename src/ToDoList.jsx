import React from "react";

const ToDoList=(props)=>{
    return (
        <React.Fragment>
        <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true" 
        onClick={()=>{                                  /* For the delete operation we want to know which of the item is being clicked. We want that id. Now let' go to the delete method in App.jsx*/
            props.onSelect(props.id);
        }}/>
        <li> {props.text} </li>     
        </div>
        </React.Fragment>
        );
}

export default ToDoList;  
