import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../utils/api";

const ProductContext = createContext();

export function useProductContext() {
    return useContext(ProductContext);
}

export function ProductProvider({ children }) {
    const [product, setProduct] = useState([]);
    const [initialProducts, setInitialProducts] = useState([]);

    useEffect(() => {
        axios(apiUrl + "products")
            .then((res) => {
                setProduct(res.data.products);
                setInitialProducts(res.data.products);
            })
            .catch((err) => console.log(err));
    }, []);



    return (
        <ProductContext.Provider value={{ product, setProduct, initialProducts, setInitialProducts }}>
            {children}
        </ProductContext.Provider>
    );
}