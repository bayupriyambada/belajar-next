import Header from "./header"
import Footer from "./footer"
import Head from 'next/head'

function Container( { children, title } ) {
  return (
    <>
      <Header />
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex mx-auto max-w-xl mt-4">
        {children}
      </div>
      <Footer/>
    </>
  )
}

export default Container