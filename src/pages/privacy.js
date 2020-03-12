import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./privacy.scss";

const PrivacyPage = () => {

  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <div className="container">
        <section className="policySection">
          <h2>Privacy policy</h2>
          <h3>Your privacy is important to us. Read on to find out more about how we're protecting your data rights</h3>
          <p>Some mumbo jumbo about taking this seriously even though we probably aren't</p>  
        </section>
      </div>
    </Layout>
  )
}

export default PrivacyPage;
