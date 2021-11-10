import React, { useState } from 'react';

const AddContatoForm = props => {

    const initialFormState = { nome: '', email: '', telefone: ''};
    const [contato, setContato] = useState(initialFormState);

    const handleInputChange = event => {
        const {nome, value} = event.target;

        setContato({ ...contato, [nome]: value });
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
                        <label htmlFor="nome"></label>
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
                        <label htmlFor="email"></label>
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
                        <label htmlFor="telefone"></label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field col s12">

                        <button className="waves-effect waves-light btn">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddContatoForm;