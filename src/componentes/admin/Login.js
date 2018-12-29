import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { auth } from './../../firebase-config'

class Login extends Component {

    constructor(props) {
        super(props)
        this.email = null
        this.senha = null
        this.autenticaUsuario = this.autenticaUsuario.bind(this)

        this.state = {
            estaAutenticado: false,
            estaLogando: false,
            erro: false
        }

    }


    autenticaUsuario() {
        this.setState({ estaLogando: true, erro: false })
        auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
            .then(user => {
                console.log('Usuário logado')
                this.setState({ estaAutenticado: true })
            })
            .catch(err => {
                console.log('Erooooooou', err)
                this.setState({ erro: true, estaAutenticado: false })
            })
    }

    render() {
        if(this.state.estaAutenticado) {
            return <Redirect to='/admin' />
        }
        return (
            <div style={{ padding: '30px' }}>
                <h1> Login </h1>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Usuário" ref={ref => this.email = ref} />
                </div>
                <div className="form-group">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" className="form-control" id="senha" placeholder="Senha" ref={ref => this.senha = ref} />
                </div>
                {this.state.erro && <small id="emailHelp" class="form-text text-muted">Erro de autenticação. Usuário e/ou senha inválidos.</small>}
                <p></p>
                <button type="button" disable = {this.state.estaLogando} className="btn btn-primary" onClick={this.autenticaUsuario} >Login</button>

            </div>
        )
    }

}

export default Login 