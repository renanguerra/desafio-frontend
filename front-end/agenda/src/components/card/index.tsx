import React from 'react'

import './card.css'

interface CardProps{
    id: number,
    title: string,
    description: string,
    date: string,
    start: number,
    finish: number, 
}

 const Card: React.FC<CardProps> = (props) => {
     const horaInicio: any = props.start/60
     const horaFinal: any = props.finish/60
     var arredondadoInicio = parseInt(horaInicio);
     var arredondadoFinal = parseInt(horaFinal);


    return(
        <div className='card-main'>
            <header className='card-header'>
                <span>{props.title}</span>
            </header>

            <div className="card-body">
                <span>ID: {props.id}</span>
                <span>Descrição: {props.description}</span>
                <span>Data: {props.date}</span>
                <span>Começo às {arredondadoInicio} horas</span>
                <span>Termino às {arredondadoFinal} horas</span>
            </div>
           
        </div>
    )
}
export default Card