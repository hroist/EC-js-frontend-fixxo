import { render, fireEvent } from "@testing-library/react"
import Dropdown from "../components/ui/Dropdown"

describe( Dropdown, () => {

    it('should display "Choose a color" initially', () => {
        const { getByTestId } = render(<Dropdown colors={["red ", "blue"]} />)

        expect(getByTestId("dropdown").textContent).toBe("Choose a color")

    })
    
    it('should state the chosen color when clicking on the color', () => {
        const { getByTestId, getByText } = render(<Dropdown colors={["red", "blue"]} />)

        fireEvent.click(getByTestId("dropdown"))
        fireEvent.click(getByText("red"))

        expect(getByTestId("dropdown").textContent).toBe("red")
    })

})