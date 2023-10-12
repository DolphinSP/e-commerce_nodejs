import { useState, createContext, useContext, useEffect } from "react";
import { getProductsRequest } from "../api/product";

const productContext = createContext();

export const useProducts = () => {

    const context = useContext(productContext);
    return context
}

export const ProductProvideer = ({children}) => {

    const [products, setProducts] = useState([])

    const getProducts = async() => {
        const res = await getProductsRequest()
        setProducts(res.data)

    }

    useEffect(()=>{
        getProducts()
        }, [])

    return (
    <productContext.Provider value={{
        products,
        setProducts,
        getProducts
    }}>
        {children}
    </productContext.Provider>
    
        )

}