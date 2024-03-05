import React from "react";



const Todo = ({props}) => {





    return(
        <div>
            <ul>
            {
    
                props.map(data =>{
                    <li>{data}</li>
                })
            }
            </ul>

        </div>
    )
}


export default Todo