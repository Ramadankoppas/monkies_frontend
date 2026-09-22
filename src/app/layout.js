import "./globals.css";
import { NavProvider } from "./context/NavbarContext";
import  Navbar  from "./components/navbar";
import { Footer } from "./components/footer";

export const metadata = {
  title: "Monkies",
  icons: {
    icon: { url: "/assets/icons/icon_small.png", type: "image/png" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
