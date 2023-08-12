import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Sobre from "views/IndexSections/sobre_mim";
import Carrosel from "views/IndexSections/carrosel.js";
import Equipe from "views/IndexSections/equipe.js";

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <Sobre />
          <Equipe />
          <Carrosel />
        </div>
        <Footer />
      </div>
    </>
  );
}
