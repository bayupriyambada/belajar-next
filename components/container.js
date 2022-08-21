import Header from "./header"
import Footer from "./footer"

function Container( { children } ) {
  return (
    <>
      <Header/>
      <div className="flex mx-auto max-w-xl mt-4">
        {children}
      </div>
      <Footer/>
    </>
  )
}

export default Container