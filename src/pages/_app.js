import '@/styles/globals.css'
import {Source_Sans_Pro} from "@next/font/google";
const sourcePro=Source_Sans_Pro({
  subsets:['greek'],
  weight:['400','700']
})
export default function App({ Component, pageProps }) {
  return( 
  <main className={sourcePro.className}>
  <Component {...pageProps} />
  </main>
  )
}
