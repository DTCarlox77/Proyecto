import { deleteProduct } from "../api/Product.api"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { queryProduct } from "../api/Product.api";

export function ProductPage(){

    const navigate = useNavigate();
    const params = useParams();

    console.log(params);

    const [Producto, tomarProducto] = useState([]);

    useEffect(() => {
        async function loadProduct() {
            const response = await queryProduct(params);
            tomarProducto(response.data);
        }
        loadProduct();
    }, [params]);

    return (
        <div>
            <h1>{ Producto.nombre }</h1>
            <p>{ Producto.descripcion }</p>
            <h4>Precio: $ { Producto.precio }</h4>
            <h3>¿Eliminar producto?</h3>
            <button
            onClick={async () => {await deleteProduct(params); navigate('/')} }>Eliminar</button>

            <h3>Comprar producto</h3>
            <button>Comprar</button>
        </div>
    )
}
