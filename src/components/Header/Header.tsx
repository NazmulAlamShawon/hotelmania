import Link from 'next/link'
 




const Header = () => {
  return (
    <header className='py-10 px-4 container mx auto text-xl flex flex-wrap md:flex-nowrap'>
        <div className='flex items-center w-full md:h-2/3'>
          <Link href='/' className="font-black text-[#F27405]">Hotelmania</Link>
        </div>
        <ul className='flex items-center '>
               <li className='flex items-center'>
               <Link href="/" className="mr-5 text-[#F27405]">Home</Link>
               </li>
              <li>
              <Link href="/about" className="text-[#F27405] mr-5"> Menu</Link>
              </li>
              <li>
              <Link href="/about" className="text-[#F27405] mr-5">Order</Link>
              </li>
              <li>
              <Link href="/about" className="text-[#F27405] mr-5">Service</Link>
              </li>
              <li>
              <Link href="/about" className="text-[#F27405] mr-5">Login</Link>
              </li>
              <li>
              <Link href="/about" className="text-[#F27405]  ">Contact</Link>
              </li>
        </ul>
  
    </header>
  )
}

export default Header
