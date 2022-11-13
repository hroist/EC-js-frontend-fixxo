import { render, fireEvent, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import { ShoppingCartProvider } from '../contexts/ShoppingCartContext'
import { ProductProvider, products } from "../contexts/Contexts"


describe(ProductCard, () => {

    it('should display product information properly', () => {
        const { getByTestId } = render(
        <BrowserRouter>
            <ShoppingCartProvider>
                <ProductProvider>
                    <ProductCard item={products} />
                </ProductProvider>
            </ShoppingCartProvider>
        </BrowserRouter>)
        const value = Number(screen.getByTestId('quantity').textContent)

        expect(value).toEqual(0)
    })

    // it('should increase by 1 when clicking the + button', () => {
    //     const { getByTestId, getByRole } = render(<ShoppingCartProvider value={incrementQuantity}><ShoppingCartItem item={item} /></ShoppingCartProvider>)
    //     const value = Number(getByTestId('quantity').textContent)

    //     fireEvent.click(getByRole('button' , {name: '+'}))

    //     expect(value).toEqual(1)
    // })

    // it('count should increment with 1 when the Plus button is pressed', () => {
    //     const item = { articleNumber: 1, name: "Autumn Dress", category: "Dresses", price: "$35.00", rating: 5, imageName: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
    //     const { getByTestId } = render(<ShoppingCartProvider><ShoppingCartItem item={item} /></ShoppingCartProvider>)
    //      const button = getByRole('button', {name: '+'})
         
    //      fireEvent.click(button)         
    //      const value = Number(getByTestId('quantity').textContent)

    //      expect(value).toEqual(1)
    // })

})