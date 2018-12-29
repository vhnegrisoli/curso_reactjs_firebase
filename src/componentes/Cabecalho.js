import React from 'react'
import { Link } from 'react-router-dom'

const Cabecalho = props => {
  return (
    <div>
      <div className='jumbotron text-center'>
        <h1>Curso de React</h1>
        <p>Site desenvolvido para o curso de Front-End com ReactJS</p>
        <form>
          <div className='input-group'>
            <input type='email' className='form-control' size='50' placeholder='Email Address' required />
            <div className='input-group-btn'>
              <button type='button' className='btn btn-danger'>Subscribe</button>
            </div>
          </div>
        </form>
      </div>
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link className='navbar-brand' to = '/'>Logo</Link>
          </div>
          <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='nav navbar-nav navbar-right'>
              <li><Link to = '/'>Início</Link></li>
              <li><Link to = '/servicos'>Serviços</Link></li>
              <li><Link to = '/portfolio'>Portfólio</Link></li>
              <li><Link to = '/preco'>Preços</Link></li>
              <li><Link to = '/contato'>Contato</Link></li>
              <li><Link to = '/login'>Login</Link></li>
            </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Cabecalho;