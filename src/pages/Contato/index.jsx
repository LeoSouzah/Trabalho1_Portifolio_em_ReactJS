import {Banner} from '../../components/Main'

export const Contato = () => {
    return(
        <>
        <Banner titulo="Contato - Site Pessoal" imagem="images/contatobanner.png"></Banner>
        <h1>Meus Contatos</h1>
        <div class="container">
            <div class="row">
                <div class="col">
                  <h3>Whatsapp</h3>
                  <h4>+55 (44) 9 99028911</h4>
                  <h3>Linkedin</h3>
                  <h4>Leonardo Pardinho de Souza</h4>
                  <h3>Instagram</h3>
                  <h4>@leo_pardinhoo</h4>
                  <h3>E-mail</h3>
                  <h4>leonardo.pardinho@hotmail.com</h4>
            </div>
                <div class="col">
                    <img src="images/iconescontatos.png" />
            </div>
            </div>
            </div>
        </>
    )
}