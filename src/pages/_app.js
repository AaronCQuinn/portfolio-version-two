import '@/styles/globals.css'
import { Montserrat } from 'next/font/google';
import Navbar from '@/compnents/Navbar';
import Head from 'next/head';
import '@/styles/checkmark.css'
import { ThemeContextProvider } from '@/context/ThemeContext';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})

/* A special component that acts as the top-level component for all pages in a Next application. 
It's responsible for initializing the pages with any necessary data and providing a common layout that is shared across all pages.

Some examples:
  Adding a common layout or header/footer that is shared across all pages
  Initializing global CSS styles or third-party libraries
  Fetching data that is shared across all pages and passing it down to child components
  Providing a custom error page or loading indicator
  Wrapping the entire application in a context provider for state management
*/

export default function App({ Component, pageProps }) {
  return (
    // Important 
    <>
      <Head>
        <title>Aaron Quinn | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${montserrat.variable} dark:bg-dark font-mont bg-light w-full min-h-screen`}>
        <ThemeContextProvider>
          <Navbar />
          <Component {...pageProps} />
        </ThemeContextProvider>
      </main>
    </>
  )
}
