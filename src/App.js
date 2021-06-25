import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import  Sumario from './components/Sumarios'
import { useState } from "react";
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [sumarios, setSumarios] = useState([
    {
      id: 1,
      disciplina: 3,
      titulo: 'introduçao a programação em haskell',
      aula: 3,
      validate: true,
      data: '03/12/2021',
      descriçao: 'sintaxe funçoes e tipos',
    },
    {
      id: 2,
      disciplina: 3,
      titulo: 'haskell: programaçao funcional vs imperativa',
      aula: 4,
      validate: true,
      data: '07/12/2021',
      descriçao: 'Diferenças e vantagens e possiblidades',
    },
    {
      id: 3,
      disciplina: 1,
      titulo: ' introduçao aos Numeros complexos',
      aula: 1,
      validate: true,
      data: '6/12/2021',
      descriçao: 'parte real e parte imaginaria de um numero',
    },
    {
      id: 4,
      disciplina: 4,
      titulo: 'Transformadas Z',
      aula: 23,
      validate: false,
      data: '6/4/2021',
      descriçao: 'introduçao as transformadas Z',
    },
  ])


  //Open Sumario
  //Todo later
  //for now just console log the id of the item
  const openSumario = (id) =>{
    console.log('open',id)
  }

  //Delete Sumario
  //Todo later

  return (
    <Router>
      <div className="container">
        <Header/>
        
        <Route path='/' exact render={(props)=>(
            <>
            {sumarios.length > 0 ? <Sumario sumarios={sumarios}
              onOpen={openSumario} /> : 'Sem sumarios Registados'}
            </>
        
        )}/>  
        <Route path='/about' component={About}/>
        <Footer />
      </div>
    </Router>

    
  );
}

export default App;
