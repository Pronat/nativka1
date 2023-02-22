import React from "react";


const newFunction = () => {
    alert('Hello!')
}
setTimeout(newFunction , 1000)

export const User = () => {
    return (
        <div>Alex
        <button>delete</button>
        <button>add</button>
        </div>

    )
}