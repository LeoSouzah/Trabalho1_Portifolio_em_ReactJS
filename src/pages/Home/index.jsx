
import {Banner} from '../../components/Main'


export const Home = () => {
    return(
        <>
        <Banner titulo="Home - Site Pessoal" imagem="images/homebanner.png"></Banner>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3>Olá meu nome é</h3>
                     <h1>Leonardo</h1>
                       <h2>Desenvolvedor de Sites em REACT/PHP.
                        Sou estudante da Faculdade Unialfa e estou no 4° Período cursando Sistemas para Internet.
                        </h2>
                    <h4>Venha conhecer meu trabalho!</h4>
            </div>
                <div class="col">
                     <img src="images/fotohome.png"/>
            </div>
     </div>
   </div>
        </>
    )
}