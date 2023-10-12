import { HomePage, NewProductPage, NotFound } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import { ProductProvideer } from "./context/productContext";



function App() {

    return (

        <ProductProvideer>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/new-product" element={<NewProductPage />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </ProductProvideer>
        
    )


}

export default App