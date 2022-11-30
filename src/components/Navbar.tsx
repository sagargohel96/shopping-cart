import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import '../index.css';
const Navbar = () => {
  return (
    <div className=' p-2  flex flex-row justify-between bg-slate-200 items-center  sticky top-0'>
      <div className='flex logo items-center ml-16 font-black text-xl'>
        Shopping-Cart
      </div>
      <div className=' flex-1 items-center text-xl mr-16'>
        <ul
          className='flex justify-around 
      '
        >
          <li className=' flex text-gray-800  font-bold hover:text-slate-500'>
            <Link to='/'>Home</Link>
          </li>
          <li className='flex  text-gray-800 font-bold hover:text-slate-500'>
            <Link to='/cart'>Cart</Link>
          </li>
          <li className='flex  text-gray-800 font-bold hover:text-slate-500'>
            <Link to='/confirmpage'>Confirmpage</Link>
          </li>
          <li>
            <div className='flex justify-center'>
              <div>
                <div className='dropdown relative'>
                  <button
                    className='
          dropdown-toggle
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        '
                    type='button'
                    id='dropdownMenuButton1'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Dropdown button
                    <svg
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fas'
                      data-icon='caret-down'
                      className='w-2 ml-2'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 320 512'
                    >
                      <path
                        fill='currentColor'
                        d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'
                      ></path>
                    </svg>
                  </button>
                  <ul
                    className='
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        '
                    aria-labelledby='dropdownMenuButton1'
                  >
                    <li>
                      <a
                        className='
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '
                        href='#'
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        className='
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '
                        href='#'
                      >
                        Another action
                      </a>
                    </li>
                    <li>
                      <a
                        className='
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '
                        href='#'
                      >
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className='flex items-center cursor-pointer'>
        <BsCart4 className='svgsize mr-16 ' />
      </div>
    </div>
  );
};

export default Navbar;
