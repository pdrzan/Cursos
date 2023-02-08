import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'
import UserForm from './UserForm'
import UserTable from './UserTable'
const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar e Excluir!'
}
const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}
export default class UserCrud extends Component {
    state = { ...initialState }
    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }
    clear() {
        this.setState({ user: initialState.user })
    }
    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl 
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }
    getUpdatedList(user, add = true ) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }
    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }
    load(user) {
        this.setState({ user })
    }
    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }
    render() {
        return (
            <Main {...headerProps }>
                <UserForm label1="Nome" label2="Email" value1={this.state.user.name} value2={this.state.user.email} name1="name" name2="email" onChange1={e => this.updateField(e)} onChange2={e => this.updateField(e)} placeholder1="Digite o nome:" placeholder2="Digite o email:" onClick1={e => this.save()} onClick2={e => this.clear()} buttonText1="Salvar" buttonText2="Cancelar" />
                <UserTable list={this.state.list} onClick1={(user) => this.load(user)} onClick2={(user) => this.remove(user)} />
            </Main>
        )
    }
}