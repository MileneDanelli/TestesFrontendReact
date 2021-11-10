import React, { Component } from 'react';
import qs from 'querystring';

import api from './api';

import TableContato from './Components/Table/TableContato';
import AddContatoForm from './Components/Forms/AddContatoForm';
import EditContatoForm from './Components/Forms/EditContatoForm';

class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contatos: [],
            currentContato: { id: null, nome: '', email: '', telefone: '' },
            editing: false
        }
    }

    componentDidMount() {
        this.refreshContatoTable();
    }

    refreshContatoTable() {
        this.contatosData = api.get('contatos')
            .then(response => response.data)
            .then(data => {
                this.setState({ 
                    contatos: data,
                    setContatos: data,
                });
            });
    }

    addContato = contato => {
        api.post('contatos', qs.stringify(contato))
            .then(res => {
                this.refreshContatoTable();
            });
    };

    deleteContato = id => {
        api.delete(`contatos/${id}`)
            .then(res => {
                this.refreshContatoTable();
            });
    };

    updateContato = (id, contato) => {
        api.put(`contatos/${id}`, qs.stringify(contato))
            .then(res => {
                this.refreshContatoTable();
            });
        this.setState({ 
            currentContato: { id: null, nome: '', email: '', telefone: '' }
        });
        this.setEditing(false);
    };

    editRow = contato => {
        this.setState({ 
            currentContato: { id: contato.id, nome: contato.nome, email: contato.email, telefone: contato.telefone }
        });
        this.setEditing(true);
    };

    setEditing = isEditing => {
        this.setState({ editing: isEditing });
    };

    render () {
        const { contatos } = this.state;
        return (
            <div className="container">
                <h3 id="title">Contatos</h3>
                <div className="row">
                    {
                        this.state.editing ? (
                            <div className="col s12 l6">
                                <h4>Editar Contato</h4>
                                <EditContatoForm 
                                    editing={this.state.editing}
                                    setEditing={this.setEditing}
                                    currentContato={this.state.currentContato}
                                    updateContato={this.updateContato} 
                                />
                            </div>
                        ) : (
                            <div className="col s12 l6">
                                <h4>Cadastrar Contato</h4>
                                <AddContatoForm addContato={this.addContato} />
                            </div>
                        )
                    }
                    
                    <div className="col s12 l6">
                        <h5>Contatos</h5>
                        <TableContato contatos={contatos} editRow={this.editRow} deleteContato={this.deleteContato} />
                    </div>
                </div>
            </div>
        );
    };
};

export default Lista;
