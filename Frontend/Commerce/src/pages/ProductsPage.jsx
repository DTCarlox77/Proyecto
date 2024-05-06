import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
// UseEffect es para cargar o ejecutar una acción desde que se cargue la página.

import { getAllProducts } from '../api/Product.api'

export function ProductsPage() {

    const [Productos, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadProducts() {
            const response = await getAllProducts();
            setProduct(response.data);
        }

        loadProducts();
    }, []);

    return (
        // Renderización de los elementos obtenidos por la API, se utiliza map para iterar en cada elemento.
        <div className='product-page'>
            
            {Productos.map(producto => (
                <div key={ producto.id } className='product-itemp'>
                    <div className="product-image">
                        <img className='image-product' src="https://www.theharvardshop.com/cdn/shop/files/10788.jpg?v=1704212564" alt="" />
                    </div>
                    <div className="product-info">
                        <h2>{ producto.nombre }</h2>
                        <p>{ producto.descripcion } | { producto.fecha }</p>
                        <button onClick={ () => navigate('/product/'+producto.id)}>Comprar $ { producto.precio }</button>
                    </div>
                </div>
            ))}

        </div>
    )
}