import {useState} from 'react'

const AddSum = ({onAdd}) => {
    const [titulo,setTitulo] = useState('')
    const [ano,setAno] = useState('')
    const [disciplina, setDisciplina] = useState('')
    const [docente, setDocente] = useState('')
    const [num_aula, setNum_aula] = useState('')
    const [data, setData] = useState('')
    const [curso, setCurso] = useState('')
    const [tipo, setTipo] = useState('')
    const [inicio, setInicio] = useState('')
    const [fim, setFim] = useState('')
    const [sumario, setSumario] = useState('')


    const onSubmit = (e)=>{
        e.preventDefault()
        if(!titulo){
            alert('Favor introduzir titulo.')
            return
        }
        onAdd({titulo,ano,disciplina,docente,num_aula,data,curso,tipo,inicio,fim,sumario})
        setTitulo('')
        setAno('')
        setDisciplina('')
        setDocente('')
        setNum_aula('')
        setData('')
        setCurso('')
        setTipo('')
        setInicio('')
        setFim('')
        setSumario('')

    }

    return (
        <form className = 'add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Titulo</label>
                <input type='text' placeholder='Titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            </div>
            <div className = 'form-control'>
                <label>Ano</label>
                <input type = 'text' placeholder ='Ano' value={ano} onChange={(e)=>setAno(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Disciplina</label>
                <input type='text' placeholder='Disciplina' value={disciplina} onChange={(e) => setDisciplina(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Docente</label>
                <input type='text' placeholder='Nome do Docente' value={docente} onChange={(e) => setDocente(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Numero da aula</label>
                <input type='number' placeholder='Aula nº' value={num_aula} onChange={(e) => setNum_aula(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Data</label>
                <input type='date' placeholder='Data' value={data} onChange={(e) => setData(e.target.value)} />
            </div>
            <div className='form-control'> 
                <label>Curso(change this to dropdown)</label>
                <input type='text' placeholder='Curso' value={curso} onChange={(e) => setCurso(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Tipo (change this to dropdown)</label>
                <input type='text' placeholder='Tipo de aula' value={tipo} onChange={(e) => setTipo(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label for="appt">Hora de Inicio</label>
                <input type='time' id='appt' name='appt' min = '08:00' max = '18:00' required 
                    value={inicio} onChange={(e) => setInicio(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label for="appt">Hora de fim</label>
                <input type='time' id='appt' name='appt' min='08:00' max='18:00' required 
                    value={fim} onChange={(e) => setFim(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Sumario (Change to multiline textArea)</label>
                <input type='text' placeholder='Sumario' value={sumario} onChange={(e) => setSumario(e.target.value)}/>
            </div>
            <input type='submit' value='Guardar' className='btn' style={{ color: 'green' }} />
            <input type='submit' value='Cancelar' className='btn' style={{ color: 'red' }}/>
        </form>
    )
}

export default AddSum
