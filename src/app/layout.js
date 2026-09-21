import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavProvider } from "./context/NavbarContext";
import  Navbar  from "./components/navbar";
import { Footer } from "./components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Monkies</title>
      </head>
      <body>
        <NavProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </NavProvider>
      </body>
    </html>
  );
}
