import React from 'react'
import { FaBuffer} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
const Sumario = ({sumario,onOpen,onDelete}) => {
    return (
        <div className ='task'>
            <h4> {sumario.titulo} 
                <FaBuffer style={{color:'green',cursor:'pointer'}} 
                    onClick={()=>onOpen(sumario.id)}/>
                <FaTimes style = {{color:'red',cursor:'pointer'}}
                    onClick={()=>onDelete(sumario.id)}/>
            </h4>
            <p>Descrição:{sumario.descricao}</p>
            <p>Disciplina:{sumario.id_disciplina}</p>
            <p>Numero de Aula:{sumario.nr_aula}</p>
            <p>Validate:{sumario.validate === 1?'True':'False'}</p>
            <p>Data:{sumario.data}</p>
        </div>
    )
}

export default Sumario;