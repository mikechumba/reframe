import "@/styles/globals.scss";
import { Space_Grotesk, Poppins } from "@next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ['variable'],
  subsets: ["latin"],
  variable: "--ff-space-grotesk",
});

const poppins = Poppins({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--ff-poppins",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
          :root {
            --ff-space-grotesk: ${spaceGrotesk.style.fontFamily};
            --ff-poppins: ${poppins.style.fontFamily};
          }
        `}</style>
      <Component {...pageProps} />
    </>
  );
}
