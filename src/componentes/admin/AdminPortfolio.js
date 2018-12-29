import React, { Component } from 'react'

import base, { storage } from './../../firebase-config'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


class AdminPortfolio extends Component {
    constructor(props) {
        super(props)
        this.gravaPortfolio = this.gravaPortfolio.bind(this)
        this.state = {
            estaGravando: false
        }
    }

    gravaPortfolio(e) {
        const itemPortfolio = {
            titulo: this.titulo.value,
            descricao: this.descricao.value,
            imagem: this.imagem
        }
        this.setState({estaGravando: true})
        //console.log(this.titulo.value)
        //console.log(this.descricao.value)
        //console.log(this.imagem.value)

        const arquivo = itemPortfolio.imagem.files[0]
        //console.log(arquivo)
        const {name, size, type} = arquivo
        //console.log(name, size, type)

        const ref = storage.ref(name)
        ref.put(arquivo)
            .then(img => {
                img.ref.getDownloadURL()
                    .then(downloadURL => {
                        const novoPortfolio = {
                            titulo: itemPortfolio.titulo,
                            descricao: itemPortfolio.descricao,
                            imagem: downloadURL
                        }
                        console.log(novoPortfolio)
                        base.push('portifolio', {
                            data: novoPortfolio
                        })
                        this.setState({estaGravando: false})
                    })
            })

        e.preventDefault()
    }

    render() {

        if(this.state.estaGravando) {
            return (
                <div className="container">
                    <p> <span className="glyphicon glyphicon-refresh"></span> Aguarde...</p>
                </div>
            )
        }

        return (
            <div style={{padding: '30px'}}>
                <h2>Portfólio - Área Administrativa</h2>
                <div>
                    <form onSubmit={this.gravaPortfolio}>
                        <div className="form-group">
                            <label htmlFor="titulo">Título</label>
                            <div className="form-group">
                                <input type="text" className="form-control" id="titulo" aria-describedby="emailHelp" placeholder="Título..." ref={(ref) => this.titulo = ref} />
                            </div>
                        </div>
                        <div className="descricao">
                            <label htmlFor="descricao">Descrição</label>
                            <textarea  type="textarea" className="form-control" id="descricao" placeholder="Descrição..." ref={(ref) => this.descricao = ref}/>
                        </div>
                        <p></p>
                        <div className="arquivo">
                            <input type="file" className="custom-file-input" id="arquivo" ref={(ref) => this.imagem = ref}/>
                            <label className="custom-file-label" htmlFor="customFile">Escolher arquivo</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AdminPortfolio
