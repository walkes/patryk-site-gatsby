import React from 'react';
import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from '../components/Header';
import About from '../components/about';

export default function IndexPage() {
  return (
    <>
      <Header
        title="Patryk Pastewka"
        rootUrl="localhost:3000"
        currentUrl="localhost:3000"
        backgroundImage="/content/images/foto_patryk.png"
        pages={[
          { title: "O mnie", href: "/about" },
          { title: "Usługi", href: "/services" },
          { title: "Kontakt", href: "/contact" },
        ]} />
      <About />
      <Footer title="Test" columns={[
        {
          title: "Podstrony",
          links: [
            { name: "Główna", href: "/" },
            { name: "O mnie", href: "/about" },
            { name: "Dla Ciebie", href: "/services" },
            { name: "Kontakt", href: "/contact" },
          ]
        },
        {
          title: "Społeczność",
          links: [
            {
              name: "Facebook",
              href: "https://www.facebook.com/Patryk-Pastewka-Fizjoterapia-113658823608473",
              socialIcon: "Facebook"
            },
            {
              name: "Instagram",
              href: "https://www.instagram.com/tozalezyfizjo/",
              socialIcon: "Instagram"
            }
          ]
        }]} />
    </>
  );
}