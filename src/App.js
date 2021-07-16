import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import  Sumario from './components/Sumarios'
import { useState,useEffect } from "react";
import Footer from './components/Footer'
import About from './components/About'
import AddSum from './components/AddSum'
// import { FaTasks } from 'react-icons/fa';
// import Sumarios from './components/Sumarios';

const App=()=> {
  const[showAddSumario,setShowAddSumario] = useState(false)
  const [sumarios, setSumarios] = useState([])

  useEffect(() =>{
    const getSumarios = async()=>{
      const sumariosfromserver = await fetchSumario()
      setSumarios(sumariosfromserver)
    }
    getSumarios();
  },[])

  //fetch sumarios
  const fetchSumario = async () => {
    const res = await fetch('http://localhost:3001/sumario')
    const data = await res.json()
    console.log(data)
    return data
  }

  //add Sumario
  const addSumario = async (sumario) =>{

    // const id = Math.floor(Math.random()*10000+1)
    // const newSumario = {id,...sumario}
    // setSumarios([...sumarios,newSumario])
    const res = await fetch('http://localhost:3001/sumario/new',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(sumario)
    })
    const data = await res.json()
    setSumarios([...sumarios,data])
  }

  //Open Sumario
  //Todo later
  //for now just console log the id of the item
  const openSumario = (id) =>{
    console.log('open',id)
  }

  //Delete Sumario
  const deleteSumario = async (id) => {
    await fetch(`http://localhost:3001/sumario/delete/${id}`,{
      method:'DELETE'
    })
    setSumarios(sumarios.filter((sumario)=>sumario.id!==id))
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={()=>setShowAddSumario(!showAddSumario)} showSumario={showAddSumario}/>
        {showAddSumario && <AddSum onAdd={addSumario}/>}
        <Route path='/' exact render={(props)=>(
            <>
            {sumarios.length > 0 ? <
              Sumario sumarios={sumarios}
              onDelete = {deleteSumario}
              onOpen={openSumario} /> : 'Sem sumarios Registados'}
            </>
          
        )}/>  
        <Route path='/about' component={About}/>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
