import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Flow Media",
  description: "Portfolio",
   icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',  
    shortcut: '/favicon.ico'
  }
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
