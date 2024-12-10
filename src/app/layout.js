import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='container'>
          <header>
            <Navbar />
            <h1>My Next Demo Page</h1>
            <Banner />
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
