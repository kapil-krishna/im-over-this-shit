import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="Branches" />
    <h1>Branches</h1>
    <p>Check out our branches below</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default AboutPage;
