import { render, fireEvent } from "@testing-library/react"
import ShoppingCartItem from "../components/ShoppingCartItem"
import { ShoppingCartProvider } from '../contexts/ShoppingCartContext'
import { BrowserRouter } from 'react-router-dom';


describe(ShoppingCartItem, () => {

    const item = { product: {"articleNumber" : "1", "name" : "Autumn Dress", "category" : "Dresses", "price" : "$35.00", "rating" : "5" , "imageName" : "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} }

    const customRender = (children, { providerProps, ...renderOptions }) => {
        return render(
            <BrowserRouter>
                <ShoppingCartProvider {...providerProps}>
                    {children}
                </ShoppingCartProvider>
            </BrowserRouter>,
            renderOptions,
        )
    }    


    it('counter on shopping cart item should display initital value of 0', () => {
        const providerProps = item; 
        const { getByTestId } = customRender(<ShoppingCartItem item={item} />, { providerProps })
        const value = Number(getByTestId('quantity').textContent)

        expect(value).toEqual(0)
    })

    it('should increase by 1 when clicking the + button', () => {
        const providerProps = item; 
        const { getByTestId } = customRender(<ShoppingCartItem item={item} />, { providerProps })
        const value = Number(getByTestId('quantity').textContent)

        fireEvent.click(getByTestId('increment'))

        expect(value).toEqual(1)
    })



        //     fireEvent.click(getByRole('button' , {name: '+'}))

    //     expect(value).toEqual(1)

})

// describe(ShoppingCartItem, () => {

//     const item = {"articleNumber" : "1", "name" : "Autumn Dress", "category" : "Dresses", "price" : "$35.00", "rating" : "5" , "imageName" : "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }

//     const customRender = (children, { providerProps, ...renderOptions }) => {
//         return render(
//             <BrowserRouter>
//                 <ShoppingCartProvider {...providerProps}>
//                     {children}
//                 </ShoppingCartProvider>
//             </BrowserRouter>,
//             renderOptions,
//         )
//     }    


//     it('counter on shopping cart item should display initital value of 0', () => {
//         const providerProps = item; 
//         customRender(<ShoppingCartItem item={item} />, { providerProps })
//         const value = Number(getByTestId('quantity').textContent)

//         expect(value).toEqual(0)
//     })

    // it('should increase by 1 when clicking the + button', () => {
    //     const { getByTestId, getByRole } = render(<ShoppingCartProvider ><ShoppingCartItem item={item} /></ShoppingCartProvider>)
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

// })