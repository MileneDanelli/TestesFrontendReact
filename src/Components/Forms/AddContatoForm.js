import React, { useState } from 'react';

const AddContatoForm = props => {
    const initialFormState = { nome: '', email: '', telefone: ''};
    const [contato, setContato] = useState(initialFormState);

    const handleInputChange = event => {
        const {name, value} = event.target;
        setContato({ ...contato, [name]: value });
    }

    const submitForm = event => {
        event.preventDefault();
        if (!contato.nome || !contato.email || !contato.telefone) return;
        props.addContato(contato);
        setContato(initialFormState);
    };

    return (
        <div className="row">
            <form className="col s12"
                onSubmit={submitForm}>
               <div className="row">
                    <div className="input-field col s12">
                        <input type="text" 
                            id={contato.id} 
                            name="nome"
                            value={contato.nome}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="nome">Nome:</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <input 
                            type="text" 
                            name="email" 
                            value={contato.email}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="email">Email:</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <input 
                            type="text" 
                            name="telefone" 
                            value={contato.telefone}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="telefone">Telefone:</label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field col s12">
                        <button id="btn-cadastrar" className="waves-effect waves-light btn cyan lighten-2">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddContatoForm;