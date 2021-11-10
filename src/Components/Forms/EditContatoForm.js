import React, { useState, useEffect } from 'react';

const EditContatoForm = props => {
    const [contato, setContato] = useState(props.currentContato);

    const handleInputChange = event => {
        const { name, value } = event.target

        setContato({ ...contato, [name]: value })
    };

    const submitForm = event => {
        event.preventDefault();

        props.updateContato(contato.id, contato);
    };

    useEffect(() => {
        setContato(props.currentContato);
    }, [props]);

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
                    <div className="input-field col s12 m6">

                        <button className="waves-effect waves-light btn">Editar</button>
                    </div>

                    <div className="input-field col s12 m6">

                        <button 
                            className="waves-effect waves-light btn"
                            onClick={() => props.setEditing(false)}
                            >Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditContatoForm;