import { render, fireEvent } from "@testing-library/react"
import Counter from "./Counter"

describe(Counter, () => {

    it('Counter should display initital value of 0', () => {
        const { getByTestId } = render(<Counter init={0} />)
        const value = Number(getByTestId('count').textContent)

        expect(value).toEqual(0)
    })

    it('count should increment with 1 when the Plus button is pressed', () => {
         const { getByTestId, getByRole } = render(<Counter init={0} />)
         const button = getByRole('button', {name: 'PLUS'})
         
         fireEvent.click(button)         
         const value = Number(getByTestId('count').textContent)

         expect(value).toEqual(1)
    })

})