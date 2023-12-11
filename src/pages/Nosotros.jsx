import React from 'react'
import "../styles/nosotros.css"
function Nosotros() {
    return (<>
        <h1>Nosotros</h1>
        <div className='nosotros-container'>
            <div className="column-1">
                <div className="historia-container">
                    <h2 className="historia">
                        Nuestra Historia
                    </h2>
                    <div className="historia-description">
                        <p>
                            DENDRO S.A.C fue fundada en Lima, Perú en el año 2005. Desde sus inicios se concentró en el estudio y desarrollo de mejores técnicas de hidrosiembra así como la búsqueda de los mejores insumos.
                        </p>
                        <p>
                            Contamos con un equipo de colaboradores altamente preparados y nos regimos bajo una elevada gestión de procesos por lo que nuestro nivel de eficiencia es inmejorable. Ello se debe a que nuestro principal compromiso es recuperar el equilibrio ambiental, generando valor para todos los actores e instituciones relacionados a nuestra compañía.
                        </p>
                    </div>
                </div>
                <div className="mision-vision-container">
                    <h2 className='mision-vision'>
                        Misión y Visión
                    </h2>
                    <div className="mision-vision-description-container">
                        <p>
                            Satisfacer a nuestros clientes mediante soluciones integrales e innovadoras. Brindar productos de alta calidad, modernas tecnologías y un equipo de expertos. Ser referente en la venta de equipos e insumos para hidrosiembra y erosión de suelos. Nuestro nombre es sinónimo de confianza, innovación y experiencia.
                        </p>
                    </div>
                </div>
                <div className="valores-container">
                    <h2 className="valores">
                        Valores Empresariales
                    </h2>
                    <ul className='valores-list-container'>
                        <li className="valor-item">Innovación</li>
                        <li className="valor-item">Trabajo en equipo</li>
                        <li className="valor-item">Respeto y cuidado del medio ambiente</li>
                        <li className="valor-item">Compromiso</li>
                    </ul>
                </div>
            </div>
            <div className="column-2">
                <div className="img-container"><img src="/about_us_2.jpg" alt="Hidrosiembra en Gasoducto de PERU LNG" className="about-us-img" /></div>
                <div className="img-container"><img src="/about_us_1.jpg" alt="Proyecto de hidrosiembra en carretera Pumahuasi" className="about-us-img" /></div>
            </div>
            <div className="nosotros-bg"></div>
        </div>
    </>
    )
}

export default Nosotros