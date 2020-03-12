import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

const ThanksPage = () => (
    <Layout>
      <SEO title="Thanks for applying" />
      <div className="container">
        <section className="thanksSection">
            <h3>Your application has been submitted</h3>
          <h2>Thanks for applying! We'll be in contact soon</h2>
        </section>
      </div>
    </Layout>
);

export default ThanksPage;
