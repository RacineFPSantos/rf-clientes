import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md p-4'>
      <div className='container mx-auto'>
        <ul className='flex space-x-4'>
          <li>
            <Link to="/" className='text-blue-600'>Home</Link>
          </li>
          <li>
            <Link to="/restaurantes" className='text-blue-600'>Restaurantes</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;