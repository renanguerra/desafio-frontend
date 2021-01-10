import React from 'react'
import './header.css'

function Header() {
    function calendarioUm(){
        localStorage.setItem('key','0')
        window.location.reload()
    }

    function calendarioDois(){
        localStorage.setItem('key','1')
        window.location.reload()
    }

    function todoEventos(){
        localStorage.setItem('key','2')
        window.location.reload()
    }

    return(
        <div className="header">
            <h2 className='header-text'>Minha Agenda</h2>

            <section className='header-text-right'> 
                <span onClick={calendarioUm} className='header-bottons'>Calendario 1</span> 
                <span onClick={calendarioDois} className='header-bottons'>Calendario 2</span>
                <span onClick={todoEventos} className='header-bottons'>Ver todos os eventos</span>
                </section>
        </div>
    )
}

export default Header;