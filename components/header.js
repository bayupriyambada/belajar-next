import Link from 'next/link';

function Header() {
   return (
      <>
         <div className="font-cabin">
            <div className="flex max-w-xl bg-white p-4 mx-auto justify-between items-center">
               <div className="text-black text-2xl uppercase">
                  <Link href="/">
                     <a className="font-bold">BY.</a>
                  </Link>
               </div>
               <div className="button_download">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-6 w-6"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     stroke-width="2"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 8h16M4 16h16"
                     />
                  </svg>
               </div>
            </div>
         </div>
      </>
   );
}

export default Header;
