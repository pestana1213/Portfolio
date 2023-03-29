import Head from 'next/head'
import NavBar from '../components/NavBar' 
import Main from '../components/Main'
import About from '../components/About'

export default function Home() {
  return (
    <>
      <Head>
        <title>João Nogueira Portfolio</title>
        <meta name="description" content="This is the first version of this portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Main />
      <About />
    </>
  )
}
