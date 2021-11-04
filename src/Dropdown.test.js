import { Dropdown } from "./Dropdown"
import { screen, render, userEvent } from "./tests/index"

const title = 'Selecione:'
const options = ['SAO', 'Mirai Nikki', 'Akame Ga Kill']

describe('Dropdown', () => {
    it('dropdown comece fechado', () => {
        render(
            <Dropdown
                title={title}
                options={options} 
                onSelect={() => {}} 
            />
        )

        expect(screen.queryByText(options[0])).not.toBeInTheDocument()
        expect(screen.queryByText(options[1])).not.toBeInTheDocument()
        expect(screen.queryByText(options[2])).not.toBeInTheDocument()
    });

    it('dropdown mostre as opcoes quando for clicado', () => {
        render(
            <Dropdown
                title={title}
                options={options} 
                onSelect={() => {}} 
            />
        )

        expect(screen.queryByText(options[0])).not.toBeInTheDocument()
        expect(screen.queryByText(options[1])).not.toBeInTheDocument()
        expect(screen.queryByText(options[2])).not.toBeInTheDocument()

        const dropdownButton = screen.getByRole('button', {name: title})

        userEvent.click(dropdownButton)

        expect(screen.getByRole('menuitem', { name: options[0] } )).toBeInTheDocument()
        expect(screen.getByRole('menuitem', { name: options[1] } )).toBeInTheDocument()
        expect(screen.getByRole('menuitem', { name: options[2] } )).toBeInTheDocument()
    })

    it('quando selecionar opcao, fechar o dropdown e indicar a opcao selecionada', () => {
        const onSelect = jest.fn()

        render(
            <Dropdown
                title={title}
                options={options} 
                onSelect={onSelect} 
            />
        );

        const dropdownButton = screen.getByRole('button', {name: title})

        userEvent.click(dropdownButton)

        const option1 = screen.getByRole('menuitem', { name: options[0] } )
        const option2 = screen.getByRole('menuitem', { name: options[1] } )
        const option3 = screen.getByRole('menuitem', { name: options[2] } )

        expect(option1).toBeInTheDocument()
        expect(option2).toBeInTheDocument()
        expect(option3).toBeInTheDocument()

        userEvent.click(option1)

        expect(onSelect).toHaveBeenCalledWith(options[0])

        expect(screen.queryByText(options[0])).not.toBeInTheDocument()
        expect(screen.queryByText(options[1])).not.toBeInTheDocument()
        expect(screen.queryByText(options[2])).not.toBeInTheDocument()
    })
})
