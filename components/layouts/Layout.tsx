import Head from "next/head"
import { ReactNode } from 'react';
import { Navbar } from "../ui";

interface Props {
    children: ReactNode;
    title?: string;
}

const origin = ( typeof window === 'undefined' )? '' : window.location.origin; 

export const Layout = ({ children, title }: Props) => {
  return (
    <>
        <Head>
            <title>{title || "Pokemon App"} </title>
            <meta name="author"  content="Brayan Manco"/>
            <meta name="description"  content={`Información sobre el pokemo: ${title} `}/>
            <meta name="keywords"  content={`${title}. pokemon, pokedex `}/>


            <meta property="og:title" content={`informacio sobre: ${title}`} />
            <meta property="og:description" content={`Esta es la pagina sobre ${ title }`} />
            <meta property="og:image" content={`${ origin }/img/banner.png`} />
        </Head>

        {/* Navbar */}
        <Navbar/>

        <main style={{
            padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
