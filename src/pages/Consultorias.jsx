import React from "react";
import  { useState } from 'react';
import '../styles/proyectos.css'
import consultorias from '../assets/data/consultorias'
function Consultorias() {
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
    return (
        <>
            <h1>Consultorias</h1>
            <div className="proyectos-container">
                {consultorias.map((year, i) => (<React.Fragment key={i}>
                    <button type="button" className="collapsible" id={year.year}
                        onClick={() => collapseContent(year.year, i)}
                    >AÑO {year.year}
                        <span>{activeButtons.includes(i) ? '-' : '+'}</span>
                    </button>
                    <div className="proyectos-description-container content hidden">
                        {year.projects.map((project, i) => (
                            <React.Fragment key={i}>
                                <h3>{project.title}</h3>
                                <div><strong>Fecha:</strong> {project.date}</div>
                                <div><strong>Ubicación:</strong> {project.location}</div>
                                <div><strong>Cliente:</strong> {project.client}</div>
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

export default Consultorias