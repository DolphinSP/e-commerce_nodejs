import {useProducts} from "../context/productContext";

export function HomePage() {

const {products} = useProducts();



    return (

        <div>{products.map(product=>(<div key={product._id}>
{product.name}
{product.description}
{product.price}
{product.stock}

        </div>))}</div>

    )

}

