import "./globals.css";
import Image from "next/image";
import { announcement } from "@/assets";

export const metadata = {
  title: "Shazam",
  description: "A clone of the shazam app, built with Next JS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href="https://fonts.googleapis.com"></link>
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </head>

      <body>
        <div className="children-container">{children}</div>
        <div className="alternative">
          <p className="alternative-text">Attention screen enthusiasts! For a wild and wacky experience, shrink the screen down - our site's got some small-screen shenanigans waiting for you!</p>
          <Image src={announcement} width={640}/>
        </div>
      </body>
    </html>
  );
}
