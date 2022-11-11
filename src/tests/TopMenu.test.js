import { render, fireEvent, screen } from "@testing-library/react"
import Topmenu from "../sections/Topmenu"
import { ShoppingCartProvider } from '../contexts/ShoppingCartContext'
import { BrowserRouter } from "react-router-dom"


    describe(Topmenu, () => {

        it( 'should initially be hidden', () => {
            const { getByTestId, getAllByRole } = render(<BrowserRouter><ShoppingCartProvider><Topmenu /></ShoppingCartProvider></BrowserRouter>)

            const searchbox = getByTestId('searchbox')
            const close = getAllByRole("button", "name : X")

            expect(searchbox).not.toBeVisible
            expect(close).not.toBeVisible

        })

        it ('searchbox should appear when clicking the search-icon button', () => {
            const { getByTestId } = render(<BrowserRouter><ShoppingCartProvider><Topmenu /></ShoppingCartProvider></BrowserRouter>)

            const searchbox = getByTestId('searchbox')
            const button = screen.getByTestId('magni-glass')
            fireEvent.click(button) 
 
            expect(searchbox).not.toBeVisible

        })
    })



    

