import { FaTools } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-gray-700 text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <FaTools className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>

        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link to='/listall' className='btn btn-ghost btn-sm rounded-btn'>
              List All
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
              About
            </Link>
            <Link to='/reserve' className='btn btn-ghost btn-sm rounded-btn'>
              Reserve now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Remnant Slab Finder',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
