
function Head( { children } ) {
  return (
    <>
      <div className="flex mx-auto max-w-xl mt-4">
        {children}
      </div>
      <Footer/>
    </>
  )
}

export default Head