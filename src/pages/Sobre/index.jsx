import {Banner} from '../../components/Main'

export const Sobre = () => {
    return(
        <>
        <Banner titulo="Sobre - Site Pessoal" imagem="images/sobrebanner.png"></Banner>
        <div class="container">
            <div class="row">
                <div class="col">
                <h1>Quem sou eu??</h1>
        <h4>Meu nome é Leonardo Pardinho de Souza tenho 19 anos e atualmente 
            estou cursando faculdade de Sistemas para Internet.
        </h4>
        <h5>  Sou dedicado e sempre focado no que faço, 
            tento sempre dar o meu melhor em qualquer aspecto.
              Pretendo focar meus estudos principalmente nas linguagens JavaScript 
            e suas versões como o REACT, quero aperfeiçoar minhas
            tecnicas de front-end onde minha maior satisfação é ver um site bonito,
            organizado e acima de tudo funcional.</h5>
        <h5>Algo lhe chamou atenção, me procura na aba Contatos.</h5>

            </div>
                <div class="col">
                <img id="linguas" src="images/linguas.png"/>
                </div>
            </div>
        </div>
        </>
    )
}