import React from 'react'
import Todo from './Todo'
import { render, waitFor, getByTestId, fireEvent, getByText } from "./tests/index"

describe('Tests for Todo Component', () => {
    it('Should add new task when form has been submitted', async () => {
        
        //renderiza o componente
        const {getByTestId, getByText} = render(<Todo />)
        
        //busca input
        const fieldNode = await waitFor(
            () => getByTestId('form-field')
        )
        const newTask = 'testing'

        //digita no input
        fireEvent.change(
            fieldNode,
            {target: { value: newTask }}
        )
        expect(fieldNode.value).toEqual(newTask)

        //busca botao
        const btnNode = await waitFor(
            () => getByTestId('form-btn')
        )

        //clica no botao
        fireEvent.click(btnNode)

        //busca tabela
        const tdNode = await waitFor(
            () => getByTestId(newTask)
        )

        //verifica se a tarefa foi add na tabela
        expect(tdNode).toBeDefined()  
    })
})