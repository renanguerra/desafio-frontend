import { Calendar, momentLocalizer } from 'react-big-calendar'
import React,{useEffect,useState} from 'react'
import moment from 'moment'
import axios from 'axios'
import 'react-big-calendar/lib/css/react-big-calendar.css';



const localizer = momentLocalizer(moment)

moment.locale('pt-BR');

function BigCalendario() {
    const [eventos,setEventos] = useState<any[]>([])
    const [eventosData,setEventosData] = useState<any[]>([])

  var array:any = []

  useEffect(()  => {
     axios.get('http://localhost:3000/events').then(response => {
        const data = response.data
        setEventos(data)
        console.log(data)

        for (var i=0;i<eventos.length; i++){
          var dataMatriz =[eventos[i].date[0],eventos[i].date[1],eventos[i].date[2],eventos[i].date[3],
          eventos[i].date[5],eventos[i].date[6],eventos[i].date[8],eventos[i].date[9]]

          var anoEvento = Number(dataMatriz[0] + dataMatriz[1] + dataMatriz[2] + dataMatriz[3])
          var mesEvento = Number(dataMatriz[4] + dataMatriz[5])
          var diaEvento = Number(dataMatriz[6] + dataMatriz[7])

          console.log(dataMatriz)
          console.log(anoEvento)
          console.log(mesEvento)
          console.log(diaEvento)

          
          var dataTeste = {title:eventos[i].title,start:new Date(anoEvento,mesEvento,diaEvento),end:new Date(anoEvento,mesEvento,diaEvento)};
          //array.push({date:eventos[i].date,title:eventos[i].title})
          array.push(dataTeste)
          console.log(dataTeste)
        }
        setEventosData(array)
        console.log(array)
        })
},[]);  

    return(
    <div className='main-calendar'>
        <Calendar
        localizer={localizer}
        events={eventosData}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}

        />
    </div>
)
}

export default BigCalendario