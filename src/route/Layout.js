import React from "react";

import Header from "../components/layout/header/Header";
import Footer from "../components/layout/Footer";
import ModalNewClient from "../components/layout/ModalNewClient";
import ModalClientArea from "../components/layout/ModalClientArea";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ModalNewClient />
      <ModalClientArea />
    </>
  );
};

export default Layout;
