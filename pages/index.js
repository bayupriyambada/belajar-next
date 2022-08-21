import Header from '../components/header.js'
import Head from 'next/head'

function Index() {

  return (
    <div>
       <Head>
        <title>BIO-LINK</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header/>

    </div>
  )
}

export default Index
