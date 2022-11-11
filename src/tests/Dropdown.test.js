import { render, fireEvent, screen, configure } from "@testing-library/react"
import Dropdown from "../components/Dropdown"

describe( Dropdown, () => {

    it('should say "choose a color" initially', () => {
        const { getByTestId, getByText } = render(<Dropdown colors={["red", "blue"]} />)

        expect(screen.getByText("Choose a color")).toBeInTheDocument();

        // fireEvent.change(screen.getByTestId("dropdown"), {
        //   target: { value: "red" },
        // });

        // expect(screen.getByText("red")).toBeInTheDocument();

    })

})