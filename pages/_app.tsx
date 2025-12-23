import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "@/components/ui/provider"
import dynamic from "next/dynamic";
const GoogleMapsProvider = dynamic(() => import("@/components/maps/google-map-provider"), { ssr: false });
import "mapbox-gl/dist/mapbox-gl.css";


export default function App({ Component, pageProps }: AppProps) {

  return (
    <GoogleMapsProvider>
      <Provider >
        <Component {...pageProps} />
      </Provider>
    </GoogleMapsProvider>
  )
}
