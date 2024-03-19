import "@/styles/globals.css"
import { Inter, Outfit } from "next/font/google"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",

  display: "swap",
})

export default function App({ Component, pageProps }) {
  return (
    <div>
      <style jsx global>{`
        html {
          font-family: ${outfit.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  )
}
