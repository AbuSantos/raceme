import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "@/components/ui/provider"
import GoogleMapsProvider from "@/components/maps/google-map-provider";


export default function App({ Component, pageProps }: AppProps) {

  return (
    <GoogleMapsProvider>
      <Provider >
        <Component {...pageProps} />
      </Provider>
    </GoogleMapsProvider>
  )
}
