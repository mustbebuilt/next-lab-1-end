import Image from "next/image";
import Navbar from "./Components/Navbar";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='container'>
          <header>
            <Navbar />
            <h1>My Next Demo Page</h1>
            <div>
              <Image
                src='/images/building_cropped.jpg'
                width='800'
                height='200'
                alt=''
              />
            </div>
          </header>
          {children}
          <footer>
            <p>&copy; {new Date().getFullYear()}</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
