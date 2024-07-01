import '../info.css'
import Header from '../components/header/Header'
import Logo from '../components/logo/Logo'
import Footer from '../components/footer/Footer'
import Introduccion from '../components/section/Introduccion'
import Curiosidades from '../components/section/Curiosidades'
import Aliados from '../components/section/Aliados'
import Villanos from '../components/section/VIllanos'
import Mapa from '../components/section/Map'

function Info() {
    return (
        <>
            <Header></Header>
            <Logo></Logo>
            <main>
                <Introduccion></Introduccion>
                <Curiosidades></Curiosidades>
                <Aliados></Aliados>
                <Villanos></Villanos>
                <Mapa></Mapa>
            </main>
            <Footer></Footer>
        </>
    )
}
export default Info