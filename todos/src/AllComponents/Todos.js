import React from 'react'
import Todoitem from './Todoitem'

export default function Todos(props) {
    let myStyle = {
        minHeight: "75vh",
        margin: "50px auto"
    }

    return (
        <div className='container' style={myStyle}>

            <h5 className='text-center my-4'>To Dos List</h5>

            <hr></hr>

            {props.todosvar.length === 0 ? "No todos Display" :
                props.todosvar.map((tod) => {
                    return <Todoitem todo={tod} key={tod.s_no} onDelete={props.onDel} />
                })}


        </div>
    )
}