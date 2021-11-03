import { Dropdown } from "./Dropdown";
import { screen, render, userEvent } from "./tests/index";


describe('Dropdown', () => {
    it('should start closed', () => {
        render(
            <Dropdown
                title="Selecione" 
                options={['SAO', 'Mirai Nikki', 'Akame Ga Kill']} 
                onSelect={() => {}} 
            />
        );

        expect(screen.queryByText('SAO')).not.toBeInTheDocument();
        expect(screen.queryByText('Mirai Nikki')).not.toBeInTheDocument();
        expect(screen.queryByText('Akame Ga Kill')).not.toBeInTheDocument();
    })
})
