import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import "./privacy.scss";

const PrivacyPage = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {title: {eq: "Privacy Policy"}}) {
        frontmatter {
          title
          path
        }
        html
      }
    }
  `);


  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <div className="container">
        <section className="policySection">
          <h1>Privacy policy</h1>
          <h3>Your privacy is important to us. Read on to find out more about how we're protecting your data rights</h3>
          <p 
            className="privacyContent"
            dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
        </section>
      </div>
    </Layout>
  )
}

export default PrivacyPage;
