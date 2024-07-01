import React from "react";
import villano from '../../assets/arkham_knight.jpg'

const Villanos = () => {
    return (
        <>
            <section id="main-villain">
                <h2>El Villano Principal</h2>
                <img src={villano} alt="El Joker" class="main-villain-img" />
                <p>Algún tiempo después de los sucesos de Batman: Arkham Origins, Jason Todd, después de que Dick Grayson
                    decidiera hacerse una identidad propia, es elegido por Batman para ser el segundo Robin. Después de una
                    cantidad desconocida de tiempo, el Joker secuestró a Todd y le envió a Batman un video del supuesto
                    asesinato de Todd mientras que, en realidad, Todd estaba vivo y torturado por el Joker hace más de un
                    año en un ala abandonada en el Asilo Arkham. Esto aparece en escenas de flashback en el juego donde el
                    Joker destroza a Todd mentalmente, incluyendo mostrarle una foto de Batman y el nuevo Robin y diciéndole
                    que Batman ya lo había reemplazado.</p>
                <br />
                <p>Aunque parezca que el Caballero de Arkham sea el villano principal, en realidad es el Espantapájaros, ya
                    que desde un inicio amenaza toda Gotham City con una bomba de gas del miedo, y nuestro objetivo será
                    detenerlo. A lo largo del juego se nos complica a tal punto que la bomba sí llega a explotar y tenemos que usar el
                    Batmóvil para contrarrestar sus efectos negativos, y al final del juego ocurre una revelación que no deja de otra
                    alternativa al caballero de la noche que "fingir su muerte" destruyendo todo.</p>
            </section>
        </>
    )
}
export default Villanos