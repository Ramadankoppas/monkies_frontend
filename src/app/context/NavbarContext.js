/* eslint-disable react-hooks/set-state-in-effect */
'use client'
import React, { createContext, useContext } from "react";
import { usePathname } from "next/navigation";

const RouterContext = createContext();

export const NavProvider = ({ children }) => {
    const pathname = usePathname();
    const getActivePage = () => {
        if (pathname === "/") return "Home";
        if (pathname.startsWith("/services")) return "Services";
        if (pathname.startsWith("/about")) return "About";
        if (pathname.startsWith("/contact-us")) return "Contact";
        if (pathname.startsWith("/terms")) return "Terms & conditions";
        if (pathname.startsWith("/privacy")) return "Privacy policy";
        if (pathname.startsWith("/ai-services")) return "AI Service";
        if (pathname.startsWith("/projects")) return "Services";
        return "Home";
    };

    return (
        <RouterContext.Provider value={{ activePage: getActivePage() }}>
            {children}
        </RouterContext.Provider>
       
    );
};
export const metadata = {
  title: "Monkies",
  icons: {
    icon: "/assets/icons/logo_small.png",
  },
};

export const useRouterContext = () => useContext(RouterContext);