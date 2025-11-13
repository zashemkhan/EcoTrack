import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <section>
        <Header></Header>
      </section>
      <section className="bg-gradient-to-br from-green-100 to-blue-50 min-h-screen">
        <Outlet></Outlet>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Root;
