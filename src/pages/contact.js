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
          <p>If you have any comments, use the form below to get in touch</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default ContactUsPage;
