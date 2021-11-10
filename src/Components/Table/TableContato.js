import React from 'react';

const TableContato = props => (
  
    <table className="responsive-table">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
            </tr>
        </thead>
    <tbody>
        {
            props.contatos.length > 0 ? (
                props.contatos.map (contato => (

                    <tr key={contato.id}>
                        <td>{contato.nome}</td>
                        <td>{contato.email}</td>
                        <td>{contato.telefone}</td>
                        <td className="center-align">
                            <button 
                                className="waves-effect waves-light btn-small"
                                onClick={() => props.editRow(contato)}>
                                edit
                            </button>

                            <button 
                                className="waves-effect waves-light btn-small red darken-4"
                                onClick={() => props.deletecontato(contato.id)}>
                                delete
                            </button>
                        </td> 
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>{props.contatos[0]} Nao ha contatos</td>
                    </tr>
                )
        }          
    </tbody>
  </table>
);
    
export default TableContato;