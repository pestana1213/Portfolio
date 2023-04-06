import Head from 'next/head'
import NavBar from '../components/NavBar' 
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import React, {useState} from "react";

export default function Home() {  
  const [nav, setNav] = useState(false); 

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
      <Skills />
    </>
  )
}
