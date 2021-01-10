import React, {useEffect,useState} from 'react'
import axios from 'axios'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import './calendario.css'


export default function Calendario() {
  const [eventos,setEventos] = useState<any[]>([])
  const [eventosData,setEventosData] = useState<any[]>([])


  var array:any = []

  useEffect(()  => {
    
     axios.get('http://localhost:3000/events').then(response => {
        const data = response.data
        setEventos(data)
        })


        for (var i=0;i<eventos.length; i++){
          var dataTeste = {title:eventos[i].title,date:eventos[i].date};
          array.push(dataTeste)
          console.log(eventosData)
        }
        setEventosData(array)
        console.log(eventosData)

},[]);  


    return (
      <div className="main-calendar">
        <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin ]}
          initialView="dayGridWeek"
          eventClick={
            function(arg){
              alert(arg.event.title)
              alert(arg.event.start) 
            }
          }
          events={eventosData}
          locale={'pt-br'}          
        />
      </div>
    )
  }
