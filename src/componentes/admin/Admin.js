import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { auth } from './../../firebase-config'

import AdminMenu from './AdminMenu'
import AdminPortfolio from './AdminPortfolio'


class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaAutenticado: false,
            estaLogando: true,
            user: null
        }

    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({
                estaLogando: false,
                estaAutenticado: !!user,
                user
            })
        })
    }

    render() {
        if (this.state.estaLogando) {
            return (
                <div className="container">
                    <p> <span className="glyphicon glyphicon-refresh"></span> Aguarde...</p>
                </div>
            )
        }
        if (!this.state.estaAutenticado) {
            return <Redirect to='/login' />
        }

        return (
            <div className="container">
                <h2> Administrativo</h2>
                <Route path={'/'} component={AdminMenu} />
                <Route path={`${this.props.match.url}/portfolio`} component={AdminPortfolio} />
            </div>

        )
    }
}

export default Admin