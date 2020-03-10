import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ApplicationForm from "../components/applicationForm";
import './apply.scss';
import { ApplyBanner } from "../components/banners/applyBanner";

const ApplyPage = () => {

  return (
    <Layout>
      <SEO title="Apply" />
      <div className="container">
        <ApplyBanner />
        <section className="formSection">
          <div className="content">
            <p>Interested? Apply using the form below and we'll be in touch</p>
          </div>
            <ApplicationForm/>
        </section>
      </div>
    </Layout>
  )
}

export default ApplyPage;
