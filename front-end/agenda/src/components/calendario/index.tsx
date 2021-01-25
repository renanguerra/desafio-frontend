import React, {useEffect,useState} from 'react'
import axios from 'axios'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import './calendario.css'
import Swal from 'sweetalert2'


export default function Calendario() {
  const [eventos,setEventos] = useState<any[]>([])
  const [eventosData,setEventosData] = useState<any[]>([])


  var array:any = []

  useEffect(()  => { 
     axios.get('http://localhost:3000/events').then(response => {
        const data = response.data
        setEventos(data)
        })

},[]);  

useEffect(()  => {
     for (var i=0;i<eventos.length; i++){
       var dataTeste = {title:eventos[i].title,date:eventos[i].date};
       array.push(dataTeste)
     }
     setEventosData(array)

},[eventos]);


    return (
      <div className="main-calendar">
        <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin ]}
          initialView="dayGridWeek"
          eventClick={
            function(info) {
              const evento = {
                id: info.event.id,
                title: info.event.title,
                start: info.event.start,
                end: info.event.end
              }
              Swal.fire({
                title: `${evento.title}`,
                text: `${evento.start}
                        ${evento.end}`
              })
            }}
          events={eventosData}
          locale={'pt-br'}          
        />
      </div>
    )
  }
