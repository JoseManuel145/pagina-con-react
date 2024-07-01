import React from "react";
import batmobil from '../../assets/batmobile.jpg'
import catwoman from '../../assets/catwoman_Knight.jpg'
import nightwing from '../../assets/nightwing.jpg'
const Aliados = () => {
    return (
        <>
            <section id="allies">
                <h2>Mejoras</h2>
                <div class="ally">
                    <img src={batmobil} alt="Batimobil"/>
                        <div class="description">
                            <h3>Batmovil</h3>
                            <p>De manera única, el Batimóvil (diseñado por Lucius Fox) tenía la capacidad de transformarse,
                                sobre la marcha, en "Modo Batalla", lo que le daba la apariencia de un tanque de batalla, con
                                una distancia entre ejes más amplia y una mayor distancia al suelo. con varias armas y
                                capacidades de movimiento, incluida una ametralladora Vulcan, un cañón de 60 mm, misiles,
                                supresores de disturbios no letales, giro completo de la rueda de 360 grados y la capacidad de
                                ametrallar con propulsores incorporados. Los enemigos que tocaron el Batimóvil fueron noqueados
                                por una carga de electricidad. Otras características incluían un PEM para aturdir drones
                                hostiles y derribar misiles en el aire, un virus de drones; un dispositivo que permitía hackear
                                drones y volverse unos contra otros, y un Power Winch, para derribar paredes, o para permitir
                                que el Batimóvil actuara como contrapeso. En ese modo, el Batimóvil no podía viajar a su
                                velocidad máxima. Sin embargo, ganó la capacidad de moverse hacia los lados y en diagonal
                                indefinidamente, lo que le dio total maniobrabilidad y control para los tiroteos.</p>
                        </div>
                </div>
                <div class="ally">
                    <img src={catwoman} alt="Catwoman"/>
                        <div class="description">
                            <h3>Catwoman</h3>
                            <p>Selina Kyle, también conocida por su alias Catwoman, era una huérfana que aprendió a sobrevivir
                                en las calles de Gotham City. Se dedicó al robo para sobrevivir, pero estaba decidida a hacerlo
                                a su propio estilo. Aprendió artes marciales y entrenó extensamente para perfeccionar sus
                                propias habilidades en el robo de gatos. Sus actividades criminales a menudo se ven atenuadas
                                por un altruismo reacio, lo que la convierte en una villana inconstante y una heroína ocasional.
                                Roba objetos con nombres o motivos de felinos. Ella regularmente elude la captura del Caballero
                                Oscuro, y mantiene una relación complicada y conflictiva con Batman que con frecuencia se vuelve
                                coqueta y ocasionalmente romántica. A lo largo de los años, su relación se desarrolló hasta
                                convertirse en aliados cada vez más confiables.</p>
                        </div>
                </div>
                <div class="ally">
                    <img src={nightwing} alt="Nightwing"/>
                        <div class="description">
                            <h3>Nightwing</h3>
                            <p>Nightwing permaneció en la mansión Wayne durante los eventos de Arkham City, resguardándola de la
                                irrupción de cualquier intruso. Durante la activación del Protocolo 10, Hugo Strange envió a
                                muchos guardias TYGER a la propiedad con la misión de matar a los aliados de Batman y descubrir
                                más secretos. Sin embargo, auxiliado por Tim, Dick fue capaz de derrotar a los intrusos antes de
                                la llegada de la policía.</p>
                        </div>
                </div>
            </section>
        </>
    )
}
export default Aliados