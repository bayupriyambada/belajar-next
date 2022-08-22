import ActiveLink from './router/routes';
function Footer() {
   return (
      <div className="md:max-w-xl w-full mx-auto z-10  mt-16 font-cabin">
         <div className="fixed bottom-2 py-4 w-full max-w-xl bg-white p-9">
            <div className="flex justify-between items-center ">
               <div>
                  <ActiveLink
                     href="/project"
                     className="text-sm font-bold text-white"
                  >
                     Project
                  </ActiveLink>
               </div>
               <div>
                  <ActiveLink href="/" className="text-sm font-bold text-white">
                     Working
                  </ActiveLink>
               </div>
               <div>
                  <ActiveLink href="/" className="text-sm font-bold text-white">
                     Home
                  </ActiveLink>
               </div>
               <div>
                  <ActiveLink
                     href="/education"
                     className="text-sm font-bold text-white"
                  >
                     Education
                  </ActiveLink>
               </div>
               <div>
                  <ActiveLink
                     href="/certification"
                     className="text-sm font-bold text-white"
                  >
                     Certification
                  </ActiveLink>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Footer;
