import React, {MouseEventHandler} from 'react';

export const User = () => {
    const deleteUser = () => {

    }
    const saveUser = ()=> {
        alert("save user")
    }

    const onChangeName = () => {
        console.log('name changed')
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }
    return(
        <div><textarea
            onChange={onChangeName}
            onBlur={focusLostHandler}>Alex</textarea>
            <input/>
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>

        </div>
    )
}