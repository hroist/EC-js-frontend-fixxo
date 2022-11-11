import { render, fireEvent } from "@testing-library/react"
import ShoppingCartItem from "../components/ShoppingCartItem"
import { ShoppingCartProvider } from '../contexts/ShoppingCartContext'


describe(ShoppingCartItem, () => {
    const item = {product: { articleNumber: 1, name: "Autumn Dress", category: "Dresses", price: "$35.00", rating: 5, imageName: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}


    it('Counter should display initital value of 0', () => {
        const { getByTestId } = render(<ShoppingCartProvider><ShoppingCartItem item={item} /></ShoppingCartProvider>)
        const value = Number(getByTestId('quantity').textContent)

        expect(value).toEqual(0)
    })

    // it('count should increment with 1 when the Plus button is pressed', () => {
    //     const item = { articleNumber: 1, name: "Autumn Dress", category: "Dresses", price: "$35.00", rating: 5, imageName: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
    //     const { getByTestId } = render(<ShoppingCartProvider><ShoppingCartItem item={item} /></ShoppingCartProvider>)
    //      const button = getByRole('button', {name: '+'})
         
    //      fireEvent.click(button)         
    //      const value = Number(getByTestId('quantity').textContent)

    //      expect(value).toEqual(1)
    // })

})