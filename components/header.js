import Link from 'next/link'

function Header() {
  return (
    <>
    <div className='bg-black px-5 py-4'>
      <div className='flex max-w-xl mx-auto justify-between items-center'>
        <div className='text-white text-2xl uppercase'>
          <Link href="/">
            <a>BIO</a>
          </Link>
        </div>
        <div className='bg-blue-500 text-sm px-5 py-1 text-white rounded-md cursor-pointer'>Download NextJS</div>
        
      </div>
    </div>
    </>
  )
}

export default Header;