import React from 'react'
function renderRows(list, onClick1, onClick2) {
    return list.map(user => {    
        return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => onClick1(user)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger ml-2" onClick={() => onClick2(user)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        )
    })
}
export default props => 
    <table className="table mt-4">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {renderRows(props.list, props.onClick1, props.onClick2)}
        </tbody>
    </table>