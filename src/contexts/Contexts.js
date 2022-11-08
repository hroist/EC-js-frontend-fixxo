import { useState, useContext } from "react";
import { createContext } from "react";

const ProductContext = createContext()

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ({children}) => {

    const url = 'https://win22-webapi.azurewebsites.net/api/products'
    const [product, setProduct] = useState({})
    const [allProducts, setAllProducts] = useState([])
    const [featuredProducts, setFeaturedProducts] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])

    const fetchProduct = async (articleNumber) => {
        const result = await fetch(url + `/${articleNumber}`)
        setProduct(await result.json())
    }

    const fetchAllProducts = async () => {
        let result = await fetch(url)
        setAllProducts(await result.json())
    }

    const fetchFeaturedProducts = async (take = 8) => {
        let result = await fetch(url + `?take=${take}`);
        setFeaturedProducts(await result.json())
    }

    const fetchDisplayProducts = async (take = 4) => {
        let result = await fetch(url + `?take=${take}`);
        setDisplayProducts(await result.json())
    }

    return <ProductContext.Provider value={{product, allProducts, featuredProducts, displayProducts, fetchProduct, fetchAllProducts, fetchFeaturedProducts, fetchDisplayProducts }}>
        {children}
    </ProductContext.Provider>

}



