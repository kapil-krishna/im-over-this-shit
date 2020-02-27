import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ApplicationForm from "../components/applicationForm";

const ApplyPage = () => {

  return (
    <Layout>
      <SEO title="Apply" />
      <div className="container">
        <h1>Apply</h1>
        <p>Use the below form to apply for the programme</p>
        <div className="appForm">
         <ApplicationForm/>
        </div>
      </div>
    </Layout>
  )
}

export default ApplyPage;
