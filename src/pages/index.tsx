import React from 'react';
import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from '../components/Header';

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
      <Main
        quote={{
          content: "Patrzymy na ciało w zdrowiu jako na doskonałość i harmonię, nie w jednej części, ale w całości",
          author: "A.T. Still MD",
          source: "DO."
        }}
        content="Dobre samopoczucie i szczęście to wartości do których każdy z nas chce dążyć. Żyjąc w czasach, gdzie prześcigamy się w walce o stabilność i bezpieczeństwo zapominamy o własnym zdrowiu. To przede wszystkim zdrowie psychiczne i fizyczne warunkuje nasz dobrostan. Dlatego wyjdź ze strefy komfortu i daj się wprowadzić w świat, w którym zapomnisz o przewlekłym bólu kręgosłupa czy kolana, zaczniesz się wysypiać i odczuwać prawdziwą radość w życiu."
      />
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