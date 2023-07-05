import React from "react";

import About from "../../components/AboutUs/About";
import Layout from "../../components/Layouts/Layout";

export default function AboutUs(props) {
  return (
    <div>
      <About />
    </div>
  );
}

AboutUs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
