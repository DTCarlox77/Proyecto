import { Link } from 'react-router-dom'


export function Navigation() {
  return (
    <div className='main'>
        <h1>Commerce</h1>
        <div className="urls">
            <Link to='/'><button>Productos</button></Link>
            <Link to='/create'><button>Nuevo Producto</button></Link>
            <Link to=''><button>Iniciar sesión</button></Link>
        </div>
    </div>
  )
}