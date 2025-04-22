import React from "react";

import Main from "../../compenent/Main/Main";
import Header from "../../compenent/Header/Header";
import Footer from "../../compenent/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="Header">
        <Header />
      </div>
      <div className="Main">
        <Main />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}
