import { render, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Dropdown from "../components/ui/Dropdown"

describe( Dropdown, () => {

    it('should say "choose a color" initially', () => {
        const { getByTestId } = render(<Dropdown colors={["red", "blue"]} />)

        expect(getByTestId("dropdown").textContent).toBe("Choose a color")

    })
    
    it('should state the chosen color when clicking on the color', () => {
        const { getByTestId, getByText } = render(<Dropdown colors={["red", "blue"]} />)

        fireEvent.click(getByTestId("dropdown"))
        userEvent.selectOptions(getByTestId('dropdown-options'), 'red')

        expect(getByText('red').selected).toBeTruthy()
        expect(getByText('blue').selected).toBeFalsy()


    })

})