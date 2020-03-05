import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactUsPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <div className="container">
      <section className="contactSection">
        <div className="title">
          <h1>Contact us</h1>
        </div>
        <div className="content">
          <p>If you have any comments, use the form below to get in touch</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default ContactUsPage;
