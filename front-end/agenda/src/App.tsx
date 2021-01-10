import React,{useState,useEffect} from 'react';

import axios from 'axios'

import Calendario from '../src/components/calendario/index'
import Header from './components/header/index'
import BigCalendar from './components/bigcalendario/index'
import Card from './components/card/index'



function App() {
   const calendarioMostrar = Number(localStorage.getItem('key')) 
   const [data,setData] = useState<any[]>([])

  
   useEffect(()=>{
      axios.get('http://localhost:3000/events').then(response => {
        const data = response.data
        setData(data)
        })
   })


  switch (calendarioMostrar) {
    case 0:
      return(
        <div className="App">
          <Header/>
          <Calendario/>
        </div>
      )
    case 1:
      return(
        <div className="App">
          <Header/>
          <BigCalendar/>
        
        </div>
      )
      case 2:
      return(
        <div className="app">
          <Header/>

          <div className="card">
            {data.map(eventos => <Card
            id={eventos.id}
            title={eventos.title}
            description={eventos.description}
            date={eventos.date}
            start={eventos.start}
            finish={eventos.finish}
          />)}
          </div>
          
        </div>
      )
  }


  return (
      <Header/>

  );
}

export default App;
