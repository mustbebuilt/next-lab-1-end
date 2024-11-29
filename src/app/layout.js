import Navbar from './Components/Navbar'
import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='container'>
        <header>
       <Navbar />
          <h1>My Next Page</h1>
        </header>
        {children}
        </div>
        <footer>
        <p>&copy; {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}