import Header from './header';
import Footer from './footer';
import Head from 'next/head';

function Container({ children, title }) {
   return (
      <div className="bg-white min-h-screen">
         <Header />
         <Head>
            <title>{title}</title>
         </Head>
         <div className="flex mx-auto max-w-xl mt-4 px-5">{children}</div>
         <Footer />
      </div>
   );
}

export default Container;
