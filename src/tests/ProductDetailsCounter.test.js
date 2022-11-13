import { render, fireEvent, getByText } from "@testing-library/react"
import ProductDetails from "../sections/ProductDetails"
import { ShoppingCartProvider } from '../contexts/ShoppingCartContext'

describe(ProductDetails, () => {

    const testItem = { articleNumber: "1", name: "Autumn Dress", category: "Dresses", price: "$35.00", rating: "5", imageName: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}

    it("counter value should display 1 initially", () => {
        const { getByTestId } = render(<ShoppingCartProvider><ProductDetails item={testItem} /></ShoppingCartProvider>)

        const counter = Number(getByTestId("counter").textContent)

        expect(counter).toBe(1)

    })

    it(" counter value should increase by 1 when clicking the + button", () => {
        const { getByTestId, getByText } = render(<ShoppingCartProvider><ProductDetails item={testItem} /></ShoppingCartProvider>)

        fireEvent.click(getByText("+"))
        const counter = Number(getByTestId("counter").textContent) 

        expect(counter).toBe(2)

    })

    it("counter should display 0 as the lowest value (no negative values)", () => {
        const { getByTestId, getByText } = render(<ShoppingCartProvider><ProductDetails item={testItem} /></ShoppingCartProvider>)

        fireEvent.click(getByText("-"))
        fireEvent.click(getByText("-"))
        fireEvent.click(getByText("-"))
        const counter = Number(getByTestId("counter").textContent) 

        expect(counter).toBe(0)

    })

})

