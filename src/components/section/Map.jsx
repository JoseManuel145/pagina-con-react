import React from "react";
import map from '../../assets/mapa.jpg'

const Mapa = () => {
    return (
        <>
            <section id="map">
            <h2>Mapa de Arkham Knight</h2>
            <img src={map} alt="Mapa del Asilo Arkham"/>
            <p>Como puedes ver, el mapa es más grande comparado al de su antecesor, la única diferencia es que no puedes
                entrar a todos los edificios. Cabe recalcar que en esta entrega hacen un salto gráfico impresionante.</p>
            </section>
        </>
    )
}
export default Mapa