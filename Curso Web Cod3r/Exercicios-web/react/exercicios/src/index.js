import React from 'react'
import ReactDOM from 'react-dom'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
// Componente personalizados precisam começar com letra maiúscula
ReactDOM.render(
    <div>
        <Pai nome="Machado" sobrenome="de Assis">
            <Filho nome="João"/>
            <Filho nome="Maria"/>
            <Filho nome="Joana"/>
        </Pai>
    </div>, document.getElementById('root'))


// React 18
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(h1)