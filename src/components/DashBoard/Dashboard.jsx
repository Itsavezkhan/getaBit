import React from "react";
import CoverImage from "../CoverImage/CoverImage";
import Band from "../Band/Band";
import Layout from "../Layoutt/Layout";
import Profile from "../Profile/Profile";
import Header from "../header/Header";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col items-center overflow-hidden">
        <Header />
        <CoverImage />
        <Band />
        <Profile />
        <Layout />
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
