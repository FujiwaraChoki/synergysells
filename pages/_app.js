import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import ScrollNavbar from '../components/ScrollNavbar';
import Footer from '../components/Footer';
import { ActiveTabContextProvider } from '../context/ActiveTab'

function App({ Component, pageProps }) {
  return (
    <ActiveTabContextProvider>
      <Head>
        <title>SynergySells</title>
      </Head>
      <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          {
            // Navbar
            (
              <Navbar />
            )
          }
          <Component {...pageProps} />
          {
            // This Bottom Navbar only shows when the User has scrolled down the page and the initial Navbar isn't visible anymore
            <ScrollNavbar />
          }
          {
            // Footer
            <Footer />
          }
        </div>
      </div>
    </ActiveTabContextProvider>
  )
}

export default App
