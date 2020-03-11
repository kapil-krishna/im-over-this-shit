import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { ContactBanner } from "../components/banners/contactBanner";

const ContactUsPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <div className="container">
      <ContactBanner />
      <section className="contactSection">
        <div className="content">
          <h2>Get in touch using the form below</h2>
        </div>
      </section>
    </div>
  </Layout>
)

export default ContactUsPage;
