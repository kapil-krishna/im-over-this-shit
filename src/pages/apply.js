import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ApplicationForm from "../components/applicationForm";
import './apply.scss';

const ApplyPage = () => {

  return (
    <Layout>
      <SEO title="Apply" />
      <div className="container">
        <section className="formSection">
        <h1>Apply</h1>
        <p>Use the below form to apply for the programme</p>
        <div className="appForm">
         <ApplicationForm/>
        </div>
        </section>
      </div>
    </Layout>
  )
}

export default ApplyPage;
