import Head from 'next/head'
import Container from '../components/container.js'

function About() {

  return (
    <div>
       <Head>
        <title>BIO-LINK</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Container>
        Ini adalah About.js
      </Container>
    </div>
  )
}

export default About
