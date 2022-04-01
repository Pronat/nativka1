import React from 'react';

export type ManType = {
    name: string,
    age: number,
    lessons: Array<{title: string}>,
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man:ManType
}

const ManComponent: React.FC<PropsType>=(props)=>{
    return <div></div>
}

