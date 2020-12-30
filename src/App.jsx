import React, { useState } from 'react';
import ToDoList from './ToDoList.jsx';

const App = ()=>{
const[inputList, setInputList] = useState();
const[Items, setItems] = useState([]); /*By putting square braces, we convert the state variables into arrays*/
const itemEvent=(event)=>{
    setInputList(event.target.value);
};
const listOfItems = ()=>{
     setItems((oldItems) =>{
        return [...oldItems, inputList];
     });
     setInputList("");
};
const deleteItems =(id)=>{
    console.log('deleted');
    setItems((oldItems) =>{
        return oldItems.filter((arrElem,index)=>{
            return index!==id;
        })
    })
};
return (
<React.Fragment>
    <div className="main_div">
        <div className="center_div">
            <br />
            <h1>To Do List</h1>
            <br />
            <input type='text' placeholder="Add an Item" value={inputList} onChange={itemEvent}/>
            <button onClick={listOfItems}>+</button>
            <ol>
            {Items.map((itemval, index) => {
                return <ToDoList 
                key={index} 
                id={index} 
                text={itemval}
                onSelect = {deleteItems} />;
            })}
            </ol>
        </div>
    </div>
</React.Fragment>
    )
}
export default App;