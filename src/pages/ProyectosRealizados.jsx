import React, { useState } from 'react'
import '../styles/proyectos.css'
import proyectos from '../assets/data/proyectos'
function ProyectosRealizados() {
    const [activeButtons, setActiveButtons] = useState([])
    const collapseContent = (buttonId, index) => {
        const button = document.getElementById(buttonId)
        button.classList.toggle('active')
        const content = button.nextSibling
        content.classList.toggle('hidden')
        if (activeButtons.includes(index)) {
            setActiveButtons(activeButtons.filter(i => i !== index))
        }
        else {
            setActiveButtons([...activeButtons, index])
        }
    }
    return (<>
        <h1>Proyectos Realizados</h1>
        <div className="intro-proyectos">
            <p>Estamos comprometidos con recuperar el equilibrio ambiental. Desde el 2005 venimos implementando soluciones ambientales en territorio nacional e internacional para proyectos mineros, petroleros y de construcción de infraestructura.</p>
            <p>Contamos con un equipo especializado en la realización de Hidrosiembra. Los conocimientos adquiridos, los insumos de alta calidad que se emplean y las experiencias obtenidas, nos han permitido consolidarnos como líderes en soluciones ambientales.</p>
            <p>Los servicios que ofrecemos al mercado han sido diversos y exitosos. Les presentamos nuestras experiencias de Hidrosiembra, revegetación, control de erosión y reforestación.</p><br />
        </div>
        <div className="proyectos-container">
            {proyectos.map((year, i) => (
                <React.Fragment key={year.year}>
                    <button type="button" className='collapsible' id={year.year} onClick={() => collapseContent(year.year, i)}>AÑO {year.year}<span>{activeButtons.includes(i) ? '-' : '+'}</span></button>
                    <div className='proyectos-description-container content hidden'>
                        {year.projects.map((element, i) => (<React.Fragment key={i}>
                            <h3>{element.title}</h3>
                            <div><strong>Fecha:</strong> {element.date}</div>
                            <div><strong>Área:</strong> {element.area}</div>
                            <div><strong>Ubicación:</strong> {element.location}</div>
                            <div><strong>Cliente:</strong> {element.client}</div>
                        </React.Fragment>
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </div>
        <div className="background"></div>
    </>
    )
}

export default ProyectosRealizados