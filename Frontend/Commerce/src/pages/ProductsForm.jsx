import { useForm } from 'react-hook-form'
import { createNewProduct } from '../api/Product.api'
import { useNavigate } from 'react-router-dom';

export function ProductsForm() {

    const { register, handleSubmit, formState : {errors} } = useForm(); 

    const navigate = useNavigate();

    const onSubmit = handleSubmit(async data => {
        await createNewProduct(data);
        navigate('/');
    });

    return (
        <div className='form-div'>

            <form className='form-control' onSubmit={onSubmit}>

                <input className='form-input' type="text" placeholder="Nombre del producto"
                {...register('nombre', {required : true}) }
                />
                {errors.nombre && <span>Complete este campo.</span>}

                <input className='form-input' type="number" placeholder="Precio del producto"
                {...register('precio', {required : true}) }
                />
                {errors.precio && <span>Complete este campo.</span>}

                <textarea className='form-area' name="" id="" cols="30" rows="10" placeholder="Descripción del producto"
                {...register('descripcion', {required : false}) }></textarea>

                <button>Agregar producto</button>

            </form>
        </div>
    )
}