import Head from 'next/head'
import Container from '../components/container'

function Index() {

  return (
    <div>
       <Head>
        <title>BIO-LINK</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
     <Container>
        Ini adalah index.js
      </Container>
      
    </div>
  )
}

export default Index
