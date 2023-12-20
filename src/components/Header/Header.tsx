import Link from 'next/link';
import {FaUserCircle} from 'react-icons/fa';


const Header = () => {
  return (
    <header className='py-10 px-4 container mx auto text-xl flex flex-wrap md:flex-nowrap'>
        <div className='flex items-center w-full md:h-2/3'>
          <Link href='/' className="font-black text-[#F27405]">Hotelmania</Link>
        </div>
        <ul className='flex items-center ml-5'>
               <li>
                  <Link href='/auth' className="cursorpointer"> 
                   <FaUserCircle />
                  </Link>
               </li>
        </ul>
  
    </header>
  )
}

export default Header
