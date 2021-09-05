import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

import {Home} from './pages/Home'
import {Sobre} from './pages/Sobre'
import {Curriculo} from './pages/Curriculo'
import {Contato} from './pages/Contato'
import {Header, Footer} from './components/Main'


export const Router = () => {
    return(
        <BrowserRouter>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap');
        </style>
        <Header></Header>
            <Switch>
                <Route path={['/','/home']} exact component={Home}></Route>

                <Route path='/sobre' component={Sobre}></Route>

                <Route path='/curriculo' component={Curriculo}></Route>

                <Route path='/contato' component={Contato}></Route>
            </Switch>
        <Footer></Footer>
        </BrowserRouter>
    )
}