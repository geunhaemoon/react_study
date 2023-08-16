import React, { useState } from 'react';

function Main(props) {
    let todoInputValue = null;
    const [ todoContent, setTodoContent ] = useState("");
    const [ todoContentArray, setTodoContentArray ] = useState([]);

    const handleToDoInputChange = (e) => {
        todoInputValue = e.target.value;
    }

    const handleAddClick = () => {
       // todoContentArray.push(todoInputValue);
        setTodoContentArray([...todoContentArray, todoInputValue]);
        console.log(todoContentArray);
    }

    return (
        <div>
            <input type="text"  onChange={handleToDoInputChange} />
            <button onClick={handleAddClick}> 추가 </button>
            <ul>
                {/*!!todoContent && (<>{todoContent}</>)*/}
                {todoContentArray.map(todoContent => {
                    return (<li>{todoContent}</li>);
                })}
            </ul>
        </div>
    );
}

export default Main;