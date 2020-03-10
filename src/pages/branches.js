import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { BranchBanner } from "../components/banners/branchBanner";

const AboutPage = () => (
  <Layout>
    <SEO title="Branches" />
    <div className="container">
      <BranchBanner />
      <section className="branchSection">
        <div className="content">
          <p>Content placeholder</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default AboutPage;
