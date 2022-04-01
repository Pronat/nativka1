import React from 'react';

export const User = () => {
    const deleteUser = ()=> {
        alert("delete user")
    }
    const saveUser = ()=> {
        alert("save user")
    }

    const onChangeName = () => {
        console.log('name changed')
    }
    return(
        <div><textarea onChange={onChangeName}>Alex</textarea>
            <input/>
            <button tabIndex={3} onClick={deleteUser}>delete</button>
            <div tabIndex={1} onClick={saveUser}>save</div>

        </div>
    )
}