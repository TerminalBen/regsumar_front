import React from 'react'
import { FaBuffer} from 'react-icons/fa'
const Sumario = ({sumario,onOpen}) => {
    return (
        <div className ='task'>
            <h4> {sumario.titulo} 
                <FaBuffer style={{color:'green',cursor:'pointer'}} 
                    onClick={()=>onOpen(sumario.id)}/>
            </h4>
            <p>Data:{sumario.data}</p>
            <p>Disciplina:{sumario.disciplina}</p>
        </div>
    )
}

export default Sumario;