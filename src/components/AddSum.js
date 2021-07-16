import {useState} from 'react'

const AddSum = ({onAdd}) => {
    const [titulo,setTitulo] = useState('')
    //const [ano,setAno] = useState('')
    const [id_disciplina, setDisciplina] = useState('')
    const[validate,setValidate]=useState('')
    //const [docente, setDocente] = useState('')
    const [nr_aula, setNum_aula] = useState('')
    const [data, setData] = useState('')
    //const [curso, setCurso] = useState('')
    //const [tipo, setTipo] = useState('')
    //const [inicio, setInicio] = useState('')
    //const [fim, setFim] = useState('')
    const [descricao, setSumario] = useState('')


    const onSubmit = (e)=>{
        e.preventDefault()
        if(!titulo){
            alert('Favor introduzir titulo.')
            return
        }
        //onAdd({titulo,ano,disciplina,docente,num_aula,data,curso,tipo,inicio,fim,sumario})
        onAdd({ titulo, id_disciplina, nr_aula,validate,descricao,data})
        setTitulo('')
        //setAno('')
        setDisciplina('')
        //setDocente('')
        setNum_aula('')
        setData('')
        //setCurso('')
        //setTipo('')
        //setInicio('')
        //setFim('')
        setSumario('')
        setValidate('')

    }

    return (
        <form className = 'add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Disciplina</label>
                <input type='number' placeholder='id Disciplina(integer)' value={id_disciplina} onChange={(e) => setDisciplina(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Titulo</label>
                <input type='text' placeholder='Titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Numero da aula</label>
                <input type='number' placeholder='Aula nº' value={nr_aula} onChange={(e) => setNum_aula(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Data</label>
                <input type='Date'  value={data} onChange={(e) => setData(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Validate</label>
                <input type='number' placeholder='validate(0 ou 1)' value={validate} onChange={(e) => setValidate(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Descrição</label>
                <input type='text' placeholder='Descrição' value={descricao} onChange={(e) => setSumario(e.target.value)}/>
            </div>
            <input type='submit' value='Guardar' className='btn' style={{ color: 'green' }} />
            <input type='submit' value='Cancelar' className='btn' style={{ color: 'red' }}/>
        </form>
    )
}

export default AddSum
