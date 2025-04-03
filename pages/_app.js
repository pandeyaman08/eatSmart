import UserState from '@/components/context/userState'
import '@/styles/globals.css'
import Footer from 'components/footer'
import Navbar from 'components/header/navbar'
import { defineCustomElements } from '@ionic/pwa-elements/loader';

export default function App({ Component, pageProps }) {
  
  return <UserState><Navbar /><Component {...pageProps} /><Footer/></UserState>
}

// defineCustomElements(window);
