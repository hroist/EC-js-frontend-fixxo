import { render, fireEvent } from "@testing-library/react"
import Topmenu from "../sections/Topmenu"
import { ShoppingCartProvider, cartQuantity, cartOpen, toggleShoppingCart } from '../contexts/ShoppingCartContext'
import { BrowserRouter } from "react-router-dom"


    describe(Topmenu, () => {

        it( 'should initiallyw be hidden', () => {
            const { getByTestId } = render(<BrowserRouter><ShoppingCartProvider><Topmenu /></ShoppingCartProvider></BrowserRouter>)

            const searchbox = getByTestId('searchbox')

            expect(searchbox).not.toBeVisible

        })
    })



    

